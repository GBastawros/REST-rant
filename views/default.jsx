const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav className='navbar navbar-dark bg-primary'>
                    <ul className='mx-auto'>
                        <li className='nav-item'>
                            <a href="/">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/places">Places</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                <div className='wrapper'>
                    {html.children}
                </div>
                <footer className='footer'>Creator's <a href="https://github.com/cfdebug">GitHub </a>and <a href="https://www.linkedin.com/in/christopher-frisque-6a928898/">Linkedin</a>
                    <div>Copyright Christopher Frisque 2020-{new Date().getFullYear()}</div>
                </footer>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
            </body>
        </html>
    )
  }
  

module.exports = Def
