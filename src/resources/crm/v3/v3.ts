// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsAPI from './associations/associations';
import { Associations } from './associations/associations';
import * as ObjectsAPI from './objects/objects';
import { Objects } from './objects/objects';
import * as PipelinesAPI from './pipelines/pipelines';
import {
  CRMPipelinesPipeline,
  CRMPipelinesPipelineInput,
  PipelineDeleteParams,
  PipelineRetrieveAuditParams,
  PipelineRetrieveResponse,
  PipelineUpdateParams,
  Pipelines,
} from './pipelines/pipelines';
import * as PropertiesAPI from './properties/properties';
import {
  CRMOption,
  CRMPropertiesOptionInput,
  CRMPropertiesPropertyCreate,
  CRMProperty,
  Properties,
  PropertyDeleteParams,
  PropertyRetrieveParams,
  PropertyRetrieveResponse,
  PropertyUpdateParams,
  PropertyUpdateResponse,
} from './properties/properties';

export class V3 extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
}

V3.Associations = Associations;
V3.Objects = Objects;
V3.Pipelines = Pipelines;
V3.Properties = Properties;

export declare namespace V3 {
  export { Associations as Associations };

  export { Objects as Objects };

  export {
    Pipelines as Pipelines,
    type CRMPipelinesPipeline as CRMPipelinesPipeline,
    type CRMPipelinesPipelineInput as CRMPipelinesPipelineInput,
    type PipelineRetrieveResponse as PipelineRetrieveResponse,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineDeleteParams as PipelineDeleteParams,
    type PipelineRetrieveAuditParams as PipelineRetrieveAuditParams,
  };

  export {
    Properties as Properties,
    type CRMOption as CRMOption,
    type CRMPropertiesOptionInput as CRMPropertiesOptionInput,
    type CRMPropertiesPropertyCreate as CRMPropertiesPropertyCreate,
    type CRMProperty as CRMProperty,
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyUpdateResponse as PropertyUpdateResponse,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };
}
