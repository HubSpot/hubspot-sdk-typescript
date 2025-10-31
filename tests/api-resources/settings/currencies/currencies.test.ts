// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource currencies', () => {
  // Prism tests are disabled
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.settings.currencies.batchCreate({
      inputs: [{ conversionRate: 0, fromCurrencyCode: 'AED' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.settings.currencies.batchCreate({
      inputs: [{ conversionRate: 0, fromCurrencyCode: 'AED', effectiveAt: '2019-12-27T18:11:19.117Z' }],
    });
  });

  // Prism tests are disabled
  test.skip('batchGet: only required params', async () => {
    const responsePromise = client.settings.currencies.batchGet({ inputs: [{ id: '37295' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchGet: required and optional params', async () => {
    const response = await client.settings.currencies.batchGet({ inputs: [{ id: '37295' }] });
  });

  // Prism tests are disabled
  test.skip('batchUpdate: only required params', async () => {
    const responsePromise = client.settings.currencies.batchUpdate({
      inputs: [{ id: 'id', conversionRate: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchUpdate: required and optional params', async () => {
    const response = await client.settings.currencies.batchUpdate({
      inputs: [{ id: 'id', conversionRate: 0, effectiveAt: '2019-12-27T18:11:19.117Z' }],
    });
  });

  // Prism tests are disabled
  test.skip('createExchangeRate: only required params', async () => {
    const responsePromise = client.settings.currencies.createExchangeRate({
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

  // Prism tests are disabled
  test.skip('createExchangeRate: required and optional params', async () => {
    const response = await client.settings.currencies.createExchangeRate({
      conversionRate: 0,
      fromCurrencyCode: 'AED',
      effectiveAt: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('getExchangeRateByID', async () => {
    const responsePromise = client.settings.currencies.getExchangeRateByID('exchangeRateId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listCurrentExchangeRates', async () => {
    const responsePromise = client.settings.currencies.listCurrentExchangeRates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listExchangeRates', async () => {
    const responsePromise = client.settings.currencies.listExchangeRates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('updateCompanyCurrency: required and optional params', async () => {
    const response = await client.settings.currencies.updateCompanyCurrency({ currencyCode: 'AED' });
  });

  // Prism tests are disabled
  test.skip('updateExchangeRate: only required params', async () => {
    const responsePromise = client.settings.currencies.updateExchangeRate('exchangeRateId', {
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

  // Prism tests are disabled
  test.skip('updateExchangeRate: required and optional params', async () => {
    const response = await client.settings.currencies.updateExchangeRate('exchangeRateId', {
      conversionRate: 0,
      effectiveAt: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('updateVisibility: only required params', async () => {
    const responsePromise = client.settings.currencies.updateVisibility({
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

  // Prism tests are disabled
  test.skip('updateVisibility: required and optional params', async () => {
    const response = await client.settings.currencies.updateVisibility({
      fromCurrencyCode: 'AED',
      toCurrencyCode: 'AED',
      visibleInUI: true,
    });
  });
});
