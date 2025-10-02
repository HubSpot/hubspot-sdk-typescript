// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3/v3';
import { V3, V3RetrieveAccountDetailsResponse } from './v3/v3';

export class AccountInfo extends APIResource {
  v3: V3API.V3 = new V3API.V3(this._client);
}

AccountInfo.V3 = V3;

export declare namespace AccountInfo {
  export { V3 as V3, type V3RetrieveAccountDetailsResponse as V3RetrieveAccountDetailsResponse };
}
