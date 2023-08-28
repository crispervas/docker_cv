const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
    
];

const doc = {
    swagger: "2.0",
    info: {
        description: "Servicios del proyecto CV",
        version: "1.0.0",
        title: "CV",
        termsOfService: "http://swagger.io/terms/",
        contact: {
            email: "apiteam@swagger.io",
        },
        license: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html",
        },
    },
    host: "http://expresapp.com",
    basePath: "/api",
    tags: [
        {
            name: "AUTH",
            description: "Autenticaciones",
        },
    ],
    schemes: ["https", "http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
        basicAuth: {
            type: "basic",
            description: "HTTP Basic Authentication. Works over `HTTP` and `HTTPS`",
        },
        bearerAuth: {
            type: "http",
            description: "HTTP Basic Authentication. Works over `HTTP` and `HTTPS`",
        },
    },
    definitions: {},
};

swaggerAutogen(outputFile, endpointsFiles, doc);
