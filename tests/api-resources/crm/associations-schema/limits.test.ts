// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource limits', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.crm.associationsSchema.limits.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('batchDelete: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.limits.batchDelete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ category: 'category', typeId: 0 }],
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
  test.skip('batchDelete: required and optional params', async () => {
    const response = await client.crm.associationsSchema.limits.batchDelete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ category: 'category', typeId: 0 }],
    });
  });

  // Mock server tests are disabled
  test.skip('batchUpdate: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.limits.batchUpdate('toObjectType', {
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
  test.skip('batchUpdate: required and optional params', async () => {
    const response = await client.crm.associationsSchema.limits.batchUpdate('toObjectType', {
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
  test.skip('getByObjectTypes: only required params', async () => {
    const responsePromise = client.crm.associationsSchema.limits.getByObjectTypes('toObjectType', {
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
  test.skip('getByObjectTypes: required and optional params', async () => {
    const response = await client.crm.associationsSchema.limits.getByObjectTypes('toObjectType', {
      fromObjectType: 'fromObjectType',
    });
  });
});
