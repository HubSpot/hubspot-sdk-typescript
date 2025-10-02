// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.v4.objects.associations.create('toObjectId', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.v4.objects.associations.create('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.v4.objects.associations.list('toObjectType', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.crm.v4.objects.associations.list('toObjectType', {
      objectType: 'objectType',
      objectId: 'objectId',
      after: 'after',
      limit: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.v4.objects.associations.delete('toObjectId', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.v4.objects.associations.delete('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('createDefault: only required params', async () => {
    const responsePromise = client.crm.v4.objects.associations.createDefault('toObjectId', {
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
  test.skip('createDefault: required and optional params', async () => {
    const response = await client.crm.v4.objects.associations.createDefault('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
      toObjectType: 'toObjectType',
    });
  });
});
