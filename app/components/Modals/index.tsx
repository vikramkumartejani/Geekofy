"use client";
import React, { CSSProperties } from "react";
import { GenericElements } from "@/types";
import Box from "../Element/Box";

interface IPopup {
  children: GenericElements;
  isOpen: boolean;
  onClose: () => void;
  boxClassName?: string;
  boxStyle?: CSSProperties;
  isShowHeadingAndCroosIcon?: boolean;
}
const Modal = ({
  children,
  isOpen,
  onClose,
  boxClassName,
  boxStyle,
}: IPopup) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed right-0 top-0 z-50 min-h-screen w-screen bg-[#000000BF] backdrop-opacity-40"
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            className={
              "absolute left-[50%] top-[50%] max-h-[90vh] min-h-[200px] min-w-[300px] max-w-[846px] translate-x-[-50%] translate-y-[-50%] overflow-auto " +
              boxClassName
            }
            paddings="none"
            style={boxStyle}
          >
            {/* <div
              onClick={onClose}
              className="absolute top-2 right-4 w-[16px] h-[16px] bg-black "
            /> */}
            {children}
          </Box>
        </div>
      )}
    </>
  );
};

export default Modal;
