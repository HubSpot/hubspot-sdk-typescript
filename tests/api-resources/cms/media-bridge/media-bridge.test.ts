// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cms } from '@hubspot/sdk/resources/cms/cms';
import { BaseMediaBridge } from '@hubspot/sdk/resources/cms/media-bridge/media-bridge';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMediaBridge],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cms],
});

const runTests = (client: PartialHubSpot<{ cms: { mediaBridge: BaseMediaBridge } }>) => {
  // Mock server tests are disabled
  test.skip('createAssociation: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createAssociation('objectType', {
      appId: 0,
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
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
  test.skip('createAssociation: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createAssociation('objectType', {
      appId: 0,
      fromObjectTypeId: 'fromObjectTypeId',
      toObjectTypeId: 'toObjectTypeId',
      name: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('createAttentionSpanEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createAttentionSpanEvent({
      mediaType: 'AUDIO',
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

  // Mock server tests are disabled
  test.skip('createAttentionSpanEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createAttentionSpanEvent({
      mediaType: 'AUDIO',
      occurredTimestamp: 0,
      rawDataMap: { foo: 0 },
      sessionId: 'sessionId',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      derivedValues: { totalPercentPlayed: 0, totalSecondsPlayed: 0 },
      externalId: 'externalId',
      externalPlayContext: 'EMAIL',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
      rawDataString: 'rawDataString',
    });
  });

  // Mock server tests are disabled
  test.skip('createMediaPlayedEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createMediaPlayedEvent({
      mediaType: 'AUDIO',
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

  // Mock server tests are disabled
  test.skip('createMediaPlayedEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createMediaPlayedEvent({
      mediaType: 'AUDIO',
      occurredTimestamp: 0,
      sessionId: 'sessionId',
      state: 'STARTED',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      externalId: 'externalId',
      externalPlayContext: 'EMAIL',
      iframeUrl: 'iframeUrl',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
    });
  });

  // Mock server tests are disabled
  test.skip('createMediaPlayedPercentEvent: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createMediaPlayedPercentEvent({
      mediaType: 'AUDIO',
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

  // Mock server tests are disabled
  test.skip('createMediaPlayedPercentEvent: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createMediaPlayedPercentEvent({
      mediaType: 'AUDIO',
      occurredTimestamp: 0,
      playedPercent: 0,
      sessionId: 'sessionId',
      _hsenc: '_hsenc',
      contactId: 0,
      contactUtk: 'contactUtk',
      externalId: 'externalId',
      externalPlayContext: 'EMAIL',
      mediaBridgeId: 0,
      mediaName: 'mediaName',
      mediaUrl: 'mediaUrl',
      pageId: 0,
      pageName: 'pageName',
      pageUrl: 'pageUrl',
    });
  });

  // Mock server tests are disabled
  test.skip('createObjectType: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createObjectType(0, { mediaTypes: ['VIDEO'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createObjectType: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createObjectType(0, { mediaTypes: ['VIDEO'] });
  });

  // Mock server tests are disabled
  test.skip('createOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createOembedDomain(0, {
      endpoints: {
        discovery: true,
        schemes: ['string'],
        url: 'url',
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
  test.skip('createOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createOembedDomain(0, {
      endpoints: {
        discovery: true,
        schemes: ['string'],
        url: 'url',
      },
      portalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('createProperty: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createProperty('objectType', {
      appId: 0,
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
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
  test.skip('createProperty: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createProperty('objectType', {
      appId: 0,
      fieldType: 'booleancheckbox',
      groupName: 'groupName',
      label: 'label',
      name: 'name',
      type: 'bool',
      calculationFormula: 'calculationFormula',
      currencyPropertyName: 'currencyPropertyName',
      dataSensitivity: 'highly_sensitive',
      description: 'description',
      displayOrder: 0,
      externalOptions: true,
      formField: true,
      hasUniqueValue: true,
      hidden: true,
      numberDisplayHint: 'currency',
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
      referencedObjectType: 'referencedObjectType',
      showCurrencySymbol: true,
      textDisplayHint: 'domain_name',
    });
  });

  // Mock server tests are disabled
  test.skip('createPropertyGroup: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.createPropertyGroup('objectType', {
      appId: 0,
      label: 'label',
      name: 'name',
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
  test.skip('createPropertyGroup: required and optional params', async () => {
    const response = await client.cms.mediaBridge.createPropertyGroup('objectType', {
      appId: 0,
      label: 'label',
      name: 'name',
      displayOrder: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('createVideoAssociationDefinition', async () => {
    const responsePromise = client.cms.mediaBridge.createVideoAssociationDefinition(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteAssociation: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.deleteAssociation('associationId', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('deleteAssociation: required and optional params', async () => {
    const response = await client.cms.mediaBridge.deleteAssociation('associationId', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteOembedDomain', async () => {
    const responsePromise = client.cms.mediaBridge.deleteOembedDomain(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteOembedDomain: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.deleteOembedDomain(
        0,
        { id: 0, domainPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteProperty: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.deleteProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('deleteProperty: required and optional params', async () => {
    const response = await client.cms.mediaBridge.deleteProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Mock server tests are disabled
  test.skip('deletePropertyGroup: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.deletePropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('deletePropertyGroup: required and optional params', async () => {
    const response = await client.cms.mediaBridge.deletePropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Mock server tests are disabled
  test.skip('getEventVisibilitySettings', async () => {
    const responsePromise = client.cms.mediaBridge.getEventVisibilitySettings(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.getOembedDomain('oEmbedDomainId', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.getOembedDomain('oEmbedDomainId', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('getProperty: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.getProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('getProperty: required and optional params', async () => {
    const response = await client.cms.mediaBridge.getProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
      archived: true,
      properties: 'properties',
    });
  });

  // Mock server tests are disabled
  test.skip('getPropertyGroup: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.getPropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('getPropertyGroup: required and optional params', async () => {
    const response = await client.cms.mediaBridge.getPropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Mock server tests are disabled
  test.skip('getSchema: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.getSchema('objectType', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getSchema: required and optional params', async () => {
    const response = await client.cms.mediaBridge.getSchema('objectType', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('listObjectTypesByMediaType: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.listObjectTypesByMediaType('AUDIO', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listObjectTypesByMediaType: required and optional params', async () => {
    const response = await client.cms.mediaBridge.listObjectTypesByMediaType('AUDIO', {
      appId: 0,
      includeFullDefinition: true,
    });
  });

  // Mock server tests are disabled
  test.skip('listOembedDomains', async () => {
    const responsePromise = client.cms.mediaBridge.listOembedDomains(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listOembedDomains: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.listOembedDomains(
        0,
        { domainPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listProperties: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.listProperties('objectType', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listProperties: required and optional params', async () => {
    const response = await client.cms.mediaBridge.listProperties('objectType', {
      appId: 0,
      archived: true,
      properties: 'properties',
    });
  });

  // Mock server tests are disabled
  test.skip('listPropertyGroups: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.listPropertyGroups('objectType', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPropertyGroups: required and optional params', async () => {
    const response = await client.cms.mediaBridge.listPropertyGroups('objectType', { appId: 0 });
  });

  // Mock server tests are disabled
  test.skip('listSchemas', async () => {
    const responsePromise = client.cms.mediaBridge.listSchemas(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSchemas: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.listSchemas(0, { archived: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('registerAppName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.registerAppName(0, { updatedAt: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('registerAppName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.registerAppName(0, {
      updatedAt: 0,
      allowImportOnDisconnect: true,
      moduleName: 'moduleName',
      name: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('updateEventVisibilitySettings: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updateEventVisibilitySettings(0, {
      eventType: 'ALL',
      updatedAt: 0,
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
  test.skip('updateEventVisibilitySettings: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updateEventVisibilitySettings(0, {
      eventType: 'ALL',
      updatedAt: 0,
      showInReporting: true,
      showInTimeline: true,
      showInWorkflows: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updateOembedDomain('oEmbedDomainId', {
      appId: 0,
      endpoints: {
        discovery: true,
        schemes: ['string'],
        url: 'url',
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
  test.skip('updateOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updateOembedDomain('oEmbedDomainId', {
      appId: 0,
      endpoints: {
        discovery: true,
        schemes: ['string'],
        url: 'url',
      },
      portalId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('updateProperty: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updateProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('updateProperty: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updateProperty('propertyName', {
      appId: 0,
      objectType: 'objectType',
      calculationFormula: 'calculationFormula',
      currencyPropertyName: 'currencyPropertyName',
      description: 'description',
      displayOrder: 0,
      fieldType: 'booleancheckbox',
      formField: true,
      groupName: 'groupName',
      hasUniqueValue: true,
      hidden: true,
      label: 'label',
      numberDisplayHint: 'currency',
      options: [
        {
          displayOrder: 0,
          hidden: true,
          label: 'label',
          value: 'value',
          description: 'description',
        },
      ],
      showCurrencySymbol: true,
      textDisplayHint: 'domain_name',
      type: 'bool',
    });
  });

  // Mock server tests are disabled
  test.skip('updatePropertyGroup: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updatePropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
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
  test.skip('updatePropertyGroup: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updatePropertyGroup('groupName', {
      appId: 0,
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
    });
  });

  // Mock server tests are disabled
  test.skip('updateSchema: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updateSchema('objectType', {
      appId: 0,
      clearDescription: true,
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
  test.skip('updateSchema: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updateSchema('objectType', {
      appId: 0,
      clearDescription: true,
      allowsSensitiveProperties: true,
      description: 'description',
      labels: { plural: 'plural', singular: 'singular' },
      primaryDisplayProperty: 'primaryDisplayProperty',
      requiredProperties: ['string'],
      restorable: true,
      searchableProperties: ['string'],
      secondaryDisplayProperties: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.updateSettings(0, { updatedAt: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSettings: required and optional params', async () => {
    const response = await client.cms.mediaBridge.updateSettings(0, {
      updatedAt: 0,
      allowImportOnDisconnect: true,
      moduleName: 'moduleName',
      name: 'name',
    });
  });
};
describe('resource mediaBridge', () => runTests(client));
describe('resource mediaBridge (tree shakable, base)', () => runTests(partialClient));
describe('resource mediaBridge (tree shakable, subresource)', () => runTests(parentPartialClient));
