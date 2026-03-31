// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aBTests', () => {
  // Mock server tests are disabled
  test.skip('createLandingPageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.createLandingPageVariation({
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
    const response = await client.cms.pages.aBTests.createLandingPageVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Mock server tests are disabled
  test.skip('createSitePageVariation: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.createSitePageVariation({
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
  test.skip('createSitePageVariation: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.createSitePageVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Mock server tests are disabled
  test.skip('endLandingPageTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.endLandingPageTest({
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
    const response = await client.cms.pages.aBTests.endLandingPageTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
    });
  });

  // Mock server tests are disabled
  test.skip('endSitePageTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.endSitePageTest({
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
  test.skip('endSitePageTest: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.endSitePageTest({
      abTestId: 'abTestId',
      winnerId: 'winnerId',
    });
  });

  // Mock server tests are disabled
  test.skip('rerunLandingPageTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.rerunLandingPageTest({
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
    const response = await client.cms.pages.aBTests.rerunLandingPageTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });

  // Mock server tests are disabled
  test.skip('rerunSitePageTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.rerunSitePageTest({
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
  test.skip('rerunSitePageTest: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.rerunSitePageTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });
});
