import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
export default function Task() {
    const url = "http://localhost:5000/users"
    const [inp, setinp] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "Pranali",
            email: "pranali@gmail.com",
            phone: "8888888888"
        },
        validationSchema: yup.object({
            name: yup.string().required("please enter your name"),
            email: yup.string().required("please enter your email"),
            phone: yup.string().required("please enter your phone number")
        }),
        onSubmit: async (values) => {
            console.log("submitted");
            console.warn(values);
            const { data } = await axios.post(url, values)
            console.log(data);
            setinp([...inp, values])
        }
    })
    return (
        <>
            <a href="" id="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" class="link-primary">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" height={400} alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" height={400} alt="..." />
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </a>
            {/* modal window */}
            <div class="modal fade col-12" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div class="row">

                                    <div class="col-sm-12 offset-sm-0">
                                        <div class="card">
                                            <div class="card-header">Form</div>
                                            <div class="card-body">
                                                <div>
                                                    <label for="email" class="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="name"
                                                        placeholder="Enter Your Name"
                                                        className={formik.touched.name && formik.errors.name ? "form-control is-invalid" : "form-control"}
                                                        name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                    />
                                                    <div class="valid-feedback">Looks good!</div>
                                                    <div class="invalid-feedback">Please choose a name.</div>
                                                </div>
                                                <div>
                                                    <label for="email" class="form-label">Email</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="email"
                                                        placeholder="Enter Your Email"
                                                        className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}
                                                        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                    />
                                                    <div class="valid-feedback">Looks good!</div>
                                                    <div class="invalid-feedback">Please choose a username.</div>
                                                </div>
                                                <div>
                                                    <label for="email" class="form-label">Phone</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="phone"
                                                        placeholder="Enter Your Phone"
                                                        className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"}
                                                        value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                    />
                                                    <div class="valid-feedback">Looks good!</div>
                                                    <div class="invalid-feedback">Please choose a username.</div>
                                                </div>
                                                <button type="submit" data-bs-dismiss="modal" class="btn btn-primary w-100 mt-3">
                                                    Submit
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="container">
                <table class="table  table-bordered border-dark caption-top mt-5">

                    <thead>
                        <tr>

                            <th className="h3" scope="col">NAME</th>
                            <th className="h3" scope="col">EMAIL</th>
                            <th className="h3" scope="col">PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inp.map(item => <>
                                <tr>
                                    <td><h5>{item.name}</h5> </td>
                                    <td><h5>{item.email}</h5></td>
                                    <td><h5>{item.phone}</h5></td>

                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Data will be stored in db.json file */}
        </>
    )
}
