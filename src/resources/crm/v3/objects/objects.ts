// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CompaniesAPI from './companies/companies';
import {
  CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
  CRMObjectsCollectionResponseWithTotalSimplePublicObject,
  CRMObjectsCreatedResponseSimplePublicObject,
  CRMObjectsPublicAssociationsForObject,
  CRMObjectsPublicMergeInput,
  CRMObjectsPublicObjectSearchRequest,
  CRMObjectsSimplePublicObject,
  CRMObjectsSimplePublicObjectInput,
  CRMObjectsSimplePublicObjectInputForCreate,
  CRMObjectsSimplePublicObjectWithAssociations,
  Companies,
  CompanyCreateParams,
  CompanyListParams,
  CompanyMergeParams,
  CompanyRetrieveParams,
  CompanySearchParams,
  CompanyUpdateParams,
} from './companies/companies';
import * as ContactsAPI from './contacts/contacts';
import {
  ContactCreateParams,
  ContactGdprDeleteParams,
  ContactListParams,
  ContactMergeParams,
  ContactRetrieveParams,
  ContactSearchParams,
  ContactUpdateParams,
  Contacts,
} from './contacts/contacts';
import * as Number0_3API from './number-0-3/number-0-3';
import {
  Number0_3,
  Number0_3MergeParams,
  Number0_3Retrieve0_3Params,
  Number0_3RetrieveParams,
  Number0_3SearchParams,
  Number0_3UpdateParams,
  Number0_3_0_3Params,
} from './number-0-3/number-0-3';

export class Objects extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  number0_3: Number0_3API.Number0_3 = new Number0_3API.Number0_3(this._client);
}

Objects.Companies = Companies;
Objects.Contacts = Contacts;
Objects.Number0_3 = Number0_3;

export declare namespace Objects {
  export {
    Companies as Companies,
    type CRMObjectsCollectionResponseSimplePublicObjectWithAssociations as CRMObjectsCollectionResponseSimplePublicObjectWithAssociations,
    type CRMObjectsCollectionResponseWithTotalSimplePublicObject as CRMObjectsCollectionResponseWithTotalSimplePublicObject,
    type CRMObjectsCreatedResponseSimplePublicObject as CRMObjectsCreatedResponseSimplePublicObject,
    type CRMObjectsPublicAssociationsForObject as CRMObjectsPublicAssociationsForObject,
    type CRMObjectsPublicMergeInput as CRMObjectsPublicMergeInput,
    type CRMObjectsPublicObjectSearchRequest as CRMObjectsPublicObjectSearchRequest,
    type CRMObjectsSimplePublicObject as CRMObjectsSimplePublicObject,
    type CRMObjectsSimplePublicObjectInput as CRMObjectsSimplePublicObjectInput,
    type CRMObjectsSimplePublicObjectInputForCreate as CRMObjectsSimplePublicObjectInputForCreate,
    type CRMObjectsSimplePublicObjectWithAssociations as CRMObjectsSimplePublicObjectWithAssociations,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyRetrieveParams as CompanyRetrieveParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyMergeParams as CompanyMergeParams,
    type CompanySearchParams as CompanySearchParams,
  };

  export {
    Contacts as Contacts,
    type ContactCreateParams as ContactCreateParams,
    type ContactRetrieveParams as ContactRetrieveParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactGdprDeleteParams as ContactGdprDeleteParams,
    type ContactMergeParams as ContactMergeParams,
    type ContactSearchParams as ContactSearchParams,
  };

  export {
    Number0_3 as Number0_3,
    type Number0_3RetrieveParams as Number0_3RetrieveParams,
    type Number0_3UpdateParams as Number0_3UpdateParams,
    type Number0_3_0_3Params as Number0_3_0_3Params,
    type Number0_3MergeParams as Number0_3MergeParams,
    type Number0_3Retrieve0_3Params as Number0_3Retrieve0_3Params,
    type Number0_3SearchParams as Number0_3SearchParams,
  };
}
