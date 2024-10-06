import { useState } from "react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";

export const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button label="Open Modal" onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal
          children={<ModalChildren setShowModal={setShowModal} />}
          onClose={() => setShowModal(false)}
          open={showModal}
          title="Add Todo"
        />
      )}
    </div>
  );
};

interface ModalChildrenProps {
  setShowModal: (value: boolean) => void;
}

const ModalChildren = ({ setShowModal }: ModalChildrenProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Input
        type="text"
        label="Add Todo"
        placeholder="Agrega tu task"
        sx={{ borderColor: "black" }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: "5px",
        }}
      >
        <Button
          mode="text"
          label="Cancelar"
          onClick={() => setShowModal(false)}
        />
        <Button label="Agregar" mode="primary" />
      </div>
    </div>
  );
};
