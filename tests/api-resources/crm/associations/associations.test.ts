// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-123123',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.associations.create('toObjectType', {
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
    const response = await client.crm.associations.create('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.associations.delete('toObjectType', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.associations.delete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: 'id' }, to: { id: 'id' }, type: 'type' }],
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.crm.associations.read('toObjectType', {
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
    const response = await client.crm.associations.read('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
    });
  });
});
