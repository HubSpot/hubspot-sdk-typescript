// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSmtpTokens } from 'hubspot-sdk/resources/marketing/transactional/smtp-tokens';
import { Transactional } from 'hubspot-sdk/resources/marketing/transactional/transactional';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSmtpTokens],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Transactional],
});

const runTests = (
  client: PartialHubSpot<{ marketing: { transactional: { smtpTokens: BaseSmtpTokens } } }>,
) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.transactional.smtpTokens.create({
      campaignName: 'campaignName',
      createContact: true,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.marketing.transactional.smtpTokens.create({
      campaignName: 'campaignName',
      createContact: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.marketing.transactional.smtpTokens.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.transactional.smtpTokens.list(
        {
          after: 'after',
          campaignName: 'campaignName',
          emailCampaignId: 'emailCampaignId',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketing.transactional.smtpTokens.delete('tokenId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.marketing.transactional.smtpTokens.get('tokenId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resetPassword', async () => {
    const responsePromise = client.marketing.transactional.smtpTokens.resetPassword('tokenId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource smtpTokens', () => runTests(client));
describe('resource smtpTokens (tree shakable, base)', () => runTests(partialClient));
describe('resource smtpTokens (tree shakable, subresource)', () => runTests(parentPartialClient));
