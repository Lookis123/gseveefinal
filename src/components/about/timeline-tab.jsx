import React, { useState } from "react"
import { down, up } from "styled-breakpoints"
import styled from "styled-components"
import { timeline_items } from "../../utils/staticData"

const TimelineTab = () => {
  const [isHover, setIsHover] = useState(0)
  const [items, setTimelineItems] = useState(timeline_items.slice(0, 6))

  return (
    <Tab id="Χρονολόγιο">
      <h2 className="header">Χρονολόγιο</h2>
      <div className="container timeline-wrapper">
        {items.map((item, idx) => (
          <div
            className={`timeline-block timeline-block-${
              idx % 2 === 0 ? "left" : "right"
            }`}
            key={idx}
          >
            <div className="marker"></div>
            <Box
              onMouseEnter={() => setIsHover(idx)}
              onMouseLeave={() => setIsHover(-1)}
              className={isHover === idx ? "active" : ""}
            >
              <span className="date">{item.date}</span>
              <h6 className="title">{item.title}</h6>
              <p className="text">{item.text}</p>
            </Box>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <ShowMore onClick={() => setTimelineItems(timeline_items)}>
          Δείτε περισσότερα
        </ShowMore>
      </div>
    </Tab>
  )
}
const Tab = styled.div`
  background: rgba(175, 131, 115, 0.2);
  padding: 50px 0;
  .header {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    color: #002f6c;
    margin-bottom: 50px;
    text-align: center;
  }
  ${up("md")} {
    padding: 100px 0;
  }
  .timeline-wrapper {
    position: relative;
    overflow: hidden;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 50%;
      margin-left: -0.165rem;
      width: 6px;
      height: 100%;
      background: #002f6c;
      z-index: 1;
      ${down("md")} {
        left: 1.2rem;
      }
    }
  }
  .timeline-block {
    width: calc(50% + 0.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    clear: both;
    &-right {
      float: right;
      ${down("md")} {
        float: none;
        width: 100%;
      }
    }
    &-left {
      float: left;
      direction: rtl;
      ${down("md")} {
        float: none;
        direction: ltr;
        width: 100%;
      }
    }
  }

  .marker {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #002f6c;
    flex-shrink: 0;
    z-index: 1;
  }
`
const Box = styled.div`
  margin: 0 24px;
  padding: 24px 30px;
  width: 448px;
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: baseline;
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 47, 108, 0.07);
  border-radius: 4px;
  direction: ltr;
  border-bottom: 4px solid white;
  cursor: pointer;
  ${down("md")} {
    margin-bottom: 24px;
    height: auto;
  }
  .date {
    font-family: "CeraGR-Bold";
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.02em;
    padding: 0px 6px 2px;
    color: #002f6c;
    background: #e3e3e3;
    margin-bottom: 24px;
  }
  .title {
    font-family: "CeraGR-Medium";
    font-size: 18px;
    line-height: 26px;
    color: rgba(0, 47, 108, 0.5);
  }
  .text {
    display: none;
    font-family: "CeraGR-Medium";
    font-size: 16px;
    line-height: 22px;
    color: #002f6c;
  }
  &.active {
    border-color: #af8373;

    .date {
      margin-bottom: 12px;
      color: #ffffff;
      background: #002f6c;
    }
    .title {
      font-family: "CeraGR-Bold";
      font-size: 18px;
      line-height: 21px;
      color: #002f6c;
    }
    .text {
      display: block;
    }
  }
`
const ShowMore = styled.button`
  background-color: transparent;
  border: none;
  font-family: "CeraGR-Medium";
  font-size: 16px;
  line-height: 32px;
  text-decoration-line: underline;
  color: #002f6c;
`

export default TimelineTab
