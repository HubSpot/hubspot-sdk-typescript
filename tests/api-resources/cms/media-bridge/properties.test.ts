// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.create('objectType', {
      appId: 'appId',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.create('objectType', {
      appId: 'appId',
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
      calculationFormula: 'calculationFormula',
      dataSensitivity: 'non_sensitive',
      description: 'description',
      displayOrder: 0,
      externalOptions: true,
      formField: true,
      hasUniqueValue: true,
      hidden: true,
      options: [
        { displayOrder: 0, hidden: true, label: 'label', value: 'value', description: 'description' },
      ],
      referencedObjectType: 'referencedObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.update('propertyName', {
      appId: 'appId',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.update('propertyName', {
      appId: 'appId',
      objectType: 'objectType',
      calculationFormula: 'calculationFormula',
      description: 'description',
      displayOrder: 0,
      fieldType: 'booleancheckbox',
      formField: true,
      groupName: 'groupName',
      hasUniqueValue: true,
      hidden: true,
      label: 'label',
      options: [
        { displayOrder: 0, hidden: true, label: 'label', value: 'value', description: 'description' },
      ],
      type: 'bool',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.list('objectType', { appId: 'appId' });
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
    const response = await client.cms.mediaBridge.properties.list('objectType', { appId: 'appId' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.delete('propertyName', {
      appId: 'appId',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.delete('propertyName', {
      appId: 'appId',
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('archiveBatch: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.archiveBatch('objectType', {
      appId: 'appId',
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

  // Prism tests are disabled
  test.skip('archiveBatch: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.archiveBatch('objectType', {
      appId: 'appId',
      inputs: [{ name: 'name' }],
    });
  });

  // Prism tests are disabled
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.createBatch('objectType', {
      appId: 'appId',
      inputs: [
        { fieldType: 'booleancheckbox', groupName: 'groupName', label: 'label', name: 'name', type: 'bool' },
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.createBatch('objectType', {
      appId: 'appId',
      inputs: [
        {
          fieldType: 'booleancheckbox',
          groupName: 'groupName',
          label: 'label',
          name: 'name',
          type: 'bool',
          calculationFormula: 'calculationFormula',
          dataSensitivity: 'non_sensitive',
          description: 'description',
          displayOrder: 0,
          externalOptions: true,
          formField: true,
          hasUniqueValue: true,
          hidden: true,
          options: [
            { displayOrder: 0, hidden: true, label: 'label', value: 'value', description: 'description' },
          ],
          referencedObjectType: 'referencedObjectType',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.get('propertyName', {
      appId: 'appId',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.get('propertyName', {
      appId: 'appId',
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.properties.getBatch('objectType', {
      appId: 'appId',
      archived: true,
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

  // Prism tests are disabled
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.cms.mediaBridge.properties.getBatch('objectType', {
      appId: 'appId',
      archived: true,
      inputs: [{ name: 'name' }],
      dataSensitivity: 'non_sensitive',
    });
  });
});
