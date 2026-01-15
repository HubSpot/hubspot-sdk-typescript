// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eventDefinitions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.events.eventDefinitions.create({
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.events.eventDefinitions.create({
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
      description: 'description',
      name: 'name',
      primaryObject: 'primaryObject',
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.events.eventDefinitions.update('eventName', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.eventDefinitions.list();
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
      client.events.eventDefinitions.list(
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

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.events.eventDefinitions.delete('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createProperty: only required params', async () => {
    const responsePromise = client.events.eventDefinitions.createProperty('eventName', {
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

  // Prism tests are disabled
  test.skip('createProperty: required and optional params', async () => {
    const response = await client.events.eventDefinitions.createProperty('eventName', {
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

  // Prism tests are disabled
  test.skip('deleteProperty: only required params', async () => {
    const responsePromise = client.events.eventDefinitions.deleteProperty('propertyName', {
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

  // Prism tests are disabled
  test.skip('deleteProperty: required and optional params', async () => {
    const response = await client.events.eventDefinitions.deleteProperty('propertyName', {
      eventName: 'eventName',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.events.eventDefinitions.get('eventName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateProperty: only required params', async () => {
    const responsePromise = client.events.eventDefinitions.updateProperty('propertyName', {
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

  // Prism tests are disabled
  test.skip('updateProperty: required and optional params', async () => {
    const response = await client.events.eventDefinitions.updateProperty('propertyName', {
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
