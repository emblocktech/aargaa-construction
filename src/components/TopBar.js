"use client"

import { motion } from "framer-motion"
import styled from "styled-components"

const TopBarWrap = styled.div`
    position: fixed;
    top: 0;
    height: 50px;
    background: black;
    opacity: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 4rem;
    color: white;
    z-index: 1;
`

export default function TopBar({ children }) {
    return (
        <TopBarWrap>
            {children}
        </TopBarWrap>
    )
}