// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBatch } from 'hubspot-sdk/resources/crm/timeline/batch';
import { Timeline } from 'hubspot-sdk/resources/crm/timeline/timeline';

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
  resources: [Timeline],
});

const runTests = (client: PartialHubSpot<{ crm: { timeline: { batch: BaseBatch } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.timeline.batch.create({
      inputs: [
        {
          id: 'id',
          eventTypeName: 'eventTypeName',
          properties: { foo: 'string' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.timeline.batch.create({
      inputs: [
        {
          id: 'id',
          eventTypeName: 'eventTypeName',
          properties: { foo: 'string' },
          domain: 'domain',
          email: 'email',
          extraData: {},
          objectId: 'objectId',
          objectTypeFullyQualifiedName: 'objectTypeFullyQualifiedName',
          timelineIFrame: {
            headerLabel: 'headerLabel',
            height: 0,
            linkLabel: 'linkLabel',
            url: 'url',
            width: 0,
          },
          timestamp: '2019-12-27T18:11:19.117Z',
          utk: 'utk',
        },
      ],
    });
  });
};
describe('resource batch', () => runTests(client));
describe('resource batch (tree shakable, base)', () => runTests(partialClient));
describe('resource batch (tree shakable, subresource)', () => runTests(parentPartialClient));
