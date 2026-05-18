// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMultiLanguage } from '@hubspot/sdk/resources/cms/blogs/posts/multi-language';
import { Posts } from '@hubspot/sdk/resources/cms/blogs/posts/posts';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMultiLanguage],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posts],
});

const runTests = (
  client: PartialHubSpot<{ cms: { blogs: { posts: { multiLanguage: BaseMultiLanguage } } } }>,
) => {
  // Mock server tests are disabled
  test.skip('attachToLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.posts.multiLanguage.attachToLangGroup({
      id: 'id',
      language: 'aa',
      primaryId: 'primaryId',
      primaryLanguage: 'aa',
    });
  });

  // Mock server tests are disabled
  test.skip('createLangVariation: required and optional params', async () => {
    const response = await client.cms.blogs.posts.multiLanguage.createLangVariation({
      id: 'id',
      language: 'language',
      usePublished: true,
    });
  });

  // Mock server tests are disabled
  test.skip('detachFromLangGroup: required and optional params', async () => {
    const response = await client.cms.blogs.posts.multiLanguage.detachFromLangGroup({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('setLangPrimary: only required params', async () => {
    const responsePromise = client.cms.blogs.posts.multiLanguage.setLangPrimary({ id: 'id' });
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
    const response = await client.cms.blogs.posts.multiLanguage.setLangPrimary({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('updateLangs: required and optional params', async () => {
    const response = await client.cms.blogs.posts.multiLanguage.updateLangs({
      languages: { foo: 'aa' },
      primaryId: 'primaryId',
    });
  });
};
describe('resource multiLanguage', () => runTests(client));
describe('resource multiLanguage (tree shakable, base)', () => runTests(partialClient));
describe('resource multiLanguage (tree shakable, subresource)', () => runTests(parentPartialClient));
