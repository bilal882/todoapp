import React from 'react'
import Inputs from './Inputs'

export default function Cards() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12">
                    <div class="card shadow mt-3 " style={{ width: '40rem' }} >
                        <div class="card-body">
                            <Inputs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
