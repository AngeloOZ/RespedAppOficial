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