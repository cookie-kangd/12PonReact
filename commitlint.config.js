module.exports = {
  extends: ["cz"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "init",
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
