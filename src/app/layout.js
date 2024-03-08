"use client"

import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import 'semantic-ui-css/semantic.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
        <body suppressHydrationWarning={true}>{children}</body>
      </AnimatePresence>
    </html>
  );
}
