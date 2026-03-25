// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postalMail', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.objects.postalMail.create({
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
    const response = await client.crm.objects.postalMail.create({
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
    const responsePromise = client.crm.objects.postalMail.update({
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
    const response = await client.crm.objects.postalMail.update({
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
  test.skip('list', async () => {
    const responsePromise = client.crm.objects.postalMail.list();
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
      client.crm.objects.postalMail.list(
        {
          after: 'after',
          archived: true,
          associations: ['string'],
          limit: 0,
          properties: ['string'],
          propertiesWithHistory: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.objects.postalMail.delete({ inputs: [{ id: '430001' }] });
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
    const response = await client.crm.objects.postalMail.delete({ inputs: [{ id: '430001' }] });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.objects.postalMail.get({
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
    const response = await client.crm.objects.postalMail.get({
      inputs: [{ id: '430001' }],
      properties: ['string'],
      propertiesWithHistory: ['string'],
      archived: true,
      idProperty: 'idProperty',
    });
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.crm.objects.postalMail.search({
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
    const response = await client.crm.objects.postalMail.search({
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
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.crm.objects.postalMail.upsert({
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
    const response = await client.crm.objects.postalMail.upsert({
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
