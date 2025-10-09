// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import {
  AttachToLangPrimaryRequestVNext,
  BatchInputJsonNode,
  BatchInputTag,
  BatchResponseTag,
  BatchResponseTagWithErrors,
  CollectionResponseWithTotalTagForwardPaging,
  DetachFromLangGroupRequestVNext,
  SetNewLanguagePrimaryRequestVNext,
  Tag,
  TagArchiveBatchParams,
  TagAttachToLangGroupParams,
  TagCloneRequestVNext,
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
  TagsPage,
  UpdateLanguagesRequestVNext,
} from './tags';
import * as PostsAPI from './posts/posts';
import { Posts } from './posts/posts';

export class Blogs extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

Blogs.Posts = Posts;
Blogs.Tags = Tags;

export declare namespace Blogs {
  export { Posts as Posts };

  export {
    Tags as Tags,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type BatchInputJsonNode as BatchInputJsonNode,
    type BatchInputTag as BatchInputTag,
    type BatchResponseTag as BatchResponseTag,
    type BatchResponseTagWithErrors as BatchResponseTagWithErrors,
    type CollectionResponseWithTotalTagForwardPaging as CollectionResponseWithTotalTagForwardPaging,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type Tag as Tag,
    type TagCloneRequestVNext as TagCloneRequestVNext,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
    type TagsPage as TagsPage,
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
