// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Events } from '@hubspot/sdk/resources/events/events';
import { BaseSend } from '@hubspot/sdk/resources/events/send';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSend],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Events],
});

const runTests = (client: PartialHubSpot<{ events: { send: BaseSend } }>) => {
  // Mock server tests are disabled
  test.skip('batchSend: only required params', async () => {
    const responsePromise = client.events.send.batchSend({
      inputs: [
        {
          eventName: 'eventName',
          properties: { foo: 'string' },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('batchSend: required and optional params', async () => {
    const response = await client.events.send.batchSend({
      inputs: [
        {
          eventName: 'eventName',
          properties: { foo: 'string' },
          email: 'email',
          objectId: 'objectId',
          occurredAt: '2019-12-27T18:11:19.117Z',
          utk: 'utk',
          uuid: 'uuid',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.events.send.send({
      eventName: 'eventName',
      properties: { foo: 'string' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.events.send.send({
      eventName: 'eventName',
      properties: { foo: 'string' },
      email: 'email',
      objectId: 'objectId',
      occurredAt: '2019-12-27T18:11:19.117Z',
      utk: 'utk',
      uuid: 'uuid',
    });
  });
};
describe('resource send', () => runTests(client));
describe('resource send (tree shakable, base)', () => runTests(partialClient));
describe('resource send (tree shakable, subresource)', () => runTests(parentPartialClient));
