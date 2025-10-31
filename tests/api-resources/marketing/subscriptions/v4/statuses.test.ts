// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statuses', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.update('subscriberIdString', {
      channel: 'EMAIL',
      statusState: 'SUBSCRIBED',
      subscriptionId: 0,
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
  test.skip('update: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.update('subscriberIdString', {
      channel: 'EMAIL',
      statusState: 'SUBSCRIBED',
      subscriptionId: 0,
      legalBasis: 'LEGITIMATE_INTEREST_PQL',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });

  // Prism tests are disabled
  test.skip('batchGet: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.batchGet({
      channel: 'EMAIL',
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

  // Prism tests are disabled
  test.skip('batchGet: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.batchGet({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('batchGetUnsubscribeAllStatus: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.batchGetUnsubscribeAllStatus({
      channel: 'EMAIL',
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

  // Prism tests are disabled
  test.skip('batchGetUnsubscribeAllStatus: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.batchGetUnsubscribeAllStatus({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('batchUnsubscribeAll: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.batchUnsubscribeAll({
      channel: 'EMAIL',
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

  // Prism tests are disabled
  test.skip('batchUnsubscribeAll: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.batchUnsubscribeAll({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
      verbose: true,
    });
  });

  // Prism tests are disabled
  test.skip('batchUpdate: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.batchUpdate({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'SUBSCRIBED',
          subscriberIdString: 'subscriberIdString',
          subscriptionId: 0,
        },
      ],
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
    const response = await client.marketing.subscriptions.v4.statuses.batchUpdate({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'SUBSCRIBED',
          subscriberIdString: 'subscriberIdString',
          subscriptionId: 0,
          legalBasis: 'LEGITIMATE_INTEREST_PQL',
          legalBasisExplanation: 'legalBasisExplanation',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.get('subscriberIdString', {
      channel: 'EMAIL',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.get('subscriberIdString', {
      channel: 'EMAIL',
      businessUnitId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('getUnsubscribeAllStatus: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.getUnsubscribeAllStatus(
      'subscriberIdString',
      { channel: 'EMAIL' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getUnsubscribeAllStatus: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.getUnsubscribeAllStatus(
      'subscriberIdString',
      { channel: 'EMAIL', businessUnitId: 0, verbose: true },
    );
  });

  // Prism tests are disabled
  test.skip('unsubscribeAll: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.unsubscribeAll('subscriberIdString', {
      channel: 'EMAIL',
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
  test.skip('unsubscribeAll: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.unsubscribeAll('subscriberIdString', {
      channel: 'EMAIL',
      businessUnitId: 0,
      verbose: true,
    });
  });
});
