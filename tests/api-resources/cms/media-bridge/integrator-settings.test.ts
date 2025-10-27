// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integratorSettings', () => {
  // Prism tests are disabled
  test.skip('createObjectDefinition: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.createObjectDefinition('appId', {
      mediaTypes: ['VIDEO'],
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
  test.skip('createObjectDefinition: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.createObjectDefinition('appId', {
      mediaTypes: ['VIDEO'],
    });
  });

  // Prism tests are disabled
  test.skip('createOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.createOembedDomain('appId', {
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
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
  test.skip('createOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.createOembedDomain('appId', {
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
      portalId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('deleteOembedDomain', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.deleteOembedDomain('appId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getEventVisibilitySettings', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.getEventVisibilitySettings('appId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getObjectDefinitionsByMediaType: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.getObjectDefinitionsByMediaType(
      'mediaType',
      { appId: 'appId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getObjectDefinitionsByMediaType: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.getObjectDefinitionsByMediaType(
      'mediaType',
      { appId: 'appId' },
    );
  });

  // Prism tests are disabled
  test.skip('getOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.getOembedDomain('oEmbedDomainId', {
      appId: 'appId',
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
  test.skip('getOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.getOembedDomain('oEmbedDomainId', {
      appId: 'appId',
    });
  });

  // Prism tests are disabled
  test.skip('listOembedDomains', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.listOembedDomains('appId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('registerAppName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.registerAppName('appId', {
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

  // Prism tests are disabled
  test.skip('registerAppName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.registerAppName('appId', {
      updatedAt: 0,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('updateAppName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.updateAppName('appId', {
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

  // Prism tests are disabled
  test.skip('updateAppName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.updateAppName('appId', {
      updatedAt: 0,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('updateEventVisibilitySettings: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings('appId', {
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

  // Prism tests are disabled
  test.skip('updateEventVisibilitySettings: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings('appId', {
      eventType: 'ALL',
      updatedAt: 0,
      showInReporting: true,
      showInTimeline: true,
      showInWorkflows: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.updateOembedDomain('oEmbedDomainId', {
      appId: 'appId',
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
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
  test.skip('updateOembedDomain: required and optional params', async () => {
    const response = await client.cms.mediaBridge.integratorSettings.updateOembedDomain('oEmbedDomainId', {
      appId: 'appId',
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
      portalId: 0,
    });
  });
});
