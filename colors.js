const tinycolor = require("tinycolor2");

const lightenRate = 10;
const darkenRate = 30;

module.exports = {
  lightBlue: {
    main: "#7bdff2",
    light: tinycolor("#7bdff2")
      .lighten(lightenRate)
      .toHexString(),
    dark: tinycolor("#7bdff2")
      .darken(darkenRate)
      .toHexString()
  },
  lightGreen: {
    main: "b2f7ef",
    light: tinycolor("b2f7ef")
      .lighten(lightenRate)
      .toHexString(),
    dark
  }
};
