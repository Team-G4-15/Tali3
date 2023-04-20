import { useState, useEffect } from "react";
import React from "react";
import { CContainer } from "@coreui/react";
import { axiosClient } from "../../utilities/axiosClient";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import "./BookContent.css";
// routes config
const BookContent = () => {
    const [isLoading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axiosClient
            .get("/books")
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    const handleHover = (event) => {
        const cardBody = event.currentTarget.querySelector(".card-body");
        if (cardBody) {
            cardBody.classList.toggle("show");
        }
    };
    return (
        <CContainer lg>
            <CRow className="book-row">
                {books.map((book) => (
                    <CCol key={book.id} xs="12" sm="6" md="4" lg="3">
                        <CCard
                            className="book-card"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                        >
                            <CCardHeader className="book-header">
                                {book.title}
                            </CCardHeader>
                            <CCardBody className="card-body">
                                <p className="card-text">ISBN: {book.ISBN}</p>
                                <p className="card-text">
                                    Description: {book.desc}
                                </p>
                                <p className="card-text">
                                    Keywords: {book.keywords}
                                </p>
                                <p className="card-text">
                                    Quantity: {book.Quantity}
                                </p>
                                <p className="card-text">
                                    Language ID: {book.lang_id}
                                </p>
                                <p className="card-text">
                                    Location ID: {book.location_id}
                                </p>
                                <p className="card-text">
                                    Field ID: {book.field_id}
                                </p>
                                <p className="card-text">
                                    Vendor ID: {book.vendor_id}
                                </p>
                                <p className="card-text">
                                    Publish Date: {book.publish_date}
                                </p>
                                <p className="card-text">
                                    Edition: {book.edition}
                                </p>
                            </CCardBody>
                            <CCardBody className="card-body-hover">
                                <p className="card-text">
                                    Quantity: {book.Quantity}
                                </p>
                                <p className="card-text">
                                    Language ID: {book.lang_id}
                                </p>
                                <p className="card-text">
                                    Location ID: {book.location_id}
                                </p>
                                <p className="card-text">
                                    Field ID: {book.field_id}
                                </p>
                                <p className="card-text">
                                    Vendor ID: {book.vendor_id}
                                </p>
                                <p className="card-text">
                                    Publish Date: {book.publish_date}
                                </p>
                                <p className="card-text">
                                    Edition: {book.edition}
                                </p>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </CRow>
        </CContainer>
    );
};

export default React.memo(BookContent);
