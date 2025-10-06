// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  BatchInputSubscriptionBatchUpdateRequest,
  BatchResponseSubscriptionResponse,
  BatchResponseSubscriptionResponseWithErrors,
  SettingsChangeRequest,
  SettingsResponse,
  SubscriptionBatchUpdateRequest,
  SubscriptionCreateRequest,
  SubscriptionListResponse,
  SubscriptionPatchRequest,
  SubscriptionResponse,
  ThrottlingSettings,
  WebhookConfigureParams,
  WebhookCreateParams,
  WebhookDeleteParams,
  WebhookReadParams,
  WebhookUpdateBatchParams,
  WebhookUpdateParams,
  Webhooks,
} from './resources/webhooks';
import {
  Account,
  ActingUser,
  CollectionResponseHydratedCriticalActionForwardPaging,
  CollectionResponsePublicAPIUserActionEventForwardPaging,
  CollectionResponsePublicLoginAuditForwardPaging,
  HydratedCriticalAction,
  PublicAPIUserActionEvent,
  PublicLoginAudit,
} from './resources/account/account';
import { Auth } from './resources/auth/auth';
import {
  APIAbTestBranchAction,
  APIActionDataValue,
  APIAppendObjectPropertyValue,
  APIAssociationDataSource,
  APIAssociationTimestampDataSource,
  APIAuthKeyWebhookAuthSettings,
  APIBlockedDate,
  APIConnection,
  APIContactFlow,
  APIContactFlowCreateRequest,
  APIContactFlowPutRequest,
  APIContactPropertyAnchor,
  APICustomCodeAction,
  APIDailyEnrollmentSchedule,
  APIDatasetFieldPropertyFilterDataSource,
  APIEnrolledArgumentPropertyFilterDataSource,
  APIEnrolledRecordPropertyFilterDataSource,
  APIEnrollmentEventPropertyValue,
  APIEnumerationOutputField,
  APIEventBasedEnrollmentCriteria,
  APIFetchedObjectPropertyValue,
  APIFlow,
  APIFlowBatchFetchFlowIDCoordinate,
  APIFlowBatchFetchMigrationFlowIDCoordinate,
  APIFlowBatchFetchMigrationWorkflowIDCoordinate,
  APIFlowBatchInput,
  APIFlowBatchMigrationInput,
  APIFlowCreateRequest,
  APIFlowEmailCampaign,
  APIFlowListing,
  APIFlowPutRequest,
  APIIncrementValue,
  APIInputVariable,
  APIListBasedEnrollmentCriteria,
  APIListBranch,
  APIListBranchAction,
  APIManualEnrollmentCriteria,
  APIMonthlyRelativeDaysEnrollmentSchedule,
  APIMonthlySpecificDaysEnrollmentSchedule,
  APIObjectPropertyValue,
  APIPlatformFlow,
  APIPlatformFlowCreateRequest,
  APIPlatformFlowPutRequest,
  APIPropertyBasedEnrollmentSchedule,
  APIRelativeDateTimeValue,
  APISignatureWebhookAuthSettings,
  APISingleConnectionAction,
  APISort,
  APIStaticAppendValue,
  APIStaticBranch,
  APIStaticBranchAction,
  APIStaticDateAnchor,
  APIStaticPropertyFilterDataSource,
  APIStaticTimeZoneStrategy,
  APIStaticValue,
  APITimeDelay,
  APITimeOfDay,
  APITimeWindow,
  APITimestampValue,
  APIUnEnrollmentSetting,
  APIWebhookAction,
  APIWeeklyEnrollmentSchedule,
  APIYearlyEnrollmentSchedule,
  Automation,
  BatchResponseAPIFlow,
  BatchResponseAPIFlowWithErrors,
  BatchResponseFlowIDWorkflowIDMappingResponse,
  BatchResponseFlowIDWorkflowIDMappingResponseWithErrors,
  CollectionResponseAPIFlowEmailCampaign,
  CollectionResponseAPIFlowListingForwardPaging,
  FlowIDWorkflowIDMappingResponse,
  PublicAbsoluteComparativeTimestampRefineBy,
  PublicAbsoluteRangedTimestampRefineBy,
  PublicAdsSearchFilter,
  PublicAdsTimeFilter,
  PublicAllHistoryRefineBy,
  PublicAllPropertyTypesOperation,
  PublicAndFilterBranch,
  PublicAssociationFilterBranch,
  PublicAssociationInListFilter,
  PublicBoolPropertyOperation,
  PublicCalendarDatePropertyOperation,
  PublicCampaignInfluencedFilter,
  PublicCommunicationSubscriptionFilter,
  PublicComparativeDatePropertyOperation,
  PublicComparativePropertyUpdatedOperation,
  PublicConstantFilter,
  PublicCtaAnalyticsFilter,
  PublicDatePoint,
  PublicDatePropertyOperation,
  PublicDateTimePropertyOperation,
  PublicEmailEventFilter,
  PublicEmailSubscriptionFilter,
  PublicEnumerationPropertyOperation,
  PublicEventAnalyticsFilter,
  PublicEventFilterMetadata,
  PublicFiscalQuarterReference,
  PublicFiscalYearReference,
  PublicFormSubmissionFilter,
  PublicFormSubmissionOnPageFilter,
  PublicInListFilter,
  PublicInListFilterMetadata,
  PublicIndexOffset,
  PublicIndexedTimePoint,
  PublicIntegrationEventFilter,
  PublicMonthReference,
  PublicMultiStringPropertyOperation,
  PublicNotAllFilterBranch,
  PublicNotAnyFilterBranch,
  PublicNowReference,
  PublicNumAssociationsFilter,
  PublicNumOccurrencesRefineBy,
  PublicNumberPropertyOperation,
  PublicOrFilterBranch,
  PublicPageViewAnalyticsFilter,
  PublicPrivacyAnalyticsFilter,
  PublicPropertyAssociationFilterBranch,
  PublicPropertyAssociationInListFilter,
  PublicPropertyFilter,
  PublicPropertyReferencedTime,
  PublicQuarterReference,
  PublicRangedDatePropertyOperation,
  PublicRangedNumberPropertyOperation,
  PublicRangedTimeOperation,
  PublicRelativeComparativeTimestampRefineBy,
  PublicRelativeRangedTimestampRefineBy,
  PublicRestrictedFilterBranch,
  PublicRollingDateRangePropertyOperation,
  PublicRollingPropertyUpdatedOperation,
  PublicSetOccurrencesRefineBy,
  PublicStringPropertyOperation,
  PublicSurveyMonkeyFilter,
  PublicSurveyMonkeyValueFilter,
  PublicTimeOffset,
  PublicTimePointOperation,
  PublicTodayReference,
  PublicUnifiedEventsFilter,
  PublicUnifiedEventsFilterBranch,
  PublicWebinarFilter,
  PublicWeekReference,
  PublicYearReference,
} from './resources/automation/automation';
import {
  Cms,
  CollectionResponseWithTotalURLMappingForwardPaging,
  URLMapping,
  URLMappingCreateRequestBody,
} from './resources/cms/cms';
import {
  AssociatedID,
  AssociationDefinition,
  AssociationDefinitionEgg,
  AssociationSpec,
  AssociationSpecWithLabel,
  BatchResponsePublicDefaultAssociation,
  CRM,
  CollectionResponseMultiAssociatedObjectWithLabel,
  CollectionResponseObjectSchemaNoPaging,
  CreatedResponseLabelsBetweenObjectPair,
  LabelsBetweenObjectPair,
  MultiAssociatedObjectWithLabel,
  ObjectSchema,
  ObjectSchemaEgg,
  ObjectTypeDefinition,
  ObjectTypeDefinitionLabels,
  ObjectTypeDefinitionPatch,
  ObjectTypePropertyCreate,
  Option,
  OptionInput,
  Property,
  PropertyModificationMetadata,
  PublicDefaultAssociation,
  PublicObjectID,
} from './resources/crm/crm';
import {
  CollectionResponseFile,
  CollectionResponseFolder,
  File,
  FileActionResponse,
  FileStat,
  FileUpdateInput,
  Files,
  Folder,
  FolderActionResponse,
  FolderInput,
  FolderUpdateInput,
  FolderUpdateInputWithID,
  FolderUpdateTaskLocator,
  ImportFromURLInput,
  ImportFromURLTaskLocator,
  SignedURL,
} from './resources/files/files';
import { Marketing } from './resources/marketing/marketing';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  accessToken?: string | null | undefined;

  developerHapikey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HUB_SPOT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['HUB_SPOT_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Hub Spot API.
 */
export class HubSpot {
  accessToken: string | null;
  developerHapikey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hub Spot API.
   *
   * @param {string | null | undefined} [opts.accessToken]
   * @param {string | null | undefined} [opts.developerHapikey]
   * @param {string} [opts.baseURL=process.env['HUB_SPOT_BASE_URL'] ?? https://api.hubapi.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('HUB_SPOT_BASE_URL'),
    accessToken = null,
    developerHapikey = null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      accessToken,
      developerHapikey,
      ...opts,
      baseURL: baseURL || `https://api.hubapi.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? HubSpot.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('HUB_SPOT_LOG'), "process.env['HUB_SPOT_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.accessToken = accessToken;
    this.developerHapikey = developerHapikey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      accessToken: this.accessToken,
      developerHapikey: this.developerHapikey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.hubapi.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return {
      hapikey: this.developerHapikey ?? undefined,
      ...this._options.defaultQuery,
    };
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.accessToken == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.accessToken}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static HubSpot = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HubSpotError = Errors.HubSpotError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  account: API.Account = new API.Account(this);
  auth: API.Auth = new API.Auth(this);
  automation: API.Automation = new API.Automation(this);
  cms: API.Cms = new API.Cms(this);
  crm: API.CRM = new API.CRM(this);
  files: API.Files = new API.Files(this);
  marketing: API.Marketing = new API.Marketing(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
}

HubSpot.Account = Account;
HubSpot.Auth = Auth;
HubSpot.Automation = Automation;
HubSpot.Cms = Cms;
HubSpot.CRM = CRM;
HubSpot.Files = Files;
HubSpot.Marketing = Marketing;
HubSpot.Webhooks = Webhooks;

export declare namespace HubSpot {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Account as Account,
    type ActingUser as ActingUser,
    type CollectionResponseHydratedCriticalActionForwardPaging as CollectionResponseHydratedCriticalActionForwardPaging,
    type CollectionResponsePublicAPIUserActionEventForwardPaging as CollectionResponsePublicAPIUserActionEventForwardPaging,
    type CollectionResponsePublicLoginAuditForwardPaging as CollectionResponsePublicLoginAuditForwardPaging,
    type HydratedCriticalAction as HydratedCriticalAction,
    type PublicAPIUserActionEvent as PublicAPIUserActionEvent,
    type PublicLoginAudit as PublicLoginAudit,
  };

  export { Auth as Auth };

  export {
    Automation as Automation,
    type APIAbTestBranchAction as APIAbTestBranchAction,
    type APIActionDataValue as APIActionDataValue,
    type APIAppendObjectPropertyValue as APIAppendObjectPropertyValue,
    type APIAssociationDataSource as APIAssociationDataSource,
    type APIAssociationTimestampDataSource as APIAssociationTimestampDataSource,
    type APIAuthKeyWebhookAuthSettings as APIAuthKeyWebhookAuthSettings,
    type APIBlockedDate as APIBlockedDate,
    type APIConnection as APIConnection,
    type APIContactFlow as APIContactFlow,
    type APIContactFlowCreateRequest as APIContactFlowCreateRequest,
    type APIContactFlowPutRequest as APIContactFlowPutRequest,
    type APIContactPropertyAnchor as APIContactPropertyAnchor,
    type APICustomCodeAction as APICustomCodeAction,
    type APIDailyEnrollmentSchedule as APIDailyEnrollmentSchedule,
    type APIDatasetFieldPropertyFilterDataSource as APIDatasetFieldPropertyFilterDataSource,
    type APIEnrolledArgumentPropertyFilterDataSource as APIEnrolledArgumentPropertyFilterDataSource,
    type APIEnrolledRecordPropertyFilterDataSource as APIEnrolledRecordPropertyFilterDataSource,
    type APIEnrollmentEventPropertyValue as APIEnrollmentEventPropertyValue,
    type APIEnumerationOutputField as APIEnumerationOutputField,
    type APIEventBasedEnrollmentCriteria as APIEventBasedEnrollmentCriteria,
    type APIFetchedObjectPropertyValue as APIFetchedObjectPropertyValue,
    type APIFlow as APIFlow,
    type APIFlowBatchFetchFlowIDCoordinate as APIFlowBatchFetchFlowIDCoordinate,
    type APIFlowBatchFetchMigrationFlowIDCoordinate as APIFlowBatchFetchMigrationFlowIDCoordinate,
    type APIFlowBatchFetchMigrationWorkflowIDCoordinate as APIFlowBatchFetchMigrationWorkflowIDCoordinate,
    type APIFlowBatchInput as APIFlowBatchInput,
    type APIFlowBatchMigrationInput as APIFlowBatchMigrationInput,
    type APIFlowCreateRequest as APIFlowCreateRequest,
    type APIFlowEmailCampaign as APIFlowEmailCampaign,
    type APIFlowListing as APIFlowListing,
    type APIFlowPutRequest as APIFlowPutRequest,
    type APIIncrementValue as APIIncrementValue,
    type APIInputVariable as APIInputVariable,
    type APIListBasedEnrollmentCriteria as APIListBasedEnrollmentCriteria,
    type APIListBranch as APIListBranch,
    type APIListBranchAction as APIListBranchAction,
    type APIManualEnrollmentCriteria as APIManualEnrollmentCriteria,
    type APIMonthlyRelativeDaysEnrollmentSchedule as APIMonthlyRelativeDaysEnrollmentSchedule,
    type APIMonthlySpecificDaysEnrollmentSchedule as APIMonthlySpecificDaysEnrollmentSchedule,
    type APIObjectPropertyValue as APIObjectPropertyValue,
    type APIPlatformFlow as APIPlatformFlow,
    type APIPlatformFlowCreateRequest as APIPlatformFlowCreateRequest,
    type APIPlatformFlowPutRequest as APIPlatformFlowPutRequest,
    type APIPropertyBasedEnrollmentSchedule as APIPropertyBasedEnrollmentSchedule,
    type APIRelativeDateTimeValue as APIRelativeDateTimeValue,
    type APISignatureWebhookAuthSettings as APISignatureWebhookAuthSettings,
    type APISingleConnectionAction as APISingleConnectionAction,
    type APISort as APISort,
    type APIStaticAppendValue as APIStaticAppendValue,
    type APIStaticBranch as APIStaticBranch,
    type APIStaticBranchAction as APIStaticBranchAction,
    type APIStaticDateAnchor as APIStaticDateAnchor,
    type APIStaticPropertyFilterDataSource as APIStaticPropertyFilterDataSource,
    type APIStaticTimeZoneStrategy as APIStaticTimeZoneStrategy,
    type APIStaticValue as APIStaticValue,
    type APITimeDelay as APITimeDelay,
    type APITimeOfDay as APITimeOfDay,
    type APITimestampValue as APITimestampValue,
    type APITimeWindow as APITimeWindow,
    type APIUnEnrollmentSetting as APIUnEnrollmentSetting,
    type APIWebhookAction as APIWebhookAction,
    type APIWeeklyEnrollmentSchedule as APIWeeklyEnrollmentSchedule,
    type APIYearlyEnrollmentSchedule as APIYearlyEnrollmentSchedule,
    type BatchResponseAPIFlow as BatchResponseAPIFlow,
    type BatchResponseAPIFlowWithErrors as BatchResponseAPIFlowWithErrors,
    type BatchResponseFlowIDWorkflowIDMappingResponse as BatchResponseFlowIDWorkflowIDMappingResponse,
    type BatchResponseFlowIDWorkflowIDMappingResponseWithErrors as BatchResponseFlowIDWorkflowIDMappingResponseWithErrors,
    type CollectionResponseAPIFlowEmailCampaign as CollectionResponseAPIFlowEmailCampaign,
    type CollectionResponseAPIFlowListingForwardPaging as CollectionResponseAPIFlowListingForwardPaging,
    type FlowIDWorkflowIDMappingResponse as FlowIDWorkflowIDMappingResponse,
    type PublicAbsoluteComparativeTimestampRefineBy as PublicAbsoluteComparativeTimestampRefineBy,
    type PublicAbsoluteRangedTimestampRefineBy as PublicAbsoluteRangedTimestampRefineBy,
    type PublicAdsSearchFilter as PublicAdsSearchFilter,
    type PublicAdsTimeFilter as PublicAdsTimeFilter,
    type PublicAllHistoryRefineBy as PublicAllHistoryRefineBy,
    type PublicAllPropertyTypesOperation as PublicAllPropertyTypesOperation,
    type PublicAndFilterBranch as PublicAndFilterBranch,
    type PublicAssociationFilterBranch as PublicAssociationFilterBranch,
    type PublicAssociationInListFilter as PublicAssociationInListFilter,
    type PublicBoolPropertyOperation as PublicBoolPropertyOperation,
    type PublicCalendarDatePropertyOperation as PublicCalendarDatePropertyOperation,
    type PublicCampaignInfluencedFilter as PublicCampaignInfluencedFilter,
    type PublicCommunicationSubscriptionFilter as PublicCommunicationSubscriptionFilter,
    type PublicComparativeDatePropertyOperation as PublicComparativeDatePropertyOperation,
    type PublicComparativePropertyUpdatedOperation as PublicComparativePropertyUpdatedOperation,
    type PublicConstantFilter as PublicConstantFilter,
    type PublicCtaAnalyticsFilter as PublicCtaAnalyticsFilter,
    type PublicDatePoint as PublicDatePoint,
    type PublicDatePropertyOperation as PublicDatePropertyOperation,
    type PublicDateTimePropertyOperation as PublicDateTimePropertyOperation,
    type PublicEmailEventFilter as PublicEmailEventFilter,
    type PublicEmailSubscriptionFilter as PublicEmailSubscriptionFilter,
    type PublicEnumerationPropertyOperation as PublicEnumerationPropertyOperation,
    type PublicEventAnalyticsFilter as PublicEventAnalyticsFilter,
    type PublicEventFilterMetadata as PublicEventFilterMetadata,
    type PublicFiscalQuarterReference as PublicFiscalQuarterReference,
    type PublicFiscalYearReference as PublicFiscalYearReference,
    type PublicFormSubmissionFilter as PublicFormSubmissionFilter,
    type PublicFormSubmissionOnPageFilter as PublicFormSubmissionOnPageFilter,
    type PublicIndexedTimePoint as PublicIndexedTimePoint,
    type PublicIndexOffset as PublicIndexOffset,
    type PublicInListFilter as PublicInListFilter,
    type PublicInListFilterMetadata as PublicInListFilterMetadata,
    type PublicIntegrationEventFilter as PublicIntegrationEventFilter,
    type PublicMonthReference as PublicMonthReference,
    type PublicMultiStringPropertyOperation as PublicMultiStringPropertyOperation,
    type PublicNotAllFilterBranch as PublicNotAllFilterBranch,
    type PublicNotAnyFilterBranch as PublicNotAnyFilterBranch,
    type PublicNowReference as PublicNowReference,
    type PublicNumAssociationsFilter as PublicNumAssociationsFilter,
    type PublicNumberPropertyOperation as PublicNumberPropertyOperation,
    type PublicNumOccurrencesRefineBy as PublicNumOccurrencesRefineBy,
    type PublicOrFilterBranch as PublicOrFilterBranch,
    type PublicPageViewAnalyticsFilter as PublicPageViewAnalyticsFilter,
    type PublicPrivacyAnalyticsFilter as PublicPrivacyAnalyticsFilter,
    type PublicPropertyAssociationFilterBranch as PublicPropertyAssociationFilterBranch,
    type PublicPropertyAssociationInListFilter as PublicPropertyAssociationInListFilter,
    type PublicPropertyFilter as PublicPropertyFilter,
    type PublicPropertyReferencedTime as PublicPropertyReferencedTime,
    type PublicQuarterReference as PublicQuarterReference,
    type PublicRangedDatePropertyOperation as PublicRangedDatePropertyOperation,
    type PublicRangedNumberPropertyOperation as PublicRangedNumberPropertyOperation,
    type PublicRangedTimeOperation as PublicRangedTimeOperation,
    type PublicRelativeComparativeTimestampRefineBy as PublicRelativeComparativeTimestampRefineBy,
    type PublicRelativeRangedTimestampRefineBy as PublicRelativeRangedTimestampRefineBy,
    type PublicRestrictedFilterBranch as PublicRestrictedFilterBranch,
    type PublicRollingDateRangePropertyOperation as PublicRollingDateRangePropertyOperation,
    type PublicRollingPropertyUpdatedOperation as PublicRollingPropertyUpdatedOperation,
    type PublicSetOccurrencesRefineBy as PublicSetOccurrencesRefineBy,
    type PublicStringPropertyOperation as PublicStringPropertyOperation,
    type PublicSurveyMonkeyFilter as PublicSurveyMonkeyFilter,
    type PublicSurveyMonkeyValueFilter as PublicSurveyMonkeyValueFilter,
    type PublicTimeOffset as PublicTimeOffset,
    type PublicTimePointOperation as PublicTimePointOperation,
    type PublicTodayReference as PublicTodayReference,
    type PublicUnifiedEventsFilter as PublicUnifiedEventsFilter,
    type PublicUnifiedEventsFilterBranch as PublicUnifiedEventsFilterBranch,
    type PublicWebinarFilter as PublicWebinarFilter,
    type PublicWeekReference as PublicWeekReference,
    type PublicYearReference as PublicYearReference,
  };

  export {
    Cms as Cms,
    type CollectionResponseWithTotalURLMappingForwardPaging as CollectionResponseWithTotalURLMappingForwardPaging,
    type URLMapping as URLMapping,
    type URLMappingCreateRequestBody as URLMappingCreateRequestBody,
  };

  export {
    CRM as CRM,
    type AssociatedID as AssociatedID,
    type AssociationDefinition as AssociationDefinition,
    type AssociationDefinitionEgg as AssociationDefinitionEgg,
    type AssociationSpec as AssociationSpec,
    type AssociationSpecWithLabel as AssociationSpecWithLabel,
    type BatchResponsePublicDefaultAssociation as BatchResponsePublicDefaultAssociation,
    type CollectionResponseMultiAssociatedObjectWithLabel as CollectionResponseMultiAssociatedObjectWithLabel,
    type CollectionResponseObjectSchemaNoPaging as CollectionResponseObjectSchemaNoPaging,
    type CreatedResponseLabelsBetweenObjectPair as CreatedResponseLabelsBetweenObjectPair,
    type LabelsBetweenObjectPair as LabelsBetweenObjectPair,
    type MultiAssociatedObjectWithLabel as MultiAssociatedObjectWithLabel,
    type ObjectSchema as ObjectSchema,
    type ObjectSchemaEgg as ObjectSchemaEgg,
    type ObjectTypeDefinition as ObjectTypeDefinition,
    type ObjectTypeDefinitionLabels as ObjectTypeDefinitionLabels,
    type ObjectTypeDefinitionPatch as ObjectTypeDefinitionPatch,
    type ObjectTypePropertyCreate as ObjectTypePropertyCreate,
    type Option as Option,
    type OptionInput as OptionInput,
    type Property as Property,
    type PropertyModificationMetadata as PropertyModificationMetadata,
    type PublicDefaultAssociation as PublicDefaultAssociation,
    type PublicObjectID as PublicObjectID,
  };

  export {
    Files as Files,
    type CollectionResponseFile as CollectionResponseFile,
    type CollectionResponseFolder as CollectionResponseFolder,
    type File as File,
    type FileActionResponse as FileActionResponse,
    type FileStat as FileStat,
    type FileUpdateInput as FileUpdateInput,
    type Folder as Folder,
    type FolderActionResponse as FolderActionResponse,
    type FolderInput as FolderInput,
    type FolderUpdateInput as FolderUpdateInput,
    type FolderUpdateInputWithID as FolderUpdateInputWithID,
    type FolderUpdateTaskLocator as FolderUpdateTaskLocator,
    type ImportFromURLInput as ImportFromURLInput,
    type ImportFromURLTaskLocator as ImportFromURLTaskLocator,
    type SignedURL as SignedURL,
  };

  export { Marketing as Marketing };

  export {
    Webhooks as Webhooks,
    type BatchInputSubscriptionBatchUpdateRequest as BatchInputSubscriptionBatchUpdateRequest,
    type BatchResponseSubscriptionResponse as BatchResponseSubscriptionResponse,
    type BatchResponseSubscriptionResponseWithErrors as BatchResponseSubscriptionResponseWithErrors,
    type SettingsChangeRequest as SettingsChangeRequest,
    type SettingsResponse as SettingsResponse,
    type SubscriptionBatchUpdateRequest as SubscriptionBatchUpdateRequest,
    type SubscriptionCreateRequest as SubscriptionCreateRequest,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionPatchRequest as SubscriptionPatchRequest,
    type SubscriptionResponse as SubscriptionResponse,
    type ThrottlingSettings as ThrottlingSettings,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookConfigureParams as WebhookConfigureParams,
    type WebhookReadParams as WebhookReadParams,
    type WebhookUpdateBatchParams as WebhookUpdateBatchParams,
  };

  export type BatchInputString = API.BatchInputString;
  export type Error = API.Error;
  export type ErrorDetail = API.ErrorDetail;
  export type ForwardPaging = API.ForwardPaging;
  export type NextPage = API.NextPage;
  export type Paging = API.Paging;
  export type PreviousPage = API.PreviousPage;
  export type StandardError = API.StandardError;
}
