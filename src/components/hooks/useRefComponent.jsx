import React, { useRef, useState } from "react";
import { useEffect } from "react";

function UseRefComponent() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.style.display = "none";
  }, []);

  const handleClick = () => {
    inputRef.current.style.backgroundColor = "#70ce5f";
    inputRef.current.style.color = "black";
    inputRef.current.style.display = "inline-block";
  };

  return (
    <div className="px-5 mt-5 wrapper" dir="rtl">
      <p>یک ساعت چند دقیقه است ؟</p>
      <p ref={inputRef} className="p-3 text-center">
        60 دقیقه
      </p>
      <button className="btn btn-primary my-2" onClick={handleClick}>
        مشاهده پاسخ سوال
      </button>
    </div>
  );
}

export default UseRefComponent;
