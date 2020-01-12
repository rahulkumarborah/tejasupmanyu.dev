import { rhythm, scale } from "../../utils/typography"

export const layoutStyles = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(24),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  backgroundColor: "background",
}

export const headerContainerStyles = {
  display: "flex",
  marginBottom: rhythm(1.5),
  justifyContent: "space-between",
}

export const linkStyles = {
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
}

export const toggleIconStyles = {
  width: "16px",
  height: "16px",
  pointerEvents: "none",
}

export const toggleContainerStyles = {
  display: "flex",
  alignItems: "center",
}
