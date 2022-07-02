import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => <Html>
    <Head>
        <meta name='application-name' content='Ushieru' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Ushieru' />
        <meta name='description' content="Ushieru's App" />
        <meta name='format-detection' content='telephone=no' />
        <meta name='theme-color' content='#000000' />

        <link rel='icon' type='image/png' sizes='192x192' href='/icons/icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='256x256' href='/icons/icon-256x256.png' />
        <link rel='manifest' href='/manifest.json' />

        <meta property='og:type' content='Ushieru' />
        <meta property='og:title' content='Ushieru' />
        <meta property='og:description' content="Ushieru's App" />
        <meta property='og:site_name' content="Ushieru's App" />
        <meta property='og:url' content='https://ushieru.com' />
        <meta property='og:image' content='https://ushieru.com/icons/icon-192x192.png' />

        <link rel="icon" href="/favicon.svg" />

    </Head>
    <body>
        <Main />
        <NextScript />
    </body>
</Html>

export default Document