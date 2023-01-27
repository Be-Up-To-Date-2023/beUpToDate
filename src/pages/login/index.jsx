import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import ButtonComponent from "../../components/buttons/buttonComponent";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const [userData, setUserData] = useState({
    firsName: null,
    lastName: null,
    phone: null,
    address: null,
    password: null,
    configPassword: null,
    emailAddress: null,
    age: null,
  });

  const formData = [
    {
      id: 1,
      type: "text",
      value: userData.firsName,
      name: "firsName",
      label: "name",
      placeholder: "enter your name",
      className: "col-6",
    },
    {
      id: 2,
      type: "text",
      value: userData.lastName,
      name: "lastName",
      label: "last name:",
      placeholder: "enter your last name",
      className: "col-6",
      length: 6,
      message: "نام خانوادگی باید حداقل 6 کارکتر باشد",
    },
    {
      id: 3,
      type: "number",
      value: userData.phone,
      name: "phone",
      label: "phone number:",
      placeholder: "enter your phone number",
      className: "col-6",
    },
    {
      id: 4,
      type: "address",
      value: userData.address,
      name: "address",
      label: "address",
      placeholder: "enter your address",
      className: "col-6",
    },
    {
      id: 5,
      type: "password",
      value: userData.password,
      name: "password",
      label: "password:",
      placeholder: "enter your password",
      className: "col-6",
      length: 5,
      message: "طول رمز بیشتر از 5 کاراکتر باشد",
    },
    {
      id: 6,
      type: "password",
      value: userData.configPassword,
      name: "configPassword",
      label: "repeat password:",
      placeholder: "repeat your password",
      className: "col-6",
      length: 5,
      message: "طول رمز بیشتر از 5 کاراکتر باشد",
    },
    {
      id: 7,
      type: "email",
      value: userData.emailAddress,
      name: "emailAddress",
      label: "email address:",
      placeholder: "enter your email address",
      className: "col-6",
    },
    {
      id: 8,
      type: "number",
      value: userData.age,
      name: "age",
      label: "age:",
      placeholder: "enter your age",
      className: "col-6",
      min: 18,
      message: "سن شما کمتر از 18 سال است",
    },
  ];

  const sumbitMyForm = (e) => {
    console.log("useForm : ", e);
    console.log("userData : ", userData);
  };

  return (
    <Form
      className="row mt-5 w-75 p-5 mx-auto d-flex justify-content-center align-items-center"
      onSubmit={handleSubmit(sumbitMyForm)}
    >
      {formData.map(
        ({
          id,
          type,
          name,
          value,
          placeholder,
          label,
          className,
          length,
          min,
          message,
        }) => (
          <Form.Group key={id} className={`mt-3 ${className}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              {...register(name, {
                required: { value: true, message: message },
                minLength: { value: length, message: message },
                min: { value: min, message: message },
                onChange: (e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target?.value,
                  });
                },
              })}
            />
            <h6 className=" mt-2 text-danger">{errors[name]?.message}</h6>
          </Form.Group>
        )
      )}
      <ButtonComponent
        type="submit"
        className="backgr-primary_dark w-25 mt-5"
        disabled={!isValid}
      >
        Submit
      </ButtonComponent>
    </Form>
  );
}

export default LoginPage;

//{...register}
