// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChannelAccounts } from 'hubspot-sdk/resources/conversations/custom-channels/channel-accounts';
import { CustomChannels } from 'hubspot-sdk/resources/conversations/custom-channels/custom-channels';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseChannelAccounts],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CustomChannels],
});

const runTests = (
  client: PartialHubSpot<{ conversations: { customChannels: { channelAccounts: BaseChannelAccounts } } }>,
) => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.conversations.customChannels.channelAccounts.create(0, {
      authorized: true,
      inboxId: 'inboxId',
      name: 'name',
      deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' },
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.conversations.customChannels.channelAccounts.update(0, {
      channelId: 0,
      authorized: true,
      name: 'name',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.conversations.customChannels.channelAccounts.list(
        0,
        {
          after: 'after',
          archived: true,
          defaultPageLength: 0,
          deliveryIdentifierType: ['HS_EMAIL_ADDRESS'],
          deliveryIdentifierValue: ['string'],
          limit: 0,
          sort: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateStagingToken: only required params', async () => {
    const responsePromise = client.conversations.customChannels.channelAccounts.updateStagingToken(
      'accountToken',
      { channelId: 0 },
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
  test.skip('updateStagingToken: required and optional params', async () => {
    const response = await client.conversations.customChannels.channelAccounts.updateStagingToken(
      'accountToken',
      {
        channelId: 0,
        accountName: 'accountName',
        deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' },
      },
    );
  });
};
describe('resource channelAccounts', () => runTests(client));
describe('resource channelAccounts (tree shakable, base)', () => runTests(partialClient));
describe('resource channelAccounts (tree shakable, subresource)', () => runTests(parentPartialClient));
