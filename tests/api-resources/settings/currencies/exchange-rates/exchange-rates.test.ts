// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Currencies } from '@hubspot/sdk/resources/settings/currencies/currencies';
import { BaseExchangeRates } from '@hubspot/sdk/resources/settings/currencies/exchange-rates/exchange-rates';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseExchangeRates],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Currencies],
});

const runTests = (
  client: PartialHubSpot<{ settings: { currencies: { exchangeRates: BaseExchangeRates } } }>,
) => {
  // Mock server tests are disabled
  test.skip('createExchangeRate: only required params', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.createExchangeRate({
      conversionRate: 0,
      fromCurrencyCode: 'AED',
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
  test.skip('createExchangeRate: required and optional params', async () => {
    const response = await client.settings.currencies.exchangeRates.createExchangeRate({
      conversionRate: 0,
      fromCurrencyCode: 'AED',
      effectiveAt: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('getExchangeRateByID', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.getExchangeRateByID('exchangeRateId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listCurrentExchangeRates', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.listCurrentExchangeRates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listExchangeRates', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.listExchangeRates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listExchangeRates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.settings.currencies.exchangeRates.listExchangeRates(
        {
          after: 'after',
          fromCurrencyCode: 'AED',
          limit: 0,
          toCurrencyCode: 'AED',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateExchangeRate: only required params', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.updateExchangeRate('exchangeRateId', {
      conversionRate: 0,
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
  test.skip('updateExchangeRate: required and optional params', async () => {
    const response = await client.settings.currencies.exchangeRates.updateExchangeRate('exchangeRateId', {
      conversionRate: 0,
      effectiveAt: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('updateVisibility: only required params', async () => {
    const responsePromise = client.settings.currencies.exchangeRates.updateVisibility({
      fromCurrencyCode: 'AED',
      toCurrencyCode: 'AED',
      visibleInUI: true,
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
  test.skip('updateVisibility: required and optional params', async () => {
    const response = await client.settings.currencies.exchangeRates.updateVisibility({
      fromCurrencyCode: 'AED',
      toCurrencyCode: 'AED',
      visibleInUI: true,
    });
  });
};
describe('resource exchangeRates', () => runTests(client));
describe('resource exchangeRates (tree shakable, base)', () => runTests(partialClient));
describe('resource exchangeRates (tree shakable, subresource)', () => runTests(parentPartialClient));
