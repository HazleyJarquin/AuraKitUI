import { useState } from "react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

export const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button label="Open Modal" onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal
          children={<p>Modal example</p>}
          onClose={() => setShowModal(false)}
          open={showModal}
        />
      )}
    </div>
  );
};
