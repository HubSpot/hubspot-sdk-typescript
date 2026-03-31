// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource labels', () => {
  // Mock server tests are disabled
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.labels.batchCreate('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          category: 'HUBSPOT_DEFINED',
          maxToObjectIds: 0,
          typeId: 0,
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
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.crm.associationsSchema.labels.batchCreate('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          category: 'HUBSPOT_DEFINED',
          maxToObjectIds: 0,
          typeId: 0,
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('createLabel: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.labels.createLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
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
  test.skip('createLabel: required and optional params', async () => {
    const response = await client.crm.associationsSchema.labels.createLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
      label: 'label',
      name: 'name',
      inverseLabel: 'inverseLabel',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteLabel: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.labels.deleteLabel(0, {
      fromObjectType: 'fromObjectType',
      toObjectType: 'toObjectType',
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
  test.skip('deleteLabel: required and optional params', async () => {
    const response = await client.crm.associationsSchema.labels.deleteLabel(0, {
      fromObjectType: 'fromObjectType',
      toObjectType: 'toObjectType',
    });
  });

  // Mock server tests are disabled
  test.skip('listLabels: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.labels.listLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
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
  test.skip('listLabels: required and optional params', async () => {
    const response = await client.crm.associationsSchema.labels.listLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
    });
  });

  // Mock server tests are disabled
  test.skip('updateLabel: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.labels.updateLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
      associationTypeId: 0,
      label: 'label',
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
  test.skip('updateLabel: required and optional params', async () => {
    const response = await client.crm.associationsSchema.labels.updateLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
      associationTypeId: 0,
      label: 'label',
      inverseLabel: 'inverseLabel',
    });
  });
});
