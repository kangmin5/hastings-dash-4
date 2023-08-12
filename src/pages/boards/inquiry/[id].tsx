
import React from 'react'
import type { GetStaticProps, NextPage } from "next"
import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useAppDispatch } from 'custom-hooks'
import { Icon } from '@iconify/react'
// ** MUI Imports
import {
  Box,
  Button,
  IconButton,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TextField,
  Typography
} from '@mui/material'
import dynamic from 'next/dynamic';
import { InquiryBo } from 'app/boards/mo/inquiry-mo/inquiry-vo';
import { ArticleBuilder } from 'app/boards/atom/article-atom';
import { addInquiry, getInquiryById } from 'app/boards/org/inquiry-org/inquiry-thunk';
import { useRouter } from 'next/router';
import { BarBuilder } from 'app/boards/atom/bar-atom';
const Editor = dynamic(() => import('../notice-editor'), { ssr: false });
// import { DragDrop } from 'views'

// ** Images
// import dele from '/public/images/icons/ico-delete.svg'
// import square from '/public/images/icons/ico-square.svg'
// import { ReactComponent as Add } from '/public/images/icons/Add.svg'
// 해당 인터페이스는 컴포넌트 밖에 작성해주세요!
interface IFileTypes {
  id: number; // 파일들의 고유값 id
  object: File;
}
// ** customer-service / inquiry-operator / register-inquiry 1:1 문의 답변
export default function InquiryIdPage() {
  const router = useRouter();
  const { id } = router.query

  const [isChecked, setIsChecked] = React.useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<any> = (data) => {


    // let htmlString = "<p>Hello</p><a href='http://w3c.org'>W3C</a>"
    // let x1 = htmlStr.replace(/<[^>]+>/g, '');
    const cook = (htmlString: string) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(htmlString, 'text/html');

      return html.body;
    }

    const body = cook(htmlStr)

    const arr: string[] = []

    for (let i = 0; i < body.children.length; i++) {
      if (body.children[i].children[0] != undefined) {
        arr.push(body.children[i].children[0].getAttribute('src'))
      }
    }

    const isPinned = data.isPinned


    const expose = data.expose


    const isPosted = data.isPosted


    const title = data.article.title




    const art = new ArticleBuilder()
      .isPinned(isPinned)
      .expose(expose)
      .title(title)
      .isPosted(isPosted)
      .content(htmlStr)
      .build()


    const inquiry = new InquiryBo()
      .article(art)
      .build()


    dispatch(addInquiry(inquiry))

  }


  const [htmlStr, setHtmlStr] = React.useState<string>('');

  const roof = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (roof.current) {



      //roof.current.innerHTML = '<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>'
      //roof.current.innerHTML += htmlStr;
    }


  }, [htmlStr])

  const [files, setFiles] = React.useState<IFileTypes[]>([]);
  // ** next ReferenceError: window is not defined 해결 방법

  // 드래그 중일때와 아닐때의 스타일을 구분하기 위한 state 변수
  const [isDragging, setIsDragging] = React.useState<boolean>(false);

  // 각 선택했던 파일들의 고유값 id
  const fileId = React.useRef<number>(0);

  // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const dragRef = React.useRef<HTMLLabelElement | null>(null);


  const handleDragIn = React.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = React.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = React.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const onChangeFiles = React.useCallback((e: React.ChangeEvent<HTMLInputElement> | any): void => {
    let selectFiles: File[] = [];
    let tempFiles: IFileTypes[] = files;
    // temp 변수를 이용하여 선택했던 파일들을 담습니다.

    // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게 해줍니다.
    if (e.type === "drop") {
      // 드래그 앤 드롭 했을때
      selectFiles = e.dataTransfer.files;
    } else {
      // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
      selectFiles = e.target.files;
    }

    for (const file of selectFiles) {
      // 스프레드 연산자를 이용하여 기존에 있던 파일들을 복사하고, 선택했던 파일들을 append 해줍니다.
      tempFiles = [
        ...tempFiles,
        {
          id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값으로 사용합니다.
          object: file // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
        }
      ];
    }

    setFiles(tempFiles);
  }, [files]); // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

  const handleDrop = React.useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = React.useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = React.useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const handleFilterFile = React.useCallback((id: number): void => {
    // 매개변수로 받은 id와 일치하지 않는지에 따라서 filter 해줍니다.
    setFiles(files.filter((file: any) => file.id !== id));
  }, [files]);

  React.useEffect(() => {
    const { id } = router.query
    if (typeof id === 'string') {
       console.log(' URL 로 넘어온 ID 는 ', id, ' 입니다')
       const a = new InquiryBo().bar(new BarBuilder().id(id).build()).build()
       dispatch(getInquiryById(a))
    }else{
      console.log(' URL 로 넘어온 ID 가 없습니다. ')
    }


  }, [dispatch, router.query]);

  React.useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);


  return (
    <>
      <Card className='register-box'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='h3-back-styled'>
            <h3>1:1 질문 등록</h3>
          </div>
          <div className='tbl-write type3'>
            <Table>
              <caption>1:1 질문 등록</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>문의여부</th>
                  <td>
                    <div className='form-wrap'>
                      <Select sx={{ width: '11.25rem' }} defaultValue='0'>
                        <MenuItem value='0'>선택</MenuItem>
                        <MenuItem value='1'>사이트이용</MenuItem>
                        <MenuItem value='2'>시스템오류</MenuItem>
                        <MenuItem value='4'>회원</MenuItem>
                        <MenuItem value='5'>상품</MenuItem>
                        <MenuItem value='6'>배송</MenuItem>
                        <MenuItem value='7'>취소/교환/환불</MenuItem>
                        <MenuItem value='8'>대량구매</MenuItem>
                        <MenuItem value='9'>이벤트/쿠폰/적립금</MenuItem>
                        <MenuItem value='10'>기타</MenuItem>
                      </Select>
                      <Button variant='outlined' size='small' color='info' className='icon'>
                        {/* <Add /> */}
                        <i className='add' />
                        문의유형 추가
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='posting' label='게시' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='unpublished' control={<Radio />} label='미게시' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>질문 </th>
                  <td>
                    <div className='form-wrap'>
                      <TextField sx={{ width: '45rem' }} {...register("First name", { required: true, maxLength: 80 })} />
                      <FormControlLabel
                        value='fixed'
                        label='게시글 등록순서 고정'
                        labelPlacement='end'
                        control={<Checkbox />}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>답변</span>
                  </th>
                  <td>
                    <div className='editor-inline-box'>
                      <EditorContainer>
                        <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
                      </EditorContainer>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>첨부파일</span>

                  </th>
                  <td> <div style={{ color: 'rgba(58, 53, 65, 0.24)', marginBottom: '16.9px' }}>
                    <input
                      type="file"
                      id="fileUpload"
                      style={{ display: "none" }} // label을 이용하여 구현하기에 없애줌
                      multiple={true} // 파일 다중선택 허용
                    />

                    <label
                      className={isDragging ? "fcc-DragDrop-File-Dragging" : "fcc-DragDrop-File"}
                      // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이

                      htmlFor="fileUpload"
                      ref={dragRef}
                    >


                      <Icon fontSize={50} icon='octicon:file-directory-open-fill-16' />

                      <div className='Image-label'>
                        <Typography>- 10MB 이하의 이미지만 업로드 가능합니다.</Typography>
                        <Typography>- 파일형식 : gif,jpg,png,pdf,excel,docx</Typography>
                        <Typography>- 업로드할 파일을 한꺼번에 드래그해서 해당 영역에 올려주세요.</Typography>
                      </div>
                    </label></div>


                    <div className="fcc-DragDrop-Files">
                      {files.length > 0 &&
                        files.map((file: IFileTypes) => {
                          const {
                            id,
                            object: { name }
                          } = file;

                          return (
                            <div key={id}>
                              <div>{name}</div>
                              <div
                                className="DragDrop-Files-Filter"
                                onClick={() => handleFilterFile(id)}
                              // onClick 속성에 위처럼 함수를 추가시켜 줍니다.
                              >
                                X
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>

                    <div className='btn-align' style={{ float: 'left' }}>

                      <Button variant='outlined' size='large' color='primary'
                        style={{ width: '350px' }}
                        onClick={() => reset()}>
                        취소
                      </Button>
                      <Button variant='contained' size='large' color='success'
                        style={{ width: '350px' }}
                        onClick={() => alert()}>
                        등록
                      </Button>
                    </div>
                  </td>
                </tr>
              </TableBody>
            </Table>
          </div>


        </form>
      </Card>
    </>
  )
}
const EditorContainer = styled.div`
    width: 100%;
    height: 400px;

    margin: 0 auto;
`;

const Contents = {
  Container: styled.div`
        width: 1200px;

        margin: 0 auto;

        display: flex;
        gap: 40px;

        & > div {
            width: 600px;

            padding: 16px;

            box-sizing: border-box;
        }
    `,

  HtmlContainer: styled.div`
        border: 2px solid orange;
    `,

  ViewContainer: styled.div`
        border: 2px solid olive;

        // quill에서 가운데 정렬을 한 경우
        .ql-align-center {
            text-align: center;
        }

        // quill에서 코드 블럭을 사용한 경우
        .ql-syntax {
            background-color: #23241f;
            color: #f8f8f2;
            border-radius: 3px;
            padding: 5px;
            margin: 0 10px;
        }
    `,
}
