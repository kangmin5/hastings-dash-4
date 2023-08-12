import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { NoticeUrl as url } from 'app/boards/org/notice-org/notice-union'
import { selectNoticeImages } from 'app/boards/org/notice-org/notice-selector'
import { addNoticeImage } from 'app/boards/org/notice-org/notice-thunk'
import { useAppDispatch } from 'custom-hooks'
import { useSelector } from 'react-redux'
import ReactQuill, {Quill} from 'react-quill';  // ssr 설정을 위해 주석처리
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { RangeStatic } from 'quill';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);
import axios from 'axios'

interface IEditor {
  htmlStr: string;
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>;

}

const NoticeEditor: NextPage<IEditor> = ({ htmlStr, setHtmlStr}) => {
  const dispatch = useAppDispatch()
  const NoticeImages = useSelector(selectNoticeImages)
  const quillRef = React.useRef<ReactQuill>(null);


  // 이미지 업로드 핸들러, modules 설정보다 위에 있어야 정상 적용
  const imageHandler = () => {
    // file input 임의 생성
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      const formData = new FormData();

      if (file) {
        formData.append("multipartFiles", file[0]);
      }
      const addImage = 'http://3.34.85.184/' + url.addImage
      console.log('- ajax url -> ', addImage);

      // file 데이터 담아서 서버에 전달하여 이미지 업로드
      // const res = await axios.post(addImage, formData);

      // dispatch(addNoticeImage(formData)) 비동기 이슈때문에 주석처리


      const auth = typeof window !== 'undefined' ? `Bearer ${window.localStorage.getItem('accessToken')}` : 'Bearer null'
      axios.post(addImage, formData, {

        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: auth
        }
      }).then((res) => {
        console.log('axios result : ', JSON.stringify(res))

        if (quillRef.current) {
          console.log('quillRef.current is not null')
          const images = res.data.array
          // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
          const index = (quillRef.current.getEditor().getSelection() as RangeStatic).index;

          const quillEditor = quillRef.current.getEditor();
          quillEditor.setSelection(index, 1);
          for (let i = 0; i < images.length; i++) {
            const item = images[i]
            console.log(' for loop : ', JSON.stringify(item))
            quillEditor.clipboard.dangerouslyPasteHTML(
              index,
              `<img src=${item.urlAddress} alt=${'alt text'} className='attach-image'/>`
            );
          }
        } else {
          console.log('quillRef.current is null')
        }

      }).catch((err) => {
        console.log('axios error : ', JSON.stringify(err))
        return err
      })
    }
  }

  // useMemo를 사용하지 않고 handler를 등록할 경우 타이핑 할때마다 focus가 벗어남

  const modules = React.useMemo(() => ({
    toolbar: {
      // container에 등록되는 순서대로 tool 배치
      container: [
        [{ 'font': [] }], // font 설정
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // header 설정
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'formula'], // 굵기, 기울기, 밑줄 등 부가 tool 설정
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], // 리스트, 인덴트 설정
       // ['link', 'image', 'video'], // 링크, 이미지, 비디오 업로드 설정
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
        ['clean'], // toolbar 설정 초기화 설정
      ],
      ImageResize: {
        parchment: Quill.import('parchment')
      },

      // custom 핸들러 설정
      handlers: {
        image: imageHandler, // 이미지 tool 사용에 대한 핸들러 설정
      }
    },
  }
  ), [])



  const formats = [
    'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'formula',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'color', 'background',
  ];


  const ContentChange = (content: any, delta: any, source: any, editor: any) => {
    // setText(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
    console.log('-------------- editor.getHTML() -----------------')
    console.log(editor.getHTML())
    console.log('-------------- ----------------- -----------------')
    setHtmlStr(editor.getHTML())
  };

  const style = {
    height: "80%",
    width: "100%",
    margin: "auto",

  };


  return (
    <>

      <ReactQuill
        ref={quillRef}
        theme="snow"
        placeholder="내용을 입력하세요."
        modules={modules}
        formats={formats}
        value={htmlStr}
        onChange={ContentChange}
        style={style}
      />
    </>

  );
};

export default NoticeEditor;

//** https://codesandbox.io/s/react-quill-with-functional-component-68zcnt?file=/src/index.js:0-114 */
//** https://codesandbox.io/s/react-quill-with-functional-component-68zcnt?file=/src/index.js:0-114https://codesandbox.io/s/react-quill-with-functional-component-68zcnt?file=/src/index.js:0-114 */
//**TODO https://jforj.tistory.com/211 */
