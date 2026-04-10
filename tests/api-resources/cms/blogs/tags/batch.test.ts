// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cms.blogs.tags.batch.delete({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.cms.blogs.tags.batch.delete({ inputs: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.blogs.tags.batch.createBatch({
      inputs: [
        {
          id: 'id',
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          language: 'aa',
          name: 'name',
          slug: 'slug',
          translatedFromId: 0,
          updated: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.cms.blogs.tags.batch.getBatch({ inputs: ['string'], archived: true });
  });

  // Mock server tests are disabled
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.cms.blogs.tags.batch.updateBatch({ inputs: [{}], archived: true });
  });
});
