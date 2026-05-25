// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { WebhooksJournal } from '@hubspot/sdk/resources/webhooks-journal/webhooks-journal';
import { BaseSubscriptions } from '@hubspot/sdk/resources/webhooks-journal/subscriptions/subscriptions';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSubscriptions],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WebhooksJournal],
});

const runTests = (client: PartialHubSpot<{ webhooksJournal: { subscriptions: BaseSubscriptions } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.create({
      actions: ['CREATE'],
      objectIds: [0],
      objectTypeId: 'objectTypeId',
      portalId: 0,
      properties: ['string'],
      subscriptionType: 'OBJECT',
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
    const response = await client.webhooksJournal.subscriptions.create({
      actions: ['CREATE'],
      objectIds: [0],
      objectTypeId: 'objectTypeId',
      portalId: 0,
      properties: ['string'],
      subscriptionType: 'OBJECT',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteForPortal', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.deleteForPortal(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource subscriptions', () => runTests(client));
describe('resource subscriptions (tree shakable, base)', () => runTests(partialClient));
describe('resource subscriptions (tree shakable, subresource)', () => runTests(parentPartialClient));
