import React, {useState} from "react";
import {Modal, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Registration} from './Registration';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Войти для просмотра ранних сценариев
  </Tooltip>
);

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}>
        <div align="right" style={{ width: '10rem' }}>
      <Button variant="outline-secondary" className="mx-5" onClick={handleShow}> Вход </Button></div>
      </OverlayTrigger>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center text-secondary">Вход</Modal.Title>
        </Modal.Header>
        <Registration />
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Вход
          </Button>
          <Button variant="secondary" onClick={handleClose} className="text-white">
            Регистрация
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modals;
