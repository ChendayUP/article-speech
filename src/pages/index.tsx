import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
// import { getAllPosts } from '../../lib/api'
import Post from '../interfaces/post'
import { populateVoiceList, sayInput } from '../utils/speech';
type Props = {
  allPosts: Post[]
}

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // const articleList = [
  //   { title: '文章1', content: '文章1内容', path: '/article/1' },
  //   { title: '文章1', content: '文章1内容', path: '/article/1' },
  //   { title: '文章1', content: '文章1内容', path: '/article/1' },
  // ]
  const ctx = api.useContext();

  const articleList = api.articles.getAllPosts.useQuery();
  const list = articleList.data || []
  console.log('articleList', list)
  const data = populateVoiceList();
  console.log('populateVoiceList', data);
  return (
    <>
      <Head>
        <title>文本朗读</title>
        <meta name="description" content="文本朗读" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        {list.map((item, index) => {
          return (
            <Link key={index}
              as={`/articles/${item.slug}`}
              href="/articles/[slug]"
              className="">
              <div className="border rounded-md border-slate-300 shadow-md m-4 pl-4 pr-4 pb-4">
                <div className="flex justify-between items-center pb-4">
                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>
                  <p>{item.date}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </Link>
          )
        })}
        {
          data.map((item: any, index: any) => {
            return (
              <>
                <div className="flex flex-row justify-items-start items-center">
                  <span>{item.name}</span>
                  <span>{item.lang}</span>
                  <span>{item.voiceURI}</span>
                </div>
                
              </>
            )
          })
        }
      </main>
    </>
  );
};

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }


export default Home;
