import React from "react"
import styled from "styled-components"

const typoAssets = {
  title: {
    component: "h1",
    family: "CeraGR-Bold",
    size: 100,
    height: 56,
  },
  subject_title: {
    component: "h2",
    family: "CeraGR-Medium",
    size: 48,
    height: 48,
    decoration: "underline",
  },
  page_subtitle: {
    component: "h2",
    family: "CeraGR-Bold",
    size: 48,
    height: 40,
  },
  h3: {
    component: "h3",
    family: "CeraGR-Bold",
    size: 40,
    height: 40,
  },
  h4: {
    component: "h4",
    family: "CeraGR-Bold",
    size: 32,
    height: 40,
  },
  h5_bold: {
    component: "h5",
    family: "CeraGR-Bold",
    size: 20,
    height: 32,
  },
  h5_regular: {
    component: "h5",
    family: "CeraGR-Medium",
    size: 20,
    height: 30,
  },
  h6_bold: {
    component: "h6",
    family: "CeraGR-Bold",
    size: 18,
    height: "auto",
  },
  h6_regular: {
    component: "h6",
    family: "CeraGR-Medium",
    size: 18,
    height: 24,
  },
  quote: {
    component: "p",
    family: "CeraGR-RegularItalic",
    size: 24,
    height: 30,
  },
  detail_bold: {
    component: "p",
    family: "CeraGR-Bold",
    size: 16,
    height: 22,
  },
  detail_regular: {
    component: "p",
    family: "CeraGR-Medium",
    size: 16,
    height: 22,
  },
  detail_underline: {
    component: "p",
    family: "CeraGR-Medium",
    size: 16,
    height: 22,
    decoration: "underline",
  },
  subtitle_big: {
    component: "p",
    family: "CeraGR-Medium",
    size: "24",
    height: "26",
  },
  subtitle_medium: {
    component: "p",
    family: "CeraGR-Medium",
    size: "20",
    height: "24",
  },
  text: {
    component: "p",
    family: "CeraGR-Regular",
    size: 14,
    height: 24,
  },
  text_bold: {
    component: "p",
    family: "CeraGR-Bold",
    size: 14,
    height: 24,
  },
  text_medium: {
    component: "p",
    family: "CeraGR-Medium",
    size: 14,
    height: 22,
  },
  text_underline: {
    component: "p",
    family: "CeraGR-Regular",
    size: 14,
    height: 24,
    decoration: "underline",
  },
  small: {
    component: "p",
    family: "CeraGR-Regular",
    size: 12,
    height: 26,
  },
}

export const Typography = ({
  variant = "text",
  size,
  weight,
  height,
  family,
  color = "#002f6c",
  align = "left",
  children,
  decoration = "none",
  ...props
}) => {
  return (
    <StyledTypography
      variant={variant}
      size={size}
      weight={weight}
      height={height}
      color={color}
      align={align}
      family={family}
      decoration={decoration}
      as={typoAssets[variant].component}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}

const StyledTypography = styled.div`
  font-size: ${({ size, variant }) => size ?? typoAssets[variant].size}px;
  color: ${({ color, theme }) => color ?? theme.colors[color]};
  font-weight: ${({ weight, variant }) => weight ?? typoAssets[variant].weight};
  font-family: ${({ family, variant }) => family ?? typoAssets[variant].family};
  line-height: ${({ height, variant }) =>
    height ?? typoAssets[variant].height}px;
  text-align: ${({ align, variant }) => align ?? typoAssets[variant].align};
  text-decoration: ${({ variant, decoration }) =>
    decoration ?? typoAssets[variant].decoration};
`
