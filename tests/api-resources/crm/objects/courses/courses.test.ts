// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courses', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.objects.courses.create({
      associations: [
        {
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
      properties: { foo: 'string' },
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
    const response = await client.crm.objects.courses.create({
      associations: [
        {
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
      properties: { foo: 'string' },
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.objects.courses.update('courseId', { properties: { foo: 'string' } });
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
    const response = await client.crm.objects.courses.update('courseId', {
      properties: { foo: 'string' },
      idProperty: 'idProperty',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.objects.courses.list();
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
      client.crm.objects.courses.list(
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
  test.skip('delete', async () => {
    const responsePromise = client.crm.objects.courses.delete('courseId');
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
    const responsePromise = client.crm.objects.courses.get('courseId');
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
      client.crm.objects.courses.get(
        'courseId',
        {
          archived: true,
          associations: ['string'],
          idProperty: 'idProperty',
          properties: ['string'],
          propertiesWithHistory: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.crm.objects.courses.search({
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
    const response = await client.crm.objects.courses.search({
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
});
