// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EventsAPI from './events';
import { ExternalBehavioralEventTypeDefinitionsPage } from './events';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Definitions extends APIResource {
  create(
    body: DefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.ExternalBehavioralEventTypeDefinition> {
    return this._client.post('/events/custom/2026-03/event-definitions', { body, ...options });
  }

  update(
    eventName: string,
    body: DefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.ExternalBehavioralEventTypeDefinition> {
    return this._client.patch(path`/events/custom/2026-03/event-definitions/${eventName}`, {
      body,
      ...options,
    });
  }

  list(
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    ExternalBehavioralEventTypeDefinitionsPage,
    EventsAPI.ExternalBehavioralEventTypeDefinition
  > {
    return this._client.getAPIList(
      '/events/custom/2026-03/event-definitions',
      Page<EventsAPI.ExternalBehavioralEventTypeDefinition>,
      { query, ...options },
    );
  }

  delete(eventName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/events/custom/2026-03/event-definitions/${eventName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  createProperty(
    eventName: string,
    body: DefinitionCreatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    return this._client.post(path`/events/custom/2026-03/event-definitions/${eventName}/property`, {
      body,
      ...options,
    });
  }

  deleteProperty(
    propertyName: string,
    params: DefinitionDeletePropertyParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { eventName } = params;
    return this._client.delete(
      path`/events/custom/2026-03/event-definitions/${eventName}/property/${propertyName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  get(
    eventName: string,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.ExternalBehavioralEventTypeDefinition> {
    return this._client.get(path`/events/custom/2026-03/event-definitions/${eventName}`, options);
  }

  send(body: DefinitionSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/custom/2026-03/send', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  sendBatch(body: DefinitionSendBatchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/events/custom/2026-03/send/batch', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateProperty(
    propertyName: string,
    params: DefinitionUpdatePropertyParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Property> {
    const { eventName, ...body } = params;
    return this._client.patch(
      path`/events/custom/2026-03/event-definitions/${eventName}/property/${propertyName}`,
      { body, ...options },
    );
  }
}

export interface DefinitionCreateParams {
  includeDefaultProperties: boolean;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label: string;

  /**
   * List of custom properties on event
   */
  propertyDefinitions: Array<EventsAPI.ExternalBehavioralEventPropertyCreate>;

  customMatchingId?: EventsAPI.ExternalObjectResolutionMappingRequest;

  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal event name, which must be used when referencing the event from this
   * event definitions API. If a name is not supplied, one will be generated based on
   * the label. The `name` value will also be used to automatically generate a
   * `fullyQualifiedName` for the event definition, which you'll use when sending
   * event completions to this event.
   */
  name?: string;

  /**
   * The object type to associate this event to. Can be one of CONTACT, COMPANY,
   * DEAL, TICKET. If no primaryObject is supplied, we will default to associating
   * the event to CONTACT objects.
   */
  primaryObject?: string;
}

export interface DefinitionUpdateParams {
  /**
   * A description of the event that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Human readable label for the event. Used in HubSpot UI
   */
  label?: string;
}

export interface DefinitionListParams extends PageParams {
  includeProperties?: boolean;

  searchString?: string;

  sortOrder?: string;
}

export interface DefinitionCreatePropertyParams {
  /**
   * Human readable label for the property. Used in HubSpot UI
   */
  label: string;

  /**
   * The data type of the property. Can be one of the following: [string, number,
   * enumeration, datetime]
   */
  type: string;

  /**
   * A description of the property that will be shown as help text in HubSpot.
   */
  description?: string;

  /**
   * Internal property name, which must be used when referencing the property from
   * the API
   */
  name?: string;

  /**
   * A list of available options for the property if it is an enumeration. NOTE: This
   * field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export interface DefinitionDeletePropertyParams {
  eventName: string;
}

export interface DefinitionSendParams {
  /**
   * Internal name of the event-type to trigger
   */
  eventName: string;

  /**
   * Map of properties for the event in the format property internal name - property
   * value
   */
  properties: { [key: string]: string };

  /**
   * Email of visitor
   */
  email?: string;

  /**
   * The object id that this event occurred on. Could be a contact id or a visitor
   * id.
   */
  objectId?: string;

  /**
   * The time when this event occurred (if any). If this isn't set, the current time
   * will be used
   */
  occurredAt?: string;

  /**
   * User token
   */
  utk?: string;

  uuid?: string;
}

export interface DefinitionSendBatchParams {
  inputs: Array<EventsAPI.BehavioralEventHTTPCompletionRequest>;
}

export interface DefinitionUpdatePropertyParams {
  /**
   * Path param
   */
  eventName: string;

  /**
   * Body param: A description of the property that will be shown as help text in
   * HubSpot.
   */
  description?: string;

  /**
   * Body param: Human readable label for the property. Used in HubSpot UI
   */
  label?: string;

  /**
   * Body param: A list of available options for the property if it is an
   * enumeration. NOTE: This field is only applicable for enumerated properties.
   */
  options?: Array<Shared.OptionInput>;
}

export declare namespace Definitions {
  export {
    type DefinitionCreateParams as DefinitionCreateParams,
    type DefinitionUpdateParams as DefinitionUpdateParams,
    type DefinitionListParams as DefinitionListParams,
    type DefinitionCreatePropertyParams as DefinitionCreatePropertyParams,
    type DefinitionDeletePropertyParams as DefinitionDeletePropertyParams,
    type DefinitionSendParams as DefinitionSendParams,
    type DefinitionSendBatchParams as DefinitionSendBatchParams,
    type DefinitionUpdatePropertyParams as DefinitionUpdatePropertyParams,
  };
}

export { type ExternalBehavioralEventTypeDefinitionsPage };
