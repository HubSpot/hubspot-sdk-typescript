// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Events } from '@hubspot/sdk/resources/events/events';
import { BaseOccurrences } from '@hubspot/sdk/resources/events/occurrences';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseOccurrences],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Events],
});

const runTests = (client: PartialHubSpot<{ events: { occurrences: BaseOccurrences } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.occurrences.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.occurrences.list(
        {
          id: ['string'],
          after: 'after',
          before: 'before',
          eventType: 'eventType',
          limit: 0,
          objectId: 0,
          objectProperty: { '{propname}': {} },
          objectType: 'objectType',
          occurredAfter: '2019-12-27T18:11:19.117Z',
          occurredBefore: '2019-12-27T18:11:19.117Z',
          properties: ['string'],
          property: { '{propname}': {} },
          sort: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listEventTypes', async () => {
    const responsePromise = client.events.occurrences.listEventTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource occurrences', () => runTests(client));
describe('resource occurrences (tree shakable, base)', () => runTests(partialClient));
describe('resource occurrences (tree shakable, subresource)', () => runTests(parentPartialClient));
