// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsSchemaAPI from './associations-schema';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Labels extends APIResource {
  /**
   * Create multiple association definitions between two specified CRM object types
   * in a single request.
   */
  batchCreate(
    toObjectType: string,
    params: LabelBatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.BatchResponsePublicAssociationDefinitionUserConfiguration> {
    const { fromObjectType, ...body } = params;
    return this._client.post(
      path`/crm/associations/2026-03/definitions/configurations/${fromObjectType}/${toObjectType}/batch/create`,
      { body, ...options },
    );
  }

  /**
   * Create a new label that describes the relationship between two specified CRM
   * object types. This can help in categorizing and managing associations more
   * effectively.
   */
  createLabel(
    toObjectType: string,
    params: LabelCreateLabelParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponseAssociationSpecWithLabelNoPaging> {
    const { fromObjectType, ...body } = params;
    return this._client.post(path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a specific label from the association between two CRM object types.
   */
  deleteLabel(
    associationTypeID: number,
    params: LabelDeleteLabelParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, toObjectType } = params;
    return this._client.delete(
      path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/labels/${associationTypeID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieve all labels that describe the relationships between two specified CRM
   * object types. These labels provide context about the nature of the associations.
   */
  listLabels(
    toObjectType: string,
    params: LabelListLabelsParams,
    options?: RequestOptions,
  ): APIPromise<AssociationsSchemaAPI.CollectionResponseAssociationSpecWithLabelNoPaging> {
    const { fromObjectType } = params;
    return this._client.get(
      path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/labels`,
      options,
    );
  }

  /**
   * Update an existing label that describes the relationship between two specified
   * CRM object types. This allows for modifications to existing association labels
   * to better reflect the nature of the relationship.
   */
  updateLabel(
    toObjectType: string,
    params: LabelUpdateLabelParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { fromObjectType, ...body } = params;
    return this._client.put(path`/crm/associations/2026-03/${fromObjectType}/${toObjectType}/labels`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LabelBatchCreateParams {
  /**
   * Path param: The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * Body param
   */
  inputs: Array<AssociationsSchemaAPI.PublicAssociationDefinitionConfigurationCreateRequest>;
}

export interface LabelCreateLabelParams {
  /**
   * Path param: The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * Body param: A descriptor that provides context about the relationship between
   * two associated CRM objects.
   */
  label: string;

  /**
   * Body param: The unique identifier for the association definition.
   */
  name: string;

  /**
   * Body param: An optional descriptor that clarifies the reverse relationship in
   * the association.
   */
  inverseLabel?: string;
}

export interface LabelDeleteLabelParams {
  /**
   * The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * The type of the target object in the association.
   */
  toObjectType: string;
}

export interface LabelListLabelsParams {
  /**
   * The type of the source object in the association.
   */
  fromObjectType: string;
}

export interface LabelUpdateLabelParams {
  /**
   * Path param: The type of the source object in the association.
   */
  fromObjectType: string;

  /**
   * Body param: The unique identifier for the association type.
   */
  associationTypeId: number;

  /**
   * Body param: A descriptor that provides context about the relationship between
   * associated records.
   */
  label: string;

  /**
   * Body param: An optional descriptor for the inverse relationship between
   * associated records.
   */
  inverseLabel?: string;
}

export declare namespace Labels {
  export {
    type LabelBatchCreateParams as LabelBatchCreateParams,
    type LabelCreateLabelParams as LabelCreateLabelParams,
    type LabelDeleteLabelParams as LabelDeleteLabelParams,
    type LabelListLabelsParams as LabelListLabelsParams,
    type LabelUpdateLabelParams as LabelUpdateLabelParams,
  };
}
