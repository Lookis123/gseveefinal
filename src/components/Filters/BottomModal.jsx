import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

import CloseIcon from "../common/CloseIcon"

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e2e2e2;
  & h6 {
    margin: 0;
    padding: 0;
    //styleName: H6/Medium;
    font-family: CeraGR-Medium;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`

const BottomModal = props => {
  const { isOpen, onRequestClose, title = "", children } = props
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          position: "fixed",
          inset: 0,
          bottom: 0,
          left: 0,
          zIndex: 999,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.7)",
          transition: "opacity 0.1s ease-in-out 0s",
        },
        content: {
          position: "absolute",
          padding: 0,
          width: "100%",
          inset: "unset",
          left: 0,
          backgroundColor: "white",
          bottom: "0 !important",
        },
      }}
    >
      <ModalHeader>
        <h6>{title}</h6>
        <span
          onClick={onRequestClose}
          onKeyDown={onRequestClose}
          role="button"
          tabIndex={0}
        >
          <CloseIcon width={12} height={12} />
        </span>
      </ModalHeader>
      {children}
    </ReactModal>
  )
}
export default BottomModal
