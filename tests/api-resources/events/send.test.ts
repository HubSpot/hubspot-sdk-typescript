// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource send', () => {
  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.events.send.send({
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

  // Prism tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.events.send.send({
      eventName: 'eventName',
      properties: { foo: 'string' },
      email: 'email',
      objectId: 'objectId',
      occurredAt: '2019-12-27T18:11:19.117Z',
      utk: 'utk',
      uuid: 'uuid',
    });
  });

  // Prism tests are disabled
  test.skip('sendBatch: only required params', async () => {
    const responsePromise = client.events.send.sendBatch({
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

  // Prism tests are disabled
  test.skip('sendBatch: required and optional params', async () => {
    const response = await client.events.send.sendBatch({
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
});
