// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aBTests', () => {
  // Mock server tests are disabled
  test.skip('createAbTestVariation: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.createAbTestVariation({
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
  test.skip('createAbTestVariation: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.createAbTestVariation({
      contentId: 'contentId',
      variationName: 'variationName',
    });
  });

  // Mock server tests are disabled
  test.skip('endAbTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.endAbTest({
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
  test.skip('endAbTest: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.endAbTest({ abTestId: 'abTestId', winnerId: 'winnerId' });
  });

  // Mock server tests are disabled
  test.skip('rerunAbTest: only required params', async () => {
    const responsePromise = client.cms.pages.aBTests.rerunAbTest({
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
  test.skip('rerunAbTest: required and optional params', async () => {
    const response = await client.cms.pages.aBTests.rerunAbTest({
      abTestId: 'abTestId',
      variationId: 'variationId',
    });
  });
});
