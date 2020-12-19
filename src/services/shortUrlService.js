import http from "./httpService";

const SHORT_URL_API_END_POINT =
  "https://shortify-back-end.herokuapp.com/api/short-url";

const getShortUrl = async (originalURL) => {
  const { data } = await http.post(SHORT_URL_API_END_POINT, {
    originalURL,
  });

  return `${window.location.href}${data.shortCode}`;
};

const getOriginalUrl = async (shortCode) => {
  try {
    const { data } = await http.get(
      `${SHORT_URL_API_END_POINT}?shortCode=${shortCode}`
    );
    return data.originalURL;
  } catch (err) {
    console.log(err.response);
  }

  return undefined;
};

const startsWithProperProtocol = (url) => {
  return (
    url.toLowerCase().startsWith("https://") ||
    url.toLowerCase().startsWith("http://") ||
    url.toLowerCase().startsWith("ftp://")
  );
};

const formatUrl = (url) => {
  const urlString = startsWithProperProtocol(url) ? url : `https://${url}`;

  try {
    const encodedUrl = new URL(urlString);
    return encodedUrl.href;
  } catch (err) {
    return undefined;
  }
};

const isValidUrl = (url) => {
  return formatUrl(url) ? true : false;
};

export { getShortUrl, getOriginalUrl, formatUrl, isValidUrl };
