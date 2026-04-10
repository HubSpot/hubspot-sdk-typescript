// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Settings } from '@hubspot/sdk/resources/settings/settings';
import { BaseCurrencies } from '@hubspot/sdk/resources/settings/currencies/currencies';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCurrencies],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Settings],
});

const runTests = (client: PartialHubSpot<{ settings: { currencies: BaseCurrencies } }>) => {
  // Mock server tests are disabled
  test.skip('getCompanyCurrency', async () => {
    const responsePromise = client.settings.currencies.getCompanyCurrency();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listCodes', async () => {
    const responsePromise = client.settings.currencies.listCodes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateCompanyCurrency: only required params', async () => {
    const responsePromise = client.settings.currencies.updateCompanyCurrency({ currencyCode: 'AED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateCompanyCurrency: required and optional params', async () => {
    const response = await client.settings.currencies.updateCompanyCurrency({ currencyCode: 'AED' });
  });
};
describe('resource currencies', () => runTests(client));
describe('resource currencies (tree shakable, base)', () => runTests(partialClient));
describe('resource currencies (tree shakable, subresource)', () => runTests(parentPartialClient));
