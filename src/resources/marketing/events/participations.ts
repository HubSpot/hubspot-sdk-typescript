// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { ParticipationBreakdownsPage } from './events';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Participations extends APIResource {
  getByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationGetByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): APIPromise<EventsAPI.AttendanceCounters> {
    const { externalAccountId } = params;
    return this._client.get(
      path`/marketing/marketing-events/2026-03/participations/${externalAccountId}/${externalEventID}`,
      options,
    );
  }

  getByID(marketingEventID: number, options?: RequestOptions): APIPromise<EventsAPI.AttendanceCounters> {
    return this._client.get(
      path`/marketing/marketing-events/2026-03/participations/${marketingEventID}`,
      options,
    );
  }

  listBreakdownByContact(
    contactIdentifier: string,
    query: ParticipationListBreakdownByContactParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, EventsAPI.ParticipationBreakdown> {
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/contacts/${contactIdentifier}/breakdown`,
      Page<EventsAPI.ParticipationBreakdown>,
      { query, ...options },
    );
  }

  listBreakdownByExternalAccountAndEventID(
    externalEventID: string,
    params: ParticipationListBreakdownByExternalAccountAndEventIDParams,
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, EventsAPI.ParticipationBreakdown> {
    const { externalAccountId, ...query } = params;
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/${externalAccountId}/${externalEventID}/breakdown`,
      Page<EventsAPI.ParticipationBreakdown>,
      { query, ...options },
    );
  }

  listBreakdownByID(
    marketingEventID: number,
    query: ParticipationListBreakdownByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ParticipationBreakdownsPage, EventsAPI.ParticipationBreakdown> {
    return this._client.getAPIList(
      path`/marketing/marketing-events/2026-03/participations/${marketingEventID}/breakdown`,
      Page<EventsAPI.ParticipationBreakdown>,
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
