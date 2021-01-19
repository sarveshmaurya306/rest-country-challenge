import React from 'react'
import '../style/style.css'

function header() {
    return (
        <div className="py-3 main_heading heading_style">
                <div className="heading container">
                <h3 className="h3">Where in the world?</h3>
                <span>
                    <span className="p-2"><i className="far fa-moon"></i></span>
                    <span>Dark Mode</span>
                </span>
            </div>
        </div>
    )
}

export default header
