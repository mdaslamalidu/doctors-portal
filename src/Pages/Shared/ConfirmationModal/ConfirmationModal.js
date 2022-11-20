import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
  successBtnName,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="my-modal"
              className="btn btn-sm bg-black text-white hover:text-black"
            >
              {successBtnName}
            </label>
            <label
              onClick={closeModal}
              htmlFor="my-modal"
              className="btn btn-sm bg-black text-white hover:text-black"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
