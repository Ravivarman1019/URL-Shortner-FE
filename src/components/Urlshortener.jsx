import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/url/shorten', { originalUrl: url });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL to shorten" required />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && <div>Shortened URL: {shortUrl}</div>}
    </div>
  );
};

export default UrlShortener;
