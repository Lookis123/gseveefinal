import React from "react"
import styled from "styled-components"

const DiaNodeWrapper = styled.div`
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => (props.back ? props.back : "#002f6c")};
  h5,
  p {
    color: ${props => (props.text ? props.text : "white")};
    padding: 0px;
    margin: 0 auto;
  }
  h5 {
    font-family: CeraGR-Bold;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: CeraGR-Medium;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  padding: 18px 24px;
  margin: 0 5px;
`
const DiaNode = props => {
  const { icon, title, description, ...rest } = props
  return (
    <DiaNodeWrapper {...rest} className="d-flex  align-items-center">
      {icon && (
        <svg
          width="60"
          height="40"
          viewBox="0 0 44 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.1599 22.4882C36.73 19.3992 34.274 17.2483 31.003 17.2483H27.1002C26.661 14.4153 24.5862 12.4363 22.7302 10.6685C21.005 9.02589 19.5153 7.60752 19.5153 5.85653C19.5153 4.64186 19.5171 3.70563 19.5209 3.01794L25.2255 5.34263V9.78085L27.1881 9.78085V4.02331L18.919 0.654C16.2443 -0.435467 13.463 -0.157027 11.0892 1.43886C8.36213 3.27208 6.45935 6.73483 6.45935 9.86308C6.45935 14.2471 8.40138 17.9173 12.3976 21.0829C13.0555 21.6043 13.7471 22.1182 14.4144 22.6134C17.7714 25.1081 20.9414 27.4665 20.9807 31.3067L20.9825 34.6405H22.3975C24.5638 34.6405 26.1657 35.9467 26.5638 37.9182H17.5452V34.577C17.5452 30.3275 14.0873 26.8703 9.83688 26.8703V28.8325C13.0051 28.8325 15.5826 31.4095 15.5826 34.577V37.9201H9.31913C5.98085 37.9201 3.265 35.2049 3.265 31.8673C3.265 30.0135 4.19956 28.1934 5.10236 26.4331C5.76964 25.1343 6.45561 23.7944 6.76215 22.4321C6.99953 21.4492 7.39018 19.089 6.28926 17.1044C4.88554 14.5816 1.69118 13.7837 1.55661 13.75L0.678112 13.537L0.394003 14.3947C0.351013 14.5274 -0.662058 17.6594 0.739794 20.184C1.66502 21.8509 3.37341 22.7666 4.46498 23.2039C4.16779 23.9551 3.76779 24.7325 3.35472 25.5379C2.39211 27.4141 1.3024 29.5389 1.3024 31.8673C1.3024 36.2868 4.89862 39.8823 9.31913 39.8823H28.618V38.9012C28.618 35.4814 26.2628 32.9512 22.9414 32.6989V31.3777C22.9414 31.3646 22.9414 31.3534 22.9414 31.3403V30.2845C25.8255 27.2815 27.0516 24.0897 27.175 19.2086H31.003C33.1693 19.2086 34.7712 20.5148 35.1693 22.4863H29.36V24.4485H30.603H37.2272H41.2141V29.167C41.2141 32.2261 40.5991 35.3805 36.2459 37.7874C31.8927 35.3786 31.2777 32.2261 31.2777 29.167V27.4403H29.3151V29.167C29.3151 32.5587 30.0516 36.8306 35.7992 39.772L36.2459 40L36.6926 39.772C42.4402 36.8306 43.1767 32.5587 43.1767 29.167V22.4863H37.1599V22.4882ZM2.45566 19.2329C1.86688 18.1733 1.91174 16.8727 2.04258 15.9981C2.85566 16.3513 3.98648 17.0053 4.57152 18.0593C5.1603 19.1189 5.11544 20.4214 4.9846 21.2959C4.17153 20.9427 3.04444 20.2924 2.45566 19.2329ZM15.5807 21.0399C14.9247 20.5522 14.2462 20.0495 13.6125 19.5449C10.1173 16.7755 8.41821 13.608 8.41821 9.86308C8.41821 7.35151 9.96585 4.5559 12.1808 3.06652C13.1135 2.43863 14.4686 1.84438 16.149 1.97519C13.8499 3.88503 12.463 6.20224 12.2686 8.53254C12.1284 10.2032 12.549 12.7166 15.3434 15.2095C15.9078 15.7141 16.4368 16.1588 16.9471 16.5905C19.5433 18.7806 20.9732 19.9878 20.9732 23.3852L20.9751 25.8351C19.5545 23.9944 17.5508 22.5031 15.5807 21.0399ZM22.9377 27.2235L22.9358 23.3852C22.9358 19.0778 20.8517 17.3193 18.2125 15.0918C17.7116 14.6694 17.1938 14.2322 16.6499 13.7463C14.8929 12.1784 14.0761 10.4798 14.2256 8.69699C14.3808 6.84322 15.5751 4.95394 17.5564 3.36178C17.5545 4.01023 17.5527 4.83434 17.5527 5.85653C17.5527 8.44658 19.4966 10.2985 21.3769 12.0887C23.3563 13.9743 25.2255 15.7533 25.2255 18.3546C25.2236 22.2471 24.5769 24.8876 22.9377 27.2235Z"
            fill="white"
          />
        </svg>
      )}
      <div className="d-flex flex-column justify-content-center">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </DiaNodeWrapper>
  )
}
const ComplexDiagram = props => {
  return (
    <div className="d-flex flex-column justify-content-center ">
      <div className="first d-flex justify-content-center">
        <DiaNode
          icon
          className="text-white bg-blue"
          title={87}
          description="Ομοσπονδίες"
        />
      </div>
      <div className="second d-flex justify-content-center">
        <svg
          style={{ transform: "translateX(1px)" }}
          width="189"
          height="48"
          viewBox="0 0 189 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48V34C1 28.4772 5.47715 24 11 24H178C183.523 24 188 19.5228 188 14V0"
            stroke="#002F6C"
            strokeOpacity="0.16"
          />
        </svg>
        <svg
          width="2"
          height="48"
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0L1 48" stroke="#002F6C" strokeOpacity="0.16" />
        </svg>

        <svg
          style={{ transform: "translateX(-1px)" }}
          width="189"
          height="48"
          viewBox="0 0 189 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M188 48V34C188 28.4772 183.523 24 178 24H11C5.47715 24 1 19.5228 1 14V0"
            stroke="#002F6C"
            strokeOpacity="0.16"
          />
        </svg>
      </div>
      <div className="third d-flex justify-content-center">
        <DiaNode
          back="#FF8275"
          text="#002F6C"
          title={56}
          description="Ομοσπονδίες"
        />
        <DiaNode
          back="#00A6A8"
          text="#002F6C"
          title={30}
          description="Ομοσπονδίες"
        />
        <DiaNode
          back="#CA998E"
          text="#002F6C"
          title={1}
          description="Ομοσπονδίες"
        />
      </div>
      <div className="forth d-flex  justify-content-center">
        <svg
          width="100"
          height="48"
          viewBox="0 0 100 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0V14C1 19.5228 5.47715 24 11 24H99V48"
            stroke="#002F6C"
            strokeOpacity="0.16"
          />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <svg
            width="2"
            height="24"
            viewBox="0 0 2 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 24L1 -6.55651e-07"
              stroke="#002F6C"
              strokeOpacity="0.16"
            />
          </svg>

          <svg
            style={{ transform: "translateY(-1px)" }}
            width="178"
            height="2"
            viewBox="0 0 178 2"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L178 1.00002" stroke="#002F6C" strokeOpacity="0.16" />
          </svg>
        </div>
        <svg
          width="100"
          height="48"
          viewBox="0 0 100 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99 0V14C99 19.5228 94.5228 24 89 24H1V48"
            stroke="#002F6C"
            strokeOpacity="0.16"
          />
        </svg>
      </div>
      <div className="fifth d-flex  justify-content-center">
        <DiaNode title="1.1k" description="Ομοσπονδίες" />
        <DiaNode title="140k" description="Ομοσπονδίες" />
      </div>
    </div>
  )
}

export default ComplexDiagram
