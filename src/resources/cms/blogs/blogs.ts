// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorsAPI from './authors/authors';
import {
  AuthorAttachToLangGroupParams,
  AuthorCreateLanguageVariationParams,
  AuthorCreateParams,
  AuthorDeleteParams,
  AuthorDetachFromLangGroupParams,
  AuthorGetCursorByQueryParams,
  AuthorGetCursorParams,
  AuthorGetParams,
  AuthorGetPostsCursorByQueryParams,
  AuthorGetPostsCursorParams,
  AuthorGetTagsCursorByQueryParams,
  AuthorGetTagsCursorParams,
  AuthorListParams,
  AuthorSetNewLangPrimaryParams,
  AuthorUpdateLanguagesParams,
  AuthorUpdateParams,
  Authors,
  BatchInputBlogAuthor,
  BatchResponseBlogAuthor,
  BatchResponseBlogAuthorWithErrors,
  BlogAuthor,
  BlogAuthorCloneRequestVNext,
  CollectionResponseWithTotalBlogAuthorForwardPaging,
} from './authors/authors';
import * as PostsAPI from './posts/posts';
import {
  BatchInputBlogPost,
  BatchResponseBlogPost,
  BatchResponseBlogPostWithErrors,
  BlogPost,
  BlogPostLanguageCloneRequestVNext,
  BlogPostVersion,
  CollectionResponseWithTotalBlogPostForwardPaging,
  CollectionResponseWithTotalBlogPostVersion,
  PostCloneParams,
  PostCreateParams,
  PostDeleteParams,
  PostGetParams,
  PostListAuthorsParams,
  PostListParams,
  PostListTagsParams,
  PostQueryAuthorsParams,
  PostQueryParams,
  PostQueryTagsParams,
  PostScheduleParams,
  PostUpdateDraftParams,
  PostUpdateParams,
  Posts,
  VersionBlogPost,
} from './posts/posts';
import * as SettingsAPI from './settings/settings';
import {
  Blog,
  BlogLanguageCloneRequestVNext,
  BlogVersion,
  BlogsPage,
  CollectionResponseWithTotalBlog,
  CollectionResponseWithTotalBlogVersion,
  SettingGetRevisionParams,
  SettingListParams,
  SettingListRevisionsParams,
  Settings,
  VersionBlog,
  VersionBlogsPage,
} from './settings/settings';
import * as TagsAPI from './tags/tags';
import {
  BatchInputTag,
  BatchResponseTag,
  BatchResponseTagWithErrors,
  CollectionResponseWithTotalTagForwardPaging,
  Tag,
  TagAttachToLangGroupParams,
  TagCloneRequestVNext,
  TagCreateLangVariationParams,
  TagCreateParams,
  TagDeleteParams,
  TagDetachFromLangGroupParams,
  TagGetParams,
  TagListAuthorsCursorByQueryParams,
  TagListAuthorsCursorParams,
  TagListCursorByQueryParams,
  TagListCursorParams,
  TagListParams,
  TagListPostsCursorByQueryParams,
  TagListPostsCursorParams,
  TagSetLangPrimaryParams,
  TagUpdateLangsParams,
  TagUpdateParams,
  Tags,
} from './tags/tags';

export class Blogs extends APIResource {
  authors: AuthorsAPI.Authors = new AuthorsAPI.Authors(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

export type CursorPagedResultBlogAuthorLong = unknown;

export type CursorPagedResultBlogPostLong = unknown;

export type CursorPagedResultTagLong = unknown;

Blogs.Authors = Authors;
Blogs.Posts = Posts;
Blogs.Settings = Settings;
Blogs.Tags = Tags;

export declare namespace Blogs {
  export {
    type CursorPagedResultBlogAuthorLong as CursorPagedResultBlogAuthorLong,
    type CursorPagedResultBlogPostLong as CursorPagedResultBlogPostLong,
    type CursorPagedResultTagLong as CursorPagedResultTagLong,
  };

  export {
    Authors as Authors,
    type BatchInputBlogAuthor as BatchInputBlogAuthor,
    type BatchResponseBlogAuthor as BatchResponseBlogAuthor,
    type BatchResponseBlogAuthorWithErrors as BatchResponseBlogAuthorWithErrors,
    type BlogAuthor as BlogAuthor,
    type BlogAuthorCloneRequestVNext as BlogAuthorCloneRequestVNext,
    type CollectionResponseWithTotalBlogAuthorForwardPaging as CollectionResponseWithTotalBlogAuthorForwardPaging,
    type AuthorCreateParams as AuthorCreateParams,
    type AuthorUpdateParams as AuthorUpdateParams,
    type AuthorListParams as AuthorListParams,
    type AuthorDeleteParams as AuthorDeleteParams,
    type AuthorAttachToLangGroupParams as AuthorAttachToLangGroupParams,
    type AuthorCreateLanguageVariationParams as AuthorCreateLanguageVariationParams,
    type AuthorDetachFromLangGroupParams as AuthorDetachFromLangGroupParams,
    type AuthorGetParams as AuthorGetParams,
    type AuthorGetCursorParams as AuthorGetCursorParams,
    type AuthorGetCursorByQueryParams as AuthorGetCursorByQueryParams,
    type AuthorGetPostsCursorParams as AuthorGetPostsCursorParams,
    type AuthorGetPostsCursorByQueryParams as AuthorGetPostsCursorByQueryParams,
    type AuthorGetTagsCursorParams as AuthorGetTagsCursorParams,
    type AuthorGetTagsCursorByQueryParams as AuthorGetTagsCursorByQueryParams,
    type AuthorSetNewLangPrimaryParams as AuthorSetNewLangPrimaryParams,
    type AuthorUpdateLanguagesParams as AuthorUpdateLanguagesParams,
  };

  export {
    Posts as Posts,
    type BatchInputBlogPost as BatchInputBlogPost,
    type BatchResponseBlogPost as BatchResponseBlogPost,
    type BatchResponseBlogPostWithErrors as BatchResponseBlogPostWithErrors,
    type BlogPost as BlogPost,
    type BlogPostLanguageCloneRequestVNext as BlogPostLanguageCloneRequestVNext,
    type BlogPostVersion as BlogPostVersion,
    type CollectionResponseWithTotalBlogPostForwardPaging as CollectionResponseWithTotalBlogPostForwardPaging,
    type CollectionResponseWithTotalBlogPostVersion as CollectionResponseWithTotalBlogPostVersion,
    type VersionBlogPost as VersionBlogPost,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
    type PostCloneParams as PostCloneParams,
    type PostGetParams as PostGetParams,
    type PostListAuthorsParams as PostListAuthorsParams,
    type PostListTagsParams as PostListTagsParams,
    type PostQueryParams as PostQueryParams,
    type PostQueryAuthorsParams as PostQueryAuthorsParams,
    type PostQueryTagsParams as PostQueryTagsParams,
    type PostScheduleParams as PostScheduleParams,
    type PostUpdateDraftParams as PostUpdateDraftParams,
  };

  export {
    Settings as Settings,
    type Blog as Blog,
    type BlogLanguageCloneRequestVNext as BlogLanguageCloneRequestVNext,
    type BlogVersion as BlogVersion,
    type CollectionResponseWithTotalBlog as CollectionResponseWithTotalBlog,
    type CollectionResponseWithTotalBlogVersion as CollectionResponseWithTotalBlogVersion,
    type VersionBlog as VersionBlog,
    type BlogsPage as BlogsPage,
    type VersionBlogsPage as VersionBlogsPage,
    type SettingListParams as SettingListParams,
    type SettingGetRevisionParams as SettingGetRevisionParams,
    type SettingListRevisionsParams as SettingListRevisionsParams,
  };

  export {
    Tags as Tags,
    type BatchInputTag as BatchInputTag,
    type BatchResponseTag as BatchResponseTag,
    type BatchResponseTagWithErrors as BatchResponseTagWithErrors,
    type CollectionResponseWithTotalTagForwardPaging as CollectionResponseWithTotalTagForwardPaging,
    type Tag as Tag,
    type TagCloneRequestVNext as TagCloneRequestVNext,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagAttachToLangGroupParams as TagAttachToLangGroupParams,
    type TagCreateLangVariationParams as TagCreateLangVariationParams,
    type TagDetachFromLangGroupParams as TagDetachFromLangGroupParams,
    type TagGetParams as TagGetParams,
    type TagListAuthorsCursorParams as TagListAuthorsCursorParams,
    type TagListAuthorsCursorByQueryParams as TagListAuthorsCursorByQueryParams,
    type TagListCursorParams as TagListCursorParams,
    type TagListCursorByQueryParams as TagListCursorByQueryParams,
    type TagListPostsCursorParams as TagListPostsCursorParams,
    type TagListPostsCursorByQueryParams as TagListPostsCursorByQueryParams,
    type TagSetLangPrimaryParams as TagSetLangPrimaryParams,
    type TagUpdateLangsParams as TagUpdateLangsParams,
  };
}
