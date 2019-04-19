import path from 'path'
import React from 'react'
import { renderToStringAsync } from 'react-async-ssr'
import { ServerLocation } from '@reach/router'

import App from '../../ui/core/app'

module.exports = async server => {
  await server.route({
    method: 'GET',
    path: '/files/{param*}',
    handler: {
      directory: {
        path: path.resolve(process.cwd(), './build/ui'),
        redirectToSlash: true,
        index: true,
      },
    },
  })

  await server.route({
    method: 'GET',
    path: '/{path*}',
    config: {
      handler: async (request, h) => {
        console.log('request.url', request.url)

        const markup = await renderToStringAsync(
          <ServerLocation url={request.url.pathname}>
            <App />
          </ServerLocation>
        )

        const page = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
          <title>Headstart</title>
          <link href="/files/main.css" rel="stylesheet" />
        </head>

        <body>
          <div id="root" class="container">${markup}</div>
          <script type="text/javascript" src="/files/bundle.js"></script>
        </body>

        </html>`
        console.log(page)
        return page
      },
    },
  })
}
