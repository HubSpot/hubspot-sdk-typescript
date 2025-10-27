// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SingleSendAPI from './single-send';
import { SingleSend, SingleSendSendParams } from './single-send';
import * as StatisticsAPI from './statistics';
import { Statistics } from './statistics';

export class Emails extends APIResource {
  singleSend: SingleSendAPI.SingleSend = new SingleSendAPI.SingleSend(this._client);
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);
}

Emails.SingleSend = SingleSend;
Emails.Statistics = Statistics;

export declare namespace Emails {
  export { SingleSend as SingleSend, type SingleSendSendParams as SingleSendSendParams };

  export { Statistics as Statistics };
}
