export const getJWTCookies = (name: string): string | null => {
  const cname = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
};

export const clearJWTCookies = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const authService = {
  getRefreshToken: () => {
    return getJWTCookies("refresh_token") as string;
  },
  getAccessToken: () => {
    return getJWTCookies("access_token") as string;
  },
  // set access token and refresh token to cookie in develop env
  setAccessToken: (token: string) => {
    const ttlSeconds = 60 * 60 * 24 * 30;
    document.cookie = `access_token=${token}; path=/; SameSite=Lax; Expires=${new Date(Date.now() + ttlSeconds * 1000)}`;
  },

  setRefreshToken: (token: string) => {
    const ttlSeconds = 60 * 60 * 24 * 30;
    document.cookie = `refresh_token=${token}; path=/; SameSite=Lax; Expires=${new Date(Date.now() + ttlSeconds * 1000)}`;
  },
};

export default authService;
