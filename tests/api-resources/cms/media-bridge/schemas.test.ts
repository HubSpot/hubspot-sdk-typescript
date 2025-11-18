// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemas', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.schemas.update('objectType', { appId: 0 });
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
    const response = await client.cms.mediaBridge.schemas.update('objectType', {
      appId: 0,
      clearDescription: true,
      description: 'description',
      labels: { plural: 'plural', singular: 'singular' },
      primaryDisplayProperty: 'my_object_property',
      requiredProperties: ['my_object_property'],
      restorable: true,
      searchableProperties: ['my_object_property'],
      secondaryDisplayProperties: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.mediaBridge.schemas.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.schemas.list(0, { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createAssociation: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.schemas.createAssociation('objectType', {
      appId: 0,
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
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
  test.skip('createAssociation: required and optional params', async () => {
    const response = await client.cms.mediaBridge.schemas.createAssociation('objectType', {
      appId: 0,
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('deleteAssociation: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.schemas.deleteAssociation('associationId', {
      appId: 0,
      objectType: 'objectType',
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
    const response = await client.cms.mediaBridge.schemas.deleteAssociation('associationId', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.schemas.get('objectType', { appId: 0 });
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
    const response = await client.cms.mediaBridge.schemas.get('objectType', { appId: 0 });
  });
});
