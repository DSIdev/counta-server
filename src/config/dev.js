module.exports = {
  ENV: "DEV",
  PORT: 3000,
  MONGO_USER: "counta",
  MONGO_PASS: "Pass-1234",
  MONGO_URI: function () { return `mongodb://${this.MONGO_USER}:${this.MONGO_PASS}@ds149706.mlab.com:49706/mbdb` },
  getEnv: function () { return this.ENV; }
};
