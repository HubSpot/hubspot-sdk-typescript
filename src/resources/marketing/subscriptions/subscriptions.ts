// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V4API from './v4';
import {
  ActionResponseWithResultsPublicStatus,
  ActionResponseWithResultsPublicWideStatus,
  ActionResponseWithResultsSubscriptionDefinition,
  BatchInputPublicStatusRequest,
  BatchResponsePublicBulkOptOutFromAllResponse,
  BatchResponsePublicStatus,
  BatchResponsePublicStatusBulkResponse,
  BatchResponsePublicStatusBulkResponseWithErrors,
  BatchResponsePublicWideStatusBulkResponse,
  BatchResponsePublicWideStatusBulkResponseWithErrors,
  PartialPublicStatusRequest,
  PublicBulkOptOutFromAllResponse,
  PublicStatus,
  PublicStatusBulkResponse,
  PublicStatusRequest,
  PublicSubscriptionTranslation,
  PublicWideStatus,
  PublicWideStatusBulkResponse,
  V4,
} from './v4';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  v4: V4API.V4 = new V4API.V4(this._client);

  /**
   * Get a list of all subscription definitions for the portal
   *
   * @example
   * ```ts
   * const subscriptionDefinitionsResponse =
   *   await client.marketing.subscriptions.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SubscriptionDefinitionsResponse> {
    return this._client.get('/communication-preferences/v3/definitions', options);
  }

  /**
   * Returns a list of subscriptions and their status for a given contact.
   *
   * @example
   * ```ts
   * const publicSubscriptionStatusesResponse =
   *   await client.marketing.subscriptions.getEmailStatus(
   *     'emailAddress',
   *   );
   * ```
   */
  getEmailStatus(
    emailAddress: string,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatusesResponse> {
    return this._client.get(path`/communication-preferences/v3/status/email/${emailAddress}`, options);
  }

  /**
   * Subscribes a contact to the given subscription type. This API is not valid to
   * use for subscribing a contact at a brand or portal level and will return an
   * error.
   *
   * @example
   * ```ts
   * const publicSubscriptionStatus =
   *   await client.marketing.subscriptions.subscribe({
   *     emailAddress: 'emailAddress',
   *     subscriptionId: 'subscriptionId',
   *   });
   * ```
   */
  subscribe(
    body: SubscriptionSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/subscribe', { body, ...options });
  }

  /**
   * Unsubscribes a contact from the given subscription type. This API is not valid
   * to use for unsubscribing a contact at a brand or portal level and will return an
   * error.
   *
   * @example
   * ```ts
   * const publicSubscriptionStatus =
   *   await client.marketing.subscriptions.unsubscribe({
   *     emailAddress: 'emailAddress',
   *     subscriptionId: 'subscriptionId',
   *   });
   * ```
   */
  unsubscribe(
    body: SubscriptionUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<PublicSubscriptionStatus> {
    return this._client.post('/communication-preferences/v3/unsubscribe', { body, ...options });
  }
}

export interface PublicSubscriptionStatus {
  /**
   * The ID for the subscription.
   */
  id: string;

  /**
   * A description of the subscription.
   */
  description: string;

  /**
   * The name of the subscription.
   */
  name: string;

  /**
   * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted
   * out from the portal.
   */
  sourceOfStatus: 'PORTAL_WIDE_STATUS' | 'BRAND_WIDE_STATUS' | 'SUBSCRIPTION_STATUS';

  /**
   * Whether the contact is subscribed.
   */
  status: 'SUBSCRIBED' | 'NOT_SUBSCRIBED';

  /**
   * The ID of the brand that the subscription is associated with, if there is one.
   */
  brandId?: number;

  /**
   * The legal reason for the current status of the subscription.
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * A more detailed explanation to go with the legal basis.
   */
  legalBasisExplanation?: string;

  /**
   * The name of the preferences group that the subscription is associated with.
   */
  preferenceGroupName?: string;
}

export interface PublicSubscriptionStatusesResponse {
  /**
   * Email address of the contact.
   */
  recipient: string;

  /**
   * A list of all of the contact's subscriptions statuses.
   */
  subscriptionStatuses: Array<PublicSubscriptionStatus>;
}

export interface PublicUpdateSubscriptionStatusRequest {
  /**
   * Contact's email address.
   */
  emailAddress: string;

  /**
   * ID of the subscription being updated for the contact.
   */
  subscriptionId: string;

  /**
   * Legal basis for updating the contact's status (required for GDPR enabled
   * portals).
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * A more detailed explanation to go with the legal basis (required for GDPR
   * enabled portals).
   */
  legalBasisExplanation?: string;
}

export interface SubscriptionDefinition {
  /**
   * The ID of the definition.
   */
  id: string;

  /**
   * Time at which the definition was created.
   */
  createdAt: string;

  /**
   * A description of the subscription.
   */
  description: string;

  /**
   * Whether the definition is active or archived.
   */
  isActive: boolean;

  /**
   * A subscription definition created by HubSpot.
   */
  isDefault: boolean;

  /**
   * A default description that is used by some HubSpot tools and cannot be edited.
   */
  isInternal: boolean;

  /**
   * The name of the subscription.
   */
  name: string;

  /**
   * Time at which the definition was last updated.
   */
  updatedAt: string;

  businessUnitId?: number;

  /**
   * The method or technology used to contact.
   */
  communicationMethod?: string;

  /**
   * The purpose of this subscription or the department in your organization that
   * uses it.
   */
  purpose?: string;
}

export interface SubscriptionDefinitionsResponse {
  /**
   * A list of all subscription definitions.
   */
  subscriptionDefinitions: Array<SubscriptionDefinition>;
}

export interface SubscriptionSubscribeParams {
  /**
   * Contact's email address.
   */
  emailAddress: string;

  /**
   * ID of the subscription being updated for the contact.
   */
  subscriptionId: string;

  /**
   * Legal basis for updating the contact's status (required for GDPR enabled
   * portals).
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * A more detailed explanation to go with the legal basis (required for GDPR
   * enabled portals).
   */
  legalBasisExplanation?: string;
}

export interface SubscriptionUnsubscribeParams {
  /**
   * Contact's email address.
   */
  emailAddress: string;

  /**
   * ID of the subscription being updated for the contact.
   */
  subscriptionId: string;

  /**
   * Legal basis for updating the contact's status (required for GDPR enabled
   * portals).
   */
  legalBasis?:
    | 'LEGITIMATE_INTEREST_PQL'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'CONSENT_WITH_NOTICE'
    | 'NON_GDPR'
    | 'PROCESS_AND_STORE'
    | 'LEGITIMATE_INTEREST_OTHER';

  /**
   * A more detailed explanation to go with the legal basis (required for GDPR
   * enabled portals).
   */
  legalBasisExplanation?: string;
}

Subscriptions.V4 = V4;

export declare namespace Subscriptions {
  export {
    type PublicSubscriptionStatus as PublicSubscriptionStatus,
    type PublicSubscriptionStatusesResponse as PublicSubscriptionStatusesResponse,
    type PublicUpdateSubscriptionStatusRequest as PublicUpdateSubscriptionStatusRequest,
    type SubscriptionDefinition as SubscriptionDefinition,
    type SubscriptionDefinitionsResponse as SubscriptionDefinitionsResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };

  export {
    V4 as V4,
    type ActionResponseWithResultsPublicStatus as ActionResponseWithResultsPublicStatus,
    type ActionResponseWithResultsPublicWideStatus as ActionResponseWithResultsPublicWideStatus,
    type ActionResponseWithResultsSubscriptionDefinition as ActionResponseWithResultsSubscriptionDefinition,
    type BatchInputPublicStatusRequest as BatchInputPublicStatusRequest,
    type BatchResponsePublicBulkOptOutFromAllResponse as BatchResponsePublicBulkOptOutFromAllResponse,
    type BatchResponsePublicStatus as BatchResponsePublicStatus,
    type BatchResponsePublicStatusBulkResponse as BatchResponsePublicStatusBulkResponse,
    type BatchResponsePublicStatusBulkResponseWithErrors as BatchResponsePublicStatusBulkResponseWithErrors,
    type BatchResponsePublicWideStatusBulkResponse as BatchResponsePublicWideStatusBulkResponse,
    type BatchResponsePublicWideStatusBulkResponseWithErrors as BatchResponsePublicWideStatusBulkResponseWithErrors,
    type PartialPublicStatusRequest as PartialPublicStatusRequest,
    type PublicBulkOptOutFromAllResponse as PublicBulkOptOutFromAllResponse,
    type PublicStatus as PublicStatus,
    type PublicStatusBulkResponse as PublicStatusBulkResponse,
    type PublicStatusRequest as PublicStatusRequest,
    type PublicSubscriptionTranslation as PublicSubscriptionTranslation,
    type PublicWideStatus as PublicWideStatus,
    type PublicWideStatusBulkResponse as PublicWideStatusBulkResponse,
  };
}
