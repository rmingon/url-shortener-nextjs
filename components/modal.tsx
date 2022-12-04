import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: string;
  title?: string;
}

const Modal = ({ show, onClose, children, title }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-600/50 magicTime vanishIn">
      <div className="bg-white w-2/3 h-2/3 rounded p-4">
        <div className="flex text-2xl justify-between">
          <div>
            {title}
          </div>
          <a href="#" onClick={handleCloseClick}>
            <svg width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 14l20 20m-20 0l20-20"/></svg>
          </a>
        </div>

        <div className="StyledModalBody">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLInputElement
    );
  } else {
    return null;
  }
};

export default Modal;