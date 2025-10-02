// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssociationsAPI from './associations';
import {
  AssociationCreateDefaultParams,
  AssociationCreateParams,
  AssociationCreateResponse,
  AssociationDeleteParams,
  AssociationListParams,
  AssociationListResponse,
  AssociationSpecV4,
  Associations,
  BatchResponsePublicDefaultAssociation,
  LabelsBetweenObjectPair,
  MultiAssociatedObjectWithLabel,
} from './associations';

export class Objects extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);
}

Objects.Associations = Associations;

export declare namespace Objects {
  export {
    Associations as Associations,
    type AssociationSpecV4 as AssociationSpecV4,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type AssociationCreateResponse as AssociationCreateResponse,
    type AssociationListResponse as AssociationListResponse,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationDeleteParams as AssociationDeleteParams,
    type AssociationCreateDefaultParams as AssociationCreateDefaultParams,
  };
}
