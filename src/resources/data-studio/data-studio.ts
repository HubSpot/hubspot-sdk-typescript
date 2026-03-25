// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DatasourceAPI from './datasource';
import {
  BodyPart,
  ContentDisposition,
  DataSourceGetResponse,
  DataSourceUpdateResponse,
  Datasource,
  DatasourceCreateParams,
  DatasourceUpdateParams,
  FileColumn,
  FormDataBodyPart,
  FormDataContentDisposition,
  FormDataMultiPart,
  MediaType,
  MultiPart,
  ParameterizedHeader,
} from './datasource';

export class DataStudio extends APIResource {
  datasource: DatasourceAPI.Datasource = new DatasourceAPI.Datasource(this._client);
}

DataStudio.Datasource = Datasource;

export declare namespace DataStudio {
  export {
    Datasource as Datasource,
    type BodyPart as BodyPart,
    type ContentDisposition as ContentDisposition,
    type DataSourceGetResponse as DataSourceGetResponse,
    type DataSourceUpdateResponse as DataSourceUpdateResponse,
    type FileColumn as FileColumn,
    type FormDataBodyPart as FormDataBodyPart,
    type FormDataContentDisposition as FormDataContentDisposition,
    type FormDataMultiPart as FormDataMultiPart,
    type MediaType as MediaType,
    type MultiPart as MultiPart,
    type ParameterizedHeader as ParameterizedHeader,
    type DatasourceCreateParams as DatasourceCreateParams,
    type DatasourceUpdateParams as DatasourceUpdateParams,
  };
}
