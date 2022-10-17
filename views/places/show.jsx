const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comment yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sunRating = data.place.comments.reduce((tot, c)=>{
            return tot + c.stars
        }, 0)
        let averageRating = sunRating / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                </div>
                <h1>{data.place.name}</h1>
                <h2>rating</h2>
                 {rating}
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    serving {data.place.cuisine}
                </h4>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    <hr />
                    <h2>Comments</h2>
                    {comments}
                </form>
                <form method="POST" action={`/places/${data.id}`} id="comment">
                    <div>
                        <div>
                            <input
                                id="rant"
                                name="rant"
                                type="checkbox"
                                value="Rant"
                            />
                            <label htmlFor="rant">Rant</label>
                        </div>
                        <div>
                            <label htmlFor="author">Author</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="Content">Content</label>
                            <input
                                id="content"
                                name="content"
                                type="textarea"
                            />
                        </div>
                        <div>
                            <label htmlFor="stars">Star Rating</label>
                            <input
                                id="constarstent"
                                name="stars"
                                type="range"
                                min="1"
                                max="5"
                                step="0.5"
                            />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show
