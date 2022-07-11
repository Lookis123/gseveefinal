import React, { useState } from "react"
import styled from "styled-components"

import FilterSVG from "../../images/filters.svg"
import FilterModal from "./FilterModal"

const Wrapper = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 12px 15px;
  cursor: pointer;
  z-index: 999;
  /* box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3); */
`

const MobileFilterPanel = props => {
  const { category, setCategory } = props
  const [showDlg, setShowDlg] = useState(false)
  return (
    <>
      <Wrapper onClick={() => setShowDlg(true)}>
        <span className="pe-2">Φίλτρα</span>
        <img src={FilterSVG} alt="" />
      </Wrapper>
      <FilterModal
        isOpen={showDlg}
        onAfterOpen={() => {}}
        onRequestClose={() => setShowDlg(false)}
        category={category}
        setCategory={setCategory}
      />
    </>
  )
}

export default MobileFilterPanel
