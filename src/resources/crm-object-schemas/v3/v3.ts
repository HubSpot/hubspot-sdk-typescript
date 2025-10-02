// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchemasAPI from './schemas/schemas';
import {
  CRMObjectSchema,
  CRMObjectTypeDefinitionLabels,
  SchemaCreateParams,
  SchemaDeleteParams,
  SchemaListParams,
  SchemaListResponse,
  SchemaUpdateParams,
  SchemaUpdateResponse,
  Schemas,
} from './schemas/schemas';

export class V3 extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
}

V3.Schemas = Schemas;

export declare namespace V3 {
  export {
    Schemas as Schemas,
    type CRMObjectSchema as CRMObjectSchema,
    type CRMObjectTypeDefinitionLabels as CRMObjectTypeDefinitionLabels,
    type SchemaUpdateResponse as SchemaUpdateResponse,
    type SchemaListResponse as SchemaListResponse,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };
}
