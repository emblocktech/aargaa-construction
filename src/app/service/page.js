"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Grid, Header, Container, List, Icon } from "semantic-ui-react"
import { motion } from "framer-motion"
import { LearnButton } from "@/components/styled/styled_components"

export default function Service() {

    function pushConstruction() {
        window.location.href = "/construction"
    }

    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <img src="/images/LIVING-1_crop.jpg" style={{ height: "270px", width: "100%", filter: "brightness(0.5)" }} />
                    <div className="content-center">
                        <Header as="h1" className="constructionManagementH1" >Service</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container className="content-center-middle">
                <div>
                    <div style={{ textAlign: "center" }}>
                        <Header as={"h1"} className="constructionManagementH1" >Our Services</Header>
                        <p> We Design spaces that inspire people to live and work at their best. Our work reaches across various industries</p>
                    </div>
                    <div className="flex-cl-spe ServiceGridRow" style={{ textAlign: "center" }}>
                        <motion.div initial={{ opacity: 0, scale: 0, borderRadius: 0 }} whileInView={{ opacity: 1, scale: 1, borderRadius: 5 }} exit={{ opacity: 1, scale: 0, borderRadius: 5 }} transition={{ duration: 1, type: "spring", delay: 0 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Residential</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.3 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Corporate / Office</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.6 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Parks & Open Spaces</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-cl-spe ServiceGridRow" style={{ textAlign: "center" }}>
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.5 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Restaurant & Hotels</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} exit={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.5 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Shopping</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.5 }} className="service-card">
                            <img src="/images/LIVING-1.jpg" className="service-card-img" />
                            <div className="serviceContent" style={{ margin: "10px" }}>
                                <Header>Culture Centres</Header>
                                <p>A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </div>
                        </motion.div>
                    </div>
                    <Grid className="servicesVasthu">
                        <Grid.Row className="content-center-middle servicesVasthuRow" style={{ margin: "0px 6rem 0px 6rem" }}>
                            <Grid.Column className="servicesVasthuColumn">
                                <Header>SERVICES VASTHU</Header>
                                <p>We Acknowledged by Leading Vasthu Expert MR, R. SRINIVASAN with a service of 25 Years in Vasthu.</p>
                                <p>It means of utilizing the five elements to the utmost benefit of the human kind by capturing them in the construction of our buildings, For the happy future, free from the family problems, sickness and problems in the work place do the changes according to the vasthu shasthra in your House / Work Place / Office and Temples etc…</p>
                                <List bulleted>
                                    <List.Item>There is No Ritual Remedies for vasthu</List.Item>
                                    <List.Item>Vasthu was not based on Religious Facts</List.Item>
                                    <List.Item>There is no interrelation with Vasthu and Astrology</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column className="content-center-middle servicesVasthuColumn servicesVasthuColumnImg">
                                <motion.img src="/images/LIVING-1.jpg" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="content-center-middle servicesVasthuRow" style={{ margin: "0px 6rem 0px 6rem" }}>
                            <Grid.Column className="servicesVasthuColumn">
                                <Header>PROVISIONS ON 2D</Header>
                                <p><Icon name="hand point right" />SCHEME PLANS</p>
                                <p><Icon name="hand point right" />VASTHU PLANS</p>
                                <p><Icon name="hand point right" />APPROVAL PLANS</p>
                                <p><Icon name="hand point right" />SECTIONAL DETAILING/LAYOUTS</p>
                                <p><Icon name="hand point right" />ELECTRICAL DETAILING/LAYOUTS</p>
                                <p><Icon name="hand point right" />PLUMBING DETAILING/LAYOUTS</p>
                                <p><Icon name="hand point right" />TILING DETAILING/LAYOUTS</p>
                                <p><Icon name="hand point right" />FALSE CEILING DETAILING/LAYOUTS</p>
                                <p><Icon name="hand point right" />STRUCTURAL PLANS, DETAILING, LAYOUTS</p>
                            </Grid.Column>
                            <Grid.Column className="servicesVasthuColumn servicesVasthuColumnImg">
                                <motion.img src="/images/LIVING-1.jpg" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
            <div className="content-center-middle" style={{ padding: "20px 0px 20px 0px" }}>
                <div className="directorQuote" style={{ position: "relative", display: "inline-block" }}>
                    <img src="/images/LIVING-1.jpg" style={{ height: "270px", width: "1700px", filter: "brightness(0.5)" }} />
                    {/* <Header className="content-center" as="h1">“We are reliable, trustworthy and we uphold the highest standards of integrity in all of our design.FIND YOUR DREAM BUILDINGS WITH US”– Balavenkatesh srinivasan -Director</Header> */}
                    <Header className="content-center" as="h1">“We are reliable, trustworthy and we uphold the highest standards of integrity in all of our design. FIND YOUR DREAM BUILDINGS WITH US”<br></br> <span className="directorName">– Balavenkatesh srinivasan -Director</span></Header>
                </div>
            </div>
            <Container className="content-center-middle">
                <Grid style={{ padding: "20px 0px 20px 0px" }}>
                    <Grid.Row className="content-center-middle servicesVasthuRow" style={{ margin: "0px 6rem 0px 6rem" }}>
                        <Grid.Column className="servicesVasthuColumn servicesVasthuColumnImg">
                            <motion.img src="/images/LIVING-1.jpg" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                        <Grid.Column className="servicesVasthuColumn">
                            <Header>PROVISIONS ON 3D</Header>
                            <p><Icon name="hand point right" />ELEVATED VIEWS</p>
                            <p><Icon name="hand point right" />SECTIONAL VIEWS</p>
                            <p><Icon name="hand point right" />AERIAL VIEWS</p>
                            <p><Icon name="hand point right" />WALK THROUGH</p>
                            <p><Icon name="hand point right" />INTERIORS NIGHT VIEWS</p>
                            <p><Icon name="hand point right" />KITCHENETTE WARDROBES & FURNISHINGS</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ display: "grid" }}>
                        <p>Support every project with a specialized approach. Discover how AARGAA can help accomplish your project goals.</p>
                        <p>Aargaa support is based on each client’s specific needs and project requirements by providing effective project leadership. We design spaces that inspire people to live and work at their best. </p>
                        <p>Specification of materials and types of constructions are  foundation, Basement, Brick Work,  Reinforcement, wood work, flooring , kitchen amenities, toilets, plumbing, electrical, painting. </p>
                        <p>Our work reaches across various industries including the following :</p>
                        <div>
                            <p><Icon name="hand point right" />Health</p>
                            <p><Icon name="hand point right" />Cultural Centers</p>
                            <p><Icon name="hand point right" />Education</p>
                            <p><Icon name="hand point right" />Residential</p>
                            <p><Icon name="hand point right" />Parks and Open Spaces</p>
                            <p><Icon name="hand point right" />Shopping</p>
                            <p><Icon name="hand point right" />Sports</p>
                            <p><Icon name="hand point right" />Transport</p>
                        </div>
                    </Grid.Row>
                </Grid>
            </Container>
            <Footer />
        </NavBar>
    )
}