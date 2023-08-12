import { setModal } from "app/systems/organisms/modal-organism/modal-reducer";
import { useDispatch } from "react-redux";
import { ModalBuilder } from "app/systems/organisms/modal-organism/modal-builder";
import { useModalSelector} from "app/systems/organisms/modal-organism/modal-selector";
import { Container, Content, Overlay } from "app/systems/molecules/modal-molecule/modal-style";

export function ShippingMemoModal  () {
    const dispatch = useDispatch();
    const isAddress = useModalSelector();
  
    return (
      <Container>
        <Overlay/>
        <Content className="modal">
          <h4>배송 메모</h4>
          <div className="btn-container">
          <button onClick={()=>{dispatch(setModal(new ModalBuilder().isShippingMemo(false).build()))}}> 모달 닫기</button>
          
          </div>
        </Content>
      </Container>
    );
  };
  