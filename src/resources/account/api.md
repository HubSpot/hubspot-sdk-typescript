# Account

Types:

- <code><a href="./src/resources/account/account.ts">APIUsage</a></code>
- <code><a href="./src/resources/account/account.ts">CollectionResponseAPIUsage</a></code>
- <code><a href="./src/resources/account/account.ts">PortalInformationResponse</a></code>

## Activity

Types:

- <code><a href="./src/resources/account/activity.ts">ActingUser</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponseHydratedCriticalActionForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponsePublicAPIUserActionEventForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponsePublicLoginAuditForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">HydratedCriticalAction</a></code>
- <code><a href="./src/resources/account/activity.ts">PublicAPIUserActionEvent</a></code>
- <code><a href="./src/resources/account/activity.ts">PublicLoginAudit</a></code>

Methods:

- <code title="get /account-info/v3/activity/audit-logs">client.account.activity.<a href="./src/resources/account/activity.ts">listAuditLogs</a>({ ...params }) -> PublicAPIUserActionEventsPage</code>
- <code title="get /account-info/v3/activity/login">client.account.activity.<a href="./src/resources/account/activity.ts">listLoginActivities</a>({ ...params }) -> PublicLoginAuditsPage</code>
- <code title="get /account-info/v3/activity/security">client.account.activity.<a href="./src/resources/account/activity.ts">listSecurityActivities</a>({ ...params }) -> HydratedCriticalActionsPage</code>

## Details

Methods:

- <code title="get /account-info/v3/details">client.account.details.<a href="./src/resources/account/details.ts">get</a>() -> PortalInformationResponse</code>

## Usage

Methods:

- <code title="get /account-info/v3/api-usage/daily/private-apps">client.account.usage.<a href="./src/resources/account/usage.ts">getDailyPrivateAppsUsage</a>() -> CollectionResponseAPIUsage</code>
