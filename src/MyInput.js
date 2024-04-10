import { useContext } from "react";
import { LoanContexts } from "./ConText/MyInputConText";

export default function MyInput() {
  const loanContext = useContext(LoanContexts);

  return (
    <>
      <div className="mb-3">
        <label className="form-label">{loanContext.nameTitle}</label>
        <input
          className="form-control"
          value={loanContext.inputValue}
          onChange={(e) => {
            loanContext.setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
}
