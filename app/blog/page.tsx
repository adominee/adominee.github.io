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
      <h1 className='mb-16'>記事一覧</h1>
      {
        posts.length === 0 ?
          <p>ごめんなさい！記事が見つかりませんでした。</p>
          :
          <ul className='list-none'>
            {
              posts.map((post: Props) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <div className='border-y-2 border-zinc-500 p-4'>
                      {post.title}
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
      }
    </div>
  )
}