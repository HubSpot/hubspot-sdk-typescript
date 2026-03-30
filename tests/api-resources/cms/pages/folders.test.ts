// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource folders', () => {
  // Mock server tests are disabled
  test.skip('createFolder: only required params', async () => {
    const responsePromise = client.cms.pages.folders.createFolder({
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
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
  test.skip('createFolder: required and optional params', async () => {
    const response = await client.cms.pages.folders.createFolder({
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteFolder', async () => {
    const responsePromise = client.cms.pages.folders.deleteFolder('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteFolder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.folders.deleteFolder(
        'objectId',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getFolder', async () => {
    const responsePromise = client.cms.pages.folders.getFolder('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getFolder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.folders.getFolder(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getFolderRevision: only required params', async () => {
    const responsePromise = client.cms.pages.folders.getFolderRevision('revisionId', {
      objectId: 'objectId',
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
  test.skip('getFolderRevision: required and optional params', async () => {
    const response = await client.cms.pages.folders.getFolderRevision('revisionId', { objectId: 'objectId' });
  });

  // Mock server tests are disabled
  test.skip('getFoldersBatch: only required params', async () => {
    const responsePromise = client.cms.pages.folders.getFoldersBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getFoldersBatch: required and optional params', async () => {
    const response = await client.cms.pages.folders.getFoldersBatch({ inputs: ['string'], archived: true });
  });

  // Mock server tests are disabled
  test.skip('listFolderRevisions', async () => {
    const responsePromise = client.cms.pages.folders.listFolderRevisions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listFolderRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.folders.listFolderRevisions(
        'objectId',
        {
          after: 'after',
          before: 'before',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listFolders', async () => {
    const responsePromise = client.cms.pages.folders.listFolders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listFolders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.folders.listFolders(
        {
          after: 'after',
          archived: true,
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          limit: 0,
          property: 'property',
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('restoreFolderRevision: only required params', async () => {
    const responsePromise = client.cms.pages.folders.restoreFolderRevision('revisionId', {
      objectId: 'objectId',
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
  test.skip('restoreFolderRevision: required and optional params', async () => {
    const response = await client.cms.pages.folders.restoreFolderRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('updateFolder: only required params', async () => {
    const responsePromise = client.cms.pages.folders.updateFolder('objectId', {
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
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
  test.skip('updateFolder: required and optional params', async () => {
    const response = await client.cms.pages.folders.updateFolder('objectId', {
      id: 'id',
      category: 0,
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      name: 'name',
      parentFolderId: 0,
      updated: '2019-12-27T18:11:19.117Z',
      archived: true,
    });
  });
});
