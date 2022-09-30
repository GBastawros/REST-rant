const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/wasa-crispbread-lcSfW7qkA-E-unsplash.jpg" alt="cripd bread" />
              Photo by <a href="https://unsplash.com/@wasacrispbread?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wasa Crispbread</a> on <a href="https://unsplash.com/explore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </main>
      </Def>
    )
  }
  

module.exports = error404
