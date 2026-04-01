// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.pipelines.create('objectType', {
      displayOrder: 0,
      label: 'label',
      stages: [
        {
          displayOrder: 0,
          label: 'label',
          metadata: { foo: 'string' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.pipelines.create('objectType', {
      displayOrder: 0,
      label: 'label',
      stages: [
        {
          displayOrder: 0,
          label: 'label',
          metadata: { foo: 'string' },
          stageId: 'stageId',
        },
      ],
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.crm.pipelines.update('pipelineId', { objectType: 'objectType' });
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
    const response = await client.crm.pipelines.update('pipelineId', {
      objectType: 'objectType',
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
      archived: true,
      displayOrder: 0,
      label: 'label',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.pipelines.list('objectType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.crm.pipelines.delete('pipelineId', { objectType: 'objectType' });
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
    const response = await client.crm.pipelines.delete('pipelineId', {
      objectType: 'objectType',
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
    });
  });

  // Mock server tests are disabled
  test.skip('createStage: only required params', async () => {
    const responsePromise = client.crm.pipelines.createStage('pipelineId', {
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
  test.skip('createStage: required and optional params', async () => {
    const response = await client.crm.pipelines.createStage('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
      stageId: 'stageId',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteStage: only required params', async () => {
    const responsePromise = client.crm.pipelines.deleteStage('stageId', {
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
  test.skip('deleteStage: required and optional params', async () => {
    const response = await client.crm.pipelines.deleteStage('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.crm.pipelines.get('pipelineId', { objectType: 'objectType' });
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
    const response = await client.crm.pipelines.get('pipelineId', { objectType: 'objectType' });
  });

  // Mock server tests are disabled
  test.skip('getStage: only required params', async () => {
    const responsePromise = client.crm.pipelines.getStage('stageId', {
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
  test.skip('getStage: required and optional params', async () => {
    const response = await client.crm.pipelines.getStage('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('listAudit: only required params', async () => {
    const responsePromise = client.crm.pipelines.listAudit('pipelineId', { objectType: 'objectType' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAudit: required and optional params', async () => {
    const response = await client.crm.pipelines.listAudit('pipelineId', { objectType: 'objectType' });
  });

  // Mock server tests are disabled
  test.skip('listStageAudit: only required params', async () => {
    const responsePromise = client.crm.pipelines.listStageAudit('stageId', {
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
  test.skip('listStageAudit: required and optional params', async () => {
    const response = await client.crm.pipelines.listStageAudit('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
    });
  });

  // Mock server tests are disabled
  test.skip('listStages: only required params', async () => {
    const responsePromise = client.crm.pipelines.listStages('pipelineId', { objectType: 'objectType' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listStages: required and optional params', async () => {
    const response = await client.crm.pipelines.listStages('pipelineId', { objectType: 'objectType' });
  });

  // Mock server tests are disabled
  test.skip('updateAllProperties: only required params', async () => {
    const responsePromise = client.crm.pipelines.updateAllProperties('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
      stages: [
        {
          displayOrder: 0,
          label: 'label',
          metadata: { foo: 'string' },
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
  test.skip('updateAllProperties: required and optional params', async () => {
    const response = await client.crm.pipelines.updateAllProperties('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'label',
      stages: [
        {
          displayOrder: 0,
          label: 'label',
          metadata: { foo: 'string' },
          stageId: 'stageId',
        },
      ],
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateStage: only required params', async () => {
    const responsePromise = client.crm.pipelines.updateStage('stageId', {
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
  test.skip('updateStage: required and optional params', async () => {
    const response = await client.crm.pipelines.updateStage('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      metadata: { foo: 'string' },
      archived: true,
      displayOrder: 0,
      label: 'label',
    });
  });

  // Mock server tests are disabled
  test.skip('updateStageAllProperties: only required params', async () => {
    const responsePromise = client.crm.pipelines.updateStageAllProperties('stageId', {
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
  test.skip('updateStageAllProperties: required and optional params', async () => {
    const response = await client.crm.pipelines.updateStageAllProperties('stageId', {
      objectType: 'objectType',
      pipelineId: 'pipelineId',
      displayOrder: 0,
      label: 'label',
      metadata: { foo: 'string' },
    });
  });
});
