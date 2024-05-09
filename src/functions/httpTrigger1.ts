// index.js
// import { app } from "@azure/functions";
// import azureFunctionHandler from "azure-aws-serverless-express";
// import expressApp from "../../app";

// app.http("httpTrigger1", {
//   methods: ["GET"],
//   route: "{*segments}",
//   handler: azureFunctionHandler(expressApp),
// });

// export default app;
/*
// index.js
const { app } = require("@azure/functions");
const azureFunctionHandler = require("azure-aws-serverless-express");
import expressApp from "../../app";
import { HttpRequest } from "@azure/functions";

type AzureFunction = (context: any, ...args: any[]) => Promise<any> | void;

const httpTrigger: AzureFunction = async function (
  context: any,
  req: HttpRequest
): Promise<void> {
  console.log("req ::::::::::: ", req);
  await azureFunctionHandler(expressApp)(context, req);
};

export default app.http("httpTrigger1", {
  methods: ["GET"],
  route: "api/{*segments}",
  handler: httpTrigger,
});

*/
import { InvocationContext, HttpRequest } from "@azure/functions";
import { app } from "@azure/functions";
import { createAzureFunctionHandler } from "azure-function-express";
import azureFunctionHandler from "azure-aws-serverless-express";
import serverlessExpress from "@codegenie/serverless-express";

import expressApp from "../../app";

const azureHandler = createAzureFunctionHandler(expressApp);
const cachedServerlessExpress = serverlessExpress({ app: expressApp });

const httpTrigger: any = async function (
  req: HttpRequest,
  context: InvocationContext
): Promise<void> {
  cachedServerlessExpress(expressApp)(context, req);
  //cachedServerlessExpress(context, req);
};

export default app.http("httpTrigger1", {
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  route: "{*segments}",
  authLevel: "anonymous",
  handler: httpTrigger,
});
