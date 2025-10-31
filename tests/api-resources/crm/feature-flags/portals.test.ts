// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portals', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.featureFlags.portals.update(0, {
      appId: 0,
      flagName: 'flagName',
      flagState: 'OFF',
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
    const response = await client.crm.featureFlags.portals.update(0, {
      appId: 0,
      flagName: 'flagName',
      flagState: 'OFF',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.featureFlags.portals.delete(0, { appId: 0, flagName: 'flagName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.featureFlags.portals.delete(0, { appId: 0, flagName: 'flagName' });
  });

  // Prism tests are disabled
  test.skip('batchDelete: only required params', async () => {
    const responsePromise = client.crm.featureFlags.portals.batchDelete('flagName', {
      appId: 0,
      portalIds: [0],
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
  test.skip('batchDelete: required and optional params', async () => {
    const response = await client.crm.featureFlags.portals.batchDelete('flagName', {
      appId: 0,
      portalIds: [0],
    });
  });

  // Prism tests are disabled
  test.skip('batchUpsert: only required params', async () => {
    const responsePromise = client.crm.featureFlags.portals.batchUpsert('flagName', {
      appId: 0,
      portalStates: [{ flagState: 'OFF', portalId: 0 }],
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
  test.skip('batchUpsert: required and optional params', async () => {
    const response = await client.crm.featureFlags.portals.batchUpsert('flagName', {
      appId: 0,
      portalStates: [{ flagState: 'OFF', portalId: 0 }],
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.featureFlags.portals.get(0, { appId: 0, flagName: 'flagName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.featureFlags.portals.get(0, { appId: 0, flagName: 'flagName' });
  });
});
