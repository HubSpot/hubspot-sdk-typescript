// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsAPI from './cards';
import {
  ActionConfirmationBody,
  ActionHookActionBody,
  CardActions,
  CardAuditResponse,
  CardCreateParams,
  CardCreateRequest,
  CardDeleteParams,
  CardDisplayBody,
  CardDisplayProperty,
  CardFetchBody,
  CardFetchBodyPatch,
  CardGetParams,
  CardObjectTypeBody,
  CardPatchRequest,
  CardUpdateParams,
  Cards,
  DisplayOption,
  IFrameActionBody,
  IntegratorCardPayloadResponse,
  IntegratorObjectResult,
  ObjectToken,
  PublicCardFetchBody,
  PublicCardListResponse,
  PublicCardResponse,
  TopLevelActions,
} from './cards';
import * as CallingAPI from './calling/calling';
import {
  Calling,
  ChannelConnectionSettingsPatchRequest,
  ChannelConnectionSettingsRequest,
  ChannelConnectionSettingsResponse,
  MarkRecordingAsReadyRequest,
  RecordingSettingsPatchRequest,
  RecordingSettingsRequest,
  RecordingSettingsResponse,
  SettingsPatchRequest,
  SettingsRequest,
  SettingsResponse,
} from './calling/calling';
import * as VideoConferencingAPI from './video-conferencing/video-conferencing';
import { ExternalSettings, VideoConferencing } from './video-conferencing/video-conferencing';

export class Extensions extends APIResource {
  calling: CallingAPI.Calling = new CallingAPI.Calling(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  videoConferencing: VideoConferencingAPI.VideoConferencing = new VideoConferencingAPI.VideoConferencing(
    this._client,
  );
}

Extensions.Calling = Calling;
Extensions.Cards = Cards;
Extensions.VideoConferencing = VideoConferencing;

export declare namespace Extensions {
  export {
    Calling as Calling,
    type ChannelConnectionSettingsPatchRequest as ChannelConnectionSettingsPatchRequest,
    type ChannelConnectionSettingsRequest as ChannelConnectionSettingsRequest,
    type ChannelConnectionSettingsResponse as ChannelConnectionSettingsResponse,
    type MarkRecordingAsReadyRequest as MarkRecordingAsReadyRequest,
    type RecordingSettingsPatchRequest as RecordingSettingsPatchRequest,
    type RecordingSettingsRequest as RecordingSettingsRequest,
    type RecordingSettingsResponse as RecordingSettingsResponse,
    type SettingsPatchRequest as SettingsPatchRequest,
    type SettingsRequest as SettingsRequest,
    type SettingsResponse as SettingsResponse,
  };

  export {
    Cards as Cards,
    type ActionConfirmationBody as ActionConfirmationBody,
    type ActionHookActionBody as ActionHookActionBody,
    type CardActions as CardActions,
    type CardAuditResponse as CardAuditResponse,
    type CardCreateRequest as CardCreateRequest,
    type CardDisplayBody as CardDisplayBody,
    type CardDisplayProperty as CardDisplayProperty,
    type CardFetchBody as CardFetchBody,
    type CardFetchBodyPatch as CardFetchBodyPatch,
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
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardDeleteParams as CardDeleteParams,
    type CardGetParams as CardGetParams,
  };

  export { VideoConferencing as VideoConferencing, type ExternalSettings as ExternalSettings };
}
