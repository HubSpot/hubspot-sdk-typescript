// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rows', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.create('tableIdOrName', { values: { foo: {} } });
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
    const response = await client.cms.hubdb.rows.create('tableIdOrName', {
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.hubdb.rows.list('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.rows.list(
        'tableIdOrName',
        { after: 'after', archived: true, limit: 0, offset: 0, properties: ['string'], sort: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cloneDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.cloneDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
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
  test.skip('cloneDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.cloneDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('deleteDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.deleteDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
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
  test.skip('deleteDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.deleteDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.get('321669910225', { tableIdOrName: 'tableIdOrName' });
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
    const response = await client.cms.hubdb.rows.get('321669910225', {
      tableIdOrName: 'tableIdOrName',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('getDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.getDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
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
  test.skip('getDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.getDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('listDraft', async () => {
    const responsePromise = client.cms.hubdb.rows.listDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.rows.listDraft(
        'tableIdOrName',
        { after: 'after', archived: true, limit: 0, offset: 0, properties: ['string'], sort: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('replaceDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.replaceDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
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
  test.skip('replaceDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.replaceDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.updateDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
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
  test.skip('updateDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.rows.updateDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });
});
