// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attendance', () => {
  // Mock server tests are disabled
  test.skip('createByEventIDAndContactID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByEventIDAndContactID(
      'subscriberState',
      {
        objectId: 'objectId',
        inputs: [
          {
            interactionDateTime: 0,
            properties: { foo: 'string' },
            vid: 0,
          },
        ],
      },
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
  test.skip('createByEventIDAndContactID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByEventIDAndContactID(
      'subscriberState',
      {
        objectId: 'objectId',
        inputs: [
          {
            interactionDateTime: 0,
            properties: { foo: 'string' },
            vid: 0,
          },
        ],
      },
    );
  });

  // Mock server tests are disabled
  test.skip('createByEventIDAndEmail: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByEventIDAndEmail(
      'subscriberState',
      {
        objectId: 'objectId',
        inputs: [
          {
            contactProperties: { foo: 'string' },
            email: 'email',
            interactionDateTime: 0,
            properties: { foo: 'string' },
          },
        ],
      },
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
  test.skip('createByEventIDAndEmail: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByEventIDAndEmail(
      'subscriberState',
      {
        objectId: 'objectId',
        inputs: [
          {
            contactProperties: { foo: 'string' },
            email: 'email',
            interactionDateTime: 0,
            properties: { foo: 'string' },
          },
        ],
      },
    );
  });

  // Mock server tests are disabled
  test.skip('createByExternalEventIDAndContactID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByExternalEventIDAndContactID(
      'subscriberState',
      {
        externalEventId: 'externalEventId',
        inputs: [
          {
            interactionDateTime: 0,
            properties: { foo: 'string' },
            vid: 0,
          },
        ],
      },
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
  test.skip('createByExternalEventIDAndContactID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByExternalEventIDAndContactID(
      'subscriberState',
      {
        externalEventId: 'externalEventId',
        inputs: [
          {
            interactionDateTime: 0,
            properties: { foo: 'string' },
            vid: 0,
          },
        ],
        externalAccountId: 'externalAccountId',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('createByExternalEventIDAndEmail: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.attendance.createByExternalEventIDAndEmail(
      'subscriberState',
      {
        externalEventId: 'externalEventId',
        inputs: [
          {
            contactProperties: { foo: 'string' },
            email: 'email',
            interactionDateTime: 0,
            properties: { foo: 'string' },
          },
        ],
      },
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
  test.skip('createByExternalEventIDAndEmail: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.attendance.createByExternalEventIDAndEmail(
      'subscriberState',
      {
        externalEventId: 'externalEventId',
        inputs: [
          {
            contactProperties: { foo: 'string' },
            email: 'email',
            interactionDateTime: 0,
            properties: { foo: 'string' },
          },
        ],
        externalAccountId: 'externalAccountId',
      },
    );
  });
});
