// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.automation.actions.functions.list('definitionId', { appId: 0 });
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
    const response = await client.automation.actions.functions.list('definitionId', { appId: 0 });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.automation.actions.functions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.automation.actions.functions.delete('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
    });
  });

  // Prism tests are disabled
  test.skip('archiveByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.functions.archiveByFunctionType(
      'PRE_ACTION_EXECUTION',
      { appId: 0, definitionId: 'definitionId' },
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
  test.skip('archiveByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.functions.archiveByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Prism tests are disabled
  test.skip('createOrReplace: only required params', async () => {
    const responsePromise = client.automation.actions.functions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
      body: 'body',
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
  test.skip('createOrReplace: required and optional params', async () => {
    const response = await client.automation.actions.functions.createOrReplace('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
      body: 'body',
    });
  });

  // Prism tests are disabled
  test.skip('createOrReplaceByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.functions.createOrReplaceByFunctionType(
      'PRE_ACTION_EXECUTION',
      { appId: 0, definitionId: 'definitionId', body: 'body' },
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
  test.skip('createOrReplaceByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.functions.createOrReplaceByFunctionType(
      'PRE_ACTION_EXECUTION',
      { appId: 0, definitionId: 'definitionId', body: 'body' },
    );
  });

  // Prism tests are disabled
  test.skip('getByFunctionType: only required params', async () => {
    const responsePromise = client.automation.actions.functions.getByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
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
  test.skip('getByFunctionType: required and optional params', async () => {
    const response = await client.automation.actions.functions.getByFunctionType('PRE_ACTION_EXECUTION', {
      appId: 0,
      definitionId: 'definitionId',
    });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.automation.actions.functions.read('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
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
  test.skip('read: required and optional params', async () => {
    const response = await client.automation.actions.functions.read('functionId', {
      appId: 0,
      definitionId: 'definitionId',
      functionType: 'PRE_ACTION_EXECUTION',
    });
  });
});
