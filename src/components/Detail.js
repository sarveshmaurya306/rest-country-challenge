import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../style/style.css'

function Detail() {
    const history = useHistory();
    var select;
    try {
        select = window.localStorage.getItem('url');
    } catch (error) {
        history.push('/')
    }
    const [contry, setContry] = useState('')

    useEffect(() => {
        axios({
            method: 'get',
            url: select
        }).then(r => {
            setContry(r.data[0])
        }).catch(e => {
            console.log(e)
        })
    }, [select])
    function handleBack() {
        history.push('/')
    }
    return (
        <div className="container">
            {
                !contry ? 'Loading...' : <div>
                    <div style={{ paddingTop: '6rem' }} className="pb-5">
                        <button onClick={handleBack} className=" button px-3 py-2" style={{ width: '10rem' }} ><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp;Back</button>
                    </div>
                    <div className="row" >
                        <div className="col-12 col-lg-5"><img className="img-fluid" src={contry.flag} alt="flag" /></div>
                        <div className="col-lg-2"></div>
                        <div className="col-12 col-lg-5 mt-4 d-flex justify-content-between" style={{ flexDirection: 'column' }}>

                            <h1>{contry.name}</h1>
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <div className="my-1"><b>Native Name: </b>{contry.nativeName}</div>
                                    <div className="my-1"><b>Population: </b>{contry.population}</div>
                                    <div className="my-1"><b>Region: </b>{contry.region}</div>
                                    <div className="my-1"><b>Sub Region: </b>{contry.subregion}</div>
                                    <div className="my-1"><b>Capital: </b>{contry.capital}</div>
                                </div>
                                <div className="col-6">
                                    <div className="my-1"><b>Top Level Domain: </b>{contry.topLevelDomain}</div>
                                    <div className="my-1"><b>Currencies: </b>{contry.currencies[0].code}</div>
                                    <div className="my-1"><b>Languages: </b>{contry.languages.map((i, index) => {
                                        if (index !== 0) {
                                            return i.name;
                                        } else {
                                            return i.name + ", ";
                                        }
                                    })}</div>
                                </div>
                            </div>
                            
                            <br />
                            <br />
                            <div className="row">
                                <b >Border Countries:&nbsp; &nbsp;</b>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }} className="mt-3">
                                    {contry.borders.map((item, index) => {
                                        return <div key={index} className="mx-1">
                                            <Border code={item}/>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Detail


function Border(props) {
    const [border, setBorder] = useState('');
    
    const code = props.code;
    console.log(code)
    
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://restcountries.eu/rest/v2/alpha/${code}?fields=name`
        }).then(r => {
            setBorder(r.data.name)
        }).catch(e => console.log(e))
    },[code])
    return (<div>
        <p className="button px-3 py-2">{border}</p>
    </div>)
}