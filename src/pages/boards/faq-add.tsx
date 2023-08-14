
import React from 'react'
import type { GetStaticProps, NextPage } from "next"
import styled from 'styled-components';
import { useAppDispatch } from 'custom-hooks'
import { Icon } from '@iconify/react'
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
  Typography,
  FormHelperText,
} from '@mui/material'
import EditorControlled from 'views/forms/form-elements/editor/EditorControlled'
import dynamic from 'next/dynamic';
import { FaqBo } from 'app/boards/mo/faq-mo/faq-vo';
import { ArticleBuilder } from 'app/boards/atom/article-atom';
import { addFaq } from 'app/boards/org/faq-org/faq-thunk';
const Editor = dynamic(() => import('./notice-editor'), { ssr: false });
import { useForm, SubmitHandler, Controller,} from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from '@mui/material/FormControl';
interface IFileTypes {
  id: number; // 파일들의 고유값 id
  object: File;
}
// ** customer-service / faq-operator / register-faq 자주묻는 질문 등록
const FaqAddPage = () => {
  const dispatch = useAppDispatch()

  const Zoo: any = z.object({
    title: z.string().nonempty('제목은 필수값입니다'),
    isPosted: z.string(),
    expose: z.string(),
    isPinned: z.string()
  });

  type Zookeeper = z.infer<typeof Zoo> & { unusedProperty: string };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Zookeeper>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      isPosted: "Y",
      expose: "all",
      isPinned: "N"

    },
    resolver: zodResolver(Zoo), // Useful to check TypeScript regressions
  });



    const onSubmit: SubmitHandler<any> = (data) => {
      console.log('공지사항 전송 테스트')
      console.log(roof.current)

      console.log('1--------\n', JSON.stringify(data))

      console.log('2--------\n', htmlStr)

      // let htmlString = "<p>Hello</p><a href='http://w3c.org'>W3C</a>"
      // let x1 = htmlStr.replace(/<[^>]+>/g, '');
      // console.log('3--------\n', x1)
      const cook = (htmlString: string) => {
        const parser = new DOMParser();
        const html = parser.parseFromString(htmlString, 'text/html');

        return html.body;
      }

      const body = cook(htmlStr)
      console.log('4--------\n', body)

      const arr: string[] = []

      for (let i = 0; i < body.children.length; i++) {
        if (body.children[i].children[0] != undefined) {
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


      const faq = new FaqBo()
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


      dispatch(addFaq(faq))

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
      initDragEvents();

      return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);


  return (
    <>
      <Card className='register-box'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='h3-back-styled'>
            <h3>자주묻는 질문 등록</h3>
          </div>
          <div className='tbl-write type3'>
            <Table>
              <caption>자주묻는 질문 등록</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>문의여부</th>
                  <td>
                    <div className='form-wrap'>
<Controller
rules={{ required: true }}
control={control}
name="kind"
defaultValue={'etc'}
render={(
  {field}
) => (
                      <Select sx={{ width: '11.25rem' }} defaultValue='0'>
                        <MenuItem value='etc'>선택</MenuItem>
                        <MenuItem value='site'>사이트이용</MenuItem>
                        <MenuItem value='error'>시스템오류</MenuItem>
                        <MenuItem value='member'>회원</MenuItem>
                        <MenuItem value='goods'>상품</MenuItem>
                        <MenuItem value='shop'>배송</MenuItem>
                        <MenuItem value='cancel'>취소/교환/환불</MenuItem>
                        <MenuItem value='buy'>대량구매</MenuItem>
                        <MenuItem value='event'>이벤트/쿠폰/적립금</MenuItem>
                        <MenuItem value='etc'>기타</MenuItem>
                      </Select>
)} />
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
                  <Controller
rules={{ required: true }}
control={control}
name="isPosted"
defaultValue={'Y'}
render={(
  {field}
) => (
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='Y' label='게시' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='N' control={<Radio />} label='미게시' />
                    </RadioGroup>
                    )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>질문 </th>
                  <td>
                    <div className='form-wrap'>
  <Controller
      rules={{ required: true }}
      control={control}
      name="title"
      defaultValue={''}
      render={(
        {
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }
      ) => (
                          <FormControl component="fieldset" >
                            <TextField
                              variant='outlined'
                              name="title"
                              placeholder="자주 묻는 질문을 입력하세요"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '720px' }} />
                            <FormHelperText
                              sx={{
                                color: 'error.main',
                              }}
                            >
                              {error?.message ?? ''}
                            </FormHelperText>
                          </FormControl>
                        )}
                      />

<Controller

rules={{ required: true }}
control={control}
name="isPinned"
defaultValue={'N'}
render={(
  {
    field: { onChange, ...props },
    fieldState: { error },
  }
) => (
                              <FormControl component="fieldset" >
                                <FormControlLabel
                                onChange={onChange}
                                  value='Y'
                                  label='상단고정'
                                  labelPlacement='end'
                                  control={<Checkbox />}
                                  className='label'
                                />
                                  </FormControl>
  )}
/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span >답변</span>
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
                  <span >첨부파일</span>

</th>
<td>

   <div style={{ color: 'rgba(58, 53, 65, 0.24)', marginBottom: '16.9px' }}>
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

                      <Button variant='outlined' size='large'
                        style={{ width: '350px' }}
                        onClick={() => reset()}>
                        취소
                      </Button>
                      <Button variant='contained' size='large'
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

export default FaqAddPage;


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


//** 드래그-앤-드롭 dnd */
//** https://velog.io/@yiyb0603/React%EC%97%90%EC%84%9C-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0 */
