// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.automation.actions.create(0, {
      actionUrl: 'actionUrl',
      functions: [{ functionSource: 'functionSource', functionType: 'PRE_ACTION_EXECUTION' }],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [{ hidden: true, label: 'label', value: 'value' }],
            type: 'string',
          },
        },
      ],
      labels: { foo: { actionName: 'actionName' } },
      objectTypes: ['string'],
      published: true,
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
    const response = await client.automation.actions.create(0, {
      actionUrl: 'actionUrl',
      functions: [{ functionSource: 'functionSource', functionType: 'PRE_ACTION_EXECUTION', id: 'id' }],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
            type: 'string',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'CONTACT',
          },
          automationFieldType: 'automationFieldType',
          supportedValueTypes: ['STATIC_VALUE'],
        },
      ],
      labels: {
        foo: {
          actionName: 'actionName',
          actionCardContent: 'actionCardContent',
          actionDescription: 'actionDescription',
          appDisplayName: 'appDisplayName',
          executionRules: { foo: 'string' },
          inputFieldDescriptions: { foo: 'string' },
          inputFieldLabels: { foo: 'string' },
          inputFieldOptionLabels: { foo: { foo: 'string' } },
          outputFieldLabels: { foo: 'string' },
        },
      },
      objectTypes: ['string'],
      published: true,
      archivedAt: 0,
      executionRules: [{ conditions: { foo: {} }, labelName: 'labelName' }],
      inputFieldDependencies: [
        {
          controllingFieldName: 'controllingFieldName',
          dependencyType: 'SINGLE_FIELD',
          dependentFieldNames: ['string'],
        },
      ],
      objectRequestOptions: { properties: ['string'] },
      outputFields: [
        {
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
            type: 'string',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'CONTACT',
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.automation.actions.update('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.update('definitionId', {
      appId: 0,
      actionUrl: 'actionUrl',
      executionRules: [{ conditions: { foo: {} }, labelName: 'labelName' }],
      inputFieldDependencies: [
        {
          controllingFieldName: 'controllingFieldName',
          dependencyType: 'SINGLE_FIELD',
          dependentFieldNames: ['string'],
        },
      ],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
            type: 'string',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'CONTACT',
          },
          automationFieldType: 'automationFieldType',
          supportedValueTypes: ['STATIC_VALUE'],
        },
      ],
      labels: {
        foo: {
          actionName: 'actionName',
          actionCardContent: 'actionCardContent',
          actionDescription: 'actionDescription',
          appDisplayName: 'appDisplayName',
          executionRules: { foo: 'string' },
          inputFieldDescriptions: { foo: 'string' },
          inputFieldLabels: { foo: 'string' },
          inputFieldOptionLabels: { foo: { foo: 'string' } },
          outputFieldLabels: { foo: 'string' },
        },
      },
      objectRequestOptions: { properties: ['string'] },
      objectTypes: ['string'],
      outputFields: [
        {
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [{ hidden: true, label: 'label', value: 'value', displayOrder: 0 }],
            type: 'string',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'CONTACT',
          },
        },
      ],
      published: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.automation.actions.list('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.list('definitionId', {
      appId: 0,
      after: 'after',
      limit: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.automation.actions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
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
    const response = await client.automation.actions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
    });
  });

  // Prism tests are disabled
  test.skip('archiveByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.archiveByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
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
  test.skip('archiveByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.archiveByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Prism tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.automation.actions.complete('callbackId', {
      outputFields: { foo: 'string' },
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
  test.skip('complete: required and optional params', async () => {
    const response = await client.automation.actions.complete('callbackId', {
      outputFields: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('completeBatch: only required params', async () => {
    const responsePromise = client.automation.actions.completeBatch({
      inputs: [{ callbackId: 'callbackId', outputFields: { foo: 'string' } }],
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
  test.skip('completeBatch: required and optional params', async () => {
    const response = await client.automation.actions.completeBatch({
      inputs: [{ callbackId: 'callbackId', outputFields: { foo: 'string' } }],
    });
  });

  // Prism tests are disabled
  test.skip('createOrReplace: only required params', async () => {
    const responsePromise = client.automation.actions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
      body: 'body',
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
  test.skip('createOrReplace: required and optional params', async () => {
    const response = await client.automation.actions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
      body: 'body',
    });
  });

  // Prism tests are disabled
  test.skip('createOrReplaceByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.createOrReplaceByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
      body: 'body',
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
  test.skip('createOrReplaceByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.createOrReplaceByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
      body: 'body',
    });
  });

  // Prism tests are disabled
  test.skip('getByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.getByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
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
  test.skip('getByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.getByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.automation.actions.read('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
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
    const response = await client.automation.actions.read('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
    });
  });
});
