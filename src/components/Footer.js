"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { Header, List } from "semantic-ui-react";

const nav = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Service", path: "/services" }, { name: "Gallery", path: "/gallery" }]

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-max">
                    <div id="footer-aargaaSec" className="content-center-middle padding-footer" style={{ width: "35%" }}>
                        <div>
                            <img className="footer-logo" src="/images/icon.png"></img>
                            <Header>Aargaa Construction</Header>
                            <p>
                                We believe in design as a process. We research into creating a built environment that is adaptive and contextual. We see architecture as a language that speaks of the place.
                            </p>
                        </div>
                    </div>
                    <div id="footer-contactusSec" className="content-center-middle padding-footer" style={{ width: "40%" }}>
                        <div>
                            <Header textAlign="center">Contact US</Header>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="footer-contact-block" style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", textAlign: "left" }}>
                                        <p className="footer-add">Address:</p>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <p className="footer-address">109 / A, Rasi Nagar, | North Collector Office, | Collector Office Post, | Karur - 639007</p>
                                    </div>
                                </div>
                                <div className="footer-contact-block" style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", textAlign: "left" }}>
                                        <p className="footer-email">EmailID:</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%" }}>
                                        <p className="footer-emailID">aargaaconstruction@gmail.com</p>
                                    </div>
                                </div>
                                <div className="footer-contact-block" style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", textAlign: "left" }}>
                                        <p className="footer-phone">PhoneNo:</p>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <p className="footer-phoneNo">+ 91 - 9943318199, + 91 - 9943578199, + 91 - 9487687618.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer-linksSec" className="content-center-middle padding-footer" style={{ width: "10%" }}>
                        <div>
                            <List bulleted>
                                {
                                    nav.map((val, ind) => (
                                        <List.Item key={ind} style={{ paddingBottom: "20px" }}><a className="footer-links" href={val.path}>{val.name}</a></List.Item>
                                    ))
                                }
                            </List>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cp">
                <div className="content-center-flex copyRightDiv">Copyright © 2024 is proudly powered by EMBLOCK</div>
                <div className="content-center-flex">
                    <a className="footer-icons" href={""}><FontAwesomeIcon icon={faFacebookF} size="2xl" /></a>
                    <a className="footer-icons" href={""}><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                    <a className="footer-icons" href={""}><FontAwesomeIcon icon={faXTwitter} size="2xl" /></a>
                </div>
            </div>
        </div>
    )
}