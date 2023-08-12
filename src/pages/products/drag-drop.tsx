
import React from 'react'

// ** MUI Imports
import { IconButton, Typography } from '@mui/material'

// ** Third Party Imports
import { arrayMoveImmutable } from 'array-move'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'

// ** Components Imports
import { AutoAlert } from 'app/utils/org/alert-org'

// ** Images
import { ReactComponent as Square } from '/public/images/icons/ico-square.svg'
import { ReactComponent as Delete } from '/public/images/icons/ico-delete.svg'
import { Icon } from '@iconify/react'

export default function DragDrop() {
  const [isDragging, setIsDragging] = React.useState(false)
  const [files, setFiles] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState('')
  const dragRef = React.useRef(null)
  const fileId = React.useRef(0)
  const fileInputRef = React.useRef(null)

  const onChangeFiles = React.useCallback(function (event: any) {
    let selectedFiles = []
    const tempFiles = []
    setFiles([])

    if (event.type === 'drop') {
      selectedFiles = event.dataTransfer.files
    } else {
      selectedFiles = event.target.files
    }

    for (const file of selectedFiles) {
      // validate file type
      const fileType = file.type.split('/')[1]
      const allowedFileTypes = ['gif', 'jpg', 'jpeg', 'png', 'pdf', 'xlsx', 'xls', 'docx', 'doc']
      if (!allowedFileTypes.includes(fileType)) {
        setErrorMessage('첨부파일 형식을 확인해주세요.')

        continue
      }

      // validate file size
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('10MB 이하 용량만 첨부 가능합니다.')
        continue
      }

      // setFiles(prev => [...prev, { id: fileId.current++, object: file }])
    }

    console.log('###### files', files)

    // console.log('###### tempFiles', tempFiles)
    // setFiles(tempFiles)`
  },
    [files]
  )

  const handleFilterFile = React.useCallback(function (id: string) {
    setFiles(files.filter(file => file.id !== id))
  },
    [files]
  )

  const handleDragIn = React.useCallback(function (event: any) {
    event.preventDefault()
    event.stopPropagation()
  }, [])

  const handleDragOut = React.useCallback(function (event: any) {
    event.preventDefault()
    event.stopPropagation()

    setIsDragging(false)
  }, [])

  const handleDragOver = React.useCallback(function (event: any) {
    event.preventDefault()
    event.stopPropagation()

    if (event.dataTransfer?.files) {
      setIsDragging(true)
    }
  }, [])

  const handleDrop = React.useCallback(function (event: any) {
    event.preventDefault()
    event.stopPropagation()

    onChangeFiles(event)
    setIsDragging(false)

    const droppedFiles = [...event.dataTransfer.files]
  },
    [onChangeFiles]
  )

  const initDragEvents = React.useCallback(function (event: any) {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn)
      dragRef.current.addEventListener('dragleave', handleDragOut)
      dragRef.current.addEventListener('dragover', handleDragOver)
      dragRef.current.addEventListener('drop', handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  const resetDragEvents = React.useCallback(function () {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn)
      dragRef.current.removeEventListener('dragleave', handleDragOut)
      dragRef.current.removeEventListener('dragover', handleDragOver)
      dragRef.current.removeEventListener('drop', handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  // sortable-hoc
  const DragHandle = SortableHandle(() => (
    <IconButton size='small'>
      {/* <Image src={square} alt='' /> */}
      <Square />
    </IconButton>
  ))

  const SortableItem = SortableElement(
    function ({ value }: { value: any }) {
      return (
        <div key={value.id}>
          <div>{value.object.name}</div>
          <div className='Filter-box'>
            <DragHandle />
            <div className='DragDrop-Files-Filter' onClick={() => handleFilterFile(value.id)}>
              <IconButton size='small'>
                {/* <Image src={dele} alt='' /> */}
                <Delete />
              </IconButton>
            </div>
          </div>
        </div>
      )
    })

  const onSortEnd = function ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) {
    setFiles(prevItem => arrayMoveImmutable(prevItem, oldIndex, newIndex))
  }

  const SortableList = SortableContainer(
    function ({ items }: { items: any }) {
      return (
        <div className='DragDrop-Files'>
          {items.map((value: any, index: number) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </div>
      )
    })

  const resetErrorMessage = function () {
    fileInputRef.current.value = ''
    setErrorMessage(null)
  }

  React.useEffect(() => {
    initDragEvents()

    return () => resetDragEvents()
  }, [initDragEvents, resetDragEvents])

  return (
    <div className='DragDrop'>
      <input
        type='file'
        id='fileUpload'
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple={true}
        onChange={onChangeFiles}
      />

      <label className={isDragging ? 'DragDrop-File-Dragging' : 'DragDrop-File'} htmlFor='fileUpload' ref={dragRef}>
        <div style={{ color: 'rgba(58, 53, 65, 0.24)', marginBottom: '16.9px' }}>
          <Icon fontSize={50} icon='octicon:file-directory-open-fill-16' />
        </div>
        <div className='Image-label'>
          <Typography>- 10MB 이하의 이미지만 업로드 가능합니다.</Typography>
          <Typography>- 파일형식 : gif,jpg,png,pdf,excel,docx</Typography>
          <Typography>- 업로드할 파일을 한꺼번에 드래그해서 해당 영역에 올려주세요.</Typography>
        </div>
      </label>

      {files.length > 0 && <SortableList items={files} useDragHandle={true} onSortEnd={onSortEnd} />}
      {errorMessage && <AutoAlert content={errorMessage} resetMessage={resetErrorMessage} />}
    </div>
  )
}
