// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommunicationPreferencesAPI from './communication-preferences';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseDefinitions extends APIResource {
  static override readonly _key: readonly ['communicationPreferences', 'definitions'] = Object.freeze([
    'communicationPreferences',
    'definitions',
  ] as const);

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
export class Definitions extends BaseDefinitions {}

export interface DefinitionListParams {
  /**
   * An integer representing the ID of the business unit for which to retrieve
   * subscription definitions.
   */
  businessUnitId?: number;

  /**
   * A boolean indicating whether to include translations of the communication
   * preferences definitions in the response.
   */
  includeTranslations?: boolean;
}

export declare namespace Definitions {
  export { type DefinitionListParams as DefinitionListParams };
}
