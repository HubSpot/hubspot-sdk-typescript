// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.associations.update('associationType', {
      partnerServiceId: 'partnerServiceId',
      toObjectType: 'toObjectType',
      toObjectId: 'toObjectId',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.objects.partnerServices.associations.update('associationType', {
      partnerServiceId: 'partnerServiceId',
      toObjectType: 'toObjectType',
      toObjectId: 'toObjectId',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.associations.list('toObjectType', {
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

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.crm.objects.partnerServices.associations.list('toObjectType', {
      partnerServiceId: 'partnerServiceId',
      after: 'after',
      includeFA: true,
      limit: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.objects.partnerServices.associations.delete('associationType', {
      partnerServiceId: 'partnerServiceId',
      toObjectType: 'toObjectType',
      toObjectId: 'toObjectId',
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
    const response = await client.crm.objects.partnerServices.associations.delete('associationType', {
      partnerServiceId: 'partnerServiceId',
      toObjectType: 'toObjectType',
      toObjectId: 'toObjectId',
    });
  });
});
