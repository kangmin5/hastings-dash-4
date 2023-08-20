import React from 'react'
import axios from 'axios';
import type { GetStaticProps, NextPage } from "next"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useAppDispatch } from 'custom-hooks'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react'
// ** Next Import
import Link from 'next/link'
import styled from 'styled-components';
import {
  Card, CardHeader, CardContent, CardActions,
  FormControlLabel,
  Select,
  Radio, Dialog, DialogTitle, DialogContent,
  RadioGroup,
  MenuItem, Box,
  FormGroup,
  Checkbox,
  FormControl,
  FormHelperText
} from '@mui/material'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
//import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Typography, { TypographyProps } from '@mui/material/Typography'
import { addProduct } from 'app/products/org/product-org/product-thunk';
import { getAllCats } from 'app/products/org/cat-org/cat-thunk';
import Image from 'next/image'
import thumb from '/public/images/temp/thumb.svg'
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('./product-editor'), { ssr: false });
import { selectAllCats, selectHasMainCategory, selectHasSubCategory,
  selectMainCategory, selectSubCategory
 } from 'app/products/org/cat-org/cat-selector'
import { useDropzone } from 'react-dropzone'
import FileUpload from './file-upload'
interface FileProp {
  name: string
  type: string
  size: number
}

import { ParBuilder } from 'app/products/atom/par-atom'
import { ProductBo } from 'app/products/mo/product-mo/product-vo'
import { saveMainCategory, saveSubCategory,
saveHasMainCategory, saveHasSubCategory } from 'app/products/org/cat-org/cat-reducer';

interface IFileTypes {
  id: number; // 파일들의 고유값 id
  object: File;
}



const Row = (props: any) => {
  const [openBuy, setOpenBuy] = React.useState<boolean>(false);
  const [openCart, setOpenCart] = React.useState<boolean>(false);
  const [fullWidth, setFullWidth] = React.useState<boolean>(true);

  const BuyOpen = () => setOpenBuy(true);
  const BuyClose = () => setOpenBuy(false);
  const CartOpen = () => setOpenCart(true);
  const CartClose = () => setOpenCart(false);

  console.log("Row 내부: ", JSON.stringify(props))
  const item = props.product;
  const productId = item.productId ?? "등록값이 없음"
  console.log("제품아이디: ", productId)
  const serialNo = item.serialNo ?? "등록값이 없음"
  console.log("시리얼번호: ", serialNo)
  const isDisplayed = item.isDisplayed ?? "등록값이 없음"
  console.log("진열여부: ", isDisplayed)
  const isSelling = item.isSelling ?? "등록값이 없음"
  console.log("판매여부: ", isSelling)
  const size = item.size ?? "등록값이 없음";
  console.log("사이즈: ", size)
  const productName = item.productName ?? "등록값이 없음"
  console.log("제품명: ", productName)
  const extraName = item.extraName ?? "등록값이 없음"
  console.log("제품명2: ", extraName)
  const explain = item.explain ?? "등록값이 없음"
  console.log("제품설명: ", explain)
  const explainToEmployee = item.explainToEmployee ?? "등록값이 없음"
  console.log("직원용 제품설명: ", explainToEmployee)
  const priceText = item.priceText ?? "등록값이 없음"
  console.log("가격대체문구: ", priceText)
  const createdAt = item.createdAt ?? "등록값이 없음"
  console.log("생산일: ", createdAt)
  const updatedAt = item.updatedAt ?? "등록값이 없음"
  console.log("수정일: ", updatedAt)
  const basicQty = item.stockDto?.basicQty ?? "등록값이 없음"
  console.log("기본 용량: ", basicQty)
  const boxQty = item.stockDto?.boxQty ?? "등록값이 없음"
  console.log("박스 용량: ", boxQty)
  const boxCutRate = item.stockDto?.boxCutRate ?? "등록값이 없음"
  console.log("박스 할인율: ", boxCutRate)
  //**CategoryDto */
  const mainId = item.categoryDto?.mainId ?? "등록값이 없음"
  console.log("메인분류 아이디: ", mainId)
  const middleId = item.categoryDto?.middleId ?? "등록값이 없음"
  console.log("중간분류 아이디: ", middleId)
  const smallId = item.categoryDto?.smallId ?? "등록값이 없음"
  console.log("소량분류 아이디: ", smallId)
  const detailId = item.categoryDto?.detailId ?? "등록값이 없음"
  console.log("상세분류 아이디: ", detailId)
  //**StockDto */
  const stockId = item.stockDto?.stockId ?? "등록값이 없음"
  console.log("스톡 아이디: ", stockId)
  const width = item.stockDto?.width ?? "등록값이 없음"
  console.log("가로 mm: ", width)
  const height = item.stockDto?.height ?? "등록값이 없음"
  console.log("높이 mm: ", height)
  const glue = item.stockDto?.glue ?? "등록값이 없음"
  console.log("접착 여부: ", glue)
  const header = item.stockDto?.header ?? "등록값이 없음"
  console.log("헤더 mm: ", header)
  const thick = item.stockDto?.thick ?? "등록값이 없음"
  console.log("두께 mm: ", thick)
  const mSize = item.stockDto?.mSize ?? "등록값이 없음"
  console.log("M자 mm: ", mSize)
  // const productId = props.stockDto.productId
  const unitKind = item.stockDto?.unitKind ?? "등록값이 없음"
  console.log("단위 종류: ", unitKind)
  const unitQty = item.stockDto?.unitQty ?? "등록값이 없음"
  console.log("단위 용량: ", unitQty)
  const unitPrice = item.stockDto?.unitPrice ?? "등록값이 없음"
  console.log("단위 가격: ", unitPrice)
  //const basicQty = props.stockDto.basicQty
  const basicPrice = item.stockDto?.basicPrice ?? "등록값이 없음"
  console.log("기본 가격: ", basicPrice)
  const basicCutRate = item.stockDto?.basicCutRate ?? "등록값이 없음"
  console.log("기본 할인율: ", basicCutRate)
  const bulkQty = item.stockDto?.bulkQty ?? "등록값이 없음"
  console.log("벌크 용량: ", bulkQty)
  const bulkPrice = item.stockDto?.bulkPrice ?? "등록값이 없음"
  console.log("벌크 가격: ", bulkPrice)
  const bulkCutRate = item.stockDto?.bulkCutRate ?? "등록값이 없음"
  console.log("벌크 할인율: ", bulkCutRate)
  // const boxQty = props.stockDto.boxQty
  const boxPrice = item.stockDto?.boxPrice ?? "등록값이 없음"
  console.log("박스 가격: ", boxPrice)
  // const boxCutRate = props.stockDto.boxCutRate
  const mainUrl = item.mainUrl ?? "등록값이 없음"
  console.log("메인 이미지: ", mainUrl)
  const oddUrl = item.oddUrl ?? "등록값이 없음"
  console.log("개별 이미지: ", oddUrl)
  // const inquiries = item.productInquiries.length > 0 ? item.productInquiries : "빈 배열 상태"
  // console.log("제품 Qna: ", inquiries)
  // let temp = ""
  // for (let i = 0; i < inquiries?.length; i++) {
  //   if (i == 0) {
  //     temp = inquiries[i].productInquiryId
  //   }
  // }
  // const productInquiryId = temp
  // console.log("제품 문의 아이디: ", productInquiryId)
  //const image = attachments[0].urlAddress
  return (
    <>
      <li>

        <Card elevation={5}>
          <CardHeader title="Title" />
          <CardContent>
            <div className="prd-thumb"
              style={{ backgroundImage: `url(${mainUrl})` }}
            >
              <div className="prd-size">
                <span>가로x세로+접착</span>
                <strong>{productName}</strong>
              </div>
            </div>
            <div className="prd-info">
              <div className="prd-name">
                <strong>{productName}</strong>
                <strong className="prd-size">{size}</strong>
              </div>
              <div className="prd-quantity">
                <dl className="active">
                  <dt>1묶음</dt>
                  <dd>
                    {basicQty}<em>장</em>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    1박스
                    <span className="discount">{boxCutRate} %</span>
                  </dt>
                  <dd>
                    {boxQty}<em>장</em>
                  </dd>
                </dl>
              </div>
              <div className="prd-price">
                <span>VAT 포함가</span>
                <strong>
                  {basicPrice} <em>원</em>
                </strong>
              </div>
            </div>
          </CardContent>

          <CardActions>
            <Button size="medium" variant="outlined" onClick={CartOpen}>
              장바구니
            </Button>
            <Dialog
              open={openCart}
              maxWidth="sm"
              fullWidth={fullWidth}
              onClose={CartClose}
              className="register-quick-purchase"
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
                <strong>
                  OPP 접착봉투<span className="prd-size">40x150+40</span>
                </strong>
                <Button onClick={CartClose}>Close</Button>
              </DialogTitle>
              <DialogContent className="product-detail">
                <div className="prd-quantity">
                  <div className="title">
                    상품 선택
                    <span className="info">다중 선택 가능합니다.</span>
                  </div>
                  <dl>
                    <dt>
                      <FormGroup row>
                        <FormControlLabel
                          label="기본단위"
                          labelPlacement="end"
                          control={<Checkbox defaultChecked className="round" />}
                        />
                      </FormGroup>
                    </dt>
                    <dd className="quantity">
                      200<em>장</em>
                    </dd>
                    <dd className="price">
                      <span>
                        2,000<em>원</em>
                      </span>
                      <span className="per">
                        장당 10<em>원</em>
                      </span>
                    </dd>
                    <dd className="count"></dd>
                    <dd>
                      <IconButton className="btn-delete icon">
                        <i className="trash">삭제</i>
                      </IconButton>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <FormGroup row>
                        <FormControlLabel
                          label="박스단위"
                          labelPlacement="end"
                          control={<Checkbox className="round" />}
                        />
                      </FormGroup>
                    </dt>
                    <dd className="quantity">
                      12,200<em>장</em>
                    </dd>
                    <dd className="price">
                      <span>
                        18,000<em>원</em>
                        <span className="discount">10% 할인가</span>
                      </span>
                      <span className="per">
                        장당 9<em>원</em>
                      </span>
                    </dd>
                    <dd className="count"></dd>
                    <dd>
                      <IconButton className="btn-delete icon">
                        <i className="trash">삭제</i>
                      </IconButton>
                    </dd>
                  </dl>
                </div>
                <div className="prd-price">
                  <div>
                    <span>총 상품금액(VAT 포함가)</span>
                    <strong>
                      400<em>원</em>
                    </strong>
                  </div>
                  <div className="delivery-price">
                    <span>배송비</span>
                    <strong>
                      3,200<em>원</em>
                    </strong>
                  </div>
                </div>
                <div className="btn-group">
                  <Button className="x-large" fullWidth variant="outlined">
                    관심상품 등록
                  </Button>
                  <Button className="x-large" fullWidth variant="contained">
                    장바구니 추가
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="medium" variant="contained" onClick={BuyOpen}>
              바로구매
            </Button>
            <Dialog
              open={openBuy}
              maxWidth="sm"
              fullWidth={fullWidth}
              onClose={BuyClose}
              className="register-quick-purchase"
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
                <strong>
                  OPP 접착봉투<span className="prd-size">40x150+40</span>
                </strong>
                <Button onClick={BuyClose}>Close</Button>
              </DialogTitle>
              <DialogContent className="product-detail">
                <div className="prd-quantity">
                  <div className="title">
                    상품 선택
                    <span className="info">다중 선택 가능합니다.</span>
                  </div>
                  <dl>
                    <dt>
                      <FormGroup row>
                        <FormControlLabel
                          label="기본단위"
                          labelPlacement="end"
                          control={<Checkbox defaultChecked className="round" />}
                        />
                      </FormGroup>
                    </dt>
                    <dd className="quantity">
                      200<em>장</em>
                    </dd>
                    <dd className="price">
                      <span>
                        2,000<em>원</em>
                      </span>
                      <span className="per">
                        장당 10<em>원</em>
                      </span>
                    </dd>
                    <dd className="count"></dd>
                    <dd>
                      <IconButton className="btn-delete icon">
                        <i className="trash">삭제</i>
                      </IconButton>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <FormGroup row>
                        <FormControlLabel
                          label="박스단위"
                          labelPlacement="end"
                          control={<Checkbox className="round" />}
                        />
                      </FormGroup>
                    </dt>
                    <dd className="quantity">
                      12,200<em>장</em>
                    </dd>
                    <dd className="price">
                      <span>
                        18,000<em>원</em>
                        <span className="discount">10% 할인가</span>
                      </span>
                      <span className="per">
                        장당 9<em>원</em>
                      </span>
                    </dd>
                    <dd className="count"></dd>
                    <dd>
                      <IconButton className="btn-delete icon">
                        <i className="trash">삭제</i>
                      </IconButton>
                    </dd>
                  </dl>
                </div>
                <div className="prd-price">
                  <div>
                    <span>총 상품금액(VAT 포함가)</span>
                    <strong>
                      400<em>원</em>
                    </strong>
                  </div>
                  <div className="delivery-price">
                    <span>배송비</span>
                    <strong>
                      3,200<em>원</em>
                    </strong>
                  </div>
                </div>
                <div className="btn-group">

                  <Button className="x-large" fullWidth variant="contained">
                    바로 구매
                  </Button>
                  <Button className="x-large" fullWidth variant="outlined" onClick={BuyClose}>
                    취소하기
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardActions>
        </Card>
      </li>

    </>)
}


interface Parameters {
  post: string;
}

const ProductAddPage: NextPage = () => {
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
  const [text, setText] = React.useState('')
  const [isMainImageRadio, setIsMainImageRadio] = React.useState(true)
  const [htmlStr, setHtmlStr] = React.useState<string>('');
  const [inputList, setInputList] = React.useState(<></>);
  const [currentFile, setCurrentFile] = React.useState(undefined);
  const [previewImage, setPreviewImage] = React.useState(PREVIEW);
  const [isUpload, setIsUpload] = React.useState(false)
  const AllCats = useSelector(selectAllCats)
  const hasMainCategory = useSelector(selectHasMainCategory)
  const hasSubCategory = useSelector(selectHasSubCategory)
  const mainCategory = useSelector(selectMainCategory)
  const subCategory = useSelector(selectSubCategory)


  const Z: any = z.object({})
  type T = z.infer<typeof Z> & { unusedProperty: string };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<T>({
    mode: "onSubmit",
    defaultValues: {},
    resolver: zodResolver(Z)
  });
  const dispatch = useAppDispatch()

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
    setIsUpload(true)
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('공지사항 전송 테스트')
    console.log('1--------\n', JSON.stringify(data))
    // let htmlString = "<p>Hello</p><a href='http://w3c.org'>W3C</a>"
    // let x1 = htmlStr.replace(/<[^>]+>/g, '');
    // console.log('3--------\n', x1)
    const arr: string[] = []
    const isPinned = data.isPinned
    console.log('isPinned : ', isPinned)
    const expose = data.expose
    console.log('expose : ', expose)
    const isPosted = data.isPosted
    console.log('isPosted : ', isPosted)
    const title = data.article.title
    console.log('title : ', title)
    const par = new ParBuilder()
      .build()
    const pro = new ProductBo()
      .par(par)
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


    dispatch(addProduct(pro))

  }

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value)
  }
  const Input = () => {
    return <input placeholder="Your input here" />;
  };
  const onAddBtnClick = event => {
   // setInputList(inputList.concat(<Input key={inputList.length} />));
   setInputList(
   <div className='category-list'>
    <ul>

{arr2.map((item, index) => (
    <li className={'fcc-shine'}
    key={index}
    style={{ width: '150px', height: '30px',
    border: '1px solid gray',
    backgroundColor: (item.name === subCategory) ?'yellow':''


  }}

    >
      <a href="#" onClick={()=>dispatch(saveSubCategory(`${item.name}`))}> {item.name} </a>
    </li>
))}
</ul>

   </div>

   )

  }


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

  const IsMainImageRadioChange = () => {
    setIsMainImageRadio(false)
  }

  const arr = [{ name: "OPP 봉투" }, { name: "택배봉투" }, { name: "PP/PE 봉투" }, { name: "지퍼백" }]
  const arr2 = [{ name: "PP속폴리백(접착)" }, { name: "PE속폴리백(집착)" }, { name: "PP속폴리백(접착)" }]

  React.useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  React.useEffect(() => {
    // dispatch(getAllCats(undefined))
  }, [dispatch])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h2'>상품 등록</Typography>
        <Card>
          <div className='tit-wrap no-line ac'>
            <h3>상품 표시 정보</h3>
            <Button variant='contained' className='x-small icon ml8'>
              다른 상품 정보 가져오기
              <i className='link' />
            </Button>
            <p className='right'>
              <span className='essential'>*</span> 필수입력사항
            </p>
          </div>
          <div className='tbl-write type4'>
            <table>
              <caption>상품 표시 정보</caption>
              <colgroup>
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>
                    진열상태<span className='essential'>*</span>
                  </th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'진열함'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='진열함'>
                          <FormControlLabel value='진열함' label='진열함' control={<Radio />} />
                          <FormControlLabel value='진열안함' label='진열안함' control={<Radio />} />
                        </RadioGroup>
                      )} />
                  </td>
                  <th scope='row'>
                    판매상태<span className='essential'>*</span>
                  </th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'Y'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='판매함'>
                          <FormControlLabel value='판매함' label='판매함' control={<Radio />} />
                          <FormControlLabel value='판매안함' label='판매안함' control={<Radio />} />
                        </RadioGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>메인 노출</th>
                  <td colSpan={3}>
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
                        <FormGroup row>
                          <FormControlLabel control={<Checkbox />} label='메인추천상품' />
                        </FormGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상품코드</th>
                  <td colSpan={3}>자동생성</td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    상품분류 선택<span className='essential'>*</span>
                  </th>
                  <td colSpan={3}>
                    <div className='category-wrap'>
                      <p className='desc'>상품분류 선택 후 적용 버튼을 눌러주세요.</p>
                      <div className='category-list'>
                        <ul>

                          {arr.map((item, index) => (
                              <li className={'fcc-shine'}
                              key={index}
                              style={{ width: '150px',
                              height: '30px',
                              border: '1px solid gray',
                              backgroundColor: (item.name === mainCategory) ?'yellow':'' }}>
                                <a href="#" onClick={
                                  ()=>{dispatch(saveMainCategory(`${item.name}`))
                                  dispatch(saveHasMainCategory(true))}}> {item.name} </a>
                              </li>
                          ))}
                        </ul>
                        {hasMainCategory ?  <>
                          {inputList}
                          <div className='btn-wrap'>

                          <Button variant='contained' size='small' color='primary' className='icon'

onClick={onAddBtnClick}
                          >
                            <i className='add' />
                            적용
                          </Button>
                        </div>

                        </> : <>
                        <div className='btn-wrap'>
                          <Button variant='contained' size='small' color='primary' className='icon' disabled>
                            <i className='add' />
                            적용
                          </Button>
                        </div>
                        </>}

                      </div>
                      <div className='selected-area'>
                        {mainCategory !=='' ?

                        <>
                            <span>{mainCategory} {'>'} {subCategory !=='' ? subCategory : ''}
                           <Button variant='outlined' color='info' className='x-small icon' sx={{ width: '56px' }}

onClick={
  ()=>{
    dispatch(saveMainCategory(''))
    dispatch(saveSubCategory(''))
    dispatch(saveHasMainCategory(false))
    dispatch(saveHasSubCategory(false))
  }

}

                             >
                             <i className='delete' />
                             삭제
                           </Button>

                        </span>
                        </>
                        :
                        <><p className='no-data'>선택된 상품분류 내역이 없습니다.</p></>}

                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className='tit-wrap no-line'>
            <h3>상품 기본 정보</h3>
            <p className='right'>
              <span className='essential'>*</span> 필수입력사항
            </p>
          </div>
          <div className='tbl-write type4'>
            <table>
              <caption>상품 기본 정보</caption>
              <colgroup>
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>
                    상품명<span className='essential'>*</span>
                  </th>
                  <td colSpan={3}>
                    <div className='form-wrap '>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="상품명 1"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '295px' }} />
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
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="상품명 2"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '295px' }} />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>추가상품명</th>
                  <td colSpan={3}>
                    <div className='form-wrap'>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="상품명 2"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '600px' }} />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상품설명</th>
                  <td colSpan={3}>
                    <div className='form-wrap '>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="상품설명"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '600px' }} />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상품설명(관리자용)</th>
                  <td colSpan={3}>
                    <div className='form-wrap ss'>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="상품설명"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '600px' }} />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>사이즈</th>
                  <td colSpan={3}>
                    <ul className='size-wrap'>
                      <li>
                        <label className='label'>
                          가로<span className='essential'>*</span>
                        </label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                      <li>
                        <label className='label'>
                          세로<span className='essential'>*</span>
                        </label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                      <li>
                        <label className='label'>접착</label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                      <li>
                        <label className='label'>헤다</label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                      <li>
                        <label className='label'>두께</label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                      <li>
                        <label className='label'>M자</label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '80px' }} />
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
                        <span className='unit'>cm</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    가격 설정<span className='essential'>*</span>
                  </th>
                  <td colSpan={3}>
                    <div className='form-wrap row'>
                      <label className='label'>기본단위 (1묶음)</label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '120px' }} />
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
                      <span className='unit' style={{ marginRight: '16px' }}>
                        장
                      </span>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '150px' }} />
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
                      <span className='unit'>원</span>
                      <label className='label' style={{ marginLeft: '32px' }}>
                        장당
                      </label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '80px' }} />
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
                      <span className='unit'>원</span>
                      <label className='label' style={{ marginLeft: '32px' }}>
                        할인율
                      </label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '80px' }} />
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
                      <span className='unit'>%</span>
                    </div>
                    <div className='form-wrap row'>
                      <label className='label'>대량구매 (1박스)</label>
                      {/* <FormGroup row className='mr16' style={{ width: '130px' }}>
                      <FormControlLabel className='ml0' control={<Checkbox />} label='대량구매 (1박스)' />
                    </FormGroup> */}
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '120px' }} />
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
                      <span className='unit' style={{ marginRight: '16px' }}>
                        장
                      </span>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '150px' }} />
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
                      <span className='unit'>원</span>
                      <label className='label' style={{ marginLeft: '32px' }}>
                        장당
                      </label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '80px' }} />
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
                      <span className='unit'>원</span>
                      <label className='label' style={{ marginLeft: '32px' }}>
                        할인율
                      </label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder=""
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '80px' }} />
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
                      <span className='unit'>%</span>
                    </div>
                    <div className='form-wrap '>
                      <FormGroup row className='mr16' style={{ width: '130px' }}>
                        <FormControlLabel className='ml0' control={<Checkbox />} label='가격 대체 문구' />
                      </FormGroup>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="orderNum2"
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
                              name="orderNum2"
                              placeholder="가격 대체 문구"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '650px' }} />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>적립금</th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'Y'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='기본설정 사용'>
                          <FormControlLabel value='기본설정 사용' label='기본설정 사용' control={<Radio />} />
                          <FormControlLabel value='개별설정' label='개별설정' control={<Radio />} />
                        </RadioGroup>
                      )} />
                  </td>
                  <th scope='row'>포인트</th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'Y'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='기본설정 사용'>
                          <FormControlLabel value='기본설정 사용' label='기본설정 사용' control={<Radio />} />
                          <FormControlLabel value='개별설정' label='개별설정' control={<Radio />} />
                        </RadioGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>옵션사용</th>
                  <td colSpan={3}>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'Y'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='사용안함'>
                          <FormControlLabel value='사용함' label='사용함' control={<Radio />} />
                          <FormControlLabel value='사용안함' label='사용안함' control={<Radio />} />
                        </RadioGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>옵션사용</th>
                  <td colSpan={3}>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="isPosted"
                      defaultValue={'Y'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='사용함'>
                          <FormControlLabel value='사용함' label='사용함' control={<Radio />} />
                          <FormControlLabel value='사용안함' label='사용안함' control={<Radio />} />
                        </RadioGroup>
                      )} />
                    <div className='form-wrap ss '>
                      <label className='label' style={{ minWidth: '100px' }}>
                        옵션 속성값
                      </label>
                      <div className='txt-wrap'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '600px' }} />
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
                        <p className='desc'>
                          예- 200장, 1000장, 5000장
                          <br />
                          속성 값에는 빈칸없이 콤마(,)로 구분하여 값을 입력해 주시면 됩니다.
                        </p>
                      </div>
                    </div>
                    <div className='form-wrap ss mt8'>
                      <label className='label' style={{ minWidth: '100px' }}>
                        옵션에 따른 가격
                      </label>
                      <div className='txt-wrap'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderNum2"
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
                                name="orderNum2"
                                placeholder=""
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '600px' }}
                              />
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
                        <p className='desc'>
                          예- 1000,2000,3000
                          <br />
                          속성 값에는 빈칸없이 콤마(,)로 구분하여 값을 입력해 주시면 됩니다.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='tit-wrap no-line'>
            <h3>상품 상세 정보</h3>
            <p className='right'>
              <span className='essential'>*</span> 필수입력사항
            </p>
          </div>
          <div className='tbl-write type4'>
            <table>
              <caption>상품 기본 정보</caption>
              <colgroup>
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row' className='vat'>
                    샘플 <span className='essential'>*</span>
                  </th>
                  <td>


                    <FileUpload />
                  </td>
                </tr>
                {/* <tr>
                  <th scope='row' className='vat'>
                    상품 이미지 Real <span className='essential'>*</span>
                  </th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="mainImage"
                      defaultValue={'대표 이미지 등록'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='대표 이미지 등록' className='mt8' onChange={() => IsMainImageRadioChange}>
                          <FormControlLabel value={true} label='대표 이미지 등록' control={<Radio />} />
                          <FormControlLabel value={false} label='개별 이미지 등록' control={<Radio />} />
                        </RadioGroup>
                      )} />
                    <div className='thumb-wrap'>
                      <ul className='thumb-list'>
                        <li>
                          <strong>상세 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 500 X 500(px)</span>
                          <Button variant='outlined' color='info' className='x-small' sx={{ width: '120px' }}>
                            등록
                          </Button>
                        </li>
                        <li>
                          <strong>목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 300 X 300(px)</span>
                        </li>
                        <li>
                          <strong>작은 목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 100 X 100(px)</span>
                        </li>

                      </ul>
                      <div className='txt-info'>
                        <strong>이미지 등록시 주의사항</strong>
                        <span>상품 복사 등록시, 상품 이미지는 복사되지 않습니다.</span>
                        <span> 대표 이미지 등록하면 상세, 목록, 작은 목록에 자동생성됩니다.</span>
                        <span>최대 용량 : 2MB</span>
                        <span>파일형식 : jpg, png, gif</span>
                      </div>
                    </div>
                  </td>
                </tr> */}
                <tr>
                  <th scope='row' className='vat'>
                    상품 이미지<span className='essential'>*</span>
                  </th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="mainImage"
                      defaultValue={'개별 이미지 등록'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='개별 이미지 등록' className='mt8' >
                          <FormControlLabel value={'대표 이미지 등록'} label='대표 이미지 등록' control={<Radio />} />
                          <FormControlLabel value={'개별 이미지 등록'} label='개별 이미지 등록' control={<Radio />} />
                        </RadioGroup>
                      )} />
                    <div className='thumb-wrap'>
                      <ul className='thumb-list'>
                        <li>
                          <strong>상세 이미지</strong>
                          <span className='thumb'>
                            {/* <Image src={thumb} width='120' height='120' alt='' /> */}
                            <Image src={previewImage} width='120' height='120' alt='' />
                            <IconButton className='icon'>
                              <i className='delete2' />
                            </IconButton>
                          </span>
                          <span className='size'>권장 : 500 X 500(px)</span>

                          {!isUpload &&  <div className='btn-group'>
          <label  className="custom-file-upload">
            <input type="file" accept="image/*" onChange={selectFile} />

           등록


          </label></div>
}
{isUpload &&   <div className='btn-group'>
                            <Button variant='outlined' color='info' className='x-small' sx={{ width: '56px' }}>
                              변경
                            </Button>
                            <Button variant='outlined' color='info' className='x-small icon' sx={{ width: '56px' }}>
                              <i className='delete' />
                              삭제
                            </Button>
                          </div>}
                        </li>
                        <li>
                          <strong>목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 300 X 300(px)</span>
                        </li>
                        <li>
                          <strong>작은 목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 100 X 100(px)</span>
                        </li>
                      </ul>
                      <div className='txt-info'>
                        <strong>이미지 등록시 주의사항</strong>
                        <span>상품 복사 등록시, 상품 이미지는 복사되지 않습니다.</span>
                        <span> 대표 이미지 등록하면 상세, 목록, 작은 목록에 자동생성됩니다.</span>
                        <span>최대 용량 : 2MB</span>
                        <span>파일형식 : jpg, png, gif</span>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <tr>
                  <th scope='row' className='vat'>
                    상품 이미지<span className='essential'>*</span>
                  </th>
                  <td>
                    <Controller
                      rules={{ required: true }}
                      control={control}
                      name="mainImage"
                      defaultValue={'개별이미지등록'}
                      render={(
                        { field }
                      ) => (
                        <RadioGroup row defaultValue='개별 이미지 등록' className='mt8'>
                          <FormControlLabel value='대표 이미지 등록' label='대표 이미지 등록' control={<Radio />} />
                          <FormControlLabel value='개별 이미지 등록' label='개별 이미지 등록' control={<Radio />} />
                        </RadioGroup>
                      )} />
                    <div className='thumb-wrap'>
                      <ul className='thumb-list'>
                        <li>
                          <strong>상세 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 500 X 500(px)</span>
                          <div className='btn-group'>
                            <Button variant='outlined' color='info' className='x-small' sx={{ width: '120px' }}>
                              등록
                            </Button>
                          </div>
                        </li>
                        <li>
                          <strong>목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 300 X 300(px)</span>
                          <div className='btn-group'>
                            <Button variant='outlined' color='info' className='x-small' sx={{ width: '56px' }}>
                              변경
                            </Button>
                            <Button variant='outlined' color='info' className='x-small icon' sx={{ width: '56px' }}>
                              <i className='delete' />
                              삭제
                            </Button>
                          </div>
                        </li>
                        <li>
                          <strong>작은 목록 이미지</strong>
                          <span className='thumb' />
                          <span className='size'>권장 : 100 X 100(px)</span>
                          <div className='btn-group'>
                            <Button variant='outlined' color='info' className='x-small' sx={{ width: '56px' }}>
                              변경
                            </Button>
                            <Button variant='outlined' color='info' className='x-small icon' sx={{ width: '56px' }}>
                              <i className='delete' />
                              삭제
                            </Button>
                          </div>
                        </li>
                      </ul>
                      <div className='txt-info'>
                        {!isMainImageRadio && <Button variant='outlined' color='info' size='medium' className='icon mt8'>
                          <i className='delete' />
                          이미지 전체 삭제
                        </Button>}

                      </div>
                    </div>
                  </td>
                </tr> */}
                <tr>
                  <th scope='row' className='vat'>
                    추가 이미지
                    <br />
                    (최대 3장)
                  </th>
                  <td>
                    <span className='desc'>
                      상품 기본 이미지에 추가로 노출되는 이미지입니다.
                      <br />
                      드래그 앤 드롭으로 이미지 순서 변경 가능합니다.
                    </span>

                    <div className='thumb-wrap'>

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
                            <Typography>- 최대 용량 : 2MB</Typography>
                            <Typography>- 파일형식 : jpg, png, gif</Typography>
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    상세 사이즈 차트
                    <Button variant='outlined' color='info' className='x-small mt8'>
                      미리보기
                    </Button>
                  </th>
                  <td>
                    <span className='desc'>
                      상품 상세 페이지에 사이즈표를 노출시킬 수 있는 메뉴입니다.
                      <br />
                      상품 공통정보 수정 페이지에서 등록/수정할 수 있습니다.
                    </span>
                    <Controller
                      name='contactAutre'
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <FormGroup row className='mt8'>
                          <FormControlLabel control={<Checkbox defaultChecked {...field} />} label='상품 상세 공통 사이즈  적용' />
                          <FormControlLabel control={<Checkbox {...field} />} label='개별 사이즈  적용' />
                        </FormGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    상세 설명 (웹)
                    <Button variant='outlined' color='info' className='x-small mt8'>
                      미리보기
                    </Button>
                  </th>
                  <td>
                    <span className='desc'>
                      상품 상세 페이지에 노출되는 이미지입니다.
                      <br />
                      드래그 앤 드롭으로 이미지 순서 변경 가능합니다.
                    </span>
                    <Controller
                      name='contactAutre'
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <FormGroup row className='mt8'>
                          <FormControlLabel control={<Checkbox defaultChecked {...field} />} label='상품 상세 공통 사이즈  적용' />
                          <FormControlLabel control={<Checkbox {...field} />} label='개별 사이즈  적용' />
                        </FormGroup>
                      )} />
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    상세 설명 (모바일)
                    <Button variant='outlined' color='info' className='x-small mt8'>
                      미리보기
                    </Button>
                  </th>
                  <td>
                    <span className='desc'>
                      상품 상세 페이지에 노출되는 이미지입니다.
                      <br />
                      드래그 앤 드롭으로 이미지 순서 변경 가능합니다.
                    </span>
                    <FormGroup row className='mt8'>
                      <FormControlLabel control={<Checkbox defaultChecked />} label='상품 상세 공통 사이즈  적용' />
                      <FormControlLabel control={<Checkbox />} label='개별 사이즈  적용' />
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        <div className='btn-align'>
          <Button variant='outlined' size='medium' color='info'>
            취소
          </Button>
          <Button variant='contained' size='medium' color='primary'>
            등록
          </Button>
        </div>
      </form>
    </>
  )
}

export default ProductAddPage


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

