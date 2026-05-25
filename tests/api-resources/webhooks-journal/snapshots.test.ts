// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSnapshots } from '@hubspot/sdk/resources/webhooks-journal/snapshots';
import { WebhooksJournal } from '@hubspot/sdk/resources/webhooks-journal/webhooks-journal';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSnapshots],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WebhooksJournal],
});

const runTests = (client: PartialHubSpot<{ webhooksJournal: { snapshots: BaseSnapshots } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooksJournal.snapshots.create({
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
  test.skip('create: required and optional params', async () => {
    const response = await client.webhooksJournal.snapshots.create({
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
};
describe('resource snapshots', () => runTests(client));
describe('resource snapshots (tree shakable, base)', () => runTests(partialClient));
describe('resource snapshots (tree shakable, subresource)', () => runTests(parentPartialClient));
