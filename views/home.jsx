const React = require('react')
const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1 className='text-primary'>REST-Rant</h1>
            <div>
                <img className='home-img' src="/images/nachos.jpg" alt="Nachos" />
                <img className='home-img' src="/images/italian.png" alt="Italian Food" />
                <img className='home-img' src="/images/chinese.jpg" alt="Chinese Food" />
                <img className='home-img' src="/images/american.jpg" alt="American Food" />
                <div>
                Photos by various artists on <a href="https://unsplash.com/s/photos/mexican-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash, </a><a href="https://www.chefdenise.com/all/what-to-eat-in-italy-1">Chef Denise, </a><a href='https://www.istockphoto.com/photo/chinese-food-blank-background-gm545286388-98216699?phrase=chinese%20food'>iStock, and </a><a href='https://www.pexels.com/search/american%20food/'>Pexels.</a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary blink">Have a Restaurant Review in Mind? Help others avoid a disaster, or find the perfect meal! CLICK HERE to Explore, Rant, or Rave!</button>
            </a>

        </main>
    </Def>
    )
}

module.exports = home
