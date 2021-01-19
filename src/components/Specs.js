import React, {useState, useEffect} from 'react'
import '../style/style.css'
import axios from 'axios'
import Body from './Body'

function Specs() {


    const [data, setData] = useState('')
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('');

    const callMore = (def='', tempSearch='') => {
        var url;
        if (!tempSearch) {
            url= 'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital'
        }
        if (def === 'region') {
            if(tempSearch)
                url = `https://restcountries.eu/rest/v2/region/${tempSearch}?fields=flag;name;population;region;capital`
            else
                url = 'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital'
        }
        if (def === 'search' && tempSearch) {
            url =`https://restcountries.eu/rest/v2/name/${tempSearch}?fields=flag;name;population;region;capital`
        }
        axios({
            method: 'get',
            url,
        }).then(r => {
            setData(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
    useEffect(() => {
        callMore('search', search);
    }, [search]);
    useEffect(() => {
        callMore('region', filter);
    }, [filter]);
    useEffect(() => {
        callMore('', '');
    }, []);
    
    return (
        <div>
            {
                !data ? '' : <div>
                    <div className="container " style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '6rem',
                        paddingBottom: '3rem'
                    }}>
                        <input className="p-3 input_style" type="text" placeholder="Search for a country..." style={{
                            width: '40%',
                        }} onChange={e=>setSearch(e.target.value)}/>
                        <select className="p-3 input_style" onChange={e=>setFilter(e.target.value)}>
                            <option value=''>Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
                    <Body CountryData={data} />
                </div>
            }
        </div>
    )
}

export default Specs
