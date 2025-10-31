// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.create('channelId', {
      attachments: [{ fileId: 'fileId', type: 'FILE' }],
      channelAccountId: 'channelAccountId',
      integrationThreadId: 'integrationThreadId',
      messageDirection: 'INCOMING',
      recipients: [{ deliveryIdentifier: { type: 'type', value: 'value' } }],
      senders: [{ deliveryIdentifier: { type: 'type', value: 'value' } }],
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.conversations.customChannels.messages.create('channelId', {
      attachments: [{ fileId: 'fileId', type: 'FILE', fileUsageType: 'fileUsageType' }],
      channelAccountId: 'channelAccountId',
      integrationThreadId: 'integrationThreadId',
      messageDirection: 'INCOMING',
      recipients: [{ deliveryIdentifier: { type: 'type', value: 'value' }, name: 'name' }],
      senders: [{ deliveryIdentifier: { type: 'type', value: 'value' }, name: 'name' }],
      text: 'text',
      timestamp: '2019-12-27T18:11:19.117Z',
      inReplyToId: 'inReplyToId',
      integrationIdempotencyId: 'integrationIdempotencyId',
      preResolvedContacts: { contacts: [{ contactPropertiesLeadingToMatch: ['string'], contactVid: 0 }] },
      richText: 'richText',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.update('messageId', {
      channelId: 'channelId',
      statusType: 'SENT',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.conversations.customChannels.messages.update('messageId', {
      channelId: 'channelId',
      statusType: 'SENT',
      errorMessage: 'errorMessage',
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.conversations.customChannels.messages.get('messageId', {
      channelId: 'channelId',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.conversations.customChannels.messages.get('messageId', {
      channelId: 'channelId',
    });
  });
});
