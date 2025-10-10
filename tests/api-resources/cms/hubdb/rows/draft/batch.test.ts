// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('cloneBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.cloneBatch('tableIdOrName', {
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
    const response = await client.cms.hubdb.rows.draft.batch.cloneBatch('tableIdOrName', {
      inputs: [{ id: 'id', name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.createBatch('tableIdOrName', {
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.createBatch('tableIdOrName', {
      inputs: [{ values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' }],
    });
  });

  // Prism tests are disabled
  test.skip('purgeBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.purgeBatch('tableIdOrName', {
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
  test.skip('purgeBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.purgeBatch('tableIdOrName', {
      inputs: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('readBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.readBatch('tableIdOrName', {
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
  test.skip('readBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.readBatch('tableIdOrName', {
      inputs: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('readDraftBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.readDraftBatch('tableIdOrName', {
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
  test.skip('readDraftBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.readDraftBatch('tableIdOrName', {
      inputs: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('replaceBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.replaceBatch('tableIdOrName', {
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
  test.skip('replaceBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.replaceBatch('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.draft.batch.updateBatch('tableIdOrName', {
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
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.draft.batch.updateBatch('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });
});
