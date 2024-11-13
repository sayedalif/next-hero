import React from 'react'

export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log("🚀 ~ generateMetadata ~ data:", data);
  
  return {
    title: `${data.title}`,
    description: `${data.body}`,
    keywords: data.body.split(' '),
  }
}

const getPostDetails = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  return data;
}
async function PostDetailsPage({ params }) {
  const postId = (await params).id;
  const postDetails = await getPostDetails(postId);

  const { userId, id, title, body } = postDetails;
  return (
    <div>
      <h1>title: {title}</h1>
      <h2>userId: {userId}</h2>
      <p>body: {body}</p>
    </div>
  )
}

export default PostDetailsPage;