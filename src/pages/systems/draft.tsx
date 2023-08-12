import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { useForm, SubmitHandler } from "react-hook-form"
//** https://codesandbox.io/s/wysiwyg-editor-demo-sjko5?file=/src/MyEditor.js */
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Link from 'next/link'
import { convertToRaw, EditorState } from "draft-js";
//import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import dynamic from 'next/dynamic'; 
const Editor = dynamic( () => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false } ) 
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  MenuItem,
  TableBody,
  TextField,
  Typography
} from '@mui/material'

interface Parameters {
  post: string;
}

type FormValues = {
  firstName: string
  lastName: string
  email: string
}

const RevenuePage: NextPage = ({post}: Parameters) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="email" {...register("email")} />

    
    
    <div className="fcc-App">
      <header className="fcc-App-header">Rich Text Editor Example</header>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="fcc-wrapper-class"
        editorClassName="fcc-editor-class"
        toolbarClassName="fcc-toolbar-class"
      />
      {/* <div className="code-view">
        <p>HTML View </p>
        <textarea
          className="text-area"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div> */}
    </div>
    <input type="button" onClick={(e)=> {

      e.preventDefault();
      alert('글내용 : '+draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }} value='글쓰기' /> 
    </form> 
    </>
 
  );
};




export default RevenuePage;

