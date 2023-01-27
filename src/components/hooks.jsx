import React, { useEffect, useState } from "react";
import GoHomeButton from "./buttons/goHomeButton";

const Hooks = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("!فقط یکبار اجرا میشم ،از همون لحظه ای که به دنیا بیام");
  }, []);

  useEffect(() => {
    console.log(
      "همون لحظه ای که به دنیا بیام ، تا هر وقت که کلیک کنی اجرا میشم"
    );
  }, [data]);

  useEffect(() => {
    return () => {
        console.log(
            " موقع خداحافظی اجرا میشم 😭"
          );
          alert("بازم به ما سر بزن")
    }
  }, []);

  return (
    <div className="container d-flex flex-column mt-5">
      <button
        className="btn btn-primary mx-auto"
        onClick={() => setData((data) => data + 1)}
      >
        click here to change data!
      </button>
      <p className="text-center mt-5">data : {data}</p>
      <GoHomeButton/>
    </div>
  );
};

export default Hooks;
