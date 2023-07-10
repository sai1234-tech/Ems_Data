import React, { useState, useEffect } from 'react'

function Layout2() {
  const [country, setCountry] = useState( );
  const [state, setState] = useState( );
  const [city, setCity] = useState( );

  // const [country, setCountry] = useState([]);
  // const [state, setState] = useState([]);
  // const [city, setCity] = useState([]);

  //for filter the state and citys
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([])
  const countries = [
    {
        name: "Andhra Pradesh",
        states: [
          {
            "dist_id": 1,
            "dist_name": "Alluri Sitharama Raju",
            "created_id": "Admin",
            "created_date": "2023-02-22T14:00:30Z",
            "updated_id": "Admin",
            "updated_date": "2023-02-22T14:00:30Z",
            "state": 1,
            cities: ["area 3", "area 4"]
  
        },
        {
            "dist_id": 2,
            "dist_name": "Anakapalli",
            "created_id": "Admin",
            "created_date": "2023-02-22T14:00:34Z",
            "updated_id": "Admin",
            "updated_date": "2023-02-22T14:00:34Z",
            "state": 1,
            cities: ["area 3", "area 4"]
  
        },
        {
          "dist_id": 3,
          "dist_name": "Anantapuramu",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:36Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:36Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 4,
          "dist_name": "Annamayya",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:39Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:39Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 5,
          "dist_name": "Bapatla",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:43Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:43Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 6,
          "dist_name": "Chittoor",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:45Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:45Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 7,
          "dist_name": "Dr. B.R. Ambedkar Konaseema",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:51Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:51Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 8,
          "dist_name": "East Godavari",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:53Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:53Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 9,
          "dist_name": "Eluru",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:55Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:55Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 10,
          "dist_name": "Guntur",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:00:58Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:00:58Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 11,
          "dist_name": "Kakinada",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:00Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:00Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 12,
          "dist_name": "Krishna",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:02Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:02Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 13,
          "dist_name": "Kurnool",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:04Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:04Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 14,
          "dist_name": "Nandyal",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:06Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:06Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 15,
          "dist_name": "NTR",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:10Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:10Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 16,
          "dist_name": "Palnadu",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:12Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:12Z",
          "state": 1,
          cities: ["area 3", "area 4"]
  
      },
      {
          "dist_id": 17,
          "dist_name": "Prakasam",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:15Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:15Z",
          "state": 1
      },
      {
          "dist_id": 18,
          "dist_name": "Parvathipuram Manyam",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:27Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:27Z",
          "state": 1
      },
      {
          "dist_id": 19,
          "dist_name": "Sri Potti Sriramulu Nellore",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:33Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:33Z",
          "state": 1
      },
      {
          "dist_id": 20,
          "dist_name": "Sri Sathya Sai",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:36Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:36Z",
          "state": 1
      },
      {
          "dist_id": 21,
          "dist_name": "Srikakulam",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:41Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:41Z",
          "state": 1
      },
      {
          "dist_id": 22,
          "dist_name": "Tirupati",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:43Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:43Z",
          "state": 1
      },
      {
          "dist_id": 23,
          "dist_name": "Visakhapatnam",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:45Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:45Z",
          "state": 1
      },
      {
          "dist_id": 24,
          "dist_name": "Vizianagaram",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:47Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:47Z",
          "state": 1
      },
      {
          "dist_id": 25,
          "dist_name": "West Godavari",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:50Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:50Z",
          "state": 1
      },
      {
          "dist_id": 26,
          "dist_name": "YSR",
          "created_id": "Admin",
          "created_date": "2023-02-22T14:01:52Z",
          "updated_id": "Admin",
          "updated_date": "2023-02-22T14:01:52Z",
          "state": 1
      },
         
        ],
    },
    { name:'Telangana',
      "state_id": 2,
      "state_code": "TS",
      "state_name": "Telangana",
      "created_id": "",
      "created_date": "2023-02-22T11:07:29Z",
      "updated_id": "",
      "updated_date": "2023-02-22T11:07:29Z",
      "country": 1
  },
  {name:'Tamil Nadu',
      "state_id": 3,
      "state_code": "TN",
      "state_name": "Tamil Nadu",
      "created_id": "",
      "created_date": "2023-02-22T11:07:29Z",
      "updated_id": "",
      "updated_date": "2023-02-22T11:07:29Z",
      "country": 1
  }
  ]

  useEffect(()=>{
    setCountry()
  },)
  
      const changeCountry = (event) => {
        event.preventDefault();
  
        setCountry(event.target.value);
        //filter city from state on select
        setStates(countries.find(ctr => ctr.name === event.target.value).states)
  
    }
    const changeState = (event) => {
        event.preventDefault();
  
        setState(event.target.value)
        //filder city city from state on slect
        // setCities(states.find(state => state.name === event.target.value).cities);
    }
  return (
    <div>
             <div class="form">

<div class="col-md-5 styled-select mt-5">

    <select className="form-control" name="countrys" id="countrys"
        value={country} onChange={changeCountry}
    >
        <option>Select State</option>
        {/* {countries.map(ctr => (
            <option value={ctr.name}>{ctr.name}</option>
        ))} */}

        {countries.map((ctr)=>{
          return(
            <option key={ctr.name}>{ctr.name}</option>
          )
        })}
    </select>
</div>
<div class="col-md-5 styled-select styled_select2 mt-5">
    <select className="form-control" value={state} onChange={changeState}>
        <option>Select Constituency</option>
        {states?states.map((state)=>(
          <option value={state.dist_id}>{state.dist_name}</option>
        )):null}
{/* 
        {states.map(state => (
            <option value={state.name}>{state.name}</option>
        ))} */}


{/* dist_name */}
    </select>
</div>
</div>
    </div>
  )
}

export default Layout2