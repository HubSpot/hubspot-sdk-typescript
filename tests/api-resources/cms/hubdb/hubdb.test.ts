// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot, { toFile } from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hubdb', () => {
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
