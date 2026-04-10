// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.blogs.tags.create({
      id: 'id',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      language: 'aa',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      updated: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.blogs.tags.update('objectId', {
      id: 'id',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      language: 'aa',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      updated: '2019-12-27T18:11:19.117Z',
      archived: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.list(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.blogs.tags.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.delete('objectId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('attachToLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.tags.attachToLangGroup({
      id: 'id',
      language: 'aa',
      primaryId: 'primaryId',
      primaryLanguage: 'aa',
    });
  });

  // Mock server tests are disabled
  test.skip('createLangVariation: required and optional params', async () => {
    const response = await client.cms.blogs.tags.createLangVariation({
      id: 'id',
      name: 'name',
      language: 'language',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Mock server tests are disabled
  test.skip('detachFromLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.tags.detachFromLangGroup({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listAuthorsCursor: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listAuthorsCursor(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listAuthorsCursorByQuery: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listAuthorsCursorByQuery(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listCursor: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listCursor(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listCursorByQuery: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listCursorByQuery(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listPostsCursor: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listPostsCursor(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listPostsCursorByQuery: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.tags.listPostsCursorByQuery(
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
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('setLangPrimary: only required params', async () => {
    const responsePromise = client.cms.blogs.tags.setLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setLangPrimary: required and optional params', async () => {
    const response = await client.cms.blogs.tags.setLangPrimary({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('updateLangs: required and optional params', async () => {
    const response = await client.cms.blogs.tags.updateLangs({
      languages: { foo: 'aa' },
      primaryId: 'primaryId',
    });
  });
});
