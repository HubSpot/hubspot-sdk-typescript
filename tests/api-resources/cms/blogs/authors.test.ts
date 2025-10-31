// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authors', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.create({
      id: 'id',
      avatar: 'avatar',
      bio: 'bio',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      displayName: 'displayName',
      email: 'email',
      facebook: 'facebook',
      fullName: 'fullName',
      language: 'af',
      linkedin: 'linkedin',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      twitter: 'twitter',
      updated: '2019-12-27T18:11:19.117Z',
      website: 'website',
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
    const response = await client.cms.blogs.authors.create({
      id: 'id',
      avatar: 'avatar',
      bio: 'bio',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      displayName: 'displayName',
      email: 'email',
      facebook: 'facebook',
      fullName: 'fullName',
      language: 'af',
      linkedin: 'linkedin',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      twitter: 'twitter',
      updated: '2019-12-27T18:11:19.117Z',
      website: 'website',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.update('objectId', {
      id: 'id',
      avatar: 'avatar',
      bio: 'bio',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      displayName: 'displayName',
      email: 'email',
      facebook: 'facebook',
      fullName: 'fullName',
      language: 'af',
      linkedin: 'linkedin',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      twitter: 'twitter',
      updated: '2019-12-27T18:11:19.117Z',
      website: 'website',
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
    const response = await client.cms.blogs.authors.update('objectId', {
      id: 'id',
      avatar: 'avatar',
      bio: 'bio',
      created: '2019-12-27T18:11:19.117Z',
      deletedAt: '2019-12-27T18:11:19.117Z',
      displayName: 'displayName',
      email: 'email',
      facebook: 'facebook',
      fullName: 'fullName',
      language: 'af',
      linkedin: 'linkedin',
      name: 'name',
      slug: 'slug',
      translatedFromId: 0,
      twitter: 'twitter',
      updated: '2019-12-27T18:11:19.117Z',
      website: 'website',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.blogs.authors.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.authors.list(
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

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.blogs.authors.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.authors.delete('objectId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attachToLangGroup: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
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
  test.skip('attachToLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.authors.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.createBatch({
      inputs: [
        {
          id: 'id',
          avatar: 'avatar',
          bio: 'bio',
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          displayName: 'displayName',
          email: 'email',
          facebook: 'facebook',
          fullName: 'fullName',
          language: 'af',
          linkedin: 'linkedin',
          name: 'name',
          slug: 'slug',
          translatedFromId: 0,
          twitter: 'twitter',
          updated: '2019-12-27T18:11:19.117Z',
          website: 'website',
        },
      ],
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.blogs.authors.createBatch({
      inputs: [
        {
          id: 'id',
          avatar: 'avatar',
          bio: 'bio',
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          displayName: 'displayName',
          email: 'email',
          facebook: 'facebook',
          fullName: 'fullName',
          language: 'af',
          linkedin: 'linkedin',
          name: 'name',
          slug: 'slug',
          translatedFromId: 0,
          twitter: 'twitter',
          updated: '2019-12-27T18:11:19.117Z',
          website: 'website',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('createLanguageVariation: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.createLanguageVariation({
      id: 'id',
      blogAuthor: {
        id: 'id',
        avatar: 'avatar',
        bio: 'bio',
        created: '2019-12-27T18:11:19.117Z',
        deletedAt: '2019-12-27T18:11:19.117Z',
        displayName: 'displayName',
        email: 'email',
        facebook: 'facebook',
        fullName: 'fullName',
        language: 'af',
        linkedin: 'linkedin',
        name: 'name',
        slug: 'slug',
        translatedFromId: 0,
        twitter: 'twitter',
        updated: '2019-12-27T18:11:19.117Z',
        website: 'website',
      },
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
  test.skip('createLanguageVariation: required and optional params', async () => {
    const response = await client.cms.blogs.authors.createLanguageVariation({
      id: 'id',
      blogAuthor: {
        id: 'id',
        avatar: 'avatar',
        bio: 'bio',
        created: '2019-12-27T18:11:19.117Z',
        deletedAt: '2019-12-27T18:11:19.117Z',
        displayName: 'displayName',
        email: 'email',
        facebook: 'facebook',
        fullName: 'fullName',
        language: 'af',
        linkedin: 'linkedin',
        name: 'name',
        slug: 'slug',
        translatedFromId: 0,
        twitter: 'twitter',
        updated: '2019-12-27T18:11:19.117Z',
        website: 'website',
      },
      language: 'language',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('deleteBatch: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.deleteBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.cms.blogs.authors.deleteBatch({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.detachFromLangGroup({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.authors.detachFromLangGroup({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.blogs.authors.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.authors.get(
        'objectId',
        { archived: true, property: 'property' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.getBatch({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.cms.blogs.authors.getBatch({ inputs: ['string'], archived: true });
  });

  // Prism tests are disabled
  test.skip('setNewLangPrimary: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.setNewLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setNewLangPrimary: required and optional params', async () => {
    const response = await client.cms.blogs.authors.setNewLangPrimary({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.updateBatch({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.cms.blogs.authors.updateBatch({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('updateLanguages: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.updateLanguages({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
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
  test.skip('updateLanguages: required and optional params', async () => {
    const response = await client.cms.blogs.authors.updateLanguages({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
  });
});
