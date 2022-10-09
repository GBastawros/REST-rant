const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h2>rating</h2>
                <p>Not rated yet</p>
                <h2>Comments</h2>
                <p>No Comments yet</p>
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