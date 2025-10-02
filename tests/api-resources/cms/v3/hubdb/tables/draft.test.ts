// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK, { toFile } from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource draft', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.list('tableIdOrName');
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
      client.cms.v3.hubdb.tables.draft.list(
        'tableIdOrName',
        { archived: true, includeForeignIds: true, isGetLocalizedSchema: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.clone('tableIdOrName', {
      copyRows: true,
      isHubspotDefined: true,
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
    const response = await client.cms.v3.hubdb.tables.draft.clone('tableIdOrName', {
      copyRows: true,
      isHubspotDefined: true,
      newLabel: 'newLabel',
      newName: 'newName',
    });
  });

  // Prism tests are disabled
  test.skip('import', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.import('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('import: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.v3.hubdb.tables.draft.import(
        'tableIdOrName',
        { config: 'config', file: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('patchAll: only required params', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.patchAll('tableIdOrName', {
      label: 'label',
      name: 'name',
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
    const response = await client.cms.v3.hubdb.tables.draft.patchAll('tableIdOrName', {
      label: 'label',
      name: 'name',
      archived: true,
      includeForeignIds: true,
      isGetLocalizedSchema: true,
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
          type: 'NULL',
          foreignColumnId: 0,
          foreignTableId: 0,
          maxNumberOfCharacters: 0,
          maxNumberOfOptions: 0,
        },
      ],
      dynamicMetaTags: { foo: 0 },
      enableChildTablePages: true,
      useForPages: true,
    });
  });

  // Prism tests are disabled
  test.skip('publish', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.publish('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.v3.hubdb.tables.draft.publish(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reset', async () => {
    const responsePromise = client.cms.v3.hubdb.tables.draft.reset('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.v3.hubdb.tables.draft.reset(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  test('retrieveExport: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.v3.hubdb.tables.draft.retrieveExport(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });
});
