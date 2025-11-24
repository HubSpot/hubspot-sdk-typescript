// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EventsAPI from './events';
import {
  EventBatchCreateParams,
  EventCreateParams,
  EventGetDetailParams,
  EventGetParams,
  Events,
} from './events';
import * as TemplatesAPI from './templates';
import {
  TemplateCreateParams,
  TemplateDeleteParams,
  TemplateGetParams,
  TemplateUpdateParams,
  Templates,
} from './templates';
import * as TokensAPI from './tokens';
import { TokenCreateParams, TokenDeleteParams, TokenUpdateParams, Tokens } from './tokens';

export class Timeline extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

/**
 * Used to create timeline events in batches.
 */
export interface BatchInputTimelineEvent {
  /**
   * A collection of timeline events we want to create.
   */
  inputs: Array<TimelineEvent>;
}

/**
 * The state of the batch event request.
 */
export interface BatchResponseTimelineEventResponse {
  /**
   * The time the request was completed.
   */
  completedAt: string;

  /**
   * Successfully created events.
   */
  results: Array<TimelineEventResponse>;

  /**
   * The time the request began processing.
   */
  startedAt: string;

  /**
   * The status of the batch response. Should always be COMPLETED if processed.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  links?: { [key: string]: string };

  /**
   * The time the request occurred.
   */
  requestedAt?: string;
}

export interface BatchResponseTimelineEventResponseWithErrors {
  completedAt: string;

  results: Array<TimelineEventResponse>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseTimelineEventTemplateNoPaging {
  results: Array<TimelineEventTemplate>;
}

/**
 * The details Markdown rendered as HTML.
 */
export interface EventDetail {
  /**
   * The details Markdown rendered as HTML.
   */
  details: string;
}

/**
 * The state of the timeline event.
 */
export interface TimelineEvent {
  /**
   * The event template ID.
   */
  eventTemplateId: string;

  /**
   * A collection of token keys and values associated with the template tokens.
   */
  tokens: { [key: string]: string };

  /**
   * Identifier for the event. This is optional, and we recommend you do not pass
   * this in. We will create one for you if you omit this. You can also use
   * `{{uuid}}` anywhere in the ID to generate a unique string, guaranteeing
   * uniqueness.
   */
  id?: string;

  /**
   * The event domain (often paired with utk).
   */
  domain?: string;

  /**
   * The email address used for contact-specific events. This can be used to identify
   * existing contacts, create new ones, or change the email for an existing contact
   * (if paired with the `objectId`).
   */
  email?: string;

  /**
   * Additional event-specific data that can be interpreted by the template's
   * markdown.
   */
  extraData?: unknown;

  /**
   * The CRM object identifier. This is required for every event other than contacts
   * (where utk or email can be used).
   */
  objectId?: string;

  timelineIFrame?: TimelineEventIFrame;

  /**
   * The time the event occurred. If not passed in, the curren time will be assumed.
   * This is used to determine where an event is shown on a CRM object's timeline.
   */
  timestamp?: string;

  /**
   * Use the `utk` parameter to associate an event with a contact by `usertoken`.
   * This is recommended if you don't know a user's email, but have an identifying
   * user token in your cookie.
   */
  utk?: string;
}

export interface TimelineEventIFrame {
  /**
   * The label of the modal window that displays the iframe contents.
   */
  headerLabel: string;

  /**
   * The height of the modal window in pixels.
   */
  height: number;

  /**
   * The text displaying the link that will display the iframe.
   */
  linkLabel: string;

  /**
   * The URI of the iframe contents.
   */
  url: string;

  /**
   * The width of the modal window in pixels.
   */
  width: number;
}

/**
 * The current state of the timeline event.
 */
export interface TimelineEventResponse {
  /**
   * Identifier for the event. This should be unique to the app and event template.
   * If you use the same ID for different CRM objects, the last to be processed will
   * win and the first will not have a record. You can also use `{{uuid}}` anywhere
   * in the ID to generate a unique string, guaranteeing uniqueness.
   */
  id: string;

  /**
   * The event template ID.
   */
  eventTemplateId: string;

  /**
   * The ObjectType associated with the EventTemplate.
   */
  objectType: string;

  /**
   * A collection of token keys and values associated with the template tokens.
   */
  tokens: { [key: string]: string };

  createdAt?: string;

  /**
   * The event domain (often paired with utk).
   */
  domain?: string;

  /**
   * The email address used for contact-specific events. This can be used to identify
   * existing contacts, create new ones, or change the email for an existing contact
   * (if paired with the `objectId`).
   */
  email?: string;

  /**
   * Additional event-specific data that can be interpreted by the template's
   * markdown.
   */
  extraData?: unknown;

  /**
   * The CRM object identifier. This is required for every event other than contacts
   * (where utk or email can be used).
   */
  objectId?: string;

  timelineIFrame?: TimelineEventIFrame;

  /**
   * The time the event occurred. If not passed in, the curren time will be assumed.
   * This is used to determine where an event is shown on a CRM object's timeline.
   */
  timestamp?: string;

  /**
   * Use the `utk` parameter to associate an event with a contact by `usertoken`.
   * This is recommended if you don't know a user's email, but have an identifying
   * user token in your cookie.
   */
  utk?: string;
}

/**
 * The current state of the template definition.
 */
export interface TimelineEventTemplate {
  /**
   * The template ID.
   */
  id: string;

  /**
   * The template name.
   */
  name: string;

  /**
   * The type of CRM object this template is for. [Contacts, companies, tickets, and
   * deals] are supported.
   */
  objectType: string;

  /**
   * A collection of tokens that can be used as custom properties on the event and to
   * create fully fledged CRM objects.
   */
  tokens: Array<TimelineEventTemplateToken>;

  /**
   * The date and time that the Event Template was created, as an ISO 8601 timestamp.
   * Will be null if the template was created before Feb 18th, 2020.
   */
  createdAt?: string;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline when you expand the details.
   */
  detailTemplate?: string;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline as a header.
   */
  headerTemplate?: string;

  /**
   * The date and time that the Event Template was last updated, as an ISO 8601
   * timestamp. Will be null if the template was created before Feb 18th, 2020.
   */
  updatedAt?: string;
}

/**
 * State of the template definition being created.
 */
export interface TimelineEventTemplateCreateRequest {
  /**
   * The template name.
   */
  name: string;

  /**
   * The type of CRM object this template is for. [Contacts, companies, tickets, and
   * deals] are supported.
   */
  objectType: string;

  /**
   * A collection of tokens that can be used as custom properties on the event and to
   * create fully fledged CRM objects.
   */
  tokens: Array<TimelineEventTemplateToken>;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline when you expand the details.
   */
  detailTemplate?: string;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline as a header.
   */
  headerTemplate?: string;
}

/**
 * State of the token definition.
 */
export interface TimelineEventTemplateToken {
  /**
   * Used for list segmentation and reporting.
   */
  label: string;

  /**
   * The name of the token referenced in the templates. This must be unique for the
   * specific template. It may only contain alphanumeric characters, periods, dashes,
   * or underscores (. - \_).
   */
  name: string;

  /**
   * The data type of the token. You can currently choose from [string, number, date,
   * enumeration].
   */
  type: 'date' | 'enumeration' | 'number' | 'string';

  /**
   * The date and time that the Event Template Token was created, as an ISO 8601
   * timestamp. Will be null if the template was created before Feb 18th, 2020.
   */
  createdAt?: string;

  /**
   * The name of the CRM object property. This will populate the CRM object property
   * associated with the event. With enough of these, you can fully build CRM objects
   * via the Timeline API.
   */
  objectPropertyName?: string;

  /**
   * If type is `enumeration`, we should have a list of options to choose from.
   */
  options?: Array<TimelineEventTemplateTokenOption>;

  /**
   * The date and time that the Event Template Token was last updated, as an ISO 8601
   * timestamp. Will be null if the template was created before Feb 18th, 2020.
   */
  updatedAt?: string;
}

export interface TimelineEventTemplateTokenOption {
  label: string;

  value: string;
}

/**
 * State of the token definition for update requests.
 */
export interface TimelineEventTemplateTokenUpdateRequest {
  /**
   * Used for list segmentation and reporting.
   */
  label: string;

  /**
   * The name of the CRM object property. This will populate the CRM object property
   * associated with the event. With enough of these, you can fully build CRM objects
   * via the Timeline API.
   */
  objectPropertyName?: string;

  /**
   * If type is `enumeration`, we should have a list of options to choose from.
   */
  options?: Array<TimelineEventTemplateTokenOption>;
}

/**
 * State of the template definition being updated.
 */
export interface TimelineEventTemplateUpdateRequest {
  /**
   * The template ID.
   */
  id: string;

  /**
   * The template name.
   */
  name: string;

  /**
   * A collection of tokens that can be used as custom properties on the event and to
   * create fully fledged CRM objects.
   */
  tokens: Array<TimelineEventTemplateToken>;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline when you expand the details.
   */
  detailTemplate?: string;

  /**
   * This uses Markdown syntax with Handlebars and event-specific data to render HTML
   * on a timeline as a header.
   */
  headerTemplate?: string;
}

Timeline.Events = Events;
Timeline.Templates = Templates;
Timeline.Tokens = Tokens;

export declare namespace Timeline {
  export {
    type BatchInputTimelineEvent as BatchInputTimelineEvent,
    type BatchResponseTimelineEventResponse as BatchResponseTimelineEventResponse,
    type BatchResponseTimelineEventResponseWithErrors as BatchResponseTimelineEventResponseWithErrors,
    type CollectionResponseTimelineEventTemplateNoPaging as CollectionResponseTimelineEventTemplateNoPaging,
    type EventDetail as EventDetail,
    type TimelineEvent as TimelineEvent,
    type TimelineEventIFrame as TimelineEventIFrame,
    type TimelineEventResponse as TimelineEventResponse,
    type TimelineEventTemplate as TimelineEventTemplate,
    type TimelineEventTemplateCreateRequest as TimelineEventTemplateCreateRequest,
    type TimelineEventTemplateToken as TimelineEventTemplateToken,
    type TimelineEventTemplateTokenOption as TimelineEventTemplateTokenOption,
    type TimelineEventTemplateTokenUpdateRequest as TimelineEventTemplateTokenUpdateRequest,
    type TimelineEventTemplateUpdateRequest as TimelineEventTemplateUpdateRequest,
  };

  export {
    Events as Events,
    type EventCreateParams as EventCreateParams,
    type EventBatchCreateParams as EventBatchCreateParams,
    type EventGetParams as EventGetParams,
    type EventGetDetailParams as EventGetDetailParams,
  };

  export {
    Templates as Templates,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateDeleteParams as TemplateDeleteParams,
    type TemplateGetParams as TemplateGetParams,
  };

  export {
    Tokens as Tokens,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenDeleteParams as TokenDeleteParams,
  };
}
