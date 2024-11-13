import React from 'react'
import { postApi } from '../services/postApi';
import Link from 'next/link';

export const metadata = {
  title: {
    absolute: 'posts'
  },
  description: "all posts",
};

async function PostPage() {
  const postData = await postApi();
  console.log("🚀 ~ PostPage ~ postData:", postData);

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {
        postData.slice(0, 10).map((post) => {
          const { userId, id, title, body } = post;

          return (
            <div key={id} className='border-2 w-6/12'>
              <h1>title: {title}</h1>
              <h2>userId: {userId}</h2>
              <p>body: {body}</p>
              <button className='p-2 text-white bg-blue-500 rounded-md'>
                <Link href={`/posts/${id}`}>see details</Link>
              </button>
            </div>
          );

        })
      }
    </div>
  )
}

export default PostPage;