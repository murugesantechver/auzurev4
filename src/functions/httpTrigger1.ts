// index.js
import { app } from "@azure/functions";
import azureFunctionHandler from "azure-aws-serverless-express";
import expressApp from "../../app";

app.http("httpTrigger1", {
  methods: ["GET"],
  route: "api/{*segments}",
  handler: async (context, request) => {
    console.log("context ::::: ", context);
    console.log("request :::::: ", request);

    return { body: `Hello` };
  },
});

module.exports = azureFunctionHandler(expressApp);
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
