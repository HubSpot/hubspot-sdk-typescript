// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.properties.batch.create('objectType', {
      inputs: [
        {
          fieldType: 'select',
          groupName: 'contactinformation',
          label: 'My Contact Property',
          name: 'my_contact_property',
          type: 'enumeration',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.properties.batch.create('objectType', {
      inputs: [
        {
          fieldType: 'select',
          groupName: 'contactinformation',
          label: 'My Contact Property',
          name: 'my_contact_property',
          type: 'enumeration',
          calculationFormula: 'calculationFormula',
          dataSensitivity: 'non_sensitive',
          description: 'description',
          displayOrder: 2,
          externalOptions: true,
          formField: true,
          hasUniqueValue: false,
          hidden: false,
          options: [
            {
              displayOrder: 1,
              hidden: false,
              label: 'Option A',
              value: 'A',
              description: 'Choice number one',
            },
            {
              displayOrder: 2,
              hidden: false,
              label: 'Option B',
              value: 'B',
              description: 'Choice number two',
            },
          ],
          referencedObjectType: 'referencedObjectType',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.properties.batch.delete('objectType', {
      inputs: [{ name: 'my_custom_property' }],
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
    const response = await client.crm.properties.batch.delete('objectType', {
      inputs: [{ name: 'my_custom_property' }],
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.crm.properties.batch.read('objectType', {
      archived: true,
      inputs: [{ name: 'my_custom_property' }],
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
  test.skip('read: required and optional params', async () => {
    const response = await client.crm.properties.batch.read('objectType', {
      archived: true,
      inputs: [{ name: 'my_custom_property' }],
      dataSensitivity: 'non_sensitive',
    });
  });
});
