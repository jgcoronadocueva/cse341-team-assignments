const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger-output.json');
const swaggerOptions = {
  swaggerOptions: {
    operationsSorter: (a, b) => {
      const methodsOrder = ["get", "post", "put", "delete"];
      const aMethod = a.get("method");
      const bMethod = b.get("method");

      return methodsOrder.indexOf(aMethod) - methodsOrder.indexOf(bMethod);
    }
  }
};

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument, swaggerOptions));

module.exports = router;