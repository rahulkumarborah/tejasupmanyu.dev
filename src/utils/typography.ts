import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.googleFonts = [
  {
    name: "Roboto",
    styles: ["700"],
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
]

Wordpress2016.headerFontFamily = ["Roboto", "Georgia", "serif"]

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
