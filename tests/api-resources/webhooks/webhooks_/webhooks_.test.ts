// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Mock server tests are disabled
  test.skip('createCrmSnapshot: only required params', async () => {
    const responsePromise = client.webhooks.webhooks.createCrmSnapshot({
      snapshotRequests: [
        {
          objectId: 0,
          objectTypeId: 'objectTypeId',
          portalId: 0,
          properties: ['string'],
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

  // Mock server tests are disabled
  test.skip('createCrmSnapshot: required and optional params', async () => {
    const response = await client.webhooks.webhooks.createCrmSnapshot({
      snapshotRequests: [
        {
          objectId: 0,
          objectTypeId: 'objectTypeId',
          portalId: 0,
          properties: ['string'],
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createFilter: only required params', async () => {
    const responsePromise = client.webhooks.webhooks.createFilter({
      filter: {
        conditions: [
          {
            filterType: 'CRM_OBJECT_PROPERTY',
            operator: 'CONTAINS',
            property: 'property',
          },
        ],
      },
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

  // Mock server tests are disabled
  test.skip('createFilter: required and optional params', async () => {
    const response = await client.webhooks.webhooks.createFilter({
      filter: {
        conditions: [
          {
            filterType: 'CRM_OBJECT_PROPERTY',
            operator: 'CONTAINS',
            property: 'property',
            value: 'value',
            values: ['string'],
          },
        ],
      },
      subscriptionId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('createJournalSubscription', async () => {
    const responsePromise = client.webhooks.webhooks.createJournalSubscription({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createSubscription: only required params', async () => {
    const responsePromise = client.webhooks.webhooks.createSubscription(0, {
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
    const response = await client.webhooks.webhooks.createSubscription(0, {
      active: true,
      eventType: 'company.associationChange',
      eventTypeName: 'eventTypeName',
      objectTypeId: 'objectTypeId',
      propertyName: 'propertyName',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteFilter', async () => {
    const responsePromise = client.webhooks.webhooks.deleteFilter(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteJournalSubscription', async () => {
    const responsePromise = client.webhooks.webhooks.deleteJournalSubscription(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deletePortalSubscriptions', async () => {
    const responsePromise = client.webhooks.webhooks.deletePortalSubscriptions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSettings', async () => {
    const responsePromise = client.webhooks.webhooks.deleteSettings(0);
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
    const responsePromise = client.webhooks.webhooks.deleteSubscription(0, { appId: 0 });
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
    const response = await client.webhooks.webhooks.deleteSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getFilter', async () => {
    const responsePromise = client.webhooks.webhooks.getFilter(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getFiltersBySubscription', async () => {
    const responsePromise = client.webhooks.webhooks.getFiltersBySubscription(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getJournalEarliest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getJournalEarliest(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getJournalLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getJournalLatest({ installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getJournalNextByOffset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getJournalNextByOffset(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getJournalStatus', async () => {
    const responsePromise = client.webhooks.webhooks.getJournalStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLocalEarliest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getLocalEarliest({ installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLocalLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getLocalLatest({ installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLocalNextByOffset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.webhooks.getLocalNextByOffset(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLocalStatus', async () => {
    const responsePromise = client.webhooks.webhooks.getLocalStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSettings', async () => {
    const responsePromise = client.webhooks.webhooks.getSettings(0);
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
    const responsePromise = client.webhooks.webhooks.getSubscription(0, { appId: 0 });
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
    const response = await client.webhooks.webhooks.getSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('listJournalSubscriptions', async () => {
    const responsePromise = client.webhooks.webhooks.listJournalSubscriptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.webhooks.webhooks.listSubscriptions(0);
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
    const responsePromise = client.webhooks.webhooks.updateSettings(0, {
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
    const response = await client.webhooks.webhooks.updateSettings(0, {
      targetUrl: 'targetUrl',
      throttling: { maxConcurrentRequests: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('updateSubscription: only required params', async () => {
    const responsePromise = client.webhooks.webhooks.updateSubscription(0, { appId: 0 });
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
    const response = await client.webhooks.webhooks.updateSubscription(0, { appId: 0, active: true });
  });
});
