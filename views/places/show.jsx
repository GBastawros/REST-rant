const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className = "col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                </div>
                <h1>{data.place.name}</h1>
                <h2>rating</h2>
                <p>Not rated yet</p>
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    serving {data.place.cuisine}
                </h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_methpd=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show
