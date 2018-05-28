module.exports = probability =>
  Object.assign(Math, {
    random: () => probability
  });
