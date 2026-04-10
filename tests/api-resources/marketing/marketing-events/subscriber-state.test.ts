// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriberState', () => {
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
});
