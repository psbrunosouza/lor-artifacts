import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pt-BR'>
                <Head>
                    <link
                        rel="preload"
                        href="/assets/fonts/ring-bearer.ttf"
                        as="font"
                        type="font/ringbearer"
                        crossOrigin="anonymous"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,900;1,400;1,700&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        );
    }
}