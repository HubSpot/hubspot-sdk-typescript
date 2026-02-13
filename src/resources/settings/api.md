# Settings

## Currencies

Types:

- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchInputExchangeRateCreateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchInputExchangeRateUpdateRequest</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchResponseExchangeRate</a></code>
- <code><a href="./src/resources/settings/currencies/currencies.ts">BatchResponseExchangeRateWithErrors</a></code>
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

- <code title="post /settings/v3/currencies/exchange-rates/batch/create">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">batchCreate</a>({ ...params }) -> BatchResponseExchangeRate</code>
- <code title="post /settings/v3/currencies/exchange-rates/batch/read">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">batchGet</a>({ ...params }) -> BatchResponseExchangeRate</code>
- <code title="post /settings/v3/currencies/exchange-rates/batch/update">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">batchUpdate</a>({ ...params }) -> BatchResponseExchangeRate</code>
- <code title="post /settings/v3/currencies/exchange-rates">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">createExchangeRate</a>({ ...params }) -> ExchangeRate</code>
- <code title="get /settings/v3/currencies/company-currency">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">getCompanyCurrency</a>() -> CompanyCurrency</code>
- <code title="get /settings/v3/currencies/exchange-rates/{exchangeRateId}">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">getExchangeRateByID</a>(exchangeRateID) -> ExchangeRate</code>
- <code title="get /settings/v3/currencies/codes">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">listCodes</a>() -> CollectionResponseCurrencyCodeInfoNoPaging</code>
- <code title="get /settings/v3/currencies/exchange-rates/current">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">listCurrentExchangeRates</a>() -> CollectionResponseExchangeRateNoPaging</code>
- <code title="get /settings/v3/currencies/exchange-rates">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">listExchangeRates</a>({ ...params }) -> ExchangeRatesPage</code>
- <code title="put /settings/v3/currencies/company-currency">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">updateCompanyCurrency</a>({ ...params }) -> CompanyCurrency</code>
- <code title="patch /settings/v3/currencies/exchange-rates/{exchangeRateId}">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">updateExchangeRate</a>(exchangeRateID, { ...params }) -> ExchangeRate</code>
- <code title="post /settings/v3/currencies/exchange-rates/update-visibility">client.settings.currencies.<a href="./src/resources/settings/currencies/currencies.ts">updateVisibility</a>({ ...params }) -> void</code>

### CentralFxRates

Methods:

- <code title="post /settings/v3/currencies/central-fx-rates/add-currency">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">createCurrency</a>({ ...params }) -> ExchangeRate</code>
- <code title="get /settings/v3/currencies/central-fx-rates/information">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">getInformation</a>() -> CentralExchangeRatesInformation</code>
- <code title="get /settings/v3/currencies/central-fx-rates/unsupported-currencies">client.settings.currencies.centralFxRates.<a href="./src/resources/settings/currencies/central-fx-rates.ts">getUnsupportedCurrencies</a>() -> CollectionResponseCurrencyCodeInfoNoPaging</code>

## TaxRates

Types:

- <code><a href="./src/resources/settings/tax-rates.ts">CollectionResponsePublicTaxRateGroupForwardPaging</a></code>
- <code><a href="./src/resources/settings/tax-rates.ts">PublicTaxRateGroup</a></code>

Methods:

- <code title="get /tax-rates/v1/tax-rates">client.settings.taxRates.<a href="./src/resources/settings/tax-rates.ts">list</a>({ ...params }) -> PublicTaxRateGroupsPage</code>
- <code title="get /tax-rates/v1/tax-rates/{taxRateGroupId}">client.settings.taxRates.<a href="./src/resources/settings/tax-rates.ts">get</a>(taxRateGroupID) -> PublicTaxRateGroup</code>

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

- <code title="post /settings/v3/users/">client.settings.users.<a href="./src/resources/settings/users.ts">create</a>({ ...params }) -> PublicUser</code>
- <code title="put /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">update</a>(userID, { ...params }) -> PublicUser</code>
- <code title="get /settings/v3/users/">client.settings.users.<a href="./src/resources/settings/users.ts">list</a>({ ...params }) -> PublicUsersPage</code>
- <code title="delete /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">delete</a>(userID, { ...params }) -> void</code>
- <code title="get /settings/v3/users/{userId}">client.settings.users.<a href="./src/resources/settings/users.ts">get</a>(userID, { ...params }) -> PublicUser</code>
- <code title="get /settings/v3/users/roles">client.settings.users.<a href="./src/resources/settings/users.ts">listRoles</a>() -> CollectionResponsePublicPermissionSetNoPaging</code>
- <code title="get /settings/v3/users/teams">client.settings.users.<a href="./src/resources/settings/users.ts">listTeams</a>() -> CollectionResponsePublicTeamNoPaging</code>
