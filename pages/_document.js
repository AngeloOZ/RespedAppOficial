import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initalProps = await Document.getInitialProps(ctx)

      return initalProps
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
               <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
               />
               <meta name="description" content="El Fogón de COZ es un restaurante que ofrece los mejores platos a la parrilla con la mejor sazón" />
               <link rel="icon" href="/favicon.ico" />

               <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
               <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument