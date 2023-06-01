import React from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import Typography from "@mui/material/Typography";
import "./team.css";

export default function TeamSection() {
    return (
        <section id="team" style={{ height: "1200px" }}>
            <Typography
                component="h1"
                variant="h1"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{
                    fontWeight: "semi-bold",
                    fontSize: "3rem",
                    marginBottom: "10rem",
                    marginTop: "20rem",
                    Top: "5rem",
                }}
            >
                Our team
            </Typography>
            <MDBRow
                className="row-cols-1 row-cols-md-3 g-4"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Zouak Omar Farouk
                            </MDBCardTitle>
                            <MDBCardText>
                                Team Leader & Scrum Master
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                linkedin profile
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Yazid Slimani
                            </MDBCardTitle>
                            <MDBCardText>
                                Project Owner & backend Developer
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Raid Ouahioune
                            </MDBCardTitle>
                            <MDBCardText>Backend developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br /> <br />
            <MDBRow
                className="row-cols-1 row-cols-md-3 g-4"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Larbi Saidchikh
                            </MDBCardTitle>
                            <MDBCardText>
                                {" "}
                                Graphic and UI/UX designer & Front-end developer
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Hafida Boukedjar
                            </MDBCardTitle>
                            <MDBCardText>
                                UI/UX designer & Front-end developer
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol className="col-sm-6 col-md-4 col-lg-3">
                    <MDBCard className="h-100">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                                alt="..."
                                className="rounded-circle"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <MDBCardTitle className="mt-4">
                                Ilyes Ismail Benameur{" "}
                            </MDBCardTitle>
                            <MDBCardText>front-end developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section>
    );
}
