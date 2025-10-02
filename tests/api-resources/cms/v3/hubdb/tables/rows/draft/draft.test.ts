// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource draft', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.create('321669910225', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.create('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.list('321669910225', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.list('321669910225', {
      tableIdOrName: 'tableIdOrName',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.clone('321669910225', {
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
  test.skip('clone: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.clone('321669910225', {
      tableIdOrName: 'tableIdOrName',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.deleteAll('321669910225', {
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
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.deleteAll('321669910225', {
      tableIdOrName: 'tableIdOrName',
    });
  });

  // Prism tests are disabled
  test.skip('patchAll: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.rows.draft.patchAll('321669910225', {
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
  test.skip('patchAll: required and optional params', async () => {
    const response = await client.cms.v3.hubdb.tables.rows.draft.patchAll('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });
});
