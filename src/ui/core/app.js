import React, { Fragment, Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { lazy } from '@loadable/component'
import { Router } from '@reach/router'
import client from './client'
import '../styles/base.css'

const About = lazy(() => import('../features/about'))
const Home = lazy(() => import('../features/home'))
const Contact = lazy(() => import('../features/contact'))

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <h1>Headstart</h1>
        <Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </Suspense>
      </Fragment>
    </ApolloProvider>
  )
}
