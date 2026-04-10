// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Settings } from 'hubspot-sdk/resources/settings/settings';
import { BaseTaxRates } from 'hubspot-sdk/resources/settings/tax-rates';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTaxRates],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Settings],
});

const runTests = (client: PartialHubSpot<{ settings: { taxRates: BaseTaxRates } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.settings.taxRates.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.settings.taxRates.list(
        {
          active: true,
          after: 'after',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.settings.taxRates.get('taxRateGroupId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource taxRates', () => runTests(client));
describe('resource taxRates (tree shakable, base)', () => runTests(partialClient));
describe('resource taxRates (tree shakable, subresource)', () => runTests(parentPartialClient));
