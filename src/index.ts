import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { helloWorld } from './handlers/helloWorld';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const message = await helloWorld();

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
