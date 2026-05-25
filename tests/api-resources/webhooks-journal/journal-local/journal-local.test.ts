// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { WebhooksJournal } from '@hubspot/sdk/resources/webhooks-journal/webhooks-journal';
import { BaseJournalLocal } from '@hubspot/sdk/resources/webhooks-journal/journal-local/journal-local';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseJournalLocal],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [WebhooksJournal],
});

const runTests = (client: PartialHubSpot<{ webhooksJournal: { journalLocal: BaseJournalLocal } }>) => {
  // Mock server tests are disabled
  test.skip('getEarliest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journalLocal.getEarliest(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journalLocal.getLatest(
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getNextFromOffset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journalLocal.getNextFromOffset(
        'offset',
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.webhooksJournal.journalLocal.getStatus(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource journalLocal', () => runTests(client));
describe('resource journalLocal (tree shakable, base)', () => runTests(partialClient));
describe('resource journalLocal (tree shakable, subresource)', () => runTests(parentPartialClient));
