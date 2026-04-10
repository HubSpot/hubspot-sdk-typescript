// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource definitions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.create(0, {
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
    const response = await client.automation.actions.definitions.create(0, {
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
    const responsePromise = client.automation.actions.definitions.update('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.definitions.update('definitionId', {
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
  test.skip('list', async () => {
    const responsePromise = client.automation.actions.definitions.list(0);
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
      client.automation.actions.definitions.list(
        0,
        {
          after: 'after',
          archived: true,
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.delete('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.definitions.delete('definitionId', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('createRequiresObject: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.createRequiresObject('definitionId', {
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
    const response = await client.automation.actions.definitions.createRequiresObject('definitionId', {
      appId: 0,
      requiresObject: true,
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.get('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.definitions.get('definitionId', {
      appId: 0,
      archived: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getRequiresObject: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.getRequiresObject('definitionId', {
      appId: 0,
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
  test.skip('getRequiresObject: required and optional params', async () => {
    const response = await client.automation.actions.definitions.getRequiresObject('definitionId', {
      appId: 0,
    });
  });
});
