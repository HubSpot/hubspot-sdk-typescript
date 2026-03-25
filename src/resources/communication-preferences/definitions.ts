// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommunicationPreferencesAPI from './communication-preferences';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Definitions extends APIResource {
  /**
   * Get a list of subscription status definitions from the account.
   */
  list(
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunicationPreferencesAPI.ActionResponseWithResultsSubscriptionDefinition> {
    return this._client.get('/communication-preferences/2026-03/definitions', { query, ...options });
  }
}

export interface DefinitionListParams {
  /**
   * The unique identifier of the business unit for which to retrieve the
   * subscription definitions.
   */
  businessUnitId?: number;

  /**
   * A boolean indicating whether to include translations of the subscription
   * definitions. Defaults to false if not specified.
   */
  includeTranslations?: boolean;
}

export declare namespace Definitions {
  export { type DefinitionListParams as DefinitionListParams };
}
