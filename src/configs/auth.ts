const authConfig = {
  meEndpoint: '/auth/me',

  //loginEndpoint: '/jwt/login',
  loginEndpoint: '/security-guard/allow-to-enter',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}

export default authConfig
