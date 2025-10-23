// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.subscriptions.v4.links.create({
      channel: 'EMAIL',
      subscriberIdString: 'subscriberIdString',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.marketing.subscriptions.v4.links.create({
      channel: 'EMAIL',
      subscriberIdString: 'subscriberIdString',
      businessUnitId: 0,
      language: 'language',
      subscriptionId: 0,
    });
  });
});
