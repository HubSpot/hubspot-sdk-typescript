// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cms } from 'hubspot-sdk/resources/cms/cms';
import { BaseSourceCode } from 'hubspot-sdk/resources/cms/source-code';

import HubSpot, { toFile } from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSourceCode],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cms],
});

const runTests = (client: PartialHubSpot<{ cms: { sourceCode: BaseSourceCode } }>) => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.sourceCode.create('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.cms.sourceCode.delete('path', { environment: 'environment' });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('extractAsync: required and optional params', async () => {
    const response = await client.cms.sourceCode.extractAsync({ path: 'path' });
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.cms.sourceCode.get('path', { environment: 'environment' });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('getMetadata: required and optional params', async () => {
    const response = await client.cms.sourceCode.getMetadata('path', {
      environment: 'environment',
      properties: 'properties',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.cms.sourceCode.upsert('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });

  // Mock server tests are disabled
  test.skip('validate: required and optional params', async () => {
    const response = await client.cms.sourceCode.validate('path', {
      environment: 'environment',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
};
describe('resource sourceCode', () => runTests(client));
describe('resource sourceCode (tree shakable, base)', () => runTests(partialClient));
describe('resource sourceCode (tree shakable, subresource)', () => runTests(parentPartialClient));
