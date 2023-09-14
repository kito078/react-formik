import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "not larger than 15 cha")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "not larger than 20 cha")
        .required("Required"),
      email: Yup.string().max(10, "invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          className="firstName"
          type="text"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
        <input
          id="lastName"
          className="lastName"
          type="text"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <input
          id="email"
          className="email"
          type="text"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default Signup;
