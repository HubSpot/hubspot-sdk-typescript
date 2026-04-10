// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBatch } from 'hubspot-sdk/resources/crm/object-schemas/batch';
import { ObjectSchemas } from 'hubspot-sdk/resources/crm/object-schemas/object-schemas';

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
  resources: [ObjectSchemas],
});

const runTests = (client: PartialHubSpot<{ crm: { objectSchemas: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.batch.get({
      includeAssociationDefinitions: true,
      includeAuditMetadata: true,
      includePropertyDefinitions: true,
      inputs: ['string'],
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.objectSchemas.batch.get({
      includeAssociationDefinitions: true,
      includeAuditMetadata: true,
      includePropertyDefinitions: true,
      inputs: ['string'],
    });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
