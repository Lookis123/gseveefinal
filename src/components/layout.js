import * as React from "react"
import { ThemeProvider } from "styled-components"

import Topbar from "./ui/topbar"
import Navbar from "./ui/navbar"
import Footer from "./ui/footer"
import { theme } from "./styled/theme"
import CookieNotification from "./Cookie/CookieNotification"
import CookieProvider from "../context"

const Layout = ({ style, children, type, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <CookieProvider>
        <Topbar />
        {type === "primary" && <Navbar type="primary" />}
        <main style={{ overflow: "hidden" }}>{children}</main>
        <Footer location={location} />
        <CookieNotification location={location} />
      </CookieProvider>
    </ThemeProvider>
  )
}

export const NoLayout = ({ style, children, type, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <CookieProvider>
        {/* <Topbar2 /> */}
        <main style={style}>{children}</main>
      </CookieProvider>
    </ThemeProvider>
  )
}

export default Layout
