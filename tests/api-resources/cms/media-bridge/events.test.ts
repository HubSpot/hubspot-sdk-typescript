// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Prism tests are disabled
  test.skip('createAttentionSpanEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.events.createAttentionSpanEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      rawDataMap: { foo: 0 },
      sessionId: 'sessionId',
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
  test.skip('createAttentionSpanEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.events.createAttentionSpanEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      rawDataMap: { foo: 0 },
      sessionId: 'sessionId',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      derivedValues: { totalPercentPlayed: 0, totalSecondsPlayed: 0 },
      externalId: 'externalId',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
      rawDataString: 'rawDataString',
    });
  });

  // Prism tests are disabled
  test.skip('createMediaPlayedEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.events.createMediaPlayedEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      sessionId: 'sessionId',
      state: 'STARTED',
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
  test.skip('createMediaPlayedEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.events.createMediaPlayedEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      sessionId: 'sessionId',
      state: 'STARTED',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      externalId: 'externalId',
      iframeUrl: 'iframeUrl',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
    });
  });

  // Prism tests are disabled
  test.skip('createMediaPlayedPercentEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.events.createMediaPlayedPercentEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      playedPercent: 0,
      sessionId: 'sessionId',
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
  test.skip('createMediaPlayedPercentEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.events.createMediaPlayedPercentEvent({
      mediaType: 'VIDEO',
      occurredTimestamp: 0,
      playedPercent: 0,
      sessionId: 'sessionId',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      externalId: 'externalId',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
    });
  });
});
