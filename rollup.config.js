const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'es',
    name: "quick-react-pagination"
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" })
  ]
};
