// const font = "sans-serif"
// import {} from ''
const lightGray = "#e9e9e9"
const DarkGray = "#434343"
const light = "#ffffff"
const dark = "#000000"
const pink = "#FFCCBB"
const blue = "#6EB5C0"
const beige = "#E2E8E4"
const darkBlue = "#006C84"

const colors = {
  lightGray,
  DarkGray,
  light,
  dark,
  pink,
  blue,
  beige,
  darkBlue,
}

export const allTheme = {
  white: {
    body: colors.lightGray,
    headerColor: colors.DarkGray,
    textColor: colors.light,
    buttonColor: colors.light,
    colorNumbers: colors.dark,
  },
  black: {
    body: colors.black,
    headerColor: colors.DarkGray,
    textColor: colors.light,
    buttonColor: colors.light,
    colorNumbers: colors.dark,
  },
  color: {
    body: colors.pink,
    headerColor: colors.darkBlue,
    textColor: colors.beige,
    buttonColor: colors.beige,
    colorNumbers: colors.darkBlue,
  },
}

// export const ThemeContext = React.createContext(allTheme.white)
