// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAppUninstalls } from 'hubspot-sdk/resources/crm/app-uninstalls';
import { Crm } from 'hubspot-sdk/resources/crm/crm';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAppUninstalls],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Crm],
});

const runTests = (client: PartialHubSpot<{ crm: { appUninstalls: BaseAppUninstalls } }>) => {
  // Mock server tests are disabled
  test.skip('uninstall', async () => {
    const responsePromise = client.crm.appUninstalls.uninstall();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource appUninstalls', () => runTests(client));
describe('resource appUninstalls (tree shakable, base)', () => runTests(partialClient));
describe('resource appUninstalls (tree shakable, subresource)', () => runTests(parentPartialClient));
