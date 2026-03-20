# Account

## Activity

Types:

- <code><a href="./src/resources/account/activity.ts">ActingUser</a></code>
- <code><a href="./src/resources/account/activity.ts">APIUsage</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponseAPIUsageNoPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponseHydratedCriticalActionForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponsePublicAPIUserActionEventForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">CollectionResponsePublicLoginAuditForwardPaging</a></code>
- <code><a href="./src/resources/account/activity.ts">HydratedCriticalAction</a></code>
- <code><a href="./src/resources/account/activity.ts">PortalInformationResponse</a></code>
- <code><a href="./src/resources/account/activity.ts">PublicAPIUserActionEvent</a></code>
- <code><a href="./src/resources/account/activity.ts">PublicLoginAudit</a></code>

Methods:

- <code title="get /account-info/2026-03/activity/audit-logs">client.account.activity.<a href="./src/resources/account/activity.ts">listAuditLogs</a>({ ...params }) -> PublicAPIUserActionEventsPage</code>
- <code title="get /account-info/2026-03/activity/login">client.account.activity.<a href="./src/resources/account/activity.ts">listLoginActivities</a>({ ...params }) -> PublicLoginAuditsPage</code>
- <code title="get /account-info/2026-03/activity/security">client.account.activity.<a href="./src/resources/account/activity.ts">listSecurityActivities</a>({ ...params }) -> HydratedCriticalActionsPage</code>
