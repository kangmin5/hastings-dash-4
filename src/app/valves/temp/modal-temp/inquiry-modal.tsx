import React from "react";
import { setModal } from "app/systems/organisms/modal-organism/modal-reducer";
import { useDispatch } from "react-redux";
import { ModalBuilder } from "app/systems/organisms/modal-organism/modal-builder";
import { useModalSelector } from "app/systems/organisms/modal-organism/modal-selector";
import { Container, Content, Overlay } from "app/systems/molecules/modal-molecule/modal-style";
import { InquiryForm } from "app/boards/temp/inquiry-temp/inquiry-search";

export function InquiryModal() {
  const dispatch = useDispatch();
  const isAddress = useModalSelector();

  React.useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      `
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [])

  return (
    <>
      <Container>
        <Overlay />
        <Content className="modal">
          <h4>1:1 문의하기</h4>
          <div className="btn-container">

            <div>
              <button onClick={() => { dispatch(setModal(new ModalBuilder().isShippingMemo(false).build())) }}> 모달 닫기</button>
              <InquiryForm />
            </div>


          </div>
        </Content>
      </Container>
    </>
  );
};
