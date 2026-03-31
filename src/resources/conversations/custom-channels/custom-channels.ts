// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ChannelAccountsAPI from './channel-accounts';
import {
  ChannelAccountCreateParams,
  ChannelAccountListParams,
  ChannelAccountUpdateParams,
  ChannelAccountUpdateStagingTokenParams,
  ChannelAccounts,
} from './channel-accounts';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageGetParams, MessageUpdateParams, Messages } from './messages';
import { APIPromise } from '../../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CustomChannels extends APIResource {
  channelAccounts: ChannelAccountsAPI.ChannelAccounts = new ChannelAccountsAPI.ChannelAccounts(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  create(
    body: CustomChannelCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.post('/conversations/custom-channels/2026-03', { body, ...options });
  }

  /**
   * Update the capabilities for an existing. You can also use it to update the
   * channel's webhookUri and its channelAccountConnectionRedirectUrl.
   */
  update(
    channelID: number,
    body: CustomChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelIntegrationChannel> {
    return this._client.patch(path`/conversations/custom-channels/2026-03/${channelID}`, {
      body,
      ...options,
    });
  }

  list(
    query: CustomChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PublicChannelIntegrationChannelsPage, PublicChannelIntegrationChannel> {
    return this._client.getAPIList(
      '/conversations/custom-channels/2026-03',
      Page<PublicChannelIntegrationChannel>,
      { query, ...options },
    );
  }

  /**
   * Archive an existing registered custom channel
   */
  delete(channelID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/conversations/custom-channels/2026-03/${channelID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details for a specific channel account. This contains all the
   * metadata about your channel account, including its channel, associated inbox id,
   * and delivery identifier information.
   */
  get(
    channelAccountID: number,
    params: CustomChannelGetParams,
    options?: RequestOptions,
  ): APIPromise<PublicChannelAccount> {
    const { channelId, ...query } = params;
    return this._client.get(
      path`/conversations/custom-channels/2026-03/${channelId}/channel-accounts/${channelAccountID}`,
      { query, ...options },
    );
  }
}

export type PublicChannelIntegrationChannelsPage = Page<PublicChannelIntegrationChannel>;

export type PublicChannelAccountsPage = Page<PublicChannelAccount>;

export interface ChannelIntegrationMessageEgg {
  attachments: Array<
    | FileAttachment
    | LocationAttachment
    | ContactAttachment
    | UnsupportedContentAttachment
    | MessageHeaderAttachment
    | QuickRepliesAttachment
    | SocialMetadataIntegrationAttachment
  >;

  channelAccountId: string;

  messageDirection: 'INCOMING' | 'OUTGOING';

  recipients: Array<ChannelIntegrationParticipant>;

  senders: Array<ChannelIntegrationParticipant>;

  text: string;

  timestamp: string;

  associateWithContactId?: number;

  inReplyToId?: string;

  integrationIdempotencyId?: string;

  integrationThreadId?: string;

  preResolvedContacts?: PreResolvedContacts;

  richText?: string;
}

export interface ChannelIntegrationParticipant {
  deliveryIdentifier: PublicDeliveryIdentifier;

  name?: string;

  senderActorId?: string;
}

export interface CollectionResponseWithTotalPublicChannelAccount {
  results: Array<PublicChannelAccount>;

  total: number;

  paging?: Shared.Paging;
}

export interface CollectionResponseWithTotalPublicChannelIntegrationChannel {
  results: Array<PublicChannelIntegrationChannel>;

  total: number;

  paging?: Shared.Paging;
}

export interface ContactAddress {
  city?: string;

  country?: string;

  countryCode?: string;

  state?: string;

  street?: string;

  type?: 'HOME' | 'WORK';

  zip?: string;
}

export interface ContactAttachment {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface ContactEmail {
  email: string;

  type?: 'HOME' | 'WORK';
}

export interface ContactName {
  firstName?: string;

  lastName?: string;

  middleName?: string;

  prefix?: string;

  suffix?: string;
}

export interface ContactOrg {
  company?: string;

  department?: string;

  title?: string;
}

export interface ContactPhone {
  phone: string;

  type?: 'CELL' | 'HOME' | 'MAIN' | 'WORK';
}

export interface ContactProfile {
  addresses: Array<ContactAddress>;

  emails: Array<ContactEmail>;

  phones: Array<ContactPhone>;

  urls: Array<ContactURL>;

  name?: ContactName;

  org?: ContactOrg;
}

export interface ContactURL {
  url: string;

  type?: 'HOME' | 'WORK';
}

export interface FileAttachment {
  fileId: string;

  type: 'FILE';

  fileUsageType?: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING';
}

export interface LocationAttachment {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface MessageHeaderAttachment {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PreResolvedContact {
  contactPropertiesLeadingToMatch: Array<
    | 'address'
    | 'annualrevenue'
    | 'associatedcompanyid'
    | 'associatedcompanylastupdated'
    | 'city'
    | 'closedate'
    | 'company'
    | 'company_size'
    | 'country'
    | 'createdate'
    | 'currentlyinworkflow'
    | 'date_of_birth'
    | 'days_to_close'
    | 'degree'
    | 'email'
    | 'engagements_last_meeting_booked'
    | 'engagements_last_meeting_booked_campaign'
    | 'engagements_last_meeting_booked_medium'
    | 'engagements_last_meeting_booked_source'
    | 'fax'
    | 'field_of_study'
    | 'first_conversion_date'
    | 'first_conversion_event_name'
    | 'first_deal_created_date'
    | 'firstname'
    | 'followercount'
    | 'gender'
    | 'graduation_date'
    | 'hs_additional_emails'
    | 'hs_all_contact_vids'
    | 'hs_analytics_average_page_views'
    | 'hs_analytics_first_referrer'
    | 'hs_analytics_first_timestamp'
    | 'hs_analytics_first_touch_converting_campaign'
    | 'hs_analytics_first_url'
    | 'hs_analytics_first_visit_timestamp'
    | 'hs_analytics_last_referrer'
    | 'hs_analytics_last_timestamp'
    | 'hs_analytics_last_touch_converting_campaign'
    | 'hs_analytics_last_url'
    | 'hs_analytics_last_visit_timestamp'
    | 'hs_analytics_num_event_completions'
    | 'hs_analytics_num_page_views'
    | 'hs_analytics_num_visits'
    | 'hs_analytics_revenue'
    | 'hs_analytics_source'
    | 'hs_analytics_source_composite_data'
    | 'hs_analytics_source_data_1'
    | 'hs_analytics_source_data_2'
    | 'hs_associated_target_accounts'
    | 'hs_avatar_filemanager_key'
    | 'hs_bing_ad_clicked'
    | 'hs_bing_click_id'
    | 'hs_buying_role'
    | 'hs_calculated_form_submissions'
    | 'hs_calculated_merged_vids'
    | 'hs_calculated_mobile_number'
    | 'hs_calculated_phone_number'
    | 'hs_calculated_phone_number_area_code'
    | 'hs_calculated_phone_number_country_code'
    | 'hs_calculated_phone_number_region_code'
    | 'hs_chat_assistant_iql_date'
    | 'hs_chat_assistant_source'
    | 'hs_chat_assistant_summary'
    | 'hs_clicked_linkedin_ad'
    | 'hs_contact_creation_legal_basis_source_instance_id'
    | 'hs_contact_enrichment_opt_out'
    | 'hs_contact_enrichment_opt_out_timestamp'
    | 'hs_content_membership_email'
    | 'hs_content_membership_email_confirmed'
    | 'hs_content_membership_follow_up_enqueued_at'
    | 'hs_content_membership_notes'
    | 'hs_content_membership_registered_at'
    | 'hs_content_membership_registration_domain_sent_to'
    | 'hs_content_membership_registration_email_sent_at'
    | 'hs_content_membership_status'
    | 'hs_conversations_visitor_email'
    | 'hs_count_is_unworked'
    | 'hs_count_is_worked'
    | 'hs_country_region_code'
    | 'hs_created_by_conversations'
    | 'hs_cross_account_note'
    | 'hs_cross_sell_opportunity'
    | 'hs_current_customer'
    | 'hs_currently_enrolled_in_prospecting_agent'
    | 'hs_customer_agent_lead_status'
    | 'hs_data_privacy_ads_consent'
    | 'hs_date_entered_customer'
    | 'hs_date_entered_evangelist'
    | 'hs_date_entered_lead'
    | 'hs_date_entered_marketingqualifiedlead'
    | 'hs_date_entered_opportunity'
    | 'hs_date_entered_other'
    | 'hs_date_entered_salesqualifiedlead'
    | 'hs_date_entered_subscriber'
    | 'hs_date_exited_customer'
    | 'hs_date_exited_evangelist'
    | 'hs_date_exited_lead'
    | 'hs_date_exited_marketingqualifiedlead'
    | 'hs_date_exited_opportunity'
    | 'hs_date_exited_other'
    | 'hs_date_exited_salesqualifiedlead'
    | 'hs_date_exited_subscriber'
    | 'hs_document_last_revisited'
    | 'hs_email_bad_address'
    | 'hs_email_bounce'
    | 'hs_email_click'
    | 'hs_email_customer_quarantined_reason'
    | 'hs_email_delivered'
    | 'hs_email_domain'
    | 'hs_email_first_click_date'
    | 'hs_email_first_open_date'
    | 'hs_email_first_reply_date'
    | 'hs_email_first_send_date'
    | 'hs_email_hard_bounce_reason'
    | 'hs_email_hard_bounce_reason_enum'
    | 'hs_email_is_ineligible'
    | 'hs_email_last_click_date'
    | 'hs_email_last_email_name'
    | 'hs_email_last_open_date'
    | 'hs_email_last_reply_date'
    | 'hs_email_last_send_date'
    | 'hs_email_live_sourcing_restricted'
    | 'hs_email_open'
    | 'hs_email_optimal_send_day_of_week'
    | 'hs_email_optimal_send_time_of_day'
    | 'hs_email_optout'
    | 'hs_email_optout_survey_reason'
    | 'hs_email_quarantined'
    | 'hs_email_quarantined_reason'
    | 'hs_email_recipient_fatigue_recovery_time'
    | 'hs_email_replied'
    | 'hs_email_sends_since_last_engagement'
    | 'hs_email_type'
    | 'hs_emailconfirmationstatus'
    | 'hs_employment_change_detected_date'
    | 'hs_enriched_email_bounce_detected'
    | 'hs_facebook_ad_clicked'
    | 'hs_facebook_click_id'
    | 'hs_facebookid'
    | 'hs_feedback_last_ces_survey_date'
    | 'hs_feedback_last_ces_survey_follow_up'
    | 'hs_feedback_last_ces_survey_rating'
    | 'hs_feedback_last_csat_survey_date'
    | 'hs_feedback_last_csat_survey_follow_up'
    | 'hs_feedback_last_csat_survey_rating'
    | 'hs_feedback_last_nps_follow_up'
    | 'hs_feedback_last_nps_rating'
    | 'hs_feedback_last_nps_rating_number'
    | 'hs_feedback_last_survey_date'
    | 'hs_feedback_show_nps_web_survey'
    | 'hs_first_closed_order_id'
    | 'hs_first_engagement_object_id'
    | 'hs_first_order_closed_date'
    | 'hs_first_outreach_date'
    | 'hs_first_subscription_create_date'
    | 'hs_full_name_or_email'
    | 'hs_google_click_id'
    | 'hs_googleplusid'
    | 'hs_gps_coordinates'
    | 'hs_gps_error'
    | 'hs_gps_latitude'
    | 'hs_gps_longitude'
    | 'hs_has_active_subscription'
    | 'hs_inferred_language_codes'
    | 'hs_intent_paid_up_to_date'
    | 'hs_intent_signals_enabled'
    | 'hs_ip_timezone'
    | 'hs_is_contact'
    | 'hs_is_enriched'
    | 'hs_is_merge_revertible'
    | 'hs_is_unworked'
    | 'hs_job_change_detected_date'
    | 'hs_journey_stage'
    | 'hs_language'
    | 'hs_last_metered_enrichment_timestamp'
    | 'hs_last_sales_activity_date'
    | 'hs_last_sales_activity_timestamp'
    | 'hs_last_sales_activity_type'
    | 'hs_last_sms_send_date'
    | 'hs_last_sms_send_name'
    | 'hs_latest_disqualified_lead_date'
    | 'hs_latest_meeting_activity'
    | 'hs_latest_open_lead_date'
    | 'hs_latest_qualified_lead_date'
    | 'hs_latest_sequence_ended_date'
    | 'hs_latest_sequence_enrolled'
    | 'hs_latest_sequence_enrolled_date'
    | 'hs_latest_sequence_finished_date'
    | 'hs_latest_sequence_unenrolled_date'
    | 'hs_latest_source'
    | 'hs_latest_source_composite_data'
    | 'hs_latest_source_data_1'
    | 'hs_latest_source_data_2'
    | 'hs_latest_source_timestamp'
    | 'hs_latest_subscription_create_date'
    | 'hs_latitude'
    | 'hs_lead_status'
    | 'hs_legal_basis'
    | 'hs_lifecyclestage_customer_date'
    | 'hs_lifecyclestage_evangelist_date'
    | 'hs_lifecyclestage_lead_date'
    | 'hs_lifecyclestage_marketingqualifiedlead_date'
    | 'hs_lifecyclestage_opportunity_date'
    | 'hs_lifecyclestage_other_date'
    | 'hs_lifecyclestage_salesqualifiedlead_date'
    | 'hs_lifecyclestage_subscriber_date'
    | 'hs_linkedin_ad_clicked'
    | 'hs_linkedin_click_id'
    | 'hs_linkedin_url'
    | 'hs_linkedinid'
    | 'hs_live_enrichment_deadline'
    | 'hs_longitude'
    | 'hs_manual_campaign_ids'
    | 'hs_marketable_reason_id'
    | 'hs_marketable_reason_type'
    | 'hs_marketable_status'
    | 'hs_marketable_until_renewal'
    | 'hs_membership_has_accessed_private_content'
    | 'hs_membership_last_private_content_access_date'
    | 'hs_messaging_engagement_score'
    | 'hs_mobile_sdk_push_tokens'
    | 'hs_notes_last_activity'
    | 'hs_notes_next_activity'
    | 'hs_notes_next_activity_type'
    | 'hs_persona'
    | 'hs_pinned_engagement_id'
    | 'hs_pipeline'
    | 'hs_predictivecontactscore'
    | 'hs_predictivecontactscore_tmp'
    | 'hs_predictivecontactscore_v2'
    | 'hs_predictivecontactscorebucket'
    | 'hs_predictivescoringtier'
    | 'hs_predictivescoringtier_tmp'
    | 'hs_prospecting_agent_actively_enrolled_count'
    | 'hs_prospecting_agent_last_enrolled'
    | 'hs_prospecting_agent_total_enrolled_count'
    | 'hs_quarantined_emails'
    | 'hs_recent_closed_order_date'
    | 'hs_registered_member'
    | 'hs_registration_method'
    | 'hs_returning_to_office_detected_date'
    | 'hs_role'
    | 'hs_sa_first_engagement_date'
    | 'hs_sa_first_engagement_descr'
    | 'hs_sa_first_engagement_object_type'
    | 'hs_sales_email_last_clicked'
    | 'hs_sales_email_last_opened'
    | 'hs_sales_email_last_replied'
    | 'hs_searchable_calculated_international_mobile_number'
    | 'hs_searchable_calculated_international_phone_number'
    | 'hs_searchable_calculated_mobile_number'
    | 'hs_searchable_calculated_phone_number'
    | 'hs_seniority'
    | 'hs_sequences_actively_enrolled_count'
    | 'hs_sequences_enrolled_count'
    | 'hs_sequences_is_enrolled'
    | 'hs_social_facebook_clicks'
    | 'hs_social_google_plus_clicks'
    | 'hs_social_last_engagement'
    | 'hs_social_linkedin_clicks'
    | 'hs_social_num_broadcast_clicks'
    | 'hs_social_twitter_clicks'
    | 'hs_source_object_id'
    | 'hs_source_portal_id'
    | 'hs_state_code'
    | 'hs_sub_role'
    | 'hs_testpurge'
    | 'hs_testrollback'
    | 'hs_tiktok_ad_clicked'
    | 'hs_tiktok_click_id'
    | 'hs_time_between_contact_creation_and_deal_close'
    | 'hs_time_between_contact_creation_and_deal_creation'
    | 'hs_time_in_customer'
    | 'hs_time_in_evangelist'
    | 'hs_time_in_lead'
    | 'hs_time_in_marketingqualifiedlead'
    | 'hs_time_in_opportunity'
    | 'hs_time_in_other'
    | 'hs_time_in_salesqualifiedlead'
    | 'hs_time_in_subscriber'
    | 'hs_time_to_first_engagement'
    | 'hs_time_to_move_from_lead_to_customer'
    | 'hs_time_to_move_from_marketingqualifiedlead_to_customer'
    | 'hs_time_to_move_from_opportunity_to_customer'
    | 'hs_time_to_move_from_salesqualifiedlead_to_customer'
    | 'hs_time_to_move_from_subscriber_to_customer'
    | 'hs_timezone'
    | 'hs_twitterid'
    | 'hs_v2_cumulative_time_in_customer'
    | 'hs_v2_cumulative_time_in_evangelist'
    | 'hs_v2_cumulative_time_in_lead'
    | 'hs_v2_cumulative_time_in_marketingqualifiedlead'
    | 'hs_v2_cumulative_time_in_opportunity'
    | 'hs_v2_cumulative_time_in_other'
    | 'hs_v2_cumulative_time_in_salesqualifiedlead'
    | 'hs_v2_cumulative_time_in_subscriber'
    | 'hs_v2_date_entered_current_stage'
    | 'hs_v2_date_entered_customer'
    | 'hs_v2_date_entered_evangelist'
    | 'hs_v2_date_entered_lead'
    | 'hs_v2_date_entered_marketingqualifiedlead'
    | 'hs_v2_date_entered_opportunity'
    | 'hs_v2_date_entered_other'
    | 'hs_v2_date_entered_salesqualifiedlead'
    | 'hs_v2_date_entered_subscriber'
    | 'hs_v2_date_exited_customer'
    | 'hs_v2_date_exited_evangelist'
    | 'hs_v2_date_exited_lead'
    | 'hs_v2_date_exited_marketingqualifiedlead'
    | 'hs_v2_date_exited_opportunity'
    | 'hs_v2_date_exited_other'
    | 'hs_v2_date_exited_salesqualifiedlead'
    | 'hs_v2_date_exited_subscriber'
    | 'hs_v2_latest_time_in_customer'
    | 'hs_v2_latest_time_in_evangelist'
    | 'hs_v2_latest_time_in_lead'
    | 'hs_v2_latest_time_in_marketingqualifiedlead'
    | 'hs_v2_latest_time_in_opportunity'
    | 'hs_v2_latest_time_in_other'
    | 'hs_v2_latest_time_in_salesqualifiedlead'
    | 'hs_v2_latest_time_in_subscriber'
    | 'hs_v2_time_in_current_stage'
    | 'hs_whatsapp_phone_number'
    | 'hubspot_owner_id'
    | 'hubspotscore'
    | 'industry'
    | 'ip_city'
    | 'ip_country'
    | 'ip_country_code'
    | 'ip_latlon'
    | 'ip_state'
    | 'ip_state_code'
    | 'ip_zipcode'
    | 'job_function'
    | 'jobtitle'
    | 'kloutscoregeneral'
    | 'lastmodifieddate'
    | 'lastname'
    | 'lifecyclestage'
    | 'linkedinbio'
    | 'linkedinconnections'
    | 'marital_status'
    | 'message'
    | 'military_status'
    | 'mobilephone'
    | 'notes_last_contacted'
    | 'notes_last_updated'
    | 'notes_next_activity_date'
    | 'num_associated_deals'
    | 'num_contacted_notes'
    | 'num_conversion_events'
    | 'num_notes'
    | 'num_unique_conversion_events'
    | 'numemployees'
    | 'owneremail'
    | 'ownername'
    | 'phone'
    | 'photo'
    | 'recent_conversion_date'
    | 'recent_conversion_event_name'
    | 'recent_deal_amount'
    | 'recent_deal_close_date'
    | 'relationship_status'
    | 'salutation'
    | 'school'
    | 'seniority'
    | 'start_date'
    | 'state'
    | 'surveymonkeyeventlastupdated'
    | 'total_revenue'
    | 'twitterbio'
    | 'twitterhandle'
    | 'twitterprofilephoto'
    | 'webinareventlastupdated'
    | 'website'
    | 'work_email'
    | 'zip'
  >;

  contactVid: number;
}

export interface PreResolvedContacts {
  contacts: Array<PreResolvedContact>;
}

export interface PublicChannelAccount {
  id: string;

  active: boolean;

  archived: boolean;

  authorized: boolean;

  channelId: string;

  createdAt: string;

  inboxId: string;

  name: string;

  archivedAt?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountEgg {
  authorized: boolean;

  inboxId: string;

  name: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingToken {
  accountToken: string;

  createdAt: string;

  genericChannelId: number;

  inboxId: number;

  userId: number;

  accountName?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountStagingTokenUpdateRequest {
  accountName?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;
}

export interface PublicChannelAccountUpdateRequest {
  authorized?: boolean;

  name?: string;
}

export interface PublicChannelIntegrationChannel {
  id: string;

  capabilities: { [key: string]: unknown };

  createdAt: string;

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelCreate {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface PublicChannelIntegrationChannelPatch {
  capabilities: { [key: string]: unknown };

  channelAccountConnectionRedirectUrl: unknown;

  channelDescription: unknown;

  channelLogoUrl: unknown;

  name: unknown;

  webhookUrl: unknown;
}

export interface PublicChannelIntegrationMessageUpdateRequest {
  /**
   * Valid status are SENT, FAILED, and READ
   */
  statusType: 'FAILED' | 'READ' | 'SENT';

  errorMessage?: string;
}

export interface PublicClient {
  clientType: 'HUBSPOT' | 'INTEGRATION' | 'SYSTEM' | 'UNKNOWN';

  integrationAppId?: number;
}

export interface PublicContact {
  contactProfile: ContactProfile;

  type: 'CONTACT';
}

export interface PublicConversationsMessage {
  id: string;

  archived: boolean;

  attachments: Array<
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  >;

  channelAccountId: string;

  channelId: string;

  client: PublicClient;

  conversationsThreadId: string;

  createdAt: string;

  createdBy: string;

  direction: 'INCOMING' | 'OUTGOING';

  recipients: Array<PublicRecipient>;

  senders: Array<PublicSender>;

  text: string;

  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY';

  type: 'MESSAGE';

  inReplyToId?: string;

  richText?: string;

  status?: PublicMessageStatus;

  subject?: string;

  updatedAt?: string;
}

export interface PublicDeliveryIdentifier {
  type: 'CHANNEL_SPECIFIC_OPAQUE_ID' | 'HS_EMAIL_ADDRESS' | 'HS_PHONE_NUMBER' | 'HS_SHORT_CODE';

  value: string;
}

export interface PublicFile {
  fileId: string;

  fileUsageType: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING';

  type: 'FILE';

  name?: string;

  url?: string;
}

export interface PublicLocation {
  latitude: number;

  longitude: number;

  type: 'LOCATION';

  address?: string;

  name?: string;

  url?: string;
}

export interface PublicMessageFailureDetails {
  errorMessageTokens: { [key: string]: string };

  errorMessage?: string;
}

export interface PublicMessageHeader {
  type: 'MESSAGE_HEADER';

  fileId?: number;

  text?: string;
}

export interface PublicMessageStatus {
  statusType: 'FAILED' | 'READ' | 'RECEIVED' | 'SENT';

  failureDetails?: PublicMessageFailureDetails;
}

export interface PublicQuickReplies {
  allowMultiSelect: boolean;

  allowUserInput: boolean;

  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface PublicRecipient {
  deliveryIdentifier: PublicDeliveryIdentifier;

  actorId?: string;

  name?: string;

  recipientField?: string;
}

export interface PublicSender {
  actorId?: string;

  deliveryIdentifier?: PublicDeliveryIdentifier;

  name?: string;

  senderField?: string;
}

export interface PublicSocialMetadataAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface PublicUnsupportedContent {
  type: 'UNSUPPORTED_CONTENT';
}

export interface PublicWhatsAppTemplateMetadata {
  crmObjectIds: { [key: string]: number };

  parameters: { [key: string]: string };

  type: 'WHATSAPP_TEMPLATE_METADATA';

  contentId?: number;

  mappedTemplateId?: number;

  rootMicId?: number;
}

export interface QuickRepliesAttachment {
  quickReplies: Array<QuickReply>;

  type: 'QUICK_REPLIES';
}

export interface QuickReply {
  value: string;

  valueType: 'TEXT' | 'URL';

  label?: string;
}

export interface SocialMetadata {
  mediaType:
    | 'ARTICLE'
    | 'AUDIO'
    | 'CAROUSEL'
    | 'DOCUMENT'
    | 'GIF'
    | 'LINK'
    | 'NONE'
    | 'PHOTO'
    | 'POLL'
    | 'STORY'
    | 'VIDEO';

  id?: string;

  description?: string;

  mediaTitle?: string;

  mediaUrl?: string;

  mediaUrlString?: string;

  thumbnailUrl?: string;
}

export interface SocialMetadataIntegrationAttachment {
  socialMetadata: SocialMetadata;

  type: 'SOCIAL_MEDIA_METADATA';
}

export interface UnsupportedContentAttachment {
  type: 'UNSUPPORTED_CONTENT';
}

export interface CustomChannelCreateParams {
  capabilities: { [key: string]: unknown };

  name: string;

  channelAccountConnectionRedirectUrl?: string;

  channelDescription?: string;

  channelLogoUrl?: string;

  webhookUrl?: string;
}

export interface CustomChannelUpdateParams {
  capabilities: { [key: string]: unknown };

  channelAccountConnectionRedirectUrl: unknown;

  channelDescription: unknown;

  channelLogoUrl: unknown;

  name: unknown;

  webhookUrl: unknown;
}

export interface CustomChannelListParams extends PageParams {
  defaultPageLength?: number;

  sort?: Array<string>;
}

export interface CustomChannelGetParams {
  /**
   * Path param
   */
  channelId: number;

  /**
   * Query param: Whether to return only results that have been archived.
   */
  archived?: boolean;
}

CustomChannels.ChannelAccounts = ChannelAccounts;
CustomChannels.Messages = Messages;

export declare namespace CustomChannels {
  export {
    type ChannelIntegrationMessageEgg as ChannelIntegrationMessageEgg,
    type ChannelIntegrationParticipant as ChannelIntegrationParticipant,
    type CollectionResponseWithTotalPublicChannelAccount as CollectionResponseWithTotalPublicChannelAccount,
    type CollectionResponseWithTotalPublicChannelIntegrationChannel as CollectionResponseWithTotalPublicChannelIntegrationChannel,
    type ContactAddress as ContactAddress,
    type ContactAttachment as ContactAttachment,
    type ContactEmail as ContactEmail,
    type ContactName as ContactName,
    type ContactOrg as ContactOrg,
    type ContactPhone as ContactPhone,
    type ContactProfile as ContactProfile,
    type ContactURL as ContactURL,
    type FileAttachment as FileAttachment,
    type LocationAttachment as LocationAttachment,
    type MessageHeaderAttachment as MessageHeaderAttachment,
    type PreResolvedContact as PreResolvedContact,
    type PreResolvedContacts as PreResolvedContacts,
    type PublicChannelAccount as PublicChannelAccount,
    type PublicChannelAccountEgg as PublicChannelAccountEgg,
    type PublicChannelAccountStagingToken as PublicChannelAccountStagingToken,
    type PublicChannelAccountStagingTokenUpdateRequest as PublicChannelAccountStagingTokenUpdateRequest,
    type PublicChannelAccountUpdateRequest as PublicChannelAccountUpdateRequest,
    type PublicChannelIntegrationChannel as PublicChannelIntegrationChannel,
    type PublicChannelIntegrationChannelCreate as PublicChannelIntegrationChannelCreate,
    type PublicChannelIntegrationChannelPatch as PublicChannelIntegrationChannelPatch,
    type PublicChannelIntegrationMessageUpdateRequest as PublicChannelIntegrationMessageUpdateRequest,
    type PublicClient as PublicClient,
    type PublicContact as PublicContact,
    type PublicConversationsMessage as PublicConversationsMessage,
    type PublicDeliveryIdentifier as PublicDeliveryIdentifier,
    type PublicFile as PublicFile,
    type PublicLocation as PublicLocation,
    type PublicMessageFailureDetails as PublicMessageFailureDetails,
    type PublicMessageHeader as PublicMessageHeader,
    type PublicMessageStatus as PublicMessageStatus,
    type PublicQuickReplies as PublicQuickReplies,
    type PublicRecipient as PublicRecipient,
    type PublicSender as PublicSender,
    type PublicSocialMetadataAttachment as PublicSocialMetadataAttachment,
    type PublicUnsupportedContent as PublicUnsupportedContent,
    type PublicWhatsAppTemplateMetadata as PublicWhatsAppTemplateMetadata,
    type QuickRepliesAttachment as QuickRepliesAttachment,
    type QuickReply as QuickReply,
    type SocialMetadata as SocialMetadata,
    type SocialMetadataIntegrationAttachment as SocialMetadataIntegrationAttachment,
    type UnsupportedContentAttachment as UnsupportedContentAttachment,
    type PublicChannelIntegrationChannelsPage as PublicChannelIntegrationChannelsPage,
    type CustomChannelCreateParams as CustomChannelCreateParams,
    type CustomChannelUpdateParams as CustomChannelUpdateParams,
    type CustomChannelListParams as CustomChannelListParams,
    type CustomChannelGetParams as CustomChannelGetParams,
  };

  export {
    ChannelAccounts as ChannelAccounts,
    type ChannelAccountCreateParams as ChannelAccountCreateParams,
    type ChannelAccountUpdateParams as ChannelAccountUpdateParams,
    type ChannelAccountListParams as ChannelAccountListParams,
    type ChannelAccountUpdateStagingTokenParams as ChannelAccountUpdateStagingTokenParams,
  };

  export {
    Messages as Messages,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageGetParams as MessageGetParams,
  };
}
