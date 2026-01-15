// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.timeline.templates.create(0, {
      name: 'PetSpot Registration',
      objectType: 'contacts',
      tokens: [
        {
          label: 'Pet Name',
          name: 'petName',
          type: 'string',
        },
        {
          label: 'Pet Age',
          name: 'petAge',
          type: 'number',
        },
        {
          label: 'Pet Color',
          name: 'petColor',
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
    const response = await client.crm.timeline.templates.create(0, {
      name: 'PetSpot Registration',
      objectType: 'contacts',
      tokens: [
        {
          label: 'Pet Name',
          name: 'petName',
          type: 'string',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'customPropertyPetType',
          options: [
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
        {
          label: 'Pet Age',
          name: 'petAge',
          type: 'number',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'customPropertyPetType',
          options: [
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
        {
          label: 'Pet Color',
          name: 'petColor',
          type: 'enumeration',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'customPropertyPetType',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Black', value: 'black' },
            { label: 'Brown', value: 'brown' },
            { label: 'Other', value: 'other' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
      ],
      detailTemplate:
        'Registration occurred at {{#formatDate timestamp}}{{/formatDate}}\n\n#### Questions\n{{#each extraData.questions}}\n  **{{question}}**: {{answer}}\n{{/each}}',
      headerTemplate: 'Registered for [{{petName}}](https://my.petspot.com/pets/{{petName}})',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.timeline.templates.update('eventTemplateId', {
      appId: 0,
      id: '1001298',
      name: 'PetSpot Registration',
      tokens: [
        {
          label: 'Pet Name',
          name: 'petName',
          type: 'string',
        },
        {
          label: 'Pet Age',
          name: 'petAge',
          type: 'number',
        },
        {
          label: 'Pet Color',
          name: 'petColor',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.timeline.templates.update('eventTemplateId', {
      appId: 0,
      id: '1001298',
      name: 'PetSpot Registration',
      tokens: [
        {
          label: 'Pet Name',
          name: 'petName',
          type: 'string',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'firstname',
          options: [
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
        {
          label: 'Pet Age',
          name: 'petAge',
          type: 'number',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'customPropertyPetType',
          options: [
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
        {
          label: 'Pet Color',
          name: 'petColor',
          type: 'enumeration',
          createdAt: '2020-02-12T20:58:26Z',
          objectPropertyName: 'customPropertyPetType',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Black', value: 'black' },
            { label: 'Brown', value: 'brown' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Other', value: 'other' },
          ],
          updatedAt: '2020-02-12T20:58:26Z',
        },
      ],
      detailTemplate:
        'Registration occurred at {{#formatDate timestamp}}{{/formatDate}}\n\n#### Questions\n{{#each extraData.questions}}\n  **{{question}}**: {{answer}}\n{{/each}}\n\nEDIT',
      headerTemplate: 'Registered for [{{petName}}](https://my.petspot.com/pets/{{petName}})',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.timeline.templates.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.timeline.templates.delete('eventTemplateId', { appId: 0 });
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
    const response = await client.crm.timeline.templates.delete('eventTemplateId', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.timeline.templates.get('eventTemplateId', { appId: 0 });
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
    const response = await client.crm.timeline.templates.get('eventTemplateId', { appId: 0 });
  });
});
