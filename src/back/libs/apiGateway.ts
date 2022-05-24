import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

type ValidatedAPIGatewayProxyEventCompleted<Q, B> = Omit<
  APIGatewayProxyEvent,
  "queryStringParameters" | "body"
> & {
  queryStringParameters: FromSchema<Q>;
  body: FromSchema<B>;
};

export type ValidatedEventAPIGatewayProxyEventCompleted<
  Q = never,
  B = never
  > = Handler<
    ValidatedAPIGatewayProxyEventCompleted<Q, B>,
    APIGatewayProxyResult
  >;

export type TFormatJSONResponse = {
  statusCode: number;
  body: string;
  headers: {
    "Content-Type": string;
    "Access-Control-Allow-Origin": string;
  };
}

export const formatJSONResponse = (
  status: number,
  body: Record<string, unknown>
): TFormatJSONResponse => {
  return {
    statusCode: status,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};
