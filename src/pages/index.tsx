import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { getAllPosts } from '../../lib/api'
import Post from '../../interfaces/post'

type Props = {
  allPosts: Post[]
}

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const articleList = [
    { title: '文章1', content: '文章1内容', path: '/article/1' },
    { title: '文章1', content: '文章1内容', path: '/article/1' },
    { title: '文章1', content: '文章1内容', path: '/article/1' },

  ]

  return (
    <>
      <Head>
        <title>文本朗读</title>
        <meta name="description" content="文本朗读" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        {articleList.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <div className="border rounded-md border-slate-300 shadow-md m-4 p-4">
                <h2 className="text-xl font-bold pb-4">
                  {item.title}
                </h2>
                <p>{item.content}</p>
              </div>
            </Link>
          )
        })}
      </main>
    </>
  );
};

export default Home;
