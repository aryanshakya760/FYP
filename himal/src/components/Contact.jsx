import React from 'react'
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

let validationSchema = yup.object().shape({
    fname: yup.string().required("Full Name is required!").min(2, 'Too Short!').max(50, 'Too Long!'),
    phone: yup.number().required(),
    email: yup.string().email('The email address is invalid').required("Email is required!"),

    pwd: yup.string('The password is invalid').min(2, 'Too Short!').max(50, 'Too Long!').required("Password is required"),
    rpwd: yup.string().when("pwd", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("pwd")],
            "Both password need to be the same")
    }),
    address: yup.string()
})

const Contact = () => {
    return (
        <div className='contact'>
            <Formik initialValues={
                {
                    fname: '',
                    phone: '',
                    email: '',
                    pwd: '',
                    rpwd: '',
                    address: ''
                }
            }
                validationSchema={validationSchema}
                onSubmit={(data) => {
                    console.log(data);
                }}>
                {({ values, errors, touched }) => (
                    <Form>

                        <div className="Project-Form row">

                            <div className="Form-Content col-lg-9 col-md-9 col-sm-12" >

                                <div className="Form-data row">
                                    <h2>Register</h2>

                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <span className="Register-label">Full Name</span>
                                        <Field name="fname" type="input" className="form-control" placeholder="Enter Full Name" />
                                        {touched.fname && errors.fname ? (
                                            <small className="text-danger">{errors.fname}</small>
                                        ) : null}
                                    </div>

                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Phone Number</label>
                                        <Field name="phone" type="input" className="form-control" placeholder="Enter Phone Number" />
                                        {touched.phone && errors.phone ? (
                                            <small className="text-danger">{errors.phone}</small>
                                        ) : null}
                                    </div>

                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <span className="col-sm-2 col-form-label">Email</span>
                                        <Field name="email" type="input" className="form-control" placeholder="Email" />
                                        {touched.email && errors.email ? (
                                            <small className="text-danger">{errors.email}</small>
                                        ) : null}
                                    </div>


                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Password</label>
                                        <Field name="pwd" type="password" className="form-control" placeholder="Enter your Password" />
                                        {touched.pwd && errors.pwd ? (
                                            <small className="text-danger">{errors.pwd}</small>
                                        ) : null}
                                    </div>

                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Re-Enter Password</label>
                                        <Field name="rpwd" type="password" className="form-control" placeholder="Re-Enter your Password" />
                                        {touched.rpwd && errors.rpwd ? (
                                            <small className="text-danger">{errors.rpwd}</small>
                                        ) : null}
                                    </div>

                                    <div className="form-Input col-lg-6 col-md-6 col-sm-12">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                                        <Field name="address" type="input" className="form-control" placeholder="Enter Address" />
                                        {touched.address && errors.address ? (
                                            <small className="text-danger">{errors.address}</small>
                                        ) : null}
                                    </div>

                                    <div className="button">
                                        <button type="submit" className="btn btn-outline-success my-4"> Register</button>
                                    </div>

                                </div>

                            </div>
                            {/* <div className="Form-list col-lg-3 col-md-3 col-sm-12 ">
                                  </div> */}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Contact;