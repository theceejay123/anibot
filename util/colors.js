const tinycolor = require("tinycolor2");

const lightenRate = 3.7;
const darkenRate = 12.5;

const _lightBlue = "7bdff2";
const _lightGreen = "b2f7ef";
const _lightCreamPink = "eff7f6";
const _Pink = "f7d6e0";
const _PinkShade = "f2b5d4";

// https://coolors.co/d3f8e2-e4c1f9-f694c1-ede7b1-a9def9
// Update for more color palette

module.exports = {
  lightBlue: {
    main: _lightBlue,
    light: tinycolor(_lightBlue)
      .lighten(lightenRate)
      .toHex(),
    dark: tinycolor(_lightBlue)
      .darken(darkenRate)
      .toHex()
  },
  lightGreen: {
    main: _lightGreen,
    light: tinycolor(_lightGreen)
      .lighten(lightenRate)
      .toHex(),
    dark: tinycolor(_lightGreen)
      .darken(darkenRate)
      .toHex()
  },
  lightCreamPink: {
    main: _lightCreamPink,
    light: tinycolor(_lightCreamPink)
      .lighten(lightenRate)
      .toHex(),
    dark: tinycolor(_lightCreamPink)
      .darken(darkenRate)
      .toHex()
  },
  Pink: {
    main: _Pink,
    light: tinycolor(_Pink)
      .lighten(lightenRate)
      .toHex(),
    dark: tinycolor(_Pink)
      .darken(darkenRate)
      .toHex()
  },
  PinkShade: {
    main: _PinkShade,
    light: tinycolor(_PinkShade)
      .lighten(lightenRate)
      .toHex(),
    dark: tinycolor(_PinkShade )
      .darken(darkenRate)
      .toHex()
  }
};
