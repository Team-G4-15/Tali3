import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function FaqQuestion({ icon, question, answer }) {
    return (
        <div className="mb-4">
            <MDBTypography tag="h4" className="mb-3 text-primary">
                <MDBIcon icon={icon} className="text-primary pe-2" /> {question}
            </MDBTypography>
            <p style={{fontFamily: 'sans-serif', fontSize: '1rem'}}>{answer}</p>
        </div>
    );
}

function StaticFaqSection() {
    return (
        <section id="faq" style={{marginBottom: '15rem'}}>
            <MDBContainer>
                <h2 className="text-center mb-4 pb-2 text-primary fw-bold" style={{fontSize: '3rem', fontweight:'semibold'}}>
                    FAQ
                </h2>
                <p className="text-center mb-5" style={{ fontSize: '1.5rem', fontWeight: 'semibold' } }>
                    Find the answers for the most frequently asked questions below
                </p>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="paper-plane"
                            question="A simple question?"
                            answer="Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner."
                        />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="pen-alt"
                            question="A question that is longer than the previous one?"
                            answer="Yes, it is possible! You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month."
                        />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="user"
                            question="A simple question?"
                            answer="Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation."
                        />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="rocket"
                            question="A simple question?"
                            answer="Yes. Go to the billing section of your dashboard and update your payment information."
                        />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="home"
                            question="A simple question?"
                            answer="Unfortunately no. We do not issue full or partial refunds for any reason."
                        />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <FaqQuestion
                            icon="book-open"
                            question="Another question that is longer than usual"
                            answer="Of course! We’re happy to offer a free plan to anyone who wants to try our service."
                        />
                    </div>
                </div>
            </MDBContainer>
        </section>
    );
}

export default StaticFaqSection;
