import React from "react";

interface AdvaceInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isRegister?: boolean;
}

function AdvanceInput({ isRegister, ...rest }: AdvaceInputProps) {
  return (
    <div className={isRegister ? "text-dark" : "text-secondary"}>
      <input {...rest} />
    </div>
  );
}

export default AdvanceInput;
