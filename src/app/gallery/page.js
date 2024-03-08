"use client"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Container, Grid, Header, Label } from "semantic-ui-react"
import { useState } from "react"
import { gallery_images } from "@/images/images_home";
import _ from "lodash"

const types = [{name: "All", id: "all"}, {name: "Residential", id: "residential"}, {name: "Corporate or Office", id: "coo"}, {name: "Parks and Open Spaces", id: "paos"},
               {name: "Restraunts and Hotels", id: "restandhot"}, {name: "Shopping", id: "shop"}]

export default function Gallery() {
    const [type, setType] = useState("all")

    function handleTypeSelect(type) {
        setType(type)
    }
    
    return (
        <NavBar>
            <Grid>
                <Grid.Row textAlign="center">
                    <motion.img src="/images/LIVING-1_crop.jpg" style={{height: "270px", width: "100%", filter: "brightness(0.5)"}} />
                    <div className="content-center">
                        <Header className="constructionManagementH1" style={{color: "beige !important"}} as="h1">Gallery</Header>
                    </div>
                </Grid.Row>
            </Grid>
            <Container>
                <div className="content-center-middle" style={{padding: "20px"}}>
                   <div style={{display: "grid"}}>
                        <Header textAlign="center" as={"h1"} className="constructionManagementH1">Our Gallery</Header>
                        <div style={{paddingBottom: "20px"}}>
                            {
                                types.map((val, ind) => (
                                    <Label key={ind} color={type === val.id ? "green": "blue"} style={{cursor: "pointer"}} onClick={() => handleTypeSelect(val.id)}>{val.name}</Label>
                                ))
                            }
                        </div>
                        <div>
                            {
                                _.map(gallery_images[type], (val) => (
                                    _.map(val, (img, ind) => (
                                        <img key={ind} src={img} style={{width: "350px", height: "300px", padding: "10px"}}/>
                                    ))
                                ))
                            }
                        </div>
                   </div>
                </div>
            </Container>
            <Footer />
        </NavBar>
    )
}