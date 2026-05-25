// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSiteSearch extends APIResource {
  static override readonly _key: readonly ['cms', 'siteSearch'] = Object.freeze([
    'cms',
    'siteSearch',
  ] as const);

  /**
   * Return all indexed data for an asset (e.g., page, blog post, HubDB table),
   * specified by ID. This is useful when debugging why a particular asset is not
   * returned from a custom search.
   */
  getIndexedData(
    contentID: string,
    query: SiteSearchGetIndexedDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndexedData> {
    return this._client.get(path`/cms/site-search/2026-03/indexed-data/${contentID}`, { query, ...options });
  }
}
export class SiteSearch extends BaseSiteSearch {}

export interface IndexedData {
  /**
   * The ID of the document in HubSpot.
   */
  id: string;

  /**
   * The indexed fields in HubSpot.
   */
  fields: { [key: string]: IndexedField };

  /**
   * The type of document. Can be `SITE_PAGE`, `LANDING_PAGE`, `BLOG_POST`,
   * `LISTING_PAGE`, or `KNOWLEDGE_ARTICLE`.
   */
  type:
    | 'BLOG_POST'
    | 'KNOWLEDGE_ARTICLE'
    | 'LANDING_PAGE'
    | 'LISTING_PAGE'
    | 'SITE_PAGE'
    | 'STRUCTURED_CONTENT';
}

export interface IndexedField {
  /**
   * Indicates whether the field is a metadata field.
   */
  metadataField: boolean;

  /**
   * The name of the indexed field.
   */
  name: string;

  /**
   * The primary value of the indexed field.
   */
  value: unknown;

  values: Array<unknown>;
}

export interface SiteSearchGetIndexedDataParams {
  type?: string;
}

export declare namespace SiteSearch {
  export {
    type IndexedData as IndexedData,
    type IndexedField as IndexedField,
    type SiteSearchGetIndexedDataParams as SiteSearchGetIndexedDataParams,
  };
}
