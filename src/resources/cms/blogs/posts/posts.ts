// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchAPI from './batch';
import { Batch } from './batch';
import * as MultiLanguageAPI from './multi-language';
import { MultiLanguage } from './multi-language';

export class Posts extends APIResource {
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  multiLanguage: MultiLanguageAPI.MultiLanguage = new MultiLanguageAPI.MultiLanguage(this._client);
}

Posts.Batch = Batch;
Posts.MultiLanguage = MultiLanguage;

export declare namespace Posts {
  export { Batch as Batch };

  export { MultiLanguage as MultiLanguage };
}
