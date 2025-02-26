const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Cấu hình Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Tài liệu API cho project Node.js",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./api/v1/routes/*.js"], // Đường dẫn tới các file chứa API Docs
};

// Khởi tạo Swagger Spec
const swaggerSpec = swaggerJSDoc(options);

// Hàm để setup Swagger UI trong Express
const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger UI được chạy tại: http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;
