// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Extensions } from 'hubspot-sdk/resources/crm/extensions/extensions';
import { BaseVideoConferencing } from 'hubspot-sdk/resources/crm/extensions/video-conferencing';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseVideoConferencing],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Extensions],
});

const runTests = (
  client: PartialHubSpot<{ crm: { extensions: { videoConferencing: BaseVideoConferencing } } }>,
) => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.update(0, {
      createMeetingUrl: 'createMeetingUrl',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.extensions.videoConferencing.update(0, {
      createMeetingUrl: 'createMeetingUrl',
      deleteMeetingUrl: 'deleteMeetingUrl',
      fetchAccountsUri: 'fetchAccountsUri',
      updateMeetingUrl: 'updateMeetingUrl',
      userVerifyUrl: 'userVerifyUrl',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.crm.extensions.videoConferencing.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource videoConferencing', () => runTests(client));
describe('resource videoConferencing (tree shakable, base)', () => runTests(partialClient));
describe('resource videoConferencing (tree shakable, subresource)', () => runTests(parentPartialClient));
