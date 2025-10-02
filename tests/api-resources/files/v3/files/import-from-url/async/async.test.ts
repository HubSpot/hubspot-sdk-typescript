// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource async', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.files.v3.files.importFromURL.async.create({
      access: 'PUBLIC_INDEXABLE',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.files.v3.files.importFromURL.async.create({
      access: 'PUBLIC_INDEXABLE',
      url: 'url',
      duplicateValidationScope: 'ENTIRE_PORTAL',
      duplicateValidationStrategy: 'NONE',
      expiresAt: '2019-12-27T18:11:19.117Z',
      folderId: 'folderId',
      folderPath: 'folderPath',
      name: 'name',
      overwrite: true,
      ttl: 'ttl',
    });
  });
});
