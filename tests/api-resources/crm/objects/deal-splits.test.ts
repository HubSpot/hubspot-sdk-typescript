// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dealSplits', () => {
  // Prism tests are disabled
  test.skip('batchRead: only required params', async () => {
    const responsePromise = client.crm.objects.dealSplits.batchRead({ inputs: [{ id: '37295' }] });
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
    const response = await client.crm.objects.dealSplits.batchRead({ inputs: [{ id: '37295' }] });
  });

  // Prism tests are disabled
  test.skip('batchUpsert: only required params', async () => {
    const responsePromise = client.crm.objects.dealSplits.batchUpsert({
      inputs: [{ id: 0, splits: [{ ownerId: 0, percentage: 0 }] }],
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
  test.skip('batchUpsert: required and optional params', async () => {
    const response = await client.crm.objects.dealSplits.batchUpsert({
      inputs: [{ id: 0, splits: [{ ownerId: 0, percentage: 0 }] }],
    });
  });
});
