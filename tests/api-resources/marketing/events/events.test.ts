// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.events.create({
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
        },
      ],
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.marketing.events.create({
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
        },
      ],
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventCompleted: true,
      eventDescription: 'eventDescription',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketing.events.update('objectId', {
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.marketing.events.update('objectId', {
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
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

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.events.list();
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
      client.marketing.events.list({ after: 'after', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketing.events.delete('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.marketing.events.deleteBatch({ inputs: [{ objectId: 'objectId' }] });
  });

  // Mock server tests are disabled
  test.skip('deleteBatchByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.deleteBatchByExternalEventID({
      inputs: [
        {
          appId: 0,
          externalAccountId: 'externalAccountId',
          externalEventId: 'externalEventId',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('deleteByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.events.deleteByExternalEventID('externalEventId', {
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

  // Mock server tests are disabled
  test.skip('deleteByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.deleteByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.marketing.events.get('objectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.events.getByExternalEventID('externalEventId', {
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

  // Mock server tests are disabled
  test.skip('getByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.getByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
    });
  });

  // Mock server tests are disabled
  test.skip('searchByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.events.searchByExternalEventID({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.searchByExternalEventID({ q: 'q' });
  });

  // Mock server tests are disabled
  test.skip('searchIdentifiersByExternalEventID', async () => {
    const responsePromise = client.marketing.events.searchIdentifiersByExternalEventID('externalEventId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateBatch: only required params', async () => {
    const responsePromise = client.marketing.events.updateBatch({
      inputs: [
        {
          customProperties: [
            {
              dataSensitivity: 'high',
              isEncrypted: true,
              isLargeValue: true,
              name: 'name',
              persistenceTimestamp: 0,
              requestId: 'requestId',
              selectedByUser: true,
              selectedByUserTimestamp: 0,
              source: 'ACADEMY',
              sourceId: 'sourceId',
              sourceLabel: 'sourceLabel',
              sourceMetadata: 'sourceMetadata',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              sourceVid: [0],
              timestamp: 0,
              unit: 'unit',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
              value: 'value',
            },
          ],
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

  // Mock server tests are disabled
  test.skip('updateBatch: required and optional params', async () => {
    const response = await client.marketing.events.updateBatch({
      inputs: [
        {
          customProperties: [
            {
              dataSensitivity: 'high',
              isEncrypted: true,
              isLargeValue: true,
              name: 'name',
              persistenceTimestamp: 0,
              requestId: 'requestId',
              selectedByUser: true,
              selectedByUserTimestamp: 0,
              source: 'ACADEMY',
              sourceId: 'sourceId',
              sourceLabel: 'sourceLabel',
              sourceMetadata: 'sourceMetadata',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              sourceVid: [0],
              timestamp: 0,
              unit: 'unit',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
              value: 'value',
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

  // Mock server tests are disabled
  test.skip('updateByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.events.updateByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
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
  test.skip('updateByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.updateByExternalEventID('externalEventId', {
      externalAccountId: 'externalAccountId',
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
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

  // Mock server tests are disabled
  test.skip('upsertBatch: only required params', async () => {
    const responsePromise = client.marketing.events.upsertBatch({
      inputs: [
        {
          customProperties: [
            {
              dataSensitivity: 'high',
              isEncrypted: true,
              isLargeValue: true,
              name: 'name',
              persistenceTimestamp: 0,
              requestId: 'requestId',
              selectedByUser: true,
              selectedByUserTimestamp: 0,
              source: 'ACADEMY',
              sourceId: 'sourceId',
              sourceLabel: 'sourceLabel',
              sourceMetadata: 'sourceMetadata',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              sourceVid: [0],
              timestamp: 0,
              unit: 'unit',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
              value: 'value',
            },
          ],
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

  // Mock server tests are disabled
  test.skip('upsertBatch: required and optional params', async () => {
    const response = await client.marketing.events.upsertBatch({
      inputs: [
        {
          customProperties: [
            {
              dataSensitivity: 'high',
              isEncrypted: true,
              isLargeValue: true,
              name: 'name',
              persistenceTimestamp: 0,
              requestId: 'requestId',
              selectedByUser: true,
              selectedByUserTimestamp: 0,
              source: 'ACADEMY',
              sourceId: 'sourceId',
              sourceLabel: 'sourceLabel',
              sourceMetadata: 'sourceMetadata',
              sourceUpstreamDeployable: 'sourceUpstreamDeployable',
              sourceVid: [0],
              timestamp: 0,
              unit: 'unit',
              updatedByUserId: 0,
              useTimestampAsPersistenceTimestamp: true,
              value: 'value',
            },
          ],
          eventName: 'eventName',
          eventOrganizer: 'eventOrganizer',
          externalAccountId: 'externalAccountId',
          externalEventId: 'externalEventId',
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

  // Mock server tests are disabled
  test.skip('upsertByExternalEventID: only required params', async () => {
    const responsePromise = client.marketing.events.upsertByExternalEventID('externalEventId', {
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
        },
      ],
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

  // Mock server tests are disabled
  test.skip('upsertByExternalEventID: required and optional params', async () => {
    const response = await client.marketing.events.upsertByExternalEventID('externalEventId', {
      customProperties: [
        {
          dataSensitivity: 'high',
          isEncrypted: true,
          isLargeValue: true,
          name: 'name',
          persistenceTimestamp: 0,
          requestId: 'requestId',
          selectedByUser: true,
          selectedByUserTimestamp: 0,
          source: 'ACADEMY',
          sourceId: 'sourceId',
          sourceLabel: 'sourceLabel',
          sourceMetadata: 'sourceMetadata',
          sourceUpstreamDeployable: 'sourceUpstreamDeployable',
          sourceVid: [0],
          timestamp: 0,
          unit: 'unit',
          updatedByUserId: 0,
          useTimestampAsPersistenceTimestamp: true,
          value: 'value',
        },
      ],
      eventName: 'eventName',
      eventOrganizer: 'eventOrganizer',
      externalAccountId: 'externalAccountId',
      externalEventId: 'externalEventId',
      endDateTime: '2019-12-27T18:11:19.117Z',
      eventCancelled: true,
      eventCompleted: true,
      eventDescription: 'eventDescription',
      eventType: 'eventType',
      eventUrl: 'eventUrl',
      startDateTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
