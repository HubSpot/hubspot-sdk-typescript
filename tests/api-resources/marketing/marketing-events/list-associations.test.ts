// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseListAssociations } from 'hubspot-sdk/resources/marketing/marketing-events/list-associations';
import { MarketingEvents } from 'hubspot-sdk/resources/marketing/marketing-events/marketing-events';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseListAssociations],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MarketingEvents],
});

const runTests = (
  client: PartialHubSpot<{ marketing: { marketingEvents: { listAssociations: BaseListAssociations } } }>,
) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.list('marketingEventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.delete('listId', {
      marketingEventId: 'marketingEventId',
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
    const response = await client.marketing.marketingEvents.listAssociations.delete('listId', {
      marketingEventId: 'marketingEventId',
    });
  });

  // Mock server tests are disabled
  test.skip('associate: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.associate('listId', {
      marketingEventId: 'marketingEventId',
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
  test.skip('associate: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.listAssociations.associate('listId', {
      marketingEventId: 'marketingEventId',
    });
  });

  // Mock server tests are disabled
  test.skip('associateByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.associateByExternalAccount(
      'listId',
      { externalAccountId: 'externalAccountId', externalEventId: 'externalEventId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('associateByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.listAssociations.associateByExternalAccount(
      'listId',
      { externalAccountId: 'externalAccountId', externalEventId: 'externalEventId' },
    );
  });

  // Mock server tests are disabled
  test.skip('deleteByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.deleteByExternalAccount(
      'listId',
      { externalAccountId: 'externalAccountId', externalEventId: 'externalEventId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.listAssociations.deleteByExternalAccount(
      'listId',
      { externalAccountId: 'externalAccountId', externalEventId: 'externalEventId' },
    );
  });

  // Mock server tests are disabled
  test.skip('listByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.listAssociations.listByExternalAccount(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.listAssociations.listByExternalAccount(
      'externalEventId',
      { externalAccountId: 'externalAccountId' },
    );
  });
};
describe('resource listAssociations', () => runTests(client));
describe('resource listAssociations (tree shakable, base)', () => runTests(partialClient));
describe('resource listAssociations (tree shakable, subresource)', () => runTests(parentPartialClient));
