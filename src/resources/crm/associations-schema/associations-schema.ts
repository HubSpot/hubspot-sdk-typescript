// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CrmAPI from '../crm';
import * as LabelsAPI from './labels';
import {
  BaseLabels,
  LabelBatchCreateParams,
  LabelCreateLabelParams,
  LabelDeleteLabelParams,
  LabelListLabelsParams,
  LabelUpdateLabelParams,
  Labels,
} from './labels';
import * as LimitsAPI from './limits';
import {
  BaseLimits,
  LimitBatchDeleteParams,
  LimitBatchUpdateParams,
  LimitGetByObjectTypesParams,
  Limits,
} from './limits';

export class BaseAssociationsSchema extends APIResource {
  static override readonly _key: readonly ['crm', 'associationsSchema'] = Object.freeze([
    'crm',
    'associationsSchema',
  ] as const);
}
export class AssociationsSchema extends BaseAssociationsSchema {
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
}

export interface BatchInputPublicAssociationDefinitionConfigurationCreateRequest {
  inputs: Array<PublicAssociationDefinitionConfigurationCreateRequest>;
}

export interface BatchInputPublicAssociationDefinitionConfigurationUpdateRequest {
  inputs: Array<PublicAssociationDefinitionConfigurationUpdateRequest>;
}

export interface BatchInputPublicAssociationSpec {
  inputs: Array<PublicAssociationSpec>;
}

export interface BatchResponsePublicAssociationDefinitionConfigurationUpdateResult {
  /**
   * The date and time when the batch update operation was completed.
   */
  completedAt: string;

  results: Array<PublicAssociationDefinitionConfigurationUpdateResult>;

  /**
   * The date and time when the batch update operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch update operation, which can be CANCELED,
   * COMPLETE, PENDING, or PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * URLs linking to documentation or resources associated with the batch update
   * operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch update operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors {
  completedAt: string;

  results: Array<PublicAssociationDefinitionConfigurationUpdateResult>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionUserConfiguration {
  /**
   * The date and time when the batch operation was completed.
   */
  completedAt: string;

  results: Array<PublicAssociationDefinitionUserConfiguration>;

  /**
   * The date and time when the batch operation started.
   */
  startedAt: string;

  /**
   * The current status of the batch operation, which can be CANCELED, COMPLETE,
   * PENDING, or PROCESSING.
   */
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  /**
   * A collection of URLs linking to related documentation or resources associated
   * with the batch operation.
   */
  links?: { [key: string]: string };

  /**
   * The date and time when the batch operation was requested.
   */
  requestedAt?: string;
}

export interface BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors {
  completedAt: string;

  results: Array<PublicAssociationDefinitionUserConfiguration>;

  startedAt: string;

  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';

  errors?: Array<Shared.StandardError>;

  links?: { [key: string]: string };

  numErrors?: number;

  requestedAt?: string;
}

export interface CollectionResponseAssociationSpecWithLabelNoPaging {
  results: Array<CrmAPI.AssociationSpecWithLabel>;
}

export interface CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging {
  results: Array<PublicAssociationDefinitionUserConfiguration>;
}

export interface PublicAssociationDefinitionConfigurationCreateRequest {
  /**
   * Specifies the category of the association, which can be HUBSPOT_DEFINED,
   * INTEGRATOR_DEFINED, or USER_DEFINED.
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * The maximum number of target object IDs that can be associated with a single
   * source object.
   */
  maxToObjectIds: number;

  /**
   * An integer used to uniquely identify a specific association type within its
   * category.
   */
  typeId: number;
}

export interface PublicAssociationDefinitionConfigurationUpdateRequest {
  /**
   * Specifies the category of the association, which can be HUBSPOT_DEFINED,
   * INTEGRATOR_DEFINED, or USER_DEFINED.
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * Defines the maximum number of target object IDs that can be associated.
   */
  maxToObjectIds: number;

  /**
   * A unique identifier for the association type.
   */
  typeId: number;
}

export interface PublicAssociationDefinitionConfigurationUpdateResult {
  /**
   * The category of the association, which can be HUBSPOT_DEFINED,
   * INTEGRATOR_DEFINED, or USER_DEFINED.
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * An integer value used to uniquely identify a specific association type within
   * its Association Category.
   */
  typeId: number;

  /**
   * The maximum number of object IDs that a user can enforce for associations.
   */
  userEnforcedMaxToObjectIds?: number;
}

export interface PublicAssociationDefinitionCreateRequest {
  /**
   * A descriptor that provides context about the relationship between two associated
   * CRM objects.
   */
  label: string;

  /**
   * The unique identifier for the association definition.
   */
  name: string;

  /**
   * An optional descriptor that clarifies the reverse relationship in the
   * association.
   */
  inverseLabel?: string;
}

export interface PublicAssociationDefinitionUpdateRequest {
  /**
   * The unique identifier for the association type.
   */
  associationTypeId: number;

  /**
   * A descriptor that provides context about the relationship between associated
   * records.
   */
  label: string;

  /**
   * An optional descriptor for the inverse relationship between associated records.
   */
  inverseLabel?: string;
}

export interface PublicAssociationDefinitionUserConfiguration {
  /**
   * The category of the association, which can be HUBSPOT_DEFINED,
   * INTEGRATOR_DEFINED, or USER_DEFINED.
   */
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK';

  /**
   * A unique integer identifier for the association type within its category.
   */
  typeId: number;

  /**
   * A descriptor providing context about the relationship between associated
   * records.
   */
  label?: string;

  /**
   * The maximum number of target object IDs that a user can enforce in an
   * association.
   */
  userEnforcedMaxToObjectIds?: number;
}

export interface PublicAssociationSpec {
  /**
   * Specifies the category of the association, which can be HUBSPOT_DEFINED,
   * INTEGRATOR_DEFINED, or USER_DEFINED.
   */
  category: string;

  /**
   * A unique integer identifier for the specific association type within its
   * category.
   */
  typeId: number;
}

AssociationsSchema.Labels = Labels;
AssociationsSchema.BaseLabels = BaseLabels;
AssociationsSchema.Limits = Limits;
AssociationsSchema.BaseLimits = BaseLimits;

export declare namespace AssociationsSchema {
  export {
    type BatchInputPublicAssociationDefinitionConfigurationCreateRequest as BatchInputPublicAssociationDefinitionConfigurationCreateRequest,
    type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest as BatchInputPublicAssociationDefinitionConfigurationUpdateRequest,
    type BatchInputPublicAssociationSpec as BatchInputPublicAssociationSpec,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResult as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult,
    type BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors as BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors,
    type BatchResponsePublicAssociationDefinitionUserConfiguration as BatchResponsePublicAssociationDefinitionUserConfiguration,
    type BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors,
    type CollectionResponseAssociationSpecWithLabelNoPaging as CollectionResponseAssociationSpecWithLabelNoPaging,
    type CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging,
    type PublicAssociationDefinitionConfigurationCreateRequest as PublicAssociationDefinitionConfigurationCreateRequest,
    type PublicAssociationDefinitionConfigurationUpdateRequest as PublicAssociationDefinitionConfigurationUpdateRequest,
    type PublicAssociationDefinitionConfigurationUpdateResult as PublicAssociationDefinitionConfigurationUpdateResult,
    type PublicAssociationDefinitionCreateRequest as PublicAssociationDefinitionCreateRequest,
    type PublicAssociationDefinitionUpdateRequest as PublicAssociationDefinitionUpdateRequest,
    type PublicAssociationDefinitionUserConfiguration as PublicAssociationDefinitionUserConfiguration,
    type PublicAssociationSpec as PublicAssociationSpec,
  };

  export {
    Labels as Labels,
    BaseLabels as BaseLabels,
    type LabelBatchCreateParams as LabelBatchCreateParams,
    type LabelCreateLabelParams as LabelCreateLabelParams,
    type LabelDeleteLabelParams as LabelDeleteLabelParams,
    type LabelListLabelsParams as LabelListLabelsParams,
    type LabelUpdateLabelParams as LabelUpdateLabelParams,
  };

  export {
    Limits as Limits,
    BaseLimits as BaseLimits,
    type LimitBatchDeleteParams as LimitBatchDeleteParams,
    type LimitBatchUpdateParams as LimitBatchUpdateParams,
    type LimitGetByObjectTypesParams as LimitGetByObjectTypesParams,
  };
}
