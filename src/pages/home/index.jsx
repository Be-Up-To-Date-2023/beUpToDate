import React from "react";

const HomePage = () => {
  return (
    <div className="about-hooks" dir="rtl">
      <h1 className="fs-1 text-center text-primary_dark"> هوک ها چی هستن ؟🤔</h1>
      <h3 className="text-center my-4">توابعی  در  function component  ها برای مدیریت چرخه حیات هر کامپوننت</h3>
      <ul>
        🟣ویژگی ظاهری :
        <li>نام اونا با use شروع میشه</li>
        <li>تابع هستن</li>
      </ul>
      <ul>
        🟣روش درست مصرف :
        <li>در بالاترین سطح کد استفاده شوند ، در حلقه ها یا توابع تو در تو نباید استفاده شوند</li>
        <li>فقط در function component ها قابل استفاده اندّ </li>
      </ul>
    </div>
  );
};

export default HomePage;
