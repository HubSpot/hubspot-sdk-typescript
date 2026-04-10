// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBatch } from 'hubspot-sdk/resources/crm/deal-splits/batch';
import { DealSplits } from 'hubspot-sdk/resources/crm/deal-splits/deal-splits';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBatch],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DealSplits],
});

const runTests = (client: PartialHubSpot<{ crm: { dealSplits: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.crm.dealSplits.batch.read({ inputs: [{ id: 'id' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('read: required and optional params', async () => {
    const response = await client.crm.dealSplits.batch.read({ inputs: [{ id: 'id' }] });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.crm.dealSplits.batch.upsert({
      inputs: [{ id: 0, splits: [{ ownerId: 0, percentage: 0 }] }],
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.crm.dealSplits.batch.upsert({
      inputs: [{ id: 0, splits: [{ ownerId: 0, percentage: 0 }] }],
    });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
