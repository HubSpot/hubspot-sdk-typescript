// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associations', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.events.associations.list('marketingEventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.marketing.events.associations.delete('listId', {
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.marketing.events.associations.delete('listId', {
      marketingEventId: 'marketingEventId',
    });
  });

  // Prism tests are disabled
  test.skip('associate: only required params', async () => {
    const responsePromise = client.marketing.events.associations.associate('listId', {
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

  // Prism tests are disabled
  test.skip('associate: required and optional params', async () => {
    const response = await client.marketing.events.associations.associate('listId', {
      marketingEventId: 'marketingEventId',
    });
  });

  // Prism tests are disabled
  test.skip('associateByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.events.associations.associateByExternalAccount('listId', {
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
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
  test.skip('associateByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.events.associations.associateByExternalAccount('listId', {
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
    });
  });

  // Prism tests are disabled
  test.skip('deleteByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.events.associations.deleteByExternalAccount('listId', {
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
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
  test.skip('deleteByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.events.associations.deleteByExternalAccount('listId', {
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
    });
  });

  // Prism tests are disabled
  test.skip('listByExternalAccount: only required params', async () => {
    const responsePromise = client.marketing.events.associations.listByExternalAccount('externalEventId', {
      externalAccountId: 'externalAccountId',
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
  test.skip('listByExternalAccount: required and optional params', async () => {
    const response = await client.marketing.events.associations.listByExternalAccount('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });
});
