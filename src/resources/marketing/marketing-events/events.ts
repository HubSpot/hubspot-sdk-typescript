// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketingEventsAPI from './marketing-events';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Mark a marketing event as cancelled.
   */
  cancelByExternalEventID(
    externalEventID: string,
    params: EventCancelByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventDefaultResponse> {
    const { externalAccountId } = params;
    return this._client.post(path`/marketing/marketing-events/2026-03/events/${externalEventID}/cancel`, {
      query: { externalAccountId },
      ...options,
    });
  }

  /**
   * Mark a marketing event as completed
   */
  completeByExternalEventID(
    externalEventID: string,
    params: EventCompleteByExternalEventIDParams,
    options?: RequestOptions,
  ): APIPromise<MarketingEventsAPI.MarketingEventDefaultResponse> {
    const { externalAccountId, ...body } = params;
    return this._client.post(path`/marketing/marketing-events/2026-03/events/${externalEventID}/complete`, {
      query: { externalAccountId },
      body,
      ...options,
    });
  }
}

export interface EventCancelByExternalEventIDParams {
  externalAccountId: string;
}

export interface EventCompleteByExternalEventIDParams {
  /**
   * Query param
   */
  externalAccountId: string;

  /**
   * Body param: The end date and time of the marketing event in ISO 8601 format
   */
  endDateTime: string;

  /**
   * Body param: The start date and time of the marketing event in ISO 8601 format
   */
  startDateTime: string;
}

export declare namespace Events {
  export {
    type EventCancelByExternalEventIDParams as EventCancelByExternalEventIDParams,
    type EventCompleteByExternalEventIDParams as EventCompleteByExternalEventIDParams,
  };
}
