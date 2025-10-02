// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multiLanguage', () => {
  // Prism tests are disabled
  test.skip('attachToLangGroup: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.multiLanguage.attachToLangGroup({
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
    const response = await client.cms.v3.blogs.tags.multiLanguage.attachToLangGroup({
      id: 'id',
      language: 'language',
      primaryId: 'primaryId',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('createLanguageVariation: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.multiLanguage.createLanguageVariation({
      id: 'id',
      name: 'name',
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
    const response = await client.cms.v3.blogs.tags.multiLanguage.createLanguageVariation({
      id: 'id',
      name: 'name',
      language: 'language',
      primaryLanguage: 'primaryLanguage',
    });
  });

  // Prism tests are disabled
  test.skip('detachFromLangGroup: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.multiLanguage.detachFromLangGroup({ id: 'id' });
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
    const response = await client.cms.v3.blogs.tags.multiLanguage.detachFromLangGroup({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('updateLanguages: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.multiLanguage.updateLanguages({
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
    const response = await client.cms.v3.blogs.tags.multiLanguage.updateLanguages({
      languages: { foo: 'string' },
      primaryId: 'primaryId',
    });
  });

  // Prism tests are disabled
  test.skip('updateSetNewLangPrimary: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.multiLanguage.updateSetNewLangPrimary({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateSetNewLangPrimary: required and optional params', async () => {
    const response = await client.cms.v3.blogs.tags.multiLanguage.updateSetNewLangPrimary({ id: 'id' });
  });
});
