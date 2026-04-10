// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBasic } from '@hubspot/sdk/resources/scheduler/meetings/basic';
import { Meetings } from '@hubspot/sdk/resources/scheduler/meetings/meetings';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseBasic],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Meetings],
});

const runTests = (client: PartialHubSpot<{ scheduler: { meetings: { basic: BaseBasic } } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.scheduler.meetings.basic.list();
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
      client.scheduler.meetings.basic.list(
        {
          after: 'after',
          limit: 0,
          name: 'name',
          organizerUserId: 'organizerUserId',
          type: 'GROUP_CALENDAR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getAvailabilityBySlug: only required params', async () => {
    const responsePromise = client.scheduler.meetings.basic.getAvailabilityBySlug('slug', {
      timezone: 'timezone',
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
  test.skip('getAvailabilityBySlug: required and optional params', async () => {
    const response = await client.scheduler.meetings.basic.getAvailabilityBySlug('slug', {
      timezone: 'timezone',
      monthOffset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getBookingInfoBySlug: only required params', async () => {
    const responsePromise = client.scheduler.meetings.basic.getBookingInfoBySlug('slug', {
      timezone: 'timezone',
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
  test.skip('getBookingInfoBySlug: required and optional params', async () => {
    const response = await client.scheduler.meetings.basic.getBookingInfoBySlug('slug', {
      timezone: 'timezone',
    });
  });
};
describe('resource basic', () => runTests(client));
describe('resource basic (tree shakable, base)', () => runTests(partialClient));
describe('resource basic (tree shakable, subresource)', () => runTests(parentPartialClient));
