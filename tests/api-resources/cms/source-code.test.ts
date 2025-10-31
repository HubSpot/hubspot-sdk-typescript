// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot, { toFile } from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sourceCode', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.sourceCode.create('path', { environment: 'environment' });
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
    const response = await client.cms.sourceCode.create('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.cms.sourceCode.delete('path', { environment: 'environment' });
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
    const response = await client.cms.sourceCode.delete('path', { environment: 'environment' });
  });

  // Prism tests are disabled
  test.skip('extractAsync: only required params', async () => {
    const responsePromise = client.cms.sourceCode.extractAsync({ path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extractAsync: required and optional params', async () => {
    const response = await client.cms.sourceCode.extractAsync({ path: 'path' });
  });

  test('get: required and optional params', async () => {
    const response = await client.cms.sourceCode.get('path', { environment: 'environment' });
  });

  // Prism tests are disabled
  test.skip('getExtractionStatus', async () => {
    const responsePromise = client.cms.sourceCode.getExtractionStatus(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getMetadata: only required params', async () => {
    const responsePromise = client.cms.sourceCode.getMetadata('path', { environment: 'environment' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getMetadata: required and optional params', async () => {
    const response = await client.cms.sourceCode.getMetadata('path', {
      environment: 'environment',
      properties: 'properties',
    });
  });

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.cms.sourceCode.upsert('path', { environment: 'environment' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.cms.sourceCode.upsert('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  test('validate: required and optional params', async () => {
    const response = await client.cms.sourceCode.validate('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
