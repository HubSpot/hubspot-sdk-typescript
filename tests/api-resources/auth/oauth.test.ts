// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Mock server tests are disabled
  test.skip('createToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.oauth.createToken(
        {
          client_id: 'client_id',
          client_secret: 'client_secret',
          code: 'code',
          code_verifier: 'code_verifier',
          grant_type: 'authorization_code',
          redirect_uri: 'redirect_uri',
          refresh_token: 'refresh_token',
          scope: 'scope',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('introspectToken', async () => {
    const responsePromise = client.auth.oauth.introspectToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('introspectToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.oauth.introspectToken(
        {
          token: 'token',
          client_id: 'client_id',
          client_secret: 'client_secret',
          token_type_hint: 'token_type_hint',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('revokeToken: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.oauth.revokeToken(
        {
          token: 'token',
          client_id: 'client_id',
          client_secret: 'client_secret',
          token_type_hint: 'token_type_hint',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});
