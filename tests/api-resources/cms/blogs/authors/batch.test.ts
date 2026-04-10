// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Authors } from 'hubspot-sdk/resources/cms/blogs/authors/authors';
import { BaseBatch } from 'hubspot-sdk/resources/cms/blogs/authors/batch';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBatch],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Authors],
});

const runTests = (client: PartialHubSpot<{ cms: { blogs: { authors: { batch: BaseBatch } } } }>) => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.blogs.authors.batch.create({
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
          language: 'aa',
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

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.blogs.authors.batch.update({ inputs: [{}], archived: true });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cms.blogs.authors.batch.delete({ inputs: ['string'] });
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
    const response = await client.cms.blogs.authors.batch.delete({ inputs: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.cms.blogs.authors.batch.get({ inputs: ['string'], archived: true });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
