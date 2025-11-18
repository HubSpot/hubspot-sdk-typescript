// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.groups.create('objectType', {
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.mediaBridge.groups.create('objectType', {
      appId: 0,
      label: 'label',
      name: 'name',
      displayOrder: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.groups.list('objectType', { appId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.cms.mediaBridge.groups.list('objectType', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('deleteByName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.groups.deleteByName('groupName', {
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

  // Prism tests are disabled
  test.skip('deleteByName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.groups.deleteByName('groupName', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('getByName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.groups.getByName('groupName', {
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

  // Prism tests are disabled
  test.skip('getByName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.groups.getByName('groupName', {
      appId: 0,
      objectType: 'objectType',
    });
  });

  // Prism tests are disabled
  test.skip('updateByName: only required params', async () => {
    const responsePromise = client.cms.mediaBridge.groups.updateByName('groupName', {
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

  // Prism tests are disabled
  test.skip('updateByName: required and optional params', async () => {
    const response = await client.cms.mediaBridge.groups.updateByName('groupName', {
      appId: 0,
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
    });
  });
});
