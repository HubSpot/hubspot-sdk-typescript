// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlogsAPI from './blogs/blogs';
import {
  AttachToLangPrimaryRequestVNext,
  Blogs,
  DetachFromLangGroupRequestVNext,
  PublicAccessRule,
  SetNewLanguagePrimaryRequestVNext,
  UpdateLanguagesRequestVNext,
  VersionUser,
} from './blogs/blogs';

export class Cms extends APIResource {
  blogs: BlogsAPI.Blogs = new BlogsAPI.Blogs(this._client);
}

Cms.Blogs = Blogs;

export declare namespace Cms {
  export {
    Blogs as Blogs,
    type AttachToLangPrimaryRequestVNext as AttachToLangPrimaryRequestVNext,
    type DetachFromLangGroupRequestVNext as DetachFromLangGroupRequestVNext,
    type PublicAccessRule as PublicAccessRule,
    type SetNewLanguagePrimaryRequestVNext as SetNewLanguagePrimaryRequestVNext,
    type UpdateLanguagesRequestVNext as UpdateLanguagesRequestVNext,
    type VersionUser as VersionUser,
  };
}
