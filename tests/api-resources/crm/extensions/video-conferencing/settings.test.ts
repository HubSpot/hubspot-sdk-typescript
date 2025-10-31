// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.settings.update(0, {
      createMeetingUrl: 'https://example.com/create-meeting',
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
    const response = await client.crm.extensions.videoConferencing.settings.update(0, {
      createMeetingUrl: 'https://example.com/create-meeting',
      deleteMeetingUrl: 'https://example.com/delete-meeting',
      fetchAccountsUri: 'fetchAccountsUri',
      updateMeetingUrl: 'https://example.com/update-meeting',
      userVerifyUrl: 'https://example.com/user-verify',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.settings.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.settings.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
