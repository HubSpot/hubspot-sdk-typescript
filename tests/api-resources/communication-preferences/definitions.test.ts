// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CommunicationPreferences } from 'hubspot-sdk/resources/communication-preferences/communication-preferences';
import { BaseDefinitions } from 'hubspot-sdk/resources/communication-preferences/definitions';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDefinitions],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CommunicationPreferences],
});

const runTests = (client: PartialHubSpot<{ communicationPreferences: { definitions: BaseDefinitions } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.communicationPreferences.definitions.list();
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
      client.communicationPreferences.definitions.list(
        { businessUnitId: 0, includeTranslations: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });
};
describe('resource definitions', () => runTests(client));
describe('resource definitions (tree shakable, base)', () => runTests(partialClient));
describe('resource definitions (tree shakable, subresource)', () => runTests(parentPartialClient));
