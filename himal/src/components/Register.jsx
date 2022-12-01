import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FieldContainer, FieldError, FormSuccess } from "./common";
import { Link, useNavigate,  } from "react-router-dom";


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  fName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Valid Name is required!"),
  lName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Valid Name is required!"),
  username:yup.string().required("User Name Required"),
  number: yup.number().required("Phone Number is Required"),
  email: yup
    .string()
    .email("The email address is invalid")
    .required("Email is required!"),

  password: yup
    .string("The password is invalid")
    .min(2, "Too Short!")
    .matches(
      PASSWORD_REGEX,
      "Please create a strong password having mixed characters!"
    )
    .required("Password is required"),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Password donot match! Both password need to be the same !"
      ),
  }),
});

function Register() {
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post("http://127.0.0.1:3005/userflex", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      }
      else{
        navigate("/login"); 
        window.location.reload(true);
        alert("Registered Successfully");
      }
      console.log(data);
    });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      username: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  const styleObj = {
    fontSize: 50,
    color: "##000000",
    fontWeight: "bold",
    fontFamily:"PT Sans Narrow"
}

  return (
    <div className="container my-4 "  style={{background: "#ECEFF1"}}>
      <MDBTypography className="d-flex justify-content-center" variant="h1" style={styleObj}>
        Register
      </MDBTypography>
      <div className="my-5 d-flex justify-content-center">
        <FormSuccess>{success ? success : ""}</FormSuccess>
        <form onSubmit={formik.handleSubmit}>
          <MDBRow className="mb-4">
            <MDBCol>
              <FieldContainer>
                <MDBInput
                  name="fName"
                  className="mb-1"
                  id="form8Example0"
                  label="First Name"
                  value={formik.values.fName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FieldError>
                  {formik.touched.fName && formik.errors.fName
                    ? formik.errors.fName
                    : ""}
                </FieldError>
              </FieldContainer>
            </MDBCol>

            <MDBCol>
              <FieldContainer>
                <MDBInput
                  name="lName"
                  className="mb-1"
                  id="form8Example1"
                  label="Last Name"
                  value={formik.values.lName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FieldError>
                  {formik.touched.lName && formik.errors.lName
                    ? formik.errors.lName
                    : ""}
                </FieldError>
              </FieldContainer>
            </MDBCol>
          </MDBRow>
          <FieldContainer className="my-2">
            <MDBInput
              name="number"
              className="mb-1"
              id="form8Example2"
              label="Phone Number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.number && formik.errors.number
                ? formik.errors.number
                : ""}
            </FieldError>
          </FieldContainer>

          <FieldContainer className="my-2">
            <MDBInput
              name="username"
              className="mb-1"
              id="form8Example2"
              label="User Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : ""}
            </FieldError>
          </FieldContainer>

          <FieldContainer className="my-2">
            <MDBInput
              name="email"
              className="mb-1"
              type="email"
              id="form8Example3"
              label="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          </FieldContainer>

          <FieldContainer className="my-2">
            <MDBInput
              name="password"
              className="mb-1"
              type="password"
              id="form8Example4"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          </FieldContainer>

          <FieldContainer className="my-3">
            <MDBInput
              name="confirmPassword"
              className="mb-1"
              type="password"
              id="form8Example5"
              label="Repeat password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}
            </FieldError>
          </FieldContainer>
            <p  block wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="">
            By clicking the register button, you confirm that you accept our <br/>Terms of use and Privacy Policy
          </p>

          <MDBBtn type="submit" className="mb-4" block>
            Register
          </MDBBtn>

          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
