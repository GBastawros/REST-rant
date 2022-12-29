const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
            <div>
                <img className='error' src="/images/404.png" alt="404 ERROR" />
                <div>
                Photo by Byron Redhead on <a href="https://firstpage.com.au/learning-centre/seo/404-pages-quick-tips-to-create-custom-error-pages/#">FirstPage</a>
                </div>
            </div>
            <a href="/">
                <button className="btn-primary">Home Page</button>
            </a>
      </Def>
    )
  }
  

module.exports = error404
