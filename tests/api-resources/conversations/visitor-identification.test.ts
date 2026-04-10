// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Conversations } from 'hubspot-sdk/resources/conversations/conversations';
import { BaseVisitorIdentification } from 'hubspot-sdk/resources/conversations/visitor-identification';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseVisitorIdentification],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Conversations],
});

const runTests = (
  client: PartialHubSpot<{ conversations: { visitorIdentification: BaseVisitorIdentification } }>,
) => {
  // Mock server tests are disabled
  test.skip('generateToken: only required params', async () => {
    const responsePromise = client.conversations.visitorIdentification.generateToken({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateToken: required and optional params', async () => {
    const response = await client.conversations.visitorIdentification.generateToken({
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
    });
  });
};
describe('resource visitorIdentification', () => runTests(client));
describe('resource visitorIdentification (tree shakable, base)', () => runTests(partialClient));
describe('resource visitorIdentification (tree shakable, subresource)', () => runTests(parentPartialClient));
