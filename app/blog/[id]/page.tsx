import { client } from '../../../utils/microcms'
import dayjs from 'dayjs'

type Props = {
  id: string,
  title: string,
  body: string,
  publishedAt: string,
  updatedAt: string,
  category: {
    name: string,
  },
}


// microCMS から記事を取得
async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: 'blog',
    contentId: id,
  });

  return data
}

// 記事本体の生成
export default async function BlogPostPage({params}:{params: Promise<{id: string}>}) {
  const { id } = await params
  const post = await getBlogPost(id)

  const publishDate = dayjs(post.publishedAt).format('YYYY-MM-DD')
  const updateDate = dayjs(post.updatedAt).format('YYYY-MM-DD')

  return (
    <div className='container w-4/6 mx-auto my-10'>
      <div className='mb-10'>
        <h1 className='text-2xl mb-3'>{post.title}</h1>
        <p className='text-xs'>公開日:{publishDate}</p>
        {publishDate !== updateDate && <p className='text-xs'>更新日:{updateDate}</p>}
      </div>
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  ) 
}

export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'blog' })

  return contentIds.map((contentId) => ({
    id: contentId
  }))
}