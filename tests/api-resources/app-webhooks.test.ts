// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appWebhooks', () => {
  // Mock server tests are disabled
  test.skip('batchUpdateSubscriptions: only required params', async () => {
    const responsePromise = client.appWebhooks.batchUpdateSubscriptions(0, {
      inputs: [{ id: 0, active: true }],
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
  test.skip('batchUpdateSubscriptions: required and optional params', async () => {
    const response = await client.appWebhooks.batchUpdateSubscriptions(0, {
      inputs: [{ id: 0, active: true }],
    });
  });

  // Mock server tests are disabled
  test.skip('createSubscription: only required params', async () => {
    const responsePromise = client.appWebhooks.createSubscription(0, {
      active: true,
      eventType: 'company.associationChange',
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
  test.skip('createSubscription: required and optional params', async () => {
    const response = await client.appWebhooks.createSubscription(0, {
      active: true,
      eventType: 'company.associationChange',
      eventTypeName: 'eventTypeName',
      objectTypeId: 'objectTypeId',
      propertyName: 'propertyName',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteSettings', async () => {
    const responsePromise = client.appWebhooks.deleteSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSubscription: only required params', async () => {
    const responsePromise = client.appWebhooks.deleteSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSubscription: required and optional params', async () => {
    const response = await client.appWebhooks.deleteSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getSettings', async () => {
    const responsePromise = client.appWebhooks.getSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSubscription: only required params', async () => {
    const responsePromise = client.appWebhooks.getSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSubscription: required and optional params', async () => {
    const response = await client.appWebhooks.getSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.appWebhooks.listSubscriptions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const responsePromise = client.appWebhooks.updateSettings(0, {
      targetUrl: 'targetUrl',
      throttling: { maxConcurrentRequests: 0 },
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
  test.skip('updateSettings: required and optional params', async () => {
    const response = await client.appWebhooks.updateSettings(0, {
      targetUrl: 'targetUrl',
      throttling: { maxConcurrentRequests: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('updateSubscription: only required params', async () => {
    const responsePromise = client.appWebhooks.updateSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSubscription: required and optional params', async () => {
    const response = await client.appWebhooks.updateSubscription(0, { appId: 0, active: true });
  });
});
