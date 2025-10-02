// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK, { toFile } from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.files.v3.files.retrieve('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.retrieve(
        '321669910225',
        { properties: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.files.v3.files.update('321669910225', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.files.v3.files.delete('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('gdprDelete', async () => {
    const responsePromise = client.files.v3.files.gdprDelete('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSignedURL', async () => {
    const responsePromise = client.files.v3.files.getSignedURL('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSignedURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.getSignedURL(
        '321669910225',
        { expirationSeconds: 0, size: 'thumb', upscale: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('replace', async () => {
    const responsePromise = client.files.v3.files.replace('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('replace: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.replace(
        '321669910225',
        {
          charsetHunch: 'charsetHunch',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          options: 'options',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveByPath', async () => {
    const responsePromise = client.files.v3.files.retrieveByPath('path');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByPath: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.retrieveByPath(
        'path',
        { properties: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.files.v3.files.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.search(
        {
          after: 'after',
          allowsAnonymousAccess: true,
          before: 'before',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdAtGte: '2019-12-27T18:11:19.117Z',
          createdAtLte: '2019-12-27T18:11:19.117Z',
          encoding: 'encoding',
          expiresAt: '2019-12-27T18:11:19.117Z',
          expiresAtGte: '2019-12-27T18:11:19.117Z',
          expiresAtLte: '2019-12-27T18:11:19.117Z',
          extension: 'extension',
          fileMd5: 'fileMd5',
          height: 0,
          heightGte: 0,
          heightLte: 0,
          idGte: 0,
          idLte: 0,
          ids: [0],
          isUsableInContent: true,
          limit: 0,
          name: 'name',
          parentFolderIds: [0],
          path: 'path',
          properties: ['string'],
          size: 0,
          sizeGte: 0,
          sizeLte: 0,
          sort: ['string'],
          type: 'type',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedAtGte: '2019-12-27T18:11:19.117Z',
          updatedAtLte: '2019-12-27T18:11:19.117Z',
          url: 'url',
          width: 0,
          widthGte: 0,
          widthLte: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('upload', async () => {
    const responsePromise = client.files.v3.files.upload();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.v3.files.upload(
        {
          charsetHunch: 'charsetHunch',
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          fileName: 'fileName',
          folderId: 'folderId',
          folderPath: 'folderPath',
          options: 'options',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });
});
