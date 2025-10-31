// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.timeline.events.create({
      eventTemplateId: '1001298',
      tokens: { petAge: 'string', petColor: 'black', petName: 'Art3mis' },
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
    const response = await client.crm.timeline.events.create({
      eventTemplateId: '1001298',
      tokens: { petAge: 'string', petColor: 'black', petName: 'Art3mis' },
      id: 'id',
      domain: 'domain',
      email: 'art3mis-pup@petspot.com',
      extraData: {
        questions: [
          { answer: 'Bark!', question: "Who's a good girl?" },
          { answer: 'Woof!', question: 'Do you wanna go on a walk?' },
        ],
      },
      objectId: 'objectId',
      timelineIFrame: {
        headerLabel: 'Art3mis dog',
        height: 400,
        linkLabel: 'View Art3mis',
        url: 'https://my.petspot.com/pets/Art3mis',
        width: 600,
      },
      timestamp: '2019-12-27T18:11:19.117Z',
      utk: 'utk',
    });
  });

  // Prism tests are disabled
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.crm.timeline.events.batchCreate({
      inputs: [
        { eventTemplateId: '1001298', tokens: { petAge: 'string', petColor: 'black', petName: 'Art3mis' } },
        { eventTemplateId: '1001298', tokens: { petAge: 'string', petColor: 'yellow', petName: 'Pocket' } },
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
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.crm.timeline.events.batchCreate({
      inputs: [
        {
          eventTemplateId: '1001298',
          tokens: { petAge: 'string', petColor: 'black', petName: 'Art3mis' },
          id: 'id',
          domain: 'domain',
          email: 'art3mis-pup@petspot.com',
          extraData: {
            questions: [
              { answer: 'Bark!', question: "Who's a good girl?" },
              { answer: 'Woof!', question: 'Do you wanna go on a walk?' },
            ],
          },
          objectId: 'objectId',
          timelineIFrame: {
            headerLabel: 'Art3mis dog',
            height: 400,
            linkLabel: 'View Art3mis',
            url: 'https://my.petspot.com/pets/Art3mis',
            width: 600,
          },
          timestamp: '2019-12-27T18:11:19.117Z',
          utk: 'utk',
        },
        {
          eventTemplateId: '1001298',
          tokens: { petAge: 'string', petColor: 'yellow', petName: 'Pocket' },
          id: 'id',
          domain: 'domain',
          email: 'pocket-tiger@petspot.com',
          extraData: {
            questions: [
              { answer: 'Purr...', question: "Who's a good kitty?" },
              { answer: 'Meow!', question: 'Will you stop playing with that?' },
            ],
          },
          objectId: 'objectId',
          timelineIFrame: {
            headerLabel: 'Pocket Tiger',
            height: 400,
            linkLabel: 'View Pocket',
            url: 'https://my.petspot.com/pets/Pocket',
            width: 600,
          },
          timestamp: '2019-12-27T18:11:19.117Z',
          utk: 'utk',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.timeline.events.get('eventId', { eventTemplateId: 'eventTemplateId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.timeline.events.get('eventId', { eventTemplateId: 'eventTemplateId' });
  });

  // Prism tests are disabled
  test.skip('getDetail: only required params', async () => {
    const responsePromise = client.crm.timeline.events.getDetail('eventId', {
      eventTemplateId: 'eventTemplateId',
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
  test.skip('getDetail: required and optional params', async () => {
    const response = await client.crm.timeline.events.getDetail('eventId', {
      eventTemplateId: 'eventTemplateId',
    });
  });
});
