import React from "react";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextArea,
    MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function ContactSection() {
    return (
        <section
            className="border text-center mb-4"
            id="contact"
            style={{ height: "900px" }}
        >
            <h3
                className="mb-5"
                style={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    marginTop: "15rem",
                }}
            >
                Contact Us
            </h3>
            <div className="row">
                <div className="col-lg-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4314.031113879223!2d2.863351503997655!3d36.68971516238475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa5b03d4afdc7%3A0x6f780e9e9048e99d!2sThe%20National%20Higher%20School%20of%20Artificial%20Intelligence!5e0!3m2!1sen!2sus!4v1685148235477!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>
                <div className="col-lg-7">
                    <form>
                        <div className="row">
                            <div className="col-md-9">
                                <MDBRow className="mb-4">
                                    <MDBCol>
                                        <MDBInput
                                            label="First Name"
                                            id="form3FirstName"
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            label="Email Address"
                                            id="form3Email"
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput
                                    type="text"
                                    label="Subject"
                                    id="form3Subject"
                                    wrapperClass="mb-4"
                                />
                                <MDBTextArea
                                    label="Message"
                                    id="form3Textarea"
                                    wrapperClass="mb-4"
                                />
                                <MDBBtn color="primary" className="mb-4">
                                    Send
                                </MDBBtn>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                                        <p>
                                            <small>
                                                SIDI ABDELLAH, Algiers
                                            </small>
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone fa-2x text-primary"></i>
                                        <p>
                                            <small>Number soon</small>
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope fa-2x text-primary"></i>
                                        <p>
                                            <small>Tali3@gmail.com</small>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
