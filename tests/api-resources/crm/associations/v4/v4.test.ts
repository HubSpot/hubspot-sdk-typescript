// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v4', () => {
  // Prism tests are disabled
  test.skip('createDefaultAssociation: only required params', async () => {
    const responsePromise = client.crm.associations.v4.createDefaultAssociation('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
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

  // Prism tests are disabled
  test.skip('createDefaultAssociation: required and optional params', async () => {
    const response = await client.crm.associations.v4.createDefaultAssociation('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('deleteAssociation: only required params', async () => {
    const responsePromise = client.crm.associations.v4.deleteAssociation('toObjectId', {
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

  // Prism tests are disabled
  test.skip('deleteAssociation: required and optional params', async () => {
    const response = await client.crm.associations.v4.deleteAssociation('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('listAssociationsByType: only required params', async () => {
    const responsePromise = client.crm.associations.v4.listAssociationsByType('toObjectType', {
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

  // Prism tests are disabled
  test.skip('listAssociationsByType: required and optional params', async () => {
    const response = await client.crm.associations.v4.listAssociationsByType('toObjectType', {
      objectType: 'objectType',
      objectId: 'objectId',
      after: 'after',
      limit: 0,
    });
  });

  // Prism tests are disabled
  test.skip('updateAssociationLabels: only required params', async () => {
    const responsePromise = client.crm.associations.v4.updateAssociationLabels('toObjectId', {
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

  // Prism tests are disabled
  test.skip('updateAssociationLabels: required and optional params', async () => {
    const response = await client.crm.associations.v4.updateAssociationLabels('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
    });
  });
});
