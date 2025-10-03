// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-123123',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recordingSettings', () => {
  // Prism tests are disabled
  test.skip('getURLFormat', async () => {
    const responsePromise = client.crm.extensions.calling.recordingSettings.getURLFormat(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('markAsReady: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.recordingSettings.markAsReady({ engagementId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('markAsReady: required and optional params', async () => {
    const response = await client.crm.extensions.calling.recordingSettings.markAsReady({ engagementId: 0 });
  });

  // Prism tests are disabled
  test.skip('registerURLFormat: only required params', async () => {
    const responsePromise = client.crm.extensions.calling.recordingSettings.registerURLFormat(0, {
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

  // Prism tests are disabled
  test.skip('registerURLFormat: required and optional params', async () => {
    const response = await client.crm.extensions.calling.recordingSettings.registerURLFormat(0, {
      urlToRetrieveAuthedRecording: 'urlToRetrieveAuthedRecording',
    });
  });

  // Prism tests are disabled
  test.skip('updateURLFormat', async () => {
    const responsePromise = client.crm.extensions.calling.recordingSettings.updateURLFormat(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
