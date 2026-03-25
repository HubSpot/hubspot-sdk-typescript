// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditLogs', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.auditLogs.list();
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
      client.cms.auditLogs.list(
        {
          after: 'after',
          before: 'before',
          eventType: ['string'],
          limit: 0,
          objectId: ['string'],
          objectType: ['string'],
          sort: ['string'],
          userId: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('export: only required params', async () => {
    const responsePromise = client.cms.auditLogs.export({
      email: 'email',
      format: 'CSV',
      portalId: 0,
      recipientUserIds: [0],
      shouldMarkExportFileAsSensitive: true,
      type: 'type',
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
  test.skip('export: required and optional params', async () => {
    const response = await client.cms.auditLogs.export({
      email: 'email',
      format: 'CSV',
      portalId: 0,
      recipientUserIds: [0],
      shouldMarkExportFileAsSensitive: true,
      type: 'type',
      filters: { objectType: ['string'] },
      partition: 0,
      userId: 0,
      userTimeZone: 'userTimeZone',
    });
  });
});
