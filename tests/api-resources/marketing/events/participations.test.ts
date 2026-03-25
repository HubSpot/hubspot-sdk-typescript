// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource participations', () => {
  // Mock server tests are disabled
  test.skip('getByExternalAccountAndEventID: only required params', async () => {
    const responsePromise = client.marketing.events.participations.getByExternalAccountAndEventID(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
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
  test.skip('getByExternalAccountAndEventID: required and optional params', async () => {
    const response = await client.marketing.events.participations.getByExternalAccountAndEventID(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
    );
  });

  // Mock server tests are disabled
  test.skip('getByID', async () => {
    const responsePromise = client.marketing.events.participations.getByID(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBreakdownByContact', async () => {
    const responsePromise =
      client.marketing.events.participations.listBreakdownByContact('contactIdentifier');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBreakdownByContact: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.events.participations.listBreakdownByContact(
        'contactIdentifier',
        {
          after: 'after',
          limit: 0,
          state: 'state',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listBreakdownByExternalAccountAndEventID: only required params', async () => {
    const responsePromise = client.marketing.events.participations.listBreakdownByExternalAccountAndEventID(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
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
  test.skip('listBreakdownByExternalAccountAndEventID: required and optional params', async () => {
    const response = await client.marketing.events.participations.listBreakdownByExternalAccountAndEventID(
      'externalEventId',
      {
        externalAccountId: 'externalAccountId',
        after: 'after',
        contactIdentifier: 'contactIdentifier',
        limit: 0,
        state: 'state',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('listBreakdownByID', async () => {
    const responsePromise = client.marketing.events.participations.listBreakdownByID(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBreakdownByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.events.participations.listBreakdownByID(
        0,
        {
          after: 'after',
          contactIdentifier: 'contactIdentifier',
          limit: 0,
          state: 'state',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});
