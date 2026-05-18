// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAbTest } from '@hubspot/sdk/resources/cms/pages/landing-pages/ab-test';
import { LandingPages } from '@hubspot/sdk/resources/cms/pages/landing-pages/landing-pages';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAbTest],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LandingPages],
});

const runTests = (client: PartialHubSpot<{ cms: { pages: { landingPages: { abTest: BaseAbTest } } } }>) => {
  // Mock server tests are disabled
  test.skip('createLandingPageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.abTest.createLandingPageVariation({
      contentId: 'contentId',
      variationName: 'variationName',
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
  test.skip('createLandingPageVariation: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.abTest.createLandingPageVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Mock server tests are disabled
  test.skip('endLandingPageTest: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.abTest.endLandingPageTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
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
  test.skip('endLandingPageTest: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.abTest.endLandingPageTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
    });
  });

  // Mock server tests are disabled
  test.skip('rerunLandingPageTest: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.abTest.rerunLandingPageTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
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
  test.skip('rerunLandingPageTest: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.abTest.rerunLandingPageTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });
};
describe('resource abTest', () => runTests(client));
describe('resource abTest (tree shakable, base)', () => runTests(partialClient));
describe('resource abTest (tree shakable, subresource)', () => runTests(parentPartialClient));
