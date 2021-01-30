module.exports = {
  "presets": ["@babel/preset-env", ["@babel/preset-react", { targets: { node: false }, useBuiltIns: "entry", modules: "cjs" }]]
};