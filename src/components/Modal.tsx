import React, { ReactNode, type FC } from "react";

type ModalStateProps = {
  isOpen: Boolean;
  onClose: (A?: any) => any;
  children: ReactNode;
  className?: string;
};

const ModalState: FC<ModalStateProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
  return (
    <React.Fragment>
      <div
        className={`fixed left-0 top-0 z-50 grid h-screen w-screen place-content-center overflow-hidden bg-black bg-slate-900/30 bg-opacity-70 backdrop-blur-[2px] transition-all duration-200 ${
          isOpen ? "" : "invisible opacity-0"
        } `}
        onClick={() => onClose(false)}
      >
        <div
          className={`${isOpen ? "translate-x-0" : ""} ${className} `}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};
export default ModalState;
