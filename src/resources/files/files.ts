// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as FilesFilesAPI from './files_';
import { FileImportFromURLAsyncParams, FileSearchParams, Files as FilesAPIFiles } from './files_';
import * as FoldersAPI from './folders';
import { FolderSearchParams, FolderUpdateAsyncByIDParams, FolderUpdateByIDParams, Folders } from './folders';
import { Page } from '../../core/pagination';

export class Files extends APIResource {
  files: FilesFilesAPI.Files = new FilesFilesAPI.Files(this._client);
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

Files.Files = FilesAPIFiles;
Files.Folders = Folders;

export declare namespace Files {
  export {
    type CollectionResponseFile as CollectionResponseFile,
    type CollectionResponseFolder as CollectionResponseFolder,
    type File as File,
    type FileActionResponse as FileActionResponse,
    type Folder as Folder,
    type FolderActionResponse as FolderActionResponse,
    type FolderUpdateInput as FolderUpdateInput,
    type FolderUpdateInputWithID as FolderUpdateInputWithID,
    type FolderUpdateTaskLocator as FolderUpdateTaskLocator,
    type ImportFromURLInput as ImportFromURLInput,
    type ImportFromURLTaskLocator as ImportFromURLTaskLocator,
  };

  export {
    FilesAPIFiles as Files,
    type FileImportFromURLAsyncParams as FileImportFromURLAsyncParams,
    type FileSearchParams as FileSearchParams,
  };

  export {
    Folders as Folders,
    type FolderSearchParams as FolderSearchParams,
    type FolderUpdateAsyncByIDParams as FolderUpdateAsyncByIDParams,
    type FolderUpdateByIDParams as FolderUpdateByIDParams,
  };
}
