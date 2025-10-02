// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubspotSDK from 'hubspot-sdk';

const client = new HubspotSDK({
  privateAppsKey: 'My Private Apps Key',
  privateAppsLegacyKey: 'My Private Apps Legacy Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batch', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.batch.create({
      inputs: [
        {
          id: 'id',
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          language: 'af',
          name: 'name',
          translatedFromId: 0,
          updated: '2019-12-27T18:11:19.117Z',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.v3.blogs.tags.batch.create({
      inputs: [
        {
          id: 'id',
          created: '2019-12-27T18:11:19.117Z',
          deletedAt: '2019-12-27T18:11:19.117Z',
          language: 'af',
          name: 'name',
          translatedFromId: 0,
          updated: '2019-12-27T18:11:19.117Z',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.batch.update({ inputs: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.v3.blogs.tags.batch.update({ inputs: [{}], archived: true });
  });

  // Prism tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.batch.archive({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('archive: required and optional params', async () => {
    const response = await client.cms.v3.blogs.tags.batch.archive({ inputs: ['string'] });
  });

  // Prism tests are disabled
  test.skip('read: only required params', async () => {
    const responsePromise = client.cms.v3.blogs.tags.batch.read({ inputs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('read: required and optional params', async () => {
    const response = await client.cms.v3.blogs.tags.batch.read({ inputs: ['string'], archived: true });
  });
});
