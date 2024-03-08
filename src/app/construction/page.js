"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Container, Grid, Header, Icon } from "semantic-ui-react"
import { motion } from "framer-motion"
import { LearnButton } from "@/components/styled/styled_components"

export default function Service() {

    function pushService() {
        window.location.href = "/service"
    }

    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <motion.img src="/gallery/all/RV3-MBR-V10.webp" style={{ height: "70vh", width: "100%", filter: "brightness(0.5)" }} />
                    <div className="content-center">
                        <Header as="h1" className="constructionManagementH1" >Construction Management</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container>
                <Header className="constructionManagementH1" as={"h1"}>Construction Schedule Oversight</Header>
                <p>Effective scheduling is imperative to the success of your project. Spire’s construction schedule experts utilize our proactive-forensic business model where we take our extensive claims and dispute resolution support in addition to years of construction management experience to assist clients in setting up realistic and detailed project schedules. Once established, we provide in-depth progress reviews and status updates as the project progresses, continually informing and coordinating with the client. Spire uses this knowledge to identify potential trouble spots for key forecasted work and recommend timely adjustments to the strategic planning, to allow you to make informed decisions, act before delay ensues, and ensure your project comes in on time.</p>
                <p> Whether it is on a single project or a larger program with multiple scope designations, our experience in project development, execution, and project disputes gives us a unique perspective to oversee physical progress, accurately monitor and assess current and forecasted work, as well as to identify potential areas of risk leading to the project completion.</p>
                <Grid className="constructionCostEstimatingBuilder">
                    <Grid.Row className="content-center-middle">
                        <Grid.Column className="ccebColumn">
                            <Header className="ccebColumnH1Color">CONSTRUCTION COST ESTIMATING Builder</Header>
                            <p>AARGAA specializes in construction cost estimating. As a specific service or as a part of overall construction management, AARGAA construction and engineering cost estimators provide our clients with detailed quantity takeoffs and pricing from a construction project’s conception phase to closeout.</p>
                            <p> AARGAA maintains databases of historical and current local, national, and international construction and engineering cost figures including labor, material, and equipment costs. AARGAA is equipped to prepare cost estimates and/or verify proposed construction costs at various stages throughout the construction process for projects around the world. By identifying and analyzing the project’s scope, time, cost, quality, and performance, AARGAA develops an accurate assessment of how the construction process is unfolding over the course of its duration.</p>
                        </Grid.Column>
                        <Grid.Column className="ccebColumn">
                            <motion.img src="/gallery/all/RV2-Home Interior - 5.webp" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="content-center-middle" style={{}}>
                        <Grid.Column className="ccebColumn">
                            <motion.img src="/gallery/all/RV2-Pratica-V3.webp" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                        <Grid.Column className="ccebColumn">
                            <Header className="ccebColumnH1Color">CONSTRUCTION MANAGEMENT</Header>
                            <p> Construction projects involve a great deal of time and capital, so effective construction management skills are required if the projects are to be completed within the established timeline to meet cost limitations and quality requirements. In the building and construction industry, staying cost-effective and competitive means that companies must have core competencies for coordinating the job sites, controlling costs, and managing risk at their construction sites.</p>
                            <p>AARGAA provides a collaborative, partnership approach to its construction advisory services to ensure our recommendations are right for your organization. We work to understand your business, your objectives, and your culture so we can provide support that can be integrated into your operations to improve performance at all levels of the organization.</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <p>AARGAA provides comprehensive construction advisory services. Our experts possess the engineering and construction experience to provide real-world, cost-effective solutions to the everyday challenges that owners, contractors, engineers, and architects face throughout the construction process. From the initial concept to project closeout, we assist our clients in facilitating and coordinating the project process to mitigate complex problems. AARGAA can provide support at not only the project level, but also at the program and portfolio level, helping select and manage a large number of projects.  Our support can help you utilize limited resources to achieve the greatest value.</p>
                        <p>AARGAA’S advisory support is based on each client’s specific needs and project requirements by providing effective project leadership in the following service areas:</p>
                    </Grid.Row>
                </Grid>
            </Container>
            <div className="content-center-middle">
                <div style={{ position: "relative", display: "inline-block" }}>
                    <img src="/gallery/all/RV3-MBR-V3.webp" style={{ height: "270px", width: "1700px", filter: "brightness(0.5)" }} />
                    <Header className="content-center" as="h1" style={{ color: "white" }}>Construction Management</Header>
                </div>
            </div>
            <Container>
                <Grid className="constructionAdvisory">
                    <Grid.Row className="content-center-middle">
                        <Grid.Column className="ccebColumn">
                            <Header className="ccebColumnH1Color">CONSTRUCTION ADVISORY CONSULTING SERVICES</Header>
                            <p><Icon name="hand point right" />Management Consulting</p>
                            <p><Icon name="hand point right" />Strategic Planning</p>
                            <p><Icon name="hand point right" />Construction Contracts</p>
                            <p><Icon name="hand point right" />Risk Management</p>
                            <Grid.Row className="content-center-middle">
                                <LearnButton onClick={() => pushService()}>Our Services</LearnButton>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column className="ccebColumn">
                            <motion.img src="/gallery/all/Pratica-V3.webp" id="constructionLastImg" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Header className="ccebColumnH1Color">CONSTRUCTION EXPERIENCE</Header>
                        <p> AARGAA consultants have provided project support for a multitude of projects . Our consultants bring many years of hands-on experience in their respective areas of expertise and has provided a portfolio of professional services in construction management, CPM scheduling, program management, construction advisory.</p>
                    </Grid.Row>
                </Grid>
            </Container>
            <Footer />
        </NavBar>
    )
}