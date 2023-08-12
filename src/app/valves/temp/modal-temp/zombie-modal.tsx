// import { useDispatch } from "react-redux";
// // import { clearCart } from "../features/cart/cartSlice";
// import styled from "styled-components";
// import { closeModal } from "app/systems/organisms/modal-organism/modal-reducer";
// import { ModalVo } from "app/systems/organisms/modal-organism/modal-vo";

// export function Modal  () {
//   const dispatch = useDispatch();

//   return (
//     <Container>
//       <Overlay/>
//       <Content className="modal">
//         <h4>remove all items from your shopping cart?</h4>
//         <div className="btn-container">
//         <button onClick={()=>{dispatch(closeModal(new ModalVo()))}}> 모달 닫기</button>
        
//         </div>
//       </Content>
//     </Container>
//   );
// };


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   inset: 0;
//   z-index: 1;
// `;
// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.3);
// `;
// const Content = styled.section`
//   width: 100rem;
//   height: 50rem;
//   background: #fff;
//   padding: 2rem;
//   z-index: 1;
// `;