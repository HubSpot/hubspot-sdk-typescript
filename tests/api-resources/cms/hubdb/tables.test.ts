// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot, { toFile } from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tables', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.hubdb.tables.create({
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              id: 'id',
              createdAt: '2019-12-27T18:11:19.117Z',
              label: 'label',
              name: 'name',
              order: 0,
              type: 'type',
              updatedAt: '2019-12-27T18:11:19.117Z',
            },
          ],
          type: 'BOOLEAN',
        },
      ],
      dynamicMetaTags: { foo: 0 },
      enableChildTablePages: true,
      label: 'label',
      name: 'name',
      useForPages: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.hubdb.tables.create({
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              id: 'id',
              createdAt: '2019-12-27T18:11:19.117Z',
              label: 'label',
              name: 'name',
              order: 0,
              type: 'type',
              updatedAt: '2019-12-27T18:11:19.117Z',
              createdBy: {
                id: 'id',
                email: 'email',
                firstName: 'firstName',
                lastName: 'lastName',
              },
              createdByUserId: 0,
              updatedBy: {
                id: 'id',
                email: 'email',
                firstName: 'firstName',
                lastName: 'lastName',
              },
              updatedByUserId: 0,
            },
          ],
          type: 'BOOLEAN',
          foreignColumnId: 0,
          foreignTableId: 0,
          maxNumberOfCharacters: 0,
          maxNumberOfOptions: 0,
        },
      ],
      dynamicMetaTags: { foo: 0 },
      enableChildTablePages: true,
      label: 'label',
      name: 'name',
      useForPages: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.hubdb.tables.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.list(
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
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.hubdb.tables.delete('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cloneDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.tables.cloneDraft('tableIdOrName', {
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

  // Mock server tests are disabled
  test.skip('cloneDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.tables.cloneDraft('tableIdOrName', {
      copyRows: true,
      isHubspotDefined: true,
      newLabel: 'newLabel',
      newName: 'newName',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteVersion: only required params', async () => {
    const responsePromise = client.cms.hubdb.tables.deleteVersion(0, { tableIdOrName: 'tableIdOrName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteVersion: required and optional params', async () => {
    const response = await client.cms.hubdb.tables.deleteVersion(0, { tableIdOrName: 'tableIdOrName' });
  });

  // Mock server tests are disabled
  test.skip('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.export(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.exportDraft(
        'tableIdOrName',
        { format: 'format' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.hubdb.tables.get('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.get(
        'tableIdOrName',
        {
          archived: true,
          includeForeignIds: true,
          isGetLocalizedSchema: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getDraft', async () => {
    const responsePromise = client.cms.hubdb.tables.getDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.getDraft(
        'tableIdOrName',
        {
          archived: true,
          includeForeignIds: true,
          isGetLocalizedSchema: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('importDraft', async () => {
    const responsePromise = client.cms.hubdb.tables.importDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('importDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.importDraft(
        'tableIdOrName',
        { config: 'config', file: await toFile(Buffer.from('Example data'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listDraft', async () => {
    const responsePromise = client.cms.hubdb.tables.listDraft();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.listDraft(
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
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('publishDraft', async () => {
    const responsePromise = client.cms.hubdb.tables.publishDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('publishDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.publishDraft(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('resetDraft', async () => {
    const responsePromise = client.cms.hubdb.tables.resetDraft('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resetDraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.resetDraft(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('unpublish', async () => {
    const responsePromise = client.cms.hubdb.tables.unpublish('tableIdOrName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unpublish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.hubdb.tables.unpublish(
        'tableIdOrName',
        { includeForeignIds: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateDraft: only required params', async () => {
    const responsePromise = client.cms.hubdb.tables.updateDraft('tableIdOrName', {
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              id: 'id',
              createdAt: '2019-12-27T18:11:19.117Z',
              label: 'label',
              name: 'name',
              order: 0,
              type: 'type',
              updatedAt: '2019-12-27T18:11:19.117Z',
            },
          ],
          type: 'BOOLEAN',
        },
      ],
      dynamicMetaTags: { foo: 0 },
      enableChildTablePages: true,
      label: 'label',
      name: 'name',
      useForPages: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateDraft: required and optional params', async () => {
    const response = await client.cms.hubdb.tables.updateDraft('tableIdOrName', {
      allowChildTables: true,
      allowPublicApiAccess: true,
      columns: [
        {
          id: 0,
          label: 'label',
          name: 'name',
          options: [
            {
              id: 'id',
              createdAt: '2019-12-27T18:11:19.117Z',
              label: 'label',
              name: 'name',
              order: 0,
              type: 'type',
              updatedAt: '2019-12-27T18:11:19.117Z',
              createdBy: {
                id: 'id',
                email: 'email',
                firstName: 'firstName',
                lastName: 'lastName',
              },
              createdByUserId: 0,
              updatedBy: {
                id: 'id',
                email: 'email',
                firstName: 'firstName',
                lastName: 'lastName',
              },
              updatedByUserId: 0,
            },
          ],
          type: 'BOOLEAN',
          foreignColumnId: 0,
          foreignTableId: 0,
          maxNumberOfCharacters: 0,
          maxNumberOfOptions: 0,
        },
      ],
      dynamicMetaTags: { foo: 0 },
      enableChildTablePages: true,
      label: 'label',
      name: 'name',
      useForPages: true,
      archived: true,
      includeForeignIds: true,
      isGetLocalizedSchema: true,
    });
  });
});
