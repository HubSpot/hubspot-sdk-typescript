// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('batchAssociateDefault: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.batchAssociateDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: { id: '37295' } }],
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
  test.skip('batchAssociateDefault: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.batchAssociateDefault('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: { id: '37295' } }],
    });
  });

  // Prism tests are disabled
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.batchCreate('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
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
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.batchCreate('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('batchDelete: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.batchDelete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: [{ id: '37295' }] }],
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
  test.skip('batchDelete: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.batchDelete('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ from: { id: '37295' }, to: [{ id: '37295' }] }],
    });
  });

  // Prism tests are disabled
  test.skip('batchDeleteLabels: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.batchDeleteLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
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
  test.skip('batchDeleteLabels: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.batchDeleteLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [
        {
          from: { id: '37295' },
          to: { id: '37295' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('batchRead: only required params', async () => {
    const responsePromise = client.crm.associations.v4.batch.batchRead('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id' }],
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
  test.skip('batchRead: required and optional params', async () => {
    const response = await client.crm.associations.v4.batch.batchRead('toObjectType', {
      fromObjectType: 'fromObjectType',
      inputs: [{ id: 'id', after: 'after' }],
    });
  });
});
