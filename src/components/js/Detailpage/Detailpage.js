import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalContext } from "../Provider/ModalProvider";
import { Container } from "react-bootstrap";
import EachCardModal from "../EachCardModal/EachCardModal";
import { MdFastfood } from "react-icons/md";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Detailpage.scss";

function Detailpage(props = {}) {
  const { name = "" } = props,
    { show, setShow } = useContext(ModalContext);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="w-100 text-center modal-title-custom"
            centered
            id="example-custom-modal-styling-title"
          >
            {name}
            <span className="mx-1">
              <MdFastfood style={{ width: "30px" }} />
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <EachCardModal {...props} />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Detailpage;
