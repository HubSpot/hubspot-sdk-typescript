// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot, { toFile } from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hubdb', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.hubdb.create({ label: 'label', name: 'name' });
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
    const response = await client.cms.hubdb.create({
      label: 'label',
      name: 'name',
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              hidden: false,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
              displayOrder: 1,
            },
          ],
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
  test.skip('list', async () => {
    const responsePromise = client.cms.hubdb.list();
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
      client.cms.hubdb.list(
        {
          after: 'after',
          archived: true,
          contentType: 'contentType',
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          isGetLocalizedSchema: true,
          limit: 0,
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.cms.hubdb.archive('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('archiveTable', async () => {
    const responsePromise = client.cms.hubdb.archiveTable('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cloneBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.cloneBatch('tableIdOrName', { inputs: [{ id: 'id' }] });
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
    const response = await client.cms.hubdb.cloneBatch('tableIdOrName', {
      inputs: [{ id: 'id', name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('cloneDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.cloneDraft('tableIdOrName', {
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
  test.skip('cloneDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.cloneDraft('tableIdOrName', {
      copyRows: true,
      isHubspotDefined: true,
      newLabel: 'newLabel',
      newName: 'newName',
    });
  });

  // Prism tests are disabled
  test.skip('cloneDraftTable: only required params', async () => {
    const responsePromise = client.cms.hubdb.cloneDraftTable('tableIdOrName', {
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
  test.skip('cloneDraftTable: required and optional params', async () => {
    const response = await client.cms.hubdb.cloneDraftTable('tableIdOrName', {
      copyRows: true,
      isHubspotDefined: true,
      newLabel: 'newLabel',
      newName: 'newName',
    });
  });

  // Prism tests are disabled
  test.skip('cloneDraftTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.cloneDraftTableRow('321669910225', {
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
  test.skip('cloneDraftTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.cloneDraftTableRow('321669910225', {
      tableIdOrName: 'tableIdOrName',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('cloneDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.cloneDraftTableRows('tableIdOrName', { inputs: [{ id: 'id' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cloneDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.cloneDraftTableRows('tableIdOrName', {
      inputs: [{ id: 'id', name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.createBatch('tableIdOrName', {
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
    const response = await client.cms.hubdb.createBatch('tableIdOrName', {
      inputs: [{ values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' }],
    });
  });

  // Prism tests are disabled
  test.skip('createDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.createDraftTableRows('tableIdOrName', {
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
  test.skip('createDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.createDraftTableRows('tableIdOrName', {
      inputs: [{ values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' }],
    });
  });

  // Prism tests are disabled
  test.skip('createTable: only required params', async () => {
    const responsePromise = client.cms.hubdb.createTable({ label: 'label', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createTable: required and optional params', async () => {
    const response = await client.cms.hubdb.createTable({
      label: 'label',
      name: 'name',
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              hidden: false,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
              displayOrder: 1,
            },
          ],
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
  test.skip('createTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.createTableRow('tableIdOrName', { values: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.createTableRow('tableIdOrName', {
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('deleteDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.deleteDraft('321669910225', { tableIdOrName: 'tableIdOrName' });
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
    const response = await client.cms.hubdb.deleteDraft('321669910225', { tableIdOrName: 'tableIdOrName' });
  });

  // Prism tests are disabled
  test.skip('deleteVersion: only required params', async () => {
    const responsePromise = client.cms.hubdb.deleteVersion(0, { tableIdOrName: 'tableIdOrName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteVersion: required and optional params', async () => {
    const response = await client.cms.hubdb.deleteVersion(0, { tableIdOrName: 'tableIdOrName' });
  });

  test('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.export('tableIdOrName', { format: 'format' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  test('exportDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.exportDraft(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  test('exportDraftTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.exportDraftTable(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  test('exportTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.exportTable(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.hubdb.get('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.get(
        'tableIdOrName',
        { archived: true, includeForeignIds: true, isGetLocalizedSchema: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getAllDraftTables', async () => {
    const responsePromise = client.cms.hubdb.getAllDraftTables();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAllDraftTables: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getAllDraftTables(
        {
          after: 'after',
          archived: true,
          contentType: 'contentType',
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          isGetLocalizedSchema: true,
          limit: 0,
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getAllTables', async () => {
    const responsePromise = client.cms.hubdb.getAllTables();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAllTables: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getAllTables(
        {
          after: 'after',
          archived: true,
          contentType: 'contentType',
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          isGetLocalizedSchema: true,
          limit: 0,
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getDraft', async () => {
    const responsePromise = client.cms.hubdb.getDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getDraft(
        'tableIdOrName',
        { archived: true, includeForeignIds: true, isGetLocalizedSchema: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getDraftTableDetailsByID', async () => {
    const responsePromise = client.cms.hubdb.getDraftTableDetailsByID('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getDraftTableDetailsByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getDraftTableDetailsByID(
        'tableIdOrName',
        { archived: true, includeForeignIds: true, isGetLocalizedSchema: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getDraftTableRowByID: only required params', async () => {
    const responsePromise = client.cms.hubdb.getDraftTableRowByID('321669910225', {
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
  test.skip('getDraftTableRowByID: required and optional params', async () => {
    const response = await client.cms.hubdb.getDraftTableRowByID('321669910225', {
      tableIdOrName: 'tableIdOrName',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('getTableDetails', async () => {
    const responsePromise = client.cms.hubdb.getTableDetails('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTableDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getTableDetails(
        'tableIdOrName',
        { archived: true, includeForeignIds: true, isGetLocalizedSchema: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.getTableRow('321669910225', { tableIdOrName: 'tableIdOrName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.getTableRow('321669910225', {
      tableIdOrName: 'tableIdOrName',
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('getTableRows', async () => {
    const responsePromise = client.cms.hubdb.getTableRows('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTableRows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.getTableRows(
        'tableIdOrName',
        { after: 'after', archived: true, limit: 0, offset: 0, properties: ['string'], sort: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('importDraft', async () => {
    const responsePromise = client.cms.hubdb.importDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('importDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.importDraft(
        'tableIdOrName',
        { config: 'config', file: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('importDraftTable', async () => {
    const responsePromise = client.cms.hubdb.importDraftTable('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('importDraftTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.importDraftTable(
        'tableIdOrName',
        { config: 'config', file: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDraft', async () => {
    const responsePromise = client.cms.hubdb.listDraft('tableIdOrName');
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
      client.cms.hubdb.listDraft(
        'tableIdOrName',
        { after: 'after', archived: true, limit: 0, offset: 0, properties: ['string'], sort: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDrafts', async () => {
    const responsePromise = client.cms.hubdb.listDrafts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDrafts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.listDrafts(
        {
          after: 'after',
          archived: true,
          contentType: 'contentType',
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          isGetLocalizedSchema: true,
          limit: 0,
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publishDraft', async () => {
    const responsePromise = client.cms.hubdb.publishDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publishDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.publishDraft(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('publishDraftTable', async () => {
    const responsePromise = client.cms.hubdb.publishDraftTable('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publishDraftTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.publishDraftTable(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('purgeBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.purgeBatch('tableIdOrName', { inputs: ['string'] });
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
    const response = await client.cms.hubdb.purgeBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('purgeDraftTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.purgeDraftTableRow('321669910225', {
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
  test.skip('purgeDraftTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.purgeDraftTableRow('321669910225', {
      tableIdOrName: 'tableIdOrName',
    });
  });

  // Prism tests are disabled
  test.skip('purgeDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.purgeDraftTableRows('tableIdOrName', { inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('purgeDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.purgeDraftTableRows('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('readBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.readBatch('tableIdOrName', { inputs: ['string'] });
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
    const response = await client.cms.hubdb.readBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('readDraftBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.readDraftBatch('tableIdOrName', { inputs: ['string'] });
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
    const response = await client.cms.hubdb.readDraftBatch('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('readDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.readDraftTableRows('tableIdOrName', { inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('readDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.readDraftTableRows('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('readTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.readTableRows('tableIdOrName', { inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('readTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.readTableRows('tableIdOrName', { inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('removeTableVersion: only required params', async () => {
    const responsePromise = client.cms.hubdb.removeTableVersion(0, { tableIdOrName: 'tableIdOrName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeTableVersion: required and optional params', async () => {
    const response = await client.cms.hubdb.removeTableVersion(0, { tableIdOrName: 'tableIdOrName' });
  });

  // Prism tests are disabled
  test.skip('replaceBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.replaceBatch('tableIdOrName', {
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
    const response = await client.cms.hubdb.replaceBatch('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('replaceDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.replaceDraft('321669910225', {
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
    const response = await client.cms.hubdb.replaceDraft('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('replaceDraftTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.replaceDraftTableRow('321669910225', {
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
  test.skip('replaceDraftTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.replaceDraftTableRow('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('replaceDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.replaceDraftTableRows('tableIdOrName', {
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
  test.skip('replaceDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.replaceDraftTableRows('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.cms.hubdb.resetDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resetDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.resetDraft(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('resetDraftTable', async () => {
    const responsePromise = client.cms.hubdb.resetDraftTable('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resetDraftTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.resetDraftTable(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('unpublish', async () => {
    const responsePromise = client.cms.hubdb.unpublish('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unpublish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.unpublish(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('unpublishTable', async () => {
    const responsePromise = client.cms.hubdb.unpublishTable('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unpublishTable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.unpublishTable(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.cms.hubdb.updateBatch('tableIdOrName', {
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
    const response = await client.cms.hubdb.updateBatch('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.updateDraft('tableIdOrName', { label: 'label', name: 'name' });
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
    const response = await client.cms.hubdb.updateDraft('tableIdOrName', {
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
          options: [
            {
              hidden: false,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
              displayOrder: 1,
            },
          ],
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
  test.skip('updateDraftTable: only required params', async () => {
    const responsePromise = client.cms.hubdb.updateDraftTable('tableIdOrName', {
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
  test.skip('updateDraftTable: required and optional params', async () => {
    const response = await client.cms.hubdb.updateDraftTable('tableIdOrName', {
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
          options: [
            {
              hidden: false,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
              displayOrder: 1,
            },
          ],
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
  test.skip('updateDraftTableRow: only required params', async () => {
    const responsePromise = client.cms.hubdb.updateDraftTableRow('321669910225', {
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
  test.skip('updateDraftTableRow: required and optional params', async () => {
    const response = await client.cms.hubdb.updateDraftTableRow('321669910225', {
      tableIdOrName: 'tableIdOrName',
      values: { foo: {} },
      childTableId: 0,
      displayIndex: 0,
      name: 'name',
      path: 'path',
    });
  });

  // Prism tests are disabled
  test.skip('updateDraftTableRows: only required params', async () => {
    const responsePromise = client.cms.hubdb.updateDraftTableRows('tableIdOrName', {
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
  test.skip('updateDraftTableRows: required and optional params', async () => {
    const response = await client.cms.hubdb.updateDraftTableRows('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });
});
