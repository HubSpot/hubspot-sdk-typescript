// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CustomChannels } from 'hubspot-sdk/resources/conversations/custom-channels/custom-channels';
import { BaseMessages } from 'hubspot-sdk/resources/conversations/custom-channels/messages';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMessages],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CustomChannels],
});

const runTests = (
  client: PartialHubSpot<{ conversations: { customChannels: { messages: BaseMessages } } }>,
) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.create(0, {
      attachments: [{ fileId: 'fileId', type: 'FILE' }],
      channelAccountId: 'channelAccountId',
      messageDirection: 'INCOMING',
      recipients: [{ deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' } }],
      senders: [{ deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' } }],
      text: 'text',
      timestamp: '2019-12-27T18:11:19.117Z',
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
    const response = await client.conversations.customChannels.messages.create(0, {
      attachments: [
        {
          fileId: 'fileId',
          type: 'FILE',
          fileUsageType: 'AUDIO',
        },
      ],
      channelAccountId: 'channelAccountId',
      messageDirection: 'INCOMING',
      recipients: [
        {
          deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' },
          name: 'name',
          senderActorId: 'senderActorId',
        },
      ],
      senders: [
        {
          deliveryIdentifier: { type: 'CHANNEL_SPECIFIC_OPAQUE_ID', value: 'value' },
          name: 'name',
          senderActorId: 'senderActorId',
        },
      ],
      text: 'text',
      timestamp: '2019-12-27T18:11:19.117Z',
      associateWithContactId: 0,
      inReplyToId: 'inReplyToId',
      integrationIdempotencyId: 'integrationIdempotencyId',
      integrationThreadId: 'integrationThreadId',
      preResolvedContacts: { contacts: [{ contactPropertiesLeadingToMatch: ['address'], contactVid: 0 }] },
      richText: 'richText',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.update('messageId', {
      channelId: 0,
      statusType: 'FAILED',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.conversations.customChannels.messages.update('messageId', {
      channelId: 0,
      statusType: 'FAILED',
      errorMessage: 'errorMessage',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.get('messageId', { channelId: 0 });
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
    const response = await client.conversations.customChannels.messages.get('messageId', { channelId: 0 });
  });
};
describe('resource messages', () => runTests(client));
describe('resource messages (tree shakable, base)', () => runTests(partialClient));
describe('resource messages (tree shakable, subresource)', () => runTests(parentPartialClient));
