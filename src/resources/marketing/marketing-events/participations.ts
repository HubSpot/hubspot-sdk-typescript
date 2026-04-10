// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { ParticipationBreakdownsPage } from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseParticipations extends APIResource {
  static override readonly _key: readonly ['marketing', 'marketingEvents', 'participations'] = Object.freeze([
    'marketing',
    'marketingEvents',
    'participations',
  ] as const);

  /**
   * Read Marketing event's participations counters by externalAccountId and
   * externalEventId pair.
   */
  getByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationGetByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.AttendanceCounters> {
    const { externalAccountId } = params;
    return this._client.get(
      path`/marketing/marketing-events/2026-03/participations/${externalAccountId}/${externalEventID}`,
      options,
    );
  }

  /**
   * Read Marketing event's participations counters by internal identifier
   * marketingEventId.
   */
  getByID(
    marketingEventID: number,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.AttendanceCounters> {
    return this._client.get(
      path`/marketing/marketing-events/2026-03/participations/${marketingEventID}`,
      options,
    );
  }

  /**
   * Read Contact's participations by identifier - email or internal id.
   */
  listBreakdownByContact(
    contactIdentifier: string,
    query: ParticipationListBreakdownByContactParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, MarketingEventsAPI.ParticipationBreakdown> {
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/contacts/${contactIdentifier}/breakdown`,
      Page<MarketingEventsAPI.ParticipationBreakdown>,
      { query, ...options },
    );
  }

  /**
   * Read Marketing event's participations breakdown with optional filters by
   * externalAccountId and externalEventId pair.
   */
  listBreakdownByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationListBreakdownByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, MarketingEventsAPI.ParticipationBreakdown> {
    const { externalAccountId, ...query } = params;
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/${externalAccountId}/${externalEventID}/breakdown`,
      Page<MarketingEventsAPI.ParticipationBreakdown>,
      { query, ...options },
    );
  }

  /**
   * Read Marketing event's participations breakdown with optional filters by
   * internal identifier marketingEventId.
   */
  listBreakdownByID(
    marketingEventID: number,
    query: ParticipationListBreakdownByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, MarketingEventsAPI.ParticipationBreakdown> {
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/${marketingEventID}/breakdown`,
      Page<MarketingEventsAPI.ParticipationBreakdown>,
      { query, ...options },
    );
  }
}
export class Participations extends BaseParticipations {}

export interface ParticipationGetByExternalAccountAndEventIDParams {
  /**
   * The accountId that is associated with this marketing event in the external event
   * application.
   */
  externalAccountId: string;
}

export interface ParticipationListBreakdownByContactParams extends PageParams {
  /**
   * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED,
   * NO_SHOW
   */
  state?: string;
}

export interface ParticipationListBreakdownByExternalAccountAndEventIDParams extends PageParams {
  /**
   * Path param: The accountId that is associated with this marketing event in the
   * external event application.
   */
  externalAccountId: string;

  /**
   * Query param: The identifier of the Contact. It may be email or internal id.
   */
  contactIdentifier?: string;

  /**
   * Query param: The participation state value. It may be REGISTERED, CANCELLED,
   * ATTENDED, NO_SHOW
   */
  state?: string;
}

export interface ParticipationListBreakdownByIDParams extends PageParams {
  /**
   * The identifier of the Contact. It may be email or internal id.
   */
  contactIdentifier?: string;

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

export { type ParticipationBreakdownsPage };
