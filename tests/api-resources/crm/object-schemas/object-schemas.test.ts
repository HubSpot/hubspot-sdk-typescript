// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource objectSchemas', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.create({
      allowsSensitiveProperties: true,
      associatedObjects: ['string'],
      labels: {},
      name: 'name',
      properties: [
        {
          fieldType: 'fieldType',
          label: 'label',
          name: 'name',
          type: 'bool',
        },
      ],
      requiredProperties: ['string'],
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
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
    const response = await client.crm.objectSchemas.create({
      allowsSensitiveProperties: true,
      associatedObjects: ['string'],
      labels: { plural: 'plural', singular: 'singular' },
      name: 'name',
      properties: [
        {
          fieldType: 'fieldType',
          label: 'label',
          name: 'name',
          type: 'bool',
          description: 'description',
          displayOrder: 0,
          externalOptionsReferenceType: 'externalOptionsReferenceType',
          formField: true,
          groupName: 'groupName',
          hasUniqueValue: true,
          hidden: true,
          numberDisplayHint: 'currency',
          options: [
            {
              displayOrder: 0,
              hidden: true,
              label: 'label',
              value: 'value',
              description: 'description',
            },
          ],
          optionSortStrategy: 'ALPHABETICAL',
          referencedObjectType: 'referencedObjectType',
          searchableInGlobalSearch: true,
          showCurrencySymbol: true,
          textDisplayHint: 'domain_name',
        },
      ],
      requiredProperties: ['string'],
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
      description: 'description',
      primaryDisplayProperty: 'primaryDisplayProperty',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.update('objectType', { clearDescription: true });
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
    const response = await client.crm.objectSchemas.update('objectType', {
      clearDescription: true,
      allowsSensitiveProperties: true,
      description: 'description',
      labels: { plural: 'plural', singular: 'singular' },
      primaryDisplayProperty: 'primaryDisplayProperty',
      requiredProperties: ['string'],
      restorable: true,
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.objectSchemas.list();
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
      client.crm.objectSchemas.list(
        {
          archived: true,
          includeAssociationDefinitions: true,
          includeAuditMetadata: true,
          includePropertyDefinitions: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.objectSchemas.delete('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.objectSchemas.delete('objectType', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createAssociation: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.createAssociation('objectType', {
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

  // Mock server tests are disabled
  test.skip('createAssociation: required and optional params', async () => {
    const response = await client.crm.objectSchemas.createAssociation('objectType', {
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
      name: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteAssociation: only required params', async () => {
    const responsePromise = client.crm.objectSchemas.deleteAssociation('associationIdentifier', {
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

  // Mock server tests are disabled
  test.skip('deleteAssociation: required and optional params', async () => {
    const response = await client.crm.objectSchemas.deleteAssociation('associationIdentifier', {
      objectType: 'objectType',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.objectSchemas.get('objectType');
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
      client.crm.objectSchemas.get(
        'objectType',
        {
          includeAssociationDefinitions: true,
          includeAuditMetadata: true,
          includePropertyDefinitions: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
});
