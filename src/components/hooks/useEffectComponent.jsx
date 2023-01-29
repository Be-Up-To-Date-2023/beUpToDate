import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [data, setData] = useState(0);
  const [inputData, setInputData] = useState("hello");

  useEffect(() => {
    console.log("!فقط یکبار اجرا میشم ،از همون لحظه ای که به دنیا بیام");
  }, []);

  useEffect(() => {
    console.log(
      `تولد مقدار ${data}🎉`
    );
  }, [data]);

  useEffect(() => {
    console.log("همین الان رندر شدم پس اجرا میشم😐");
  });

  useEffect(() => {
    return () => {
      console.log(`مرگ مقدار ${data}😭`);
    };
  }, [data]);

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
