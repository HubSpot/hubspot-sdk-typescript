// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource partnerServices', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.update('partnerServiceId', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.objects.partnerServices.update('partnerServiceId', {
      properties: { foo: 'string' },
      idProperty: 'idProperty',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.list('toObjectType', {
      partnerServiceId: 'partnerServiceId',
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
    const response = await client.crm.objects.partnerServices.list('toObjectType', {
      partnerServiceId: 'partnerServiceId',
      after: 'after',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.objects.partnerServices.get('partnerServiceId');
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
      client.crm.objects.partnerServices.get(
        'partnerServiceId',
        {
          archived: true,
          associations: ['string'],
          idProperty: 'idProperty',
          properties: ['string'],
          propertiesWithHistory: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.search({
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
    const response = await client.crm.objects.partnerServices.search({
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
