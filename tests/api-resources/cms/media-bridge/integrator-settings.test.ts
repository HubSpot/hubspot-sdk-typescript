// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integratorSettings', () => {
  // Prism tests are disabled
  test.skip('createObjectDefinition: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.createObjectDefinition(0, {
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
    const response = await client.cms.mediaBridge.integratorSettings.createObjectDefinition(0, {
      mediaTypes: ['VIDEO'],
    });
  });

  // Prism tests are disabled
  test.skip('createOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.createOembedDomain(0, {
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
    const response = await client.cms.mediaBridge.integratorSettings.createOembedDomain(0, {
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
      portalId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('deleteOembedDomain', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.deleteOembedDomain(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteOembedDomain: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.integratorSettings.deleteOembedDomain(
        0,
        { id: 0, domainPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getEventVisibilitySettings', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.getEventVisibilitySettings(0);
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
      'VIDEO',
      { appId: 0 },
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
      'VIDEO',
      { appId: 0, includeFullDefinition: true },
    );
  });

  // Prism tests are disabled
  test.skip('getOembedDomain: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.getOembedDomain('oEmbedDomainId', {
      appId: 0,
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
      appId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('listOembedDomains', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.listOembedDomains(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listOembedDomains: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.mediaBridge.integratorSettings.listOembedDomains(
        0,
        { domainPortalId: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('registerAppName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.registerAppName(0, { updatedAt: 0 });
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
    const response = await client.cms.mediaBridge.integratorSettings.registerAppName(0, {
      updatedAt: 0,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('updateAppName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.updateAppName(0, { updatedAt: 0 });
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
    const response = await client.cms.mediaBridge.integratorSettings.updateAppName(0, {
      updatedAt: 0,
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('updateEventVisibilitySettings: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings(0, {
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
    const response = await client.cms.mediaBridge.integratorSettings.updateEventVisibilitySettings(0, {
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
      appId: 0,
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
      appId: 0,
      endpoints: { discovery: true, schemes: ['string'], url: 'url' },
      portalId: 0,
    });
  });
});
