// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MarketingEvents } from 'hubspot-sdk/resources/marketing/marketing-events/marketing-events';
import { BaseSubscriberState } from 'hubspot-sdk/resources/marketing/marketing-events/subscriber-state';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSubscriberState],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MarketingEvents],
});

const runTests = (
  client: PartialHubSpot<{ marketing: { marketingEvents: { subscriberState: BaseSubscriberState } } }>,
) => {
  // Mock server tests are disabled
  test.skip('recordByEmail: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.subscriberState.recordByEmail('subscriberState', {
      externalEventId: 'externalEventId',
      externalAccountId: 'externalAccountId',
      inputs: [
        {
          contactProperties: { foo: 'string' },
          email: 'email',
          interactionDateTime: 0,
          properties: { foo: 'string' },
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('recordByID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.subscriberState.recordByID('subscriberState', {
      externalEventId: 'externalEventId',
      externalAccountId: 'externalAccountId',
      inputs: [
        {
          interactionDateTime: 0,
          properties: { foo: 'string' },
          vid: 0,
        },
      ],
    });
  });
};
describe('resource subscriberState', () => runTests(client));
describe('resource subscriberState (tree shakable, base)', () => runTests(partialClient));
describe('resource subscriberState (tree shakable, subresource)', () => runTests(parentPartialClient));
