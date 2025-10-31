// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lists', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.lists.create({
      name: 'Dynamic Association List Example',
      objectTypeId: '0-1',
      processingType: 'DYNAMIC',
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
    const response = await client.crm.lists.create({
      name: 'Dynamic Association List Example',
      objectTypeId: '0-1',
      processingType: 'DYNAMIC',
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
                      operator: 'IS_EQUAL_TO',
                      value: true,
                    },
                    property: 'hs_is_closed_won',
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
                  operator: 'IS_EQUAL_TO',
                  value: true,
                },
                property: 'firstname',
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.list(
        { includeFilters: true, listIds: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.get('listId', { includeFilters: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('getByObjectTypeIDAndName: required and optional params', async () => {
    const response = await client.crm.lists.getByObjectTypeIDAndName('listName', {
      objectTypeId: 'objectTypeId',
      includeFilters: true,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('scheduleConversion: only required params', async () => {
    const responsePromise = client.crm.lists.scheduleConversion('listId', {
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

  // Prism tests are disabled
  test.skip('scheduleConversion: required and optional params', async () => {
    const response = await client.crm.lists.scheduleConversion('listId', {
      conversionType: 'CONVERSION_DATE',
      day: 0,
      month: 0,
      year: 0,
    });
  });

  // Prism tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.crm.lists.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateFilters: only required params', async () => {
    const responsePromise = client.crm.lists.updateFilters('listId', {
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
                  operator: 'IS_GREATER_THAN_OR_EQUAL_TO',
                  value: true,
                },
                property: 'hs_predictivecontactscore_v2',
              },
              {
                filterType: 'PROPERTY',
                operation: {
                  includeObjectsWithNoValueSet: true,
                  operationType: 'BOOL',
                  operator: 'IS_UNKNOWN',
                  value: true,
                },
                property: 'engagements_last_meeting_booked_source',
              },
              {
                acceptedStatuses: ['OPT_IN'],
                filterType: 'EMAIL_SUBSCRIPTION',
                subscriptionIds: ['81537745', '321981152'],
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

  // Prism tests are disabled
  test.skip('updateFilters: required and optional params', async () => {
    const response = await client.crm.lists.updateFilters('listId', {
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
                  operator: 'IS_GREATER_THAN_OR_EQUAL_TO',
                  value: true,
                },
                property: 'hs_predictivecontactscore_v2',
              },
              {
                filterType: 'PROPERTY',
                operation: {
                  includeObjectsWithNoValueSet: true,
                  operationType: 'BOOL',
                  operator: 'IS_UNKNOWN',
                  value: true,
                },
                property: 'engagements_last_meeting_booked_source',
              },
              {
                acceptedStatuses: ['OPT_IN'],
                filterType: 'EMAIL_SUBSCRIPTION',
                subscriptionIds: ['81537745', '321981152'],
                subscriptionType: 'subscriptionType',
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

  // Prism tests are disabled
  test.skip('updateName', async () => {
    const responsePromise = client.crm.lists.updateName('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateName: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.updateName(
        'listId',
        { includeFilters: true, listName: 'listName' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});
