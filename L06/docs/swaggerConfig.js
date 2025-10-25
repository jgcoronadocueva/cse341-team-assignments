module.exports = {
  doc: {
    info: {
      title: "Temple API",
      description: "An API for temple data",
      version: "1.0.0",
    },
    host: "localhost:8080",
    schemes: ["http", "https"],            
    basePath: "/",
  },
  options: {
    autoHeaders: true,
    autoQuery: true,
    autoBody: true,
  },
};

