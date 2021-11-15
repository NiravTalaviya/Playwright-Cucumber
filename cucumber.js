const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require features/support/steps.ts
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};