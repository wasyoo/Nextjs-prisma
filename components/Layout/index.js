import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Cart from '../Cart';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width:576px){
    max-width:540px;
  }
  @media (min-width:768px){
    max-width:720px;
  }
  @media (min-width:992px){
    max-width:960px;
  }
  @media (min-width:1200px){
    max-width:1140px;
  }
`;


export default ({children, title="Welcome"}) => (
  <>
    <Head>
      <title>
        {title}
      </title>
    </Head>
    <Header />
    <Cart />
    <Container>
      {children}
    </Container>
    {/* <Footer /> */}
  </>
)