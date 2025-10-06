// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as FilesFilesAPI from './files_';
import {
  FileGetByPathParams,
  FileGetParams,
  FileGetSignedURLParams,
  FileImportFromURLAsyncParams,
  FileReplaceParams,
  FileSearchParams,
  FileUpdateParams,
  FileUploadParams,
  Files as FilesAPIFiles,
} from './files_';
import * as FoldersAPI from './folders';
import {
  FolderCreateParams,
  FolderGetByIDParams,
  FolderGetByPathParams,
  FolderSearchParams,
  FolderUpdateAsyncParams,
  FolderUpdateByIDParams,
  Folders,
} from './folders';
import * as EmailsAPI from '../marketing/emails';

export class Files extends APIResource {
  files: FilesFilesAPI.Files = new FilesFilesAPI.Files(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
}

export interface CollectionResponseFile {
  results: Array<File>;

  paging?: EmailsAPI.Paging;
}

export interface CollectionResponseFolder {
  results: Array<Folder>;

  paging?: EmailsAPI.Paging;
}

export interface File {
  id: string;

  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  defaultHostingUrl?: string;

  encoding?: string;

  expiresAt?: number;

  extension?: string;

  fileMd5?: string;

  height?: number;

  isUsableInContent?: boolean;

  name?: string;

  parentFolderId?: string;

  path?: string;

  size?: number;

  sourceGroup?: string;

  type?: string;

  url?: string;

  width?: number;
}

export interface FileActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: File;
}

export interface FileStat {
  file?: File;

  folder?: Folder;
}

export interface FileUpdateInput {
  access?:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  clearExpires?: boolean;

  expiresAt?: string;

  isUsableInContent?: boolean;

  name?: string;

  parentFolderId?: string;

  parentFolderPath?: string;
}

export interface Folder {
  id: string;

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  name?: string;

  parentFolderId?: string;

  path?: string;
}

export interface FolderActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: Folder;
}

export interface FolderInput {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FolderUpdateInput {
  name?: string;

  parentFolderId?: number;
}

export interface FolderUpdateInputWithID {
  id: string;

  name?: string;

  parentFolderId?: number;
}

export interface FolderUpdateTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface ImportFromURLInput {
  access:
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'SENSITIVE';

  url: string;

  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  expiresAt?: string;

  folderId?: string;

  folderPath?: string;

  name?: string;

  overwrite?: boolean;

  ttl?: string;
}

export interface ImportFromURLTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface SignedURL {
  expiresAt: string;

  extension: string;

  name: string;

  size: number;

  type: string;

  url: string;

  height?: number;

  width?: number;
}

Files.Files = FilesAPIFiles;
Files.Folders = Folders;

export declare namespace Files {
  export {
    type CollectionResponseFile as CollectionResponseFile,
    type CollectionResponseFolder as CollectionResponseFolder,
    type File as File,
    type FileActionResponse as FileActionResponse,
    type FileStat as FileStat,
    type FileUpdateInput as FileUpdateInput,
    type Folder as Folder,
    type FolderActionResponse as FolderActionResponse,
    type FolderInput as FolderInput,
    type FolderUpdateInput as FolderUpdateInput,
    type FolderUpdateInputWithID as FolderUpdateInputWithID,
    type FolderUpdateTaskLocator as FolderUpdateTaskLocator,
    type ImportFromURLInput as ImportFromURLInput,
    type ImportFromURLTaskLocator as ImportFromURLTaskLocator,
    type SignedURL as SignedURL,
  };

  export {
    FilesAPIFiles as Files,
    type FileUpdateParams as FileUpdateParams,
    type FileGetParams as FileGetParams,
    type FileGetByPathParams as FileGetByPathParams,
    type FileGetSignedURLParams as FileGetSignedURLParams,
    type FileImportFromURLAsyncParams as FileImportFromURLAsyncParams,
    type FileReplaceParams as FileReplaceParams,
    type FileSearchParams as FileSearchParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Folders as Folders,
    type FolderCreateParams as FolderCreateParams,
    type FolderGetByIDParams as FolderGetByIDParams,
    type FolderGetByPathParams as FolderGetByPathParams,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncParams as FolderUpdateAsyncParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
