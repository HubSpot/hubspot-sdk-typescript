// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketingEvents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.create({
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
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
    const response = await client.marketing.marketingEvents.create({
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
      customProperties: [
        {
          name: '',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          value: '',
          dataSensitivity: 'none',
          isEncrypted: false,
          isLargeValue: true,
          persistenceTimestamp: 0,
          requestId: '',
          selectedByUser: false,
          selectedByUserTimestamp: 0,
          source: 'UNKNOWN',
          sourceId: '',
          sourceLabel: '',
          sourceMetadata: '',
          sourceVid: [0],
          timestamp: 0,
          unit: '',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
        },
      ],
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventCompleted: true,
      eventDescription: 'eventDescription',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.update('objectId', {
      customProperties: [{ name: '', sourceUpstreamDeployable: 'sourceUpstreamDeployable', value: '' }],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.update('objectId', {
      customProperties: [
        {
          name: '',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          value: '',
          dataSensitivity: 'none',
          isEncrypted: false,
          isLargeValue: true,
          persistenceTimestamp: 0,
          requestId: '',
          selectedByUser: false,
          selectedByUserTimestamp: 0,
          source: 'UNKNOWN',
          sourceId: '',
          sourceLabel: '',
          sourceMetadata: '',
          sourceVid: [0],
          timestamp: 0,
          unit: '',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
        },
      ],
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventDescription: 'eventDescription',
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.marketingEvents.list();
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
      client.marketing.marketingEvents.list(
        { after: 'after', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketing.marketingEvents.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancelByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.cancelByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
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
  test.skip('cancelByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.cancelByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });

  // Prism tests are disabled
  test.skip('completeByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.completeByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
      endDateTime: '2019-12-27T18:11:19.117Z',
      startDateTime: '2019-12-27T18:11:19.117Z',
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
  test.skip('completeByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.completeByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
      endDateTime: '2019-12-27T18:11:19.117Z',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('deleteBatch: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.deleteBatch({
      inputs: [{ objectId: 'objectId' }],
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
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.deleteBatch({
      inputs: [{ objectId: 'objectId' }],
    });
  });

  test('deleteBatchByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.deleteBatchByExternalEventID({
      inputs: [{ appId: 0, externalAccountId: 'externalAccountId', externalEventId: 'externalEventId' }],
    });
  });

  // Prism tests are disabled
  test.skip('deleteByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.deleteByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
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
  test.skip('deleteByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.deleteByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.marketing.marketingEvents.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.getByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
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
  test.skip('getByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.getByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });

  // Prism tests are disabled
  test.skip('searchByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.searchByExternalEventID({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.searchByExternalEventID({ q: 'q' });
  });

  // Prism tests are disabled
  test.skip('searchIdentifiersByExternalEventID', async () => {
    const responsePromise =
      client.marketing.marketingEvents.searchIdentifiersByExternalEventID('externalEventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.updateBatch({
      inputs: [
        {
          customProperties: [{ name: '', sourceUpstreamDeployable: 'sourceUpstreamDeployable', value: '' }],
          objectId: 'objectId',
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
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.updateBatch({
      inputs: [
        {
          customProperties: [
            {
              name: '',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              value: '',
              dataSensitivity: 'none',
              isEncrypted: false,
              isLargeValue: true,
              persistenceTimestamp: 0,
              requestId: '',
              selectedByUser: false,
              selectedByUserTimestamp: 0,
              source: 'UNKNOWN',
              sourceId: '',
              sourceLabel: '',
              sourceMetadata: '',
              sourceVid: [0],
              timestamp: 0,
              unit: '',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
            },
          ],
          objectId: 'objectId',
          endDateTime: '2019-12-27T18:11:19.117Z',
          eventCancelled: true,
          eventDescription: 'eventDescription',
          eventName: 'eventName',
          eventOrganizer: 'eventOrganizer',
          eventType: 'eventType',
          eventUrl: 'eventUrl',
          startDateTime: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.updateByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
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
  test.skip('updateByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.updateByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
      customProperties: [
        {
          name: '',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          value: '',
          dataSensitivity: 'none',
          isEncrypted: false,
          isLargeValue: true,
          persistenceTimestamp: 0,
          requestId: '',
          selectedByUser: false,
          selectedByUserTimestamp: 0,
          source: 'UNKNOWN',
          sourceId: '',
          sourceLabel: '',
          sourceMetadata: '',
          sourceVid: [0],
          timestamp: 0,
          unit: '',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
        },
      ],
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventCompleted: true,
      eventDescription: 'eventDescription',
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('upsertBatch: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.upsertBatch({
      inputs: [
        {
          eventName: 'eventName',
          eventOrganizer: 'eventOrganizer',
          externalAccountId: 'externalAccountId',
          externalEventId: 'externalEventId',
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
  test.skip('upsertBatch: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.upsertBatch({
      inputs: [
        {
          eventName: 'eventName',
          eventOrganizer: 'eventOrganizer',
          externalAccountId: 'externalAccountId',
          externalEventId: 'externalEventId',
          customProperties: [
            {
              name: '',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              value: '',
              dataSensitivity: 'none',
              isEncrypted: false,
              isLargeValue: true,
              persistenceTimestamp: 0,
              requestId: '',
              selectedByUser: false,
              selectedByUserTimestamp: 0,
              source: 'UNKNOWN',
              sourceId: '',
              sourceLabel: '',
              sourceMetadata: '',
              sourceVid: [0],
              timestamp: 0,
              unit: '',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
            },
          ],
          endDateTime: '2019-12-27T18:11:19.117Z',
          eventCancelled: true,
          eventCompleted: true,
          eventDescription: 'eventDescription',
          eventType: 'eventType',
          eventUrl: 'eventUrl',
          startDateTime: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('upsertByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.upsertByExternalEventID('externalEventId', {
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      body_externalEventId: 'externalEventId',
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
  test.skip('upsertByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.upsertByExternalEventID('externalEventId', {
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      body_externalEventId: 'externalEventId',
      customProperties: [
        {
          name: '',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          value: '',
          dataSensitivity: 'none',
          isEncrypted: false,
          isLargeValue: true,
          persistenceTimestamp: 0,
          requestId: '',
          selectedByUser: false,
          selectedByUserTimestamp: 0,
          source: 'UNKNOWN',
          sourceId: '',
          sourceLabel: '',
          sourceMetadata: '',
          sourceVid: [0],
          timestamp: 0,
          unit: '',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
        },
      ],
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventCompleted: true,
      eventDescription: 'eventDescription',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('upsertSubscriberStateByEmail: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.upsertSubscriberStateByEmail('subscriberState', {
      externalEventId: 'externalEventId',
      externalAccountId: 'externalAccountId',
      inputs: [
        {
          email: 'email',
          interactionDateTime: 0,
          contactProperties: { foo: 'string' },
          properties: { foo: 'string' },
        },
      ],
    });
  });

  test('upsertSubscriberStateByID: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.upsertSubscriberStateByID('subscriberState', {
      externalEventId: 'externalEventId',
      externalAccountId: 'externalAccountId',
      inputs: [{ interactionDateTime: 0, properties: { foo: 'string' }, vid: 0 }],
    });
  });
});
