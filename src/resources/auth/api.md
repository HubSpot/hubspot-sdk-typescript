# Auth

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">AccessTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">RefreshTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">SignedAccessToken</a></code>
- <code><a href="./src/resources/auth/oauth.ts">TokenResponseIf</a></code>

Methods:

- <code title="post /oauth/v1/token">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">createAccessToken</a>({ ...params }) -> TokenResponseIf</code>
- <code title="delete /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">deleteRefreshToken</a>(token) -> void</code>
- <code title="get /oauth/v1/access-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">getAccessToken</a>(token) -> AccessTokenInfoResponse</code>
- <code title="get /oauth/v1/refresh-tokens/{token}">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">getRefreshToken</a>(token) -> RefreshTokenInfoResponse</code>
