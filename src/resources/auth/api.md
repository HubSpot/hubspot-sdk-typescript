# Auth

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">PublicAccessTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">PublicRefreshTokenInfoResponse</a></code>
- <code><a href="./src/resources/auth/oauth.ts">SignedAccessToken</a></code>
- <code><a href="./src/resources/auth/oauth.ts">TokenInfoResponseBaseIf</a></code>

Methods:

- <code title="post /oauth/2026-03/token">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">createToken</a>({ ...params }) -> Response</code>
- <code title="post /oauth/2026-03/token/introspect">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">introspectToken</a>({ ...params }) -> TokenInfoResponseBaseIf</code>
- <code title="post /oauth/2026-03/token/revoke">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">revokeToken</a>({ ...params }) -> Response</code>
