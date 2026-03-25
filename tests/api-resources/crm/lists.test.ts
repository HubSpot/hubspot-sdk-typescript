// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lists', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.lists.create({
      name: 'name',
      objectTypeId: 'objectTypeId',
      processingType: 'processingType',
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
    const response = await client.crm.lists.create({
      name: 'name',
      objectTypeId: 'objectTypeId',
      processingType: 'processingType',
      customProperties: { foo: 'string' },
      filterBranch: {
        filterBranches: [
          {
            filterBranches: [
              {
                filterBranches: [
                  {
                    filterBranches: [
                      {
                        filterBranches: [
                          {
                            eventTypeId: 'eventTypeId',
                            filterBranches: [
                              {
                                filterBranches: [
                                  {
                                    associationCategory: 'associationCategory',
                                    associationTypeId: 0,
                                    filterBranches: [
                                      {
                                        filterBranches: [],
                                        filterBranchOperator: 'filterBranchOperator',
                                        filterBranchType: 'OR',
                                        filters: [
                                          {
                                            filterType: 'PROPERTY',
                                            operation: {
                                              includeObjectsWithNoValueSet: true,
                                              operationType: 'BOOL',
                                              operator: 'operator',
                                              value: true,
                                            },
                                            property: 'property',
                                          },
                                        ],
                                      },
                                    ],
                                    filterBranchOperator: 'filterBranchOperator',
                                    filterBranchType: 'ASSOCIATION',
                                    filters: [
                                      {
                                        filterType: 'PROPERTY',
                                        operation: {
                                          includeObjectsWithNoValueSet: true,
                                          operationType: 'BOOL',
                                          operator: 'operator',
                                          value: true,
                                        },
                                        property: 'property',
                                      },
                                    ],
                                    objectTypeId: 'objectTypeId',
                                    operator: 'operator',
                                  },
                                ],
                                filterBranchOperator: 'filterBranchOperator',
                                filterBranchType: 'PROPERTY_ASSOCIATION',
                                filters: [
                                  {
                                    filterType: 'PROPERTY',
                                    operation: {
                                      includeObjectsWithNoValueSet: true,
                                      operationType: 'BOOL',
                                      operator: 'operator',
                                      value: true,
                                    },
                                    property: 'property',
                                  },
                                ],
                                objectTypeId: 'objectTypeId',
                                operator: 'operator',
                                propertyWithObjectId: 'propertyWithObjectId',
                              },
                            ],
                            filterBranchOperator: 'filterBranchOperator',
                            filterBranchType: 'UNIFIED_EVENTS',
                            filters: [
                              {
                                filterType: 'PROPERTY',
                                operation: {
                                  includeObjectsWithNoValueSet: true,
                                  operationType: 'BOOL',
                                  operator: 'operator',
                                  value: true,
                                },
                                property: 'property',
                              },
                            ],
                            operator: 'HAS_COMPLETED',
                            coalescingRefineBy: {
                              type: 'NUM_OCCURRENCES',
                              maxOccurrences: 0,
                              minOccurrences: 0,
                            },
                            pruningRefineBy: {
                              type: 'NUM_OCCURRENCES',
                              maxOccurrences: 0,
                              minOccurrences: 0,
                            },
                          },
                        ],
                        filterBranchOperator: 'filterBranchOperator',
                        filterBranchType: 'RESTRICTED',
                        filters: [
                          {
                            filterType: 'PROPERTY',
                            operation: {
                              includeObjectsWithNoValueSet: true,
                              operationType: 'BOOL',
                              operator: 'operator',
                              value: true,
                            },
                            property: 'property',
                          },
                        ],
                      },
                    ],
                    filterBranchOperator: 'filterBranchOperator',
                    filterBranchType: 'NOT_ANY',
                    filters: [
                      {
                        filterType: 'PROPERTY',
                        operation: {
                          includeObjectsWithNoValueSet: true,
                          operationType: 'BOOL',
                          operator: 'operator',
                          value: true,
                        },
                        property: 'property',
                      },
                    ],
                  },
                ],
                filterBranchOperator: 'filterBranchOperator',
                filterBranchType: 'NOT_ALL',
                filters: [
                  {
                    filterType: 'PROPERTY',
                    operation: {
                      includeObjectsWithNoValueSet: true,
                      operationType: 'BOOL',
                      operator: 'operator',
                      value: true,
                    },
                    property: 'property',
                  },
                ],
              },
            ],
            filterBranchOperator: 'filterBranchOperator',
            filterBranchType: 'AND',
            filters: [
              {
                filterType: 'PROPERTY',
                operation: {
                  includeObjectsWithNoValueSet: true,
                  operationType: 'BOOL',
                  operator: 'operator',
                  value: true,
                },
                property: 'property',
              },
            ],
          },
        ],
        filterBranchOperator: 'filterBranchOperator',
        filterBranchType: 'OR',
        filters: [
          {
            filterType: 'PROPERTY',
            operation: {
              includeObjectsWithNoValueSet: true,
              operationType: 'BOOL',
              operator: 'operator',
              value: true,
            },
            property: 'property',
          },
        ],
      },
      listFolderId: 0,
      listPermissions: { teamsWithEditAccess: [0], usersWithEditAccess: [0] },
      membershipSettings: { includeUnassigned: true, membershipTeamId: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.lists.list();
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
      client.crm.lists.list(
        { includeFilters: true, listIds: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.lists.delete('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('addAndRemoveMemberships: only required params', async () => {
    const responsePromise = client.crm.lists.addAndRemoveMemberships('listId', {
      recordIdsToAdd: ['string'],
      recordIdsToRemove: ['string'],
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
  test.skip('addAndRemoveMemberships: required and optional params', async () => {
    const response = await client.crm.lists.addAndRemoveMemberships('listId', {
      recordIdsToAdd: ['string'],
      recordIdsToRemove: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('addMemberships: only required params', async () => {
    const responsePromise = client.crm.lists.addMemberships('listId', { body: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('addMemberships: required and optional params', async () => {
    const response = await client.crm.lists.addMemberships('listId', { body: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('addMembershipsFrom: only required params', async () => {
    const responsePromise = client.crm.lists.addMembershipsFrom('sourceListId', { listId: 'listId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('addMembershipsFrom: required and optional params', async () => {
    const response = await client.crm.lists.addMembershipsFrom('sourceListId', { listId: 'listId' });
  });

  // Mock server tests are disabled
  test.skip('batchReadMemberships: only required params', async () => {
    const responsePromise = client.crm.lists.batchReadMemberships({
      inputs: [{ objectTypeId: 'objectTypeId', recordId: 'recordId' }],
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
  test.skip('batchReadMemberships: required and optional params', async () => {
    const response = await client.crm.lists.batchReadMemberships({
      inputs: [{ objectTypeId: 'objectTypeId', recordId: 'recordId' }],
    });
  });

  // Mock server tests are disabled
  test.skip('createFolder: only required params', async () => {
    const responsePromise = client.crm.lists.createFolder({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createFolder: required and optional params', async () => {
    const response = await client.crm.lists.createFolder({ name: 'name', parentFolderId: 'parentFolderId' });
  });

  // Mock server tests are disabled
  test.skip('createIDMapping: only required params', async () => {
    const responsePromise = client.crm.lists.createIDMapping({ body: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createIDMapping: required and optional params', async () => {
    const response = await client.crm.lists.createIDMapping({ body: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('deleteFolder', async () => {
    const responsePromise = client.crm.lists.deleteFolder('folderId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteMemberships', async () => {
    const responsePromise = client.crm.lists.deleteMemberships('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteScheduleConversion', async () => {
    const responsePromise = client.crm.lists.deleteScheduleConversion('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.lists.get('listId');
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
      client.crm.lists.get('listId', { includeFilters: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeIDAndName: only required params', async () => {
    const responsePromise = client.crm.lists.getByObjectTypeIDAndName('listName', {
      objectTypeId: 'objectTypeId',
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
  test.skip('getByObjectTypeIDAndName: required and optional params', async () => {
    const response = await client.crm.lists.getByObjectTypeIDAndName('listName', {
      objectTypeId: 'objectTypeId',
      includeFilters: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getIDMapping', async () => {
    const responsePromise = client.crm.lists.getIDMapping();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getIDMapping: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.getIDMapping({ legacyListId: 'legacyListId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getRecordMemberships: only required params', async () => {
    const responsePromise = client.crm.lists.getRecordMemberships('recordId', {
      objectTypeId: 'objectTypeId',
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
  test.skip('getRecordMemberships: required and optional params', async () => {
    const response = await client.crm.lists.getRecordMemberships('recordId', {
      objectTypeId: 'objectTypeId',
    });
  });

  // Mock server tests are disabled
  test.skip('getScheduleConversion', async () => {
    const responsePromise = client.crm.lists.getScheduleConversion('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listFolders', async () => {
    const responsePromise = client.crm.lists.listFolders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listFolders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.listFolders({ folderId: 'folderId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listMemberships', async () => {
    const responsePromise = client.crm.lists.listMemberships('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMemberships: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.listMemberships(
        'listId',
        {
          after: 'after',
          before: 'before',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listMembershipsJoinOrder', async () => {
    const responsePromise = client.crm.lists.listMembershipsJoinOrder('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMembershipsJoinOrder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.listMembershipsJoinOrder(
        'listId',
        {
          after: 'after',
          before: 'before',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('moveFolder: only required params', async () => {
    const responsePromise = client.crm.lists.moveFolder('newParentFolderId', { folderId: 'folderId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('moveFolder: required and optional params', async () => {
    const response = await client.crm.lists.moveFolder('newParentFolderId', { folderId: 'folderId' });
  });

  // Mock server tests are disabled
  test.skip('moveList: only required params', async () => {
    const responsePromise = client.crm.lists.moveList({ listId: 'listId', newFolderId: 'newFolderId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('moveList: required and optional params', async () => {
    const response = await client.crm.lists.moveList({ listId: 'listId', newFolderId: 'newFolderId' });
  });

  // Mock server tests are disabled
  test.skip('removeMemberships: only required params', async () => {
    const responsePromise = client.crm.lists.removeMemberships('listId', { body: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('removeMemberships: required and optional params', async () => {
    const response = await client.crm.lists.removeMemberships('listId', { body: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('renameFolder', async () => {
    const responsePromise = client.crm.lists.renameFolder('folderId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('renameFolder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.renameFolder(
        'folderId',
        { newFolderName: 'newFolderName' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('restore', async () => {
    const responsePromise = client.crm.lists.restore('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.crm.lists.search({
      additionalProperties: ['string'],
      listIds: ['string'],
      offset: 0,
      processingTypes: ['string'],
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
  test.skip('search: required and optional params', async () => {
    const response = await client.crm.lists.search({
      additionalProperties: ['string'],
      listIds: ['string'],
      offset: 0,
      processingTypes: ['string'],
      count: 0,
      objectTypeId: 'objectTypeId',
      query: 'query',
      sort: 'sort',
    });
  });

  // Mock server tests are disabled
  test.skip('updateListFilters: only required params', async () => {
    const responsePromise = client.crm.lists.updateListFilters('listId', {
      filterBranch: {
        filterBranches: [
          {
            filterBranches: [
              {
                filterBranches: [
                  {
                    filterBranches: [
                      {
                        filterBranches: [
                          {
                            eventTypeId: 'eventTypeId',
                            filterBranches: [
                              {
                                filterBranches: [
                                  {
                                    associationCategory: 'associationCategory',
                                    associationTypeId: 0,
                                    filterBranches: [
                                      {
                                        filterBranches: [],
                                        filterBranchOperator: 'filterBranchOperator',
                                        filterBranchType: 'OR',
                                        filters: [
                                          {
                                            filterType: 'PROPERTY',
                                            operation: {
                                              includeObjectsWithNoValueSet: true,
                                              operationType: 'BOOL',
                                              operator: 'operator',
                                              value: true,
                                            },
                                            property: 'property',
                                          },
                                        ],
                                      },
                                    ],
                                    filterBranchOperator: 'filterBranchOperator',
                                    filterBranchType: 'ASSOCIATION',
                                    filters: [
                                      {
                                        filterType: 'PROPERTY',
                                        operation: {
                                          includeObjectsWithNoValueSet: true,
                                          operationType: 'BOOL',
                                          operator: 'operator',
                                          value: true,
                                        },
                                        property: 'property',
                                      },
                                    ],
                                    objectTypeId: 'objectTypeId',
                                    operator: 'operator',
                                  },
                                ],
                                filterBranchOperator: 'filterBranchOperator',
                                filterBranchType: 'PROPERTY_ASSOCIATION',
                                filters: [
                                  {
                                    filterType: 'PROPERTY',
                                    operation: {
                                      includeObjectsWithNoValueSet: true,
                                      operationType: 'BOOL',
                                      operator: 'operator',
                                      value: true,
                                    },
                                    property: 'property',
                                  },
                                ],
                                objectTypeId: 'objectTypeId',
                                operator: 'operator',
                                propertyWithObjectId: 'propertyWithObjectId',
                              },
                            ],
                            filterBranchOperator: 'filterBranchOperator',
                            filterBranchType: 'UNIFIED_EVENTS',
                            filters: [
                              {
                                filterType: 'PROPERTY',
                                operation: {
                                  includeObjectsWithNoValueSet: true,
                                  operationType: 'BOOL',
                                  operator: 'operator',
                                  value: true,
                                },
                                property: 'property',
                              },
                            ],
                            operator: 'HAS_COMPLETED',
                          },
                        ],
                        filterBranchOperator: 'filterBranchOperator',
                        filterBranchType: 'RESTRICTED',
                        filters: [
                          {
                            filterType: 'PROPERTY',
                            operation: {
                              includeObjectsWithNoValueSet: true,
                              operationType: 'BOOL',
                              operator: 'operator',
                              value: true,
                            },
                            property: 'property',
                          },
                        ],
                      },
                    ],
                    filterBranchOperator: 'filterBranchOperator',
                    filterBranchType: 'NOT_ANY',
                    filters: [
                      {
                        filterType: 'PROPERTY',
                        operation: {
                          includeObjectsWithNoValueSet: true,
                          operationType: 'BOOL',
                          operator: 'operator',
                          value: true,
                        },
                        property: 'property',
                      },
                    ],
                  },
                ],
                filterBranchOperator: 'filterBranchOperator',
                filterBranchType: 'NOT_ALL',
                filters: [
                  {
                    filterType: 'PROPERTY',
                    operation: {
                      includeObjectsWithNoValueSet: true,
                      operationType: 'BOOL',
                      operator: 'operator',
                      value: true,
                    },
                    property: 'property',
                  },
                ],
              },
            ],
            filterBranchOperator: 'filterBranchOperator',
            filterBranchType: 'AND',
            filters: [
              {
                filterType: 'PROPERTY',
                operation: {
                  includeObjectsWithNoValueSet: true,
                  operationType: 'BOOL',
                  operator: 'operator',
                  value: true,
                },
                property: 'property',
              },
            ],
          },
        ],
        filterBranchOperator: 'filterBranchOperator',
        filterBranchType: 'OR',
        filters: [
          {
            filterType: 'PROPERTY',
            operation: {
              includeObjectsWithNoValueSet: true,
              operationType: 'BOOL',
              operator: 'operator',
              value: true,
            },
            property: 'property',
          },
        ],
      },
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
  test.skip('updateListFilters: required and optional params', async () => {
    const response = await client.crm.lists.updateListFilters('listId', {
      filterBranch: {
        filterBranches: [
          {
            filterBranches: [
              {
                filterBranches: [
                  {
                    filterBranches: [
                      {
                        filterBranches: [
                          {
                            eventTypeId: 'eventTypeId',
                            filterBranches: [
                              {
                                filterBranches: [
                                  {
                                    associationCategory: 'associationCategory',
                                    associationTypeId: 0,
                                    filterBranches: [
                                      {
                                        filterBranches: [],
                                        filterBranchOperator: 'filterBranchOperator',
                                        filterBranchType: 'OR',
                                        filters: [
                                          {
                                            filterType: 'PROPERTY',
                                            operation: {
                                              includeObjectsWithNoValueSet: true,
                                              operationType: 'BOOL',
                                              operator: 'operator',
                                              value: true,
                                            },
                                            property: 'property',
                                          },
                                        ],
                                      },
                                    ],
                                    filterBranchOperator: 'filterBranchOperator',
                                    filterBranchType: 'ASSOCIATION',
                                    filters: [
                                      {
                                        filterType: 'PROPERTY',
                                        operation: {
                                          includeObjectsWithNoValueSet: true,
                                          operationType: 'BOOL',
                                          operator: 'operator',
                                          value: true,
                                        },
                                        property: 'property',
                                      },
                                    ],
                                    objectTypeId: 'objectTypeId',
                                    operator: 'operator',
                                  },
                                ],
                                filterBranchOperator: 'filterBranchOperator',
                                filterBranchType: 'PROPERTY_ASSOCIATION',
                                filters: [
                                  {
                                    filterType: 'PROPERTY',
                                    operation: {
                                      includeObjectsWithNoValueSet: true,
                                      operationType: 'BOOL',
                                      operator: 'operator',
                                      value: true,
                                    },
                                    property: 'property',
                                  },
                                ],
                                objectTypeId: 'objectTypeId',
                                operator: 'operator',
                                propertyWithObjectId: 'propertyWithObjectId',
                              },
                            ],
                            filterBranchOperator: 'filterBranchOperator',
                            filterBranchType: 'UNIFIED_EVENTS',
                            filters: [
                              {
                                filterType: 'PROPERTY',
                                operation: {
                                  includeObjectsWithNoValueSet: true,
                                  operationType: 'BOOL',
                                  operator: 'operator',
                                  value: true,
                                },
                                property: 'property',
                              },
                            ],
                            operator: 'HAS_COMPLETED',
                            coalescingRefineBy: {
                              type: 'NUM_OCCURRENCES',
                              maxOccurrences: 0,
                              minOccurrences: 0,
                            },
                            pruningRefineBy: {
                              type: 'NUM_OCCURRENCES',
                              maxOccurrences: 0,
                              minOccurrences: 0,
                            },
                          },
                        ],
                        filterBranchOperator: 'filterBranchOperator',
                        filterBranchType: 'RESTRICTED',
                        filters: [
                          {
                            filterType: 'PROPERTY',
                            operation: {
                              includeObjectsWithNoValueSet: true,
                              operationType: 'BOOL',
                              operator: 'operator',
                              value: true,
                            },
                            property: 'property',
                          },
                        ],
                      },
                    ],
                    filterBranchOperator: 'filterBranchOperator',
                    filterBranchType: 'NOT_ANY',
                    filters: [
                      {
                        filterType: 'PROPERTY',
                        operation: {
                          includeObjectsWithNoValueSet: true,
                          operationType: 'BOOL',
                          operator: 'operator',
                          value: true,
                        },
                        property: 'property',
                      },
                    ],
                  },
                ],
                filterBranchOperator: 'filterBranchOperator',
                filterBranchType: 'NOT_ALL',
                filters: [
                  {
                    filterType: 'PROPERTY',
                    operation: {
                      includeObjectsWithNoValueSet: true,
                      operationType: 'BOOL',
                      operator: 'operator',
                      value: true,
                    },
                    property: 'property',
                  },
                ],
              },
            ],
            filterBranchOperator: 'filterBranchOperator',
            filterBranchType: 'AND',
            filters: [
              {
                filterType: 'PROPERTY',
                operation: {
                  includeObjectsWithNoValueSet: true,
                  operationType: 'BOOL',
                  operator: 'operator',
                  value: true,
                },
                property: 'property',
              },
            ],
          },
        ],
        filterBranchOperator: 'filterBranchOperator',
        filterBranchType: 'OR',
        filters: [
          {
            filterType: 'PROPERTY',
            operation: {
              includeObjectsWithNoValueSet: true,
              operationType: 'BOOL',
              operator: 'operator',
              value: true,
            },
            property: 'property',
          },
        ],
      },
      enrollObjectsInWorkflows: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateListName', async () => {
    const responsePromise = client.crm.lists.updateListName('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateListName: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.updateListName(
        'listId',
        { includeFilters: true, listName: 'listName' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateScheduleConversion: only required params', async () => {
    const responsePromise = client.crm.lists.updateScheduleConversion('listId', {
      conversionType: 'CONVERSION_DATE',
      day: 0,
      month: 0,
      year: 0,
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
  test.skip('updateScheduleConversion: required and optional params', async () => {
    const response = await client.crm.lists.updateScheduleConversion('listId', {
      conversionType: 'CONVERSION_DATE',
      day: 0,
      month: 0,
      year: 0,
    });
  });
});
