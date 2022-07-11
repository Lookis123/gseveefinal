import React from "react"
import { AngleUp } from "../../utils/imgImport"
import { FilterItem2 } from "./FilterItem"

const Attachments = props => {
  const { label, color, ...rest } = props

  return (
    <div>
      {/* <span>Συνημμένα</span>
            <span>{AngleUp}</span> */}
      <FilterItem2
        icon={AngleUp}
        label="Συνημμένα"
        flexFlow="row-reverse"
        {...rest}
      />
    </div>
  )
}

export default Attachments
