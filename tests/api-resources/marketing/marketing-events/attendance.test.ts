// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attendance', () => {
  // Prism tests are disabled
  test.skip('createByContactID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByContactID('subscriberState', {
      externalEventId: 'externalEventId',
      inputs: [{ interactionDateTime: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createByContactID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByContactID('subscriberState', {
      externalEventId: 'externalEventId',
      inputs: [{ interactionDateTime: 0, properties: { foo: 'string' }, vid: 0 }],
      externalAccountId: 'externalAccountId',
    });
  });

  // Prism tests are disabled
  test.skip('createByEmail: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByEmail('subscriberState', {
      externalEventId: 'externalEventId',
      inputs: [{ email: 'email', interactionDateTime: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createByEmail: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByEmail('subscriberState', {
      externalEventId: 'externalEventId',
      inputs: [
        {
          email: 'email',
          interactionDateTime: 0,
          contactProperties: { foo: 'string' },
          properties: { foo: 'string' },
        },
      ],
      externalAccountId: 'externalAccountId',
    });
  });
});
