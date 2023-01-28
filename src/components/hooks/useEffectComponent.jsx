import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [data, setData] = useState(0);
  const [inputData, setInputData] = useState("hello");

  useEffect(() => {
    console.log("!فقط یکبار اجرا میشم ،از همون لحظه ای که به دنیا بیام");
  }, []);

  useEffect(() => {
    console.log(
      "همون لحظه ای که به دنیا بیام ، تا هر وقت که کلیک کنی اجرا میشم"
    );
  }, [data]);

  useEffect(() => {
    console.log("همین الان رندر شدم پس اجرا میشم😐");
  });

  useEffect(() => {
    return () => {
      console.log("موقع خداحافظی اجرا میشم 😭");
      alert("بازم به این کامپوننت سر بزن");
    };
  }, []);

  return (
    <div className="container d-flex flex-column mt-5">
      <button
        className="btn btn-primary mx-auto"
        onClick={() => setData((data) => data + 1)}
      >
        data تغییر مقدار
      </button>
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="useEffect-input"
      />
    </div>
  );
};

export default Hooks;
