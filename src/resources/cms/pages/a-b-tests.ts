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
  createLandingPageVariation(
    body: ABTestCreateLandingPageVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PageData> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/create-variation', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new A/B test variation based on the information provided in the request
   * body.
   */
  createSitePageVariation(
    body: ABTestCreateSitePageVariationParams,
    options?: RequestOptions,
  ): APIPromise<PagesAPI.PageData> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/create-variation', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active A/B test and designate a winner.
   */
  endLandingPageTest(body: ABTestEndLandingPageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/end', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active A/B test and designate a winner.
   */
  endSitePageTest(body: ABTestEndSitePageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/end', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rerun a previous A/B test.
   */
  rerunLandingPageTest(body: ABTestRerunLandingPageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/landing-pages/ab-test/rerun', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rerun a previous A/B test.
   */
  rerunSitePageTest(body: ABTestRerunSitePageTestParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/pages/2026-03/site-pages/ab-test/rerun', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ABTestCreateLandingPageVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface ABTestCreateSitePageVariationParams {
  /**
   * ID of the object to test.
   */
  contentId: string;

  /**
   * Name of A/B test variation.
   */
  variationName: string;
}

export interface ABTestEndLandingPageTestParams {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

export interface ABTestEndSitePageTestParams {
  /**
   * ID of the test to end.
   */
  abTestId: string;

  /**
   * ID of the object to designate as the test winner.
   */
  winnerId: string;
}

export interface ABTestRerunLandingPageTestParams {
  /**
   * ID of the test to rerun.
   */
  abTestId: string;

  /**
   * ID of the object to reactivate as a test variation.
   */
  variationId: string;
}

export interface ABTestRerunSitePageTestParams {
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
    type ABTestCreateLandingPageVariationParams as ABTestCreateLandingPageVariationParams,
    type ABTestCreateSitePageVariationParams as ABTestCreateSitePageVariationParams,
    type ABTestEndLandingPageTestParams as ABTestEndLandingPageTestParams,
    type ABTestEndSitePageTestParams as ABTestEndSitePageTestParams,
    type ABTestRerunLandingPageTestParams as ABTestRerunLandingPageTestParams,
    type ABTestRerunSitePageTestParams as ABTestRerunSitePageTestParams,
  };
}
