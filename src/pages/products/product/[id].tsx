import { Fragment, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography, { TypographyProps } from '@mui/material/Typography'

import Image from 'next/image'
import thumb from '/public/images/temp/thumb.svg'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}
import { Card, FormControlLabel, Select, Radio, RadioGroup, MenuItem, FormGroup, Checkbox } from '@mui/material'

export default function ProductIdPage() {
  const [text, setText] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value)
  }

  return (
    <>
      <Typography variant='h2'>상품 등록</Typography>
      <Card>
        <div className='tit-wrap no-line ac'>
          <h3>상품 표시 정보</h3>
          <Button variant='contained' color='primary' className='x-small icon ml8'>
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
                  <RadioGroup row defaultValue='진열안함'>
                    <FormControlLabel value='진열함' label='진열함' control={<Radio />} />
                    <FormControlLabel value='진열안함' label='진열안함' control={<Radio />} />
                  </RadioGroup>
                </td>
                <th scope='row'>
                  판매상태<span className='essential'>*</span>
                </th>
                <td>
                  <RadioGroup row defaultValue='판매함'>
                    <FormControlLabel value='판매함' label='판매함' control={<Radio />} />
                    <FormControlLabel value='판매안함' label='판매안함' control={<Radio />} />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <th scope='row'>메인 노출</th>
                <td colSpan={3}>
                  <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label='메인추천상품' />
                  </FormGroup>
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
                        <li>
                          <a href='#none' className='link'>
                            OPP 봉투
                          </a>
                        </li>
                        <li>
                          <a href='#none' className='link'>
                            택배봉투
                          </a>
                        </li>
                        <li>
                          <a href='#none' className='link'>
                            PP/PE 봉투
                          </a>
                        </li>
                        <li>
                          <a href='#none' className='link'>
                            지퍼백
                          </a>
                        </li>
                      </ul>
                      <div className='btn-wrap'>
                        <Button variant='contained' size='small' color='primary' className='icon' disabled>
                          <i className='add' />
                          적용
                        </Button>
                      </div>
                    </div>
                    <div className='selected-area'>
                      <p className='no-data'>선택된 상품분류 내역이 없습니다.</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row' className='vat'>
                  상품분류 선택
                </th>
                <td colSpan={3}>
                  <div className='category-wrap'>
                    <p className='desc'>상품분류 선택 후 적용 버튼을 눌러주세요.</p>
                    <div className='category-list'>
                      <ul>
                        <li>
                          <a href='#none' className='link'>
                            OPP 봉투
                          </a>
                        </li>
                        <li>
                          <a href='#none' className='link'>
                            택배봉투
                          </a>
                        </li>
                        <li className='active'>
                          <a href='#none' className='link'>
                            PP/PE 봉투
                          </a>
                        </li>
                        <li>
                          <a href='#none' className='link'>
                            지퍼백
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li className='selected'>
                          <a href='#none'>PP속폴리백(접착)</a>
                        </li>
                        <li>
                          <a href='#none'>PE속폴리백(접착)</a>
                        </li>
                        <li>
                          <a href='#none'>PP속폴리백(접착)</a>
                        </li>
                        <li>
                          <a href='#none'>PP속폴리백(접착)</a>
                        </li>
                        <li>
                          <a href='#none'>PP속폴리백(접착)</a>
                        </li>
                      </ul>
                      <div className='btn-wrap'>
                        <Button variant='contained' size='small' color='primary' className='icon'>
                          <i className='add' />
                          적용
                        </Button>
                      </div>
                    </div>
                    <div className='selected-area'>
                      <ul>
                        <li>
                          PP/PE 봉투 {'>'} PP속폴리백(접착)
                          <Button variant='outlined' color='info' className='x-small icon ml8'>
                            <i className='delete' />
                            삭제
                          </Button>
                        </li>
                        <li>
                          PP/PE 봉투
                          <Button variant='outlined' color='info' className='x-small icon ml8'>
                            <i className='delete' />
                            삭제
                          </Button>
                        </li>
                      </ul>
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
                  <div className='form-wrap row'>
                    <TextField
                      value={text}
                      onChange={handleChange}
                      inputProps={{ maxLength: 50 }}
                      helperText={`${text.length}/50자`}
                      fullWidth
                    />
                    <TextField
                      value={text}
                      onChange={handleChange}
                      inputProps={{ maxLength: 50 }}
                      helperText={`${text.length}/50자`}
                      fullWidth
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>추가상품명</th>
                <td colSpan={3}>
                  <div className='form-wrap row'>
                    <TextField
                      value={text}
                      onChange={handleChange}
                      inputProps={{ maxLength: 200 }}
                      helperText={`${text.length}/200자`}
                      fullWidth
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>상품설명</th>
                <td colSpan={3}>
                  <div className='form-wrap row'>
                    <TextField
                      value={text}
                      onChange={handleChange}
                      inputProps={{ maxLength: 200 }}
                      helperText={`${text.length}/200자`}
                      fullWidth
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>상품설명(관리자용)</th>
                <td colSpan={3}>
                  <div className='form-wrap row'>
                    <TextField
                      value={text}
                      onChange={handleChange}
                      inputProps={{ maxLength: 200 }}
                      helperText={`${text.length}/200자`}
                      fullWidth
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
                      <TextField className='x-small' />
                      <span className='unit'>cm</span>
                    </li>
                    <li>
                      <label className='label'>
                        세로<span className='essential'>*</span>
                      </label>
                      <TextField className='x-small' />
                      <span className='unit'>cm</span>
                    </li>
                    <li>
                      <label className='label'>접착</label>
                      <TextField className='x-small' />
                      <span className='unit'>cm</span>
                    </li>
                    <li>
                      <label className='label'>헤다</label>
                      <TextField className='x-small' />
                      <span className='unit'>cm</span>
                    </li>
                    <li>
                      <label className='label'>두께</label>
                      <TextField className='x-small' />
                      <span className='unit'>cm</span>
                    </li>
                    <li>
                      <label className='label'>M자</label>
                      <TextField className='x-small' />
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
                    {/* <FormGroup row className='mr16' style={{ width: '130px' }}>
                      <FormControlLabel className='ml0' control={<Checkbox />} label='기본단위 (1묶음)' />
                    </FormGroup> */}
                    <TextField sx={{ width: '120px' }} />
                    <span className='unit' style={{ marginRight: '16px' }}>
                      장
                    </span>
                    <TextField sx={{ width: '150px' }} />
                    <span className='unit'>원</span>
                    <label className='label' style={{ marginLeft: '32px' }}>
                      장당
                    </label>
                    <TextField sx={{ width: '80px' }} />
                    <span className='unit'>원</span>
                    <label className='label' style={{ marginLeft: '32px' }}>
                      할인율
                    </label>
                    <TextField sx={{ width: '80px' }} />
                    <span className='unit'>%</span>
                  </div>
                  <div className='form-wrap row'>
                    <label className='label'>대량구매 (1박스)</label>
                    {/* <FormGroup row className='mr16' style={{ width: '130px' }}>
                      <FormControlLabel className='ml0' control={<Checkbox />} label='대량구매 (1박스)' />
                    </FormGroup> */}
                    <TextField sx={{ width: '120px' }} />
                    <span className='unit' style={{ marginRight: '16px' }}>
                      장
                    </span>
                    <TextField sx={{ width: '150px' }} />
                    <span className='unit'>원</span>
                    <label className='label' style={{ marginLeft: '32px' }}>
                      장당
                    </label>
                    <TextField sx={{ width: '80px' }} />
                    <span className='unit'>원</span>
                    <label className='label' style={{ marginLeft: '32px' }}>
                      할인율
                    </label>
                    <TextField sx={{ width: '80px' }} />
                    <span className='unit'>%</span>
                  </div>
                  <div className='form-wrap row'>
                    <FormGroup row className='mr16' style={{ width: '130px' }}>
                      <FormControlLabel className='ml0' control={<Checkbox />} label='가격 대체 문구' />
                    </FormGroup>
                    <TextField value={text} fullWidth />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>적립금</th>
                <td>
                  <RadioGroup row defaultValue='기본설정 사용'>
                    <FormControlLabel value='기본설정 사용' label='기본설정 사용' control={<Radio />} />
                    <FormControlLabel value='개별설정' label='개별설정' control={<Radio />} />
                  </RadioGroup>
                </td>
                <th scope='row'>포인트</th>
                <td>
                  <RadioGroup row defaultValue='기본설정 사용'>
                    <FormControlLabel value='기본설정 사용' label='기본설정 사용' control={<Radio />} />
                    <FormControlLabel value='개별설정' label='개별설정' control={<Radio />} />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <th scope='row'>옵션사용</th>
                <td colSpan={3}>
                  <RadioGroup row defaultValue='사용안함'>
                    <FormControlLabel value='사용함' label='사용함' control={<Radio />} />
                    <FormControlLabel value='사용안함' label='사용안함' control={<Radio />} />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <th scope='row'>옵션사용</th>
                <td colSpan={3}>
                  <RadioGroup row defaultValue='사용함'>
                    <FormControlLabel value='사용함' label='사용함' control={<Radio />} />
                    <FormControlLabel value='사용안함' label='사용안함' control={<Radio />} />
                  </RadioGroup>
                  <div className='form-wrap ss mt16'>
                    <label className='label' style={{ minWidth: '100px' }}>
                      옵션 속성값
                    </label>
                    <div className='txt-wrap'>
                      <TextField sx={{ minWidth: '800px' }} />
                      <p className='desc'>
                        예) 200장, 1000장, 5000장
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
                      <TextField sx={{ minWidth: '800px' }} />
                      <p className='desc'>
                        예) 1000,2000,3000
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
                  상품 이미지<span className='essential'>*</span>
                </th>
                <td>
                  <RadioGroup row defaultValue='대표 이미지 등록' className='mt8'>
                    <FormControlLabel value='대표 이미지 등록' label='대표 이미지 등록' control={<Radio />} />
                    <FormControlLabel value='개별 이미지 등록' label='개별 이미지 등록' control={<Radio />} />
                  </RadioGroup>
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
              </tr>
              <tr>
                <th scope='row' className='vat'>
                  상품 이미지<span className='essential'>*</span>
                </th>
                <td>
                  <RadioGroup row defaultValue='대표 이미지 등록' className='mt8'>
                    <FormControlLabel value='대표 이미지 등록' label='대표 이미지 등록' control={<Radio />} />
                    <FormControlLabel value='개별 이미지 등록' label='개별 이미지 등록' control={<Radio />} />
                  </RadioGroup>
                  <div className='thumb-wrap'>
                    <ul className='thumb-list'>
                      <li>
                        <strong>상세 이미지</strong>
                        <span className='thumb'>
                          <Image src={thumb} width='120' height='120' alt='' />
                          <IconButton className='icon'>
                            <i className='delete2' />
                          </IconButton>
                        </span>
                        <span className='size'>권장 : 500 X 500(px)</span>
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
              <tr>
                <th scope='row' className='vat'>
                  상품 이미지<span className='essential'>*</span>
                </th>
                <td>
                  <RadioGroup row defaultValue='개별 이미지 등록' className='mt8'>
                    <FormControlLabel value='대표 이미지 등록' label='대표 이미지 등록' control={<Radio />} />
                    <FormControlLabel value='개별 이미지 등록' label='개별 이미지 등록' control={<Radio />} />
                  </RadioGroup>
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
                      <strong>이미지 등록시 주의사항</strong>
                      <span>상품 복사 등록시, 상품 이미지는 복사되지 않습니다.</span>
                      <span> 대표 이미지 등록하면 상세, 목록, 작은 목록에 자동생성됩니다.</span>
                      <span>최대 용량 : 2MB</span>
                      <span>파일형식 : jpg, png, gif</span>
                      <Button variant='outlined' color='info' size='medium' className='icon mt8'>
                        <i className='delete' />
                        이미지 전체 삭제
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
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
                    <ul className='thumb-list draggable'>
                      <li>
                        <span className='thumb' />
                        <IconButton className='icon'>
                          <i className='drag' />
                        </IconButton>
                      </li>
                      <li>
                        <span className='thumb' />
                        <IconButton className='icon'>
                          <i className='drag' />
                        </IconButton>
                      </li>
                      <li>
                        <span className='thumb' />
                        <IconButton className='icon'>
                          <i className='drag' />
                        </IconButton>
                      </li>
                    </ul>
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
                  <FormGroup row className='mt8'>
                    <FormControlLabel control={<Checkbox defaultChecked />} label='상품 상세 공통 사이즈  적용' />
                    <FormControlLabel control={<Checkbox />} label='개별 사이즈  적용' />
                  </FormGroup>
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
                  <FormGroup row className='mt8'>
                    <FormControlLabel control={<Checkbox defaultChecked />} label='상품 상세 공통 사이즈  적용' />
                    <FormControlLabel control={<Checkbox />} label='개별 사이즈  적용' />
                  </FormGroup>
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
      <Button variant='contained' size='medium' color='primary'>
          목록
        </Button>
        <Button variant='outlined' size='medium' color='info'>
          수정
        </Button>

      </div>
    </>
  )
}
