import React from 'react'

export default function Inputs() {
    return (
        <div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <input type="text" className='form-control' placeholder='Title' />
                    </div>
                    <div class="col">
                        <input type="text" className='form-control' placeholder='Location' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <textarea className='form-control ml-2 mt-2' placeholder='Description' cols="10" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div className="row container">
                <div className="col mt-2">
                    <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn btn-danger w-50 '>Add Task</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
