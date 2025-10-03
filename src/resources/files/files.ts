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

export interface FilesCollectionResponseFile {
  results: Array<FilesFile>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface FilesCollectionResponseFolder {
  results: Array<FilesFolder>;

  paging?: EmailsAPI.MarketingEmailsPaging;
}

export interface FilesFile {
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

export interface FilesFileActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: FilesFile;
}

export interface FilesFileStat {
  file?: FilesFile;

  folder?: FilesFolder;
}

export interface FilesFileUpdateInput {
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

export interface FilesFolder {
  id: string;

  archived: boolean;

  createdAt: string;

  updatedAt: string;

  archivedAt?: string;

  name?: string;

  parentFolderId?: string;

  path?: string;
}

export interface FilesFolderActionResponse {
  completedAt: string;

  startedAt: string;

  status: 'PENDING' | 'PROCESSING' | 'CANCELED' | 'COMPLETE';

  taskId: string;

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;

  result?: FilesFolder;
}

export interface FilesFolderInput {
  name: string;

  parentFolderId?: string;

  parentPath?: string;
}

export interface FilesFolderUpdateInput {
  name?: string;

  parentFolderId?: number;
}

export interface FilesFolderUpdateInputWithID {
  id: string;

  name?: string;

  parentFolderId?: number;
}

export interface FilesFolderUpdateTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface FilesImportFromURLInput {
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

export interface FilesImportFromURLTaskLocator {
  id: string;

  links: { [key: string]: string };
}

export interface FilesSignedURL {
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
    type FilesCollectionResponseFile as FilesCollectionResponseFile,
    type FilesCollectionResponseFolder as FilesCollectionResponseFolder,
    type FilesFile as FilesFile,
    type FilesFileActionResponse as FilesFileActionResponse,
    type FilesFileStat as FilesFileStat,
    type FilesFileUpdateInput as FilesFileUpdateInput,
    type FilesFolder as FilesFolder,
    type FilesFolderActionResponse as FilesFolderActionResponse,
    type FilesFolderInput as FilesFolderInput,
    type FilesFolderUpdateInput as FilesFolderUpdateInput,
    type FilesFolderUpdateInputWithID as FilesFolderUpdateInputWithID,
    type FilesFolderUpdateTaskLocator as FilesFolderUpdateTaskLocator,
    type FilesImportFromURLInput as FilesImportFromURLInput,
    type FilesImportFromURLTaskLocator as FilesImportFromURLTaskLocator,
    type FilesSignedURL as FilesSignedURL,
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
