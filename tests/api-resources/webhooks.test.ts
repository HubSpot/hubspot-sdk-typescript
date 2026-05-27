// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseWebhooks } from '@hubspot/sdk/resources/webhooks/webhooks';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseWebhooks],
});

const runTests = (client: PartialHubSpot<{ webhooks: BaseWebhooks }>) => {
  // Mock server tests are disabled
  test.skip('createBatchEventSubscriptions: only required params', async () => {
    const responsePromise = client.webhooks.createBatchEventSubscriptions(0, {
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
  test.skip('createBatchEventSubscriptions: required and optional params', async () => {
    const response = await client.webhooks.createBatchEventSubscriptions(0, {
      inputs: [{ id: 0, active: true }],
    });
  });

  // Mock server tests are disabled
  test.skip('createCrmSnapshots: only required params', async () => {
    const responsePromise = client.webhooks.createCrmSnapshots({
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
  test.skip('createCrmSnapshots: required and optional params', async () => {
    const response = await client.webhooks.createCrmSnapshots({
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
  test.skip('createEventSubscription: only required params', async () => {
    const responsePromise = client.webhooks.createEventSubscription(0, {
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
  test.skip('createEventSubscription: required and optional params', async () => {
    const response = await client.webhooks.createEventSubscription(0, {
      active: true,
      eventType: 'company.associationChange',
      eventTypeName: 'eventTypeName',
      objectTypeId: 'objectTypeId',
      propertyName: 'propertyName',
    });
  });

  // Mock server tests are disabled
  test.skip('createJournalSubscription: only required params', async () => {
    const responsePromise = client.webhooks.createJournalSubscription({
      actions: ['CREATE'],
      objectIds: [0],
      objectTypeId: 'objectTypeId',
      portalId: 0,
      properties: ['string'],
      subscriptionType: 'OBJECT',
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
  test.skip('createJournalSubscription: required and optional params', async () => {
    const response = await client.webhooks.createJournalSubscription({
      actions: ['CREATE'],
      objectIds: [0],
      objectTypeId: 'objectTypeId',
      portalId: 0,
      properties: ['string'],
      subscriptionType: 'OBJECT',
    });
  });

  // Mock server tests are disabled
  test.skip('createSubscriptionFilter: only required params', async () => {
    const responsePromise = client.webhooks.createSubscriptionFilter({
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
  test.skip('createSubscriptionFilter: required and optional params', async () => {
    const response = await client.webhooks.createSubscriptionFilter({
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
  test.skip('deleteEventSubscription: only required params', async () => {
    const responsePromise = client.webhooks.deleteEventSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteEventSubscription: required and optional params', async () => {
    const response = await client.webhooks.deleteEventSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('deleteJournalSubscription', async () => {
    const responsePromise = client.webhooks.deleteJournalSubscription(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteJournalSubscriptionForPortal', async () => {
    const responsePromise = client.webhooks.deleteJournalSubscriptionForPortal(0);
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
    const responsePromise = client.webhooks.deleteSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSubscriptionFilter', async () => {
    const responsePromise = client.webhooks.deleteSubscriptionFilter(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEarliestJournalBatch', async () => {
    const responsePromise = client.webhooks.getEarliestJournalBatch(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEarliestJournalBatch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getEarliestJournalBatch(
        1,
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getEarliestJournalEntry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getEarliestJournalEntry({ installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getEarliestLocalJournalBatch', async () => {
    const responsePromise = client.webhooks.getEarliestLocalJournalBatch(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEarliestLocalJournalBatch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getEarliestLocalJournalBatch(
        1,
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getEarliestLocalJournalEntry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getEarliestLocalJournalEntry(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getEventSubscription: only required params', async () => {
    const responsePromise = client.webhooks.getEventSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEventSubscription: required and optional params', async () => {
    const response = await client.webhooks.getEventSubscription(0, { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getJournalBatchByRequest: only required params', async () => {
    const responsePromise = client.webhooks.getJournalBatchByRequest({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getJournalBatchByRequest: required and optional params', async () => {
    const response = await client.webhooks.getJournalBatchByRequest({
      inputs: ['string'],
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getJournalBatchFromOffset: only required params', async () => {
    const responsePromise = client.webhooks.getJournalBatchFromOffset(1, { offset: 'offset' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getJournalBatchFromOffset: required and optional params', async () => {
    const response = await client.webhooks.getJournalBatchFromOffset(1, {
      offset: 'offset',
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getJournalStatus', async () => {
    const responsePromise = client.webhooks.getJournalStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getJournalSubscription', async () => {
    const responsePromise = client.webhooks.getJournalSubscription(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLatestJournalBatch', async () => {
    const responsePromise = client.webhooks.getLatestJournalBatch(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLatestJournalBatch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getLatestJournalBatch(1, { installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLatestJournalEntry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getLatestJournalEntry({ installPortalId: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLatestLocalJournalBatch', async () => {
    const responsePromise = client.webhooks.getLatestLocalJournalBatch(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLatestLocalJournalBatch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getLatestLocalJournalBatch(
        1,
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLatestLocalJournalEntry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getLatestLocalJournalEntry(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLocalJournalBatchByRequest: only required params', async () => {
    const responsePromise = client.webhooks.getLocalJournalBatchByRequest({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLocalJournalBatchByRequest: required and optional params', async () => {
    const response = await client.webhooks.getLocalJournalBatchByRequest({
      inputs: ['string'],
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getLocalJournalBatchFromOffset: only required params', async () => {
    const responsePromise = client.webhooks.getLocalJournalBatchFromOffset(1, { offset: 'offset' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLocalJournalBatchFromOffset: required and optional params', async () => {
    const response = await client.webhooks.getLocalJournalBatchFromOffset(1, {
      offset: 'offset',
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getLocalJournalStatus', async () => {
    const responsePromise = client.webhooks.getLocalJournalStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getNextJournalEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getNextJournalEntries(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getNextLocalJournalEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.getNextLocalJournalEntries(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getSettings', async () => {
    const responsePromise = client.webhooks.getSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSubscriptionFilter', async () => {
    const responsePromise = client.webhooks.getSubscriptionFilter(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEventSubscriptions', async () => {
    const responsePromise = client.webhooks.listEventSubscriptions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listJournalSubscriptions', async () => {
    const responsePromise = client.webhooks.listJournalSubscriptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSubscriptionFilters', async () => {
    const responsePromise = client.webhooks.listSubscriptionFilters(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateEventSubscription: only required params', async () => {
    const responsePromise = client.webhooks.updateEventSubscription(0, { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateEventSubscription: required and optional params', async () => {
    const response = await client.webhooks.updateEventSubscription(0, { appId: 0, active: true });
  });

  // Mock server tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const responsePromise = client.webhooks.updateSettings(0, {
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
    const response = await client.webhooks.updateSettings(0, {
      targetUrl: 'targetUrl',
      throttling: { maxConcurrentRequests: 0 },
    });
  });
};
describe('resource webhooks', () => runTests(client));
describe('resource webhooks (tree shakable, base)', () => runTests(partialClient));
