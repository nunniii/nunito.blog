import Link from 'next/link';

import React from 'react';
import posts from '../data/postsData.json';


const Publications: React.FC = () => {
  return (
    <div>
      <h1>Selecione um Post</h1>
      <ul className='publications'>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/slug/${index}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;

