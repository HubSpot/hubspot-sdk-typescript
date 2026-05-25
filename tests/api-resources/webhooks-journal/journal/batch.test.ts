// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBatch } from '@hubspot/sdk/resources/webhooks-journal/journal/batch';
import { Journal } from '@hubspot/sdk/resources/webhooks-journal/journal/journal';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBatch],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Journal],
});

const runTests = (client: PartialHubSpot<{ webhooksJournal: { journal: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.webhooksJournal.journal.batch.get({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.webhooksJournal.journal.batch.get({
      inputs: ['string'],
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getEarliest', async () => {
    const responsePromise = client.webhooksJournal.journal.batch.getEarliest(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEarliest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journal.batch.getEarliest(
        1,
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getFromOffset: only required params', async () => {
    const responsePromise = client.webhooksJournal.journal.batch.getFromOffset(1, { offset: 'offset' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getFromOffset: required and optional params', async () => {
    const response = await client.webhooksJournal.journal.batch.getFromOffset(1, {
      offset: 'offset',
      installPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getLatest', async () => {
    const responsePromise = client.webhooksJournal.journal.batch.getLatest(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooksJournal.journal.batch.getLatest(
        1,
        { installPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
