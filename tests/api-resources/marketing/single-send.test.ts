// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource singleSend', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.singleSend.create({
      contactProperties: { foo: 'string' },
      customProperties: { foo: {} },
      emailId: 0,
      message: {
        bcc: ['string'],
        cc: ['string'],
        replyTo: ['string'],
      },
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
    const response = await client.marketing.singleSend.create({
      contactProperties: { foo: 'string' },
      customProperties: { foo: {} },
      emailId: 0,
      message: {
        bcc: ['string'],
        cc: ['string'],
        replyTo: ['string'],
        from: 'from',
        sendId: 'sendId',
        to: 'to',
      },
    });
  });
});
