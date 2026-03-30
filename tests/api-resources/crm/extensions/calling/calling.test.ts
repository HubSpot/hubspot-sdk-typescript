// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calling', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.create(0, {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.extensions.calling.create(0, {
      urlToRetrieveAuthedRecording: 'urlToRetrieveAuthedRecording',
    });
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.crm.extensions.calling.update(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.extensions.calling.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
  test.skip('get', async () => {
    const responsePromise = client.crm.extensions.calling.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('markReady: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.markReady({ engagementId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('markReady: required and optional params', async () => {
    const response = await client.crm.extensions.calling.markReady({ engagementId: 0 });
  });
});
