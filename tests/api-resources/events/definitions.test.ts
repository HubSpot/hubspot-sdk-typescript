// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource definitions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.events.definitions.create({
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
  test.skip('create: required and optional params', async () => {
    const response = await client.events.definitions.create({
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
  test.skip('update', async () => {
    const responsePromise = client.events.definitions.update('eventName', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.definitions.list();
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
      client.events.definitions.list(
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
  test.skip('delete', async () => {
    const responsePromise = client.events.definitions.delete('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createProperty: only required params', async () => {
    const responsePromise = client.events.definitions.createProperty('eventName', {
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
  test.skip('createProperty: required and optional params', async () => {
    const response = await client.events.definitions.createProperty('eventName', {
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
  test.skip('deleteProperty: only required params', async () => {
    const responsePromise = client.events.definitions.deleteProperty('propertyName', {
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
  test.skip('deleteProperty: required and optional params', async () => {
    const response = await client.events.definitions.deleteProperty('propertyName', {
      eventName: 'eventName',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.events.definitions.get('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('sendBatch: only required params', async () => {
    const responsePromise = client.events.definitions.sendBatch({
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
  test.skip('sendBatch: required and optional params', async () => {
    const response = await client.events.definitions.sendBatch({
      inputs: [
        {
          eventName: 'eventName',
          properties: { foo: 'string' },
          email: 'email',
          objectId: 'objectId',
          occurredAt: '2019-12-27T18:11:19.117Z',
          utk: 'utk',
          uuid: 'uuid',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('updateProperty: only required params', async () => {
    const responsePromise = client.events.definitions.updateProperty('propertyName', {
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
  test.skip('updateProperty: required and optional params', async () => {
    const response = await client.events.definitions.updateProperty('propertyName', {
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
