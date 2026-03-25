// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsDevAPI from './cards-dev';
import {
  ActionConfirmationBody,
  ActionHookActionBody,
  CardActions,
  CardAuditResponse,
  CardCreateRequest,
  CardDisplayBody,
  CardDisplayProperty,
  CardFetchBody,
  CardFetchBodyPatch,
  CardMigrateViewsRequest,
  CardMigrateViewsResponse,
  CardObjectTypeBody,
  CardPatchRequest,
  CardsDev,
  CardsDevCreateParams,
  CardsDevDeleteParams,
  CardsDevGetByIDParams,
  CardsDevMigrateViewsParams,
  CardsDevUpdateParams,
  DisplayOption,
  IFrameActionBody,
  IntegratorCardPayloadResponse,
  IntegratorObjectResult,
  ObjectToken,
  PublicCardFetchBody,
  PublicCardListResponse,
  PublicCardResponse,
  TopLevelActions,
} from './cards-dev';
import * as VideoConferencingAPI from './video-conferencing';
import { ExternalSettings, VideoConferencing, VideoConferencingUpdateParams } from './video-conferencing';
import * as CallingAPI from './calling/calling';
import {
  Calling,
  CallingCreateParams,
  CallingMarkReadyParams,
  CallingUpdateParams,
  ChannelConnectionSettingsPatchRequest,
  ChannelConnectionSettingsRequest,
  ChannelConnectionSettingsResponse,
  CompanyCallerID,
  CompletedThirdPartyCallRequest,
  CompletedThirdPartyCallResponse,
  ContactCallerID,
  FormattedPhoneNumber,
  MarkRecordingAsReadyRequest,
  ObjectCoordinates,
  RecordingSettingsPatchRequest,
  RecordingSettingsRequest,
  RecordingSettingsResponse,
  SettingsPatchRequest,
  SettingsRequest,
  SettingsResponse,
} from './calling/calling';

export class Extensions extends APIResource {
  calling: CallingAPI.Calling = new CallingAPI.Calling(this._client);
  cardsDev: CardsDevAPI.CardsDev = new CardsDevAPI.CardsDev(this._client);
  videoConferencing: VideoConferencingAPI.VideoConferencing = new VideoConferencingAPI.VideoConferencing(
    this._client,
  );
}

Extensions.Calling = Calling;
Extensions.CardsDev = CardsDev;
Extensions.VideoConferencing = VideoConferencing;

export declare namespace Extensions {
  export {
    Calling as Calling,
    type ChannelConnectionSettingsPatchRequest as ChannelConnectionSettingsPatchRequest,
    type ChannelConnectionSettingsRequest as ChannelConnectionSettingsRequest,
    type ChannelConnectionSettingsResponse as ChannelConnectionSettingsResponse,
    type CompanyCallerID as CompanyCallerID,
    type CompletedThirdPartyCallRequest as CompletedThirdPartyCallRequest,
    type CompletedThirdPartyCallResponse as CompletedThirdPartyCallResponse,
    type ContactCallerID as ContactCallerID,
    type FormattedPhoneNumber as FormattedPhoneNumber,
    type MarkRecordingAsReadyRequest as MarkRecordingAsReadyRequest,
    type ObjectCoordinates as ObjectCoordinates,
    type RecordingSettingsPatchRequest as RecordingSettingsPatchRequest,
    type RecordingSettingsRequest as RecordingSettingsRequest,
    type RecordingSettingsResponse as RecordingSettingsResponse,
    type SettingsPatchRequest as SettingsPatchRequest,
    type SettingsRequest as SettingsRequest,
    type SettingsResponse as SettingsResponse,
    type CallingCreateParams as CallingCreateParams,
    type CallingUpdateParams as CallingUpdateParams,
    type CallingMarkReadyParams as CallingMarkReadyParams,
  };

  export {
    CardsDev as CardsDev,
    type ActionConfirmationBody as ActionConfirmationBody,
    type ActionHookActionBody as ActionHookActionBody,
    type CardActions as CardActions,
    type CardAuditResponse as CardAuditResponse,
    type CardCreateRequest as CardCreateRequest,
    type CardDisplayBody as CardDisplayBody,
    type CardDisplayProperty as CardDisplayProperty,
    type CardFetchBody as CardFetchBody,
    type CardFetchBodyPatch as CardFetchBodyPatch,
    type CardMigrateViewsRequest as CardMigrateViewsRequest,
    type CardMigrateViewsResponse as CardMigrateViewsResponse,
    type CardObjectTypeBody as CardObjectTypeBody,
    type CardPatchRequest as CardPatchRequest,
    type DisplayOption as DisplayOption,
    type IFrameActionBody as IFrameActionBody,
    type IntegratorCardPayloadResponse as IntegratorCardPayloadResponse,
    type IntegratorObjectResult as IntegratorObjectResult,
    type ObjectToken as ObjectToken,
    type PublicCardFetchBody as PublicCardFetchBody,
    type PublicCardListResponse as PublicCardListResponse,
    type PublicCardResponse as PublicCardResponse,
    type TopLevelActions as TopLevelActions,
    type CardsDevCreateParams as CardsDevCreateParams,
    type CardsDevUpdateParams as CardsDevUpdateParams,
    type CardsDevDeleteParams as CardsDevDeleteParams,
    type CardsDevGetByIDParams as CardsDevGetByIDParams,
    type CardsDevMigrateViewsParams as CardsDevMigrateViewsParams,
  };

  export {
    VideoConferencing as VideoConferencing,
    type ExternalSettings as ExternalSettings,
    type VideoConferencingUpdateParams as VideoConferencingUpdateParams,
  };
}
