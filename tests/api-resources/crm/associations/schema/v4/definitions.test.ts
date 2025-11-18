// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource definitions', () => {
  // Prism tests are disabled
  test.skip('createLabel: only required params', async () => {
    const responsePromise = client.crm.associations.schema.v4.definitions.createLabel('toObjectType', {
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

  // Prism tests are disabled
  test.skip('createLabel: required and optional params', async () => {
    const response = await client.crm.associations.schema.v4.definitions.createLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
      label: 'label',
      name: 'name',
      inverseLabel: 'inverseLabel',
    });
  });

  // Prism tests are disabled
  test.skip('deleteLabel: only required params', async () => {
    const responsePromise = client.crm.associations.schema.v4.definitions.deleteLabel(0, {
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

  // Prism tests are disabled
  test.skip('deleteLabel: required and optional params', async () => {
    const response = await client.crm.associations.schema.v4.definitions.deleteLabel(0, {
      fromObjectType: 'fromObjectType',
      toObjectType: 'toObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('listLabels: only required params', async () => {
    const responsePromise = client.crm.associations.schema.v4.definitions.listLabels('toObjectType', {
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

  // Prism tests are disabled
  test.skip('listLabels: required and optional params', async () => {
    const response = await client.crm.associations.schema.v4.definitions.listLabels('toObjectType', {
      fromObjectType: 'fromObjectType',
    });
  });

  // Prism tests are disabled
  test.skip('updateLabel: only required params', async () => {
    const responsePromise = client.crm.associations.schema.v4.definitions.updateLabel('toObjectType', {
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

  // Prism tests are disabled
  test.skip('updateLabel: required and optional params', async () => {
    const response = await client.crm.associations.schema.v4.definitions.updateLabel('toObjectType', {
      fromObjectType: 'fromObjectType',
      associationTypeId: 0,
      label: 'label',
      inverseLabel: 'inverseLabel',
    });
  });
});
