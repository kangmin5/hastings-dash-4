import styled from "styled-components";

export default class CustomBorder {

  basic = styled.div`
  margin-bottom: 5rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.color};
`



  constructor() { }


}



