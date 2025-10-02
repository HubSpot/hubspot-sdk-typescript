// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import {
  CmsBlogsTagsAttachToLangPrimaryRequestVNext,
  CmsBlogsTagsBatchInputJsonNode,
  CmsBlogsTagsBatchInputTag,
  CmsBlogsTagsBatchResponseTag,
  CmsBlogsTagsBatchResponseTagWithErrors,
  CmsBlogsTagsCollectionResponseWithTotalTagForwardPaging,
  CmsBlogsTagsDetachFromLangGroupRequestVNext,
  CmsBlogsTagsSetNewLanguagePrimaryRequestVNext,
  CmsBlogsTagsTag,
  CmsBlogsTagsTagCloneRequestVNext,
  CmsBlogsTagsUpdateLanguagesRequestVNext,
  TagArchiveBatchParams,
  TagAttachToLangGroupParams,
  TagCreateBatchParams,
  TagCreateLangVariationParams,
  TagCreateParams,
  TagDeleteParams,
  TagDetachFromLangGroupParams,
  TagListParams,
  TagReadBatchParams,
  TagReadParams,
  TagSetLangPrimaryParams,
  TagUpdateBatchParams,
  TagUpdateLangsParams,
  TagUpdateParams,
  Tags,
} from './tags';

export class Blogs extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

Blogs.Tags = Tags;

export declare namespace Blogs {
  export {
    Tags as Tags,
    type CmsBlogsTagsAttachToLangPrimaryRequestVNext as CmsBlogsTagsAttachToLangPrimaryRequestVNext,
    type CmsBlogsTagsBatchInputJsonNode as CmsBlogsTagsBatchInputJsonNode,
    type CmsBlogsTagsBatchInputTag as CmsBlogsTagsBatchInputTag,
    type CmsBlogsTagsBatchResponseTag as CmsBlogsTagsBatchResponseTag,
    type CmsBlogsTagsBatchResponseTagWithErrors as CmsBlogsTagsBatchResponseTagWithErrors,
    type CmsBlogsTagsCollectionResponseWithTotalTagForwardPaging as CmsBlogsTagsCollectionResponseWithTotalTagForwardPaging,
    type CmsBlogsTagsDetachFromLangGroupRequestVNext as CmsBlogsTagsDetachFromLangGroupRequestVNext,
    type CmsBlogsTagsSetNewLanguagePrimaryRequestVNext as CmsBlogsTagsSetNewLanguagePrimaryRequestVNext,
    type CmsBlogsTagsTag as CmsBlogsTagsTag,
    type CmsBlogsTagsTagCloneRequestVNext as CmsBlogsTagsTagCloneRequestVNext,
    type CmsBlogsTagsUpdateLanguagesRequestVNext as CmsBlogsTagsUpdateLanguagesRequestVNext,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagArchiveBatchParams as TagArchiveBatchParams,
    type TagAttachToLangGroupParams as TagAttachToLangGroupParams,
    type TagCreateBatchParams as TagCreateBatchParams,
    type TagCreateLangVariationParams as TagCreateLangVariationParams,
    type TagDetachFromLangGroupParams as TagDetachFromLangGroupParams,
    type TagReadParams as TagReadParams,
    type TagReadBatchParams as TagReadBatchParams,
    type TagSetLangPrimaryParams as TagSetLangPrimaryParams,
    type TagUpdateBatchParams as TagUpdateBatchParams,
    type TagUpdateLangsParams as TagUpdateLangsParams,
  };
}
