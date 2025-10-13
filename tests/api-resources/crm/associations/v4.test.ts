// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v4', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.associations.v4.create('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 279 }],
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
    const response = await client.crm.associations.v4.create('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
      body: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 279 }],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.associations.v4.list('toObjectType', {
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
    const response = await client.crm.associations.v4.list('toObjectType', {
      objectType: 'objectType',
      objectId: 'objectId',
      after: 'after',
      limit: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.associations.v4.delete('toObjectId', {
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
    const response = await client.crm.associations.v4.delete('toObjectId', {
      objectType: 'objectType',
      objectId: 'objectId',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('archiveLabels: only required params', async () => {
    const responsePromise = client.crm.associations.v4.archiveLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
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
  test.skip('archiveLabels: required and optional params', async () => {
    const response = await client.crm.associations.v4.archiveLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('createDefault: only required params', async () => {
    const responsePromise = client.crm.associations.v4.createDefault('toObjectId', {
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
    const response = await client.crm.associations.v4.createDefault('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('request', async () => {
    const responsePromise = client.crm.associations.v4.request(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
