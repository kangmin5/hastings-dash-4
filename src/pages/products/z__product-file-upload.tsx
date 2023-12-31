// // ** React Imports
// import { Fragment, useState } from 'react'

// // ** Next Import
// import Link from 'next/link'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import Button from '@mui/material/Button'
// import ListItem from '@mui/material/ListItem'
// import { styled } from '@mui/material/styles'
// import IconButton from '@mui/material/IconButton'
// import Typography, { TypographyProps } from '@mui/material/Typography'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Third Party Imports
// import { useDropzone } from 'react-dropzone'

// interface FileProp {
//   name: string
//   type: string
//   size: number
// }

// // Styled component for the upload image inside the dropzone area
// const Img = styled('img')(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     marginRight: theme.spacing(15.75)
//   },
//   [theme.breakpoints.down('md')]: {
//     marginBottom: theme.spacing(4)
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: 160
//   }
// }))

// // Styled component for the heading inside the dropzone area
// const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
//   marginBottom: theme.spacing(5),
//   [theme.breakpoints.down('sm')]: {
//     marginBottom: theme.spacing(4)
//   }
// }))

// const FileUploaderMultiple = () => {
//   // ** State
//   const [files, setFiles] = useState<File[]>([])

//   // ** Hooks
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles: File[]) => {
//       setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
//     }
//   })

//   const renderFilePreview = (file: FileProp) => {
//     if (file.type.startsWith('image')) {
//       return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
//     } else {
//       return <Icon icon='mdi:file-document-outline' />
//     }
//   }

//   const handleRemoveFile = (file: FileProp) => {
//     const uploadedFiles = files
//     const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
//     setFiles([...filtered])
//   }

//   const fileList = files.map((file: FileProp) => (
//     <ListItem key={file.name}>
//       <div className='file-details'>
//         <div className='file-preview'>{renderFilePreview(file)}</div>
//         <div>
//           <Typography className='file-name'>{file.name}</Typography>
//           <Typography className='file-size' variant='body2'>
//             {Math.round(file.size / 100) / 10 > 1000}
//           </Typography>
//         </div>
//       </div>
//       <IconButton onClick={() => handleRemoveFile(file)}>
//         <Icon icon='mdi:close' fontSize={20} />
//       </IconButton>
//     </ListItem>
//   ))

//   const handleRemoveAllFiles = () => {
//     setFiles([])
//   }

//   return (
//     <Fragment>
//       <div {...getRootProps({ className: 'dropzone' })}>
//         <input {...getInputProps()} />
//         <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
//           <Img
//             alt='Upload img'
//             src='/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/misc/upload.png'
//           />
//           <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
//             <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>
//             <Typography color='textSecondary' sx={{ '& a': { color: 'primary.main', textDecoration: 'none' } }}>
//               Drop files here or click{' '}
//               <Link href='/' onClick={e => e.preventDefault()}>
//                 browse
//               </Link>{' '}
//               thorough your machine
//             </Typography>
//           </Box>
//         </Box>
//       </div>
//       {files.length ? (
//         <Fragment>
//           <List>{fileList}</List>
//           <div className='buttons'>
//             <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
//               Remove All
//             </Button>
//             <Button variant='contained'>Upload Files</Button>
//           </div>
//         </Fragment>
//       ) : null}
//     </Fragment>
//   )
// }

// export default FileUploaderMultiple
