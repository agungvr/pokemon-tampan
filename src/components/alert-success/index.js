import React, { useState } from "react";
import Modal from "../../components/modal";
import {
  Container,
  Content,
  Button,
  Image,
  Input,
  Title,
  ErrorMessage
} from "./style";

const AlertSuccess = ({ isOpen, data, image, onClose, onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(true);

  const onChangeHanlder = ({ target }) => {
    const { value } = target;
    if (value !== "") {
      setDisable(false);
      setError("");
    } else {
      setDisable(true);
      setError("Please fill out this field!");
    }
    setInput(value);
  };

  const onClick = () => {
    if (disable) return;
    const isAlready = data.find(item => item.nickname === input);
    if (isAlready) {
      setError("The nickname already exists");
    } else {
      onSubmit(input);
    }
  };

  return (
    <Modal
      title="Change Section to Edit"
      onClose={onClose}
      isOpen={isOpen}
      maxHeight="70vh"
      contentStyle={{
        maxWidth: "296px",
        backgroundImage:
          "linear-gradient( to right, rgba(214,255,222,0.9) 1%, rgba(229,245,255,0.9) 98% )"
      }}
    >
      <Container>
        <Content>
          <Title>You catched it!</Title>
          <Image src={image} alt="pokemon-tampan" />
          <span>Let's give nickname to your pokemon!</span>
          <Input
            placeholder="Ex: Si Ganteng Tak Terbatas"
            onChange={onChangeHanlder}
            value={input}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Content>
        <Button disabled={disable} onClick={onClick}>
          Submit
        </Button>
      </Container>
    </Modal>
  );
};

export default AlertSuccess;
