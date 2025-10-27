// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource definitions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.create(0, {
      actionUrl: 'actionUrl',
      functions: [{ functionSource: 'functionSource', functionType: 'PRE_ACTION_EXECUTION' }],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [
              {
                description: '',
                displayOrder: 0,
                doubleData: 0,
                hidden: false,
                label: '',
                readOnly: false,
                value: '',
              },
            ],
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
    const response = await client.automation.actions.definitions.create(0, {
      actionUrl: 'actionUrl',
      functions: [{ functionSource: 'functionSource', functionType: 'PRE_ACTION_EXECUTION', id: 'id' }],
      inputFields: [
        {
          isRequired: true,
          typeDefinition: {
            externalOptions: true,
            name: 'name',
            options: [
              {
                description: '',
                displayOrder: 0,
                doubleData: 0,
                hidden: false,
                label: '',
                readOnly: false,
                value: '',
              },
            ],
            type: 'string',
            description: 'description',
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
            options: [
              {
                description: '',
                displayOrder: 0,
                doubleData: 0,
                hidden: false,
                label: '',
                readOnly: false,
                value: '',
              },
            ],
            type: 'string',
            description: 'description',
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
    const responsePromise = client.automation.actions.definitions.update('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.definitions.update('definitionId', {
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
            options: [
              {
                description: '',
                displayOrder: 0,
                doubleData: 0,
                hidden: false,
                label: '',
                readOnly: false,
                value: '',
              },
            ],
            type: 'string',
            description: 'description',
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
            options: [
              {
                description: '',
                displayOrder: 0,
                doubleData: 0,
                hidden: false,
                label: '',
                readOnly: false,
                value: '',
              },
            ],
            type: 'string',
            description: 'description',
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.automation.actions.definitions.list(
        0,
        { after: 'after', archived: true, limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.automation.actions.definitions.delete('definitionId', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.automation.actions.definitions.read('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.definitions.read('definitionId', {
      appId: 0,
      archived: true,
    });
  });
});
