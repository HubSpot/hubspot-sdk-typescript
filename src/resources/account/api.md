# Account

Types:

- <code><a href="./src/resources/account/account.ts">APIUsage</a></code>
- <code><a href="./src/resources/account/account.ts">CollectionResponseAPIUsageNoPaging</a></code>
- <code><a href="./src/resources/account/account.ts">PortalInformationResponse</a></code>

Methods:

- <code title="get /account-info/2026-03/details">client.account.<a href="./src/resources/account/account.ts">get</a>() -> PortalInformationResponse</code>
- <code title="get /account-info/2026-03/api-usage/daily/private-apps">client.account.<a href="./src/resources/account/account.ts">getDailyPrivateAppsUsage</a>() -> CollectionResponseAPIUsageNoPaging</code>

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

- <code title="get /account-info/2026-03/activity/audit-logs">client.account.activity.<a href="./src/resources/account/activity.ts">listAuditLogs</a>({ ...params }) -> PublicAPIUserActionEventsPage</code>
- <code title="get /account-info/2026-03/activity/login">client.account.activity.<a href="./src/resources/account/activity.ts">listLoginActivities</a>({ ...params }) -> PublicLoginAuditsPage</code>
- <code title="get /account-info/2026-03/activity/security">client.account.activity.<a href="./src/resources/account/activity.ts">listSecurityActivities</a>({ ...params }) -> HydratedCriticalActionsPage</code>
