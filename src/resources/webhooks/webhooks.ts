// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings } from './settings';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionGetParams,
  SubscriptionUpdateBatchParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions';

export class Webhooks extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

export interface BatchInputSubscriptionBatchUpdateRequest {
  inputs: Array<SubscriptionBatchUpdateRequest>;
}

export interface BatchResponseSubscriptionResponse {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  /**
   * The list of results from the batch operation.
   */
  results: Array<SubscriptionResponse>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, which can be PENDING, PROCESSING,
   * CANCELED, or COMPLETE.
   */
  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  /**
   * A collection of related links associated with the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponseSubscriptionResponseWithErrors {
  completedAt: string;

  results: Array<SubscriptionResponse>;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

/**
 * New or updated webhook settings for an app.
 */
export interface SettingsChangeRequest {
  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: ThrottlingSettings;
}

/**
 * Webhook settings for an app.
 */
export interface SettingsResponse {
  /**
   * When this subscription was created. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  createdAt: string;

  /**
   * A publicly available URL for HubSpot to call where event payloads will be
   * delivered. See [link-so-some-doc](#) for details about the format of these event
   * payloads.
   */
  targetUrl: string;

  /**
   * Configuration details for webhook throttling.
   */
  throttling: ThrottlingSettings;

  /**
   * When this subscription was last updated. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  updatedAt?: string;
}

export interface SubscriptionBatchUpdateRequest {
  id: number;

  active: boolean;
}

/**
 * New webhook settings for an app.
 */
export interface SubscriptionCreateRequest {
  /**
   * Type of event to listen for. Can be one of `create`, `delete`,
   * `deletedForPrivacy`, or `propertyChange`.
   */
  eventType:
    | 'contact.propertyChange'
    | 'company.propertyChange'
    | 'deal.propertyChange'
    | 'ticket.propertyChange'
    | 'product.propertyChange'
    | 'line_item.propertyChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.privacyDeletion'
    | 'company.creation'
    | 'company.deletion'
    | 'deal.creation'
    | 'deal.deletion'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'product.creation'
    | 'product.deletion'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'contact.merge'
    | 'company.merge'
    | 'deal.merge'
    | 'ticket.merge'
    | 'product.merge'
    | 'line_item.merge'
    | 'contact.restore'
    | 'company.restore'
    | 'deal.restore'
    | 'ticket.restore'
    | 'product.restore'
    | 'line_item.restore'
    | 'contact.associationChange'
    | 'company.associationChange'
    | 'deal.associationChange'
    | 'ticket.associationChange'
    | 'line_item.associationChange'
    | 'object.propertyChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.restore'
    | 'object.associationChange';

  /**
   * Determines if the subscription is active or paused. Defaults to false.
   */
  active?: boolean;

  objectTypeId?: string;

  /**
   * The internal name of the property to monitor for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;
}

/**
 * List of event subscriptions for your app
 */
export interface SubscriptionListResponse {
  /**
   * List of event subscriptions for your app
   */
  results: Array<SubscriptionResponse>;
}

/**
 * Updated details for the subscription.
 */
export interface SubscriptionPatchRequest {
  /**
   * Determines if the subscription is active or paused.
   */
  active?: boolean;
}

/**
 * Complete details for an event subscription.
 */
export interface SubscriptionResponse {
  /**
   * The unique ID of the subscription.
   */
  id: string;

  /**
   * Determines if the subscription is active or paused.
   */
  active: boolean;

  /**
   * When this subscription was created. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  createdAt: string;

  /**
   * Type of event to listen for. Can be one of `create`, `delete`,
   * `deletedForPrivacy`, or `propertyChange`.
   */
  eventType:
    | 'contact.propertyChange'
    | 'company.propertyChange'
    | 'deal.propertyChange'
    | 'ticket.propertyChange'
    | 'product.propertyChange'
    | 'line_item.propertyChange'
    | 'contact.creation'
    | 'contact.deletion'
    | 'contact.privacyDeletion'
    | 'company.creation'
    | 'company.deletion'
    | 'deal.creation'
    | 'deal.deletion'
    | 'ticket.creation'
    | 'ticket.deletion'
    | 'product.creation'
    | 'product.deletion'
    | 'line_item.creation'
    | 'line_item.deletion'
    | 'conversation.creation'
    | 'conversation.deletion'
    | 'conversation.newMessage'
    | 'conversation.privacyDeletion'
    | 'conversation.propertyChange'
    | 'contact.merge'
    | 'company.merge'
    | 'deal.merge'
    | 'ticket.merge'
    | 'product.merge'
    | 'line_item.merge'
    | 'contact.restore'
    | 'company.restore'
    | 'deal.restore'
    | 'ticket.restore'
    | 'product.restore'
    | 'line_item.restore'
    | 'contact.associationChange'
    | 'company.associationChange'
    | 'deal.associationChange'
    | 'ticket.associationChange'
    | 'line_item.associationChange'
    | 'object.propertyChange'
    | 'object.creation'
    | 'object.deletion'
    | 'object.merge'
    | 'object.restore'
    | 'object.associationChange';

  /**
   * The identifier of the object type associated with the subscription.
   */
  objectTypeId?: string;

  /**
   * The internal name of the property being monitored for changes. Only applies when
   * `eventType` is `propertyChange`.
   */
  propertyName?: string;

  /**
   * When this subscription was last updated. Formatted as milliseconds from the
   * [Unix epoch](#).
   */
  updatedAt?: string;
}

/**
 * Configuration details for webhook throttling.
 */
export interface ThrottlingSettings {
  /**
   * The maximum number of concurrent HTTP requests HubSpot will attempt to make to
   * your app.
   */
  maxConcurrentRequests: number;
}

Webhooks.Settings = Settings;
Webhooks.Subscriptions = Subscriptions;

export declare namespace Webhooks {
  export {
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type BatchResponseSubscriptionResponseWithErrors as BatchResponseSubscriptionResponseWithErrors,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type ThrottlingSettings as ThrottlingSettings,
  };

  export { Settings as Settings, type SettingUpdateParams as SettingUpdateParams };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionGetParams as SubscriptionGetParams,
    type SubscriptionUpdateBatchParams as SubscriptionUpdateBatchParams,
  };
}
