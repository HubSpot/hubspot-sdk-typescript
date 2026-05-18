// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PagesAPI from '../pages';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseAbTest extends APIResource {
  static override readonly _key: readonly ['cms', 'pages', 'landingPages', 'abTest'] = Object.freeze([
    'cms',
    'pages',
    'landingPages',
    'abTest',
  ] as const);

  /**
   * Create a new A/B test variation based on the information provided in the request
   * body.
   */
  createLandingPageVariation(
    body: AbTestCreateLandingPageVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PagesPage> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/create-variation', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active A/B test and designate a winner.
   */
  endLandingPageTest(body: AbTestEndLandingPageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/end', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rerun a previous A/B test.
   */
  rerunLandingPageTest(body: AbTestRerunLandingPageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/rerun', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }
}
export class AbTest extends BaseAbTest {}

export interface AbTestCreateLandingPageVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface AbTestEndLandingPageTestParams {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

export interface AbTestRerunLandingPageTestParams {
  /**
   * ID of the test to rerun.
   */
  abTestId: string;

  /**
   * ID of the object to reactivate as a test variation.
   */
  variationId: string;
}

export declare namespace AbTest {
  export {
    type AbTestCreateLandingPageVariationParams as AbTestCreateLandingPageVariationParams,
    type AbTestEndLandingPageTestParams as AbTestEndLandingPageTestParams,
    type AbTestRerunLandingPageTestParams as AbTestRerunLandingPageTestParams,
  };
}
