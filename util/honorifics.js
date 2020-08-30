const honorifics = [
  "kyun",
  "kun",
  "san",
  "hime",
  "chan",
  "koi",
  "dono",
  "senpai",
  "sama"
];

const randomize = () => {
  return honorifics[Math.floor(Math.random() * honorifics.length)];
}

module.exports = { randomize }
