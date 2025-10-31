// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meetingsLinks', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.scheduler.meetings.meetingsLinks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('book: only required params', async () => {
    const responsePromise = client.scheduler.meetings.meetingsLinks.book({
      duration: 0,
      email: 'email',
      firstName: 'firstName',
      formFields: [{ name: 'name', value: 'value' }],
      lastName: 'lastName',
      legalConsentResponses: [{ communicationTypeId: 'communicationTypeId', consented: true }],
      likelyAvailableUserIds: ['string'],
      slug: 'slug',
      startTime: '2019-12-27T18:11:19.117Z',
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
  test.skip('book: required and optional params', async () => {
    const response = await client.scheduler.meetings.meetingsLinks.book({
      duration: 0,
      email: 'email',
      firstName: 'firstName',
      formFields: [{ name: 'name', value: 'value' }],
      lastName: 'lastName',
      legalConsentResponses: [{ communicationTypeId: 'communicationTypeId', consented: true }],
      likelyAvailableUserIds: ['string'],
      slug: 'slug',
      startTime: '2019-12-27T18:11:19.117Z',
      locale: 'locale',
      timezone: 'timezone',
    });
  });

  // Prism tests are disabled
  test.skip('getAvailabilityBySlug', async () => {
    const responsePromise = client.scheduler.meetings.meetingsLinks.getAvailabilityBySlug('slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getBookingInfoBySlug', async () => {
    const responsePromise = client.scheduler.meetings.meetingsLinks.getBookingInfoBySlug('slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
