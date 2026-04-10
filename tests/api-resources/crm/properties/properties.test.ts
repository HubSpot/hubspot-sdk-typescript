// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.properties.create('objectType', {
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
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
    const response = await client.crm.properties.create('objectType', {
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
      calculationFormula: 'calculationFormula',
      currencyPropertyName: 'currencyPropertyName',
      dataSensitivity: 'highly_sensitive',
      description: 'description',
      displayOrder: 0,
      externalOptions: true,
      formField: true,
      hasUniqueValue: true,
      hidden: true,
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
      referencedObjectType: 'referencedObjectType',
      showCurrencySymbol: true,
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.properties.update('propertyName', { objectType: 'objectType' });
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
    const response = await client.crm.properties.update('propertyName', {
      objectType: 'objectType',
      calculationFormula: 'calculationFormula',
      currencyPropertyName: 'currencyPropertyName',
      description: 'description',
      displayOrder: 0,
      fieldType: 'booleancheckbox',
      formField: true,
      groupName: 'groupName',
      hidden: true,
      label: 'label',
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
      showCurrencySymbol: true,
      type: 'bool',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.properties.list('objectType');
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
      client.crm.properties.list(
        'objectType',
        {
          archived: true,
          dataSensitivity: 'highly_sensitive',
          locale: 'locale',
          properties: 'properties',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.properties.delete('propertyName', { objectType: 'objectType' });
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
    const response = await client.crm.properties.delete('propertyName', { objectType: 'objectType' });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.properties.get('propertyName', { objectType: 'objectType' });
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
    const response = await client.crm.properties.get('propertyName', {
      objectType: 'objectType',
      archived: true,
      dataSensitivity: 'highly_sensitive',
      locale: 'locale',
      properties: 'properties',
    });
  });
});
