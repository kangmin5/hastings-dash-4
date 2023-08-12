import Box from "@mui/material/Box";
import * as React from "react";
import styled from "styled-components";


export function Pager({pageVo,onClick}) {

  console.log("페이지네이션 캐리아웃 내부");
  const vo = pageVo
  const pageNo = (vo.pageNo == 0) ? 1 : vo.pageNo
  console.log("페이지번호: " + pageNo);
  const pageSize = (vo.pageSize == null) ? 5 : vo.pageSize
  console.log("페이지사이즈: " + pageSize);
  const blockSize = (vo.blockSize == null) ? 5 : vo.blockSize
  console.log("불록사이즈: " + blockSize);
  const rowCount = vo.rowCount;
  console.log("전체 카운트: " + rowCount);
  const nmg = rowCount % pageSize;
  const pageCount = (nmg == 0) ? Math.floor(rowCount / pageSize) : Math.floor(rowCount / pageSize) + 1;
  console.log("전체 페이지수: " + pageCount);
  const startRow = (pageNo - 1) * pageSize + 1;
  console.log("스타트로우: " + startRow);
  const endRow = (rowCount > pageNo * pageSize) ? pageNo * pageSize : rowCount;
  console.log("엔드로우: " + endRow);
  const startPage = pageNo - ((pageNo - 1) % blockSize);
  console.log("스타트페이지: " + startPage);
  const endPage = ((startPage + pageSize - 1) < pageCount) ? startPage + blockSize - 1 : pageCount;
  console.log("엔드페이지: " + endPage);
  const existPrev = (startPage - pageSize) > 0;
  const existNext = (startPage + pageSize) <= pageCount;
  const prevBlock = startPage - pageSize;
  console.log("프리브블록: " + prevBlock);
  const nextBlock = startPage + pageSize;
  console.log("넥스트블록: " + nextBlock);


  const options = () => {
    const list = [];
    list.push(<option key={0} value={5}>{5}개보기</option>)
    for (let i = 0; i < 3; i++) {
      const idx = i + 1
      const count = idx * 10;
      list.push(<option key={idx} value={(idx) * 10}>{count}개보기</option>)
    }
    return list;
  }

  const list = () => {
    const list = [];
    if (existPrev) {
      list.push(<li onClick={onClick} style={{ cursor: "pointer", display: "inline", border: "0 1px black", margin: "20px", color:"black" }}>이전</li>)
    }else{
      list.push(<li style={{ display: "inline", border: "0 1px black", margin: "20px", color: "gray" }}>이전없음</li>)
    }
    for (let i = 0; i < pageCount; i++) {
      list.push(
        <li key={i} onClick={()=>onClick(i + 1)} 
        style={{ cursor: "pointer", display: "inline", border: "0 1px black", margin: "20px", color: (pageNo==(i+1))?"red":"black" }}>
     
      {(i + 1)}
      
      </li>);
    }
    if (existNext) {
      list.push(<li onClick={onClick} style={{ cursor: "pointer", display: "inline", border: "0 1px black", margin: "20px", color:"black" }}>다음</li>)
    }else{
      list.push(<li style={{ display: "inline", border: "0 1px black", margin: "20px", color: "gray" }}>다음없음</li>)
    }
    return list;
  };


  return (<>
    <>
      <form id="paging_form" className="form-inline my-2 my-lg-0">
        <select name="site" > {options()}</select>
      </form>
    </>
    <ul>{list()}</ul>
  </>)
}


//** https://gist.github.com/its-tayo/f51f8750ca37688b9fb8d7b389b32614 */

const PageBox = styled(Box)`
cursor: pointer, display: inline, border: 0 1px black, margin: 20px
`

//** https://v3-2.adminbro.com/admin-bro-design-system_src_molecules_pagination.tsx.html */