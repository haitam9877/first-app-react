/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Modal from "./Modal";
import MyInput from "./MyInput";
import { LoanContexts } from "./ConText/MyInputConText";

export default function TakeALoan() {
  // use State All Forms Input
  const [errorMassage, seterrorMassage] = useState(null);
  const [isVisbel, setIsVisbel] = useState(false);
  const [formsValue, setFormsValue] = useState({
    name: "",
    phone: "",
    age: "",
    salary: false,
    bankloan: "",
    errorMassage: "",
  });

  const prisLona = ["100$", "200$", "300$"];
  const prisLonaMap = prisLona.map((prisLona) => {
    return (
      <>
        <option>{prisLona}</option>
      </>
    );
  });
  const dsBtn =
    formsValue.name == "" || formsValue.phone == "" || formsValue.age == "";

  function handlFormsClick(e) {
    const { phone, age } = formsValue;

    seterrorMassage(null);
    e.preventDefault();
    setIsVisbel(true);

    if (phone.length < 10 || phone.length > 12) {
      seterrorMassage("Phone Namber Is Incorict");
    } else if (age < 18 || age >= 100) {
      seterrorMassage("This age is not allowed");
    }
  }

  function setValueName(value) {
    setFormsValue({ ...formsValue, name: value });
  }
  function setValuePhone(value) {
    setFormsValue({ ...formsValue, phone: value });
  }

  function setValueAge(value) {
    setFormsValue({ ...formsValue, age: value });
  }

  return (
    <>
      <div
        className="box"
        onClick={() => {
          if (isVisbel) {
            setIsVisbel(false);
          }
        }}
      >
        <form className="box-forms">
          <LoanContexts.Provider
            value={{
              nameTitle: "name:",
              inputValue: formsValue.name,
              setValue: setValueName,
            }}
          >
            <MyInput />
          </LoanContexts.Provider>

          <LoanContexts.Provider
            value={{
              nameTitle: "Phone Numbar:",
              inputValue: formsValue.phone,
              setValue: setValuePhone,
            }}
          >
            <MyInput />
          </LoanContexts.Provider>

          <LoanContexts.Provider
            value={{
              nameTitle: "age:",
              inputValue: formsValue.age,
              setValue: setValueAge,
            }}
          >
            <MyInput />
          </LoanContexts.Provider>

          <div className="mb-3">
            <p>Are You An Employee ?</p>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={formsValue.salary}
                onChange={(e) => {
                  setFormsValue({ ...formsValue, salary: e.target.checked });
                }}
              />
              <label className="form-check-label">Salary</label>
            </div>
          </div>
          <div className="mb-3">
            <select
              class="form-select"
              value={formsValue.bankloan}
              onChange={(e) => {
                setFormsValue({ ...formsValue, bankloan: e.target.value });
              }}
            >
              {prisLonaMap}
            </select>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handlFormsClick}
              disabled={dsBtn}
            >
              Submit
            </button>
          </div>
        </form>

        <Modal isVisbel={isVisbel} errorMassage={errorMassage} />
      </div>
    </>
  );
}
