// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files/files';
import {
  FileGetSignedURLParams,
  FileGetSignedURLResponse,
  FileReplaceParams,
  FileRetrieveByPathParams,
  FileRetrieveByPathResponse,
  FileRetrieveParams,
  FileSearchParams,
  FileSearchResponse,
  FileUpdateParams,
  FileUploadParams,
  Files,
  FilesFile,
} from './files/files';
import * as FoldersAPI from './folders/folders';
import {
  FilesFolder,
  FolderCreateParams,
  FolderRetrieveByPathParams,
  FolderRetrieveParams,
  FolderSearchParams,
  FolderSearchResponse,
  Folders,
} from './folders/folders';

export class V3 extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
}

V3.Files = Files;
V3.Folders = Folders;

export declare namespace V3 {
  export {
    Files as Files,
    type FilesFile as FilesFile,
    type FileGetSignedURLResponse as FileGetSignedURLResponse,
    type FileRetrieveByPathResponse as FileRetrieveByPathResponse,
    type FileSearchResponse as FileSearchResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileGetSignedURLParams as FileGetSignedURLParams,
    type FileReplaceParams as FileReplaceParams,
    type FileRetrieveByPathParams as FileRetrieveByPathParams,
    type FileSearchParams as FileSearchParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Folders as Folders,
    type FilesFolder as FilesFolder,
    type FolderSearchResponse as FolderSearchResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderRetrieveByPathParams as FolderRetrieveByPathParams,
    type FolderSearchParams as FolderSearchParams,
  };
}
