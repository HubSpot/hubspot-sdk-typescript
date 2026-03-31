// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callbacks', () => {
  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.automation.actions.callbacks.complete('callbackId', {
      outputFields: { foo: 'string' },
      typedOutputs: {},
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
  test.skip('complete: required and optional params', async () => {
    const response = await client.automation.actions.callbacks.complete('callbackId', {
      outputFields: { foo: 'string' },
      typedOutputs: {},
      failureReasonType: 'failureReasonType',
      requestContext: {
        source: 'WORKFLOWS',
        workflowId: 0,
        actionExecutionIndexIdentifier: { actionExecutionIndex: 0, enrollmentId: 0 },
        actionId: 0,
      },
    });
  });

  // Mock server tests are disabled
  test.skip('completeBatch: only required params', async () => {
    const responsePromise = client.automation.actions.callbacks.completeBatch({
      inputs: [
        {
          callbackId: 'callbackId',
          outputFields: { foo: 'string' },
          typedOutputs: {},
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
  test.skip('completeBatch: required and optional params', async () => {
    const response = await client.automation.actions.callbacks.completeBatch({
      inputs: [
        {
          callbackId: 'callbackId',
          outputFields: { foo: 'string' },
          typedOutputs: {},
          failureReasonType: 'failureReasonType',
          requestContext: {
            source: 'WORKFLOWS',
            workflowId: 0,
            actionExecutionIndexIdentifier: { actionExecutionIndex: 0, enrollmentId: 0 },
            actionId: 0,
          },
        },
      ],
    });
  });
});
