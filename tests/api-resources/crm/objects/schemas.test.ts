// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemas', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.objects.schemas.create({
      associatedObjects: ['CONTACT'],
      labels: {},
      name: 'my_object',
      properties: [
        {
          fieldType: 'select',
          label: 'My object property',
          name: 'my_object_property',
          type: 'enumeration',
        },
      ],
      requiredProperties: ['my_object_property'],
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
    const response = await client.crm.objects.schemas.create({
      associatedObjects: ['CONTACT'],
      labels: { plural: 'My objects', singular: 'My object' },
      name: 'my_object',
      properties: [
        {
          fieldType: 'select',
          label: 'My object property',
          name: 'my_object_property',
          type: 'enumeration',
          description: 'description',
          displayOrder: 2,
          formField: true,
          groupName: 'my_object_information',
          hasUniqueValue: false,
          hidden: true,
          numberDisplayHint: 'currency',
          options: [
            {
              displayOrder: 1,
              hidden: true,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
            },
            {
              displayOrder: 2,
              hidden: true,
              label: 'Option B',
              value: 'B',
              description: 'Choice number two',
            },
          ],
          optionSortStrategy: 'ALPHABETICAL',
          referencedObjectType: 'referencedObjectType',
          searchableInGlobalSearch: true,
          showCurrencySymbol: true,
          textDisplayHint: 'domain_name',
        },
      ],
      requiredProperties: ['my_object_property'],
      description: 'description',
      primaryDisplayProperty: 'my_object_property',
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.crm.objects.schemas.update('objectType', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.objects.schemas.list();
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
      client.crm.objects.schemas.list({ archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.objects.schemas.delete('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.objects.schemas.delete(
        'objectType',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createAssociation: only required params', async () => {
    const responsePromise = client.crm.objects.schemas.createAssociation('objectType', {
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
    const response = await client.crm.objects.schemas.createAssociation('objectType', {
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('deleteAssociation: only required params', async () => {
    const responsePromise = client.crm.objects.schemas.deleteAssociation('associationIdentifier', {
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
    const response = await client.crm.objects.schemas.deleteAssociation('associationIdentifier', {
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.objects.schemas.get('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
