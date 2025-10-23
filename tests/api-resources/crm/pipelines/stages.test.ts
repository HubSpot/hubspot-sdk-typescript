// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.create('pipelineId', {
      objectType: 'objectType',
      displayOrder: 1,
      label: 'Done',
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
    const response = await client.crm.pipelines.stages.create('pipelineId', {
      objectType: 'objectType',
      displayOrder: 1,
      label: 'Done',
      metadata: { ticketState: 'CLOSED' },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.update('stageId', {
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.pipelines.stages.update('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      archived: true,
      displayOrder: 1,
      label: 'Done',
      metadata: { ticketState: 'CLOSED' },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.list('pipelineId', { objectType: 'objectType' });
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
    const response = await client.crm.pipelines.stages.list('pipelineId', { objectType: 'objectType' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.delete('stageId', {
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.pipelines.stages.delete('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.get('stageId', {
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

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.pipelines.stages.get('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Prism tests are disabled
  test.skip('getAudit: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.getAudit('stageId', {
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

  // Prism tests are disabled
  test.skip('getAudit: required and optional params', async () => {
    const response = await client.crm.pipelines.stages.getAudit('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.crm.pipelines.stages.replace('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      displayOrder: 1,
      label: 'Done',
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.crm.pipelines.stages.replace('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      displayOrder: 1,
      label: 'Done',
      metadata: { ticketState: 'CLOSED' },
    });
  });
});
