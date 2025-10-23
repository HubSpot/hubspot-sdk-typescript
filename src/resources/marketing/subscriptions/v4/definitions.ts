// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Definitions extends APIResource {
  /**
   * Get a list of subscription status definitions from the account.
   *
   * @example
   * ```ts
   * const actionResponseWithResultsSubscriptionDefinition =
   *   await client.marketing.subscriptions.v4.definitions.list();
   * ```
   */
  list(
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsSubscriptionDefinition> {
    return this._client.get('/communication-preferences/v4/definitions', { query, ...options });
  }
}

export interface DefinitionListParams {
  /**
   * If you have the
   * [business unit add-on](https://developers.hubspot.com/beta-docs/guides/api/settings/business-units-api),
   * include this parameter to filter results by business unit ID. The default
   * Account business unit will always use `0`.
   */
  businessUnitId?: number;

  /**
   * Set to `true` to return subscription translations associated with each
   * definition.
   */
  includeTranslations?: boolean;
}

export declare namespace Definitions {
  export { type DefinitionListParams as DefinitionListParams };
}
