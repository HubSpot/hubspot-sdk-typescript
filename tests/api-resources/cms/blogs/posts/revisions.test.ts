// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Posts } from 'hubspot-sdk/resources/cms/blogs/posts/posts';
import { BaseRevisions } from 'hubspot-sdk/resources/cms/blogs/posts/revisions';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRevisions],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Posts],
});

const runTests = (client: PartialHubSpot<{ cms: { blogs: { posts: { revisions: BaseRevisions } } } }>) => {
  // Mock server tests are disabled
  test.skip('getPreviousVersion: required and optional params', async () => {
    const response = await client.cms.blogs.posts.revisions.getPreviousVersion('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('getPreviousVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.blogs.posts.revisions.getPreviousVersions(
        'objectId',
        {
          after: 'after',
          before: 'before',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('restorePreviousVersion: required and optional params', async () => {
    const response = await client.cms.blogs.posts.revisions.restorePreviousVersion('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('restorePreviousVersionToDraft: required and optional params', async () => {
    const response = await client.cms.blogs.posts.revisions.restorePreviousVersionToDraft(0, {
      objectId: 'objectId',
    });
  });
};
describe('resource revisions', () => runTests(client));
describe('resource revisions (tree shakable, base)', () => runTests(partialClient));
describe('resource revisions (tree shakable, subresource)', () => runTests(parentPartialClient));
