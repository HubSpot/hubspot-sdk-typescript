// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.v3.associations.batch.create('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.v3.associations.batch.create('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
    });
  });

  // Prism tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.crm.v3.associations.batch.archive('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.crm.v3.associations.batch.archive('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.crm.v3.associations.batch.read('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
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
  test.skip('read: required and optional params', async () => {
    const response = await client.crm.v3.associations.batch.read('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
    });
  });
});
