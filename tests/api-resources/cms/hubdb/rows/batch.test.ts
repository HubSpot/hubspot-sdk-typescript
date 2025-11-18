// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('cloneBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.cloneBatch('tableIdOrName', {
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
  test.skip('cloneBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.cloneBatch('tableIdOrName', {
      inputs: [{ id: 'id', name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.createBatch('tableIdOrName', {
      inputs: [{ childTableId: 0, displayIndex: 0, values: { foo: {} } }],
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.createBatch('tableIdOrName', {
      inputs: [{ childTableId: 0, displayIndex: 0, values: { foo: {} }, name: 'name', path: 'path' }],
    });
  });

  // Prism tests are disabled
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.getBatch('tableIdOrName', { inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.getBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('getDraftBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.getDraftBatch('tableIdOrName', {
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
  test.skip('getDraftBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.getDraftBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('purgeBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.purgeBatch('tableIdOrName', { inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('purgeBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.purgeBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('replaceBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.replaceBatch('tableIdOrName', {
      inputs: [{ childTableId: 0, displayIndex: 0, values: { foo: {} } }],
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
  test.skip('replaceBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.replaceBatch('tableIdOrName', {
      inputs: [
        { childTableId: 0, displayIndex: 0, values: { foo: {} }, id: 'id', name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.updateBatch('tableIdOrName', {
      inputs: [{ childTableId: 0, displayIndex: 0, values: { foo: {} } }],
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
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.batch.updateBatch('tableIdOrName', {
      inputs: [
        { childTableId: 0, displayIndex: 0, values: { foo: {} }, id: 'id', name: 'name', path: 'path' },
      ],
    });
  });
});
