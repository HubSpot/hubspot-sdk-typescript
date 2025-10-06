// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallingAPI from './calling';
import {
  Calling,
  CallingCreateParams,
  CallingMarkAsReadyParams,
  CallingRegisterURLFormatParams,
  CallingUpdateParams,
  CallingUpdateURLFormatParams,
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
} from './calling';

export class Extensions extends APIResource {
  calling: CallingAPI.Calling = new CallingAPI.Calling(this._client);
}

Extensions.Calling = Calling;

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
    type CallingCreateParams as CallingCreateParams,
    type CallingUpdateParams as CallingUpdateParams,
    type CallingMarkAsReadyParams as CallingMarkAsReadyParams,
    type CallingRegisterURLFormatParams as CallingRegisterURLFormatParams,
    type CallingUpdateURLFormatParams as CallingUpdateURLFormatParams,
  };
}
