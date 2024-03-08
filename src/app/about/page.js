"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Grid, Header, Container } from "semantic-ui-react"

export default function About() {
    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <motion.img src="/images/LIVING-1_crop.jpg" style={{ height: "270px", width: "100%", filter: "brightness(0.5)" }} />
                    <div className="content-center">
                        <Header as="h1" className="constructionManagementH1">About</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container>
                <Grid style={{ padding: "2rem 0 2rem 0" }}>
                    <Grid.Row columns={2} className="content-center-middle" style={{ margin: "0px 6rem 0px 6rem" }} only={"computer tablet"}>
                        <Grid.Column>
                            <Header className="constructionManagementH1" >Welcome To AARGAA CONSTRUCTION</Header>
                            <p>We believe in design as a process. We research into creating a nice environment that is adaptive and contextual. We see architecture as a language that speaks of the place. Our sensible, yet critical design approach recognizes the inherent complexity in modern day building and harnesses this complexity to produce projects that are culturally robust, place sensitive and environmentally friendly.
                                123 “Make a difference in the lives of our people, customers and community” Your preference always comes first, we care about what you say.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <motion.img src="/gallery/all/RV2-BRIGHT BILLBOARD-V (1).webp" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="content-center-middle" only={"mobile"}>
                        <Grid.Column width={16}>
                            <Header className="constructionManagementH1" >Welcome To AARGAA CONSTRUCTION</Header>
                            <p>We believe in design as a process. We research into creating a nice environment that is adaptive and contextual. We see architecture as a language that speaks of the place. Our sensible, yet critical design approach recognizes the inherent complexity in modern day building and harnesses this complexity to produce projects that are culturally robust, place sensitive and environmentally friendly.
                                123 “Make a difference in the lives of our people, customers and community” Your preference always comes first, we care about what you say.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ margin: "20px" }}>
                            <motion.img src="/gallery/all/RV3-MBR-V11.webp" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <div className="content-center-middle" style={{ marginBottom: "20px" }}>
                <Grid>
                    <Grid.Row style={{ position: "relative", display: "inline-block" }} only={"computer tablet"}>
                        <img src="/gallery/all/RV3-MBR-V11.webp" style={{ height: "270px", width: "1700px", filter: "brightness(0.1)" }} />
                        <Header className="content-center constructionManagementH1" textAlign="center">“Make a difference in the lives of our people, customers and community” <br></br> “Your preference always comes first, we care about what you say”</Header>
                    </Grid.Row>
                </Grid>
            </div>
            <Footer />
        </NavBar>
    )
}