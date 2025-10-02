// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Forms extends APIResource {
  /**
   * Create a form
   */
  create(body: FormCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/marketing/v3/forms/', { body, ...options });
  }

  /**
   * Partially update a form definition
   */
  update(formID: string, body: FormUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }

  /**
   * Get a list of forms
   */
  list(
    query: FormListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging> {
    return this._client.get('/marketing/v3/forms/', { query, ...options });
  }

  /**
   * Archive a form definition
   */
  delete(formID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/forms/${formID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a form definition
   */
  read(
    formID: string,
    query: FormReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/marketing/v3/forms/${formID}`, { query, ...options });
  }

  /**
   * Update a form definition
   */
  replace(formID: string, body: FormReplaceParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }
}

export interface MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging {
  results: Array<MarketingFormsHubSpotFormDefinition>;

  paging?: Shared.ForwardPaging;
}

export interface MarketingFormsDatepickerField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'datepicker';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface MarketingFormsDependentField {
  dependentCondition: MarketingFormsDependentFieldFilter;

  dependentField:
    | MarketingFormsEmailField
    | MarketingFormsPhoneField
    | MarketingFormsMobilePhoneField
    | MarketingFormsSingleLineTextField
    | MarketingFormsMultiLineTextField
    | MarketingFormsNumberField
    | MarketingFormsSingleCheckboxField
    | MarketingFormsMultipleCheckboxesField
    | MarketingFormsDropdownField
    | MarketingFormsRadioField
    | MarketingFormsDatepickerField
    | MarketingFormsFileField
    | MarketingFormsPaymentLinkRadioField;
}

export interface MarketingFormsDependentFieldFilter {
  operator:
    | 'eq'
    | 'neq'
    | 'contains'
    | 'doesnt_contain'
    | 'str_starts_with'
    | 'str_ends_with'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'between'
    | 'not_between'
    | 'within_time_reverse'
    | 'within_time'
    | 'set_any'
    | 'set_not_any'
    | 'set_all'
    | 'set_not_all'
    | 'set_eq'
    | 'set_neq'
    | 'is_not_empty';

  rangeEnd: string;

  rangeStart: string;

  value: string;

  values: Array<string>;
}

export interface MarketingFormsDropdownField {
  defaultValues: Array<string>;

  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'dropdown';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<MarketingFormsEnumeratedFieldOption>;

  required: boolean;

  placeholder?: string;
}

export interface MarketingFormsEmailField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'email';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: MarketingFormsEmailFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface MarketingFormsEmailFieldValidation {
  blockedEmailDomains: Array<string>;

  useDefaultBlockList: boolean;
}

export interface MarketingFormsEnumeratedFieldOption {
  displayOrder: number;

  label: string;

  value: string;
}

export interface MarketingFormsFieldGroup {
  fields: Array<
    | MarketingFormsEmailField
    | MarketingFormsPhoneField
    | MarketingFormsMobilePhoneField
    | MarketingFormsSingleLineTextField
    | MarketingFormsMultiLineTextField
    | MarketingFormsNumberField
    | MarketingFormsSingleCheckboxField
    | MarketingFormsMultipleCheckboxesField
    | MarketingFormsDropdownField
    | MarketingFormsRadioField
    | MarketingFormsDatepickerField
    | MarketingFormsFileField
    | MarketingFormsPaymentLinkRadioField
  >;

  groupType: 'default_group' | 'progressive' | 'queued';

  richTextType: 'text' | 'image';

  richText?: string;
}

export interface MarketingFormsFileField {
  allowMultipleFiles: boolean;

  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'file';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export type MarketingFormsFormDefinitionBase = unknown;

export type MarketingFormsFormDefinitionCreateRequestBase = unknown;

export interface MarketingFormsFormDisplayOptions {
  renderRawHtml: boolean;

  style: MarketingFormsFormStyle;

  submitButtonText: string;

  theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

  cssClass?: string;
}

export interface MarketingFormsFormPostSubmitAction {
  type: 'thank_you' | 'redirect_url';

  value: string;
}

export interface MarketingFormsFormStyle {
  backgroundWidth: string;

  fontFamily: string;

  helpTextColor: string;

  helpTextSize: string;

  labelTextColor: string;

  labelTextSize: string;

  legalConsentTextColor: string;

  legalConsentTextSize: string;

  submitAlignment: 'left' | 'right' | 'center';

  submitColor: string;

  submitFontColor: string;

  submitSize: string;
}

export interface MarketingFormsHubSpotFormConfiguration {
  allowLinkToResetKnownValues: boolean;

  archivable: boolean;

  cloneable: boolean;

  createNewContactForNewEmail: boolean;

  editable: boolean;

  language:
    | 'af'
    | 'ar-eg'
    | 'bg'
    | 'bn'
    | 'ca-es'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'es-mx'
    | 'fi'
    | 'fr'
    | 'fr-ca'
    | 'he-il'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'ms'
    | 'nl'
    | 'no-no'
    | 'pl'
    | 'pt'
    | 'pt-br'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tl'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh-cn'
    | 'zh-hk'
    | 'zh-tw';

  notifyContactOwner: boolean;

  notifyRecipients: Array<string>;

  postSubmitAction: MarketingFormsFormPostSubmitAction;

  prePopulateKnownValues: boolean;

  recaptchaEnabled: boolean;

  lifecycleStages?: Array<MarketingFormsLifecycleStage>;
}

export interface MarketingFormsHubSpotFormDefinition {
  id: string;

  archived: boolean;

  configuration: MarketingFormsHubSpotFormConfiguration;

  createdAt: string;

  displayOptions: MarketingFormsFormDisplayOptions;

  fieldGroups: Array<MarketingFormsFieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | MarketingFormsLegalConsentOptionsNone
    | MarketingFormsLegalConsentOptionsLegitimateInterest
    | MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface MarketingFormsHubSpotFormDefinitionCreateRequest {
  archived: boolean;

  configuration: MarketingFormsHubSpotFormConfiguration;

  createdAt: string;

  displayOptions: MarketingFormsFormDisplayOptions;

  fieldGroups: Array<MarketingFormsFieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | MarketingFormsLegalConsentOptionsNone
    | MarketingFormsLegalConsentOptionsLegitimateInterest
    | MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface MarketingFormsHubSpotFormDefinitionPatchRequest {
  archived?: boolean;

  configuration?: MarketingFormsHubSpotFormConfiguration;

  displayOptions?: MarketingFormsFormDisplayOptions;

  fieldGroups?: Array<MarketingFormsFieldGroup>;

  legalConsentOptions?:
    | MarketingFormsLegalConsentOptionsNone
    | MarketingFormsLegalConsentOptionsLegitimateInterest
    | MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name?: string;
}

export interface MarketingFormsLegalConsentCheckbox {
  label: string;

  required: boolean;

  subscriptionTypeId: number;
}

export interface MarketingFormsLegalConsentOptionsExplicitConsentToProcess {
  communicationsCheckboxes: Array<MarketingFormsLegalConsentCheckbox>;

  privacyText: string;

  type: 'explicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessCheckboxLabel?: string;

  consentToProcessFooterText?: string;

  consentToProcessText?: string;
}

export interface MarketingFormsLegalConsentOptionsImplicitConsentToProcess {
  communicationsCheckboxes: Array<MarketingFormsLegalConsentCheckbox>;

  privacyText: string;

  type: 'implicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessText?: string;
}

export interface MarketingFormsLegalConsentOptionsLegitimateInterest {
  lawfulBasis: 'lead' | 'client' | 'other';

  privacyText: string;

  subscriptionTypeIds: Array<number>;

  type: 'legitimate_interest';
}

export interface MarketingFormsLegalConsentOptionsNone {
  type: 'none';
}

export interface MarketingFormsLifecycleStage {
  objectTypeId: string;

  value: string;
}

export interface MarketingFormsMobilePhoneField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'mobile_phone';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: MarketingFormsPhoneFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface MarketingFormsMultiLineTextField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'multi_line_text';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface MarketingFormsMultipleCheckboxesField {
  defaultValues: Array<string>;

  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'multiple_checkboxes';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<MarketingFormsEnumeratedFieldOption>;

  required: boolean;
}

export interface MarketingFormsNumberField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'number';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;

  validation?: MarketingFormsNumberFieldValidation;
}

export interface MarketingFormsNumberFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

export interface MarketingFormsPaymentLinkRadioField {
  defaultValues: Array<string>;

  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'payment_link_radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<MarketingFormsEnumeratedFieldOption>;

  required: boolean;
}

export interface MarketingFormsPhoneField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'phone';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  useCountryCodeSelect: boolean;

  validation: MarketingFormsPhoneFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface MarketingFormsPhoneFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

export interface MarketingFormsRadioField {
  defaultValues: Array<string>;

  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<MarketingFormsEnumeratedFieldOption>;

  required: boolean;

  placeholder?: string;
}

export interface MarketingFormsSingleCheckboxField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'single_checkbox';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;
}

export interface MarketingFormsSingleLineTextField {
  dependentFields: Array<MarketingFormsDependentField>;

  fieldType: 'single_line_text';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface FormCreateParams {}

export interface FormUpdateParams {
  archived?: boolean;

  configuration?: MarketingFormsHubSpotFormConfiguration;

  displayOptions?: MarketingFormsFormDisplayOptions;

  fieldGroups?: Array<MarketingFormsFieldGroup>;

  legalConsentOptions?:
    | MarketingFormsLegalConsentOptionsNone
    | MarketingFormsLegalConsentOptionsLegitimateInterest
    | MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name?: string;
}

export interface FormListParams {
  after?: string;

  archived?: boolean;

  formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>;

  limit?: number;
}

export interface FormReadParams {
  archived?: boolean;
}

export interface FormReplaceParams {
  id: string;

  archived: boolean;

  configuration: MarketingFormsHubSpotFormConfiguration;

  createdAt: string;

  displayOptions: MarketingFormsFormDisplayOptions;

  fieldGroups: Array<MarketingFormsFieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | MarketingFormsLegalConsentOptionsNone
    | MarketingFormsLegalConsentOptionsLegitimateInterest
    | MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export declare namespace Forms {
  export {
    type MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging as MarketingFormsCollectionResponseFormDefinitionBaseForwardPaging,
    type MarketingFormsDatepickerField as MarketingFormsDatepickerField,
    type MarketingFormsDependentField as MarketingFormsDependentField,
    type MarketingFormsDependentFieldFilter as MarketingFormsDependentFieldFilter,
    type MarketingFormsDropdownField as MarketingFormsDropdownField,
    type MarketingFormsEmailField as MarketingFormsEmailField,
    type MarketingFormsEmailFieldValidation as MarketingFormsEmailFieldValidation,
    type MarketingFormsEnumeratedFieldOption as MarketingFormsEnumeratedFieldOption,
    type MarketingFormsFieldGroup as MarketingFormsFieldGroup,
    type MarketingFormsFileField as MarketingFormsFileField,
    type MarketingFormsFormDefinitionBase as MarketingFormsFormDefinitionBase,
    type MarketingFormsFormDefinitionCreateRequestBase as MarketingFormsFormDefinitionCreateRequestBase,
    type MarketingFormsFormDisplayOptions as MarketingFormsFormDisplayOptions,
    type MarketingFormsFormPostSubmitAction as MarketingFormsFormPostSubmitAction,
    type MarketingFormsFormStyle as MarketingFormsFormStyle,
    type MarketingFormsHubSpotFormConfiguration as MarketingFormsHubSpotFormConfiguration,
    type MarketingFormsHubSpotFormDefinition as MarketingFormsHubSpotFormDefinition,
    type MarketingFormsHubSpotFormDefinitionCreateRequest as MarketingFormsHubSpotFormDefinitionCreateRequest,
    type MarketingFormsHubSpotFormDefinitionPatchRequest as MarketingFormsHubSpotFormDefinitionPatchRequest,
    type MarketingFormsLegalConsentCheckbox as MarketingFormsLegalConsentCheckbox,
    type MarketingFormsLegalConsentOptionsExplicitConsentToProcess as MarketingFormsLegalConsentOptionsExplicitConsentToProcess,
    type MarketingFormsLegalConsentOptionsImplicitConsentToProcess as MarketingFormsLegalConsentOptionsImplicitConsentToProcess,
    type MarketingFormsLegalConsentOptionsLegitimateInterest as MarketingFormsLegalConsentOptionsLegitimateInterest,
    type MarketingFormsLegalConsentOptionsNone as MarketingFormsLegalConsentOptionsNone,
    type MarketingFormsLifecycleStage as MarketingFormsLifecycleStage,
    type MarketingFormsMobilePhoneField as MarketingFormsMobilePhoneField,
    type MarketingFormsMultiLineTextField as MarketingFormsMultiLineTextField,
    type MarketingFormsMultipleCheckboxesField as MarketingFormsMultipleCheckboxesField,
    type MarketingFormsNumberField as MarketingFormsNumberField,
    type MarketingFormsNumberFieldValidation as MarketingFormsNumberFieldValidation,
    type MarketingFormsPaymentLinkRadioField as MarketingFormsPaymentLinkRadioField,
    type MarketingFormsPhoneField as MarketingFormsPhoneField,
    type MarketingFormsPhoneFieldValidation as MarketingFormsPhoneFieldValidation,
    type MarketingFormsRadioField as MarketingFormsRadioField,
    type MarketingFormsSingleCheckboxField as MarketingFormsSingleCheckboxField,
    type MarketingFormsSingleLineTextField as MarketingFormsSingleLineTextField,
    type FormCreateParams as FormCreateParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormReadParams as FormReadParams,
    type FormReplaceParams as FormReplaceParams,
  };
}
