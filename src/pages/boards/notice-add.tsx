// ** React Imports
import React, { useCallback } from 'react'
import type { GetStaticProps, NextPage } from "next"
import dynamic from 'next/dynamic';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { z } from 'zod'
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TextField,
  Typography
} from '@mui/material'
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EditorControlled from 'views/forms/form-elements/editor/EditorControlled'
import { convertToRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill from 'react-quill';  // ssr 설정을 위해 주석처리
import "draft-js/dist/Draft.css";
//import draftToHtml from "draftjs-to-html";
import { NoticeBo, NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
const Editor = dynamic(() => import('./notice-editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정
import { useAppDispatch } from 'custom-hooks'
import axios from 'axios';
import { RangeStatic } from 'quill';
import { NoticeUrl as url } from 'app/boards/org/notice-org/notice-union'
import { SubmitButton } from 'app/valves/temp/button-temp/submit-button';
import { addNotice } from 'app/boards/org/notice-org/notice-thunk';
import { ArticleBuilder } from 'app/boards/atom/article-atom';
import { AttachBuilder } from 'app/boards/atom/attach-atom';
import { TimeAtom, TimeBuilder } from 'app/utils/atom/time-atom';
import { DateMap } from 'app/utils/atom/date-atom';
import Link from 'next/link';
// ** Editor Imports
// import dynamic from 'next/dynamic'

// ** Components Imports
// import { DragDrop } from 'views'

// ** 016. customer-service / messenger / register-notice 공지사항 등록
const NoticeAddPage: NextPage = () => {
  // ** next ReferenceError: window is not defined 해결 방법
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = React.useState(false)


  const Zoo: any = z.object({
    bizName: z.string().min(1, "회사 이름은 1글자 이상이어야 합니다."),
    ceo: z.string().min(1, "대표자 이름은 1글자 이상이어야 합니다."),
    bizNo: z.string().min(1, "사업자 등록번호는 중복체크를 해주세요."),
    corpNo: z.string().min(1, "법인 등록번호는 1글자 이상이어야 합니다."),
    bizKind: z.string().min(1, "업태는 1글자 이상이어야 합니다."),
    bizItem: z.string().min(1, "법인 등록번호는 1글자 이상이어야 합니다."),

    userId: z.string().min(1, "사용자아이디는 1글자 이상이어야 합니다."),
    password: z.string().min(1, "비밀번호는 1글자 이상이어야 합니다."),
    PW_CONFIRM: z.string().min(1, "비밀번호는 한번 더 입력하세요."),
    name: z.string().min(1, "이름은 1글자 이상이어야 합니다."),
    email: z.string().min(1, "이메일은 1글자 이상이어야 합니다."),
    phone: z.string().min(1, "휴대전화는 1글자 이상이어야 합니다."),
    address: z.string().min(1, "주소는 검색버튼을 클릭하세요.")
  });

  const handleCheck = event => {
    setIsChecked(prevState => !prevState)
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('공지사항 전송 테스트')
    console.log(roof.current) 

    console.log('1--------\n', JSON.stringify(data))

    console.log('2--------\n', htmlStr)

   // let htmlString = "<p>Hello</p><a href='http://w3c.org'>W3C</a>"
// let x1 = htmlStr.replace(/<[^>]+>/g, '');
// console.log('3--------\n', x1)

const body = cook(htmlStr)
console.log('4--------\n', body)

const arr: string[] = []

for(let i=0; i< body.children.length; i++){
  if(body.children[i].children[0]!= undefined){
    arr.push(body.children[i].children[0].getAttribute('src'))
  }
}

const isPinned = data.isPinned

console.log('isPinned : ', isPinned)

const expose = data.expose

console.log('expose : ', expose)

const isPosted = data.isPosted

console.log('isPosted : ', isPosted)

const title = data.article.title

console.log('title : ', title)



const art = new ArticleBuilder()
.isPinned(isPinned)
.expose(expose)
.title(title)
.isPosted(isPosted)
.content(htmlStr)
.build()

const time = new TimeBuilder()
.createdAt(DateMap().get())
.build()

const notice = new NoticeBo()
.article(art)
.build()




// const child1 = body.children[0].textContent
// console.log('5--------\n', child1)

// const child2 = body.children[1]
// console.log('6--------\n', child2)

// const tttt = body.children[1].textContent
// console.log('tttt--------\n', tttt)

// const a = child2.children[0]

// console.log('7--------\n', a)

// const child3 = a.getAttribute('src')
// console.log('8--------\n', child3)

// const b = body.children[1].textContent

    dispatch(addNotice(notice))

  }


  const [htmlStr, setHtmlStr] = React.useState<string>('');

  const roof = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (roof.current) {


     //  console.log(' ::::: 이미지 등록 ::::: \n', htmlStr)

      //roof.current.innerHTML = '<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>'
      //roof.current.innerHTML += htmlStr;
    }

    
  }, [htmlStr])


  const cook = (htmlString: string) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');

    return html.body;
}


  return (
    <>


      <Typography variant='h2'>공지사항 관리</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className='register-box'>
  
          <Box className='h3-back-styled'>
            <h3>공지사항 등록</h3>
          </Box>
          <div className='tbl-write type3'>

            <Table>
              <caption>공지사항 등록</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    <FormControl component="fieldset"  >
                      <Controller
                      {...register("article.isPosted")}
                        rules={{ required: true }}
                        control={control}
                        name="isPosted"
                        defaultValue={'Y'}
                        render={({ field }) => {
                          // console.log(field)
                          return (
                            <RadioGroup row aria-label='position' name='horizontal' {...field}>
                              <FormControlLabel value='Y' control={<Radio />} label='게시' />
                              <FormControlLabel value='N' control={<Radio />} label='미게시' />
                            </RadioGroup>
                          );
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>노출여부</th>
                  <td>
                    <FormControl component="fieldset"   >
                      <Controller
                     {...register("article.expose")} 
                        rules={{ required: true }}
                        control={control}
                        name="expose"
                        defaultValue={'all'}
                        render={({ field }) => {
                          console.log(field)
                          return (
                            <RadioGroup row aria-label='position'  name='horizontal' {...field}>
                              <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                              <FormControlLabel value='web' control={<Radio />} label='웹' />
                              <FormControlLabel value='mobile' control={<Radio />} label='모바일' />
                            </RadioGroup>
                          );
                        }}
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>제목</th>
                  <td>
                    <div className='form-wrap'>
                      {/* <input {...register("firstName")} />  */}
                      <TextField sx={{ width: '720px' }} {...register("article.title")} />
                      {/* Checkbox  */}
                      <FormControl component="fieldset" >
                        <Controller
                         {...register("article.isPinned")} 
                          rules={{ required: true }}
                          control={control}
                          name="isPinned"
                          defaultValue={'N'}
                          render={({ field }) => {
                            console.log(field)
                            return (
                              <FormControlLabel
                             
                                value='Y'
                                label='상단고정'
                                labelPlacement='end'
                                control={<Checkbox />}
                                className='label'
                              />
                            );
                          }}
                        />
                      </FormControl>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>내용</span>
                    <span style={{ display: isChecked ? '' : 'none' }}>내용(웹)</span>
                  </th>
                  <td>

                    <EditorContainer>
                      <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
                    </EditorContainer>


                  </td>

                </tr>


              </TableBody>
            </Table>

          </div>


        </Card>

        <div className='btn-align'>
          <Button variant='outlined' size='medium' color='info' onClick={() => reset()}>
            취소
          </Button>
    
          <SubmitButton title='전송' />
      

        </div>
      </form>
    </>
  )
}
export default NoticeAddPage;
// style
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