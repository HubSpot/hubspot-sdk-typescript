// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calendar', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.scheduler.meetings.calendar.create({
      associations: [
        { to: { id: '37295' }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }] },
      ],
      emailReminderSchedule: {
        reminders: [{ numberOfTimeUnits: 0, timeUnit: 'timeUnit' }],
        shouldIncludeInviteDescription: true,
      },
      properties: {
        hs_meeting_end_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_outcome: 'hs_meeting_outcome',
        hs_meeting_start_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_title: 'hs_meeting_title',
        hs_timestamp: '2019-12-27T18:11:19.117Z',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.scheduler.meetings.calendar.create({
      associations: [
        { to: { id: '37295' }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 0 }] },
      ],
      emailReminderSchedule: {
        reminders: [{ numberOfTimeUnits: 0, timeUnit: 'timeUnit' }],
        shouldIncludeInviteDescription: true,
      },
      properties: {
        hs_meeting_end_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_outcome: 'hs_meeting_outcome',
        hs_meeting_start_time: '2019-12-27T18:11:19.117Z',
        hs_meeting_title: 'hs_meeting_title',
        hs_timestamp: '2019-12-27T18:11:19.117Z',
        hs_activity_type: 'hs_activity_type',
        hs_attachment_ids: ['string'],
        hs_attendee_owner_ids: ['string'],
        hs_internal_meeting_notes: 'hs_internal_meeting_notes',
        hs_meeting_body: 'hs_meeting_body',
        hs_meeting_location: 'hs_meeting_location',
        hs_meeting_location_type: 'hs_meeting_location_type',
        hubspot_owner_id: 'hubspot_owner_id',
      },
      timezone: 'timezone',
    });
  });
});
