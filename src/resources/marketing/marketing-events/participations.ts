// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Participations extends APIResource {
  /**
   * Read Marketing event's participations counters by externalAccountId and
   * externalEventId pair.
   *
   * @example
   * ```ts
   * const attendanceCounters =
   *   await client.marketing.marketingEvents.participations.getByExternalAccountAndEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  getByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationGetByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.AttendanceCounters> {
    const { externalAccountId } = params;
    return this._client.get(
      path`/marketing/v3/marketing-events/participations/${externalAccountId}/${externalEventID}`,
      options,
    );
  }

  /**
   * Read Marketing event's participations counters by internal identifier
   * marketingEventId.
   *
   * @example
   * ```ts
   * const attendanceCounters =
   *   await client.marketing.marketingEvents.participations.getByID(
   *     0,
   *   );
   * ```
   */
  getByID(
    marketingEventID: number,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.AttendanceCounters> {
    return this._client.get(path`/marketing/v3/marketing-events/participations/${marketingEventID}`, options);
  }

  /**
   * Read Contact's participations by identifier - email or internal id.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalParticipationBreakdownForwardPaging =
   *   await client.marketing.marketingEvents.participations.listBreakdownByContact(
   *     'contactIdentifier',
   *   );
   * ```
   */
  listBreakdownByContact(
    contactIdentifier: string,
    query: ParticipationListBreakdownByContactParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
    return this._client.get(
      path`/marketing/v3/marketing-events/participations/contacts/${contactIdentifier}/breakdown`,
      { query, ...options },
    );
  }

  /**
   * Read Marketing event's participations breakdown with optional filters by
   * externalAccountId and externalEventId pair.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalParticipationBreakdownForwardPaging =
   *   await client.marketing.marketingEvents.participations.listBreakdownByExternalAccountAndEventID(
   *     'externalEventId',
   *     { externalAccountId: 'externalAccountId' },
   *   );
   * ```
   */
  listBreakdownByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationListBreakdownByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
    const { externalAccountId, ...query } = params;
    return this._client.get(
      path`/marketing/v3/marketing-events/participations/${externalAccountId}/${externalEventID}/breakdown`,
      { query, ...options },
    );
  }

  /**
   * Read Marketing event's participations breakdown with optional filters by
   * internal identifier marketingEventId.
   *
   * @example
   * ```ts
   * const collectionResponseWithTotalParticipationBreakdownForwardPaging =
   *   await client.marketing.marketingEvents.participations.listBreakdownByID(
   *     0,
   *   );
   * ```
   */
  listBreakdownByID(
    marketingEventID: number,
    query: ParticipationListBreakdownByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
    return this._client.get(
      path`/marketing/v3/marketing-events/participations/${marketingEventID}/breakdown`,
      { query, ...options },
    );
  }
}

export interface ParticipationGetByExternalAccountAndEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;
}

export interface ParticipationListBreakdownByContactParams {
  /**
   * The cursor indicating the position of the last retrieved item.
   */
  after?: string;

  /**
   * The limit for response size. The default value is 10, the max number is 100
   */
  limit?: number;

  /**
   * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED,
   * NO_SHOW
   */
  state?: string;
}

export interface ParticipationListBreakdownByExternalAccountAndEventIDParams {
  /**
   * Path param: The accountId that is associated with this marketing event in the
   * external event application.
   */
  externalAccountId: string;

  /**
   * Query param: The cursor indicating the position of the last retrieved item.
   */
  after?: string;

  /**
   * Query param: The identifier of the Contact. It may be email or internal id.
   */
  contactIdentifier?: string;

  /**
   * Query param: The limit for response size. The default value is 10, the max
   * number is 100
   */
  limit?: number;

  /**
   * Query param: The participation state value. It may be REGISTERED, CANCELLED,
   * ATTENDED, NO_SHOW
   */
  state?: string;
}

export interface ParticipationListBreakdownByIDParams {
  /**
   * The cursor indicating the position of the last retrieved item.
   */
  after?: string;

  /**
   * The identifier of the Contact. It may be email or internal id.
   */
  contactIdentifier?: string;

  /**
   * The limit for response size. The default value is 10, the max number is 100
   */
  limit?: number;

  /**
   * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED,
   * NO_SHOW
   */
  state?: string;
}

export declare namespace Participations {
  export {
    type ParticipationGetByExternalAccountAndEventIDParams as ParticipationGetByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByContactParams as ParticipationListBreakdownByContactParams,
    type ParticipationListBreakdownByExternalAccountAndEventIDParams as ParticipationListBreakdownByExternalAccountAndEventIDParams,
    type ParticipationListBreakdownByIDParams as ParticipationListBreakdownByIDParams,
  };
}
