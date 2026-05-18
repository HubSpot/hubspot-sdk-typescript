// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRevisions } from '@hubspot/sdk/resources/cms/pages/site-pages/revisions';
import { SitePages } from '@hubspot/sdk/resources/cms/pages/site-pages/site-pages';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

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
  resources: [SitePages],
});

const runTests = (
  client: PartialHubSpot<{ cms: { pages: { sitePages: { revisions: BaseRevisions } } } }>,
) => {
  // Mock server tests are disabled
  test.skip('getSitePageRevision: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.revisions.getSitePageRevision('revisionId', {
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
  test.skip('getSitePageRevision: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.revisions.getSitePageRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('listSitePageRevisions', async () => {
    const responsePromise = client.cms.pages.sitePages.revisions.listSitePageRevisions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSitePageRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.sitePages.revisions.listSitePageRevisions(
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
  test.skip('restoreSitePageRevision: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.revisions.restoreSitePageRevision('revisionId', {
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
  test.skip('restoreSitePageRevision: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.revisions.restoreSitePageRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('restoreSitePageRevisionToDraft: only required params', async () => {
    const responsePromise = client.cms.pages.sitePages.revisions.restoreSitePageRevisionToDraft(0, {
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
  test.skip('restoreSitePageRevisionToDraft: required and optional params', async () => {
    const response = await client.cms.pages.sitePages.revisions.restoreSitePageRevisionToDraft(0, {
      objectId: 'objectId',
    });
  });
};
describe('resource revisions', () => runTests(client));
describe('resource revisions (tree shakable, base)', () => runTests(partialClient));
describe('resource revisions (tree shakable, subresource)', () => runTests(parentPartialClient));
