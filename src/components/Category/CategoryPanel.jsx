import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"
import { Link } from "gatsby"

import FilterItem from "../common/FilterItem"
import ContentBox, { ContentBox4 } from "../common/ContentBox"

const Lines = ({ id }) => {
  return id === 0 ? (
    <svg
      width="27"
      height="392"
      viewBox="0 0 27 392"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M157.91 283.958L197.835 352.272L155.538 357.378L155.327 357.403L155.199 357.574L130.114 390.908L90.5369 323.171L90.1052 322.432L89.6735 323.171L50.0984 390.908L25.0136 357.574L24.8855 357.403L24.674 357.378L-17.6225 352.272L22.2923 283.958L22.7318 283.206H21.8606H-183.5V0.5H211.5V283.206H158.342H157.471L157.91 283.958ZM40.6869 290.849L40.2286 290.39L39.9013 290.95L13.2415 336.586L12.8575 337.243L13.6132 337.334L35.1672 339.94L47.6623 356.543L48.1143 357.144L48.4935 356.495L75.0749 310.997L75.4097 310.424L74.7663 310.26C61.6352 306.922 49.9189 300.099 40.6869 290.849ZM142.487 294.683L142.184 294.164L141.729 294.557C131.85 303.094 119.645 309.068 106.177 311.431L105.469 311.555L105.831 312.175L131.719 356.495L132.098 357.144L132.55 356.543L145.045 339.94L166.599 337.334L167.355 337.243L166.971 336.585L142.487 294.683ZM192.7 19.5659V19.0659H192.2H-164.2H-164.7V19.5659V264.14V264.64L-164.2 264.64L23.1801 264.655L23.8902 264.655L23.6509 263.986C20.9305 256.385 19.45 248.205 19.45 239.683C19.45 199.442 52.4634 166.81 93.2 166.81C133.937 166.81 166.95 199.442 166.95 239.683C166.95 248.204 165.47 256.382 162.751 263.981L162.512 264.65L163.222 264.65L192.2 264.64L192.7 264.64V264.14V19.5659ZM93.2 185.376C62.8576 185.376 38.25 209.685 38.25 239.683C38.25 269.681 62.8576 293.989 93.2 293.989C123.542 293.989 148.15 269.681 148.15 239.683C148.15 209.685 123.542 185.376 93.2 185.376ZM-3.18208 166.81V185.376H-114.2V166.81H-3.18208ZM142.2 117.896V136.462H-114.2V117.896H142.2ZM142.2 68.9808V87.5467H-114.2V68.9808H142.2Z"
        stroke="#CA998E"
      />
    </svg>
  ) : id === 1 ? (
    <svg
      width="27"
      height="406"
      viewBox="0 0 27 406"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110.433 282.562V282.062H109.933H75.8606H75.3606V282.562V405.55H-14.5V-42.5H7.21516L7.21206 203.093L8.16325 203.308C33.7602 149.71 80.3191 108.133 144.11 78.1422C216.5 44.1094 308.186 26.8706 396.721 25.024L397.903 24.9994L397.062 24.1684L352.37 -19.9886L367.721 -35.1619L439.289 35.5786L367.721 106.319L352.37 91.1457L396.675 47.3464L397.569 46.4632L396.313 46.4909C310.906 48.3773 222.504 65.0444 153.442 97.5131C107.369 119.173 71.2414 146.934 46.4208 181.24C21.5971 215.551 8.10211 256.384 7.2574 304.153L7.25736 304.158L7.21516 308.948V308.953V383.598V384.098H7.71516H53.1455H53.6455V383.598V260.609H132.149V383.598V384.098H132.649H178.079H178.579V383.598V204.478H257.082V383.598V384.098H257.582H303.012H303.512V383.598V148.346H382.015V383.598V384.098H382.515H438.803V405.55H360.3V170.299V169.799H359.8H325.727H325.227V170.299V405.55H235.367V226.43V225.93H234.867H200.794H200.294V226.43V405.55H110.433V282.562Z"
        stroke="#3BBBA3"
      />
    </svg>
  ) : id === 2 ? (
    <svg
      width="27"
      height="357"
      viewBox="0 0 27 357"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.9 63.3623L119.4 63.3624L235.5 63.3728V355.779H-187.5V63.3728L-71.3999 63.3624L-70.9 63.3623V62.8624V41.9152C-70.9 19.0476 -52.1462 0.5 -29 0.5H77C100.146 0.5 118.9 19.0476 118.9 41.9152V62.8624V63.3623ZM-166.628 164.446L-167.3 164.201V164.915V335.322V335.822H-166.8H214.8H215.3V335.322V164.999V164.282L214.627 164.53L59.1566 221.923L58.8298 222.043L58.8298 222.392L58.8333 271.949H-10.8334L-10.8404 221.7L-10.8404 221.35L-11.1688 221.23L-166.628 164.446ZM38.6298 188.619V188.119H38.1298H9.8596H9.3596V188.619V251.491V251.991H9.8596H38.1298H38.6298V251.491V188.619ZM-70.9 83.3305V83.3199L-71.4 83.32L-166.8 83.3305L-167.3 83.3305V83.8305V142.575V142.924L-166.972 143.044L-11.5119 199.819L-10.8405 200.064L-10.8404 199.349L-10.8334 168.161H58.8333L58.8298 200.019L58.8297 200.737L59.503 200.489L214.973 143.096L215.3 142.975V142.627V83.8305V83.3305L214.8 83.3305L119.4 83.32L118.9 83.3199V83.3305H-70.9ZM77.0182 20.4579L77.0091 20.4576H77H-29C-40.435 20.4576 -49.8115 29.206 -50.6405 40.3139L-50.6412 40.3232L-50.6415 40.3326L-50.6996 41.8967L-50.7 41.9059V41.9152V62.8624V63.3624H-50.2H98.2H98.7V62.8624V41.9152C98.7 30.598 89.8426 21.335 78.6186 20.5164L78.6095 20.5158L78.6003 20.5154L77.0182 20.4579Z"
        stroke="#CFA867"
      />
    </svg>
  ) : id === 3 ? (
    <svg
      width="27"
      height="380"
      viewBox="0 0 27 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M297.848 129.168L297.177 129.785L298.058 130.019C345.592 142.661 380.9 185.389 382.447 236.621C382.447 236.622 382.447 236.622 382.447 236.623L382.5 240.13V240.133V290.492H358.113L358.113 240.13L358.113 240.121L358.062 237.061L358.062 237.053C356.477 190.065 318.74 152.261 271.832 150.673L271.824 150.673L268.769 150.621H268.761H248.451H248.438L248.425 150.622C246.426 150.728 244.415 150.801 242.39 150.801C232.696 150.801 223.396 149.117 214.765 146.024L214.239 145.835L214.11 146.38C209.961 163.956 200.553 179.521 187.645 191.306L186.934 191.955L187.874 192.163C233.133 202.187 266.991 242.629 266.991 290.992V379.5H-11.2606V290.992C-11.2606 242.466 22.8249 201.916 68.3187 192.057L69.2635 191.852L68.5504 191.199C55.6957 179.433 46.332 163.912 42.1796 146.371L42.0507 145.827L41.5238 146.016C32.9045 149.117 23.6048 150.801 13.911 150.801C12.1036 150.801 10.3099 150.743 8.53175 150.627L8.51566 150.626H8.49951L-11.7605 150.621C-60.0816 150.621 -99.4426 189.044 -101.062 237.053L-101.062 237.061L-101.113 240.121V240.13V290.492H-125.5V240.13C-125.5 187.545 -89.9406 143.281 -41.5969 130.151L-40.72 129.913L-41.3904 129.299C-57.8042 114.284 -68.0952 92.6717 -68.0952 68.6507C-68.0952 23.2793 -31.3789 -13.5 13.911 -13.5C50.7596 -13.5 81.9337 10.847 92.2736 44.3607L92.4386 44.8953L92.9514 44.6715C103.731 39.9679 115.636 37.3619 128.15 37.3619C140.669 37.3619 152.579 39.9699 163.369 44.6727L163.882 44.8963L164.046 44.3615C174.359 10.8531 205.537 -13.5 242.39 -13.5C287.68 -13.5 324.396 23.2793 324.396 68.6507C324.396 92.5982 314.168 114.152 297.848 129.168ZM165.954 214.199H165.945L133.727 214.206H133.711L133.696 214.207C131.862 214.321 130.013 214.379 128.15 214.379C126.288 214.379 124.439 214.321 122.605 214.207L122.59 214.206H122.574L89.7857 214.199C48.4089 214.199 14.6901 247.036 13.1787 288.113L13.1786 288.122L13.1259 290.982V290.992V354.569V355.069H13.6259H242.105H242.605V354.569V290.992C242.605 249.545 209.826 215.766 168.819 214.252L168.81 214.251L165.954 214.199ZM123.411 189.774L123.429 189.776H123.447H132.854H132.872L132.89 189.774C166.005 187.345 192.117 159.662 192.117 125.87C192.117 90.4822 163.479 61.7929 128.15 61.7929C92.822 61.7929 64.1841 90.4822 64.1841 125.87C64.1841 159.662 90.2954 187.345 123.411 189.774ZM39.7263 120.267L39.9815 120.139L40.0005 119.854C41.6278 95.5111 53.0876 73.8589 70.4375 58.8519L70.6526 58.6658L70.6026 58.3858C65.7857 31.4039 42.236 10.931 13.911 10.931C-17.9123 10.931 -43.7087 36.7738 -43.7087 68.6507C-43.7087 100.528 -17.9123 126.37 13.911 126.37C23.1911 126.37 31.9602 124.172 39.7263 120.267ZM185.679 58.3823L185.629 58.6626L185.845 58.8488C203.213 73.859 214.673 95.5111 216.303 119.86L216.322 120.145L216.577 120.274C224.341 124.172 233.11 126.37 242.39 126.37C274.213 126.37 300.01 100.528 300.01 68.6507C300.01 36.7738 274.213 10.931 242.39 10.931C214.065 10.931 190.515 31.4039 185.679 58.3823Z"
        stroke="#63C6DC"
      />
    </svg>
  ) : (
    id === 4 && (
      <svg
        width="27"
        height="380"
        viewBox="0 0 27 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-318.522 430.494H-355.5V406.508H-318.522C-304.446 406.508 -293.036 395.098 -293.036 381.023V156.153V155.653H-293.536H-355.447V82.5895L-106.148 0.526356L143.5 82.5856V155.653H81.2465H80.7465V156.153V381.023C80.7465 395.098 92.1567 406.508 106.232 406.508H143.21V430.494H106.232C78.9099 430.494 56.761 408.345 56.761 381.023V131.667L119.012 131.655L119.512 131.655V131.155V100.31V99.9485L119.168 99.8355L-105.989 25.8284L-106.145 25.777L-106.301 25.8284L-331.121 99.8355L-331.465 99.9487V100.31V131.155V131.655L-330.965 131.655L-269.051 131.667V381.023C-269.051 408.345 -291.2 430.494 -318.522 430.494ZM-5.70282 156.153V155.653H-6.20282H-62.4202H-62.9202V156.153V377.9C-62.9202 393.7 -50.1117 406.508 -34.3115 406.508C-18.5114 406.508 -5.70282 393.7 -5.70282 377.9V156.153ZM-149.37 156.153V155.653H-149.87H-206.087H-206.587V156.153V377.9C-206.587 393.7 -193.778 406.508 -177.978 406.508C-162.178 406.508 -149.37 393.7 -149.37 377.9V156.153ZM143.21 468.972V492.958H-355.5V468.972H143.21ZM-125.384 131.668V377.9C-125.384 406.947 -148.931 430.494 -177.978 430.494C-207.025 430.494 -230.572 406.947 -230.572 377.9V131.668H-125.384ZM18.2827 131.668V381.023C18.2827 408.345 -3.86627 430.494 -31.1884 430.494H-37.4347C-64.7568 430.494 -86.9058 408.345 -86.9058 381.023V131.668H18.2827Z"
          stroke="#FF8275"
        />
      </svg>
    )
  )
}

const SubHeader = styled.h3`
  font-family: CeraGR-Medium;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`
const Wrapper = styled.div`
  margin-bottom: 50px;

  /* position: absolute;
  top: 0;
  right: ${props => (props.id ? `${props.id * 30}px` : 0)}; */
`
const PanelWrapper = styled.div`
  /* borderRadius: "8px",
            */

  ${up("lg")} {
    display: flex;
    justify-content: center;
    //className="w-auto d-flex border my-5"
    position: ${props => (props.total ? "absolute" : "unset")};
    top: ${props => (props.total ? "0" : "unset")};
    /* border: 2px solid red; */
    height: auto;
    border-radius: 8px;
    display: flex;
    /* padding-left: 12px; */
    &:not(:first-child) {
      /* border-left: 2px solid #d2d2d2; */
    }
    /* &:first-child {
    box-shadow: 0px 14px 24px rgba(0, 47, 108, 0.07);
  } */
    /* opacity: 0.1; */
    /* z-index: ${props => (props.isTop ? 1 : "unset")}; */
    &.active {
      z-index: ${props => (props.isTop ? 6 : "unset ")};
      opacity: 1;
      transition: all 0.2s ease;
    }
  }
  ${down("lg")} {
    display: ${props => (props.isTop ? "block" : "none")};
    width: 250px;
  }
  transition: all 0.3s ease;
`
const LeftPanel = styled.div`
  width: 50%;
  padding: 30px;
`
//className="border-start ps-5 pe-4 pt-4 pb-4"

const RightPanel = styled.div`
  border-left: 1px solid #f2f2f2;
  width: 50%;
  height: 500px;
  overflow-y: auto;
  padding: 30px;
  background-color: white;
  &::-webkit-scrollbar-track {
    background: rgba(0, 47, 108, 0.1);
    box-shadow: unset;
  }
`

const BackwardWrapper = ({ isBackward, children }) => {
  return (
    <div
      style={{
        backgroundColor: isBackward === true ? "#f5f5f5" : "transparent",
        paddingRight: isBackward === true ? "15px" : 0,
        borderRight:
          isBackward === true ? "1px solid rgba(0, 47, 108, 0.2);" : "none",
      }}
    >
      {children}
    </div>
  )
}

const CategoryPanel = ({
  isTop,
  id = 1,
  catergoryItemData,
  subtagsData,
  resourceData,
  categoryData,
  isBackward = false,
  boxType,
  ...rest
}) => {
  const { color, description, icon, title } = catergoryItemData.data
  const { prismicId, uid } = catergoryItemData
  const [subtag, setSubtag] = useState("YnJuIxEAACwA5BqT")
  const [resourceList, setResource] = useState(resourceData)

  useEffect(() => {
    setResource(
      resourceData.filter(item =>
        item.data.group_of_subtags.some(item => item.subtag.id === subtag)
      )
    )
  }, [subtag, resourceData])

  return (
    <BackwardWrapper isBackward={isBackward}>
      <Wrapper id={catergoryItemData.data.title} color={color} {...rest}>
        <PanelWrapper>
          <PanelWrapper
            style={{
              boxShadow: "-30px 14px 64px rgba(0, 47, 108, 0.1)",
              borderRadius: "8px",
              width: "796px",
              backgroundColor: "white",
            }}
            css={[
              {
                borderBottom: "6px solid",
                borderColor: color ?? color,
              },
            ]}
          >
            {isTop && (
              <>
                <LeftPanel>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      marginBottom: "16px",
                    }}
                  >
                    <img src={icon.url} className="w-10 h-100" alt="" />
                  </div>
                  <Link to={`/category/${uid}`}>
                    <h4>{title}</h4>
                  </Link>
                  <div className="d-md-flex flex-wrap  mt-4 mb-3 d-none">
                    {subtagsData?.map(
                      (item, i) =>
                        item.data.category.id === prismicId && (
                          <FilterItem
                            key={i}
                            color={color}
                            onClick={() => {
                              setSubtag(item.prismicId)
                            }}
                          >
                            {item.data.tag_name}
                          </FilterItem>
                        )
                    )}
                  </div>
                  <div className="d-md-flex d-none">
                    <p>{description}</p>
                  </div>
                </LeftPanel>
                <RightPanel>
                  <div className="bg-white d-flex d-md-block">
                    <button
                      style={{ width: "100%", paddingBottom: "34px" }}
                      className="d-md-flex justify-content-between d-none border-0 outline-0 bg-transparent"
                    >
                      <div>
                        <a href="/">
                          <h5 style={{ fontSize: "24px" }}>
                            Πρόσφατο περιεχόμενο
                          </h5>
                        </a>
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        <a href="/" style={{ fontSize: "24px" }}>
                          &#10095;
                        </a>
                      </div>
                    </button>
                    <div className="d-flex d-md-block w-auto overflow-auto">
                      {resourceList
                        ?.filter(item => item.data.category.id === prismicId)
                        .slice(0, 3)
                        .map((item, i) => (
                          <div key={i}>
                            {boxType === "second" ? (
                              <ContentBox
                                key={i}
                                categoryData={categoryData}
                                resourceData={item}
                                width="100%"
                                margin="0"
                                borderBottom={"none"}
                                boxShadow="none"
                                dashboard={true}
                              />
                            ) : (
                              <ContentBox4
                                key={i}
                                categoryData={categoryData}
                                catergoryItemData={catergoryItemData.data}
                                resourceData={item}
                                width="100%"
                                margin="0"
                                borderBottom={"none"}
                                boxShadow="none"
                                dashboard={true}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  <button className="d-md-none justify-content-between d-flex border-0 outline-0 bg-transparent">
                    <a href="/">
                      <SubHeader className="mb-4 ">
                        Πρόσφατο περιεχόμενο
                      </SubHeader>
                    </a>
                    <a href="/">
                      <SubHeader>&#10095;</SubHeader>
                    </a>
                  </button>
                </RightPanel>
              </>
            )}
          </PanelWrapper>
          {/* <EmptyPanel id={rest.id} /> */}
        </PanelWrapper>
      </Wrapper>
    </BackwardWrapper>
  )
}

const EmptyWrapper = styled.div`
  border-right: 1px solid rgba(0, 47, 108, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height: 430px;

  position: relative;
  &:before {
    content: "";
    width: 15px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -15px;
  }
`
const EmptyWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 430px;
`
export const EmptyPanel = ({
  id,
  catergoryItemData,
  isBackward,
  isLast,
  ...rest
}) => {
  const { color } = catergoryItemData.data
  return (
    <div style={{ display: "flex" }} {...rest}>
      <Wrapper color={color}>
        <BackwardWrapper isBackward={isLast === true ? false : isBackward}>
          <PanelWrapper>
            {isBackward ? (
              <EmptyWrapper2>
                <Lines id={id} />
              </EmptyWrapper2>
            ) : (
              <EmptyWrapper>
                <Lines id={id} />
              </EmptyWrapper>
            )}
          </PanelWrapper>
        </BackwardWrapper>
      </Wrapper>
    </div>
  )
}
export default CategoryPanel
