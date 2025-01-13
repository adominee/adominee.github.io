import Link from 'next/link'
import { client } from '../../lib/microcms'

type Props = {
  id: string,
  title: string,
}

async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      fields: 'id,title',
      limit: 5,
    }
  });

  return data.contents
}

export default async function BlogList() {
  const posts = await getBlogPosts()

  return (
    <div className='container w-4/6 mx-auto my-10'>
      <h1>記事一覧</h1>
      <ul>
        {
          posts.map((post: Props) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}