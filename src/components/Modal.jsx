import React from "react";

const Modal = ({ tittle, message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay border p-3">
      <div className="modal-content p-3">
        <h5>{tittle}</h5>
        <p>{message}</p>
        <div className="modal-actions m-1 ">
          <button className="btn btn-danger btn-modal" onClick={onConfirm}>
            Yes, Delete
          </button>
        </div>
        <div className="modal-actions m-1 ">
          <button className="btn btn-secondary btn-modal" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
