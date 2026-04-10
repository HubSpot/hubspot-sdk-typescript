// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEvents } from 'hubspot-sdk/resources/marketing/marketing-events/events';
import { MarketingEvents } from 'hubspot-sdk/resources/marketing/marketing-events/marketing-events';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseEvents],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MarketingEvents],
});

const runTests = (client: PartialHubSpot<{ marketing: { marketingEvents: { events: BaseEvents } } }>) => {
  // Mock server tests are disabled
  test.skip('cancelByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.events.cancelByExternalEventID(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.events.cancelByExternalEventID(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
    );
  });

  // Mock server tests are disabled
  test.skip('completeByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.events.completeByExternalEventID(
      'externalEventId',
      {
        externalAccountId: 'externalAccountId',
        endDateTime: '2019-12-27T18:11:19.117Z',
        startDateTime: '2019-12-27T18:11:19.117Z',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('completeByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.events.completeByExternalEventID(
      'externalEventId',
      {
        externalAccountId: 'externalAccountId',
        endDateTime: '2019-12-27T18:11:19.117Z',
        startDateTime: '2019-12-27T18:11:19.117Z',
      },
    );
  });
};
describe('resource events', () => runTests(client));
describe('resource events (tree shakable, base)', () => runTests(partialClient));
describe('resource events (tree shakable, subresource)', () => runTests(parentPartialClient));
