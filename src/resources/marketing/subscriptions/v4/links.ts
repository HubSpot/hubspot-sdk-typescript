// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Links extends APIResource {
  /**
   * @example
   * ```ts
   * const linkGenerationResponse =
   *   await client.marketing.subscriptions.v4.links.create({
   *     channel: 'EMAIL',
   *     subscriberIdString: 'subscriberIdString',
   *   });
   * ```
   */
  create(params: LinkCreateParams, options?: RequestOptions): APIPromise<V4API.LinkGenerationResponse> {
    const { channel, businessUnitId, ...body } = params;
    return this._client.post('/communication-preferences/v4/links/generate', {
      query: { channel, businessUnitId },
      body,
      ...options,
    });
  }
}

export interface LinkCreateParams {
  /**
   * Query param
   */
  channel: 'EMAIL';

  /**
   * Body param
   */
  subscriberIdString: string;

  /**
   * Query param
   */
  businessUnitId?: number;

  /**
   * Body param
   */
  language?: string;

  /**
   * Body param
   */
  subscriptionId?: number;
}

export declare namespace Links {
  export { type LinkCreateParams as LinkCreateParams };
}
