import './Modal.css'

// importing modules
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Modal Component
const Modal = ({ children }) => {
    const elRef = useRef(null);

    // we are create a div using ref
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        // it is the div we created in index.js
        const modalRoot = document.getElementById("modal");

        modalRoot.appendChild(elRef.current);

        // to destroy this modal after use
        return () => modalRoot.removeChild(elRef.current);
    }, [])

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;