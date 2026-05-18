// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LandingPages } from '@hubspot/sdk/resources/cms/pages/landing-pages/landing-pages';
import { BaseRevisions } from '@hubspot/sdk/resources/cms/pages/landing-pages/revisions';

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
  resources: [LandingPages],
});

const runTests = (
  client: PartialHubSpot<{ cms: { pages: { landingPages: { revisions: BaseRevisions } } } }>,
) => {
  // Mock server tests are disabled
  test.skip('getLandingPageRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.revisions.getLandingPageRevision('revisionId', {
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
  test.skip('getLandingPageRevision: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.revisions.getLandingPageRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('listLandingPageRevisions', async () => {
    const responsePromise = client.cms.pages.landingPages.revisions.listLandingPageRevisions('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLandingPageRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.pages.landingPages.revisions.listLandingPageRevisions(
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
  test.skip('restoreLandingPageRevision: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.revisions.restoreLandingPageRevision('revisionId', {
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
  test.skip('restoreLandingPageRevision: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.revisions.restoreLandingPageRevision('revisionId', {
      objectId: 'objectId',
    });
  });

  // Mock server tests are disabled
  test.skip('restoreLandingPageRevisionToDraft: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.revisions.restoreLandingPageRevisionToDraft(0, {
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
  test.skip('restoreLandingPageRevisionToDraft: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.revisions.restoreLandingPageRevisionToDraft(0, {
      objectId: 'objectId',
    });
  });
};
describe('resource revisions', () => runTests(client));
describe('resource revisions (tree shakable, base)', () => runTests(partialClient));
describe('resource revisions (tree shakable, subresource)', () => runTests(parentPartialClient));
