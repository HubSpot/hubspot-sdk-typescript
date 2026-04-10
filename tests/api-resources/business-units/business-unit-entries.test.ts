// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBusinessUnitEntries } from '@hubspot/sdk/resources/business-units/business-unit-entries';
import { BusinessUnits } from '@hubspot/sdk/resources/business-units/business-units';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBusinessUnitEntries],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BusinessUnits],
});

const runTests = (
  client: PartialHubSpot<{ businessUnits: { businessUnitEntries: BaseBusinessUnitEntries } }>,
) => {
  // Mock server tests are disabled
  test.skip('getByUserID', async () => {
    const responsePromise = client.businessUnits.businessUnitEntries.getByUserID('userId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByUserID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.businessUnits.businessUnitEntries.getByUserID(
        'userId',
        { name: ['string'], properties: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
};
describe('resource businessUnitEntries', () => runTests(client));
describe('resource businessUnitEntries (tree shakable, base)', () => runTests(partialClient));
describe('resource businessUnitEntries (tree shakable, subresource)', () => runTests(parentPartialClient));
