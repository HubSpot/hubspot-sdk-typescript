// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calling', () => {
  // Mock server tests are disabled
  test.skip('createChannelConnectionSettings: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.createChannelConnectionSettings(0, {
      isReady: true,
      url: 'url',
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
  test.skip('createChannelConnectionSettings: required and optional params', async () => {
    const response = await client.crm.extensions.calling.createChannelConnectionSettings(0, {
      isReady: true,
      url: 'url',
    });
  });

  // Mock server tests are disabled
  test.skip('createInboundCall: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.createInboundCall({
      createEngagement: true,
      engagementProperties: { foo: 'string' },
      externalCallId: 'externalCallId',
      finalCallStatus: 'BUSY',
      fromNumber: { e164Number: 'e164Number', phoneNumberType: 'FIXED_LINE' },
      potentialRecipientUserIds: [0],
      toNumber: { e164Number: 'e164Number', phoneNumberType: 'FIXED_LINE' },
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
  test.skip('createInboundCall: required and optional params', async () => {
    const response = await client.crm.extensions.calling.createInboundCall({
      createEngagement: true,
      engagementProperties: { foo: 'string' },
      externalCallId: 'externalCallId',
      finalCallStatus: 'BUSY',
      fromNumber: {
        e164Number: 'e164Number',
        phoneNumberType: 'FIXED_LINE',
        extension: 'extension',
      },
      potentialRecipientUserIds: [0],
      toNumber: {
        e164Number: 'e164Number',
        phoneNumberType: 'FIXED_LINE',
        extension: 'extension',
      },
      callStartedTimestamp: '2019-12-27T18:11:19.117Z',
      durationSeconds: 0,
      userId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('createRecordingReady: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.createRecordingReady({ engagementId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createRecordingReady: required and optional params', async () => {
    const response = await client.crm.extensions.calling.createRecordingReady({ engagementId: 0 });
  });

  // Mock server tests are disabled
  test.skip('createRecordingSettings: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.createRecordingSettings(0, {
      urlToRetrieveAuthedRecording: 'urlToRetrieveAuthedRecording',
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
  test.skip('createRecordingSettings: required and optional params', async () => {
    const response = await client.crm.extensions.calling.createRecordingSettings(0, {
      urlToRetrieveAuthedRecording: 'urlToRetrieveAuthedRecording',
    });
  });

  // Mock server tests are disabled
  test.skip('createSettings: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.createSettings(0, {
      height: 0,
      isReady: true,
      name: 'name',
      supportsCustomObjects: true,
      supportsInboundCalling: true,
      url: 'url',
      usesCallingWindow: true,
      usesRemote: true,
      width: 0,
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
  test.skip('createSettings: required and optional params', async () => {
    const response = await client.crm.extensions.calling.createSettings(0, {
      height: 0,
      isReady: true,
      name: 'name',
      supportsCustomObjects: true,
      supportsInboundCalling: true,
      url: 'url',
      usesCallingWindow: true,
      usesRemote: true,
      width: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('deleteChannelConnectionSettings', async () => {
    const responsePromise = client.crm.extensions.calling.deleteChannelConnectionSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteSettings', async () => {
    const responsePromise = client.crm.extensions.calling.deleteSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getChannelConnectionSettings', async () => {
    const responsePromise = client.crm.extensions.calling.getChannelConnectionSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRecordingSettings', async () => {
    const responsePromise = client.crm.extensions.calling.getRecordingSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSettings', async () => {
    const responsePromise = client.crm.extensions.calling.getSettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateChannelConnectionSettings', async () => {
    const responsePromise = client.crm.extensions.calling.updateChannelConnectionSettings(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateRecordingSettings', async () => {
    const responsePromise = client.crm.extensions.calling.updateRecordingSettings(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSettings', async () => {
    const responsePromise = client.crm.extensions.calling.updateSettings(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
