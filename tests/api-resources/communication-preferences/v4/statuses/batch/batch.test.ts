// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.communicationPreferences.v4.statuses.batch.retrieve({
      channel: 'EMAIL',
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

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.communicationPreferences.v4.statuses.batch.retrieve({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.communicationPreferences.v4.statuses.batch.update({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'SUBSCRIBED',
          subscriberIdString: 'subscriberIdString',
          subscriptionId: 0,
        },
      ],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.communicationPreferences.v4.statuses.batch.update({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'SUBSCRIBED',
          subscriberIdString: 'subscriberIdString',
          subscriptionId: 0,
          legalBasis: 'LEGITIMATE_INTEREST_PQL',
          legalBasisExplanation: 'legalBasisExplanation',
        },
      ],
    });
  });
});
