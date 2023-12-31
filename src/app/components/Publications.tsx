import Link from 'next/link';

import React from 'react';
import posts from '../data/postsData.json';


const Publications: React.FC = () => {
  return (
    <div>
      <ul className='publications'>
        <li>
          <Link href="/slug/nuniLab">Nuni Lab
          </Link>
        </li>
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

