// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sequences', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.automation.sequences.list({ userId: 'userId' });
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
    const response = await client.automation.sequences.list({
      userId: 'userId',
      after: 'after',
      limit: 0,
      name: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('createEnrollment: only required params', async () => {
    const responsePromise = client.automation.sequences.createEnrollment({
      userId: 'userId',
      contactId: 'contactId',
      senderEmail: 'senderEmail',
      sequenceId: 'sequenceId',
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
  test.skip('createEnrollment: required and optional params', async () => {
    const response = await client.automation.sequences.createEnrollment({
      userId: 'userId',
      contactId: 'contactId',
      senderEmail: 'senderEmail',
      sequenceId: 'sequenceId',
      senderAliasAddress: 'senderAliasAddress',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.automation.sequences.get('sequenceId', { userId: 'userId' });
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
    const response = await client.automation.sequences.get('sequenceId', { userId: 'userId' });
  });

  // Mock server tests are disabled
  test.skip('getEnrollmentByContactID', async () => {
    const responsePromise = client.automation.sequences.getEnrollmentByContactID('contactId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
