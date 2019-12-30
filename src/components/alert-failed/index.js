import React from "react";
import Modal from "../../components/modal";
import { Container, Content, Button, Image } from "./style";

const AlertFailed = ({ isOpen, onClose }) => {
  return (
    <Modal
      title="Change Section to Edit"
      onClose={onClose}
      isOpen={isOpen}
      maxHeight="70vh"
      contentStyle={{
        maxWidth: "296px"
      }}
    >
      <Container>
        <Content>
          <Image
            alt="pokemon-tampan"
            src={require("../../assets/images/sad_pikachu.png")}
          />
          You are not succesfull catch it. Try Again!
        </Content>
        <Button onClick={onClose}>Close</Button>
      </Container>
    </Modal>
  );
};

export default AlertFailed;
