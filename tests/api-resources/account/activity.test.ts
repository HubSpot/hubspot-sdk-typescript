// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Account } from '@hubspot/sdk/resources/account/account';
import { BaseActivity } from '@hubspot/sdk/resources/account/activity';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseActivity],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Account],
});

const runTests = (client: PartialHubSpot<{ account: { activity: BaseActivity } }>) => {
  // Mock server tests are disabled
  test.skip('listAuditLogs', async () => {
    const responsePromise = client.account.activity.listAuditLogs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAuditLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.account.activity.listAuditLogs(
        {
          actingUserId: [0],
          after: 'after',
          fillFinalTimestamp: true,
          limit: 0,
          occurredAfter: '2019-12-27T18:11:19.117Z',
          occurredBefore: '2019-12-27T18:11:19.117Z',
          sort: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listLoginActivities', async () => {
    const responsePromise = client.account.activity.listLoginActivities();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLoginActivities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.account.activity.listLoginActivities(
        {
          after: 'after',
          limit: 0,
          userId: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listSecurityActivities', async () => {
    const responsePromise = client.account.activity.listSecurityActivities();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSecurityActivities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.account.activity.listSecurityActivities(
        {
          after: 'after',
          fromTimestamp: 0,
          limit: 0,
          toTimestamp: 0,
          userId: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
};
describe('resource activity', () => runTests(client));
describe('resource activity (tree shakable, base)', () => runTests(partialClient));
describe('resource activity (tree shakable, subresource)', () => runTests(parentPartialClient));
