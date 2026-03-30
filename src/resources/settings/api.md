# Settings

## Currencies

Types:

- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchInputExchangeRateCreateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchInputExchangeRateUpdateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchResponseExchangeRate</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CentralExchangeRatesInformation</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CollectionResponseCurrencyCodeInfoNoPaging</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CollectionResponseExchangeRateForwardPaging</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CollectionResponseExchangeRateNoPaging</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CompanyCurrency</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CompanyCurrencyUpdateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CurrencyCodeInfo</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CurrencyCreateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">CurrencyPairUpdate</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">ExchangeRate</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">ExchangeRateCreateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">ExchangeRateMultiplier</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">ExchangeRateUpdateRequest</a></code>

Methods:

- <code title="get /settings/currencies/2026-03/company-currency">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">getCompanyCurrency</a>() -> CompanyCurrency</code>
- <code title="get /settings/currencies/2026-03/codes">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">listCodes</a>() -> CollectionResponseCurrencyCodeInfoNoPaging</code>
- <code title="put /settings/currencies/2026-03/company-currency">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">updateCompanyCurrency</a>({ ...params }) -> CompanyCurrency</code>

### CentralFxRates

Methods:

- <code title="post /settings/currencies/2026-03/central-fx-rates/add-currency">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">createCurrency</a>({ ...params }) -> ExchangeRate</code>
- <code title="get /settings/currencies/2026-03/central-fx-rates/information">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">getInformation</a>() -> CentralExchangeRatesInformation</code>
- <code title="get /settings/currencies/2026-03/central-fx-rates/unsupported-currencies">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">getUnsupportedCurrencies</a>() -> CollectionResponseCurrencyCodeInfoNoPaging</code>

### ExchangeRates

Methods:

- <code title="post /settings/currencies/2026-03/exchange-rates">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">createExchangeRate</a>({ ...params }) -> ExchangeRate</code>
- <code title="get /settings/currencies/2026-03/exchange-rates/{exchangeRateId}">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">getExchangeRateByID</a>(exchangeRateID) -> ExchangeRate</code>
- <code title="get /settings/currencies/2026-03/exchange-rates/current">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">listCurrentExchangeRates</a>() -> CollectionResponseExchangeRateNoPaging</code>
- <code title="get /settings/currencies/2026-03/exchange-rates">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">listExchangeRates</a>({ ...params }) -> ExchangeRatesPage</code>
- <code title="patch /settings/currencies/2026-03/exchange-rates/{exchangeRateId}">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">updateExchangeRate</a>(exchangeRateID, { ...params }) -> ExchangeRate</code>
- <code title="post /settings/currencies/2026-03/exchange-rates/update-visibility">client.settings.currencies.exchangeRates.<a href="./src/resources/settings/currencies/exchange-rates/exchange-rates.ts">updateVisibility</a>({ ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /settings/currencies/2026-03/exchange-rates/batch/create">client.settings.currencies.exchangeRates.batch.<a href="./src/resources/settings/currencies/exchange-rates/batch.ts">create</a>({ ...params }) -> BatchResponseExchangeRate</code>
- <code title="post /settings/currencies/2026-03/exchange-rates/batch/update">client.settings.currencies.exchangeRates.batch.<a href="./src/resources/settings/currencies/exchange-rates/batch.ts">update</a>({ ...params }) -> BatchResponseExchangeRate</code>
- <code title="post /settings/currencies/2026-03/exchange-rates/batch/read">client.settings.currencies.exchangeRates.batch.<a href="./src/resources/settings/currencies/exchange-rates/batch.ts">get</a>({ ...params }) -> BatchResponseExchangeRate</code>

## TaxRates

Types:

- <code><a href="./src/resources/settings/tax-rates.ts">CollectionResponsePublicTaxRateGroupForwardPaging</a></code>
- <code><a href="./src/resources/settings/tax-rates.ts">PublicTaxRateGroup</a></code>

Methods:

- <code title="get /tax-rates/2026-03/tax-rates">client.settings.taxRates.<a href="./src/resources/settings/tax-rates.ts">list</a>({ ...params }) -> PublicTaxRateGroupsPage</code>
- <code title="get /tax-rates/2026-03/tax-rates/{taxRateGroupId}">client.settings.taxRates.<a href="./src/resources/settings/tax-rates.ts">get</a>(taxRateGroupID) -> PublicTaxRateGroup</code>

## Users

Types:

- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicPermissionSetNoPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicTeamNoPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">CollectionResponsePublicUserForwardPaging</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicPermissionSet</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicTeam</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicUser</a></code>
- <code><a href="./src/resources/settings/users.ts">PublicUserUpdate</a></code>
- <code><a href="./src/resources/settings/users.ts">UserProvisionRequest</a></code>

Methods:

- <code title="post /settings/users/2026-03">client.settings.users.<a href="./src/resources/settings/users.ts">create</a>({ ...params }) -> PublicUser</code>
- <code title="put /settings/users/2026-03/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">update</a>(userID, { ...params }) -> PublicUser</code>
- <code title="get /settings/users/2026-03">client.settings.users.<a href="./src/resources/settings/users.ts">list</a>({ ...params }) -> PublicUsersPage</code>
- <code title="delete /settings/users/2026-03/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /settings/users/2026-03/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">get</a>(userID, { ...params }) -> PublicUser</code>
- <code title="get /settings/users/2026-03/roles">client.settings.users.<a href="./src/resources/settings/users.ts">listRoles</a>() -> CollectionResponsePublicPermissionSetNoPaging</code>
- <code title="get /settings/users/2026-03/teams">client.settings.users.<a href="./src/resources/settings/users.ts">listTeams</a>() -> CollectionResponsePublicTeamNoPaging</code>
