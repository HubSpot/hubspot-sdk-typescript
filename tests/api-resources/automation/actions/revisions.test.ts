// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Actions } from 'hubspot-sdk/resources/automation/actions/actions';
import { BaseRevisions } from 'hubspot-sdk/resources/automation/actions/revisions';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRevisions],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Actions],
});

const runTests = (client: PartialHubSpot<{ automation: { actions: { revisions: BaseRevisions } } }>) => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.automation.actions.revisions.list('definitionId', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.automation.actions.revisions.list('definitionId', {
      appId: 0,
      after: 'after',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.automation.actions.revisions.get('revisionId', {
      appId: 0,
      definitionId: 'definitionId',
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
    const response = await client.automation.actions.revisions.get('revisionId', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });
};
describe('resource revisions', () => runTests(client));
describe('resource revisions (tree shakable, base)', () => runTests(partialClient));
describe('resource revisions (tree shakable, subresource)', () => runTests(parentPartialClient));
