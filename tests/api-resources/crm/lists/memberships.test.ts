// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memberships', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.lists.memberships.list('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.memberships.list(
        'listId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.crm.lists.memberships.add('listId', { body: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.crm.lists.memberships.add('listId', { body: ['string'] });
  });

  // Prism tests are disabled
  test.skip('addAllFromList: only required params', async () => {
    const responsePromise = client.crm.lists.memberships.addAllFromList('sourceListId', { listId: 'listId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addAllFromList: required and optional params', async () => {
    const response = await client.crm.lists.memberships.addAllFromList('sourceListId', { listId: 'listId' });
  });

  // Prism tests are disabled
  test.skip('addAndRemove: only required params', async () => {
    const responsePromise = client.crm.lists.memberships.addAndRemove('listId', {
      recordIdsToAdd: ['123', '456', '789'],
      recordIdsToRemove: ['654'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addAndRemove: required and optional params', async () => {
    const response = await client.crm.lists.memberships.addAndRemove('listId', {
      recordIdsToAdd: ['123', '456', '789'],
      recordIdsToRemove: ['654'],
    });
  });

  // Prism tests are disabled
  test.skip('getLists: only required params', async () => {
    const responsePromise = client.crm.lists.memberships.getLists('recordId', {
      objectTypeId: 'objectTypeId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getLists: required and optional params', async () => {
    const response = await client.crm.lists.memberships.getLists('recordId', {
      objectTypeId: 'objectTypeId',
    });
  });

  // Prism tests are disabled
  test.skip('getPageOrderedByAddedToListDate', async () => {
    const responsePromise = client.crm.lists.memberships.getPageOrderedByAddedToListDate('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPageOrderedByAddedToListDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.crm.lists.memberships.getPageOrderedByAddedToListDate(
        'listId',
        { after: 'after', before: 'before', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.crm.lists.memberships.remove('listId', { body: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.crm.lists.memberships.remove('listId', { body: ['string'] });
  });

  // Prism tests are disabled
  test.skip('removeAll', async () => {
    const responsePromise = client.crm.lists.memberships.removeAll('listId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
