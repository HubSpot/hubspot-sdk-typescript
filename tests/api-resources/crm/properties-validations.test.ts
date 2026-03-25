// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource propertiesValidations', () => {
  // Mock server tests are disabled
  test.skip('getByObjectTypeID', async () => {
    const responsePromise = client.crm.propertiesValidations.getByObjectTypeID('objectTypeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeIDAndPropertyName: only required params', async () => {
    const responsePromise = client.crm.propertiesValidations.getByObjectTypeIDAndPropertyName(
      'propertyName',
      { objectTypeId: 'objectTypeId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeIDAndPropertyName: required and optional params', async () => {
    const response = await client.crm.propertiesValidations.getByObjectTypeIDAndPropertyName('propertyName', {
      objectTypeId: 'objectTypeId',
    });
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeIDPropertyNameAndRuleType: only required params', async () => {
    const responsePromise = client.crm.propertiesValidations.getByObjectTypeIDPropertyNameAndRuleType(
      'AFTER_DATETIME_DURATION',
      { objectTypeId: 'objectTypeId', propertyName: 'propertyName' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByObjectTypeIDPropertyNameAndRuleType: required and optional params', async () => {
    const response = await client.crm.propertiesValidations.getByObjectTypeIDPropertyNameAndRuleType(
      'AFTER_DATETIME_DURATION',
      { objectTypeId: 'objectTypeId', propertyName: 'propertyName' },
    );
  });

  // Mock server tests are disabled
  test.skip('updateByObjectTypeIDPropertyNameAndRuleType: only required params', async () => {
    const responsePromise = client.crm.propertiesValidations.updateByObjectTypeIDPropertyNameAndRuleType(
      'AFTER_DATETIME_DURATION',
      {
        objectTypeId: 'objectTypeId',
        propertyName: 'propertyName',
        ruleArguments: ['string'],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateByObjectTypeIDPropertyNameAndRuleType: required and optional params', async () => {
    const response = await client.crm.propertiesValidations.updateByObjectTypeIDPropertyNameAndRuleType(
      'AFTER_DATETIME_DURATION',
      {
        objectTypeId: 'objectTypeId',
        propertyName: 'propertyName',
        ruleArguments: ['string'],
        shouldApplyNormalization: true,
      },
    );
  });
});
