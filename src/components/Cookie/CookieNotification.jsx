import React, { useState, useEffect } from "react"
import ReactModal from "react-modal"
import Cookies from "js-cookie"

import AcceptCookiePanel from "./AcceptCookiePanel"
import CookiePolicyPanel from "./CookiePolicyPanel"

const CookieNotification = props => {
  const [open, setOpen] = useState(false)
  const [showCookieDlg, setShowCookieDlg] = useState(false)

  const handleClose = () => {
    Cookies.set("consent", "true")
    setOpen(false)
  }

  const handleShowCookieDialog = () => {
    setOpen(false)
    setShowCookieDlg(true)
  }

  useEffect(() => {
    var s = props.location.pathname

    if (s && !s.includes("cookie")) {
      const consent = Cookies.get("consent")
      if (!consent) {
        setOpen(true)
      }
    }
  }, [props])

  return (
    <React.Fragment>
      <ReactModal
        isOpen={open}
        onRequestClose={handleClose}
        style={{
          overlay: {
            position: "fixed",
            inset: "unset",
            bottom: "0",
            right: "0",
            zIndex: "999",
            backgroundColor: "transparent",
          },
          content: {
            bottom: "56px",
            right: " 56px",
            backgroundColor: "#002f6c",
            color: "white",
            boxShadow: "0px 14px 24px rgba(0, 47, 108, 0.07)",
            borderRadius: "6px",
            padding: "24px 32px",

            width: "480px",
            height: "220px",
          },
        }}
        className="Modal2"
        overlayClassName="Overlay2"
      >
        <AcceptCookiePanel
          handleClose={handleClose}
          handleShowCookieDialog={handleShowCookieDialog}
        />
      </ReactModal>

      <ReactModal
        isOpen={showCookieDlg}
        onRequestClose={() => setShowCookieDlg(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: "999",
          },

          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            margin: " 0 10%",
            width: "auto",
            maxHeight: "96%",
            height: "max-content",
            backgroundColor: "transparent",
          },
        }}
      >
        <CookiePolicyPanel handleClose={() => setShowCookieDlg(false)} />
      </ReactModal>
    </React.Fragment>
  )
}

export default CookieNotification
