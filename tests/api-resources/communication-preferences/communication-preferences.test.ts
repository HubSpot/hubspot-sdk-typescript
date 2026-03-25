// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource communicationPreferences', () => {
  // Mock server tests are disabled
  test.skip('generateLinks: only required params', async () => {
    const responsePromise = client.communicationPreferences.generateLinks({
      channel: 'EMAIL',
      subscriberIdString: 'subscriberIdString',
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
  test.skip('generateLinks: required and optional params', async () => {
    const response = await client.communicationPreferences.generateLinks({
      channel: 'EMAIL',
      subscriberIdString: 'subscriberIdString',
      businessUnitId: 0,
      language: 'language',
      subscriptionId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getStatusByEmail', async () => {
    const responsePromise = client.communicationPreferences.getStatusByEmail('emailAddress');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStatuses: only required params', async () => {
    const responsePromise = client.communicationPreferences.getStatuses('subscriberIdString', {
      channel: 'EMAIL',
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
  test.skip('getStatuses: required and optional params', async () => {
    const response = await client.communicationPreferences.getStatuses('subscriberIdString', {
      channel: 'EMAIL',
      businessUnitId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getUnsubscribeAllStatus: only required params', async () => {
    const responsePromise = client.communicationPreferences.getUnsubscribeAllStatus('subscriberIdString', {
      channel: 'EMAIL',
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
  test.skip('getUnsubscribeAllStatus: required and optional params', async () => {
    const response = await client.communicationPreferences.getUnsubscribeAllStatus('subscriberIdString', {
      channel: 'EMAIL',
      businessUnitId: 0,
      verbose: true,
    });
  });

  // Mock server tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.communicationPreferences.subscribe({
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

  // Mock server tests are disabled
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.communicationPreferences.subscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });

  // Mock server tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.communicationPreferences.unsubscribe({
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

  // Mock server tests are disabled
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.communicationPreferences.unsubscribe({
      emailAddress: 'emailAddress',
      subscriptionId: 'subscriptionId',
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });

  // Mock server tests are disabled
  test.skip('unsubscribeAll: only required params', async () => {
    const responsePromise = client.communicationPreferences.unsubscribeAll('subscriberIdString', {
      channel: 'EMAIL',
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
    const response = await client.communicationPreferences.unsubscribeAll('subscriberIdString', {
      channel: 'EMAIL',
      businessUnitId: 0,
      verbose: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.communicationPreferences.updateStatus('subscriberIdString', {
      channel: 'EMAIL',
      statusState: 'NOT_SPECIFIED',
      subscriptionId: 0,
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.communicationPreferences.updateStatus('subscriberIdString', {
      channel: 'EMAIL',
      statusState: 'NOT_SPECIFIED',
      subscriptionId: 0,
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: 'legalBasisExplanation',
    });
  });
});
