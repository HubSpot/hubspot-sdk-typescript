// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.pipelines.create('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
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
    const response = await client.crm.pipelines.create('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
      stageId: 'stageId',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.pipelines.update('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      metadata: { foo: 'string' },
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
    const response = await client.crm.pipelines.update('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      metadata: { foo: 'string' },
      archived: true,
      displayOrder: 0,
      label: 'label',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.pipelines.list('pipelineId', { objectType: 'objectType' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.crm.pipelines.list('pipelineId', { objectType: 'objectType' });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.pipelines.delete('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.pipelines.delete('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.pipelines.get('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.pipelines.get('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('getAudit: only required params', async () => {
    const responsePromise = client.crm.pipelines.getAudit('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
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
  test.skip('getAudit: required and optional params', async () => {
    const response = await client.crm.pipelines.getAudit('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.crm.pipelines.replace('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.crm.pipelines.replace('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
    });
  });
});
