// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Prism tests are disabled
  test.skip('enroll: only required params', async () => {
    const responsePromise = client.automation.sequences.enrollments.enroll({
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

  // Prism tests are disabled
  test.skip('enroll: required and optional params', async () => {
    const response = await client.automation.sequences.enrollments.enroll({
      contactId: 'contactId',
      senderEmail: 'senderEmail',
      sequenceId: 'sequenceId',
      senderAliasAddress: 'senderAliasAddress',
    });
  });

  // Prism tests are disabled
  test.skip('getByContactID', async () => {
    const responsePromise = client.automation.sequences.enrollments.getByContactID('contactId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
