// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.subscriptions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getEmailStatus', async () => {
    const responsePromise = client.marketing.subscriptions.getEmailStatus('emailAddress');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.subscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
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
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.marketing.subscriptions.subscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });

  // Prism tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.unsubscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
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
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.marketing.subscriptions.unsubscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });
});
