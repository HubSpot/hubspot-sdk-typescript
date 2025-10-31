// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.extensions.cards.create(0, {
      actions: { baseUrls: ['https://www.example.com/hubspot'] },
      display: {
        properties: [
          {
            dataType: 'STRING',
            label: 'Pets Name',
            name: 'pet_name',
            options: [{ label: 'label', name: 'name', type: 'DEFAULT' }],
          },
        ],
      },
      fetch: {
        objectTypes: [{ name: 'contacts', propertiesToSend: ['email', 'firstname'] }],
        targetUrl: 'https://www.example.com/hubspot/target',
      },
      title: 'PetSpot',
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
    const response = await client.crm.extensions.cards.create(0, {
      actions: { baseUrls: ['https://www.example.com/hubspot'] },
      display: {
        properties: [
          {
            dataType: 'STRING',
            label: 'Pets Name',
            name: 'pet_name',
            options: [{ label: 'label', name: 'name', type: 'DEFAULT' }],
          },
        ],
      },
      fetch: {
        objectTypes: [{ name: 'contacts', propertiesToSend: ['email', 'firstname'] }],
        targetUrl: 'https://www.example.com/hubspot/target',
        cardType: 'EXTERNAL',
        serverlessFunction: 'serverlessFunction',
      },
      title: 'PetSpot',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.extensions.cards.update('cardId', { appId: 0 });
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
    const response = await client.crm.extensions.cards.update('cardId', {
      appId: 0,
      actions: { baseUrls: ['https://www.example.com/hubspot'] },
      display: {
        properties: [
          {
            dataType: 'STRING',
            label: 'Pets Name',
            name: 'pet_name',
            options: [{ label: 'label', name: 'name', type: 'DEFAULT' }],
          },
        ],
      },
      fetch: {
        objectTypes: [{ name: 'contacts', propertiesToSend: ['email', 'firstname'] }],
        cardType: 'EXTERNAL',
        serverlessFunction: 'serverlessFunction',
        targetUrl: 'https://www.example.com/hubspot/target',
      },
      title: 'PetSpot',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.extensions.cards.list(0);
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
    const responsePromise = client.crm.extensions.cards.delete('cardId', { appId: 0 });
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
    const response = await client.crm.extensions.cards.delete('cardId', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.extensions.cards.get('cardId', { appId: 0 });
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
    const response = await client.crm.extensions.cards.get('cardId', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('getSampleResponse', async () => {
    const responsePromise = client.crm.extensions.cards.getSampleResponse();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
