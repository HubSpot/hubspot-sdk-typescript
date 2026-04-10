// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Crm } from 'hubspot-sdk/resources/crm/crm';
import { BaseLimits } from 'hubspot-sdk/resources/crm/limits';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseLimits],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Crm],
});

const runTests = (client: PartialHubSpot<{ crm: { limits: BaseLimits } }>) => {
  // Mock server tests are disabled
  test.skip('getAssociationLabelLimits', async () => {
    const responsePromise = client.crm.limits.getAssociationLabelLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAssociationLabelLimits: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.limits.getAssociationLabelLimits(
        { fromObjectTypeId: 'fromObjectTypeId', toObjectTypeId: 'toObjectTypeId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getAssociationRecordsLimitsByObjectType: only required params', async () => {
    const responsePromise = client.crm.limits.getAssociationRecordsLimitsByObjectType('toObjectTypeId', {
      fromObjectTypeId: 'fromObjectTypeId',
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
  test.skip('getAssociationRecordsLimitsByObjectType: required and optional params', async () => {
    const response = await client.crm.limits.getAssociationRecordsLimitsByObjectType('toObjectTypeId', {
      fromObjectTypeId: 'fromObjectTypeId',
    });
  });

  // Mock server tests are disabled
  test.skip('getAssociationRecordsLimitsFromObjects', async () => {
    const responsePromise = client.crm.limits.getAssociationRecordsLimitsFromObjects();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAssociationRecordsLimitsToObjects', async () => {
    const responsePromise = client.crm.limits.getAssociationRecordsLimitsToObjects('fromObjectTypeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCalculatedPropertyLimits', async () => {
    const responsePromise = client.crm.limits.getCalculatedPropertyLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCustomObjectTypeLimits', async () => {
    const responsePromise = client.crm.limits.getCustomObjectTypeLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCustomPropertyLimits', async () => {
    const responsePromise = client.crm.limits.getCustomPropertyLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPipelineLimits', async () => {
    const responsePromise = client.crm.limits.getPipelineLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRecordLimits', async () => {
    const responsePromise = client.crm.limits.getRecordLimits();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource limits', () => runTests(client));
describe('resource limits (tree shakable, base)', () => runTests(partialClient));
describe('resource limits (tree shakable, subresource)', () => runTests(parentPartialClient));
