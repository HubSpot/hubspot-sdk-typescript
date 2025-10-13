// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Forms extends APIResource {
  /**
   * Create a form
   */
  create(body: FormCreateParams, options?: RequestOptions): APIPromise<HubSpotFormDefinition> {
    return this._client.post('/marketing/v3/forms/', { body, ...options });
  }

  /**
   * Partially update a form definition
   */
  update(
    formID: string,
    body: FormUpdateParams,
    options?: RequestOptions,
  ): APIPromise<HubSpotFormDefinition> {
    return this._client.patch(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }

  /**
   * Get a list of forms
   */
  list(
    query: FormListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HubSpotFormDefinitionsPage, HubSpotFormDefinition> {
    return this._client.getAPIList('/marketing/v3/forms/', Page<HubSpotFormDefinition>, {
      query,
      ...options,
    });
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
  ): APIPromise<HubSpotFormDefinition> {
    return this._client.get(path`/marketing/v3/forms/${formID}`, { query, ...options });
  }

  /**
   * Update a form definition
   */
  replace(
    formID: string,
    body: FormReplaceParams,
    options?: RequestOptions,
  ): APIPromise<HubSpotFormDefinition> {
    return this._client.put(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }
}

export type HubSpotFormDefinitionsPage = Page<HubSpotFormDefinition>;

export interface CollectionResponseFormDefinitionBaseForwardPaging {
  results: Array<HubSpotFormDefinition>;

  paging?: Shared.ForwardPaging;
}

export interface DatepickerField {
  dependentFields: Array<DependentField>;

  fieldType: 'datepicker';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface DependentField {
  dependentCondition: DependentFieldFilter;

  dependentField:
    | EmailField
    | PhoneField
    | MobilePhoneField
    | SingleLineTextField
    | MultiLineTextField
    | NumberField
    | SingleCheckboxField
    | MultipleCheckboxesField
    | DropdownField
    | RadioField
    | DatepickerField
    | FileField
    | PaymentLinkRadioField;
}

export interface DependentFieldFilter {
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

export interface DropdownField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'dropdown';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<EnumeratedFieldOption>;

  required: boolean;

  placeholder?: string;
}

export interface EmailField {
  dependentFields: Array<DependentField>;

  fieldType: 'email';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: EmailFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface EmailFieldValidation {
  blockedEmailDomains: Array<string>;

  useDefaultBlockList: boolean;
}

export interface EnumeratedFieldOption {
  displayOrder: number;

  label: string;

  value: string;
}

export interface FieldGroup {
  fields: Array<
    | EmailField
    | PhoneField
    | MobilePhoneField
    | SingleLineTextField
    | MultiLineTextField
    | NumberField
    | SingleCheckboxField
    | MultipleCheckboxesField
    | DropdownField
    | RadioField
    | DatepickerField
    | FileField
    | PaymentLinkRadioField
  >;

  groupType: 'default_group' | 'progressive' | 'queued';

  richTextType: 'text' | 'image';

  richText?: string;
}

export interface FileField {
  allowMultipleFiles: boolean;

  dependentFields: Array<DependentField>;

  fieldType: 'file';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface HubSpotFormDefinition {
  id: string;

  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionCreateRequest {
  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface FormDisplayOptions {
  renderRawHtml: boolean;

  style: FormStyle;

  submitButtonText: string;

  theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

  cssClass?: string;
}

export interface FormPostSubmitAction {
  type: 'thank_you' | 'redirect_url';

  value: string;
}

export interface FormStyle {
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

export interface HubSpotFormConfiguration {
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

  postSubmitAction: FormPostSubmitAction;

  prePopulateKnownValues: boolean;

  recaptchaEnabled: boolean;

  lifecycleStages?: Array<LifecycleStage>;
}

export interface HubSpotFormDefinition {
  id: string;

  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionCreateRequest {
  archived: boolean;

  configuration: HubSpotFormConfiguration;

  createdAt: string;

  displayOptions: FormDisplayOptions;

  fieldGroups: Array<FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export interface HubSpotFormDefinitionPatchRequest {
  archived?: boolean;

  configuration?: HubSpotFormConfiguration;

  displayOptions?: FormDisplayOptions;

  fieldGroups?: Array<FieldGroup>;

  legalConsentOptions?:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name?: string;
}

export interface LegalConsentCheckbox {
  label: string;

  required: boolean;

  subscriptionTypeId: number;
}

export interface LegalConsentOptionsExplicitConsentToProcess {
  communicationsCheckboxes: Array<LegalConsentCheckbox>;

  privacyText: string;

  type: 'explicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessCheckboxLabel?: string;

  consentToProcessFooterText?: string;

  consentToProcessText?: string;
}

export interface LegalConsentOptionsImplicitConsentToProcess {
  communicationsCheckboxes: Array<LegalConsentCheckbox>;

  privacyText: string;

  type: 'implicit_consent_to_process';

  communicationConsentText?: string;

  consentToProcessText?: string;
}

export interface LegalConsentOptionsLegitimateInterest {
  lawfulBasis: 'lead' | 'client' | 'other';

  privacyText: string;

  subscriptionTypeIds: Array<number>;

  type: 'legitimate_interest';
}

export interface LegalConsentOptionsNone {
  type: 'none';
}

export interface LifecycleStage {
  objectTypeId: string;

  value: string;
}

export interface MobilePhoneField {
  dependentFields: Array<DependentField>;

  fieldType: 'mobile_phone';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: PhoneFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface MultiLineTextField {
  dependentFields: Array<DependentField>;

  fieldType: 'multi_line_text';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;
}

export interface MultipleCheckboxesField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'multiple_checkboxes';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<EnumeratedFieldOption>;

  required: boolean;
}

export interface NumberField {
  dependentFields: Array<DependentField>;

  fieldType: 'number';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;

  placeholder?: string;

  validation?: NumberFieldValidation;
}

export interface NumberFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

export interface PaymentLinkRadioField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'payment_link_radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<EnumeratedFieldOption>;

  required: boolean;
}

export interface PhoneField {
  dependentFields: Array<DependentField>;

  fieldType: 'phone';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  useCountryCodeSelect: boolean;

  validation: PhoneFieldValidation;

  defaultValue?: string;

  placeholder?: string;
}

export interface PhoneFieldValidation {
  maxAllowedDigits: number;

  minAllowedDigits: number;
}

export interface RadioField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<EnumeratedFieldOption>;

  required: boolean;

  placeholder?: string;
}

export interface SingleCheckboxField {
  dependentFields: Array<DependentField>;

  fieldType: 'single_checkbox';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  defaultValue?: string;
}

export interface SingleLineTextField {
  dependentFields: Array<DependentField>;

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

  configuration?: HubSpotFormConfiguration;

  displayOptions?: FormDisplayOptions;

  fieldGroups?: Array<FieldGroup>;

  legalConsentOptions?:
    | LegalConsentOptionsNone
    | LegalConsentOptionsLegitimateInterest
    | LegalConsentOptionsExplicitConsentToProcess
    | LegalConsentOptionsImplicitConsentToProcess;

  name?: string;
}

export interface FormListParams extends PageParams {
  archived?: boolean;

  formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>;
}

export interface FormReadParams {
  archived?: boolean;
}

export interface FormReplaceParams {}

export declare namespace Forms {
  export {
    type CollectionResponseFormDefinitionBaseForwardPaging as CollectionResponseFormDefinitionBaseForwardPaging,
    type DatepickerField as DatepickerField,
    type DependentField as DependentField,
    type DependentFieldFilter as DependentFieldFilter,
    type DropdownField as DropdownField,
    type EmailField as EmailField,
    type EmailFieldValidation as EmailFieldValidation,
    type EnumeratedFieldOption as EnumeratedFieldOption,
    type FieldGroup as FieldGroup,
    type FileField as FileField,
    type FormDefinitionBase as FormDefinitionBase,
    type FormDefinitionCreateRequestBase as FormDefinitionCreateRequestBase,
    type FormDisplayOptions as FormDisplayOptions,
    type FormPostSubmitAction as FormPostSubmitAction,
    type FormStyle as FormStyle,
    type HubSpotFormConfiguration as HubSpotFormConfiguration,
    type HubSpotFormDefinition as HubSpotFormDefinition,
    type HubSpotFormDefinitionCreateRequest as HubSpotFormDefinitionCreateRequest,
    type HubSpotFormDefinitionPatchRequest as HubSpotFormDefinitionPatchRequest,
    type LegalConsentCheckbox as LegalConsentCheckbox,
    type LegalConsentOptionsExplicitConsentToProcess as LegalConsentOptionsExplicitConsentToProcess,
    type LegalConsentOptionsImplicitConsentToProcess as LegalConsentOptionsImplicitConsentToProcess,
    type LegalConsentOptionsLegitimateInterest as LegalConsentOptionsLegitimateInterest,
    type LegalConsentOptionsNone as LegalConsentOptionsNone,
    type LifecycleStage as LifecycleStage,
    type MobilePhoneField as MobilePhoneField,
    type MultiLineTextField as MultiLineTextField,
    type MultipleCheckboxesField as MultipleCheckboxesField,
    type NumberField as NumberField,
    type NumberFieldValidation as NumberFieldValidation,
    type PaymentLinkRadioField as PaymentLinkRadioField,
    type PhoneField as PhoneField,
    type PhoneFieldValidation as PhoneFieldValidation,
    type RadioField as RadioField,
    type SingleCheckboxField as SingleCheckboxField,
    type SingleLineTextField as SingleLineTextField,
    type HubSpotFormDefinitionsPage as HubSpotFormDefinitionsPage,
    type FormCreateParams as FormCreateParams,
    type FormUpdateParams as FormUpdateParams,
    type FormListParams as FormListParams,
    type FormReadParams as FormReadParams,
    type FormReplaceParams as FormReplaceParams,
  };
}
