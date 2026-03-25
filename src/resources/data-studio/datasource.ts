// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Datasource extends APIResource {
  create(body: DatasourceCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(
      '/data-studio/2026-03/data-source',
      multipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
          __binaryResponse: true,
        },
        this._client,
      ),
    );
  }

  update(
    datasourceID: number,
    body: DatasourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DataSourceUpdateResponse> {
    return this._client.put(
      path`/data-studio/2026-03/data-source/${datasourceID}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  delete(datasourceID: number, options?: RequestOptions): APIPromise<Response> {
    return this._client.delete(path`/data-studio/2026-03/data-source/${datasourceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  get(datasourceID: number, options?: RequestOptions): APIPromise<DataSourceGetResponse> {
    return this._client.get(path`/data-studio/2026-03/data-source/${datasourceID}`, options);
  }
}

export interface BodyPart {
  contentDisposition: ContentDisposition;

  /**
   * An object representing the actual content or payload of the body part.
   */
  entity: unknown;

  /**
   * An object containing the headers associated with this body part, where each
   * header can have multiple string values.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object representing workers that handle the processing of the message body.
   */
  messageBodyWorkers: unknown;

  /**
   * An object containing headers with parameters, where each header can have
   * multiple ParameterizedHeader objects.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object representing providers that supply additional handling or processing
   * for the body part.
   */
  providers: unknown;

  parent?: MultiPart;
}

export interface ContentDisposition {
  /**
   * The date and time when the file was created, formatted as a date-time string.
   */
  creationDate: string;

  /**
   * The name of the file as a string, indicating the file's name in the content
   * disposition.
   */
  fileName: string;

  /**
   * The date and time when the file was last modified, formatted as a date-time
   * string.
   */
  modificationDate: string;

  /**
   * An object containing additional parameters for the content disposition, with
   * each parameter represented as a key-value pair of strings.
   */
  parameters: { [key: string]: string };

  /**
   * The date and time when the file was last read, formatted as a date-time string.
   */
  readDate: string;

  /**
   * The size of the file as an integer, representing the file's size in bytes.
   */
  size: number;

  /**
   * The type of content disposition, typically a string indicating how the content
   * should be handled.
   */
  type: string;
}

export interface DataSourceGetResponse {
  /**
   * An array of FileColumn objects representing the columns in the data source.
   */
  columns: Array<FileColumn>;

  /**
   * The creation date and time of the data source, represented as a string.
   */
  createdAt: string;

  /**
   * The unique identifier for the data source, represented as a 64-bit integer.
   */
  datasourceId: number;

  /**
   * The name of the data source, represented as a string.
   */
  datasourceName: string;

  /**
   * The type of the data source, which is a string with a valid value of 'FILE'.
   */
  datasourceType: 'FILE';

  /**
   * The status of the last data ingestion process, represented as a string. Valid
   * values include 'SUCCESSFUL', 'IN_PROGRESS', and 'FAILED'.
   */
  lastIngestionStatus: 'FAILED' | 'IN_PROGRESS' | 'SUCCESSFUL';
}

export interface DataSourceUpdateResponse {
  /**
   * The unique identifier for the data source. It is an integer formatted as int64.
   */
  datasourceId: number;

  /**
   * The name of the data source. It is a string.
   */
  datasourceName: string;

  /**
   * A URL string that provides a preview link for the data source.
   */
  previewLink: string;
}

export interface FileColumn {
  /**
   * The name of the column, represented as a string.
   */
  name: string;

  /**
   * The data type of the column, represented as a string.
   */
  type: string;
}

export interface FormDataBodyPart {
  contentDisposition: ContentDisposition;

  /**
   * An object representing the entity of the form data part, which contains the
   * actual data being submitted.
   */
  entity: unknown;

  formDataContentDisposition: FormDataContentDisposition;

  /**
   * An object containing the headers associated with this form data part, where each
   * header can have multiple string values.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object representing the message body workers, which are responsible for
   * processing the body of the message.
   */
  messageBodyWorkers: unknown;

  /**
   * The name of the form data part, typically used to identify the part within the
   * multipart request.
   */
  name: string;

  /**
   * An object containing parameterized headers, where each header can have multiple
   * values represented as ParameterizedHeader objects.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object representing the providers associated with this form data part.
   */
  providers: unknown;

  /**
   * A boolean indicating whether the form data part is simple, typically meaning it
   * does not contain complex nested structures.
   */
  simple: boolean;

  /**
   * The string value of the form data part, representing the actual data being
   * submitted as a string.
   */
  value: string;

  parent?: MultiPart;
}

export interface FormDataContentDisposition {
  /**
   * The date and time when the file was created, in ISO 8601 format.
   */
  creationDate: string;

  /**
   * A string indicating the name of the file associated with this content
   * disposition.
   */
  fileName: string;

  /**
   * The date and time when the file was last modified, in ISO 8601 format.
   */
  modificationDate: string;

  /**
   * A string representing the name associated with this content disposition.
   */
  name: string;

  /**
   * An object containing additional parameters for the content disposition, with
   * each parameter represented as a string.
   */
  parameters: { [key: string]: string };

  /**
   * The date and time when the file was last read, in ISO 8601 format.
   */
  readDate: string;

  /**
   * An integer representing the size of the file in bytes.
   */
  size: number;

  /**
   * A string representing the type of content disposition.
   */
  type: string;
}

export interface FormDataMultiPart {
  /**
   * An array of BodyPart objects, each representing a part of the multipart form
   * data.
   */
  bodyParts: Array<BodyPart>;

  contentDisposition: ContentDisposition;

  /**
   * An object representing the entity of the multipart form data, containing the
   * actual data to be processed.
   */
  entity: unknown;

  /**
   * An object containing fields of the multipart form data, where each field can
   * have multiple FormDataBodyPart items.
   */
  fields: { [key: string]: Array<FormDataBodyPart> };

  /**
   * An object containing headers associated with the multipart form data, where each
   * header can have multiple string values.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object representing workers that process the message body of the multipart
   * form data.
   */
  messageBodyWorkers: unknown;

  /**
   * An object containing parameterized headers, where each header can have multiple
   * ParameterizedHeader items.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object representing providers associated with the multipart form data.
   */
  providers: unknown;

  parent?: MultiPart;
}

export interface MediaType {
  /**
   * An object containing additional parameters for the media type, where each
   * key-value pair is a string.
   */
  parameters: { [key: string]: string };

  /**
   * The specific subtype of the media, represented as a string.
   */
  subtype: string;

  /**
   * The primary type of the media, represented as a string.
   */
  type: string;

  /**
   * A boolean indicating whether the media subtype is a wildcard.
   */
  wildcardSubtype: boolean;

  /**
   * A boolean indicating whether the media type is a wildcard.
   */
  wildcardType: boolean;
}

export interface MultiPart {
  /**
   * An array of BodyPart objects, each representing a distinct part of the multipart
   * entity.
   */
  bodyParts: Array<BodyPart>;

  contentDisposition: ContentDisposition;

  /**
   * An object that holds the main content or payload of the multipart entity.
   */
  entity: unknown;

  /**
   * An object containing a map of header names to their respective values, where
   * each value is an array of strings.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object that may contain workers for processing the message body, though its
   * specific properties are not detailed.
   */
  messageBodyWorkers: unknown;

  /**
   * An object containing a map of header names to arrays of ParameterizedHeader
   * objects, which include additional parameters for each header.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object that may contain providers related to the multipart entity, though its
   * specific properties are not detailed.
   */
  providers: unknown;

  parent?: MultiPart;
}

export interface ParameterizedHeader {
  /**
   * An object containing additional parameters for the header, where each key is a
   * parameter name and each value is a string representing the parameter's value.
   */
  parameters: { [key: string]: string };

  /**
   * A string representing the main value of the header.
   */
  value: string;
}

export interface DatasourceCreateParams {
  /**
   * An array of BodyPart objects, each representing a part of the multipart form
   * data.
   */
  bodyParts: Array<BodyPart>;

  contentDisposition: ContentDisposition;

  /**
   * An object representing the entity of the multipart form data, containing the
   * actual data to be processed.
   */
  entity: unknown;

  /**
   * An object containing fields of the multipart form data, where each field can
   * have multiple FormDataBodyPart items.
   */
  fields: { [key: string]: Array<FormDataBodyPart> };

  /**
   * An object containing headers associated with the multipart form data, where each
   * header can have multiple string values.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object representing workers that process the message body of the multipart
   * form data.
   */
  messageBodyWorkers: unknown;

  /**
   * An object containing parameterized headers, where each header can have multiple
   * ParameterizedHeader items.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object representing providers associated with the multipart form data.
   */
  providers: unknown;

  parent?: MultiPart;
}

export interface DatasourceUpdateParams {
  /**
   * An array of BodyPart objects, each representing a part of the multipart form
   * data.
   */
  bodyParts: Array<BodyPart>;

  contentDisposition: ContentDisposition;

  /**
   * An object representing the entity of the multipart form data, containing the
   * actual data to be processed.
   */
  entity: unknown;

  /**
   * An object containing fields of the multipart form data, where each field can
   * have multiple FormDataBodyPart items.
   */
  fields: { [key: string]: Array<FormDataBodyPart> };

  /**
   * An object containing headers associated with the multipart form data, where each
   * header can have multiple string values.
   */
  headers: { [key: string]: Array<string> };

  mediaType: MediaType;

  /**
   * An object representing workers that process the message body of the multipart
   * form data.
   */
  messageBodyWorkers: unknown;

  /**
   * An object containing parameterized headers, where each header can have multiple
   * ParameterizedHeader items.
   */
  parameterizedHeaders: { [key: string]: Array<ParameterizedHeader> };

  /**
   * An object representing providers associated with the multipart form data.
   */
  providers: unknown;

  parent?: MultiPart;
}

export declare namespace Datasource {
  export {
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
