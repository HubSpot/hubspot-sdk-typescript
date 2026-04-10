// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.associations.list('toObjectType', {
      objectType: 'objectType',
      objectId: 'objectId',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.crm.associations.list('toObjectType', {
      objectType: 'objectType',
      objectId: 'objectId',
      after: 'after',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.associations.delete('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.associations.delete('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
    });
  });

  // Mock server tests are disabled
  test.skip('requestHighUsageReport', async () => {
    const responsePromise = client.crm.associations.requestHighUsageReport(0);
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
    const responsePromise = client.crm.associations.search('objectType', {
      after: 'after',
      filterGroups: [{ filters: [{ operator: 'BETWEEN', propertyName: 'propertyName' }] }],
      limit: 0,
      properties: ['string'],
      sorts: ['string'],
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
    const response = await client.crm.associations.search('objectType', {
      after: 'after',
      filterGroups: [
        {
          filters: [
            {
              operator: 'BETWEEN',
              propertyName: 'propertyName',
              highValue: 'highValue',
              value: 'value',
              values: ['string'],
            },
          ],
        },
      ],
      limit: 0,
      properties: ['string'],
      sorts: ['string'],
      query: 'query',
    });
  });

  // Mock server tests are disabled
  test.skip('updateAssociationLabels: only required params', async () => {
    const responsePromise = client.crm.associations.updateAssociationLabels('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
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
  test.skip('updateAssociationLabels: required and optional params', async () => {
    const response = await client.crm.associations.updateAssociationLabels('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
    });
  });
});
