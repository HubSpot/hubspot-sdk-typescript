// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource send', () => {
  // Mock server tests are disabled
  test.skip('createEventDefinition: only required params', async () => {
    const responsePromise = client.events.send.createEventDefinition({
      includeDefaultProperties: true,
      label: 'label',
      propertyDefinitions: [{ label: 'label', type: 'type' }],
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
  test.skip('createEventDefinition: required and optional params', async () => {
    const response = await client.events.send.createEventDefinition({
      includeDefaultProperties: true,
      label: 'label',
      propertyDefinitions: [
        {
          label: 'label',
          type: 'type',
          description: 'description',
          name: 'name',
          options: [
            {
              displayOrder: 0,
              hidden: true,
              label: 'label',
              value: 'value',
              description: 'description',
            },
          ],
        },
      ],
      customMatchingId: {
        primaryObjectRule: {
          eventPropertyName: 'eventPropertyName',
          targetObjectPropertyName: 'targetObjectPropertyName',
        },
      },
      description: 'description',
      name: 'name',
      primaryObject: 'primaryObject',
    });
  });

  // Mock server tests are disabled
  test.skip('createEventDefinitionProperty: only required params', async () => {
    const responsePromise = client.events.send.createEventDefinitionProperty('eventName', {
      label: 'label',
      type: 'type',
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
  test.skip('createEventDefinitionProperty: required and optional params', async () => {
    const response = await client.events.send.createEventDefinitionProperty('eventName', {
      label: 'label',
      type: 'type',
      description: 'description',
      name: 'name',
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('deleteEventDefinition', async () => {
    const responsePromise = client.events.send.deleteEventDefinition('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteEventDefinitionProperty: only required params', async () => {
    const responsePromise = client.events.send.deleteEventDefinitionProperty('propertyName', {
      eventName: 'eventName',
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
  test.skip('deleteEventDefinitionProperty: required and optional params', async () => {
    const response = await client.events.send.deleteEventDefinitionProperty('propertyName', {
      eventName: 'eventName',
    });
  });

  // Mock server tests are disabled
  test.skip('getEventDefinition', async () => {
    const responsePromise = client.events.send.getEventDefinition('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEventDefinitions', async () => {
    const responsePromise = client.events.send.listEventDefinitions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEventDefinitions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.send.listEventDefinitions(
        {
          after: 'after',
          includeProperties: true,
          limit: 0,
          searchString: 'searchString',
          sortOrder: 'sortOrder',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('sendEvent: only required params', async () => {
    const responsePromise = client.events.send.sendEvent({
      eventName: 'eventName',
      properties: { foo: 'string' },
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
  test.skip('sendEvent: required and optional params', async () => {
    const response = await client.events.send.sendEvent({
      eventName: 'eventName',
      properties: { foo: 'string' },
      email: 'email',
      objectId: 'objectId',
      occurredAt: '2026-01-20T21:14:16.512Z',
      utk: 'utk',
      uuid: 'uuid',
    });
  });

  // Mock server tests are disabled
  test.skip('sendEventBatch: only required params', async () => {
    const responsePromise = client.events.send.sendEventBatch({
      inputs: [
        {
          eventName: 'eventName',
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
  test.skip('sendEventBatch: required and optional params', async () => {
    const response = await client.events.send.sendEventBatch({
      inputs: [
        {
          eventName: 'eventName',
          properties: { foo: 'string' },
          email: 'email',
          objectId: 'objectId',
          occurredAt: '2026-01-20T21:14:16.512Z',
          utk: 'utk',
          uuid: 'uuid',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('updateEventDefinition', async () => {
    const responsePromise = client.events.send.updateEventDefinition('eventName', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateEventDefinitionProperty: only required params', async () => {
    const responsePromise = client.events.send.updateEventDefinitionProperty('propertyName', {
      eventName: 'eventName',
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
  test.skip('updateEventDefinitionProperty: required and optional params', async () => {
    const response = await client.events.send.updateEventDefinitionProperty('propertyName', {
      eventName: 'eventName',
      description: 'description',
      label: 'label',
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
    });
  });
});
