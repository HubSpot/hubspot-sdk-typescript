// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCardsDev } from '@hubspot/sdk/resources/crm/extensions/cards-dev';
import { Extensions } from '@hubspot/sdk/resources/crm/extensions/extensions';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCardsDev],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Extensions],
});

const runTests = (client: PartialHubSpot<{ crm: { extensions: { cardsDev: BaseCardsDev } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.extensions.cardsDev.create(0, {
      actions: { baseUrls: ['string'] },
      display: {
        properties: [
          {
            dataType: 'BOOLEAN',
            label: 'label',
            name: 'name',
            options: [
              {
                label: 'label',
                name: 'name',
                type: 'DANGER',
              },
            ],
          },
        ],
      },
      fetch: {
        cardType: 'EXTERNAL',
        objectTypes: [{ name: 'companies', propertiesToSend: ['string'] }],
        targetUrl: 'targetUrl',
      },
      title: 'title',
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
    const response = await client.crm.extensions.cardsDev.create(0, {
      actions: { baseUrls: ['string'] },
      display: {
        properties: [
          {
            dataType: 'BOOLEAN',
            label: 'label',
            name: 'name',
            options: [
              {
                label: 'label',
                name: 'name',
                type: 'DANGER',
              },
            ],
          },
        ],
      },
      fetch: {
        cardType: 'EXTERNAL',
        objectTypes: [{ name: 'companies', propertiesToSend: ['string'] }],
        targetUrl: 'targetUrl',
        serverlessFunction: 'serverlessFunction',
      },
      title: 'title',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.extensions.cardsDev.update('cardId', { appId: 0 });
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
    const response = await client.crm.extensions.cardsDev.update('cardId', {
      appId: 0,
      actions: { baseUrls: ['string'] },
      display: {
        properties: [
          {
            dataType: 'BOOLEAN',
            label: 'label',
            name: 'name',
            options: [
              {
                label: 'label',
                name: 'name',
                type: 'DANGER',
              },
            ],
          },
        ],
      },
      fetch: {
        objectTypes: [{ name: 'companies', propertiesToSend: ['string'] }],
        cardType: 'EXTERNAL',
        serverlessFunction: 'serverlessFunction',
        targetUrl: 'targetUrl',
      },
      title: 'title',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.extensions.cardsDev.delete('cardId', { appId: 0 });
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
    const response = await client.crm.extensions.cardsDev.delete('cardId', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.extensions.cardsDev.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByID: only required params', async () => {
    const responsePromise = client.crm.extensions.cardsDev.getByID('cardId', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByID: required and optional params', async () => {
    const response = await client.crm.extensions.cardsDev.getByID('cardId', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getSampleResponse', async () => {
    const responsePromise = client.crm.extensions.cardsDev.getSampleResponse();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('migrateViews: only required params', async () => {
    const responsePromise = client.crm.extensions.cardsDev.migrateViews(0, {
      allowDuplicateAppCardIds: true,
      appCardId: 0,
      legacyCrmCardId: 0,
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
  test.skip('migrateViews: required and optional params', async () => {
    const response = await client.crm.extensions.cardsDev.migrateViews(0, {
      allowDuplicateAppCardIds: true,
      appCardId: 0,
      legacyCrmCardId: 0,
      helpdeskAppCardId: 0,
    });
  });
};
describe('resource cardsDev', () => runTests(client));
describe('resource cardsDev (tree shakable, base)', () => runTests(partialClient));
describe('resource cardsDev (tree shakable, subresource)', () => runTests(parentPartialClient));
