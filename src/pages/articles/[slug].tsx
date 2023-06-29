import { useRouter } from 'next/router'
import { api } from "~/utils/api";
import type PostType from '../../interfaces/post'
import markdownToHtml from '../../utils/markdownToHtml'
import React, { useState, useEffect } from 'react';
import { populateVoiceList, sayInput } from '../../utils/speech';
import voiceProps from '../../interfaces/speech';
import { Select, Space } from 'antd';
import { text } from 'node:stream/consumers';
import Controls from '../../components/controls';
// type Props = {
//   post: PostType
//   morePosts: PostType[]
//   preview?: boolean
// }


export default function Post() {
  const [content, setContent] = useState('')
  const [textInput, setTextInput] = useState('');
  const [voiceList, setVoiceList] = useState<any>([]);
  const [voiceOptions, setVoiceOptions] = useState<[{ name: string, label: string }]>([{name: 'Alex', label: 'Alex - en-US'}]);
  const [voice, setVoice] = useState('Microsoft David - English (United States)');
  const [pitch, setPitch] = useState<number>(1);
  const [rate, setRate] = useState<number>(1);

  const router = useRouter()
  // console.log('Post router', router.query.slug as string);
  let slug = router.query.slug as string || ''
  // if (!slug) {
  //   return (
  //     <div>没有数据</div>
  //   )
  // }
  console.log('Post slug start', slug);
  
  const post = api.articles.getPostBySlug.useQuery({slug: slug}).data || {}
  console.log('Post post end', post);

  markdownToHtml(post.content || '').then((data) => { 
    console.log('markdownToHtml');
    setContent(data)
  })
 
  // 查询 #号并替换
  const replaceText = () => {
    const reg = /#/g;
    const contentReplace = post.content?.replace(reg, '') || ''
    console.log('replaceText');
    setTextInput(contentReplace)
  }
  const handleBack = () => {
    router.back()
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleSubmit = (e: any) => {
    // e.preventDefault();
    console.log('handleSubmit', e);
    textInput.length && sayInput(textInput, e.voice, e.pitch, e.rate);
  };

  useEffect(() => {
    replaceText()
  }, [post.content])

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

  useEffect(() => {
    setVoiceOptions(
      voiceList.length ? (
        voiceList?.map(({ name, lang }: voiceProps, i: number) => (
          { value: name, label: `${name} - ${lang}` }
        ))
      ) : (
        { value: `Alex`, label: `Alex - en-US` }
      )
    );
  }, [voiceList]);
  useEffect(() => {
    setVoice((prevVoice: any) =>
      voiceList.length > 0
        ? voiceList?.filter((voice: any) => voice.default)[0].name
        : prevVoice
    );
  }, [voiceList]);
  // const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  if (!slug) {
    return (
      <div>没有数据</div>
    )
  }
  return (
    <div className="p-4">
      <button className='mt-4 bg-blue-600 text-white py-1 px-4 rounded-md' onClick={handleBack}>返回</button>
      {/* <button className='mt-4 bg-blue-600 text-white py-1 px-4 rounded-md' onClick={handleSubmit}>开始播放</button> */}
      <Controls voice={voice} voiceOptions={voiceOptions} onSubmit={handleSubmit}/>
      {/* <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-bold">
          {post.title}
        </h2>
        <p>{post.date}</p>
      </div>
      <p className='mb-4'>{post.description}</p> */}
      {/* {post.content} */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* <p className='text-right mt-4'>{post.date}</p> */}
    </div>
  )
}

// type Params = {
//   params: {
//     slug: string
//   }
// }

// export async function getStaticProps({params}: Params) {
//   console.log('getStaticProps api', params);
  
//   const post = api.articles.getPostBySlug.useQuery({slug: params.slug}).data || {}
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content
//       },
//     },
//   }
// }

// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" };
//   console.log('getStaticPaths api', api, api.articles.getAllPosts);
  
//   const posts = api.articles.getAllPosts.useQuery().data || []
//   // const posts = [{slug: '1-section'}]

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {  
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }
