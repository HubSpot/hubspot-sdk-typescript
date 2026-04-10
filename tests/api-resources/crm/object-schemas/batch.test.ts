// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.batch.get({
      includeAssociationDefinitions: true,
      includeAuditMetadata: true,
      includePropertyDefinitions: true,
      inputs: ['string'],
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.objectSchemas.batch.get({
      includeAssociationDefinitions: true,
      includeAuditMetadata: true,
      includePropertyDefinitions: true,
      inputs: ['string'],
    });
  });
});
