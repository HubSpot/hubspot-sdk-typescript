// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Crm } from '@hubspot/sdk/resources/crm/crm';
import { BaseExports } from '@hubspot/sdk/resources/crm/exports';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseExports],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Crm],
});

const runTests = (client: PartialHubSpot<{ crm: { exports: BaseExports } }>) => {
  // Mock server tests are disabled
  test.skip('createAsync: only required params', async () => {
    const responsePromise = client.crm.exports.createAsync({
      associatedObjectType: ['string'],
      exportInternalValuesOptions: ['NAMES'],
      exportName: 'exportName',
      exportType: 'VIEW',
      format: 'CSV',
      includeLabeledAssociations: true,
      includePrimaryDisplayPropertyForAssociatedObjects: true,
      language: 'AF_ZA',
      objectProperties: ['string'],
      objectType: 'objectType',
      overrideAssociatedObjectsPerDefinitionPerRowLimit: true,
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
  test.skip('createAsync: required and optional params', async () => {
    const response = await client.crm.exports.createAsync({
      associatedObjectType: ['string'],
      exportInternalValuesOptions: ['NAMES'],
      exportName: 'exportName',
      exportType: 'VIEW',
      format: 'CSV',
      includeLabeledAssociations: true,
      includePrimaryDisplayPropertyForAssociatedObjects: true,
      language: 'AF_ZA',
      objectProperties: ['string'],
      objectType: 'objectType',
      overrideAssociatedObjectsPerDefinitionPerRowLimit: true,
      publicCrmSearchRequest: {
        filterGroups: [
          {
            filters: [
              {
                operator: 'BETWEEN',
                propertyName: 'propertyName',
                highValue: 'highValue',
                value: 'value',
                values: ['string'],
              },
            ],
          },
        ],
        filters: [
          {
            operator: 'BETWEEN',
            propertyName: 'propertyName',
            highValue: 'highValue',
            value: 'value',
            values: ['string'],
          },
        ],
        sorts: ['string'],
        query: 'query',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.exports.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.crm.exports.getStatus(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource exports', () => runTests(client));
describe('resource exports (tree shakable, base)', () => runTests(partialClient));
describe('resource exports (tree shakable, subresource)', () => runTests(parentPartialClient));
