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
  FolderUpdateAsyncByIDParams,
  FolderUpdateByIDParams,
  Folders,
} from './folders';
import { Page } from '../../core/pagination';

export class Files extends APIResource {
  files: FilesFilesAPI.Files = new FilesFilesAPI.Files(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
}

export type FilesPage = Page<File>;

export type FoldersPage = Page<Folder>;

/**
 * Collections of files
 */
export interface CollectionResponseFile {
  results: Array<File>;

  paging?: Shared.Paging;
}

export interface CollectionResponseFolder {
  results: Array<Folder>;

  paging?: Shared.Paging;
}

/**
 * File
 */
export interface File {
  /**
   * File ID.
   */
  id: string;

  /**
   * File access. Can be PUBLIC_INDEXABLE, PUBLIC_NOT_INDEXABLE, PRIVATE.
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

  sourceGroup?: string;

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

  /**
   * File
   */
  result?: File;
}

export interface FileStat {
  /**
   * File
   */
  file?: File;

  folder?: Folder;
}

/**
 * Object for updating files.
 */
export interface FileUpdateInput {
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

  clearExpires?: boolean;

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

/**
 * Object for creating a folder.
 */
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

/**
 * Object for updating folders.
 */
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
   * The new name for the folder, which will also update the fullPath and all
   * children of the folder.
   */
  name?: string;

  /**
   * The ID of the new parent folder, which will move the folder and its children
   * into the specified folder.
   */
  parentFolderId?: number;
}

/**
 * Information on the task that has been started, and where to check it's status.
 */
export interface FolderUpdateTaskLocator {
  /**
   * ID of the task
   */
  id: string;

  /**
   * Links for where to check information related to the task. The `status` link
   * gives the URL for where to check the status of the task.
   */
  links: { [key: string]: string };
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
   * URL to download the new file from.
   */
  url: string;

  /**
   * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER:
   * Look for a duplicate file in the provided folder.
   */
  duplicateValidationScope?: 'ENTIRE_PORTAL' | 'EXACT_FOLDER';

  /**
   * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a
   * duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload
   * a new file and return the found duplicate instead.
   */
  duplicateValidationStrategy?: 'NONE' | 'REJECT' | 'RETURN_EXISTING';

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
   * If true, will overwrite existing file if one with the same name and extension
   * exists in the given folder. The overwritten file will be deleted and the
   * uploaded file will take its place with a new ID. If unset or set as false, the
   * new file's name will be updated to prevent colliding with existing file if one
   * exists with the same path, name, and extension
   */
  overwrite?: boolean;

  /**
   * Time to live. If specified the file will be deleted after the given time frame.
   * If left unset, the file will exist indefinitely
   */
  ttl?: string;
}

/**
 * Information on the task that has been started, and where to check it's status.
 */
export interface ImportFromURLTaskLocator {
  /**
   * ID of the task
   */
  id: string;

  /**
   * Links for where to check information related to the task. The `status` link
   * gives the URL for where to check the status of the task.
   */
  links: { [key: string]: string };
}

/**
 * Signed Url object with optional ancillary metadata of requested file
 */
export interface SignedURL {
  /**
   * Timestamp of when the URL will no longer grant access to the file.
   */
  expiresAt: string;

  /**
   * Extension of the requested file.
   */
  extension: string;

  /**
   * Name of the requested file.
   */
  name: string;

  /**
   * Size in bytes of the requested file.
   */
  size: number;

  /**
   * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
   */
  type: string;

  /**
   * Signed URL with access to the specified file. Anyone with this URL will be able
   * to access the file until it expires.
   */
  url: string;

  /**
   * For image and video files. The height of the file.
   */
  height?: number;

  /**
   * For image and video files. The width of the file.
   */
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
    type FolderUpdateAsyncByIDParams as FolderUpdateAsyncByIDParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
