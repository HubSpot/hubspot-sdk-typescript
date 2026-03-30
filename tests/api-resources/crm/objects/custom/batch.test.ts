// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.objects.custom.batch.create('objectType', {
      inputs: [
        {
          associations: [
            {
              to: { id: 'id' },
              types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
            },
          ],
          properties: { foo: 'string' },
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.objects.custom.batch.create('objectType', {
      inputs: [
        {
          associations: [
            {
              to: { id: 'id' },
              types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
            },
          ],
          properties: { foo: 'string' },
          objectWriteTraceId: 'objectWriteTraceId',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.objects.custom.batch.update('objectType', {
      inputs: [
        {
          id: 'id',
          properties: { foo: 'string' },
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

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.objects.custom.batch.update('objectType', {
      inputs: [
        {
          id: 'id',
          properties: { foo: 'string' },
          idProperty: 'my_unique_property_name',
          objectWriteTraceId: 'objectWriteTraceId',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.objects.custom.batch.delete('objectType', {
      inputs: [{ id: '430001' }],
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
    const response = await client.crm.objects.custom.batch.delete('objectType', {
      inputs: [{ id: '430001' }],
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.objects.custom.batch.get('objectType', {
      inputs: [{ id: '430001' }],
      properties: ['string'],
      propertiesWithHistory: ['string'],
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.objects.custom.batch.get('objectType', {
      inputs: [{ id: '430001' }],
      properties: ['string'],
      propertiesWithHistory: ['string'],
      archived: true,
      idProperty: 'idProperty',
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.crm.objects.custom.batch.upsert('objectType', {
      inputs: [
        {
          id: 'id',
          properties: { foo: 'string' },
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

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.crm.objects.custom.batch.upsert('objectType', {
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
