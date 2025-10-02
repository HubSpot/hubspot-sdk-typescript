// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';

export class MultiLanguage extends APIResource {
  /**
   * Attach a Blog Tag to a multi-language group
   */
  attachToLangGroup(body: MultiLanguageAttachToLangGroupParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/tags/multi-language/attach-to-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new language variation
   */
  createLanguageVariation(
    body: MultiLanguageCreateLanguageVariationParams,
    options?: RequestOptions,
  ): APIPromise<TagsAPI.BlogsTagsTag> {
    return this._client.post('/cms/v3/blogs/tags/multi-language/create-language-variation', {
      body,
      ...options,
    });
  }

  /**
   * Detach a Blog Tag from a multi-language group
   */
  detachFromLangGroup(
    body: MultiLanguageDetachFromLangGroupParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/tags/multi-language/detach-from-lang-group', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update languages of multi-language group
   */
  updateLanguages(body: MultiLanguageUpdateLanguagesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/cms/v3/blogs/tags/multi-language/update-languages', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set a new primary language
   */
  updateSetNewLangPrimary(
    body: MultiLanguageUpdateSetNewLangPrimaryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put('/cms/v3/blogs/tags/multi-language/set-new-lang-primary', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MultiLanguageAttachToLangGroupParams {
  id: string;

  language: string;

  primaryId: string;

  primaryLanguage?: string;
}

export interface MultiLanguageCreateLanguageVariationParams {
  id: string;

  name: string;

  language?: string;

  primaryLanguage?: string;
}

export interface MultiLanguageDetachFromLangGroupParams {
  id: string;
}

export interface MultiLanguageUpdateLanguagesParams {
  languages: { [key: string]: string };

  primaryId: string;
}

export interface MultiLanguageUpdateSetNewLangPrimaryParams {
  id: string;
}

export declare namespace MultiLanguage {
  export {
    type MultiLanguageAttachToLangGroupParams as MultiLanguageAttachToLangGroupParams,
    type MultiLanguageCreateLanguageVariationParams as MultiLanguageCreateLanguageVariationParams,
    type MultiLanguageDetachFromLangGroupParams as MultiLanguageDetachFromLangGroupParams,
    type MultiLanguageUpdateLanguagesParams as MultiLanguageUpdateLanguagesParams,
    type MultiLanguageUpdateSetNewLangPrimaryParams as MultiLanguageUpdateSetNewLangPrimaryParams,
  };
}
