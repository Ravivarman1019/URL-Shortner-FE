import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('/api/url');
        setUrls(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h1>Your URLs</h1>
      <ul>
        {urls.map(url => (
          <li key={url._id}>{url.shortUrl} - {url.originalUrl}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
