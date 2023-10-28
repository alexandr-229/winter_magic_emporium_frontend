export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const getGoogleUrl = () => {
  const options: Record<string, string> = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL || '',
    scope: process.env.NEXT_PUBLIC_GOOGLE_SCOPE || '',
    response_type: 'code',
    prompt: 'consent',
    access_type: 'offline',
  };

  const root = 'https://accounts.google.com/o/oauth2/auth';
  const query = new URLSearchParams(options).toString();
  const result = `${root}?${query}`;

  return result;
};

export const googleOauth = () => {
  const url = getGoogleUrl();
  window.location.href = url;
};
