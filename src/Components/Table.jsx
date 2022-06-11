import React from 'react'

export default function Table() {
    return (
        <div>
            <div className="container text-center mt-5 mb-2 text-dark">
                <h1 className="">Your Tasks</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>First Title</td>
                            <td>First Location</td>
                            <td>First Description</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
