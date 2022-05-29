import { useState } from 'react'
import Layout from './../components/layout/main'

const Blog = ({ articles, tags }) => {
    const [currentTag, setCurrentTag] = useState('')

    return <>
        <Layout title="Ushieru's Blog">
            <div className='sm:container px-4 mb-2 mt-4'>
                <div className='flex gap-2'>
                    <p>Filter by:</p>
                    <select
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        className='border border-gray-700 bg-black text-gray-300 rounded-lg px-2'
                    >
                        <option defaultChecked>all</option>
                        {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                    </select>
                </div>
            </div>
            <div className="overflow-auto px-2 sm:container flex-grow">
                <div className="grid grid-cols-1 auto-rows-max gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
                    {articles
                        .filter(article => currentTag === '' || currentTag === 'all' || article.tag_list.includes(currentTag))
                        .map((article) => (
                            <a
                                key={article.id}
                                href={article.url}
                                target="_blank"
                                className="flex flex-col border border-gray-700 rounded p-4"
                            >
                                <div className="flex justify-between">
                                    <p className="truncate font-bold text-lg">{article.title}</p>
                                    <div className="w-10" />
                                    <p className="flex-shrink-0">{article.readable_publish_date}</p>
                                </div>
                                <p className="mt-8 flex-grow">{article.description}</p>
                                <p className="text-right mt-8">{article.tags}</p>
                            </a>
                        ))}
                </div>
            </div>
            <div className="h-10" />
        </Layout>
    </>
}

export const getStaticProps = async () => {
    const response = await fetch("https://dev.to/api/articles?username=ushieru")
    const jsonResponse = await response.json()
    const tags = new Set()
    jsonResponse.forEach((article) =>
        article.tag_list.forEach((tag) => tags.add(tag)))
    return {
        props: {
            articles: jsonResponse,
            tags: Array.from(tags)
        },
        revalidate: 21600 // 6 hours
    }
}

export default Blog