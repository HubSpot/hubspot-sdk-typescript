// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.automation.actions.create(0, {
      actionUrl: 'actionUrl',
      functions: [{ functionSource: 'functionSource', functionType: 'POST_ACTION_EXECUTION' }],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            name: 'name',
            options: [{ label: 'label', value: 'value' }],
            type: 'bool',
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.automation.actions.create(0, {
      actionUrl: 'actionUrl',
      functions: [
        {
          functionSource: 'functionSource',
          functionType: 'POST_ACTION_EXECUTION',
          id: 'id',
        },
      ],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            name: 'name',
            options: [
              {
                label: 'label',
                value: 'value',
                description: 'description',
                displayOrder: 0,
              },
            ],
            type: 'bool',
            description: 'description',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'OWNER',
          },
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
      executionRules: [
        {
          conditions: { foo: {} },
          labelName: 'labelName',
        },
      ],
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
            options: [
              {
                description: 'description',
                displayOrder: 0,
                doubleData: 0,
                hidden: true,
                label: 'label',
                readOnly: true,
                value: 'value',
              },
            ],
            schema: {
              type: 'INTEGER',
              maximum: 0,
              minimum: 0,
            },
            type: 'bool',
            useChirp: true,
            description: 'description',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'ABANDONED_CART',
          },
        },
      ],
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.automation.actions.update('definitionId', {
      appId: 0,
      actionUrl: 'actionUrl',
      executionRules: [
        {
          conditions: { foo: {} },
          labelName: 'labelName',
        },
      ],
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
            name: 'name',
            options: [
              {
                label: 'label',
                value: 'value',
                description: 'description',
                displayOrder: 0,
              },
            ],
            type: 'bool',
            description: 'description',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'OWNER',
          },
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
            options: [
              {
                description: 'description',
                displayOrder: 0,
                doubleData: 0,
                hidden: true,
                label: 'label',
                readOnly: true,
                value: 'value',
              },
            ],
            schema: {
              type: 'INTEGER',
              maximum: 0,
              minimum: 0,
            },
            type: 'bool',
            useChirp: true,
            description: 'description',
            externalOptionsReferenceType: 'externalOptionsReferenceType',
            fieldType: 'booleancheckbox',
            helpText: 'helpText',
            label: 'label',
            optionsUrl: 'optionsUrl',
            referencedObjectType: 'ABANDONED_CART',
          },
        },
      ],
      published: true,
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.automation.actions.list('definitionId', {
      appId: 0,
      after: 'after',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.automation.actions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'POST_ACTION_EXECUTION',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.automation.actions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'POST_ACTION_EXECUTION',
    });
  });

  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.automation.actions.complete('callbackId', {
      outputFields: { foo: 'string' },
      typedOutputs: {},
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
  test.skip('complete: required and optional params', async () => {
    const response = await client.automation.actions.complete('callbackId', {
      outputFields: { foo: 'string' },
      typedOutputs: {},
      failureReasonType: 'failureReasonType',
      requestContext: {
        source: 'WORKFLOWS',
        workflowId: 0,
        actionExecutionIndexIdentifier: { actionExecutionIndex: 0, enrollmentId: 0 },
        actionId: 0,
      },
    });
  });

  // Mock server tests are disabled
  test.skip('completeBatch: only required params', async () => {
    const responsePromise = client.automation.actions.completeBatch({
      inputs: [
        {
          callbackId: 'callbackId',
          outputFields: { foo: 'string' },
          typedOutputs: {},
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
  test.skip('completeBatch: required and optional params', async () => {
    const response = await client.automation.actions.completeBatch({
      inputs: [
        {
          callbackId: 'callbackId',
          outputFields: { foo: 'string' },
          typedOutputs: {},
          failureReasonType: 'failureReasonType',
          requestContext: {
            source: 'WORKFLOWS',
            workflowId: 0,
            actionExecutionIndexIdentifier: { actionExecutionIndex: 0, enrollmentId: 0 },
            actionId: 0,
          },
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createOrReplace: only required params', async () => {
    const responsePromise = client.automation.actions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'POST_ACTION_EXECUTION',
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

  // Mock server tests are disabled
  test.skip('createOrReplace: required and optional params', async () => {
    const response = await client.automation.actions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'POST_ACTION_EXECUTION',
      body: 'body',
    });
  });

  // Mock server tests are disabled
  test.skip('createOrReplaceByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.createOrReplaceByFunctionType('POST_ACTION_EXECUTION', {
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

  // Mock server tests are disabled
  test.skip('createOrReplaceByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.createOrReplaceByFunctionType('POST_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
      body: 'body',
    });
  });

  // Mock server tests are disabled
  test.skip('createRequiresObject: only required params', async () => {
    const responsePromise = client.automation.actions.createRequiresObject('definitionId', {
      appId: 0,
      requiresObject: true,
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
  test.skip('createRequiresObject: required and optional params', async () => {
    const response = await client.automation.actions.createRequiresObject('definitionId', {
      appId: 0,
      requiresObject: true,
    });
  });

  // Mock server tests are disabled
  test.skip('deleteByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.deleteByFunctionType('POST_ACTION_EXECUTION', {
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

  // Mock server tests are disabled
  test.skip('deleteByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.deleteByFunctionType('POST_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.automation.actions.get('revisionId', {
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

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.automation.actions.get('revisionId', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Mock server tests are disabled
  test.skip('getByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.getByFunctionType('POST_ACTION_EXECUTION', {
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

  // Mock server tests are disabled
  test.skip('getByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.getByFunctionType('POST_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Mock server tests are disabled
  test.skip('getRequiresObject: only required params', async () => {
    const responsePromise = client.automation.actions.getRequiresObject('definitionId', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRequiresObject: required and optional params', async () => {
    const response = await client.automation.actions.getRequiresObject('definitionId', { appId: 0 });
  });
});
