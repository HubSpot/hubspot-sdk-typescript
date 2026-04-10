// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Associations } from 'hubspot-sdk/resources/crm/associations/associations';
import { BaseBatch } from 'hubspot-sdk/resources/crm/associations/batch';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBatch],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Associations],
});

const runTests = (client: PartialHubSpot<{ crm: { associations: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.associations.batch.create('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
      toObjectType: 'toObjectType',
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
    const response = await client.crm.associations.batch.create('toObjectId', {
      fromObjectType: 'fromObjectType',
      fromObjectId: 'fromObjectId',
      toObjectType: 'toObjectType',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.associations.batch.delete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: [{ id: 'id' }],
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.associations.batch.delete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: [{ id: 'id' }],
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createDefault: only required params', async () => {
    const responsePromise = client.crm.associations.batch.createDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: { id: 'id' },
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
  test.skip('createDefault: required and optional params', async () => {
    const response = await client.crm.associations.batch.createDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: { id: 'id' },
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('deleteLabels: only required params', async () => {
    const responsePromise = client.crm.associations.batch.deleteLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
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
  test.skip('deleteLabels: required and optional params', async () => {
    const response = await client.crm.associations.batch.deleteLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: 'id' },
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.associations.batch.get('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
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
    const response = await client.crm.associations.batch.get('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id', after: 'after' }],
    });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
