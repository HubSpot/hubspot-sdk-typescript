// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v3', () => {
  // Prism tests are disabled
  test.skip('retrieveDefinitions', async () => {
    const responsePromise = client.communicationPreferences.v3.retrieveDefinitions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.communicationPreferences.v3.subscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
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
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.communicationPreferences.v3.subscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'LEGITIMATE_INTEREST_PQL',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });

  // Prism tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.communicationPreferences.v3.unsubscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
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
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.communicationPreferences.v3.unsubscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'LEGITIMATE_INTEREST_PQL',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });
});
