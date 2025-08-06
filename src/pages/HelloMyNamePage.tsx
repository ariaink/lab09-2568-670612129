import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("Please insert your name");
  const [isOk, setIsOk] = useState(false);

  const nameInput = (event: any) => {
    setName(event.target.value);
  };

  const greetBtnOnclick = () => {
    if (name === "") {
      setResult("Please insert your name");
      setIsOk(false);
    } else {
      setResult(`Hello ${name}`);
      setIsOk(true);
    }
  };

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={nameInput}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclick}>
        Greet Me
      </button>
      <p className={isOk ? "" : "text-danger"}>{result}</p>
    </div>
  );
}
