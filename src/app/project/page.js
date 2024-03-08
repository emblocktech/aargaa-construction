"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Grid, Header, Container, Icon } from "semantic-ui-react"
import { motion } from "framer-motion"

export default function Project() {
    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <img src="/images/LIVING-1_crop.jpg" style={{ height: "70vh", filter: "brightness(0.5)" }} className="project-home-img" />
                    <div className="content-center">
                        <Header as="h1" className="constructionManagementH1" >Project</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container className="projectcontainer">
                <div className="content-center-middle" style={{ padding: "20px", display: "grid" }}>
                    <Header as={"h1"} textAlign="center" className="constructionManagementH1" >Our Projects</Header>
                    <motion.img initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 1 }} src={"/images/home-bk.jpg"} className="project-our-img" />
                </div>
                <div style={{ display: "grid", padding: "20px" }} className="project-control">
                    <Header as="h1" className="constructionManagementH1" >Project Control</Header>
                    <p>Construction project controls consultants play a critical role in the successful execution and delivery of complex projects. As experts in project controls, our responsibilities begin from the early design stage and run through the successful completion of a project—from establishing the project budget and timeline to accurately monitoring and forecasting progress for both in order to manage risks from the start of the project to the finish.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "15%", padding: "20px" }} className="icon-box">
                    <div style={{ display: "grid" }} className="project-icon">
                        <p><Icon name="arrow alternate circle right icon-project" />Corporate/Office</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Health</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Cultural Centers</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Education</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Residential</p>
                    </div>
                    <div style={{ display: "grid" }} className="project-icon">
                        <p><Icon name="arrow alternate circle right icon-project" />Parks and Open Spaces</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Shopping</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Sports</p>
                        <p><Icon name="arrow alternate circle right icon-project" />Transport</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", padding: "20px" }} className="project-img3-box">
                    <img src={"/gallery/all/Electrical Shop-R2.webp"} />
                    <img src={"/gallery/all/RV1-ELEVATION-6-V2.webp"} />
                    <img src={"/gallery/all/RV2-BRIGHT BILLBOARD-V (3).webp"} />
                </div>
            </Container>
            <Footer />
        </NavBar>
    )
}