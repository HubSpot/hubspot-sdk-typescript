// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statuses', () => {
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
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.getBatch({
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
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.getBatch({
      channel: 'EMAIL',
      inputs: ['string'],
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
  test.skip('getUnsubscribeAllStatusBatch: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.getUnsubscribeAllStatusBatch({
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
  test.skip('getUnsubscribeAllStatusBatch: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.getUnsubscribeAllStatusBatch({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.set('subscriberIdString', {
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
  test.skip('set: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.set('subscriberIdString', {
      channel: 'EMAIL',
      statusState: 'SUBSCRIBED',
      subscriptionId: 0,
      legalBasis: 'LEGITIMATE_INTEREST_PQL',
      legalBasisExplanation: 'legalBasisExplanation',
    });
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

  // Prism tests are disabled
  test.skip('unsubscribeAllBatch: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.unsubscribeAllBatch({
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
  test.skip('unsubscribeAllBatch: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.unsubscribeAllBatch({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
      verbose: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.statuses.updateBatch({
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
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.statuses.updateBatch({
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
});
