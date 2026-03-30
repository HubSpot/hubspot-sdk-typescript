// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PagesAPI from './pages';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class ABTests extends APIResource {
  /**
   * Create a new A/B test variation based on the information provided in the request
   * body.
   */
  createAbTestVariation(
    body: ABTestCreateAbTestVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.Page> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/create-variation', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active A/B test and designate a winner.
   */
  endAbTest(body: ABTestEndAbTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/end', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rerun a previous A/B test.
   */
  rerunAbTest(body: ABTestRerunAbTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/rerun', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ABTestCreateAbTestVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface ABTestEndAbTestParams {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

export interface ABTestRerunAbTestParams {
  /**
   * ID of the test to rerun.
   */
  abTestId: string;

  /**
   * ID of the object to reactivate as a test variation.
   */
  variationId: string;
}

export declare namespace ABTests {
  export {
    type ABTestCreateAbTestVariationParams as ABTestCreateAbTestVariationParams,
    type ABTestEndAbTestParams as ABTestEndAbTestParams,
    type ABTestRerunAbTestParams as ABTestRerunAbTestParams,
  };
}
