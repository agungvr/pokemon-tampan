import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 10001;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.3);
  /* background-color: lightgray; */
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur();
`;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  padding: 12px 0px 16px 0px;
  border-bottom: solid 1px #e1e8ed;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  padding: 12px 16px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  max-height: 70vh;
  width: ${({ width }) => width || "500px"};
  min-width: 296px;
  z-index: 10003;

  ${({ contentStyle }) => contentStyle || null}

  @media (max-width: 768px) {
    padding: 12px 24px;
    width: 90%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: ${({ flex }) => flex || "1"};
  padding: ${({ padding }) => padding || "0px"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-direction: ${({ direction }) => direction || "column"};
  margin: ${({ margin }) => margin || "0px"};
`;

const Line = styled.div`
  width: 100%;
  border-bottom: solid 1px #e1e8ed;
`;

const element = document.getElementById("modal");

const BasicModal = ({
  isOpen = false,
  title,
  children,
  actions,
  modalWidth,
  contentStyle,
  onClose = () => {},
  easyClose = false,
  marginContent,
  withoutLine = false
}) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
  }

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen}>
      {easyClose && <ModalWrapper onClick={onClose} />}
      <ModalContent
        name="modalContent"
        active
        width={modalWidth}
        contentStyle={contentStyle}
      >
        {/* <Headers>
          <Wrapper justify="start" align="start" margin={marginContent}>
            {" "}
            {typeof title === "string" ? <h4>{title}</h4> : title}
          </Wrapper>
        </Headers> */}
        {/* {!withoutLine && <Line />} */}
        <Wrapper margin={marginContent} padding="8px 0px 0px" align="start">
          {children}
        </Wrapper>
      </ModalContent>
    </Modal>,
    element
  );
};

export default BasicModal;
