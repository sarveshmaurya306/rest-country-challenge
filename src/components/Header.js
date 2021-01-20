import React from 'react'
import '../style/style.css'
function header(props) {
    
    const [theme, setTheme] = props.Theme;
    
    const handleClick = () => {
        
        if(theme==='light')
            setTheme('dark')
        else
            setTheme('light')
    }
    return (
        <div className="py-3 main_heading heading_style">
                <div className="heading container">
                <h3 className="h3">Where in the world?</h3>
                <span onClick={handleClick} style={{cursor:'pointer'}}>
                    <span className="p-2"><i className="far fa-moon"></i></span>
                    <span>{theme} Mode</span>
                </span>
            </div>
        </div>
    )
}

export default header
