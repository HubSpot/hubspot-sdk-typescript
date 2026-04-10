// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseIPRanges } from '@hubspot/sdk/resources/meta/origins/ip-ranges';
import { Origins } from '@hubspot/sdk/resources/meta/origins/origins';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseIPRanges],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Origins],
});

const runTests = (client: PartialHubSpot<{ meta: { origins: { ipRanges: BaseIPRanges } } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.meta.origins.ipRanges.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meta.origins.ipRanges.list(
        { direction: ['INGRESS'], service: ['EMAIL'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listSimple', async () => {
    const responsePromise = client.meta.origins.ipRanges.listSimple();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSimple: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meta.origins.ipRanges.listSimple(
        { direction: ['INGRESS'], service: ['EMAIL'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
};
describe('resource ipRanges', () => runTests(client));
describe('resource ipRanges (tree shakable, base)', () => runTests(partialClient));
describe('resource ipRanges (tree shakable, subresource)', () => runTests(parentPartialClient));
