// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LandingPages } from '@hubspot/sdk/resources/cms/pages/landing-pages/landing-pages';
import { BaseMultiLanguage } from '@hubspot/sdk/resources/cms/pages/landing-pages/multi-language';

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
  resources: [LandingPages],
});

const runTests = (
  client: PartialHubSpot<{ cms: { pages: { landingPages: { multiLanguage: BaseMultiLanguage } } } }>,
) => {
  // Mock server tests are disabled
  test.skip('attachToLangGroup: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.multiLanguage.attachToLangGroup({
      id: 'id',
      language: 'aa',
      primaryId: 'primaryId',
      primaryLanguage: 'aa',
    });
  });

  // Mock server tests are disabled
  test.skip('createLanguageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.multiLanguage.createLanguageVariation({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createLanguageVariation: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.multiLanguage.createLanguageVariation({
      id: 'id',
      language: 'language',
      primaryLanguage: 'primaryLanguage',
      usePublished: true,
    });
  });

  // Mock server tests are disabled
  test.skip('detachFromLangGroup: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.multiLanguage.detachFromLangGroup({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('setNewLangPrimary: only required params', async () => {
    const responsePromise = client.cms.pages.landingPages.multiLanguage.setNewLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setNewLangPrimary: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.multiLanguage.setNewLangPrimary({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('updateLanguages: required and optional params', async () => {
    const response = await client.cms.pages.landingPages.multiLanguage.updateLanguages({
      languages: { foo: 'aa' },
      primaryId: 'primaryId',
    });
  });
};
describe('resource multiLanguage', () => runTests(client));
describe('resource multiLanguage (tree shakable, base)', () => runTests(partialClient));
describe('resource multiLanguage (tree shakable, subresource)', () => runTests(parentPartialClient));
