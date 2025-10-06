// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V4API from './v4';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Definitions extends APIResource {
  /**
   * Retrieve all subscription status definitions
   */
  list(
    query: DefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V4API.ActionResponseWithResultsSubscriptionDefinition> {
    return this._client.get('/communication-preferences/v4/definitions', { query, ...options });
  }
}

export interface DefinitionListParams {
  businessUnitId?: number;

  includeTranslations?: boolean;
}

export declare namespace Definitions {
  export { type DefinitionListParams as DefinitionListParams };
}
