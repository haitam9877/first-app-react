export default function Modal({ isVisbel, errorMassage = null }) {
  if (isVisbel) {
    return (
      <div className="box-modal">
        <div className="main-modal" style={{ background: "white" }}>
          {/* <h1>{}</h1> */}
          <h1
            style={{
              color: errorMassage !== null ? "red" : "#0f0f",
              padding: "5px 20px",
            }}
          >
            {errorMassage === null
              ? "A loan has been successfully obtained"
              : errorMassage}
          </h1>
        </div>
      </div>
    );
  }
}
