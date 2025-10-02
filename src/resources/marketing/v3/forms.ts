// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FormsAPI from './forms';
import * as ActivityAPI from '../../account-info/v3/activity';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Forms extends APIResource {
  /**
   * Create a form
   */
  create(body: FormCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/marketing/v3/forms/', { body, ...options });
  }

  /**
   * Get a form definition
   */
  retrieve(
    formID: string,
    query: FormRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/marketing/v3/forms/${formID}`, { query, ...options });
  }

  /**
   * Update a form definition
   */
  update(formID: string, body: FormUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }

  /**
   * Get a list of forms
   */
  list(
    query: FormListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FormListResponse> {
    return this._client.get('/marketing/v3/forms/', { query, ...options });
  }

  /**
   * Archive a form definition
   */
  archive(formID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/marketing/v3/forms/${formID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Partially update a form definition
   */
  partialUpdate(
    formID: string,
    body: FormPartialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.patch(path`/marketing/v3/forms/${formID}`, { body, ...options });
  }
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
  dependentCondition: DependentField.DependentCondition;

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

export namespace DependentField {
  export interface DependentCondition {
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
}

export interface DropdownField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'dropdown';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<DropdownField.Option>;

  required: boolean;

  placeholder?: string;
}

export namespace DropdownField {
  export interface Option {
    displayOrder: number;

    label: string;

    value: string;
  }
}

export interface EmailField {
  dependentFields: Array<DependentField>;

  fieldType: 'email';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: EmailField.Validation;

  defaultValue?: string;

  placeholder?: string;
}

export namespace EmailField {
  export interface Validation {
    blockedEmailDomains: Array<string>;

    useDefaultBlockList: boolean;
  }
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

export type HubspotFormDefinition = unknown;

export type HubspotFormDefinitionCreate = unknown;

export interface HubspotFormDefinition extends HubspotFormDefinition {
  id: string;

  archived: boolean;

  configuration: HubspotFormDefinition.Configuration;

  createdAt: string;

  displayOptions: HubspotFormDefinition.DisplayOptions;

  fieldGroups: Array<HubspotFormDefinition.FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | HubspotFormDefinition.MarketingFormsLegalConsentOptionsNone
    | HubspotFormDefinition.MarketingFormsLegalConsentOptionsLegitimateInterest
    | HubspotFormDefinition.MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | HubspotFormDefinition.MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export namespace HubspotFormDefinition {
  export interface Configuration {
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

    postSubmitAction: Configuration.PostSubmitAction;

    prePopulateKnownValues: boolean;

    recaptchaEnabled: boolean;

    lifecycleStages?: Array<Configuration.LifecycleStage>;
  }

  export namespace Configuration {
    export interface PostSubmitAction {
      type: 'thank_you' | 'redirect_url';

      value: string;
    }

    export interface LifecycleStage {
      objectTypeId: string;

      value: string;
    }
  }

  export interface DisplayOptions {
    renderRawHtml: boolean;

    style: DisplayOptions.Style;

    submitButtonText: string;

    theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

    cssClass?: string;
  }

  export namespace DisplayOptions {
    export interface Style {
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
  }

  export interface FieldGroup {
    fields: Array<
      | FormsAPI.EmailField
      | FormsAPI.PhoneField
      | FormsAPI.MobilePhoneField
      | FormsAPI.SingleLineTextField
      | FormsAPI.MultiLineTextField
      | FormsAPI.NumberField
      | FormsAPI.SingleCheckboxField
      | FormsAPI.MultipleCheckboxesField
      | FormsAPI.DropdownField
      | FormsAPI.RadioField
      | FormsAPI.DatepickerField
      | FormsAPI.FileField
      | FormsAPI.PaymentLinkRadioField
    >;

    groupType: 'default_group' | 'progressive' | 'queued';

    richTextType: 'text' | 'image';

    richText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsNone {
    type: 'none';
  }

  export interface MarketingFormsLegalConsentOptionsLegitimateInterest {
    lawfulBasis: 'lead' | 'client' | 'other';

    privacyText: string;

    subscriptionTypeIds: Array<number>;

    type: 'legitimate_interest';
  }

  export interface MarketingFormsLegalConsentOptionsExplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'explicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessCheckboxLabel?: string;

    consentToProcessFooterText?: string;

    consentToProcessText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsImplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'implicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessText?: string;
  }
}

export interface HubspotFormDefinitionCreate extends HubspotFormDefinitionCreate {
  archived: boolean;

  configuration: HubspotFormDefinitionCreate.Configuration;

  createdAt: string;

  displayOptions: HubspotFormDefinitionCreate.DisplayOptions;

  fieldGroups: Array<HubspotFormDefinitionCreate.FieldGroup>;

  formType: 'hubspot';

  legalConsentOptions:
    | HubspotFormDefinitionCreate.MarketingFormsLegalConsentOptionsNone
    | HubspotFormDefinitionCreate.MarketingFormsLegalConsentOptionsLegitimateInterest
    | HubspotFormDefinitionCreate.MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | HubspotFormDefinitionCreate.MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name: string;

  updatedAt: string;

  archivedAt?: string;
}

export namespace HubspotFormDefinitionCreate {
  export interface Configuration {
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

    postSubmitAction: Configuration.PostSubmitAction;

    prePopulateKnownValues: boolean;

    recaptchaEnabled: boolean;

    lifecycleStages?: Array<Configuration.LifecycleStage>;
  }

  export namespace Configuration {
    export interface PostSubmitAction {
      type: 'thank_you' | 'redirect_url';

      value: string;
    }

    export interface LifecycleStage {
      objectTypeId: string;

      value: string;
    }
  }

  export interface DisplayOptions {
    renderRawHtml: boolean;

    style: DisplayOptions.Style;

    submitButtonText: string;

    theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

    cssClass?: string;
  }

  export namespace DisplayOptions {
    export interface Style {
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
  }

  export interface FieldGroup {
    fields: Array<
      | FormsAPI.EmailField
      | FormsAPI.PhoneField
      | FormsAPI.MobilePhoneField
      | FormsAPI.SingleLineTextField
      | FormsAPI.MultiLineTextField
      | FormsAPI.NumberField
      | FormsAPI.SingleCheckboxField
      | FormsAPI.MultipleCheckboxesField
      | FormsAPI.DropdownField
      | FormsAPI.RadioField
      | FormsAPI.DatepickerField
      | FormsAPI.FileField
      | FormsAPI.PaymentLinkRadioField
    >;

    groupType: 'default_group' | 'progressive' | 'queued';

    richTextType: 'text' | 'image';

    richText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsNone {
    type: 'none';
  }

  export interface MarketingFormsLegalConsentOptionsLegitimateInterest {
    lawfulBasis: 'lead' | 'client' | 'other';

    privacyText: string;

    subscriptionTypeIds: Array<number>;

    type: 'legitimate_interest';
  }

  export interface MarketingFormsLegalConsentOptionsExplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'explicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessCheckboxLabel?: string;

    consentToProcessFooterText?: string;

    consentToProcessText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsImplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'implicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessText?: string;
  }
}

export interface LegalConsentCheckbox {
  label: string;

  required: boolean;

  subscriptionTypeId: number;
}

export interface MobilePhoneField {
  dependentFields: Array<DependentField>;

  fieldType: 'mobile_phone';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  required: boolean;

  validation: MobilePhoneField.Validation;

  defaultValue?: string;

  placeholder?: string;
}

export namespace MobilePhoneField {
  export interface Validation {
    maxAllowedDigits: number;

    minAllowedDigits: number;
  }
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

  options: Array<MultipleCheckboxesField.Option>;

  required: boolean;
}

export namespace MultipleCheckboxesField {
  export interface Option {
    displayOrder: number;

    label: string;

    value: string;
  }
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

  validation?: NumberField.Validation;
}

export namespace NumberField {
  export interface Validation {
    maxAllowedDigits: number;

    minAllowedDigits: number;
  }
}

export interface PaymentLinkRadioField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'payment_link_radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<PaymentLinkRadioField.Option>;

  required: boolean;
}

export namespace PaymentLinkRadioField {
  export interface Option {
    displayOrder: number;

    label: string;

    value: string;
  }
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

  validation: PhoneField.Validation;

  defaultValue?: string;

  placeholder?: string;
}

export namespace PhoneField {
  export interface Validation {
    maxAllowedDigits: number;

    minAllowedDigits: number;
  }
}

export interface RadioField {
  defaultValues: Array<string>;

  dependentFields: Array<DependentField>;

  fieldType: 'radio';

  hidden: boolean;

  label: string;

  name: string;

  objectTypeId: string;

  options: Array<RadioField.Option>;

  required: boolean;

  placeholder?: string;
}

export namespace RadioField {
  export interface Option {
    displayOrder: number;

    label: string;

    value: string;
  }
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

export interface FormListResponse {
  results: Array<HubspotFormDefinition>;

  paging?: ActivityAPI.ForwardPaging;
}

export interface FormCreateParams {}

export interface FormRetrieveParams {
  archived?: boolean;
}

export interface FormUpdateParams {}

export interface FormListParams {
  after?: string;

  archived?: boolean;

  formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>;

  limit?: number;
}

export interface FormPartialUpdateParams {
  archived?: boolean;

  configuration?: FormPartialUpdateParams.Configuration;

  displayOptions?: FormPartialUpdateParams.DisplayOptions;

  fieldGroups?: Array<FormPartialUpdateParams.FieldGroup>;

  legalConsentOptions?:
    | FormPartialUpdateParams.MarketingFormsLegalConsentOptionsNone
    | FormPartialUpdateParams.MarketingFormsLegalConsentOptionsLegitimateInterest
    | FormPartialUpdateParams.MarketingFormsLegalConsentOptionsExplicitConsentToProcess
    | FormPartialUpdateParams.MarketingFormsLegalConsentOptionsImplicitConsentToProcess;

  name?: string;
}

export namespace FormPartialUpdateParams {
  export interface Configuration {
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

    postSubmitAction: Configuration.PostSubmitAction;

    prePopulateKnownValues: boolean;

    recaptchaEnabled: boolean;

    lifecycleStages?: Array<Configuration.LifecycleStage>;
  }

  export namespace Configuration {
    export interface PostSubmitAction {
      type: 'thank_you' | 'redirect_url';

      value: string;
    }

    export interface LifecycleStage {
      objectTypeId: string;

      value: string;
    }
  }

  export interface DisplayOptions {
    renderRawHtml: boolean;

    style: DisplayOptions.Style;

    submitButtonText: string;

    theme: 'default_style' | 'canvas' | 'linear' | 'round' | 'sharp' | 'legacy';

    cssClass?: string;
  }

  export namespace DisplayOptions {
    export interface Style {
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
  }

  export interface FieldGroup {
    fields: Array<
      | FormsAPI.EmailField
      | FormsAPI.PhoneField
      | FormsAPI.MobilePhoneField
      | FormsAPI.SingleLineTextField
      | FormsAPI.MultiLineTextField
      | FormsAPI.NumberField
      | FormsAPI.SingleCheckboxField
      | FormsAPI.MultipleCheckboxesField
      | FormsAPI.DropdownField
      | FormsAPI.RadioField
      | FormsAPI.DatepickerField
      | FormsAPI.FileField
      | FormsAPI.PaymentLinkRadioField
    >;

    groupType: 'default_group' | 'progressive' | 'queued';

    richTextType: 'text' | 'image';

    richText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsNone {
    type: 'none';
  }

  export interface MarketingFormsLegalConsentOptionsLegitimateInterest {
    lawfulBasis: 'lead' | 'client' | 'other';

    privacyText: string;

    subscriptionTypeIds: Array<number>;

    type: 'legitimate_interest';
  }

  export interface MarketingFormsLegalConsentOptionsExplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'explicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessCheckboxLabel?: string;

    consentToProcessFooterText?: string;

    consentToProcessText?: string;
  }

  export interface MarketingFormsLegalConsentOptionsImplicitConsentToProcess {
    communicationsCheckboxes: Array<FormsAPI.LegalConsentCheckbox>;

    privacyText: string;

    type: 'implicit_consent_to_process';

    communicationConsentText?: string;

    consentToProcessText?: string;
  }
}

export declare namespace Forms {
  export {
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
