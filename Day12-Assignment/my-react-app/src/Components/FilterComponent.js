import { useEffect, useState } from 'react'
import stateData from '../utils/states.json'
import useList from './useList.js'


const FilterComponent = () => {
    const [stateName, setStateName] = useState("Maharashtra");
    const [cityName, setCityName] = useState("");
    const cityList = useList(stateName);
    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <select value={stateName} onChange={(e) => setStateName(e.target.value)}>{Object.keys(stateData).map((state) => (
                <option key={state} value={state}>{state}</option>
            ))}</select>

            <select value={cityName} onChange={(e) => { setCityName(e.target.value) }}>{cityList.map((city) => (
                <option key={city} value={city} >{city}</option>
            ))}</select>
        </form>
    )
}

export default FilterComponent