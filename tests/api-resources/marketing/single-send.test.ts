// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Marketing } from '@hubspot/sdk/resources/marketing/marketing';
import { BaseSingleSend } from '@hubspot/sdk/resources/marketing/single-send';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSingleSend],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Marketing],
});

const runTests = (client: PartialHubSpot<{ marketing: { singleSend: BaseSingleSend } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.singleSend.create({
      contactProperties: { foo: 'string' },
      customProperties: { foo: {} },
      emailId: 0,
      message: {
        bcc: ['string'],
        cc: ['string'],
        replyTo: ['string'],
      },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.marketing.singleSend.create({
      contactProperties: { foo: 'string' },
      customProperties: { foo: {} },
      emailId: 0,
      message: {
        bcc: ['string'],
        cc: ['string'],
        replyTo: ['string'],
        from: 'from',
        sendId: 'sendId',
        to: 'to',
      },
    });
  });
};
describe('resource singleSend', () => runTests(client));
describe('resource singleSend (tree shakable, base)', () => runTests(partialClient));
describe('resource singleSend (tree shakable, subresource)', () => runTests(parentPartialClient));
