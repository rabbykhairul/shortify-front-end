import http from "./httpService";

const SHORT_URL_API_END_POINT = "http://localhost:3000/api/short-url";

const getShortUrl = async (originalURL) => {
  try {
    const { data } = await http.post(SHORT_URL_API_END_POINT, {
      originalURL,
    });

    return `${window.location.href}${data.shortCode}`;
  } catch (err) {
    console.log(err.response);
  }

  return undefined;
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

export { getShortUrl, getOriginalUrl, formatUrl };
