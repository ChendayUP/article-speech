
import Head from "next/head";
import { populateVoiceList, sayInput } from '../utils/speech';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

const VoiceList = () => {
  const router = useRouter()
  const [voiceList, setVoiceList] = useState<any>([]);

  useEffect(() => {
    const fetchVoices = () => {
      // try {
        // window.speechSynthesis.onvoiceschanged = () => {
          const data = populateVoiceList();
          console.log('populateVoiceList', data);
          setVoiceList(data);
      //   };
      // } catch (err) {
      //   console.log(err);
      // }
    };
    fetchVoices();
    // const data = populateVoiceList();
    //       console.log('populateVoiceList', data);
  }, []);
  return (
    <>
      <Head>
        <title>文本朗读</title>
        <meta name="description" content="文本朗读" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
      <button className='mt-4 bg-blue-600 text-white py-1 px-4 rounded-md' onClick={()=> {router.back()}}>返回</button>
        {
          voiceList.length > 0 ?
          voiceList.map((item: any, index: any) => {
            return (
              <>
                <div key={index} className="flex flex-row justify-items-start items-center">
                  <span>{item.name}</span>
                  <span>{item.lang}</span>
                  <span>{item.voiceURI}</span>
                </div>
                
              </>
            )
          }) : <div>暂无数据</div>
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


export default VoiceList;
