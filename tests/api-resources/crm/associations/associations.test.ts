// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Mock server tests are disabled
  test.skip('deleteAssociations: only required params', async () => {
    const responsePromise = client.crm.associations.deleteAssociations('toObjectId', {
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
  test.skip('deleteAssociations: required and optional params', async () => {
    const response = await client.crm.associations.deleteAssociations('toObjectId', {
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
