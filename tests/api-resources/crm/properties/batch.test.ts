// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.properties.batch.create('objectType', {
      inputs: [
        {
          fieldType: 'booleancheckbox',
          groupName: 'groupName',
          label: 'label',
          name: 'name',
          type: 'bool',
        },
      ],
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
    const response = await client.crm.properties.batch.create('objectType', {
      inputs: [
        {
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
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.properties.batch.delete('objectType', { inputs: [{ name: 'name' }] });
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
    const response = await client.crm.properties.batch.delete('objectType', { inputs: [{ name: 'name' }] });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.properties.batch.get('objectType', {
      archived: true,
      dataSensitivity: 'highly_sensitive',
      inputs: [{ name: 'name' }],
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.properties.batch.get('objectType', {
      archived: true,
      dataSensitivity: 'highly_sensitive',
      inputs: [{ name: 'name' }],
      locale: 'locale',
    });
  });
});
