import Layout from '../../components/layout/main'

const Blog = ({ title, readable_publish_date, body_html, url }) => {
    return <>
        <Layout title="Ushieru's Blog">
            <section className='text-gray-300 px-2 my-4 sm:container'>
                <h1 className='text-2xl font-bold text-left w-full'>{title}</h1>
                <div className='flex justify-between'>
                    <p className='text-gray-500'>{readable_publish_date}</p>
                    <a href={url} target='_blank' rel='noreferrer' className='text-gray-500 underline'>Post Original</a>
                </div>
            </section>
            <article
                className={`px-2 sm:container overflow-auto flex-grow text-gray-500 
                    prose lg:prose-xl
                    prose-headings:text-gray-300 prose-blockquote:text-gray-500
                    prose-a:text-gray-500 prose-code:text-gray-200 prose-img:m-auto 
                    prose-strong:font-bold prose-strong:text-gray-500`}
                dangerouslySetInnerHTML={{ __html: body_html.replace(/href/g, "target='_blank' rel='noreferrer' href") }} />
            <p className='text-gray-500 my-1 sm:container w-full text-right'>Powered by <a className='underline' href="https://dev.to/">dev.to</a></p>
        </Layout>
    </>
}

export const getStaticPaths = async (ctx) => {
    const response = await fetch("https://dev.to/api/articles?username=ushieru")
    const jsonResponse = await response.json()
    return {
        paths: jsonResponse.slice(0, 10).map(({ id }) => ({ params: { id: id.toString() } })),
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {
    const { id } = params;

    const response = await fetch(`https://dev.to/api/articles/${id}`)
    const jsonResponse = await response.json()

    if (jsonResponse.status == 404)
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }

    return {
        props: {
            ...jsonResponse
        },
        revalidate: 86400, // 60 * 60 * 24,
    }
}

export default Blog
