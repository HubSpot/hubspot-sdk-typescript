// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource channelAccounts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversations.customChannels.channelAccounts.create(0, {
      authorized: true,
      inboxId: 'inboxId',
      name: 'name',
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
    const response = await client.conversations.customChannels.channelAccounts.create(0, {
      authorized: true,
      inboxId: 'inboxId',
      name: 'name',
      deliveryIdentifier: { type: 'type', value: 'value' },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.conversations.customChannels.channelAccounts.update(0, { channelId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.conversations.customChannels.channelAccounts.update(0, {
      channelId: 0,
      authorized: true,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.conversations.customChannels.channelAccounts.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.conversations.customChannels.channelAccounts.list(
        0,
        {
          after: 'after',
          archived: true,
          defaultPageLength: 0,
          deliveryIdentifierType: ['string'],
          deliveryIdentifierValue: ['string'],
          limit: 0,
          sort: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.conversations.customChannels.channelAccounts.get(0, { channelId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.conversations.customChannels.channelAccounts.get(0, {
      channelId: 0,
      archived: true,
    });
  });
});
