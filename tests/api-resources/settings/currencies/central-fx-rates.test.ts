// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCentralFxRates } from '@hubspot/sdk/resources/settings/currencies/central-fx-rates';
import { Currencies } from '@hubspot/sdk/resources/settings/currencies/currencies';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCentralFxRates],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Currencies],
});

const runTests = (
  client: PartialHubSpot<{ settings: { currencies: { centralFxRates: BaseCentralFxRates } } }>,
) => {
  // Mock server tests are disabled
  test.skip('createCurrency: only required params', async () => {
    const responsePromise = client.settings.currencies.centralFxRates.createCurrency({ currencyCode: 'AED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createCurrency: required and optional params', async () => {
    const response = await client.settings.currencies.centralFxRates.createCurrency({ currencyCode: 'AED' });
  });

  // Mock server tests are disabled
  test.skip('getInformation', async () => {
    const responsePromise = client.settings.currencies.centralFxRates.getInformation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getUnsupportedCurrencies', async () => {
    const responsePromise = client.settings.currencies.centralFxRates.getUnsupportedCurrencies();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource centralFxRates', () => runTests(client));
describe('resource centralFxRates (tree shakable, base)', () => runTests(partialClient));
describe('resource centralFxRates (tree shakable, subresource)', () => runTests(parentPartialClient));
