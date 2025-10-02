// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.crm.v3.properties.retrieve('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.v3.properties.retrieve(
        'objectType',
        { archived: true, properties: 'properties' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubspotSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.v3.properties.update('objectType', {
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.v3.properties.update('objectType', {
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
      calculationFormula: 'calculationFormula',
      dataSensitivity: 'non_sensitive',
      displayOrder: 0,
      externalOptions: true,
      formField: true,
      hasUniqueValue: true,
      hidden: true,
      options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
      referencedObjectType: 'referencedObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.v3.properties.delete('propertyName', { objectType: 'objectType' });
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
    const response = await client.crm.v3.properties.delete('propertyName', { objectType: 'objectType' });
  });
});
