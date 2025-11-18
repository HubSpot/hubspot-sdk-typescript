// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.create('toObjectType', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.create('toObjectType', {
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
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.delete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: [{ id: '37295' }] }],
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
    const response = await client.crm.associations.v4.batch.delete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: [{ id: '37295' }] }],
    });
  });

  // Prism tests are disabled
  test.skip('createDefault: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.createDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: { id: '37295' } }],
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
    const response = await client.crm.associations.v4.batch.createDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: { id: '37295' } }],
    });
  });

  // Prism tests are disabled
  test.skip('deleteLabels: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.deleteLabels('toObjectType', {
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
  test.skip('deleteLabels: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.deleteLabels('toObjectType', {
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
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.get('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.get('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id', after: 'after' }],
    });
  });

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.upsert('objectType', {
      inputs: [{ id: 'id', properties: { foo: 'string' } }],
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.upsert('objectType', {
      inputs: [
        {
          id: 'id',
          properties: { foo: 'string' },
          idProperty: 'idProperty',
          objectWriteTraceId: 'objectWriteTraceId',
        },
      ],
    });
  });
});
