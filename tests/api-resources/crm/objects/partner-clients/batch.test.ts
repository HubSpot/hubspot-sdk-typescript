// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('batchGet: only required params', async () => {
    const responsePromise = client.crm.objects.partnerClients.batch.batchGet({
      inputs: [{ id: 'id' }],
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

  // Prism tests are disabled
  test.skip('batchGet: required and optional params', async () => {
    const response = await client.crm.objects.partnerClients.batch.batchGet({
      inputs: [{ id: 'id' }],
      properties: ['string'],
      propertiesWithHistory: ['string'],
      archived: true,
      idProperty: 'idProperty',
    });
  });

  // Prism tests are disabled
  test.skip('batchUpdate: only required params', async () => {
    const responsePromise = client.crm.objects.partnerClients.batch.batchUpdate({
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
  test.skip('batchUpdate: required and optional params', async () => {
    const response = await client.crm.objects.partnerClients.batch.batchUpdate({
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
});
