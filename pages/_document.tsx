import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import TopBar from "../components/topbar";

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head title={'Url shortener'} />
        <body>
        <Main></Main>
        <NextScript />
        <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;