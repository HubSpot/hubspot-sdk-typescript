// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DefinitionsAPI from './definitions';
import { BaseDefinitions, DefinitionListParams, Definitions } from './definitions';
import * as StatusesAPI from './statuses/statuses';
import { BaseStatuses, Statuses } from './statuses/statuses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCommunicationPreferences extends APIResource {
  static override readonly _key: readonly ['communicationPreferences'] = Object.freeze([
    'communicationPreferences',
  ] as const);

  /**
   * Generate communication preference links for a subscriber. This endpoint allows
   * you to create URLs for managing preferences and unsubscribing, tailored to a
   * specific subscriber. It is useful for integrating communication preference
   * management into your applications.
   */
  generateLinks(
    params: CommunicationPreferenceGenerateLinksParams,
    options?: RequestOptions,
  ): APIPromise<LinkGenerationResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/2026-03/links/generate', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a contact's current email subscription preferences.
   */
  getStatuses(
    subscriberIDString: string,
    query: CommunicationPreferenceGetStatusesParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    return this._client.get(path`/communication-preferences/2026-03/statuses/${subscriberIDString}`, {
      query,
      ...options,
    });
  }

  /**
   * Check whether a contact has unsubscribed from all email subscriptions. If a
   * contact has not opted out of all communications, the response `results` array
   * will be empty.
   */
  getUnsubscribeAllStatus(
    subscriberIDString: string,
    query: CommunicationPreferenceGetUnsubscribeAllStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicWideStatus> {
    return this._client.get(
      path`/communication-preferences/2026-03/statuses/${subscriberIDString}/unsubscribe-all`,
      { query, ...options },
    );
  }

  /**
   * Unsubscribe a contact from all email subscriptions.
   */
  unsubscribeAll(
    subscriberIDString: string,
    params: CommunicationPreferenceUnsubscribeAllParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    const { channel, businessUnitId, verbose } = params;
    return this._client.post(
      path`/communication-preferences/2026-03/statuses/${subscriberIDString}/unsubscribe-all`,
      { query: { channel, businessUnitId, verbose }, ...options },
    );
  }

  /**
   * Set the subscription status of a specific contact.
   */
  updateStatus(
    subscriberIDString: string,
    body: CommunicationPreferenceUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionResponseWithResultsPublicStatus> {
    return this._client.post(path`/communication-preferences/2026-03/statuses/${subscriberIDString}`, {
      body,
      ...options,
    });
  }
}
export class CommunicationPreferences extends BaseCommunicationPreferences {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

export interface ActionResponseWithResultsPublicStatus {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array of results from the operation.
   */
  results: Array<PublicStatus>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * Indicates the current status of the operation, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A list of errors that occurred during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Contains URLs related to the response, such as documentation or resources.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors that occurred during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface ActionResponseWithResultsPublicWideStatus {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicWideStatus>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface ActionResponseWithResultsSubscriptionDefinition {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<SubscriptionDefinition>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of errors that occurred during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of related links associated with the operation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the operation was requested.
   */
  requestedAt?: string;
}

export interface BatchInputPublicStatusRequest {
  /**
   * An array of PublicStatusRequest objects, each representing a subscription status
   * update request. This property is required.
   */
  inputs: Array<PublicStatusRequest>;
}

export interface BatchResponsePublicBulkOptOutFromAllResponse {
  /**
   * The date and time when the bulk opt-out operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the bulk opt-out from all communications
   * operation.
   */
  results: Array<PublicBulkOptOutFromAllResponse>;

  /**
   * The date and time when the bulk opt-out operation began.
   */
  startedAt: string;

  /**
   * The current status of the bulk opt-out operation, which can be PENDING,
   * PROCESSING, CANCELED, or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of error objects detailing any issues encountered during the bulk
   * opt-out operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * A collection of URLs linking to related resources or documentation.
   */
  links?: { [key: string]: string };

  /**
   * The total number of errors encountered during the bulk opt-out operation.
   */
  numErrors?: number;

  /**
   * The date and time when the bulk opt-out request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatus {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the batch operation.
   */
  results: Array<PublicStatus>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, which can be PENDING, PROCESSING,
   * CANCELED, or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of error objects detailing any issues encountered.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * URLs linking to related resources or documentation.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the batch operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponse {
  /**
   * The date and time when the batch process was completed.
   */
  completedAt: string;

  /**
   * The array of results from the batch process, each containing subscription status
   * information.
   */
  results: Array<PublicStatusBulkResponse>;

  /**
   * The date and time when the batch process began.
   */
  startedAt: string;

  /**
   * The current status of the batch process, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicStatusBulkResponseWithErrors {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicStatusBulkResponse>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponse {
  /**
   * The date and time when the batch process was completed.
   */
  completedAt: string;

  /**
   * The array of results from the batch process, each containing subscription status
   * information.
   */
  results: Array<PublicWideStatusBulkResponse>;

  /**
   * The date and time when the batch process began.
   */
  startedAt: string;

  /**
   * The current status of the batch process, with possible values: PENDING,
   * PROCESSING, CANCELED, COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A collection of related links associated with the batch response.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch request was made.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicWideStatusBulkResponseWithErrors {
  /**
   * The date and time when the operation was completed.
   */
  completedAt: string;

  /**
   * An array containing the results of the operation.
   */
  results: Array<PublicWideStatusBulkResponse>;

  /**
   * The date and time when the operation started.
   */
  startedAt: string;

  /**
   * The current status of the operation, which can be PENDING, PROCESSING, CANCELED,
   * or COMPLETE.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * An array of error objects detailing any issues encountered during the operation.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * An object containing related links, where each key is a link name and each value
   * is a URL.
   */
  links?: { [key: string]: string };

  /**
   * The number of errors encountered during the operation.
   */
  numErrors?: number;

  /**
   * The date and time when the operation was requested.
   */
  requestedAt?: string;
}

export interface LinkGenerationRequest {
  /**
   * A string representing the unique identifier of the subscriber. This property is
   * required.
   */
  subscriberIdString: string;

  /**
   * The language in which the generated link should be presented, represented as a
   * string.
   */
  language?: string;

  /**
   * The unique identifier for the subscription, represented as an integer in int64
   * format.
   */
  subscriptionId?: number;
}

export interface LinkGenerationResponse {
  /**
   * The URL where the subscriber can manage their communication preferences.
   */
  managePreferencesUrl: string;

  /**
   * A string representing the unique identifier of the subscriber.
   */
  subscriberIdString: string;

  /**
   * A string containing the URL for unsubscribing the subscriber from all
   * communications.
   */
  unsubscribeAllUrl: string;

  /**
   * A string containing the URL to unsubscribe the subscriber from a single
   * communication.
   */
  unsubscribeSingleUrl?: string;
}

export interface PartialPublicStatusRequest {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The unique identifier of the subscription to be updated.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;
}

export interface PublicBulkOptOutFromAllResponse {
  /**
   * The email address of the contact.
   */
  subscriberIdString: string;

  /**
   * An array of subscription status objects for the contact.
   */
  statuses?: Array<PublicStatus>;
}

export interface PublicStatus {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The origin or method through which the subscription status was set.
   */
  source: string;

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * The unique identifier of the subscription.
   */
  subscriptionId: number;

  /**
   * The date and time when the subscription status was last updated.
   */
  timestamp: string;

  /**
   * The ID of the business unit associated with the subscription.
   */
  businessUnitId?: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;

  /**
   * The reason for the successful change in subscription status, such as
   * 'RESUBSCRIBE_OCCURRED' or 'NO_STATUS_CHANGE'.
   */
  setStatusSuccessReason?:
    | 'NO_STATUS_CHANGE'
    | 'REQUESTED_CHANGE_OCCURRED'
    | 'RESUBSCRIBE_OCCURRED'
    | 'UNSUBSCRIBE_FROM_ALL_OCCURRED';

  /**
   * The name of the subscription.
   */
  subscriptionName?: string;
}

export interface PublicStatusBulkResponse {
  /**
   * An array of subscription status objects for the contact.
   */
  statuses: Array<PublicStatus>;

  /**
   * The email address of the contact.
   */
  subscriberIdString: string;
}

export interface PublicStatusRequest {
  /**
   * The type of communication channel. Currently, only `EMAIL` is supported.
   */
  channel: 'EMAIL';

  /**
   * The status of the contact's subscription.
   */
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * The ID of the subscription to update.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * The explanation for the legal basis.
   */
  legalBasisExplanation?: string;
}

export interface PublicSubscriptionTranslation {
  /**
   * The timestamp indicating when the subscription translation was created.
   */
  createdAt: number;

  /**
   * A text description of the subscription translation.
   */
  description: string;

  /**
   * The code representing the language of the subscription translation.
   */
  languageCode: string;

  /**
   * The name of the subscription translation.
   */
  name: string;

  /**
   * The unique identifier for the subscription associated with the translation.
   */
  subscriptionId: number;

  /**
   * The timestamp indicating when the subscription translation was last updated.
   */
  updatedAt: number;
}

export interface PublicWideStatus {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  status: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The email address of the contact.
   */
  subscriberIdString: string;

  /**
   * The date and time when the status was recorded.
   */
  timestamp: string;

  /**
   * The type of wide status, which can be 'PORTAL_WIDE' or 'BUSINESS_UNIT_WIDE'.
   */
  wideStatusType: 'BUSINESS_UNIT_WIDE' | 'PORTAL_WIDE';

  /**
   * The ID of the business unit associated with the status.
   */
  businessUnitId?: number;
}

export interface PublicWideStatusBulkResponse {
  /**
   * The contact's email address.
   */
  subscriberIdString: string;

  /**
   * An array containing the wide status results for the operation.
   */
  wideStatuses: Array<PublicWideStatus>;
}

export interface SubscriptionDefinition {
  /**
   * The unique identifier for the subscription.
   */
  id: string;

  /**
   * The date and time when the subscription was created.
   */
  createdAt: string;

  /**
   * A description of the subscription.
   */
  description: string;

  /**
   * Indicates whether the subscription is active.
   */
  isActive: boolean;

  /**
   * Indicates whether the subscription is the default option.
   */
  isDefault: boolean;

  /**
   * Indicates whether the subscription is internal.
   */
  isInternal: boolean;

  /**
   * The name of the subscription.
   */
  name: string;

  /**
   * The date and time when the subscription was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the business unit associated with the subscription.
   */
  businessUnitId?: number;

  /**
   * The method of communication for the subscription.
   */
  communicationMethod?: string;

  /**
   * The purpose of the subscription.
   */
  purpose?: string;

  /**
   * A list of translations associated with the subscription.
   */
  subscriptionTranslations?: Array<PublicSubscriptionTranslation>;
}

export interface CommunicationPreferenceGenerateLinksParams {
  /**
   * Query param: The communication channel for which the links are generated. Must
   * be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * Body param: A string representing the unique identifier of the subscriber. This
   * property is required.
   */
  subscriberIdString: string;

  /**
   * Query param: The identifier of the business unit. Defaults to 0 if not
   * specified.
   */
  businessUnitId?: number;

  /**
   * Body param: The language in which the generated link should be presented,
   * represented as a string.
   */
  language?: string;

  /**
   * Body param: The unique identifier for the subscription, represented as an
   * integer in int64 format.
   */
  subscriptionId?: number;
}

export interface CommunicationPreferenceGetStatusesParams {
  /**
   * The communication channel for which the subscription status is being retrieved.
   * This parameter is required and currently supports only 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * The ID of the business unit to filter the subscription status by. This is an
   * optional parameter.
   */
  businessUnitId?: number;
}

export interface CommunicationPreferenceGetUnsubscribeAllStatusParams {
  /**
   * The communication channel from which to unsubscribe the subscriber. This is a
   * required parameter and must be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * The ID of the business unit to which the subscriber belongs. This is an optional
   * parameter.
   */
  businessUnitId?: number;

  /**
   * A boolean indicating whether to include detailed information in the response.
   * Defaults to false.
   */
  verbose?: boolean;
}

export interface CommunicationPreferenceUnsubscribeAllParams {
  /**
   * The communication channel to unsubscribe from. Must be 'EMAIL'.
   */
  channel: 'EMAIL';

  /**
   * The ID of the business unit associated with the request. This is an optional
   * integer parameter.
   */
  businessUnitId?: number;

  /**
   * A boolean indicating whether to include detailed information in the response.
   * Defaults to false.
   */
  verbose?: boolean;
}

export interface CommunicationPreferenceUpdateStatusParams {
  /**
   * The type of communication channel, with 'EMAIL' as the only supported option.
   */
  channel: 'EMAIL';

  /**
   * The current subscription status of the contact, which can be 'SUBSCRIBED',
   * 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.
   */
  statusState: 'NOT_SPECIFIED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';

  /**
   * The unique identifier of the subscription to be updated.
   */
  subscriptionId: number;

  /**
   * The legal basis for communication, with options including
   * 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT',
   * 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR',
   * 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.
   */
  legalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE';

  /**
   * An explanation for the legal basis used for communication.
   */
  legalBasisExplanation?: string;
}

CommunicationPreferences.Definitions = Definitions;
CommunicationPreferences.BaseDefinitions = BaseDefinitions;
CommunicationPreferences.Statuses = Statuses;
CommunicationPreferences.BaseStatuses = BaseStatuses;

export declare namespace CommunicationPreferences {
  export {
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
    type LinkGenerationRequest as LinkGenerationRequest,
    type LinkGenerationResponse as LinkGenerationResponse,
    type PartialPublicStatusRequest as PartialPublicStatusRequest,
    type PublicBulkOptOutFromAllResponse as PublicBulkOptOutFromAllResponse,
    type PublicStatus as PublicStatus,
    type PublicStatusBulkResponse as PublicStatusBulkResponse,
    type PublicStatusRequest as PublicStatusRequest,
    type PublicSubscriptionTranslation as PublicSubscriptionTranslation,
    type PublicWideStatus as PublicWideStatus,
    type PublicWideStatusBulkResponse as PublicWideStatusBulkResponse,
    type SubscriptionDefinition as SubscriptionDefinition,
    type CommunicationPreferenceGenerateLinksParams as CommunicationPreferenceGenerateLinksParams,
    type CommunicationPreferenceGetStatusesParams as CommunicationPreferenceGetStatusesParams,
    type CommunicationPreferenceGetUnsubscribeAllStatusParams as CommunicationPreferenceGetUnsubscribeAllStatusParams,
    type CommunicationPreferenceUnsubscribeAllParams as CommunicationPreferenceUnsubscribeAllParams,
    type CommunicationPreferenceUpdateStatusParams as CommunicationPreferenceUpdateStatusParams,
  };

  export {
    Definitions as Definitions,
    BaseDefinitions as BaseDefinitions,
    type DefinitionListParams as DefinitionListParams,
  };

  export { Statuses as Statuses, BaseStatuses as BaseStatuses };
}
