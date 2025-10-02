// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from './tags/tags';
import {
  BlogsTagsTag,
  TagCreateParams,
  TagDeleteParams,
  TagListParams,
  TagListResponse,
  TagRetrieveParams,
  TagUpdateParams,
  Tags,
} from './tags/tags';

export class Blogs extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

Blogs.Tags = Tags;

export declare namespace Blogs {
  export {
    Tags as Tags,
    type BlogsTagsTag as BlogsTagsTag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
