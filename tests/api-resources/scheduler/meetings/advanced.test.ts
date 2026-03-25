// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource advanced', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.scheduler.meetings.advanced.create({
      organizerUserId: 'organizerUserId',
      associations: [
        {
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
      emailReminderSchedule: {
        reminders: [{ numberOfTimeUnits: 0, timeUnit: 'DAYS' }],
        shouldIncludeInviteDescription: true,
      },
      properties: {
        hs_meeting_end_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_outcome: 'hs_meeting_outcome',
        hs_meeting_start_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_title: 'hs_meeting_title',
        hs_timestamp: '2019-12-27T18:11:19.117Z',
        hubspot_owner_id: 'hubspot_owner_id',
      },
      timezone: 'timezone',
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
    const response = await client.scheduler.meetings.advanced.create({
      organizerUserId: 'organizerUserId',
      associations: [
        {
          to: { id: 'id' },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }],
        },
      ],
      emailReminderSchedule: {
        reminders: [{ numberOfTimeUnits: 0, timeUnit: 'DAYS' }],
        shouldIncludeInviteDescription: true,
      },
      properties: {
        hs_meeting_end_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_outcome: 'hs_meeting_outcome',
        hs_meeting_start_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_title: 'hs_meeting_title',
        hs_timestamp: '2019-12-27T18:11:19.117Z',
        hubspot_owner_id: 'hubspot_owner_id',
        hs_activity_type: 'hs_activity_type',
        hs_attachment_ids: ['string'],
        hs_attendee_owner_ids: ['string'],
        hs_internal_meeting_notes: 'hs_internal_meeting_notes',
        hs_meeting_body: 'hs_meeting_body',
        hs_meeting_location: 'hs_meeting_location',
        hs_meeting_location_type: 'ADDRESS',
      },
      timezone: 'timezone',
    });
  });

  // Mock server tests are disabled
  test.skip('book: only required params', async () => {
    const responsePromise = client.scheduler.meetings.advanced.book({
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

  // Mock server tests are disabled
  test.skip('book: required and optional params', async () => {
    const response = await client.scheduler.meetings.advanced.book({
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
});
