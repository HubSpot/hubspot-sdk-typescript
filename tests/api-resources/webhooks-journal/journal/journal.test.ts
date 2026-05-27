// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { WebhooksJournal } from '@hubspot/sdk/resources/webhooks-journal/webhooks-journal';
import { BaseJournal } from '@hubspot/sdk/resources/webhooks-journal/journal/journal';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseJournal],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WebhooksJournal],
});

const runTests = (client: PartialHubSpot<{ webhooksJournal: { journal: BaseJournal } }>) => {
  // Mock server tests are disabled
  test.skip('getEarliest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journal.getEarliest(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getNextFromOffset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journal.getNextFromOffset(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.webhooksJournal.journal.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource journal', () => runTests(client));
describe('resource journal (tree shakable, base)', () => runTests(partialClient));
describe('resource journal (tree shakable, subresource)', () => runTests(parentPartialClient));
