import { useRouter } from 'next/router'

function BlogPostsPages() {


  const router = useRouter();

  console.log(router.pathname);

  console.log(router.query);

  return (
    <div>
      <h1>BlogPostsPages</h1>
    </div>
  )
}

export default BlogPostsPages;