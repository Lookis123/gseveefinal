import React from "react"
import styled from "styled-components"

const PopupMenuWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 225px;
  border: 1px solid rgba(0, 47, 108, 0.07);
  position: absolute;
`
const PopupMenuItemWrapper = styled.div`
  margin: 0 9px;
  padding: 9px 0;
  a {
    //styleName: Buttons / Regular;
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.colors.blue};
  }
  svg {
    flex-shrink: 0;
    margin-left: 8px;
  }
  &:hover {
    a {
      span {
        font-family: CeraGR-Bold;
      }
      & svg {
        & circle {
          opacity: 1;
        }
        & path {
          stroke: white;
        }
      }
    }
  }
  &:not(:nth-child(1)) {
    border-top: 1px solid rgba(0, 47, 108, 0.07);
  }
`
export const PopupContainer = props => {
  const { children, popupMenu, show } = props
  return (
    <div>
      {children}
      <div className={show ? "showContainer" : "hideContainer"}>
        <PopupMenuWrapper>{popupMenu}</PopupMenuWrapper>
      </div>
    </div>
  )
}

const MenuItemSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const PopupMenuItem = props => {
  const { children, to, endItem } = props
  return (
    <PopupMenuItemWrapper>
      <a href={to}>
        <MenuItemSubWrapper>
          <span>{children}</span>
          {endItem}
        </MenuItemSubWrapper>
      </a>
    </PopupMenuItemWrapper>
  )
}
