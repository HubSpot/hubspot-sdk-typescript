// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot, { toFile } from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.files.files.create({ name: 'name' });
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
    const response = await client.files.files.create({
      name: 'name',
      parentFolderId: 'parentFolderId',
      parentPath: 'parentPath',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.files.files.update('321669910225', { clearExpires: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.files.files.update('321669910225', {
      clearExpires: true,
      access: 'HIDDEN_INDEXABLE',
      expiresAt: '2019-12-27T18:11:19.117Z',
      isUsableInContent: true,
      name: 'name',
      parentFolderId: 'parentFolderId',
      parentFolderPath: 'parentFolderPath',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.files.files.delete('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('gdprDelete', async () => {
    const responsePromise = client.files.files.gdprDelete('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.files.files.get('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.get(
        '321669910225',
        { properties: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getByPath', async () => {
    const responsePromise = client.files.files.getByPath('path');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByPath: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.getByPath('path', { properties: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getImportTaskStatus', async () => {
    const responsePromise = client.files.files.getImportTaskStatus('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSignedURL', async () => {
    const responsePromise = client.files.files.getSignedURL('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSignedURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.getSignedURL(
        '321669910225',
        {
          expirationSeconds: 0,
          size: 'icon',
          upscale: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('importFromURLAsync: only required params', async () => {
    const responsePromise = client.files.files.importFromURLAsync({
      access: 'HIDDEN_INDEXABLE',
      duplicateValidationScope: 'ENTIRE_PORTAL',
      duplicateValidationStrategy: 'NONE',
      overwrite: true,
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
  test.skip('importFromURLAsync: required and optional params', async () => {
    const response = await client.files.files.importFromURLAsync({
      access: 'HIDDEN_INDEXABLE',
      duplicateValidationScope: 'ENTIRE_PORTAL',
      duplicateValidationStrategy: 'NONE',
      overwrite: true,
      expiresAt: '2019-12-27T18:11:19.117Z',
      folderId: 'folderId',
      folderPath: 'folderPath',
      name: 'name',
      ttl: 'ttl',
      url: 'url',
    });
  });

  // Mock server tests are disabled
  test.skip('replace', async () => {
    const responsePromise = client.files.files.replace('321669910225');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replace: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.replace(
        '321669910225',
        {
          charsetHunch: 'charsetHunch',
          file: await toFile(Buffer.from('Example data'), 'README.md'),
          options: 'options',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.files.files.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.search(
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
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upload', async () => {
    const responsePromise = client.files.files.upload();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.files.upload(
        {
          charsetHunch: 'charsetHunch',
          file: await toFile(Buffer.from('Example data'), 'README.md'),
          fileName: 'fileName',
          folderId: 'folderId',
          folderPath: 'folderPath',
          options: 'options',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});
