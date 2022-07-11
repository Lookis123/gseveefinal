import React from "react"
import Modal from "react-modal"
import styled from "styled-components"

import {
  FacebookP,
  TwitterP,
  MessagenerP,
  LinkedinP,
} from "../../utils/imgImport"

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    padding: "28px 16px",
  },
}
const Wrapper = styled.div`
  border-bottom: 1px solid rgba(0, 47, 108, 0.2);
  border-top: 1px solid rgba(0, 47, 108, 0.2);
  margin: 28px 0;
  padding: 28px 0;
  display: flex;
  /* justify-content: space-between; */
`
const Button = styled.button`
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  align-self: center;
  outline: none;
  border: none;
`
const Title = styled.span`
  font-family: CeraGR-Bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`
const RoundedButton = styled.img`
  width: 98px;
  height: 90px;
  padding: 25px 29px;
  background-color: ${props => props.theme.colors.buttons[props.index]};
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  /* &:nth-child(1) {
    margin-left: 16px;
  } */
`
const ButtonContainer = styled.div`
  width: 98px;
  &:not(:nth-child(1)) {
    margin-left: 16px;
  }
`

const HLink = styled.span`
  font-family: CeraGR-Regular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`
const SocialModal = props => {
  const { isOpen, onAfterOpen, onRequestClose } = props
  const socials = [
    {
      icon: FacebookP,
      label: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: MessagenerP,
      label: "Messagener",
      link: "https://www.messagener.com/",
    },
    { icon: TwitterP, label: "Twitter", link: "https://www.twitter.com/" },
    { icon: LinkedinP, label: "Linkedin", link: "https://www.linkedin.com/" },
  ]
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
    >
      <div className="d-flex justify-content-between ps-3 pe-3">
        <Title>Κοινοποίηση</Title>
        <Button onClick={onRequestClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 1L8 8L15 15" stroke="#002F6C" strokeWidth="2" />
            <path d="M1 1L8 8L1 15" stroke="#002F6C" strokeWidth="2" />
          </svg>
        </Button>
      </div>
      <form>
        <Wrapper>
          {socials.map((item, i) => (
            <ButtonContainer key={150 + i}>
              <a href={item.link}>
                <RoundedButton src={item.icon} index={i} />
              </a>
              <div className="w-100 text-center">{item.label}</div>
            </ButtonContainer>
            // <div key={i} className="w-auto p-0">

            //   <span>{item.label}</span>
            // </div>
          ))}
        </Wrapper>
        <div className="d-flex justify-content-between ps-3 pe-3">
          <a href="https://www.gsevee.gr/9296/">
            <HLink>https://www.gsevee.gr/9296/</HLink>
          </a>
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2669 0.933594C9.51886 0.933594 8.81644 1.22517 8.28724 1.75391L7.35391 2.68724C6.82517 3.21644 6.53359 3.91886 6.53359 4.66693C6.53359 5.25692 6.71718 5.81678 7.05312 6.2875L6.2875 7.05312C5.81673 6.71734 5.25656 6.53359 4.66693 6.53359C3.91886 6.53359 3.21644 6.82517 2.68724 7.35391L1.75391 8.28724C1.22517 8.81644 0.933594 9.51886 0.933594 10.2669C0.933594 11.015 1.22517 11.7174 1.75391 12.2466C2.28264 12.7758 2.98553 13.0669 3.73359 13.0669C4.48166 13.0669 5.18408 12.7753 5.71328 12.2466L6.64661 11.3133C7.17535 10.7841 7.46693 10.0817 7.46693 9.33359C7.46693 9.07646 7.4302 8.82564 7.36393 8.58437L6.52448 9.42383C6.50301 9.87136 6.32738 10.3123 5.98672 10.6534L5.05339 11.5867C4.32539 12.3147 3.14134 12.3147 2.4138 11.5867C1.68627 10.8587 1.6858 9.67467 2.4138 8.94713L3.34714 8.0138C3.71114 7.6498 4.18951 7.46875 4.66784 7.46875C4.99533 7.46875 5.31963 7.55987 5.61029 7.73034L4.33698 9.00364C4.29219 9.04665 4.25643 9.09815 4.2318 9.15514C4.20717 9.21214 4.19415 9.27347 4.19352 9.33556C4.19289 9.39765 4.20465 9.45923 4.22812 9.51672C4.25159 9.5742 4.28629 9.62642 4.3302 9.67033C4.3741 9.71423 4.42632 9.74893 4.4838 9.7724C4.54129 9.79587 4.60287 9.80763 4.66496 9.807C4.72705 9.80637 4.78838 9.79335 4.84537 9.76872C4.90237 9.74409 4.95387 9.70833 4.99687 9.66354L9.66354 4.99687C9.73098 4.93133 9.77703 4.84693 9.79568 4.75476C9.81433 4.66258 9.8047 4.56692 9.76804 4.48032C9.73139 4.39371 9.66943 4.32019 9.59028 4.26941C9.51113 4.21862 9.41848 4.19293 9.32448 4.1957C9.20324 4.19932 9.08817 4.24999 9.00364 4.33698L7.73034 5.61029C7.30978 4.89483 7.40028 3.96026 8.0138 3.34714L8.94713 2.4138C9.31114 2.0498 9.78859 1.86875 10.2669 1.86875C10.7453 1.86875 11.2227 2.05027 11.5867 2.4138C12.3147 3.1418 12.3147 4.32585 11.5867 5.05339L10.6534 5.98672C10.3127 6.32738 9.87136 6.50301 9.42383 6.52448L8.58437 7.36393C8.82564 7.4302 9.07646 7.46693 9.33359 7.46693C10.0817 7.46693 10.7841 7.17535 11.3133 6.64661L12.2466 5.71328C12.7753 5.18408 13.0669 4.48166 13.0669 3.73359C13.0669 2.98553 12.7753 2.28311 12.2466 1.75391C11.7174 1.22517 11.015 0.933594 10.2669 0.933594Z"
                fill="#002F6C"
              />
            </svg>
            <a className="ps-2" href="/">
              <HLink>Αντιγραφή</HLink>
            </a>
          </span>
        </div>
      </form>
    </Modal>
  )
}

export default SocialModal
