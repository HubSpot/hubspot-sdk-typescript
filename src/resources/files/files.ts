// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as FileAssetsAPI from './file-assets';
import {
  BaseFileAssets,
  FileAssetCreateParams,
  FileAssetGetByPathParams,
  FileAssetGetParams,
  FileAssetGetSignedURLParams,
  FileAssetImportFromURLAsyncParams,
  FileAssetReplaceParams,
  FileAssetSearchParams,
  FileAssetUpdateParams,
  FileAssetUploadParams,
  FileAssets,
} from './file-assets';
import * as FoldersAPI from './folders';
import {
  BaseFolders,
  FolderGetByIDParams,
  FolderGetByPathParams,
  FolderSearchParams,
  FolderUpdateAsyncByIDParams,
  FolderUpdateByIDParams,
  Folders,
} from './folders';
import { Page } from '../../core/pagination';

export class BaseFiles extends APIResource {
  static override readonly _key: readonly ['files'] = Object.freeze(['files'] as const);
}
export class Files extends BaseFiles {
  fileAssets: FileAssetsAPI.FileAssets = new FileAssetsAPI.FileAssets(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
}

export type FilesPage = Page<File>;

export type FoldersPage = Page<Folder>;

export interface CollectionResponseFile {
  results: Array<File>;

  paging?: Shared.Paging;
}

export interface CollectionResponseFolder {
  results: Array<Folder>;

  paging?: Shared.Paging;
}

export interface File {
  /**
   * File ID.
   */
  id: string;

  /**
   * If the file is deleted.
   */
  archived: boolean;

  /**
   * Creation time of the file object.
   */
  createdAt: string;

  /**
   * Timestamp of the latest update to the file.
   */
  updatedAt: string;

  /**
   * File access. Can be PUBLIC_INDEXABLE, PUBLIC_NOT_INDEXABLE, PRIVATE.
   */
  access?:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE';

  /**
   * Deletion time of the file object.
   */
  archivedAt?: string;

  /**
   * Default hosting URL of the file. This will use one of HubSpot's provided URLs to
   * serve the file.
   */
  defaultHostingUrl?: string;

  /**
   * Encoding of the file.
   */
  encoding?: string;

  expiresAt?: number;

  /**
   * Extension of the file. ex: .jpg, .png, .gif, .pdf, etc.
   */
  extension?: string;

  /**
   * The MD5 hash of the file.
   */
  fileMd5?: string;

  /**
   * For image and video files, the height of the content.
   */
  height?: number;

  /**
   * Previously "archied". Indicates if the file should be used when creating new
   * content like web pages.
   */
  isUsableInContent?: boolean;

  /**
   * Name of the file.
   */
  name?: string;

  /**
   * ID of the folder the file is in.
   */
  parentFolderId?: string;

  /**
   * Path of the file in the file manager.
   */
  path?: string;

  /**
   * Size of the file in bytes.
   */
  size?: number;

  sourceGroup?: 'CONTENT' | 'CONVERSATIONS' | 'FORMS' | 'UI_EXTENSIONS' | 'UNKNOWN';

  /**
   * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
   */
  type?: string;

  /**
   * URL of the given file. This URL can change depending on the domain settings of
   * the account. Will use the select file hosting domain.
   */
  url?: string;

  /**
   * For image and video files, the width of the content.
   */
  width?: number;
}

export interface FileActionResponse {
  /**
   * Time of completion of task.
   */
  completedAt: string;

  /**
   * Timestamp of when the task was started.
   */
  startedAt: string;

  /**
   * Current status of the task.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * ID of the requested task.
   */
  taskId: string;

  /**
   * Descriptive error messages.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Link to check the status of the requested task.
   */
  links?: { [key: string]: string };

  /**
   * Number of errors resulting from the task.
   */
  numErrors?: number;

  /**
   * Timestamp of when the task was requested.
   */
  requestedAt?: string;

  result?: File;
}

export interface FileStat {
  file?: File;

  folder?: Folder;
}

export interface FileUpdateInput {
  clearExpires: boolean;

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  access?:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE';

  expiresAt?: string;

  /**
   * Mark whether the file should be used in new content or not.
   */
  isUsableInContent?: boolean;

  /**
   * New name for the file.
   */
  name?: string;

  /**
   * FolderId where the file should be moved to. folderId and folderPath parameters
   * cannot be set at the same time.
   */
  parentFolderId?: string;

  /**
   * Folder path where the file should be moved to. folderId and folderPath
   * parameters cannot be set at the same time.
   */
  parentFolderPath?: string;
}

export interface Folder {
  /**
   * ID of the folder.
   */
  id: string;

  /**
   * Marks whether the folder is deleted or not.
   */
  archived: boolean;

  /**
   * Timestamp of folder creation.
   */
  createdAt: string;

  /**
   * Timestamp of the latest update to the folder.
   */
  updatedAt: string;

  /**
   * Timestamp of folder deletion.
   */
  archivedAt?: string;

  /**
   * Name of the folder.
   */
  name?: string;

  /**
   * ID of the parent folder.
   */
  parentFolderId?: string;

  /**
   * Path of the folder in the file manager.
   */
  path?: string;
}

export interface FolderActionResponse {
  /**
   * When the requested changes have been completed.
   */
  completedAt: string;

  /**
   * Timestamp representing when the task was started at.
   */
  startedAt: string;

  /**
   * Current status of the task.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * ID of the task.
   */
  taskId: string;

  /**
   * Detailed errors resulting from the task.
   */
  errors?: Array<Shared.StandardError>;

  /**
   * Link to check the status of the task.
   */
  links?: { [key: string]: string };

  /**
   * Number of errors resulting from the requested changes.
   */
  numErrors?: number;

  /**
   * Timestamp representing when the task was requested.
   */
  requestedAt?: string;

  result?: Folder;
}

export interface FolderInput {
  /**
   * Desired name for the folder.
   */
  name: string;

  /**
   * FolderId of the parent of the created folder. If not specified, the folder will
   * be created at the root level. parentFolderId and parentFolderPath cannot be set
   * at the same time.
   */
  parentFolderId?: string;

  /**
   * Path of the parent of the created folder. If not specified the folder will be
   * created at the root level. parentFolderPath and parentFolderId cannot be set at
   * the same time.
   */
  parentPath?: string;
}

export interface FolderUpdateInput {
  /**
   * New name. If specified the folder's name and fullPath will change. All children
   * of the folder will be updated accordingly.
   */
  name?: string;

  /**
   * New parent folderId. If changed, the folder and all it's children will be moved
   * into the specified folder. parentFolderId and parentFolderPath cannot be
   * specified at the same time.
   */
  parentFolderId?: number;
}

export interface FolderUpdateInputWithID {
  /**
   * The unique identifier of the folder to be updated.
   */
  id: string;

  /**
   * New name. If specified the folder's name and fullPath will change. All children
   * of the folder will be updated accordingly.
   */
  name?: string;

  /**
   * New parent folderId. If changed, the folder and all it's children will be moved
   * into the specified folder. parentFolderId and parentFolderPath cannot be
   * specified at the same time.
   */
  parentFolderId?: number;
}

export interface FolderUpdateTaskLocator {
  /**
   * ID of the task
   */
  id: string;

  /**
   * Links for where to check information related to the task. The `status` link
   * gives the URL for where to check the status of the task.
   */
  links?: { [key: string]: string };
}

export interface ImportFromURLInput {
  /**
   * PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search
   * engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by
   * anyone who has the URL. Search engines _can't_ index the file. PRIVATE: File is
   * NOT publicly accessible. Requires a signed URL to see content. Search engines
   * _can't_ index the file.
   */
  access:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE';

  /**
   * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER:
   * Look for a duplicate file in the provided folder.
   */
  duplicateValidationScope: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  duplicateValidationStrategy: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

  /**
   * If true, will overwrite existing file if one with the same name and extension
   * exists in the given folder. The overwritten file will be deleted and the
   * uploaded file will take its place with a new ID. If unset or set as false, the
   * new file's name will be updated to prevent colliding with existing file if one
   * exists with the same path, name, and extension
   */
  overwrite: boolean;

  /**
   * Specifies the date and time when the file will expire.
   */
  expiresAt?: string;

  /**
   * One of folderId or folderPath is required. Destination folderId for the uploaded
   * file.
   */
  folderId?: string;

  /**
   * One of folderPath or folderId is required. Destination folder path for the
   * uploaded file. If the folder path does not exist, there will be an attempt to
   * create the folder path.
   */
  folderPath?: string;

  /**
   * Name to give the resulting file in the file manager.
   */
  name?: string;

  /**
   * Time to live. If specified the file will be deleted after the given time frame.
   * If left unset, the file will exist indefinitely
   */
  ttl?: string;

  /**
   * URL to download the new file from.
   */
  url?: string;
}

export interface ImportFromURLTaskLocator {
  /**
   * ID of the task
   */
  id: string;

  /**
   * Links for where to check information related to the task. The `status` link
   * gives the URL for where to check the status of the task.
   */
  links?: { [key: string]: string };
}

export interface SignedURL {
  /**
   * Timestamp of when the URL will no longer grant access to the file.
   */
  expiresAt: string;

  /**
   * Signed URL with access to the specified file. Anyone with this URL will be able
   * to access the file until it expires.
   */
  url: string;

  /**
   * Extension of the requested file.
   */
  extension?: string;

  /**
   * For image and video files. The height of the file.
   */
  height?: number;

  /**
   * Name of the requested file.
   */
  name?: string;

  /**
   * Size in bytes of the requested file.
   */
  size?: number;

  /**
   * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
   */
  type?: string;

  /**
   * For image and video files. The width of the file.
   */
  width?: number;
}

Files.FileAssets = FileAssets;
Files.BaseFileAssets = BaseFileAssets;
Files.Folders = Folders;
Files.BaseFolders = BaseFolders;

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
    FileAssets as FileAssets,
    BaseFileAssets as BaseFileAssets,
    type FileAssetCreateParams as FileAssetCreateParams,
    type FileAssetUpdateParams as FileAssetUpdateParams,
    type FileAssetGetParams as FileAssetGetParams,
    type FileAssetGetByPathParams as FileAssetGetByPathParams,
    type FileAssetGetSignedURLParams as FileAssetGetSignedURLParams,
    type FileAssetImportFromURLAsyncParams as FileAssetImportFromURLAsyncParams,
    type FileAssetReplaceParams as FileAssetReplaceParams,
    type FileAssetSearchParams as FileAssetSearchParams,
    type FileAssetUploadParams as FileAssetUploadParams,
  };

  export {
    Folders as Folders,
    BaseFolders as BaseFolders,
    type FolderGetByIDParams as FolderGetByIDParams,
    type FolderGetByPathParams as FolderGetByPathParams,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncByIDParams as FolderUpdateAsyncByIDParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
