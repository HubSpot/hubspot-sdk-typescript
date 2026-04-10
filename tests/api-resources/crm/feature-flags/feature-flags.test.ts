// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource featureFlags', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.featureFlags.update('flagName', { appId: 0, defaultState: 'ABSENT' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.featureFlags.update('flagName', {
      appId: 0,
      defaultState: 'ABSENT',
      overrideState: 'ABSENT',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.featureFlags.delete('flagName', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.featureFlags.delete('flagName', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('deletePortalState: only required params', async () => {
    const responsePromise = client.crm.featureFlags.deletePortalState(0, { appId: 0, flagName: 'flagName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deletePortalState: required and optional params', async () => {
    const response = await client.crm.featureFlags.deletePortalState(0, { appId: 0, flagName: 'flagName' });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.featureFlags.get('flagName', { appId: 0 });
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
    const response = await client.crm.featureFlags.get('flagName', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getPortalState: only required params', async () => {
    const responsePromise = client.crm.featureFlags.getPortalState(0, { appId: 0, flagName: 'flagName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPortalState: required and optional params', async () => {
    const response = await client.crm.featureFlags.getPortalState(0, { appId: 0, flagName: 'flagName' });
  });

  // Mock server tests are disabled
  test.skip('listAll', async () => {
    const responsePromise = client.crm.featureFlags.listAll(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPortals: only required params', async () => {
    const responsePromise = client.crm.featureFlags.listPortals('flagName', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPortals: required and optional params', async () => {
    const response = await client.crm.featureFlags.listPortals('flagName', {
      appId: 0,
      limit: 0,
      startPortalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('updatePortalState: only required params', async () => {
    const responsePromise = client.crm.featureFlags.updatePortalState(0, {
      appId: 0,
      flagName: 'flagName',
      flagState: 'ABSENT',
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
  test.skip('updatePortalState: required and optional params', async () => {
    const response = await client.crm.featureFlags.updatePortalState(0, {
      appId: 0,
      flagName: 'flagName',
      flagState: 'ABSENT',
    });
  });
});
