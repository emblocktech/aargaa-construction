"use client"

import styled from "styled-components"
import { useState } from "react"
import TopBar from "./TopBar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

const NavBarWrap = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: ${({open}) => (open ? "250px" : "0px")};
    min-height: 100vh;
    background: #FCDC2A;
    transition: all ease-in-out 0.5s;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    @media screen and (max-width:1100px) {
        width: ${({open}) => (open ? "200px" : "0px")};
      }

    @media screen and (max-width:600px) {
        width: ${({open}) => (open ? "170px" : "0px")};
    }

    @media screen and (max-width:450px) {
        width: ${({open}) => (open ? "170px" : "0px")};
    }
`

const NavButton = styled.div`
    position: fixed; 
    right: ${({open}) => (open ? "250px" : "0%")}; 
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    z-index: 10;

    @media screen and (max-width:1100px) {
        right: ${({open}) => (open ? "250px" : "0%")}; 
       }

       
    @media screen and (max-width:600px) {
        right: ${({open}) => (open ? "190px" : "0%")}; 
    }

           
    @media screen and (max-width:450px) {
        right: ${({open}) => (open ? "170px" : "0%")}; 
    }
`

const ChildWrap = styled.div`
    opacity: ${({open}) => (open ? "25%" : "100%")};
    transition: all ease-in-out 0.5s;
`

const NavMenu  = [{name: "Home : Aargaa", path: "/"}, {name: "About", path: "/about"}, {name: "Contact", path: "/contact"}, {name: "Services", path: "/service"}, {name: "Project", path: "/project"}, {name: "Construction", path: "/construction"}, {name: "Gallery", path: "/gallery"}]

export default function NavBar({ children }) {
    const [state, setState] = useState(false)
    const path = usePathname()

    return (
        <div>
            {<img className="nav-logo" src="/images/icon.png" style={{ opacity: 1 }} /> }
            <TopBar>
                {<div><motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 1}} transition={{duration: 1, type: "spring"}}><NavButton open={state} onClick={() => setState(!state)}>{ state ? <Image src="/close.svg" width={50} height={50} alt=""  /> : <Image src="/menu.svg" width={50} height={50} alt="" />}</NavButton></motion.div></div>}
            </TopBar>
            <NavBarWrap open={state}>
                {
                    NavMenu.map((val, ind) => (
                        <Link key={ind} href={val.path}>
                            <div className={state ? "nav-menu-block": "nav-menu-none"}>
                                <p className={path === val.path ? "nav-menu-active" : "nav-menu-label"}>{val.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </NavBarWrap>
            <ChildWrap open={state}>
                {children}
            </ChildWrap>
        </div>
    )
}
