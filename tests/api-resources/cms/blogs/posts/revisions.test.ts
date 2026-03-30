// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource revisions', () => {
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
    ).rejects.toThrow(Hubspot.NotFoundError);
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
});
