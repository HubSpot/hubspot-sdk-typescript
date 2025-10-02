// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.cms.hubdb.rows.batch.replace('tableIdOrName', {
      inputs: [{ id: 'id', values: { foo: {} } }],
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
    const response = await client.cms.hubdb.rows.batch.replace('tableIdOrName', {
      inputs: [
        { id: 'id', values: { foo: {} }, childTableId: 0, displayIndex: 0, name: 'name', path: 'path' },
      ],
    });
  });
});
