// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSingleEmail } from 'hubspot-sdk/resources/marketing/transactional/single-email';
import { Transactional } from 'hubspot-sdk/resources/marketing/transactional/transactional';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSingleEmail],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Transactional],
});

const runTests = (
  client: PartialHubSpot<{ marketing: { transactional: { singleEmail: BaseSingleEmail } } }>,
) => {
  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.marketing.transactional.singleEmail.send({
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
  test.skip('send: required and optional params', async () => {
    const response = await client.marketing.transactional.singleEmail.send({
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
describe('resource singleEmail', () => runTests(client));
describe('resource singleEmail (tree shakable, base)', () => runTests(partialClient));
describe('resource singleEmail (tree shakable, subresource)', () => runTests(parentPartialClient));
