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
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.create('tableIdOrName', {
      inputs: [{ values: { foo: {} } }],
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
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.create('tableIdOrName', {
      inputs: [{ values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' }],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.update('tableIdOrName', {
      inputs: [{ id: 'id', values: { foo: {} } }],
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
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.update('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.clone('tableIdOrName', {
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
  test.skip('clone: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.clone('tableIdOrName', {
      inputs: [{ id: 'id', name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('purge: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.purge('tableIdOrName', {
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
  test.skip('purge: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.purge('tableIdOrName', {
      inputs: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.read('tableIdOrName', {
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
  test.skip('read: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.read('tableIdOrName', {
      inputs: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.batch.replace('tableIdOrName', {
      inputs: [{ id: 'id', values: { foo: {} } }],
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.batch.replace('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });
});
