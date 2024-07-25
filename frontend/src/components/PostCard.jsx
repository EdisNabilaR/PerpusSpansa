import React from 'react';

const PostCard = ({ title, content }) => (
  <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default PostCard;