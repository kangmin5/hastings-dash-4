import React, { useState } from 'react'
import type { GetStaticProps, NextPage } from "next"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeView from '@mui/lab/TreeView'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'

import { MuiDraggableTreeView, TreeNode } from 'mui-draggable-treeview'

import TreeItem from '@mui/lab/TreeItem'
import { alpha, styled } from '@mui/material/styles'
import MuiTreeView, { TreeViewProps } from '@mui/lab/TreeView'

// ** Icon Imports
import Icon from './category/icon'
interface Parameters {
  post: string;
}
const CategoryPage: NextPage = ({post}: Parameters) => {
  const data: TreeNode = {
    id: '1',
    name: 'Cars',
    children: [
      {
        id: '2',
        name: 'Sport Cars',
        children: [
          {
            id: '24',
            name: 'Porsche'
          },
          {
            id: '25',
            name: 'Ferrari'
          },
          {
            id: '26',
            name: 'McLaren'
          }
        ]
      },
      {
        id: '3',
        name: 'Classic Cars',
        children: [
          {
            id: '34',
            name: '1957 Corvette'
          },
          {
            id: '35',
            name: 'Volkswagen Beetle'
          },
          {
            id: '36',
            name: 'Bentley'
          }
        ]
      }
    ]
  }
  const [text, setText] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value)
  }

  const TreeView = styled(MuiTreeView)<TreeViewProps>(({ theme }) => ({
    minHeight: 264,
    '& .MuiTreeItem-iconContainer .close': {
      opacity: 0.3
    },
    '& .MuiTreeItem-group': {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
    }
  }))

  //**TODO 79번라인 */

  return (
    <>
      <Typography variant='h2'>상품분류 관리</Typography>
      <div className='col-wrap'>
        <div className='col-left'>
          <h3>상품분류 설정</h3>
         {/* <MuiDraggableTreeView tree={data} enableDragAndDrop={true} /> */}

         <TreeView
      defaultExpanded={['1']}
      defaultExpandIcon={<Icon icon='mdi:plus-box-outline' />}
      defaultCollapseIcon={<Icon icon='mdi:minus-box-outline' />}
      defaultEndIcon={<Icon icon='mdi:close-box-outline' className='close' />}
    >
      <TreeItem nodeId='1' label='Main'>
        <TreeItem nodeId='2' label='Hello' />
        <TreeItem nodeId='3' label='Subtree with children'>
          <TreeItem nodeId='6' label='Hello' />
          <TreeItem nodeId='7' label='Sub-subtree with children'>
            <TreeItem nodeId='9' label='Child 1' />
            <TreeItem nodeId='10' label='Child 2' />
            <TreeItem nodeId='11' label='Child 3' />
          </TreeItem>
          <TreeItem nodeId='8' label='Hello' />
        </TreeItem>
        <TreeItem nodeId='4' label='World' />
        <TreeItem nodeId='5' label='Something something' />
      </TreeItem>
    </TreeView>
        </div>
        <div className='col-right'>
          <div className='tit-wrap no-line'>
            <h3>분류정보</h3>
            <p className='right'>
              <span className='essential'>*</span> 필수입력사항
            </p>
          </div>
          <div className='tbl-write type4'>
            <table>
              <caption>분류상세정보</caption>
              <colgroup>
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>현재분류</th>
                  <td>OPP무지 {'>'} 새 상품분류</td>
                </tr>
                <tr>
                  <th scope='row'>링크주소 (PC)</th>
                  <td>
                    https://hrbongtoo.com/product/list.html?cate_no=42{' '}
                    <Button variant='outlined' className='x-small ml8' color='info'>
                      복사
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>링크주소 (MOB)</th>
                  <td>
                    https://hrbongtoo.com/product/list.html?cate_no=42{' '}
                    <Button variant='outlined' className='x-small ml8' color='info'>
                      복사
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    분류명<span className='essential'>*</span>
                  </th>
                  <td>
                    <div className='form-wrap row'>
                      <TextField
                        value={text}
                        onChange={handleChange}
                        inputProps={{ maxLength: 15 }}
                        helperText={`${text.length}/15자`}
                        sx={{ width: '320px' }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>분류설명</th>
                  <td>
                    <div className='form-wrap row'>
                      <TextField
                        value={text}
                        onChange={handleChange}
                        inputProps={{ maxLength: 30 }}
                        helperText={`${text.length}/30자`}
                        fullWidth
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>쇼핑몰 노출</th>
                  <td>
                    <RadioGroup row defaultValue='쇼핑몰에 숨김'>
                      <FormControlLabel value='쇼핑몰에 노출' label='쇼핑몰에 노출' control={<Radio />} />
                      <FormControlLabel value='쇼핑몰에 숨김' label='쇼핑몰에 숨김' control={<Radio />} />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    상품진열
                  </th>
                  <td>
                    <FormControl>
                      <Select name='funnel_type' defaultValue='all'>
                        <MenuItem value='all'>상품 등록 순서</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select name='funnel_type' defaultValue='all'>
                        <MenuItem value='all'>최근 추가된 상품이 아래로</MenuItem>
                      </Select>
                    </FormControl>
                    <FormGroup row sx={{ marginTop: '0.5rem' }}>
                      <FormControlLabel control={<Checkbox defaultChecked />} label='하위분류 일괄 적용' />
                      <FormControlLabel control={<Checkbox />} label='품절상품 항상 뒤로 보냄' />
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='tit-wrap no-line'>
            <h3>분류 상단 꾸미기</h3>
          </div>
          <div className='tbl-write type4'>
            <table>
              <caption>분류상세정보</caption>
              <colgroup>
                <col style={{ width: '160px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>상단 이미지(웹)</th>
                  <td>
                    <div className='form-wrap'>
                      <RadioGroup row defaultValue='사용 안 함'>
                        <FormControlLabel value='사용 안 함' label='사용 안 함' control={<Radio />} />
                        <FormControlLabel value='이미지 직접등록' label='이미지 직접등록' control={<Radio />} />
                      </RadioGroup>
                      <FormGroup>
                        <FormControlLabel value='하위분류 동시적용' label='하위분류 동시적용' control={<Checkbox />} />
                      </FormGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>첨부파일 여기에 표시</td>
                </tr>
                <tr>
                  <td colSpan={2}>이미지 미리보기 영역</td>
                </tr>
                <tr>
                  <th scope='row'>상단 이미지(모바일)</th>
                  <td>
                    <div className='form-wrap'>
                      <RadioGroup row defaultValue='사용 안 함'>
                        <FormControlLabel value='사용 안 함' label='사용 안 함' control={<Radio />} />
                        <FormControlLabel value='이미지 직접등록' label='이미지 직접등록' control={<Radio />} />
                      </RadioGroup>
                      <FormGroup>
                        <FormControlLabel value='하위분류 동시적용' label='하위분류 동시적용' control={<Checkbox />} />
                      </FormGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>첨부파일 여기에 표시</td>
                </tr>
                <tr>
                  <td colSpan={2}>이미지 미리보기 영역</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='btn-align'>
        <Button variant='outlined' size='medium' color='info'>
          취소
        </Button>
        <Button variant='contained' size='medium' color='primary'>
          저장
        </Button>
      </div>
    </>
  )
}
export default CategoryPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "고객상담 관리",
    },
  };
};
