// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.automation.v4.actions.retrieve('definitionId', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.automation.v4.actions.retrieve('definitionId', {
      appId: 0,
      archived: true,
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.automation.v4.actions.update('definitionId', { appId: 0 });
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
    const response = await client.automation.v4.actions.update('definitionId', {
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
  test.skip('delete: only required params', async () => {
    const responsePromise = client.automation.v4.actions.delete('definitionId', { appId: 0 });
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
    const response = await client.automation.v4.actions.delete('definitionId', { appId: 0 });
  });
});
