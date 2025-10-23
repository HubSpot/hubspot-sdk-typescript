// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource send', () => {
  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.events.send.send({ eventName: 'pe123456_account_login' });
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
      eventName: 'pe123456_account_login',
      email: 'mark.s@lumon.industries',
      objectId: '089274502',
      occurredAt: '2019-12-27T18:11:19.117Z',
      properties: {
        '0': '{',
        '1': '"',
        '2': 'h',
        '3': 's',
        '4': '_',
        '5': 'p',
        '6': 'a',
        '7': 'g',
        '8': 'e',
        '9': '_',
        '10': 'i',
        '11': 'd',
        '12': '"',
        '13': ':',
        '14': '"',
        '15': '1',
        '16': '2',
        '17': '3',
        '18': '4',
        '19': '5',
        '20': '6',
        '21': '7',
        '22': '8',
        '23': '9',
        '24': '0',
        '25': '"',
        '26': ',',
        '27': '"',
        '28': 'h',
        '29': 's',
        '30': '_',
        '31': 'e',
        '32': 'l',
        '33': 'e',
        '34': 'm',
        '35': 'e',
        '36': 'n',
        '37': 't',
        '38': '_',
        '39': 'i',
        '40': 'd',
        '41': '"',
        '42': ':',
        '43': '"',
        '44': 'l',
        '45': 'o',
        '46': 'g',
        '47': 'i',
        '48': 'n',
        '49': '-',
        '50': 'b',
        '51': 'u',
        '52': 't',
        '53': 't',
        '54': 'o',
        '55': 'n',
        '56': '"',
        '57': ',',
        '58': '"',
        '59': 'h',
        '60': 's',
        '61': '_',
        '62': 'p',
        '63': 'a',
        '64': 'g',
        '65': 'e',
        '66': '_',
        '67': 't',
        '68': 'i',
        '69': 't',
        '70': 'l',
        '71': 'e',
        '72': '"',
        '73': ':',
        '74': '"',
        '75': 'h',
        '76': 'o',
        '77': 'm',
        '78': 'e',
        '79': 'p',
        '80': 'a',
        '81': 'g',
        '82': 'e',
        '83': '"',
        '84': '}',
      },
      utk: 'utk',
      uuid: 'uuid',
    });
  });

  // Prism tests are disabled
  test.skip('sendBatch: only required params', async () => {
    const responsePromise = client.events.send.sendBatch({
      inputs: [{ eventName: 'pe123456_account_login' }],
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
          eventName: 'pe123456_account_login',
          email: 'mark.s@lumon.industries',
          objectId: '089274502',
          occurredAt: '2019-12-27T18:11:19.117Z',
          properties: {
            '0': '{',
            '1': '"',
            '2': 'h',
            '3': 's',
            '4': '_',
            '5': 'p',
            '6': 'a',
            '7': 'g',
            '8': 'e',
            '9': '_',
            '10': 'i',
            '11': 'd',
            '12': '"',
            '13': ':',
            '14': '"',
            '15': '1',
            '16': '2',
            '17': '3',
            '18': '4',
            '19': '5',
            '20': '6',
            '21': '7',
            '22': '8',
            '23': '9',
            '24': '0',
            '25': '"',
            '26': ',',
            '27': '"',
            '28': 'h',
            '29': 's',
            '30': '_',
            '31': 'e',
            '32': 'l',
            '33': 'e',
            '34': 'm',
            '35': 'e',
            '36': 'n',
            '37': 't',
            '38': '_',
            '39': 'i',
            '40': 'd',
            '41': '"',
            '42': ':',
            '43': '"',
            '44': 'l',
            '45': 'o',
            '46': 'g',
            '47': 'i',
            '48': 'n',
            '49': '-',
            '50': 'b',
            '51': 'u',
            '52': 't',
            '53': 't',
            '54': 'o',
            '55': 'n',
            '56': '"',
            '57': ',',
            '58': '"',
            '59': 'h',
            '60': 's',
            '61': '_',
            '62': 'p',
            '63': 'a',
            '64': 'g',
            '65': 'e',
            '66': '_',
            '67': 't',
            '68': 'i',
            '69': 't',
            '70': 'l',
            '71': 'e',
            '72': '"',
            '73': ':',
            '74': '"',
            '75': 'h',
            '76': 'o',
            '77': 'm',
            '78': 'e',
            '79': 'p',
            '80': 'a',
            '81': 'g',
            '82': 'e',
            '83': '"',
            '84': '}',
          },
          utk: 'utk',
          uuid: 'uuid',
        },
      ],
    });
  });
});
