// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource timeline', () => {
  // Mock server tests are disabled
  test.skip('createEvent: only required params', async () => {
    const responsePromise = client.crm.timeline.createEvent({
      id: 'id',
      eventTypeName: 'eventTypeName',
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
  test.skip('createEvent: required and optional params', async () => {
    const response = await client.crm.timeline.createEvent({
      id: 'id',
      eventTypeName: 'eventTypeName',
      properties: { foo: 'string' },
      domain: 'domain',
      email: 'email',
      extraData: {},
      objectId: 'objectId',
      objectTypeFullyQualifiedName: 'objectTypeFullyQualifiedName',
      timelineIFrame: {
        headerLabel: 'headerLabel',
        height: 0,
        linkLabel: 'linkLabel',
        url: 'url',
        width: 0,
      },
      timestamp: '2019-12-27T18:11:19.117Z',
      utk: 'utk',
    });
  });

  // Mock server tests are disabled
  test.skip('createProjectType: only required params', async () => {
    const responsePromise = client.crm.timeline.createProjectType({
      developerSymbol: 'developerSymbol',
      projectName: 'projectName',
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
  test.skip('createProjectType: required and optional params', async () => {
    const response = await client.crm.timeline.createProjectType({
      developerSymbol: 'developerSymbol',
      projectName: 'projectName',
    });
  });
});
