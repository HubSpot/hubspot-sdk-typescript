# Scheduler

## Meetings

Types:

- <code><a href="./src/resources/scheduler/meetings/meetings.ts">CollectionResponseWithTotalExternalLinkMetadata</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalAssociationCreateRequest</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalBookingFormField</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalBookingInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalBrandingMetadata</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalCalendarMeetingEventCreateProperties</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalCalendarMeetingEventCreateRequest</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalCalendarMeetingEventResponseProperties</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalCalenderMeetingEventResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalClosedRange</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalCommunicationConsentCheckbox</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalEmailReminderSchedule</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalGuestSettings</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLegalConsentOptions</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLegalConsentResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkAvailability</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkAvailabilityAndBusyTimes</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkAvailabilityForDuration</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkDisplayInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkFormField</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalLinkMetadata</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingAvailability</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingBooking</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingBookingResponse</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingsLinkSettings</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingsUser</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalMeetingsWelcomeScreenInfo</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalOption</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalReminder</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalTimeRange</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalUserBusyTimes</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalUserProfile</a></code>
- <code><a href="./src/resources/scheduler/meetings/meetings.ts">ExternalValidatedFormField</a></code>

### Advanced

Methods:

- <code title="post /scheduler/2026-03/meetings/calendar">client.scheduler.meetings.advanced.<a href="./src/resources/scheduler/meetings/advanced.ts">create</a>({ ...params }) -> ExternalCalenderMeetingEventResponse</code>
- <code title="post /scheduler/2026-03/meetings/meeting-links/book">client.scheduler.meetings.advanced.<a href="./src/resources/scheduler/meetings/advanced.ts">book</a>({ ...params }) -> ExternalMeetingBookingResponse</code>

### Basic

Methods:

- <code title="get /scheduler/2026-03/meetings/meeting-links">client.scheduler.meetings.basic.<a href="./src/resources/scheduler/meetings/basic.ts">list</a>({ ...params }) -> ExternalLinkMetadataPage</code>
- <code title="get /scheduler/2026-03/meetings/meeting-links/book/availability-page/{slug}">client.scheduler.meetings.basic.<a href="./src/resources/scheduler/meetings/basic.ts">getAvailabilityBySlug</a>(slug, { ...params }) -> ExternalLinkAvailabilityAndBusyTimes</code>
- <code title="get /scheduler/2026-03/meetings/meeting-links/book/{slug}">client.scheduler.meetings.basic.<a href="./src/resources/scheduler/meetings/basic.ts">getBookingInfoBySlug</a>(slug, { ...params }) -> ExternalBookingInfo</code>
