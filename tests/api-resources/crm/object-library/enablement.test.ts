// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEnablement } from '@hubspot/sdk/resources/crm/object-library/enablement';
import { ObjectLibrary } from '@hubspot/sdk/resources/crm/object-library/object-library';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseEnablement],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ObjectLibrary],
});

const runTests = (client: PartialHubSpot<{ crm: { objectLibrary: { enablement: BaseEnablement } } }>) => {
  // Mock server tests are disabled
  test.skip('getAll', async () => {
    const responsePromise = client.crm.objectLibrary.enablement.getAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeID', async () => {
    const responsePromise = client.crm.objectLibrary.enablement.getByObjectTypeID('objectTypeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource enablement', () => runTests(client));
describe('resource enablement (tree shakable, base)', () => runTests(partialClient));
describe('resource enablement (tree shakable, subresource)', () => runTests(parentPartialClient));
