import { Component, useState } from "react";
import "./card.styles.css";
import PopUp from "../popup/popup.component";
import ReactModal from "react-modal";
import Popup from "../popup/popup.component";

const Card = (props) => {
  const { name, email, id } = props.card;
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`card ${name}`}
        onClick={setIsOpen}
      />
      <h2>{name}</h2>
      <p onClick={handleShow}>{email}</p>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal" onRequestClose={() => setIsOpen(false)}
      >
        This is the content of the modal.
      </ReactModal>
      <Popup handleClose={handleClose} show={show} id={id}/>
    </div>
  );
};
export default Card;
