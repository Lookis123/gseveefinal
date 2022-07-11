import React, { useState } from "react"

import ReactModal from "react-modal"

const ModalWrapper = props => {
  const { children, ...rest } = props
  return <ReactModal {...rest}>{children}</ReactModal>
}

export default ModalWrapper
