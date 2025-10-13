// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource forms', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.forms.create({ FormDefinitionCreateRequestBase: {} });
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
    const response = await client.marketing.forms.create({ FormDefinitionCreateRequestBase: {} });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.marketing.forms.update('formId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.forms.list();
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
      client.marketing.forms.list(
        { after: 'after', archived: true, formTypes: ['hubspot'], limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketing.forms.delete('formId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('read', async () => {
    const responsePromise = client.marketing.forms.read('formId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('read: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.forms.read('formId', { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.marketing.forms.replace('formId', {
      id: 'id',
      archived: true,
      configuration: {
        allowLinkToResetKnownValues: true,
        archivable: true,
        cloneable: true,
        createNewContactForNewEmail: true,
        editable: true,
        language: 'af',
        notifyContactOwner: true,
        notifyRecipients: ['string'],
        postSubmitAction: { type: 'thank_you', value: 'value' },
        prePopulateKnownValues: true,
        recaptchaEnabled: true,
      },
      createdAt: '2019-12-27T18:11:19.117Z',
      displayOptions: {
        renderRawHtml: true,
        style: {
          backgroundWidth: 'backgroundWidth',
          fontFamily: 'fontFamily',
          helpTextColor: 'helpTextColor',
          helpTextSize: 'helpTextSize',
          labelTextColor: 'labelTextColor',
          labelTextSize: 'labelTextSize',
          legalConsentTextColor: 'legalConsentTextColor',
          legalConsentTextSize: 'legalConsentTextSize',
          submitAlignment: 'left',
          submitColor: 'submitColor',
          submitFontColor: 'submitFontColor',
          submitSize: 'submitSize',
        },
        submitButtonText: 'submitButtonText',
        theme: 'default_style',
      },
      fieldGroups: [
        {
          fields: [
            {
              dependentFields: [
                {
                  dependentCondition: {
                    operator: 'eq',
                    rangeEnd: 'rangeEnd',
                    rangeStart: 'rangeStart',
                    value: 'value',
                    values: ['string'],
                  },
                  dependentField: {
                    dependentFields: [],
                    fieldType: 'phone',
                    hidden: true,
                    label: 'label',
                    name: 'name',
                    objectTypeId: 'objectTypeId',
                    required: true,
                    useCountryCodeSelect: true,
                    validation: { maxAllowedDigits: 0, minAllowedDigits: 0 },
                  },
                },
              ],
              fieldType: 'email',
              hidden: true,
              label: 'label',
              name: 'name',
              objectTypeId: 'objectTypeId',
              required: true,
              validation: { blockedEmailDomains: ['string'], useDefaultBlockList: true },
            },
          ],
          groupType: 'default_group',
          richTextType: 'text',
        },
      ],
      formType: 'hubspot',
      legalConsentOptions: { type: 'none' },
      name: 'name',
      updatedAt: '2019-12-27T18:11:19.117Z',
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.marketing.forms.replace('formId', {
      id: 'id',
      archived: true,
      configuration: {
        allowLinkToResetKnownValues: true,
        archivable: true,
        cloneable: true,
        createNewContactForNewEmail: true,
        editable: true,
        language: 'af',
        notifyContactOwner: true,
        notifyRecipients: ['string'],
        postSubmitAction: { type: 'thank_you', value: 'value' },
        prePopulateKnownValues: true,
        recaptchaEnabled: true,
        lifecycleStages: [{ objectTypeId: 'objectTypeId', value: 'value' }],
      },
      createdAt: '2019-12-27T18:11:19.117Z',
      displayOptions: {
        renderRawHtml: true,
        style: {
          backgroundWidth: 'backgroundWidth',
          fontFamily: 'fontFamily',
          helpTextColor: 'helpTextColor',
          helpTextSize: 'helpTextSize',
          labelTextColor: 'labelTextColor',
          labelTextSize: 'labelTextSize',
          legalConsentTextColor: 'legalConsentTextColor',
          legalConsentTextSize: 'legalConsentTextSize',
          submitAlignment: 'left',
          submitColor: 'submitColor',
          submitFontColor: 'submitFontColor',
          submitSize: 'submitSize',
        },
        submitButtonText: 'submitButtonText',
        theme: 'default_style',
        cssClass: 'cssClass',
      },
      fieldGroups: [
        {
          fields: [
            {
              dependentFields: [
                {
                  dependentCondition: {
                    operator: 'eq',
                    rangeEnd: 'rangeEnd',
                    rangeStart: 'rangeStart',
                    value: 'value',
                    values: ['string'],
                  },
                  dependentField: {
                    dependentFields: [],
                    fieldType: 'phone',
                    hidden: true,
                    label: 'label',
                    name: 'name',
                    objectTypeId: 'objectTypeId',
                    required: true,
                    useCountryCodeSelect: true,
                    validation: { maxAllowedDigits: 0, minAllowedDigits: 0 },
                    defaultValue: 'defaultValue',
                    description: 'description',
                    placeholder: 'placeholder',
                  },
                },
              ],
              fieldType: 'email',
              hidden: true,
              label: 'label',
              name: 'name',
              objectTypeId: 'objectTypeId',
              required: true,
              validation: { blockedEmailDomains: ['string'], useDefaultBlockList: true },
              defaultValue: 'defaultValue',
              description: 'description',
              placeholder: 'placeholder',
            },
          ],
          groupType: 'default_group',
          richTextType: 'text',
          richText: 'richText',
        },
      ],
      formType: 'hubspot',
      legalConsentOptions: { type: 'none' },
      name: 'name',
      updatedAt: '2019-12-27T18:11:19.117Z',
      archivedAt: '2019-12-27T18:11:19.117Z',
    });
  });
});
