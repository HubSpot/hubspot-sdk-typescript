// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urlMappings', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.urlMappings.create({
      id: 0,
      cdnPurgeEmbargoTime: 0,
      contentGroupId: 0,
      cosObjectType: 'ACCESS_GROUP_MEMBERSHIP',
      created: 0,
      createdById: 0,
      deletedAt: 0,
      destination: 'destination',
      internallyCreated: true,
      isActive: true,
      isMatchFullUrl: true,
      isMatchQueryString: true,
      isOnlyAfterNotFound: true,
      isPattern: true,
      isProtocolAgnostic: true,
      isRegex: true,
      isTrailingSlashOptional: true,
      label: 'label',
      name: 'name',
      note: 'note',
      portalId: 0,
      precedence: 0,
      redirectStyle: 0,
      routePrefix: 'routePrefix',
      updated: 0,
      updatedById: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.urlMappings.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
