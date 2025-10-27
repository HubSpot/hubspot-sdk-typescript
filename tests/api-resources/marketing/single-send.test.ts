// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource singleSend', () => {
  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.marketing.singleSend.send({ emailId: 0, message: { to: 'to' } });
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
    const response = await client.marketing.singleSend.send({
      emailId: 0,
      message: {
        to: 'to',
        bcc: ['string'],
        cc: ['string'],
        from: 'from',
        replyTo: ['string'],
        sendId: 'sendId',
      },
      contactProperties: {
        '0': '{',
        '1': '"',
        '2': 'l',
        '3': 'a',
        '4': 's',
        '5': 't',
        '6': 'n',
        '7': 'a',
        '8': 'm',
        '9': 'e',
        '10': '"',
        '11': ':',
        '12': '"',
        '13': 'd',
        '14': 'o',
        '15': 'e',
        '16': '"',
        '17': ',',
        '18': '"',
        '19': 'f',
        '20': 'i',
        '21': 'r',
        '22': 's',
        '23': 't',
        '24': 'n',
        '25': 'a',
        '26': 'm',
        '27': 'e',
        '28': '"',
        '29': ':',
        '30': '"',
        '31': 'j',
        '32': 'o',
        '33': 'h',
        '34': 'n',
        '35': '"',
        '36': '}',
      },
      customProperties: {
        '0': {},
        '1': {},
        '2': {},
        '3': {},
        '4': {},
        '5': {},
        '6': {},
        '7': {},
        '8': {},
        '9': {},
        '10': {},
        '11': {},
        '12': {},
        '13': {},
        '14': {},
        '15': {},
        '16': {},
        '17': {},
        '18': {},
        '19': {},
        '20': {},
        '21': {},
        '22': {},
        '23': {},
        '24': {},
        '25': {},
        '26': {},
        '27': {},
        '28': {},
        '29': {},
        '30': {},
        '31': {},
        '32': {},
        '33': {},
        '34': {},
        '35': {},
        '36': {},
        '37': {},
        '38': {},
        '39': {},
        '40': {},
        '41': {},
        '42': {},
        '43': {},
        '44': {},
        '45': {},
        '46': {},
        '47': {},
        '48': {},
        '49': {},
        '50': {},
        '51': {},
        '52': {},
        '53': {},
        '54': {},
      },
    });
  });
});
