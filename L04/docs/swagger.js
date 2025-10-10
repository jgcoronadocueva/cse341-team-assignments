const swaggerAutogen = require("swagger-autogen")();
const { doc, options } = require("./swaggerConfig");

const outputFile = "./docs/swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc, options);