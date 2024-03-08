"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Container, Grid, Header, Icon } from "semantic-ui-react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from "react"

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBSELcttd1FF34ZPjsZstcuiShMat4DEMI"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
}

export default function Contact() {
    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <motion.img src="/gallery/all/RV4-Hotel Interior-V3.webp" style={{ height: "70vh", width: "100%", filter: "brightness(0.5)" }} />
                    <div className="content-center">
                        <Header as="h1" className="constructionManagementH1" style={{ color: "beige !important" }}>Contact</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container style={{ padding: "20px" }}>
                <Header textAlign="center" as={"h1"} className="constructionManagementH1">Our Contacts</Header>
                <div className="flex-cl-spe-c">
                    <motion.div initial={{ opacity: 0, scale: 0, borderRadius: 0 }} whileInView={{ opacity: 1, scale: 1, borderRadius: 5 }} exit={{ opacity: 1, scale: 0, borderRadius: 5 }} transition={{ duration: 1, type: "spring", delay: 0 }} className="contact-card">
                        <img src="/gallery/all/Electrical Shop-R2.webp" className="contact-card-img" />
                        <div style={{ padding: "10px", display: "flex", justifyContent: "space-evenly" }}>
                            <div className="content-center-flex">
                                <Icon size="big" name="map marker alternate" />
                            </div>
                            <div className="content-center-flex">
                                <div style={{ display: "grid" }}>
                                    <div style={{ textAlign: "left" }}>
                                        <p>Address:</p>
                                    </div>
                                    <div>
                                        <p>109 / A, Rasi Nagar, | North Collector Office, | Collector Office Post, | Karur - 639007</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.3 }} className="contact-card">
                        <img src="/gallery/all/RV1-ROHITHA-HERITAGE-V4.webp" className="contact-card-img" />
                        <div style={{ padding: "10px", display: "flex", justifyContent: "space-evenly" }}>
                            <div className="content-center-flex">
                                <Icon size="big" name="mail" />
                            </div>
                            <div className="content-center-flex">
                                <div style={{ display: "grid" }}>
                                    <div style={{ textAlign: "left" }}>
                                        <p>EmailID:</p>
                                    </div>
                                    <div>
                                        <p>aargaaconstruction@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 0 }} transition={{ duration: 1, type: "spring", delay: 0.6 }} className="contact-card">
                        <img src="/gallery/all/RV1-ELEVATION-6-V2.webp" className="contact-card-img" />
                        <div style={{ padding: "10px", display: "flex", justifyContent: "space-evenly" }}>
                            <div className="content-center-flex">
                                <Icon size="big" name="phone square" />
                            </div>
                            <div className="content-center-flex">
                                <div>
                                    <div style={{ display: "grid" }}>
                                        <p>PhoneNo:</p>
                                    </div>
                                    <p>+ 91 - 9943318199</p>
                                    <p>+ 91 - 9943578199</p>
                                    <p>+ 91 - 9487687618.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <Map></Map>
            </Container>
            <Footer />
        </NavBar>
    )
}