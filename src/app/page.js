"use client"

import { Header, Grid, Container, Icon } from "semantic-ui-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LearnButton } from "@/components/styled/styled_components";
import { useState } from "react";
import { wrap } from "framer-motion";
import { home_images, home_image_name } from "@/images/images_home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faChartPie, faChartLine } from "@fortawesome/free-solid-svg-icons"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, home_images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  function pushAbout() {
    window.location.href = "/about"
  }

  function pushConstruction() {
    window.location.href = "/construction"
  }

  return (
    <NavBar>
      <Grid>
        <Grid.Row>
          <main className={"main"}>
            <motion.img initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring" }} src="/gallery/all/ELEVATION-10-V4.jpeg.webp" style={{ height: "100vh", width: "100%" }} />
            <div className="content-center">
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 1 }}>
                <Header as="h1" id="main-title">AARGAA CONSTRUCTIONS</Header>
                <p id="main-title-paragraph">A multi disciplined construction firm, serves a variety of industries and project types.</p>
                <LearnButton size="large" onClick={() => pushAbout()} className="learn-more">LEARN MORE</LearnButton>
              </motion.div>

            </div>
          </main>
        </Grid.Row>
      </Grid>
      <Container>
        <div className="content-center-middle comp-content" style={{ padding: "30px" }}>
          <div className="content-info"><FontAwesomeIcon icon={faFloppyDisk} size="2xl" style={{ paddingRight: "15px" }} />100+ ELEVATION</div>
          <div className="content-info-clvar"><FontAwesomeIcon icon={faChartPie} size="2xl" style={{ paddingRight: "15px" }} />50+ COMPLETED</div>
          <div className="content-info"><FontAwesomeIcon icon={faChartLine} size="2xl" style={{ paddingRight: "15px" }} />20+ PROJECTS</div>
        </div>
        <Grid>
          <Grid.Row columns={2} className="content-center-middle" style={{ margin: "0px 6rem 0px 6rem" }}>
            <Grid.Column className="imgcolumn">
              <motion.img src="/gallery/all/2.webp" className="main-page-img" initial={{ scale: 0, borderRadius: 0 }} whileInView={{ scale: 1, borderRadius: 10 }} exit={{ scale: 1, borderRadius: 10 }} transition={{ duration: 1, type: "spring" }}></motion.img>
            </Grid.Column>
            <Grid.Column className="desccolumn">
              <Header className="whowearehead">Who we are</Header>
              <p className="whoweare-para">We believe in design as a process.We research into creating a built environment that is adaptive and contextual. We see architecture as a language that speaks of the place. Our sensible, yet critical design approach recognizes the inherent complexity in modern day building and harnesses this complexity to produce projects that are culturally robust, place sensitive and environmentally friendly.</p>
              <LearnButton className="whoweare-button" size="large" onClick={() => pushAbout()}>Learn More</LearnButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ width: "100%", padding: "2rem", textAlign: "center" }} className="content-center-middle">
          <div style={{ width: "100%" }}>
            <Header className="serviceshead" as={"h1"}>Our Services</Header>
            <div className="flex-cl-spe">
              <motion.div initial={{ opacity: 0, scale: 0, borderRadius: 0 }} whileInView={{ opacity: 1, scale: 1, borderRadius: 5 }} exit={{ opacity: 1, scale: 0, borderRadius: 5 }} transition={{ duration: 1, type: "spring", delay: 0 }} className="service-card">
                <img src="/gallery/all/Pratica-V3.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Residential</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.3 }} className="service-card">
                <img src="/gallery/all/FF BEDROOM-2-1.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Corporate / Office</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.6 }} className="service-card">
                <img src="/gallery/all/GF-BEDROOM-1.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Parks & Open Spaces</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
            </div>
            <div className="flex-cl-spe">
              <motion.div initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.5 }} className="service-card">
                <img src="/gallery/all/RV1-ELEVATION-6-V3-2.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Restaurant & Hotels</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} exit={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.5 }} className="service-card">
                <img src="/gallery/all/RV3-BEDROOM-V6.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Shopping</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
              <motion.div initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 0.5 }} className="service-card">
                <img src="/gallery/all/RV3-HOTEL-V2.webp" className="service-card-img" />
                <div style={{ margin: "10px" }}>
                  <Header className="servicesboxhead">Culture Centres</Header>
                  <p className="boxdesc">A residential building which provides more than half of its floor area for dwelling purposes. In other words, residential building provides sleeping accommodation with or without cooking or dining or both facilities.</p>
                  <LearnButton className="Serviceboxbut" onClick={() => pushConstruction()}>Our Services</LearnButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Grid columns={2} className="content-center-middle" style={{ margin: "0px 6rem 0px 6rem" }}>
          <Grid.Column className="chooseus-box">
            <Header as="h4">Why Choose Us</Header>
            <Header as={"h1"} >Support every project with a specialized approach</Header>
            <LearnButton className="chooseus-but">Click Here</LearnButton>
          </Grid.Column>
          <Grid.Column className="quality-box">
            <Header as='h2'>
              <Icon name='wrench' />
              <Header.Content>
                Quality Services
                <Header.Subheader className="quality-info">We are Providing a Best Quality Service.</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='building' />
              <Header.Content >
                Modern Technologies
                <Header.Subheader className="quality-info">We are used a modern technologies to built.</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='clock' />
              <Header.Content >
                24 Hours Service
                <Header.Subheader className="quality-info">We are Providing a 24 / 7 Service.</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='users' />
              <Header.Content>
                Expert Team
                <Header.Subheader className="quality-info">We are Providing a Best Quality Service.</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid>
        <div style={{ width: "100%", padding: "2rem", textAlign: "center", display: "grid" }} className="content-center-middle slide-box">
          <Header as={"h1"} className="slide-head">Our Projects</Header>
          <div style={{ position: "relative", display: "inline-block" }}>
            <motion.img
              key={page}
              src={home_images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}

              className="slide-img"
            />
            <motion.h1 className="content-center-flex">{home_image_name[imageIndex]}</motion.h1>
            <div className="next" onClick={() => paginate(1)}><Icon name="chevron right " /></div>
            <div className="prev" onClick={() => paginate(-1)}><Icon name="chevron right " /></div>
          </div>
        </div>
      </Container>
      <Footer />
    </NavBar>
  );

}
