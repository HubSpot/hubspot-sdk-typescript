// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemas', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crmObjectSchemas.v3.schemas.create({
      associatedObjects: ['string'],
      labels: {},
      name: 'name',
      properties: [{ fieldType: 'fieldType', label: 'label', name: 'name', type: 'string' }],
      requiredProperties: ['string'],
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
    const response = await client.crmObjectSchemas.v3.schemas.create({
      associatedObjects: ['string'],
      labels: { plural: 'plural', singular: 'singular' },
      name: 'name',
      properties: [
        {
          fieldType: 'fieldType',
          label: 'label',
          name: 'name',
          type: 'string',
          displayOrder: 0,
          formField: true,
          groupName: 'groupName',
          hasUniqueValue: true,
          hidden: true,
          numberDisplayHint: 'unformatted',
          options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
          optionSortStrategy: 'DISPLAY_ORDER',
          referencedObjectType: 'referencedObjectType',
          searchableInGlobalSearch: true,
          showCurrencySymbol: true,
          textDisplayHint: 'unformatted_single_line',
        },
      ],
      requiredProperties: ['string'],
      primaryDisplayProperty: 'primaryDisplayProperty',
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.crmObjectSchemas.v3.schemas.retrieve('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.crmObjectSchemas.v3.schemas.update('objectType', {});
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
    const responsePromise = client.crmObjectSchemas.v3.schemas.list();
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
      client.crmObjectSchemas.v3.schemas.list({ archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crmObjectSchemas.v3.schemas.delete('objectType');
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
      client.crmObjectSchemas.v3.schemas.delete(
        'objectType',
        { archived: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });
});
