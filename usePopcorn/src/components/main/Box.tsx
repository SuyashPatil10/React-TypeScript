import { useState, type ReactNode } from "react";

type ListBoxProps = {
  children: ReactNode;
};

function Box({ children }: ListBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open: boolean) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
