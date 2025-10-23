// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TimelineAPI from './timeline';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Update an existing event type template with new tokens.
   *
   * @example
   * ```ts
   * const timelineEventTemplateToken =
   *   await client.crm.timeline.tokens.create(
   *     'eventTemplateId',
   *     {
   *       appId: 0,
   *       label: 'Pet Type',
   *       name: 'petType',
   *       type: 'enumeration',
   *     },
   *   );
   * ```
   */
  create(
    eventTemplateID: string,
    params: TokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventTemplateToken> {
    const { appId, ...body } = params;
    return this._client.post(
      path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateID}/tokens`,
      { body, ...options },
    );
  }

  /**
   * Update an event type template token, specified by token name.
   *
   * @example
   * ```ts
   * const timelineEventTemplateToken =
   *   await client.crm.timeline.tokens.update('tokenName', {
   *     appId: 0,
   *     eventTemplateId: 'eventTemplateId',
   *     label: 'petType edit',
   *   });
   * ```
   */
  update(
    tokenName: string,
    params: TokenUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TimelineAPI.TimelineEventTemplateToken> {
    const { appId, eventTemplateId, ...body } = params;
    return this._client.put(
      path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateId}/tokens/${tokenName}`,
      { body, ...options },
    );
  }

  /**
   * Delete an existing token from a specific event type template.
   *
   * @example
   * ```ts
   * await client.crm.timeline.tokens.delete('tokenName', {
   *   appId: 0,
   *   eventTemplateId: 'eventTemplateId',
   * });
   * ```
   */
  delete(tokenName: string, params: TokenDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { appId, eventTemplateId } = params;
    return this._client.delete(
      path`/integrators/timeline/v3/${appId}/event-templates/${eventTemplateId}/tokens/${tokenName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface TokenCreateParams {
  /**
   * Path param: The ID of the target app.
   */
  appId: number;

  /**
   * Body param: Used for list segmentation and reporting.
   */
  label: string;

  /**
   * Body param: The name of the token referenced in the templates. This must be
   * unique for the specific template. It may only contain alphanumeric characters,
   * periods, dashes, or underscores (. - \_).
   */
  name: string;

  /**
   * Body param: The data type of the token. You can currently choose from [string,
   * number, date, enumeration].
   */
  type: 'date' | 'enumeration' | 'number' | 'string';

  /**
   * Body param: The date and time that the Event Template Token was created, as an
   * ISO 8601 timestamp. Will be null if the template was created before Feb
   * 18th, 2020.
   */
  createdAt?: string;

  /**
   * Body param: The name of the CRM object property. This will populate the CRM
   * object property associated with the event. With enough of these, you can fully
   * build CRM objects via the Timeline API.
   */
  objectPropertyName?: string;

  /**
   * Body param: If type is `enumeration`, we should have a list of options to choose
   * from.
   */
  options?: Array<TimelineAPI.TimelineEventTemplateTokenOption>;

  /**
   * Body param: The date and time that the Event Template Token was last updated, as
   * an ISO 8601 timestamp. Will be null if the template was created before Feb
   * 18th, 2020.
   */
  updatedAt?: string;
}

export interface TokenUpdateParams {
  /**
   * Path param: The ID of the target app.
   */
  appId: number;

  /**
   * Path param: The event template ID.
   */
  eventTemplateId: string;

  /**
   * Body param: Used for list segmentation and reporting.
   */
  label: string;

  /**
   * Body param: The name of the CRM object property. This will populate the CRM
   * object property associated with the event. With enough of these, you can fully
   * build CRM objects via the Timeline API.
   */
  objectPropertyName?: string;

  /**
   * Body param: If type is `enumeration`, we should have a list of options to choose
   * from.
   */
  options?: Array<TimelineAPI.TimelineEventTemplateTokenOption>;
}

export interface TokenDeleteParams {
  /**
   * The ID of the target app.
   */
  appId: number;

  /**
   * The event template ID.
   */
  eventTemplateId: string;
}

export declare namespace Tokens {
  export {
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenDeleteParams as TokenDeleteParams,
  };
}
