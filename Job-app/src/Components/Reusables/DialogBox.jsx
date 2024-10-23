import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import errorIcon from "../../assets/Icons/errorIcon.png";
import successIcon from "../../assets/Icons/successIcon.png";

const DialogBox = ({ dialogType, message, onClose }) => {
  useEffect(() => {
    // Event listener for clicking outside the modal content
    const handleOutsideClick = (e) => {
      if (e.target.id === "dialog-overlay") {
        onClose();
      }
    };

    // Add event listener to the window for clicks
    window.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="fixed w-full h-full bg-gray-600  flex justify-center items-center"
      id="dialog-overlay"
    >
      <div className="w-[28rem] h-[12rem] bg-white flex flex-col gap-4 justify-center items-center rounded-md">
        <div>
          {dialogType === "success" ? (
            <img src={successIcon} alt="Success" className="w-16 h-16" />
          ) : (
            <img src={errorIcon} alt="Error" className="w-16 h-16" />
          )}
        </div>
        <p>{message}</p>
        <button
          className="px-4 py-2 bg-red-600 rounded-md text-white"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
