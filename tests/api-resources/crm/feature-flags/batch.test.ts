// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBatch } from 'hubspot-sdk/resources/crm/feature-flags/batch';
import { FeatureFlags } from 'hubspot-sdk/resources/crm/feature-flags/feature-flags';

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
  resources: [FeatureFlags],
});

const runTests = (client: PartialHubSpot<{ crm: { featureFlags: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.featureFlags.batch.delete('flagName', { appId: 0, portalIds: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.featureFlags.batch.delete('flagName', { appId: 0, portalIds: [0] });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.crm.featureFlags.batch.upsert('flagName', {
      appId: 0,
      portalStates: [{ flagState: 'ABSENT', portalId: 0 }],
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
    const response = await client.crm.featureFlags.batch.upsert('flagName', {
      appId: 0,
      portalStates: [{ flagState: 'ABSENT', portalId: 0 }],
    });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
