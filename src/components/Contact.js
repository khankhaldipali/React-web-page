import { useState } from "react";

function Contact() {
    const [data, setdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
        hasError: {
            fullname: false,
            email: false,
            phone: false
          }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((olddata) => {
            return {
                ...olddata,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
      
        const hasError = {
          fullname: data.fullname === "",
          email: data.email === "",
          phone: data.phone === ""
        };
      
        setdata((prevData) => ({
          ...prevData,
          hasError
        }));
      
        if (!hasError.fullname && !hasError.email && !hasError.phone) {
          alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone}and email is ${data.email}.`
          );
          setdata({
            fullname: "",
            email: "",
            phone: "",
            message: "",
            hasError: {
              fullname: false,
              email: false,
              phone: false
            }
          });
        }
      };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    FullName
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                {data.hasError.fullname  && <span className="alert-text">Please enter your name</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={data.phone}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    onChange={handleChange}
                                    placeholder="Mobile number"
                                />
                                {data.hasError.phone  && <span className="alert-text">Please enter your phone number</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                />
                                {data.hasError.email  && <span className="alert-text">Please enter your email address</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    onChange={handleChange}
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    name="message"
                                    value={data.message}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-info" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
