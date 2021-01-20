
import React from 'react'
import '../style/style.css'
import {useHistory} from 'react-router-dom'

function Body(props) {
    const history = useHistory();
    const selection = (name) => {
        window.localStorage.setItem('url', `https://restcountries.eu/rest/v2/name/${name}/?fullText=true`)
        history.push('/detail')
    }

    const data = props.CountryData;
    return (
        <div style={{minHeight:'100vh'}}>
            {
                !data ? '' : <div className="container d-flex justify-content-around" style={{width:'100vw', flexWrap:'wrap'}}>
                    {
                        data.map((country, index) => {
                            return <div className="p-4" key={index} onClick={e=>selection(country.name)} >
                                <div className="main_heading" style={{ cursor:'pointer',width: '250px', height:330}}>
                                    <div>
                                        <img className="img-fluid" src={country.flag} alt="flag" style={{ width: '250px' ,height:'166.6px'}} />
                                    </div>
                                    <div className="container p-3" style={{ display: 'flex', flexDirection: 'column', height: 133.4, justifyContent:'space-between' }}>
                                        <h5 className="py-2">{country.name}</h5>
                                        <div style={{ display: 'flex', flexDirection: 'column', height:'213.4'}}>
                                            <div><b>Population: </b>{country.population}</div>
                                            <div><b>Region: </b>{country.region}</div>
                                            <div><b>Capital: </b>{country.capital}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Body
