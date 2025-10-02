// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FormsAPI from './forms';
import {
  DatepickerField,
  DependentField,
  DropdownField,
  EmailField,
  FileField,
  FormCreateParams,
  FormDefinitionBase,
  FormDefinitionCreateBase,
  FormListParams,
  FormListResponse,
  FormPartialUpdateParams,
  FormRetrieveParams,
  FormUpdateParams,
  Forms,
  HubspotFormDefinition,
  HubspotFormDefinitionCreate,
  LegalConsentCheckbox,
  MobilePhoneField,
  MultiLineTextField,
  MultipleCheckboxesField,
  NumberField,
  PaymentLinkRadioField,
  PhoneField,
  RadioField,
  SingleCheckboxField,
  SingleLineTextField,
} from './forms';

export class V3 extends APIResource {
  forms: FormsAPI.Forms = new FormsAPI.Forms(this._client);
}

V3.Forms = Forms;

export declare namespace V3 {
  export {
    Forms as Forms,
    type DatepickerField as DatepickerField,
    type DependentField as DependentField,
    type DropdownField as DropdownField,
    type EmailField as EmailField,
    type FileField as FileField,
    type FormDefinitionBase as FormDefinitionBase,
    type FormDefinitionCreateBase as FormDefinitionCreateBase,
    type HubspotFormDefinition as HubspotFormDefinition,
    type HubspotFormDefinitionCreate as HubspotFormDefinitionCreate,
    type LegalConsentCheckbox as LegalConsentCheckbox,
    type MobilePhoneField as MobilePhoneField,
    type MultiLineTextField as MultiLineTextField,
    type MultipleCheckboxesField as MultipleCheckboxesField,
    type NumberField as NumberField,
    type PaymentLinkRadioField as PaymentLinkRadioField,
    type PhoneField as PhoneField,
    type RadioField as RadioField,
    type SingleCheckboxField as SingleCheckboxField,
    type SingleLineTextField as SingleLineTextField,
    type FormListResponse as FormListResponse,
    type FormCreateParams as FormCreateParams,
    type FormRetrieveParams as FormRetrieveParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormPartialUpdateParams as FormPartialUpdateParams,
  };
}
