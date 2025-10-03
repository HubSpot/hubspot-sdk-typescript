// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallingAPI from './calling/calling';
import {
  CRMExtensionsCallingChannelConnectionSettingsPatchRequest,
  CRMExtensionsCallingChannelConnectionSettingsRequest,
  CRMExtensionsCallingChannelConnectionSettingsResponse,
  CRMExtensionsCallingMarkRecordingAsReadyRequest,
  CRMExtensionsCallingRecordingSettingsPatchRequest,
  CRMExtensionsCallingRecordingSettingsRequest,
  CRMExtensionsCallingRecordingSettingsResponse,
  CRMExtensionsCallingSettingsPatchRequest,
  CRMExtensionsCallingSettingsRequest,
  CRMExtensionsCallingSettingsResponse,
  Calling,
} from './calling/calling';

export class Extensions extends APIResource {
  calling: CallingAPI.Calling = new CallingAPI.Calling(this._client);
}

Extensions.Calling = Calling;

export declare namespace Extensions {
  export {
    Calling as Calling,
    type CRMExtensionsCallingChannelConnectionSettingsPatchRequest as CRMExtensionsCallingChannelConnectionSettingsPatchRequest,
    type CRMExtensionsCallingChannelConnectionSettingsRequest as CRMExtensionsCallingChannelConnectionSettingsRequest,
    type CRMExtensionsCallingChannelConnectionSettingsResponse as CRMExtensionsCallingChannelConnectionSettingsResponse,
    type CRMExtensionsCallingMarkRecordingAsReadyRequest as CRMExtensionsCallingMarkRecordingAsReadyRequest,
    type CRMExtensionsCallingRecordingSettingsPatchRequest as CRMExtensionsCallingRecordingSettingsPatchRequest,
    type CRMExtensionsCallingRecordingSettingsRequest as CRMExtensionsCallingRecordingSettingsRequest,
    type CRMExtensionsCallingRecordingSettingsResponse as CRMExtensionsCallingRecordingSettingsResponse,
    type CRMExtensionsCallingSettingsPatchRequest as CRMExtensionsCallingSettingsPatchRequest,
    type CRMExtensionsCallingSettingsRequest as CRMExtensionsCallingSettingsRequest,
    type CRMExtensionsCallingSettingsResponse as CRMExtensionsCallingSettingsResponse,
  };
}
