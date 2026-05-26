// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as SnapshotsAPI from './snapshots';
import { BaseSnapshots, SnapshotCreateParams, Snapshots } from './snapshots';
import * as JournalLocalAPI from './journal-local/journal-local';
import {
  BaseJournalLocal,
  JournalLocal,
  JournalLocalGetEarliestParams,
  JournalLocalGetLatestParams,
  JournalLocalGetNextFromOffsetParams,
} from './journal-local/journal-local';
import * as JournalAPI from './journal/journal';
import {
  BaseJournal,
  Journal,
  JournalGetEarliestParams,
  JournalGetNextFromOffsetParams,
} from './journal/journal';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import { BaseSubscriptions, SubscriptionCreateParams, Subscriptions } from './subscriptions/subscriptions';

export class BaseWebhooksJournal extends APIResource {
  static override readonly _key: readonly ['webhooksJournal'] = Object.freeze(['webhooksJournal'] as const);
}
export class WebhooksJournal extends BaseWebhooksJournal {
  journal: JournalAPI.Journal = new JournalAPI.Journal(this._client);
  journalLocal: JournalLocalAPI.JournalLocal = new JournalLocalAPI.JournalLocal(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

export interface JournalCollectionResponseSubscriptionResponseNoPaging {
  /**
   * An array of subscription responses, where each item contains details about a
   * specific subscription. Each item follows the SubscriptionResponse schema.
   */
  results: Array<JournalSubscriptionResponse>;
}

export interface JournalSubscriptionResponse {
  /**
   * The unique identifier for the subscription, represented as an integer.
   */
  id: number;

  /**
   * An array of actions associated with the subscription. Valid actions include
   * 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED',
   * 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL',
   * 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.
   */
  actions: Array<
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'MERGE'
    | 'RESTORE'
    | 'ASSOCIATION_ADDED'
    | 'ASSOCIATION_REMOVED'
    | 'SNAPSHOT'
    | 'APP_INSTALL'
    | 'APP_UNINSTALL'
    | 'ADDED_TO_LIST'
    | 'REMOVED_FROM_LIST'
    | 'GDPR_DELETE'
  >;

  /**
   * The unique identifier for the app associated with the subscription, represented
   * as an integer.
   */
  appId: number;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   */
  createdAt: string;

  /**
   * The identifier for the type of object associated with the subscription,
   * represented as a string.
   */
  objectTypeId: string;

  /**
   * The type of subscription, indicating the nature of events it pertains to. Valid
   * values include 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT',
   * 'LIST_MEMBERSHIP', and 'GDPR_PRIVACY_DELETION'.
   */
  subscriptionType:
    | 'APP_LIFECYCLE_EVENT'
    | 'ASSOCIATION'
    | 'EVENT'
    | 'GDPR_PRIVACY_DELETION'
    | 'LIST_MEMBERSHIP'
    | 'OBJECT';

  /**
   * The date and time when the subscription was last updated, in ISO 8601 format.
   */
  updatedAt: string;

  /**
   * An object containing overrides for actions, where each key is an action and the
   * value is an ActionOverrideRequest object.
   */
  actionOverrides?: { [key: string]: Shared.ActionOverrideRequest };

  /**
   * An array of strings representing the IDs of associated object types.
   */
  associatedObjectTypeIds?: Array<string>;

  /**
   * The unique identifier of the user who created the subscription, represented as
   * an integer.
   */
  createdBy?: number;

  /**
   * The date and time when the subscription was deleted, in ISO 8601 format, if
   * applicable.
   */
  deletedAt?: string;

  /**
   * An array of integers representing the IDs of lists associated with the
   * subscription.
   */
  listIds?: Array<number>;

  /**
   * An array of integers representing the IDs of objects associated with the
   * subscription.
   */
  objectIds?: Array<number>;

  /**
   * The unique identifier for the portal associated with the subscription,
   * represented as an integer.
   */
  portalId?: number;

  /**
   * An array of strings representing the properties associated with the
   * subscription.
   */
  properties?: Array<string>;
}

WebhooksJournal.Journal = Journal;
WebhooksJournal.BaseJournal = BaseJournal;
WebhooksJournal.JournalLocal = JournalLocal;
WebhooksJournal.BaseJournalLocal = BaseJournalLocal;
WebhooksJournal.Snapshots = Snapshots;
WebhooksJournal.BaseSnapshots = BaseSnapshots;
WebhooksJournal.Subscriptions = Subscriptions;
WebhooksJournal.BaseSubscriptions = BaseSubscriptions;

export declare namespace WebhooksJournal {
  export {
    type JournalCollectionResponseSubscriptionResponseNoPaging as JournalCollectionResponseSubscriptionResponseNoPaging,
    type JournalSubscriptionResponse as JournalSubscriptionResponse,
  };

  export {
    Journal as Journal,
    BaseJournal as BaseJournal,
    type JournalGetEarliestParams as JournalGetEarliestParams,
    type JournalGetNextFromOffsetParams as JournalGetNextFromOffsetParams,
  };

  export {
    JournalLocal as JournalLocal,
    BaseJournalLocal as BaseJournalLocal,
    type JournalLocalGetEarliestParams as JournalLocalGetEarliestParams,
    type JournalLocalGetLatestParams as JournalLocalGetLatestParams,
    type JournalLocalGetNextFromOffsetParams as JournalLocalGetNextFromOffsetParams,
  };

  export {
    Snapshots as Snapshots,
    BaseSnapshots as BaseSnapshots,
    type SnapshotCreateParams as SnapshotCreateParams,
  };

  export {
    Subscriptions as Subscriptions,
    BaseSubscriptions as BaseSubscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
