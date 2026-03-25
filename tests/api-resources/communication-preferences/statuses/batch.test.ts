// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('getUnsubscribeAllStatuses: only required params', async () => {
    const responsePromise = client.communicationPreferences.statuses.batch.getUnsubscribeAllStatuses({
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

  // Mock server tests are disabled
  test.skip('getUnsubscribeAllStatuses: required and optional params', async () => {
    const response = await client.communicationPreferences.statuses.batch.getUnsubscribeAllStatuses({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.communicationPreferences.statuses.batch.read({
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

  // Mock server tests are disabled
  test.skip('read: required and optional params', async () => {
    const response = await client.communicationPreferences.statuses.batch.read({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('unsubscribeAll: only required params', async () => {
    const responsePromise = client.communicationPreferences.statuses.batch.unsubscribeAll({
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

  // Mock server tests are disabled
  test.skip('unsubscribeAll: required and optional params', async () => {
    const response = await client.communicationPreferences.statuses.batch.unsubscribeAll({
      channel: 'EMAIL',
      inputs: ['string'],
      businessUnitId: 0,
      verbose: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateStatuses: only required params', async () => {
    const responsePromise = client.communicationPreferences.statuses.batch.updateStatuses({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'NOT_SPECIFIED',
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

  // Mock server tests are disabled
  test.skip('updateStatuses: required and optional params', async () => {
    const response = await client.communicationPreferences.statuses.batch.updateStatuses({
      inputs: [
        {
          channel: 'EMAIL',
          statusState: 'NOT_SPECIFIED',
          subscriberIdString: 'subscriberIdString',
          subscriptionId: 0,
          legalBasis: 'CONSENT_WITH_NOTICE',
          legalBasisExplanation: 'legalBasisExplanation',
        },
      ],
    });
  });
});
