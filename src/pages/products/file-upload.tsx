import React from 'react';
import PropTypes from "prop-types"
import axios from 'axios';
import {
  Button,
  Card,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
  FormHelperText
} from '@mui/material'

const BASE_URL = 'http://3.34.85.184/'
const ADD_IMAGE = 'admin/products/product-image?do=add'
const PREVIEW = 'https://hrbongtoo-bucket.s3.ap-northeast-2.amazonaws.com/root/product/4/camera.png'
const UploadService = {
  upload: (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-type": "application/json",
      },
    }).post(ADD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // onUploadProgress,
    });
  },

  getFiles: () => {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-type": "application/json",
      },
    }).get("/admin/products/product-image?id=");
  }
}



const FileUpload = () => {
  const [currentFile, setCurrentFile] = React.useState(undefined);
  const [previewImage, setPreviewImage] = React.useState(PREVIEW);
  const [isUpload, setIsUpload] = React.useState(false)
  const [progress, setProgress] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [imageInfos, setImageInfos] = React.useState([]);

  React.useEffect(() => {
    // UploadService.getFiles().then((response) => {
    //   setImageInfos(response.data);
    // });
  }, []);

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
    setIsUpload(true)
  };

  const upload = () => {
    //setProgress(0);

    UploadService.upload(currentFile, (event: any) => {
      // setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        // setMessage(response.data.message);
        // return UploadService.getFiles();
        const t = response.data.array[0]
        console.log(' 이미지 업로드 성공' + JSON.stringify(t))
        const img = t.urlAddress
        setPreviewImage(img)
      })
      // .then((files) => {
      //   setImageInfos(files.data);
      // })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentFile(undefined);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <img src={previewImage} style={{ width: '50px', height: '50px' }} alt={''} />
          </div>
          {!isUpload &&
          <label  className="custom-file-upload">
            <input type="file" accept="image/*" onChange={selectFile} />

            {'등록'}


          </label>
}

        {isUpload && <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            수정
          </button>
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={ () => {
              setPreviewImage(PREVIEW);
              setIsUpload(false)}}
          >
            삭제
          </button>
        </div>}


      </div>

      {/* {currentFile && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            // role="progressbar"
            // aria-valuenow={progress}
            // aria-valuemin="0"
            // aria-valuemax="100"
           // style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      {previewImage && (
        <div>
          <Image className="preview" src={previewImage} alt="" />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      <div className="card mt-3">
        <div className="card-header">List of Images</div>
        {/* <ul className="list-group list-group-flush">
          {imageInfos &&
            imageInfos.map((img, index) => (
              <li className="list-group-item" key={index}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <Image src={img.url} alt={img.name} />
              </li>
            ))}
        </ul>
      </div>*/}
    </div>
  );
};

export default FileUpload;
