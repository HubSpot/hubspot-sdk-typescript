// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.crm.pipelines.create('objectType', {
      displayOrder: 0,
      label: 'My replaced pipeline',
      stages: [
        {
          displayOrder: 0,
          label: 'In Progress',
          metadata: { ticketState: 'OPEN' },
        },
        {
          displayOrder: 1,
          label: 'Done',
          metadata: { ticketState: 'CLOSED' },
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.crm.pipelines.create('objectType', {
      displayOrder: 0,
      label: 'My replaced pipeline',
      stages: [
        {
          displayOrder: 0,
          label: 'In Progress',
          metadata: { ticketState: 'OPEN' },
        },
        {
          displayOrder: 1,
          label: 'Done',
          metadata: { ticketState: 'CLOSED' },
        },
      ],
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.crm.pipelines.update('pipelineId', {
      objectType: 'objectType',
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
      archived: true,
      displayOrder: 0,
      label: 'My updated pipeline',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.crm.pipelines.delete('pipelineId', {
      objectType: 'objectType',
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.crm.pipelines.get('pipelineId', { objectType: 'objectType' });
  });

  // Prism tests are disabled
  test.skip('getAudit: only required params', async () => {
    const responsePromise = client.crm.pipelines.getAudit('pipelineId', { objectType: 'objectType' });
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
    const response = await client.crm.pipelines.getAudit('pipelineId', { objectType: 'objectType' });
  });

  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.crm.pipelines.replace('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'My replaced pipeline',
      stages: [
        {
          displayOrder: 0,
          label: 'In Progress',
          metadata: { ticketState: 'OPEN' },
        },
        {
          displayOrder: 1,
          label: 'Done',
          metadata: { ticketState: 'CLOSED' },
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

  // Prism tests are disabled
  test.skip('replace: required and optional params', async () => {
    const response = await client.crm.pipelines.replace('pipelineId', {
      objectType: 'objectType',
      displayOrder: 0,
      label: 'My replaced pipeline',
      stages: [
        {
          displayOrder: 0,
          label: 'In Progress',
          metadata: { ticketState: 'OPEN' },
        },
        {
          displayOrder: 1,
          label: 'Done',
          metadata: { ticketState: 'CLOSED' },
        },
      ],
      validateDealStageUsagesBeforeDelete: true,
      validateReferencesBeforeDelete: true,
    });
  });
});
