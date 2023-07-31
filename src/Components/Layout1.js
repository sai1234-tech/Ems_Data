import React, { useState, useEffect, useRef } from 'react'
import close from '../../src/Components/Assests/close.png'
import open from '../Components/Assests/open.png'
import './Layout.css';
import emailjs from '@emailjs/browser';

import Cart from '../Components/Assests/cartIcon.png'
import CarouselImg1 from '../Components/Assests/CarouselImg1.png'
import CarouselImg2 from '../Components/Assests/CarouselImg2.png'
import CarouselImg3 from '../Components/Assests/CarouselImg3.png'
import CarouselImg4 from '../Components/Assests/CarouselImg4.png'
import EmsLogo from '../Components/Assests/EmsLogo.png'
import Map from '../Components/Assests/map.png'
import VoterSheet from '../Components/Assests/man with tab.png'
import VotterSheet2 from '../Components/Assests/voter data image.png'
import VoterSheet3 from '../Components/Assests/poolingbooth data image.png'
import VooterSheet4 from '../Components/Assests/Anaylsis image.png'
import Analysis from '../Components/Assests/Analysis.png';
import HandPin from '../Components/Assests/HandPin.png'
import HandPin2 from '../Components/Assests/HandPin2.png'
import Transform from '../Components/Assests/Transform.png'
import Rectangle1 from '../Components/Assests/Reactangleindpendency.png'
import PinGroup from '../Components/Assests/Group.png'
import Line from '../Components/Assests/Line.png'
import NewPin from '../Components/Assests/NewPinImg.png'
import DropArrow from '../Components/Assests/droparrow.png'
import Select from 'react-select'
import ClipLoader from "react-spinners/ClipLoader";
// import countries from './data.json';
import Popup from 'reactjs-popup';
import { Helmet } from 'react-helmet';
// import {DATA} from '../Components/data'
function Layout1() {
    // const {productName,price,name} = props.data;

    const [isOpened, setIsOpened] = useState(false);
    //countries are state
    const [country, setCountry] = useState('');
    const [state, setState] = useState(null);
    const [city, setCity] = useState('');

    //for filter the state and citys
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selected, setSelected] = useState(null);
    const [selectedState, setselectedState] = useState();
    const [selectedConstituency, setselectedConstituency] = useState();

    const [selectedOption, setSelectedOption] = useState('');

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [formconstituency, setFormconstituency] = useState('');
    const [description, setDescription] = useState('');

    const [stateList, setStateList] = useState('');
    const [constituencyList, setConstituencyList] = useState('');


    const [selectedCountry, setSelectedCountry] = useState('');
    const [stateNames, setStateNames] = useState([]);

    const [allstatevalues, setallstateValues]=useState(null)


    const form = useRef();
    const handleOpenClick = () => {
        setIsOpened(!isOpened);
        if (isOpened === true) {
        }
        if (isOpened === false) {
        }
    };

    const countries = [
        {
            name: "Andhra Pradesh",
            value: 'AP',
            label: 'AP',
            states: [
                {
                    value: 'AS',
                    label: 'AS',
                    "dist_id": 1,
                    "dist_name": "Ichchapuram",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:30Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:30Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 2,
                    "dist_name": "Palasa",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:34Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:34Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 3,
                    "dist_name": "Tekkali",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:36Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:36Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 4,
                    "dist_name": "Pathapatnam",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:39Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:39Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 5,
                    "dist_name": "Srikakulam",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:43Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:43Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 6,
                    "dist_name": "Amadalavalasa",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:45Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:45Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 7,
                    "dist_name": "Etcherla",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:51Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:51Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 8,
                    "dist_name": "Narasannapeta",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:53Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:53Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 9,
                    "dist_name": "Rajam",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:55Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:55Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 10,
                    "dist_name": "Palakonda",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:00:58Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:00:58Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 11,
                    "dist_name": "Kurupam",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:00Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:00Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 12,
                    "dist_name": "Parvathipuram",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:02Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:02Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 13,
                    "dist_name": "Salur",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:04Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:04Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 14,
                    "dist_name": "Bobbili",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:06Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:06Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 15,
                    "dist_name": "Cheepurupalli",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:10Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:10Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]

                },
                {
                    "dist_id": 16,
                    "dist_name": "Gajapathinagaram",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:12Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:12Z",
                    "state": 1,
                    cities: ["area 3", "area 4"]
                },
                {
                    "dist_id": 17,
                    "dist_name": "Nellimarla",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:15Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:15Z",
                    "state": 1
                },
                {
                    "dist_id": 18,
                    "dist_name": "Vizianagaram",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:27Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:27Z",
                    "state": 1
                },
                {
                    "dist_id": 19,
                    "dist_name": "Srungavarapukota",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:33Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:33Z",
                    "state": 1
                },
                {
                    "dist_id": 20,
                    "dist_name": "Bhimili",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:36Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:36Z",
                    "state": 1
                },
                {
                    "dist_id": 21,
                    "dist_name": "Visakhapatnam East",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:41Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:41Z",
                    "state": 1
                },
                {
                    "dist_id": 22,
                    "dist_name": "Visakhapatnam South",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:43Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:43Z",
                    "state": 1
                },
                {
                    "dist_id": 23,
                    "dist_name": "Visakhapatnam North",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:45Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:45Z",
                    "state": 1
                },
                {
                    "dist_id": 24,
                    "dist_name": "Visakhapatnam West",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:47Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:47Z",
                    "state": 1
                },
                {
                    "dist_id": 25,
                    "dist_name": "Gajuwaka",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:50Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:50Z",
                    "state": 1
                },
                {
                    "dist_id": 26,
                    "dist_name": "Chodavaram",
                    "created_id": "Admin",
                    "created_date": "2023-02-22T14:01:52Z",
                    "updated_id": "Admin",
                    "updated_date": "2023-02-22T14:01:52Z",
                    "state": 1
                },
                {
                    "dist_id": 27,
                    "dist_name": "Madugula",
                },
                {
                    "dist_id": 28,
                    "dist_name": "Araku Valley",
                },
                {
                    "dist_id": 29,
                    "dist_name": "Paderu",
                },
                {
                    "dist_id": 30,
                    "dist_name": "Anakapalle",
                },
                {
                    "dist_id": 31,
                    "dist_name": "Pendurthi",
                },
                {
                    "dist_id": 32,
                    "dist_name": "Elamanchili",
                },
                {
                    "dist_id": 33,
                    "dist_name": "Payakaraopet",
                },
                {
                    "dist_id": 34,
                    "dist_name": "Narsipatnam",
                },
                {
                    "dist_id": 35,
                    "dist_name": "Tuni",
                },
                {
                    "dist_id": 36,
                    "dist_name": "Prathipadu",
                },
                {
                    "dist_id": 37,
                    "dist_name": "Pithapuram",
                },
                {
                    "dist_id": 38,
                    "dist_name": "Kakinada Rural",
                },
                {
                    "dist_id": 39,
                    "dist_name": "Peddapuram",
                },
                {
                    "dist_id": 40,
                    "dist_name": "Anaparthy",
                },
                {
                    "dist_id": 41,
                    "dist_name": "Kakinada City",
                },
                {
                    "dist_id": 42,
                    "dist_name": "Ramachandrapuram",
                },
                {
                    "dist_id": 43,
                    "dist_name": "Mummidivaram",
                },
                {
                    "dist_id": 44,
                    "dist_name": "Amalapuram",
                },
                {
                    "dist_id": 45,
                    "dist_name": "Razole",
                },
                {
                    "dist_id": 46,
                    "dist_name": "Gannavaram",
                },
                {
                    "dist_id": 47,
                    "dist_name": "Kothapeta",
                },
                {
                    "dist_id": 48,
                    "dist_name": "Mandapeta",
                },
                {
                    "dist_id": 49,
                    "dist_name": "Rajanagaram",
                },
                {
                    "dist_id": 50,
                    "dist_name": "Rajahmundry City",
                },
                {
                    "dist_id": 51,
                    "dist_name": "Rajahmundry Rural",
                },
                {
                    "dist_id": 52,
                    "dist_name": "Jaggampeta",
                },
                {
                    "dist_id": 53,
                    "dist_name": "Ramapachodavaram",
                },
                {
                    "dist_id": 54,
                    "dist_name": "Kovvur",
                },
                {
                    "dist_id": 55,
                    "dist_name": "Nidadavole",
                },
                {
                    "dist_id": 56,
                    "dist_name": "Achanta",
                },
                {
                    "dist_id": 57,
                    "dist_name": "Palakollu",
                },
                {
                    "dist_id": 58,
                    "dist_name": "Narsapuram",
                },
                {
                    "dist_id": 59,
                    "dist_name": "Bhimavaram",
                },
                {
                    "dist_id": 60,
                    "dist_name": "Undi",
                },
                {
                    "dist_id": 61,
                    "dist_name": "Tanuku",
                },
                {
                    "dist_id": 62,
                    "dist_name": "Tadepalligudem",
                },
                {
                    "dist_id": 63,
                    "dist_name": "Unguturu",
                },
                {
                    "dist_id": 64,
                    "dist_name": "Denduluru",
                },
                {
                    "dist_id": 65,
                    "dist_name": "Eluru",
                },
                {
                    "dist_id": 66,
                    "dist_name": "Gopalapuram",
                },
                {
                    "dist_id": 67,
                    "dist_name": "Polavaram",
                },
                {
                    "dist_id": 68,
                    "dist_name": "Chitalapudi",
                },
                {
                    "dist_id": 69,
                    "dist_name": "Tiruvuru",
                },
                {
                    "dist_id": 70,
                    "dist_name": "Nuzvid",
                },
                {
                    "dist_id": 71,
                    "dist_name": "Gannavaram",
                },
                {
                    "dist_id": 72,
                    "dist_name": "Gudivada",
                },
                {
                    "dist_id": 73,
                    "dist_name": "Kaikalur",
                },
                {
                    "dist_id": 74,
                    "dist_name": "Pedana",
                },
                {
                    "dist_id": 75,
                    "dist_name": "Machilipatnam",
                },
                {
                    "dist_id": 76,
                    "dist_name": "Avanigadda",
                },
                {
                    "dist_id": 77,
                    "dist_name": "Pamarru",
                },
                {
                    "dist_id": 78,
                    "dist_name": "Penamaluru",
                },
                {
                    "dist_id": 79,
                    "dist_name": "Vijayawada West",
                },
                {
                    "dist_id": 80,
                    "dist_name": "Vijayawada Central",
                },
                {
                    "dist_id": 81,
                    "dist_name": "Vijayawada East",
                },

                {
                    "dist_id": 82,
                    "dist_name": "Mylavaram",
                },
                {
                    "dist_id": 83,
                    "dist_name": "Nandigama",
                },
                {
                    "dist_id": 84,
                    "dist_name": "Jaggayyapeta",
                },
                {
                    "dist_id": 85,
                    "dist_name": "Pedakurapadu",
                },
                {
                    "dist_id": 86,
                    "dist_name": "Tadikonda",
                },
                {
                    "dist_id": 87,
                    "dist_name": "Mangalagiri",
                },
                {
                    "dist_id": 88,
                    "dist_name": "Ponnuru",
                },
                {
                    "dist_id": 89,
                    "dist_name": "Vemuru",
                },
                {
                    "dist_id": 90,
                    "dist_name": "Repalle",
                },
                {
                    "dist_id": 91,
                    "dist_name": "Tenali",
                },
                {
                    "dist_id": 92,
                    "dist_name": "Bapatla",
                },
                {
                    "dist_id": 93,
                    "dist_name": "Prathipadu",
                },
                {
                    "dist_id": 94,
                    "dist_name": "Guntur West",
                },
                {
                    "dist_id": 95,
                    "dist_name": "Guntur West",
                },
                {
                    "dist_id": 96,
                    "dist_name": "Chilakaluripet",
                },
                {
                    "dist_id": 97,
                    "dist_name": "Narasaraopet",
                },
                {
                    "dist_id": 98,
                    "dist_name": "Sattenapalle",
                },
                {
                    "dist_id": 99,
                    "dist_name": "Vinukonda",
                },
                {
                    "dist_id": 100,
                    "dist_name": "Gurajala",
                },
                {
                    "dist_id": 101,
                    "dist_name": "Macherla",
                },
                {
                    "dist_id": 102,
                    "dist_name": "Yerrgondapalem",
                },
                {
                    "dist_id": 103,
                    "dist_name": "Darsi",
                },
                {
                    "dist_id": 104,
                    "dist_name": "Parchur",
                },
                {
                    "dist_id": 105,
                    "dist_name": "Addanki",
                },
                {
                    "dist_id": 106,
                    "dist_name": "Chirala",
                },
                {
                    "dist_id": 107,
                    "dist_name": "Santhanuthalapadu",
                },
                {
                    "dist_id": 108,
                    "dist_name": "Ongole",
                },
                {
                    "dist_id": 109,
                    "dist_name": "Kandukur",
                },
                {
                    "dist_id": 110,
                    "dist_name": "Kondapi",
                },
                {
                    "dist_id": 111,
                    "dist_name": "Markapuram",
                },
                {
                    "dist_id": 112,
                    "dist_name": "Giddalur",
                },
                {
                    "dist_id": 113,
                    "dist_name": "Kanigiri",
                },
                {
                    "dist_id": 114,
                    "dist_name": "Kavali",
                },
                {
                    "dist_id": 115,
                    "dist_name": "Atmakur",
                },
                {
                    "dist_id": 116,
                    "dist_name": "Kovur",
                },
                {
                    "dist_id": 117,
                    "dist_name": "Nellore City",
                },
                {
                    "dist_id": 118,
                    "dist_name": "Nellore Rural",
                },
                {
                    "dist_id": 119,
                    "dist_name": "Sarvepalli",
                },
                {
                    "dist_id": 120,
                    "dist_name": "Gudur",
                },
                {
                    "dist_id": 121,
                    "dist_name": "Sullurpeta",
                },
                {
                    "dist_id": 122,
                    "dist_name": "Venkatagiri",
                },
                {
                    "dist_id": 123,
                    "dist_name": "Udayagiri",
                },

                {
                    "dist_id": 124,
                    "dist_name": "Badvel",
                },
                {
                    "dist_id": 125,
                    "dist_name": "Rajampet",
                },
                {
                    "dist_id": 126,
                    "dist_name": "Kadapa",
                },
                {
                    "dist_id": 127,
                    "dist_name": "Kodur",
                },
                {
                    "dist_id": 128,
                    "dist_name": "Rayachoti",
                },
                {
                    "dist_id": 129,
                    "dist_name": "Pulivendla",
                },
                {
                    "dist_id": 130,
                    "dist_name": "Kamalapuram",
                },
                {
                    "dist_id": 131,
                    "dist_name": "Jammalamadugu",
                },
                {
                    "dist_id": 132,
                    "dist_name": "Proddatur",
                },
                {
                    "dist_id": 133,
                    "dist_name": "Mydukur",
                },
                {
                    "dist_id": 134,
                    "dist_name": "Allagadda",
                },
                {
                    "dist_id": 135,
                    "dist_name": "Srisailam",
                },
                {
                    "dist_id": 136,
                    "dist_name": "Nandikotkur",
                },
                {
                    "dist_id": 137,
                    "dist_name": "Kurnool",
                },
                {
                    "dist_id": 138,
                    "dist_name": "Panyam",
                },
                {
                    "dist_id": 139,
                    "dist_name": "Nandyal",
                },
                {
                    "dist_id": 140,
                    "dist_name": "Banaganapalle",
                },
                {
                    "dist_id": 141,
                    "dist_name": "Dhone",
                },
                {
                    "dist_id": 142,
                    "dist_name": "Pattikonda",
                },
                {
                    "dist_id": 143,
                    "dist_name": "Kondumur",
                },
                {
                    "dist_id": 144,
                    "dist_name": "Yemmiganur",
                },
                {
                    "dist_id": 145,
                    "dist_name": "Mantralayam",
                },
                {
                    "dist_id": 146,
                    "dist_name": "Adoni",
                },
                {
                    "dist_id": 147,
                    "dist_name": "Alur",
                },
                {
                    "dist_id": 148,
                    "dist_name": "Royadurg",
                },
                {
                    "dist_id": 149,
                    "dist_name": "Uravakonda",
                },
                {
                    "dist_id": 150,
                    "dist_name": "Guntakal",
                },
                {
                    "dist_id": 151,
                    "dist_name": "Tadipatri",
                },
                {
                    "dist_id": 152,
                    "dist_name": "Singanamala",
                },
                {
                    "dist_id": 153,
                    "dist_name": "Anantapur Urban",
                },
                {
                    "dist_id": 154,
                    "dist_name": "Kalyandurg",
                },
                {
                    "dist_id": 155,
                    "dist_name": "Rapatadu",
                },
                {
                    "dist_id": 156,
                    "dist_name": "Madakasira",
                },
                {
                    "dist_id": 157,
                    "dist_name": "Hindupur",
                },
                {
                    "dist_id": 158,
                    "dist_name": "Penukonda",
                },
                {
                    "dist_id": 159,
                    "dist_name": "Puttaparthi",
                },
                {
                    "dist_id": 160,
                    "dist_name": "Dharmavaram",
                },
                {
                    "dist_id": 161,
                    "dist_name": "Kadiri",
                },
                {
                    "dist_id": 162,
                    "dist_name": "Thamballapalle",
                },
                {
                    "dist_id": 163,
                    "dist_name": "Pileru",
                },
                {
                    "dist_id": 164,
                    "dist_name": "Madanapalle",
                },
                {
                    "dist_id": 165,
                    "dist_name": "Punganur",
                },
                {
                    "dist_id": 166,
                    "dist_name": "Chandragiri",
                },
                {
                    "dist_id": 167,
                    "dist_name": "Tirupati",
                },
                {
                    "dist_id": 168,
                    "dist_name": "Srikalahasti",
                },
                {
                    "dist_id": 169,
                    "dist_name": "Sathyavedu",
                },
                {
                    "dist_id": 170,
                    "dist_name": "Nagari",
                },
                {
                    "dist_id": 171,
                    "dist_name": "Gangadhara Nellore",
                },
                {
                    "dist_id": 172,
                    "dist_name": "Chittor",
                },
                {
                    "dist_id": 173,
                    "dist_name": "Puthalapattu",
                },
                {
                    "dist_id": 174,
                    "dist_name": "Palamaner",
                },
                {
                    "dist_id": 175,
                    "dist_name": "Kuppam",
                },

            ],
        },

        {
            "Id": "2",
            name: "Arunachal Pradesh",
            "value": "0",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Lumla",
                    "state": 2,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Tawang",
                    "state": 2,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Mukto",
                    "state": 2,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Dirang",
                    "state": 2,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Kalaktang",
                    "state": 2,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Thrizino-Buragaon",
                    "state": 2,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Bomdila",
                    "state": 2
                },
                {
                    "dist_id": 8,
                    "dist_name": "Bameng",
                    "state": 2
                },
                {
                    "dist_id": 9,
                    "dist_name": "Chayangtajo",
                    "state": 2
                },
                {
                    "dist_id": 10,
                    "dist_name": "Seppa East",
                    "state": 2
                },
                {
                    "dist_id": 11,
                    "dist_name": "Seppa West",
                    "state": 2
                },
                {
                    "dist_id": 12,
                    "dist_name": "Pakke-Kessang",
                    "state": 2
                },
                {
                    "dist_id": 13,
                    "dist_name": "Itanagar",
                    "state": 2
                },
                {
                    "dist_id": 14,
                    "dist_name": "Doimukh",
                    "state": 2
                },
                {
                    "dist_id": 15,
                    "dist_name": "Sagalee",
                    "state": 2
                },
                {
                    "dist_id": 16,
                    "dist_name": "Yachuli",
                    "state": 2
                },
                {
                    "dist_id": 17,
                    "dist_name": "Ziro-Hapoli",
                    "state": 2
                },
                {
                    "dist_id": 18,
                    "dist_name": "Palin",
                    "state": 2
                },
                {
                    "dist_id": 19,
                    "dist_name": "	Nyapin",
                    "state": 2
                },
                {
                    "dist_id": 20,
                    "dist_name": "Tali",
                    "state": 2
                },
                {
                    "dist_id": 21,
                    "dist_name": "Koloriang",
                    "state": 2
                },
                {
                    "dist_id": 22,
                    "dist_name": "Nacho",
                    "state": 2
                },
                {
                    "dist_id": 23,
                    "dist_name": "Taliha",
                    "state": 2
                },
                {
                    "dist_id": 24,
                    "dist_name": "Daporijo",
                    "state": 2
                },
                {
                    "dist_id": 25,
                    "dist_name": "Raga",
                    "state": 2
                },
                {
                    "dist_id": 26,
                    "dist_name": "Dumporijo",
                    "state": 2
                },
                {
                    "dist_id": 27,
                    "dist_name": "Liromoba",
                    "state": 2
                },
                {
                    "dist_id": 28,
                    "dist_name": "Likabali",
                    "state": 2
                },
                {
                    "dist_id": 29,
                    "dist_name": "Basar",
                    "state": 2
                },
                {
                    "dist_id": 30,
                    "dist_name": "Along West",
                    "state": 2
                },
                {
                    "dist_id": 31,
                    "dist_name": "Along East",
                    "state": 2
                },
                {
                    "dist_id": 32,
                    "dist_name": "Rumgong",
                    "state": 2
                },
                {
                    "dist_id": 33,
                    "dist_name": "Mechuka",
                    "state": 2
                },
                {
                    "dist_id": 34,
                    "dist_name": "Tuting-Yingkiong",
                    "state": 2
                },
                {
                    "dist_id": 35,
                    "dist_name": "Pangin",
                    "state": 2
                },
                {
                    "dist_id": 36,
                    "dist_name": "Nari-Koyu",
                    "state": 2
                },
                {
                    "dist_id": 37,
                    "dist_name": "Pasighat West",
                    "state": 2
                },
                {
                    "dist_id": 38,
                    "dist_name": "Pasighat East",
                    "state": 2
                },
                {
                    "dist_id": 39,
                    "dist_name": "Mebo",
                    "state": 2
                },
                {
                    "dist_id": 40,
                    "dist_name": "Mariyang-Geku",
                    "state": 2
                },
                {
                    "dist_id": 41,
                    "dist_name": "Anini",
                    "state": 2
                },
                {
                    "dist_id": 42,
                    "dist_name": "Dambuk",
                    "state": 2
                },
                {
                    "dist_id": 43,
                    "dist_name": "Roing",
                    "state": 2
                },
                {
                    "dist_id": 44,
                    "dist_name": "	Tezu",
                    "state": 2
                },
                {
                    "dist_id": 45,
                    "dist_name": "	Hayuliang",
                    "state": 2
                },
                {
                    "dist_id": 46,
                    "dist_name": "Chowkham",
                    "state": 2
                },
                {
                    "dist_id": 47,
                    "dist_name": "Namsai",
                    "state": 2
                },
                {
                    "dist_id": 48,
                    "dist_name": "Lekang",
                    "state": 2
                },
                {
                    "dist_id": 49,
                    "dist_name": "Bordumsa-Diyun",
                    "state": 2
                },
                {
                    "dist_id": 50,
                    "dist_name": "	Miao",
                    "state": 2
                },
                {
                    "dist_id": 51,
                    "dist_name": "Nampong",
                    "state": 2
                },
                {
                    "dist_id": 52,
                    "dist_name": "Changlang South",
                    "state": 2
                },
                {
                    "dist_id": 53,
                    "dist_name": "	Changlang North",
                    "state": 2
                },
                {
                    "dist_id": 54,
                    "dist_name": "Namsang",
                    "state": 2
                },
                {
                    "dist_id": 55,
                    "dist_name": "Khonsa East",
                    "state": 2
                },
                {
                    "dist_id": 56,
                    "dist_name": "Khonsa West",
                    "state": 2
                },
                {
                    "dist_id": 57,
                    "dist_name": "Borduria-Bogapani",
                    "state": 2
                },
                {
                    "dist_id": 58,
                    "dist_name": "Kanubari",
                    "state": 2
                },
                {
                    "dist_id": 59,
                    "dist_name": "Longding-Pumao",
                    "state": 2
                },
                {
                    "dist_id": 60,
                    "dist_name": "Pongchau-Wakka",
                    "state": 2
                },

            ]
        },
        {
            "Id": "3",
            name: "Assam",
            "value": "0",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Ratabari (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Patharkandi",
                    "state": 3,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Karimganji North",
                    "state": 3,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Karimganji South",
                    "state": 3,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Badarpur",
                    "state": 3,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Hailakandi",
                    "state": 3,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Katilcherra",
                    "state": 3,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Algapur",
                    "state": 3,
                },

                {
                    "dist_id": 9,
                    "dist_name": "Silchar",
                    "state": 3,
                },
                {
                    "dist_id": 10,
                    "dist_name": "Sonai",
                    "state": 3,
                },
                {
                    "dist_id": 11,
                    "dist_name": "Dholai (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 12,
                    "dist_name": "Udharbond ",
                    "state": 3,
                }, {
                    "dist_id": 13,
                    "dist_name": "Lakhipur",
                    "state": 3,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Barkhola",
                    "state": 3,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Katigorah",
                    "state": 3,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Haflong",
                    "state": 3,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Bokajan (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Howraghat (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Diphu (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Baithalangso (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Mankachar",
                    "state": 3,
                },
                {
                    "dist_id": 22,
                    "dist_name": "Salmara South",
                    "state": 3,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Dhubri",
                    "state": 3,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Gauripur",
                    "state": 3,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Galakganji",
                    "state": 3,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Bilasipara West",
                    "state": 3,
                },
                {
                    "dist_id": 27,
                    "dist_name": "Bilasipara East",
                    "state": 3,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Gossaigaon",
                    "state": 3,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Kokrajhar West (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 30,
                    "dist_name": "Kokrajhar East (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Sidli (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Bongaigaon",
                    "state": 3,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Bijni",
                    "state": 3,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Abhayapuri North",
                    "state": 3,
                },
                {
                    "dist_id": 35,
                    "dist_name": "Abhayapuri South (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Dudhnai (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Goalpara East",
                    "state": 3,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Goalpara West",
                    "state": 3,
                },
                {
                    "dist_id": 39,
                    "dist_name": "Jalweswar",
                    "state": 3,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Sorbhog",
                    "state": 3,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Bhabanipur",
                    "state": 3,
                },

                {
                    "dist_id": 42,
                    "dist_name": "Patacharkuchi",
                    "state": 3,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Barpeta",
                    "state": 3,
                },
                {
                    "dist_id": 44,
                    "dist_name": "Jania",
                    "state": 3,
                }, {
                    "dist_id": 45,
                    "dist_name": "Boghbor",
                    "state": 3,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Sarukhetri",
                    "state": 3,
                },
                {
                    "dist_id": 47,
                    "dist_name": "Chenga",
                    "state": 3,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Boko (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 49,
                    "dist_name": "Chaygaon",
                    "state": 3,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Palasbari",
                    "state": 3,
                },
                {
                    "dist_id": 51,
                    "dist_name": "Jalukbari",
                    "state": 3,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Dispur",
                    "state": 3,
                },
                {
                    "dist_id": 53,
                    "dist_name": "Gauhati East",
                    "state": 3,
                },
                {
                    "dist_id": 54,
                    "dist_name": "Gauhati West",
                    "state": 3,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Hajo",
                    "state": 3,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Kamalpur",
                    "state": 3,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Rangia",
                    "state": 3,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Tamulpur",
                    "state": 3,
                },
                {
                    "dist_id": 59,
                    "dist_name": "Nalbari",
                    "state": 3,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Barkhetry",
                    "state": 3,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Dharmapur",
                    "state": 3,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Barama (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Chapaguri (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Panery",
                    "state": 3,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Kalaigaon",
                    "state": 3,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Sipajhar",
                    "state": 3,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Mangaldoi (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Dalgaon",
                    "state": 3,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Udalguri (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Majbat",
                    "state": 3,
                },
                {
                    "dist_id": 71,
                    "dist_name": "Dhekiajuli",
                    "state": 3,
                },
                {
                    "dist_id": 72,
                    "dist_name": "Barchalla",
                    "state": 3,
                },
                {
                    "dist_id": 73,
                    "dist_name": "Tezpur",
                    "state": 3,
                },
                {
                    "dist_id": 74,
                    "dist_name": "Rangapara",
                    "state": 3,
                },
                {
                    "dist_id": 75,
                    "dist_name": "Sootea",
                    "state": 3,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Biswanat",
                    "state": 3,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Behali",
                    "state": 3,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Gohpur",
                    "state": 3,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Jagirad (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 80,
                    "dist_name": "Marigaon",
                    "state": 3,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Laharighat",
                    "state": 3,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Raha (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 83,
                    "dist_name": "Dhing",
                    "state": 3,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Batadroba",
                    "state": 3,
                },
                {
                    "dist_id": 85,
                    "dist_name": "Rupohihat",
                    "state": 3,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Nowgong",
                    "state": 3,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Barhampur",
                    "state": 3,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Samaguri",
                    "state": 3,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Kaliabor",
                    "state": 3,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Jamunamukh",
                    "state": 3,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Hojai",
                    "state": 3,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Lumding",
                    "state": 3,
                }, {
                    "dist_id": 93,
                    "dist_name": "Bokakhat",
                    "state": 3,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Sarupathar",
                    "state": 3,
                },
                {
                    "dist_id": 95,
                    "dist_name": "Golaghat",
                    "state": 3,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Khumtai",
                    "state": 3,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Dergaon (SC)",
                    "state": 3,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Jorhat",
                    "state": 3,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Majuli (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Titabar",
                    "state": 3,
                },
                {
                    "dist_id": 101,
                    "dist_name": "Mariani",
                    "state": 3,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Teok",
                    "state": 3,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Amguri",
                    "state": 3,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Nazira",
                    "state": 3,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Mahmara",
                    "state": 3,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Sonari",
                    "state": 3,
                }, {
                    "dist_id": 107,
                    "dist_name": "Thowra",
                    "state": 3,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Bihpuria",
                    "state": 3,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Naoboicha",
                    "state": 3,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Lakhimpur",
                    "state": 3,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Dhakuakhana (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Dhemaji (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Jonai (ST)",
                    "state": 3,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Moran",
                    "state": 3,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Dibrugarh",
                    "state": 3,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Lahowal",
                    "state": 3,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Duliajan",
                    "state": 3,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Tingkhong",
                    "state": 3,
                },
                {
                    "dist_id": 120,
                    "dist_name": "Naharkatia",
                    "state": 3,
                },
                {
                    "dist_id": 121,
                    "dist_name": "Chabua",
                    "state": 3,
                },
                {
                    "dist_id": 122,
                    "dist_name": "Tinsukia",
                    "state": 3,
                },
                {
                    "dist_id": 123,
                    "dist_name": "Digboi",
                    "state": 3,
                },
                {
                    "dist_id": 124,
                    "dist_name": "Margherita",
                    "state": 3,
                },
                {
                    "dist_id": 125,
                    "dist_name": "Doomdomma",
                    "state": 3,
                },
                {
                    "dist_id": 126,
                    "dist_name": "Sadiya",
                    "state": 3,
                },
            ]

        },

        {
            "Id": "4",
            name: "Bihar",
            "value": "0",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Valmiki Nagar",
                    "state": 4
                },
                {
                    "dist_id": 2,
                    "dist_name": "Ramnagar",
                    "state": 4
                },
                {
                    "dist_id": 3,
                    "dist_name": "Narkatiaganji",
                    "state": 4
                },
                {
                    "dist_id": 4,
                    "dist_name": "Bagaha",
                    "state": 4
                },
                {
                    "dist_id": 5,
                    "dist_name": "Lauriya",
                    "state": 4
                },
                {
                    "dist_id": 6,
                    "dist_name": "Nautan",
                    "state": 4
                },
                {
                    "dist_id": 7,
                    "dist_name": "Chanpatia",
                    "state": 4
                },
                {
                    "dist_id": 8,
                    "dist_name": "Bettiah",
                    "state": 4
                },
                {
                    "dist_id": 9,
                    "dist_name": "Sikta",
                    "state": 4
                },
                {
                    "dist_id": 10,
                    "dist_name": "Raxaul",
                    "state": 4
                },
                {
                    "dist_id": 11,
                    "dist_name": "Sugauli",
                    "state": 4
                },
                {
                    "dist_id": 12,
                    "dist_name": "Narkatiya",
                    "state": 4
                },
                {
                    "dist_id": 13,
                    "dist_name": "Harsidhi",
                    "state": 4
                },
                {
                    "dist_id": 14,
                    "dist_name": "Govindganj",
                    "state": 4
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kesaria",
                    "state": 4
                },
                {
                    "dist_id": 16,
                    "dist_name": "Kalyanpur",
                    "state": 4
                },
                {
                    "dist_id": 17,
                    "dist_name": "Pipra",
                    "state": 4
                },
                {
                    "dist_id": 18,
                    "dist_name": "Madhuban",
                    "state": 4
                },
                {
                    "dist_id": 19,
                    "dist_name": "Motihari",
                    "state": 4
                },
                {
                    "dist_id": 20,
                    "dist_name": "Chiraia",
                    "state": 4
                },
                {
                    "dist_id": 21,
                    "dist_name": "Dhaka",
                    "state": 4
                },
                {
                    "dist_id": 22,
                    "dist_name": "Sheohar",
                    "state": 4
                },
                {
                    "dist_id": 23,
                    "dist_name": "Riga",
                    "state": 4
                },
                {
                    "dist_id": 24,
                    "dist_name": "Bathnaha",
                    "state": 4
                },
                {
                    "dist_id": 25,
                    "dist_name": "Parihar",
                    "state": 4
                },
                {
                    "dist_id": 26,
                    "dist_name": "Sursand",
                    "state": 4
                },
                {
                    "dist_id": 27,
                    "dist_name": "Bajpatti",
                    "state": 4
                },
                {
                    "dist_id": 28,
                    "dist_name": "Sitamarhi",
                    "state": 4
                },
                {
                    "dist_id": 29,
                    "dist_name": "Runnisaidpur",
                    "state": 4
                },
                {
                    "dist_id": 30,
                    "dist_name": "Belsand",
                    "state": 4
                },
                {
                    "dist_id": 31,
                    "dist_name": "Harlakhi",
                    "state": 4
                },
                {
                    "dist_id": 32,
                    "dist_name": "Benipatti",
                    "state": 4
                },
                {
                    "dist_id": 33,
                    "dist_name": "Khajauli",
                    "state": 4
                },
                {
                    "dist_id": 34,
                    "dist_name": "Babubarhi",
                    "state": 4
                },
                {
                    "dist_id": 35,
                    "dist_name": "Bisfi",
                    "state": 4
                },
                {
                    "dist_id": 36,
                    "dist_name": "Madhubani",
                    "state": 4
                },
                {
                    "dist_id": 37,
                    "dist_name": "Rajnagar",
                    "state": 4
                },
                {
                    "dist_id": 38,
                    "dist_name": "Jhanjharpur",
                    "state": 4
                },
                {
                    "dist_id": 39,
                    "dist_name": "Phulparas",
                    "state": 4
                },
                {
                    "dist_id": 40,
                    "dist_name": "Laukaha",
                    "state": 4
                },
                {
                    "dist_id": 41,
                    "dist_name": "Nirmali",
                    "state": 4
                },
                {
                    "dist_id": 42,
                    "dist_name": "Pipra (Supaul)",
                    "state": 4
                },
                {
                    "dist_id": 43,
                    "dist_name": "Supaul",
                    "state": 4
                },
                {
                    "dist_id": 44,
                    "dist_name": "Triveniganj",
                    "state": 4
                },
                {
                    "dist_id": 45,
                    "dist_name": "Chhatapur",
                    "state": 4
                },
                {
                    "dist_id": 46,
                    "dist_name": "Narpatganj",
                    "state": 4
                },
                {
                    "dist_id": 47,
                    "dist_name": "Raniganj",
                    "state": 4
                },
                {
                    "dist_id": 48,
                    "dist_name": "Forbesganj",
                    "state": 4
                },
                {
                    "dist_id": 49,
                    "dist_name": "Araria",
                    "state": 4
                },
                {
                    "dist_id": 50,
                    "dist_name": "Jokihat",
                    "state": 4
                },
                {
                    "dist_id": 51,
                    "dist_name": "Sikti",
                    "state": 4
                },
                {
                    "dist_id": 52,
                    "dist_name": "Bahadurganj",
                    "state": 4
                },
                {
                    "dist_id": 53,
                    "dist_name": "Thankurganj",
                    "state": 4
                },
                {
                    "dist_id": 54,
                    "dist_name": "Kishanganj",
                    "state": 4
                },
                {
                    "dist_id": 55,
                    "dist_name": "Kochadhaman",
                    "state": 4
                },
                {
                    "dist_id": 56,
                    "dist_name": "Amour",
                    "state": 4
                },
                {
                    "dist_id": 57,
                    "dist_name": "Baisi",
                    "state": 4
                },
                {
                    "dist_id": 58,
                    "dist_name": "Kasba",
                    "state": 4
                },
                {
                    "dist_id": 59,
                    "dist_name": "Banmankhi",
                    "state": 4
                },
                {
                    "dist_id": 60,
                    "dist_name": "Rupauli",
                    "state": 4
                },
                {
                    "dist_id": 61,
                    "dist_name": "Dhamdaha",
                    "state": 4
                },
                {
                    "dist_id": 62,
                    "dist_name": "Purnia",
                    "state": 4
                },
                {
                    "dist_id": 63,
                    "dist_name": "Katihar",
                    "state": 4
                },
                {
                    "dist_id": 64,
                    "dist_name": "Kadwa",
                    "state": 4
                }, {
                    "dist_id": 65,
                    "dist_name": "Balrampur",
                    "state": 4
                },
                {
                    "dist_id": 66,
                    "dist_name": "Pranpur",
                    "state": 4
                },
                {
                    "dist_id": 67,
                    "dist_name": "Manihari",
                    "state": 4
                },
                {
                    "dist_id": 68,
                    "dist_name": "Barari",
                    "state": 4
                },
                {
                    "dist_id": 69,
                    "dist_name": "Korha",
                    "state": 4
                },
                {
                    "dist_id": 70,
                    "dist_name": "Alamnagar",
                    "state": 4
                },
                {
                    "dist_id": 71,
                    "dist_name": "Bihariganj",
                    "state": 4
                },
                {
                    "dist_id": 72,
                    "dist_name": "Singheshwar",
                    "state": 4
                },
                {
                    "dist_id": 73,
                    "dist_name": "Madhepura",
                    "state": 4
                },
                {
                    "dist_id": 74,
                    "dist_name": "Sonbarsha",
                    "state": 4
                },
                {
                    "dist_id": 75,
                    "dist_name": "Saharsa",
                    "state": 4
                },
                {
                    "dist_id": 76,
                    "dist_name": "Simri Bakhtiarpur",
                    "state": 4
                },
                {
                    "dist_id": 77,
                    "dist_name": "Mahishi",
                    "state": 4
                },
                {
                    "dist_id": 78,
                    "dist_name": "Kusheshwar Asthan",
                    "state": 4
                },
                {
                    "dist_id": 79,
                    "dist_name": "Gaura Bauram",
                    "state": 4
                },
                {
                    "dist_id": 80,
                    "dist_name": "Benipur",
                    "state": 4
                },
                {
                    "dist_id": 81,
                    "dist_name": "Alinagar",
                    "state": 4
                },
                {
                    "dist_id": 82,
                    "dist_name": "Darbhanga Rural",
                    "state": 4
                },
                {
                    "dist_id": 83,
                    "dist_name": "Darbhanga",
                    "state": 4
                },
                {
                    "dist_id": 84,
                    "dist_name": "Hayaghat",
                    "state": 4
                },
                {
                    "dist_id": 85,
                    "dist_name": "Bahadurpur",
                    "state": 4
                },
                {
                    "dist_id": 86,
                    "dist_name": "Keoti",
                    "state": 4
                },
                {
                    "dist_id": 87,
                    "dist_name": "Jale",
                    "state": 4
                },
                {
                    "dist_id": 88,
                    "dist_name": "Gaighat",
                    "state": 4
                },
                {
                    "dist_id": 89,
                    "dist_name": "Aurai",
                    "state": 4
                },
                {
                    "dist_id": 90,
                    "dist_name": "Minapur",
                    "state": 4
                },
                {
                    "dist_id": 91,
                    "dist_name": "Bochahan",
                    "state": 4
                },
                {
                    "dist_id": 92,
                    "dist_name": "Sakra",
                    "state": 4
                },
                {
                    "dist_id": 93,
                    "dist_name": "Kurhani",
                    "state": 4
                },
                {
                    "dist_id": 94,
                    "dist_name": "Muzaffarpur",
                    "state": 4
                },
                {
                    "dist_id": 95,
                    "dist_name": "Kanti",
                    "state": 4
                },
                {
                    "dist_id": 96,
                    "dist_name": "Baruraj",
                    "state": 4
                },
                {
                    "dist_id": 97,
                    "dist_name": "Paroo",
                    "state": 4
                },
                {
                    "dist_id": 98,
                    "dist_name": "Sahebganj",
                    "state": 4
                },
                {
                    "dist_id": 99,
                    "dist_name": "Baikunthpur",
                    "state": 4
                },
                {
                    "dist_id": 100,
                    "dist_name": "Barauli",
                    "state": 4
                },
                {
                    "dist_id": 101,
                    "dist_name": "Gopalganj",
                    "state": 4
                },
                {
                    "dist_id": 102,
                    "dist_name": "Kuchaikote",
                    "state": 4
                },
                {
                    "dist_id": 103,
                    "dist_name": "Bhore",
                    "state": 4
                },
                {
                    "dist_id": 104,
                    "dist_name": "Hathua",
                    "state": 4
                },
                {
                    "dist_id": 105,
                    "dist_name": "Siwan",
                    "state": 4
                },
                {
                    "dist_id": 106,
                    "dist_name": "Ziradei",
                    "state": 4
                },
                {
                    "dist_id": 107,
                    "dist_name": "Darauli",
                    "state": 4
                },
                {
                    "dist_id": 108,
                    "dist_name": "Raghunathpur",
                    "state": 4
                },
                {
                    "dist_id": 109,
                    "dist_name": "Daraunda",
                    "state": 4
                },
                {
                    "dist_id": 110,
                    "dist_name": "Barharia",
                    "state": 4
                },
                {
                    "dist_id": 111,
                    "dist_name": "Gariakothi",
                    "state": 4
                },
                {
                    "dist_id": 112,
                    "dist_name": "Maharajganj",
                    "state": 4
                },
                {
                    "dist_id": 113,
                    "dist_name": "Ekma",
                    "state": 4
                },
                {
                    "dist_id": 114,
                    "dist_name": "Manjhi",
                    "state": 4
                },
                {
                    "dist_id": 115,
                    "dist_name": "Baniapur",
                    "state": 4
                },
                {
                    "dist_id": 116,
                    "dist_name": "Taraiya",
                    "state": 4
                },
                {
                    "dist_id": 117,
                    "dist_name": "Marhaura",
                    "state": 4
                },
                {
                    "dist_id": 118,
                    "dist_name": "Chapra",
                    "state": 4
                },
                {
                    "dist_id": 119,
                    "dist_name": "Garkha",
                    "state": 4
                },
                {
                    "dist_id": 120,
                    "dist_name": "Amnour",
                    "state": 4
                },
                {
                    "dist_id": 121,
                    "dist_name": "Parsa",
                    "state": 4
                },
                {
                    "dist_id": 122,
                    "dist_name": "Sonepur",
                    "state": 4
                },
                {
                    "dist_id": 123,
                    "dist_name": "Hajipur",
                    "state": 4
                },
                {
                    "dist_id": 124,
                    "dist_name": "Lalganj",
                    "state": 4
                },
                {
                    "dist_id": 125,
                    "dist_name": "Vaishali",
                    "state": 4
                },
                {
                    "dist_id": 126,
                    "dist_name": "Mahua",
                    "state": 4
                },
                {
                    "dist_id": 127,
                    "dist_name": "Raja Pakar",
                    "state": 4
                },
                {
                    "dist_id": 128,
                    "dist_name": "Raghopur",
                    "state": 4
                },
                {
                    "dist_id": 129,
                    "dist_name": "Mahnar",
                    "state": 4
                },
                {
                    "dist_id": 130,
                    "dist_name": "Patepur",
                    "state": 4
                },
                {
                    "dist_id": 131,
                    "dist_name": "Kalyanpur",
                    "state": 4
                },
                {
                    "dist_id": 132,
                    "dist_name": "Warisnagar",
                    "state": 4
                },
                {
                    "dist_id": 133,
                    "dist_name": "Samastipur",
                    "state": 4
                },
                {
                    "dist_id": 134,
                    "dist_name": "Ujiarpur",
                    "state": 4
                },
                {
                    "dist_id": 135,
                    "dist_name": "Morwa",
                    "state": 4
                },
                {
                    "dist_id": 136,
                    "dist_name": "Sarairanjan",
                    "state": 4
                },
                {
                    "dist_id": 137,
                    "dist_name": "Mohiddinnagar",
                    "state": 4
                },
                {
                    "dist_id": 138,
                    "dist_name": "Bibhutipur",
                    "state": 4
                },
                {
                    "dist_id": 139,
                    "dist_name": "Rosera",
                    "state": 4
                },
                {
                    "dist_id": 140,
                    "dist_name": "Hasanpur",
                    "state": 4
                },
                {
                    "dist_id": 141,
                    "dist_name": "Cheria-Bariarpur",
                    "state": 4
                },
                {
                    "dist_id": 142,
                    "dist_name": "Bachhwara",
                    "state": 4
                },
                {
                    "dist_id": 143,
                    "dist_name": "Teghra",
                    "state": 4
                },
                {
                    "dist_id": 144,
                    "dist_name": "Matihani",
                    "state": 4
                },
                {
                    "dist_id": 145,
                    "dist_name": "Sanhebpur Kamal",
                    "state": 4
                },
                {
                    "dist_id": 146,
                    "dist_name": "Begusarai",
                    "state": 4
                },
                {
                    "dist_id": 147,
                    "dist_name": "Bakhri",
                    "state": 4
                },
                {
                    "dist_id": 148,
                    "dist_name": "Alauli",
                    "state": 4
                },
                {
                    "dist_id": 149,
                    "dist_name": "Khagaria",
                    "state": 4
                },
                {
                    "dist_id": 150,
                    "dist_name": "Beldaur",
                    "state": 4
                },
                {
                    "dist_id": 151,
                    "dist_name": "Parbatta",
                    "state": 4
                },
                {
                    "dist_id": 152,
                    "dist_name": "Bihpur",
                    "state": 4
                },
                {
                    "dist_id": 153,
                    "dist_name": "Gopalpur",
                    "state": 4
                },
                {
                    "dist_id": 154,
                    "dist_name": "Pirpainti",
                    "state": 4
                },
                {
                    "dist_id": 155,
                    "dist_name": "Kahalgaon",
                    "state": 4
                },
                {
                    "dist_id": 156,
                    "dist_name": "Bhagalpur",
                    "state": 4
                },
                {
                    "dist_id": 157,
                    "dist_name": "Sultanganj",
                    "state": 4
                },
                {
                    "dist_id": 158,
                    "dist_name": "Nathnagar",
                    "state": 4
                },
                {
                    "dist_id": 159,
                    "dist_name": "Amarpur",
                    "state": 4
                },
                {
                    "dist_id": 160,
                    "dist_name": "Dhoraiya",
                    "state": 4
                },
                {
                    "dist_id": 161,
                    "dist_name": "Banka",
                    "state": 4
                },
                {
                    "dist_id": 162,
                    "dist_name": "Kataria",
                    "state": 4
                },
                {
                    "dist_id": 163,
                    "dist_name": "Belhar",
                    "state": 4
                },
                {
                    "dist_id": 164,
                    "dist_name": "Tarapur",
                    "state": 4
                },
                {
                    "dist_id": 165,
                    "dist_name": "Munger",
                    "state": 4
                },
                {
                    "dist_id": 166,
                    "dist_name": "Jamalpur",
                    "state": 4
                },
                {
                    "dist_id": 167,
                    "dist_name": "Suryagarha",
                    "state": 4
                },
                {
                    "dist_id": 168,
                    "dist_name": "Lakhisarai",
                    "state": 4
                },
                {
                    "dist_id": 169,
                    "dist_name": "Lakhisarai",
                    "state": 4
                },
                {
                    "dist_id": 170,
                    "dist_name": "Barbigha",
                    "state": 4
                },
                {
                    "dist_id": 171,
                    "dist_name": "Asthawan",
                    "state": 4
                },
                {
                    "dist_id": 172,
                    "dist_name": "Biharsharif",
                    "state": 4
                },
                {
                    "dist_id": 173,
                    "dist_name": "Rajgir",
                    "state": 4
                },
                {
                    "dist_id": 174,
                    "dist_name": "Islampur",
                    "state": 4
                },
                {
                    "dist_id": 175,
                    "dist_name": "Hilsa",
                    "state": 4
                },
                {
                    "dist_id": 176,
                    "dist_name": "Nalanda",
                    "state": 4
                },
                {
                    "dist_id": 177,
                    "dist_name": "Harnaut",
                    "state": 4
                },
                {
                    "dist_id": 178,
                    "dist_name": "Mokama",
                    "state": 4
                },
                {
                    "dist_id": 179,
                    "dist_name": "Barh",
                    "state": 4
                },
                {
                    "dist_id": 180,
                    "dist_name": "Bakhtiarpur",
                    "state": 4
                },
                {
                    "dist_id": 181,
                    "dist_name": "Digha",
                    "state": 4
                },
                {
                    "dist_id": 182,
                    "dist_name": "Bankipur",
                    "state": 4
                },
                {
                    "dist_id": 183,
                    "dist_name": "Kumhrar",
                    "state": 4
                },
                {
                    "dist_id": 184,
                    "dist_name": "Patna Shaib",
                    "state": 4
                },
                {
                    "dist_id": 185,
                    "dist_name": "Fatuha",
                    "state": 4
                },
                {
                    "dist_id": 186,
                    "dist_name": "Danapur",
                    "state": 4
                },
                {
                    "dist_id": 187,
                    "dist_name": "Maner",
                    "state": 4
                },
                {
                    "dist_id": 188,
                    "dist_name": "Pulwari",
                    "state": 4
                },
                {
                    "dist_id": 189,
                    "dist_name": "Masaurhi",
                    "state": 4
                },
                {
                    "dist_id": 190,
                    "dist_name": "Paliganj",
                    "state": 4
                },
                {
                    "dist_id": 191,
                    "dist_name": "Bikram",
                    "state": 4
                },
                {
                    "dist_id": 192,
                    "dist_name": "Sandesh",
                    "state": 4
                },
                {
                    "dist_id": 193,
                    "dist_name": "Barhara",
                    "state": 4
                },
                {
                    "dist_id": 194,
                    "dist_name": "Arrah",
                    "state": 4
                },
                {
                    "dist_id": 195,
                    "dist_name": "Agiaon",
                    "state": 4
                },
                {
                    "dist_id": 196,
                    "dist_name": "Tarari",
                    "state": 4
                },
                {
                    "dist_id": 197,
                    "dist_name": "Jagdishpur",
                    "state": 4
                },
                {
                    "dist_id": 198,
                    "dist_name": "Shahpur",
                    "state": 4
                },
                {
                    "dist_id": 199,
                    "dist_name": "Brahampur",
                    "state": 4
                },
                {
                    "dist_id": 200,
                    "dist_name": "Buxar",
                    "state": 4
                },
                {
                    "dist_id": 201,
                    "dist_name": "Dumraon",
                    "state": 4
                },
                {
                    "dist_id": 202,
                    "dist_name": "Rajpur",
                    "state": 4
                },
                {
                    "dist_id": 203,
                    "dist_name": "Ramgarh",
                    "state": 4
                },
                {
                    "dist_id": 204,
                    "dist_name": "Mohqnia",
                    "state": 4
                },
                {
                    "dist_id": 205,
                    "dist_name": "Bhabua",
                    "state": 4
                },
                {
                    "dist_id": 206,
                    "dist_name": "Chainpur",
                    "state": 4
                },
                {
                    "dist_id": 207,
                    "dist_name": "Chenari",
                    "state": 4
                },
                {
                    "dist_id": 208,
                    "dist_name": "Sasaram",
                    "state": 4
                },
                {
                    "dist_id": 209,
                    "dist_name": "Kargahar",
                    "state": 4
                },
                {
                    "dist_id": 210,
                    "dist_name": "Dinara",
                    "state": 4
                },
                {
                    "dist_id": 211,
                    "dist_name": "Nokha",
                    "state": 4
                },
                {
                    "dist_id": 212,
                    "dist_name": "Dehri",
                    "state": 4
                },
                {
                    "dist_id": 213,
                    "dist_name": "Karakat",
                    "state": 4
                },
                {
                    "dist_id": 214,
                    "dist_name": "Arwal",
                    "state": 4
                },
                {
                    "dist_id": 215,
                    "dist_name": "Kurtha",
                    "state": 4
                },
                {
                    "dist_id": 216,
                    "dist_name": "Jehanabad",
                    "state": 4
                },
                {
                    "dist_id": 217,
                    "dist_name": "Ghosi",
                    "state": 4
                },
                {
                    "dist_id": 218,
                    "dist_name": "Makhdumpur",
                    "state": 4
                },
                {
                    "dist_id": 219,
                    "dist_name": "Goh",
                    "state": 4
                },
                {
                    "dist_id": 220,
                    "dist_name": "Obra",
                    "state": 4
                },
                {
                    "dist_id": 221,
                    "dist_name": "Nabinagar",
                    "state": 4
                },
                {
                    "dist_id": 223,
                    "dist_name": "Aurangabad",
                    "state": 4
                },
                {
                    "dist_id": 224,
                    "dist_name": "Rafiganj",
                    "state": 4
                },
                {
                    "dist_id": 225,
                    "dist_name": "Gurua",
                    "state": 4
                },
                {
                    "dist_id": 226,
                    "dist_name": "Sherghati",
                    "state": 4
                },
                {
                    "dist_id": 227,
                    "dist_name": "Imamganj",
                    "state": 4
                },
                {
                    "dist_id": 228,
                    "dist_name": "Barachatti",
                    "state": 4
                },
                {
                    "dist_id": 229,
                    "dist_name": "Bodh Gaya",
                    "state": 4
                },
                {
                    "dist_id": 230,
                    "dist_name": "Gaya Town",
                    "state": 4
                },
                {
                    "dist_id": 231,
                    "dist_name": "Tikari",
                    "state": 4
                },
                {
                    "dist_id": 232,
                    "dist_name": "Belaganj",
                    "state": 4
                },
                {
                    "dist_id": 233,
                    "dist_name": "Atri",
                    "state": 4
                },
                {
                    "dist_id": 234,
                    "dist_name": "Wazirganj",
                    "state": 4
                },
                {
                    "dist_id": 235,
                    "dist_name": "Rajauli",
                    "state": 4
                },
                {
                    "dist_id": 236,
                    "dist_name": "Hisusa",
                    "state": 4
                },
                {
                    "dist_id": 237,
                    "dist_name": "Nawada",
                    "state": 4
                },
                {
                    "dist_id": 238,
                    "dist_name": "Gobindpur",
                    "state": 4
                },
                {
                    "dist_id": 239,
                    "dist_name": "Warsaliganj",
                    "state": 4
                },
                {
                    "dist_id": 240,
                    "dist_name": "Sikandra",
                    "state": 4
                },
                {
                    "dist_id": 241,
                    "dist_name": "Jamui",
                    "state": 4
                },
                {
                    "dist_id": 242,
                    "dist_name": "Jhajha",
                    "state": 4
                },
                {
                    "dist_id": 243,
                    "dist_name": "Chakai",
                    "state": 4
                },
            ]

        },
        {
            "Id": "5",
            name: "Chhattisgarh",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Bharatpur-Sonhat",
                    "state": 5
                },
                {
                    "dist_id": 2,
                    "dist_name": "Manedragarh",
                    "state": 5
                },
                {
                    "dist_id": 3,
                    "dist_name": "Baikunthpur",
                    "state": 5
                },
                {
                    "dist_id": 4,
                    "dist_name": "Premnagar",
                    "state": 5
                },
                {
                    "dist_id": 5,
                    "dist_name": "Bhatgaon",
                    "state": 5
                },
                {
                    "dist_id": 6,
                    "dist_name": "Pratappur",
                    "state": 5
                },
                {
                    "dist_id": 7,
                    "dist_name": "Ramanujganj",
                    "state": 5
                },
                {
                    "dist_id": 8,
                    "dist_name": "Samri",
                    "state": 5
                },
                {
                    "dist_id": 9,
                    "dist_name": "Lundra",
                    "state": 5
                },
                {
                    "dist_id": 10,
                    "dist_name": "Ambikapur",
                    "state": 5
                },
                {
                    "dist_id": 11,
                    "dist_name": "Sitapur",
                    "state": 5
                },
                {
                    "dist_id": 12,
                    "dist_name": "Jashpur",
                    "state": 5
                },
                {
                    "dist_id": 13,
                    "dist_name": "Kunkuri",
                    "state": 5
                },
                {
                    "dist_id": 14,
                    "dist_name": "Pathalgaon",
                    "state": 5
                },
                {
                    "dist_id": 15,
                    "dist_name": "Lailunga",
                    "state": 5
                },
                {
                    "dist_id": 16,
                    "dist_name": "Raigarh",
                    "state": 5
                },
                {
                    "dist_id": 17,
                    "dist_name": "Sarangarh",
                    "state": 5
                },
                {
                    "dist_id": 18,
                    "dist_name": "Kharsia",
                    "state": 5
                },
                {
                    "dist_id": 19,
                    "dist_name": "Dharamjaigarh",
                    "state": 5
                },
                {
                    "dist_id": 20,
                    "dist_name": "Rampur",
                    "state": 5
                },
                {
                    "dist_id": 21,
                    "dist_name": "Kobra",
                    "state": 5
                },
                {
                    "dist_id": 22,
                    "dist_name": "Katghora",
                    "state": 5
                },
                {
                    "dist_id": 23,
                    "dist_name": "Pali-Tanakhar",
                    "state": 5
                },
                {
                    "dist_id": 24,
                    "dist_name": "Marwahi",
                    "state": 5
                },
                {
                    "dist_id": 25,
                    "dist_name": "Kota",
                    "state": 5
                },
                {
                    "dist_id": 26,
                    "dist_name": "Lormi",
                    "state": 5
                },
                {
                    "dist_id": 27,
                    "dist_name": "Mungeli",
                    "state": 5
                },
                {
                    "dist_id": 28,
                    "dist_name": "Takhatpur",
                    "state": 5
                },
                {
                    "dist_id": 29,
                    "dist_name": "Bilha",
                    "state": 5
                },
                {
                    "dist_id": 30,
                    "dist_name": "Bilaspur",
                    "state": 5
                },
                {
                    "dist_id": 31,
                    "dist_name": "Beltara",
                    "state": 5
                },
                {
                    "dist_id": 32,
                    "dist_name": "Masturi",
                    "state": 5
                },
                {
                    "dist_id": 33,
                    "dist_name": "Akaltara",
                    "state": 5
                },
                {
                    "dist_id": 34,
                    "dist_name": "Jangir_Champa",
                    "state": 5
                },
                {
                    "dist_id": 35,
                    "dist_name": "Sakti",
                    "state": 5
                },
                {
                    "dist_id": 36,
                    "dist_name": "Chandrapur",
                    "state": 5
                },
                {
                    "dist_id": 37,
                    "dist_name": "Jaijaipur",
                    "state": 5
                },
                {
                    "dist_id": 38,
                    "dist_name": "Pamgarh",
                    "state": 5
                },
                {
                    "dist_id": 39,
                    "dist_name": "Saraipali",
                    "state": 5
                },
                {
                    "dist_id": 40,
                    "dist_name": "Basna",
                    "state": 5
                },
                {
                    "dist_id": 41,
                    "dist_name": "Khallari",
                    "state": 5
                },
                {
                    "dist_id": 42,
                    "dist_name": "Mahasamund",
                    "state": 5
                },
                {
                    "dist_id": 43,
                    "dist_name": "Bilaigarh",
                    "state": 5
                },
                {
                    "dist_id": 44,
                    "dist_name": "Kasdol",
                    "state": 5
                },
                {
                    "dist_id": 45,
                    "dist_name": "Baloda Bazar",
                    "state": 5
                },
                {
                    "dist_id": 46,
                    "dist_name": "Bhatapara",
                    "state": 5
                },
                {
                    "dist_id": 47,
                    "dist_name": "Dharsiwa",
                    "state": 5
                },
                {
                    "dist_id": 48,
                    "dist_name": "Raipur City Gramin",
                    "state": 5
                },
                {
                    "dist_id": 49,
                    "dist_name": "Raipur City West",
                    "state": 5
                },
                {
                    "dist_id": 50,
                    "dist_name": "Raipur City North",
                    "state": 5
                },
                {
                    "dist_id": 51,
                    "dist_name": "Raipur City South",
                    "state": 5
                },
                {
                    "dist_id": 52,
                    "dist_name": "Arang",
                    "state": 5
                },
                {
                    "dist_id": 53,
                    "dist_name": "Abhanpur",
                    "state": 5
                },
                {
                    "dist_id": 54,
                    "dist_name": "Rajim",
                    "state": 5
                },
                {
                    "dist_id": 55,
                    "dist_name": "Bindrawagarh",
                    "state": 5
                },
                {
                    "dist_id": 56,
                    "dist_name": "Sihawa",
                    "state": 5
                },
                {
                    "dist_id": 57,
                    "dist_name": "Kurud",
                    "state": 5
                },
                {
                    "dist_id": 58,
                    "dist_name": "Dhamtari",
                    "state": 5
                },
                {
                    "dist_id": 59,
                    "dist_name": "Sanjari Balod",
                    "state": 5
                },
                {
                    "dist_id": 60,
                    "dist_name": "Daundi Lohara",
                    "state": 5
                },
                {
                    "dist_id": 61,
                    "dist_name": "Gunderdehi",
                    "state": 5
                },
                {
                    "dist_id": 62,
                    "dist_name": "Patan",
                    "state": 5
                },
                {
                    "dist_id": 63,
                    "dist_name": "Durg Gramin",
                    "state": 5
                },
                {
                    "dist_id": 64,
                    "dist_name": "Durg City",
                    "state": 5
                }, {
                    "dist_id": 65,
                    "dist_name": "Bhilai Nagar",
                    "state": 5
                },
                {
                    "dist_id": 66,
                    "dist_name": "Vaishali Nagar",
                    "state": 5
                },
                {
                    "dist_id": 67,
                    "dist_name": "Ahiwara",
                    "state": 5
                },
                {
                    "dist_id": 68,
                    "dist_name": "Saja",
                    "state": 5
                },
                {
                    "dist_id": 69,
                    "dist_name": "Bemetara",
                    "state": 5
                },
                {
                    "dist_id": 70,
                    "dist_name": "Navagarh",
                    "state": 5
                },
                {
                    "dist_id": 71,
                    "dist_name": "Pandariya",
                    "state": 5
                },
                {
                    "dist_id": 72,
                    "dist_name": "Kawardha",
                    "state": 5
                },
                {
                    "dist_id": 73,
                    "dist_name": "Khairagarh",
                    "state": 5
                },
                {
                    "dist_id": 74,
                    "dist_name": "Dongargarh",
                    "state": 5
                },
                {
                    "dist_id": 75,
                    "dist_name": "Rajnandgaon",
                    "state": 5
                },
                {
                    "dist_id": 76,
                    "dist_name": "Dongargaon",
                    "state": 5
                },
                {
                    "dist_id": 77,
                    "dist_name": "Khujji",
                    "state": 5
                },
                {
                    "dist_id": 78,
                    "dist_name": "Mohla-Manpur",
                    "state": 5
                },
                {
                    "dist_id": 79,
                    "dist_name": "Antagarh",
                    "state": 5
                },
                {
                    "dist_id": 80,
                    "dist_name": "Bhanupratappur",
                    "state": 5
                },
                {
                    "dist_id": 81,
                    "dist_name": "Kanker",
                    "state": 5
                },
                {
                    "dist_id": 82,
                    "dist_name": "Keshkal",
                    "state": 5
                },
                {
                    "dist_id": 83,
                    "dist_name": "Kondagaon",
                    "state": 5
                },
                {
                    "dist_id": 84,
                    "dist_name": "Narayanpur",
                    "state": 5
                },
                {
                    "dist_id": 85,
                    "dist_name": "Bastar",
                    "state": 5
                },
                {
                    "dist_id": 86,
                    "dist_name": "Jagdalpur",
                    "state": 5
                },
                {
                    "dist_id": 87,
                    "dist_name": "Bastar",
                    "state": 5
                },
                {
                    "dist_id": 88,
                    "dist_name": "Jagdalpur",
                    "state": 5
                },
                {
                    "dist_id": 89,
                    "dist_name": "Bijapur",
                    "state": 5
                },
                {
                    "dist_id": 90,
                    "dist_name": "Konta",
                    "state": 5
                }

            ]
        },
        {
            "Id": "6",
            name: "Goa",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Mandrem",
                    "state": 6
                },
                {
                    "dist_id": 2,
                    "dist_name": "Pernem",
                    "state": 6
                },
                {
                    "dist_id": 3,
                    "dist_name": "Bicholim",
                    "state": 6
                },
                {
                    "dist_id": 4,
                    "dist_name": "Tivim",
                    "state": 6
                },
                {
                    "dist_id": 5,
                    "dist_name": "Mapusa",
                    "state": 6
                },
                {
                    "dist_id": 6,
                    "dist_name": "Siolim",
                    "state": 6
                },
                {
                    "dist_id": 7,
                    "dist_name": "Saligao",
                    "state": 6
                },
                {
                    "dist_id": 8,
                    "dist_name": "Calangute",
                    "state": 6
                },
                {
                    "dist_id": 9,
                    "dist_name": "Porvorim",
                    "state": 6
                },
                {
                    "dist_id": 10,
                    "dist_name": "Aldona",
                    "state": 6
                },
                {
                    "dist_id": 11,
                    "dist_name": "Panaji",
                    "state": 6
                },
                {
                    "dist_id": 12,
                    "dist_name": "Taleigao",
                    "state": 6
                },
                {
                    "dist_id": 13,
                    "dist_name": "St.Cruz",
                    "state": 6
                },
                {
                    "dist_id": 14,
                    "dist_name": "St.Andre",
                    "state": 6
                },
                {
                    "dist_id": 15,
                    "dist_name": "Cumbarjua",
                    "state": 6
                },
                {
                    "dist_id": 16,
                    "dist_name": "Maem",
                    "state": 6
                },
                {
                    "dist_id": 17,
                    "dist_name": "Sanquelim",
                    "state": 6
                },
                {
                    "dist_id": 18,
                    "dist_name": "Poriem",
                    "state": 6
                },
                {
                    "dist_id": 19,
                    "dist_name": "Valpoi",
                    "state": 6
                },
                {
                    "dist_id": 20,
                    "dist_name": "Priol",
                    "state": 6
                },
                {
                    "dist_id": 21,
                    "dist_name": "Ponda",
                    "state": 6
                },
                {
                    "dist_id": 22,
                    "dist_name": "Siroda",
                    "state": 6
                },
                {
                    "dist_id": 23,
                    "dist_name": "Marcaim",
                    "state": 6
                },
                {
                    "dist_id": 24,
                    "dist_name": "Marmugao",
                    "state": 6
                },
                {
                    "dist_id": 25,
                    "dist_name": "Vasco da Gama",
                    "state": 6
                },
                {
                    "dist_id": 26,
                    "dist_name": "Dabolim",
                    "state": 6
                },
                {
                    "dist_id": 27,
                    "dist_name": "Cortalim",
                    "state": 6
                },
                {
                    "dist_id": 28,
                    "dist_name": "Nuvem",
                    "state": 6
                },
                {
                    "dist_id": 29,
                    "dist_name": "Curtorim",
                    "state": 6
                },
                {
                    "dist_id": 30,
                    "dist_name": "Fatarda",
                    "state": 6
                },
                {
                    "dist_id": 31,
                    "dist_name": "Margao",
                    "state": 6
                },
                {
                    "dist_id": 32,
                    "dist_name": "Benaulim",
                    "state": 6
                },
                {
                    "dist_id": 33,
                    "dist_name": "Navelim",
                    "state": 6
                },
                {
                    "dist_id": 34,
                    "dist_name": "Cuncolim",
                    "state": 6
                },
                {
                    "dist_id": 35,
                    "dist_name": "Velim",
                    "state": 6
                },
                {
                    "dist_id": 36,
                    "dist_name": "Quepem",
                    "state": 6
                },
                {
                    "dist_id": 37,
                    "dist_name": "Curchorem",
                    "state": 6
                },
                {
                    "dist_id": 38,
                    "dist_name": "Sanvordem",
                    "state": 6
                },
                {
                    "dist_id": 39,
                    "dist_name": "Sanguem",
                    "state": 6
                },
                {
                    "dist_id": 40,
                    "dist_name": "Canacona",
                    "state": 6
                },
            ]
        },
        {
            "Id": "7",
            name: "Gujarat",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Abdasa",
                    "state": 7
                },
                {
                    "dist_id": 2,
                    "dist_name": "Mandvi(Kachchh)",
                    "state": 7
                },
                {
                    "dist_id": 3,
                    "dist_name": "Bhuj",
                    "state": 7
                },
                {
                    "dist_id": 4,
                    "dist_name": "Anjar",
                    "state": 7
                },
                {
                    "dist_id": 5,
                    "dist_name": "Gandhidham (SC)",
                    "state": 7
                },
                {
                    "dist_id": 6,
                    "dist_name": "Rapar",
                    "state": 7
                },
                {
                    "dist_id": 7,
                    "dist_name": "Vav",
                    "state": 7
                },
                {
                    "dist_id": 8,
                    "dist_name": "Tharad",
                    "state": 7
                },
                {
                    "dist_id": 9,
                    "dist_name": "Dhanera",
                    "state": 7
                },
                {
                    "dist_id": 10,
                    "dist_name": "Danta (ST)",
                    "state": 7
                },
                {
                    "dist_id": 11,
                    "dist_name": "Vandgam (SC)",
                    "state": 7
                },
                {
                    "dist_id": 12,
                    "dist_name": "Palanpur",
                    "state": 7
                },
                {
                    "dist_id": 13,
                    "dist_name": "Deesa",
                    "state": 7
                },
                {
                    "dist_id": 14,
                    "dist_name": "Deodar",
                    "state": 7
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kankrej",
                    "state": 7
                },
                {
                    "dist_id": 16,
                    "dist_name": "Radhanpur",
                    "state": 7
                },
                {
                    "dist_id": 17,
                    "dist_name": "Chanasma",
                    "state": 7
                },
                {
                    "dist_id": 18,
                    "dist_name": "Patan",
                    "state": 7
                },
                {
                    "dist_id": 19,
                    "dist_name": "Sidhpur",
                    "state": 7
                },
                {
                    "dist_id": 20,
                    "dist_name": "Kheralu",
                    "state": 7
                },
                {
                    "dist_id": 21,
                    "dist_name": "Unjha",
                    "state": 7
                },
                {
                    "dist_id": 22,
                    "dist_name": "Visnagar",
                    "state": 7
                },
                {
                    "dist_id": 23,
                    "dist_name": "Bechraji",
                    "state": 7
                },
                {
                    "dist_id": 24,
                    "dist_name": "Kadi (SC)",
                    "state": 7
                },
                {
                    "dist_id": 25,
                    "dist_name": "Mahesana",
                    "state": 7
                },
                {
                    "dist_id": 26,
                    "dist_name": "Vijapur",
                    "state": 7
                },
                {
                    "dist_id": 27,
                    "dist_name": "Himatnagar",
                    "state": 7
                },
                {
                    "dist_id": 28,
                    "dist_name": "Idar (SC)",
                    "state": 7
                },
                {
                    "dist_id": 29,
                    "dist_name": "Khedbrahma (ST)",
                    "state": 7
                },
                {
                    "dist_id": 30,
                    "dist_name": "Bhiloda (ST)",
                    "state": 7
                },
                {
                    "dist_id": 31,
                    "dist_name": "Modasa",
                    "state": 7
                },
                {
                    "dist_id": 32,
                    "dist_name": "Bayad",
                    "state": 7
                },
                {
                    "dist_id": 33,
                    "dist_name": "Prantij",
                    "state": 7
                },
                {
                    "dist_id": 34,
                    "dist_name": "Dahegam",
                    "state": 7
                },
                {
                    "dist_id": 35,
                    "dist_name": "Gandhinagar South",
                    "state": 7
                },
                {
                    "dist_id": 36,
                    "dist_name": "Gandhinagar North",
                    "state": 7
                },
                {
                    "dist_id": 37,
                    "dist_name": "Mansa",
                    "state": 7
                },
                {
                    "dist_id": 38,
                    "dist_name": "Kalol (Gandhinagar)",
                    "state": 7
                },
                {
                    "dist_id": 39,
                    "dist_name": "Viramgam",
                    "state": 7
                },
                {
                    "dist_id": 40,
                    "dist_name": "Sanand",
                    "state": 7
                },
                {
                    "dist_id": 41,
                    "dist_name": "Ghatlodia",
                    "state": 7
                },
                {
                    "dist_id": 42,
                    "dist_name": "Vejalpur",
                    "state": 7
                },
                {
                    "dist_id": 43,
                    "dist_name": "Vatva",
                    "state": 7
                },
                {
                    "dist_id": 44,
                    "dist_name": "Ellisbridge",
                    "state": 7
                },
                {
                    "dist_id": 45,
                    "dist_name": "Naranpura",
                    "state": 7
                },
                {
                    "dist_id": 46,
                    "dist_name": "Nikol",
                    "state": 7
                },
                {
                    "dist_id": 47,
                    "dist_name": "Naroda",
                    "state": 7
                },
                {
                    "dist_id": 48,
                    "dist_name": "Thakkarbapa Nagar",
                    "state": 7
                },
                {
                    "dist_id": 49,
                    "dist_name": "Bapunagar",
                    "state": 7
                },
                {
                    "dist_id": 50,
                    "dist_name": "Amraiwadi",
                    "state": 7
                },
                {
                    "dist_id": 51,
                    "dist_name": "Dariapur",
                    "state": 7
                },
                {
                    "dist_id": 52,
                    "dist_name": "Jamalpur-Khadiya",
                    "state": 7
                },
                {
                    "dist_id": 53,
                    "dist_name": "Maninagar",
                    "state": 7
                },
                {
                    "dist_id": 54,
                    "dist_name": "Danilimda (SC)",
                    "state": 7
                },
                {
                    "dist_id": 55,
                    "dist_name": "Sabarmati",
                    "state": 7
                },
                {
                    "dist_id": 56,
                    "dist_name": "Asarwa (SC)",
                    "state": 7
                },
                {
                    "dist_id": 57,
                    "dist_name": "Daskroi",
                    "state": 7
                },
                {
                    "dist_id": 58,
                    "dist_name": "Dhokla",
                    "state": 7
                },
                {
                    "dist_id": 59,
                    "dist_name": "Dhandhuka",
                    "state": 7
                },
                {
                    "dist_id": 60,
                    "dist_name": "Dasada (SC)",
                    "state": 7
                },
                {
                    "dist_id": 61,
                    "dist_name": "Limdi",
                    "state": 7
                },
                {
                    "dist_id": 62,
                    "dist_name": "Wadhwan",
                    "state": 7
                },
                {
                    "dist_id": 63,
                    "dist_name": "Chotila",
                    "state": 7
                },
                {
                    "dist_id": 64,
                    "dist_name": "Dhangadhra",
                    "state": 7
                },
                {
                    "dist_id": 65,
                    "dist_name": "Morbi",
                    "state": 7
                },
                {
                    "dist_id": 66,
                    "dist_name": "Tankara",
                    "state": 7
                },
                {
                    "dist_id": 67,
                    "dist_name": "Wankaner",
                    "state": 7
                },
                {
                    "dist_id": 68,
                    "dist_name": "Rajkoti East",
                    "state": 7
                },
                {
                    "dist_id": 69,
                    "dist_name": "Rajkoti West",
                    "state": 7
                },
                {
                    "dist_id": 70,
                    "dist_name": "Rajkoti Sout",
                    "state": 7
                },
                {
                    "dist_id": 71,
                    "dist_name": "Rajkoti Rural (SC)",
                    "state": 7
                },
                {
                    "dist_id": 72,
                    "dist_name": "Jasdan",
                    "state": 7
                },
                {
                    "dist_id": 73,
                    "dist_name": "Gondal",
                    "state": 7
                },
                {
                    "dist_id": 74,
                    "dist_name": "Jetpur(Rajkot)",
                    "state": 7
                },
                {
                    "dist_id": 75,
                    "dist_name": "Dhoraji",
                    "state": 7
                },
                {
                    "dist_id": 76,
                    "dist_name": "Kalavad(SC)",
                    "state": 7
                },
                {
                    "dist_id": 77,
                    "dist_name": "Jamnagar Rural",
                    "state": 7
                },
                {
                    "dist_id": 78,
                    "dist_name": "Jamnagar North",
                    "state": 7
                },
                {
                    "dist_id": 79,
                    "dist_name": "Jamnagar South",
                    "state": 7
                },
                {
                    "dist_id": 80,
                    "dist_name": "Jamjodhpur",
                    "state": 7
                },
                {
                    "dist_id": 81,
                    "dist_name": "Khambhaliya",
                    "state": 7
                },
                {
                    "dist_id": 82,
                    "dist_name": "Dwarka",
                    "state": 7
                },
                {
                    "dist_id": 83,
                    "dist_name": "Porbandar",
                    "state": 7
                },
                {
                    "dist_id": 84,
                    "dist_name": "Kutiyana",
                    "state": 7
                },
                {
                    "dist_id": 85,
                    "dist_name": "Manavadar",
                    "state": 7
                },
                {
                    "dist_id": 86,
                    "dist_name": "Junagadh",
                    "state": 7
                },
                {
                    "dist_id": 87,
                    "dist_name": "Visavadar",
                    "state": 7
                },
                {
                    "dist_id": 88,
                    "dist_name": "Keshod",
                    "state": 7
                },
                {
                    "dist_id": 89,
                    "dist_name": "Mangrol (Junagadh)",
                    "state": 7
                },
                {
                    "dist_id": 90,
                    "dist_name": "Somanath",
                    "state": 7
                },
                {
                    "dist_id": 91,
                    "dist_name": "Talala",
                    "state": 7
                },
                {
                    "dist_id": 92,
                    "dist_name": "Kodinar (SC)",
                    "state": 7
                },
                {
                    "dist_id": 93,
                    "dist_name": "Una",
                    "state": 7
                },
                {
                    "dist_id": 94,
                    "dist_name": "Dhari",
                    "state": 7
                },
                {
                    "dist_id": 95,
                    "dist_name": "Amreli",
                    "state": 7
                },
                {
                    "dist_id": 96,
                    "dist_name": "Lathi",
                    "state": 7
                },
                {
                    "dist_id": 97,
                    "dist_name": "Savarkundla",
                    "state": 7
                },
                {
                    "dist_id": 98,
                    "dist_name": "Rajula",
                    "state": 7
                },
                {
                    "dist_id": 99,
                    "dist_name": "Mahuva (Bhavnagar)",
                    "state": 7
                },
                {
                    "dist_id": 100,
                    "dist_name": "Talaja",
                    "state": 7
                },
                {
                    "dist_id": 101,
                    "dist_name": "Gariadhar",
                    "state": 7
                },
                {
                    "dist_id": 102,
                    "dist_name": "Palitana",
                    "state": 7
                },
                {
                    "dist_id": 103,
                    "dist_name": "Bhavnagar Rural",
                    "state": 7
                },
                {
                    "dist_id": 104,
                    "dist_name": "Bhavnagar East",
                    "state": 7
                },
                {
                    "dist_id": 105,
                    "dist_name": "Bhavnagar West",
                    "state": 7
                },
                {
                    "dist_id": 106,
                    "dist_name": "Gadhada (SC)",
                    "state": 7
                },
                {
                    "dist_id": 107,
                    "dist_name": "Botad",
                    "state": 7
                },
                {
                    "dist_id": 108,
                    "dist_name": "Khambhat",
                    "state": 7
                },
                {
                    "dist_id": 109,
                    "dist_name": "Borsad",
                    "state": 7
                },
                {
                    "dist_id": 110,
                    "dist_name": "Anklav",
                    "state": 7
                },
                {
                    "dist_id": 111,
                    "dist_name": "Umreth",
                    "state": 7
                },
                {
                    "dist_id": 112,
                    "dist_name": "Anand",
                    "state": 7
                },
                {
                    "dist_id": 113,
                    "dist_name": "Petlad",
                    "state": 7
                },
                {
                    "dist_id": 114,
                    "dist_name": "Sojitra",
                    "state": 7
                },
                {
                    "dist_id": 115,
                    "dist_name": "Matar",
                    "state": 7
                },
                {
                    "dist_id": 116,
                    "dist_name": "Nadiad",
                    "state": 7
                },
                {
                    "dist_id": 117,
                    "dist_name": "Mehmedabad",
                    "state": 7
                },
                {
                    "dist_id": 118,
                    "dist_name": "Mahudha",
                    "state": 7
                },
                {
                    "dist_id": 119,
                    "dist_name": "Thasra",
                    "state": 7
                },
                {
                    "dist_id": 120,
                    "dist_name": "Kapadvanj",
                    "state": 7
                },
                {
                    "dist_id": 121,
                    "dist_name": "Balasinor",
                    "state": 7
                },
                {
                    "dist_id": 122,
                    "dist_name": "Lunawada",
                    "state": 7
                },
                {
                    "dist_id": 123,
                    "dist_name": "Santrampur (ST)",
                    "state": 7
                },
                {
                    "dist_id": 124,
                    "dist_name": "Shehra",
                    "state": 7
                },
                {
                    "dist_id": 125,
                    "dist_name": "Morva Hadaf (ST)",
                    "state": 7
                },
                {
                    "dist_id": 126,
                    "dist_name": "Godhra",
                    "state": 7
                },

                {
                    "dist_id": 127,
                    "dist_name": "Kalol (Panchmahal)",
                    "state": 7
                },
                {
                    "dist_id": 128,
                    "dist_name": "Halol",
                    "state": 7
                },
                {
                    "dist_id": 129,
                    "dist_name": "Fatepura (ST)",
                    "state": 7
                },
                {
                    "dist_id": 130,
                    "dist_name": "Jhalod (ST)",
                    "state": 7
                },
                {
                    "dist_id": 131,
                    "dist_name": "Limkheda (ST)",
                    "state": 7
                },
                {
                    "dist_id": 132,
                    "dist_name": "Dahod (ST)",
                    "state": 7
                },
                {
                    "dist_id": 133,
                    "dist_name": "Garbada (ST)",
                    "state": 7
                },
                {
                    "dist_id": 134,
                    "dist_name": "Devgadhbariya",
                    "state": 7
                },
                {
                    "dist_id": 135,
                    "dist_name": "Savli",
                    "state": 7
                },
                {
                    "dist_id": 136,
                    "dist_name": "Vaghodiya",
                    "state": 7
                },
                {
                    "dist_id": 137,
                    "dist_name": "Choota Udaipur(ST)",
                    "state": 7
                },
                {
                    "dist_id": 138,
                    "dist_name": "Jetpur (Chhota Udaipur) (ST)",
                    "state": 7
                },
                {
                    "dist_id": 139,
                    "dist_name": "Sankheda (ST)",
                    "state": 7
                },
                {
                    "dist_id": 140,
                    "dist_name": "Dabhoi",
                    "state": 7
                },
                {
                    "dist_id": 141,
                    "dist_name": "Vadodara City (SC)",
                    "state": 7
                },
                {
                    "dist_id": 142,
                    "dist_name": "Sayajigunj",
                    "state": 7
                },
                {
                    "dist_id": 143,
                    "dist_name": "Akota",
                    "state": 7
                },
                {
                    "dist_id": 144,
                    "dist_name": "Raopura",
                    "state": 7
                },
                {
                    "dist_id": 145,
                    "dist_name": "Manjalpur",
                    "state": 7
                },
                {
                    "dist_id": 146,
                    "dist_name": "Padra",
                    "state": 7
                },
                {
                    "dist_id": 147,
                    "dist_name": "Karjan",
                    "state": 7
                },
                {
                    "dist_id": 148,
                    "dist_name": "Nandod (ST)",
                    "state": 7
                },
                {
                    "dist_id": 149,
                    "dist_name": "Dediapada (ST)",
                    "state": 7
                },
                {
                    "dist_id": 150,
                    "dist_name": "Jambusar",
                    "state": 7
                },
                {
                    "dist_id": 151,
                    "dist_name": "Vagra",
                    "state": 7
                },
                {
                    "dist_id": 152,
                    "dist_name": "Jhagadiya (ST)",
                    "state": 7
                },
                {
                    "dist_id": 153,
                    "dist_name": "Bharuch",
                    "state": 7
                },
                {
                    "dist_id": 154,
                    "dist_name": "Ankleshwar",
                    "state": 7
                },
                {
                    "dist_id": 155,
                    "dist_name": "Olpad",
                    "state": 7
                },
                {
                    "dist_id": 156,
                    "dist_name": "Mangrol (Surat) (ST)",
                    "state": 7
                },
                {
                    "dist_id": 147,
                    "dist_name": "Mandvi (Surat) (ST)",
                    "state": 7
                },
                {
                    "dist_id": 158,
                    "dist_name": "Kamrej",
                    "state": 7
                },
                {
                    "dist_id": 159,
                    "dist_name": "Surat East",
                    "state": 7
                },
                {
                    "dist_id": 160,
                    "dist_name": "Surat North",
                    "state": 7
                },
                {
                    "dist_id": 161,
                    "dist_name": "Varachha Road",
                    "state": 7
                },
                {
                    "dist_id": 162,
                    "dist_name": "Karanj",
                    "state": 7
                },
                {
                    "dist_id": 163,
                    "dist_name": "Limbayat",
                    "state": 7
                },
                {
                    "dist_id": 164,
                    "dist_name": "Udhana",
                    "state": 7
                },
                {
                    "dist_id": 165,
                    "dist_name": "Katargam",
                    "state": 7
                },
                {
                    "dist_id": 166,
                    "dist_name": "Katargam",
                    "state": 7
                },
                {
                    "dist_id": 167,
                    "dist_name": "Surat West",
                    "state": 7
                },
                {
                    "dist_id": 168,
                    "dist_name": "Choryasi",
                    "state": 7
                },
                {
                    "dist_id": 169,
                    "dist_name": "Bardoli (SC)",
                    "state": 7
                },
                {
                    "dist_id": 170,
                    "dist_name": "Mahuva (Surat) (ST)",
                    "state": 7
                },
                {
                    "dist_id": 171,
                    "dist_name": "Vyara (ST)",
                    "state": 7
                },
                {
                    "dist_id": 172,
                    "dist_name": "Nizar (ST)",
                    "state": 7
                },
                {
                    "dist_id": 173,
                    "dist_name": "Dangs (ST)",
                    "state": 7
                },
                {
                    "dist_id": 174,
                    "dist_name": "Jalalpore",
                    "state": 7
                },
                {
                    "dist_id": 175,
                    "dist_name": "Navsari",
                    "state": 7
                },
                {
                    "dist_id": 176,
                    "dist_name": "Gandevi (ST)",
                    "state": 7
                },
                {
                    "dist_id": 177,
                    "dist_name": "Vansda (ST)",
                    "state": 7
                },
                {
                    "dist_id": 178,
                    "dist_name": "Dharampur (ST)",
                    "state": 7
                },
                {
                    "dist_id": 179,
                    "dist_name": "Valsad",
                    "state": 7
                },
                {
                    "dist_id": 180,
                    "dist_name": "Pardi",
                    "state": 7
                },
                {
                    "dist_id": 181,
                    "dist_name": "Kaprada (ST)",
                    "state": 7
                },
                {
                    "dist_id": 182,
                    "dist_name": "Umbergaon (ST)",
                    "state": 7
                },

            ]
        },
        {
            "Id": "8",
            name: "Haryana",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Kalka",
                    "state": 8
                },
                {
                    "dist_id": 2,
                    "dist_name": "Panchkula",
                    "state": 8
                },
                {
                    "dist_id": 3,
                    "dist_name": "Naraingarh",
                    "state": 8
                },
                {
                    "dist_id": 4,
                    "dist_name": "Ambala Cant",
                    "state": 8
                },
                {
                    "dist_id": 5,
                    "dist_name": "Ambala City",
                    "state": 8
                },
                {
                    "dist_id": 6,
                    "dist_name": "Mulana",
                    "state": 8
                },
                {
                    "dist_id": 7,
                    "dist_name": "Sadhaura",
                    "state": 8
                },
                {
                    "dist_id": 8,
                    "dist_name": "Jagadhri",
                    "state": 8
                },
                {
                    "dist_id": 9,
                    "dist_name": "Yamunanagar",
                    "state": 8
                },
                {
                    "dist_id": 10,
                    "dist_name": "Radaur",
                    "state": 8
                },
                {
                    "dist_id": 11,
                    "dist_name": "Ladwa",
                    "state": 8
                },
                {
                    "dist_id": 12,
                    "dist_name": "Shahbad",
                    "state": 8
                },
                {
                    "dist_id": 13,
                    "dist_name": "Thanesar",
                    "state": 8
                },
                {
                    "dist_id": 14,
                    "dist_name": "Pehowa",
                    "state": 8
                },
                {
                    "dist_id": 15,
                    "dist_name": "Guhla",
                    "state": 8
                },
                {
                    "dist_id": 16,
                    "dist_name": "Kalayat",
                    "state": 8
                },
                {
                    "dist_id": 17,
                    "dist_name": "Kaithal",
                    "state": 8
                },
                {
                    "dist_id": 18,
                    "dist_name": "Pundri",
                    "state": 8
                },
                {
                    "dist_id": 19,
                    "dist_name": "Nilokheri",
                    "state": 8
                },
                {
                    "dist_id": 20,
                    "dist_name": "Indri",
                    "state": 8
                },
                {
                    "dist_id": 21,
                    "dist_name": "Karnal",
                    "state": 8
                },
                {
                    "dist_id": 22,
                    "dist_name": "Gharaunda",
                    "state": 8
                },
                {
                    "dist_id": 23,
                    "dist_name": "Assandh",
                    "state": 8
                },
                {
                    "dist_id": 24,
                    "dist_name": "Panipat Rural",
                    "state": 8
                },
                {
                    "dist_id": 25,
                    "dist_name": "Panipat City",
                    "state": 8
                },
                {
                    "dist_id": 26,
                    "dist_name": "Israna",
                    "state": 8
                },
                {
                    "dist_id": 27,
                    "dist_name": "Samalkha",
                    "state": 8
                },
                {
                    "dist_id": 28,
                    "dist_name": "Ganaur",
                    "state": 8
                },
                {
                    "dist_id": 29,
                    "dist_name": "Rai",
                    "state": 8
                },
                {
                    "dist_id": 30,
                    "dist_name": "Kharkhauda",
                    "state": 8
                },
                {
                    "dist_id": 31,
                    "dist_name": "Sonipat",
                    "state": 8
                },
                {
                    "dist_id": 32,
                    "dist_name": "Gohana",
                    "state": 8
                },
                {
                    "dist_id": 33,
                    "dist_name": "Baroda",
                    "state": 8
                },
                {
                    "dist_id": 34,
                    "dist_name": "Julana",
                    "state": 8
                },
                {
                    "dist_id": 35,
                    "dist_name": "Safidon",
                    "state": 8
                },
                {
                    "dist_id": 36,
                    "dist_name": "Jind",
                    "state": 8
                },
                {
                    "dist_id": 37,
                    "dist_name": "Uchana Kalan",
                    "state": 8
                },
                {
                    "dist_id": 38,
                    "dist_name": "Narwana",
                    "state": 8
                },
                {
                    "dist_id": 39,
                    "dist_name": "Tohana",
                    "state": 8
                },
                {
                    "dist_id": 40,
                    "dist_name": "Fatehabad",
                    "state": 8
                },
                {
                    "dist_id": 41,
                    "dist_name": "Ratia",
                    "state": 8
                },
                {
                    "dist_id": 42,
                    "dist_name": "Kalanwali",
                    "state": 8
                },
                {
                    "dist_id": 43,
                    "dist_name": "Dabwali",
                    "state": 8
                },
                {
                    "dist_id": 44,
                    "dist_name": "Rania",
                    "state": 8
                },
                {
                    "dist_id": 45,
                    "dist_name": "Sirsa",
                    "state": 8
                },
                {
                    "dist_id": 46,
                    "dist_name": "Ellenabad",
                    "state": 8
                },
                {
                    "dist_id": 47,
                    "dist_name": "Adampur",
                    "state": 8
                },
                {
                    "dist_id": 48,
                    "dist_name": "Uklana",
                    "state": 8
                },
                {
                    "dist_id": 49,
                    "dist_name": "Narnaund",
                    "state": 8
                },
                {
                    "dist_id": 50,
                    "dist_name": "Hansi",
                    "state": 8
                },
                {
                    "dist_id": 51,
                    "dist_name": "Barwala",
                    "state": 8
                },
                {
                    "dist_id": 52,
                    "dist_name": "Hisar",
                    "state": 8
                },
                {
                    "dist_id": 53,
                    "dist_name": "Nalwa",
                    "state": 8
                },
                {
                    "dist_id": 54,
                    "dist_name": "Loharu",
                    "state": 8
                },
                {
                    "dist_id": 55,
                    "dist_name": "Badhra",
                    "state": 8
                },
                {
                    "dist_id": 56,
                    "dist_name": "Dadri",
                    "state": 8
                },
                {
                    "dist_id": 57,
                    "dist_name": "Bhiwani",
                    "state": 8
                },
                {
                    "dist_id": 58,
                    "dist_name": "Tosham",
                    "state": 8
                },
                {
                    "dist_id": 59,
                    "dist_name": "Bawani Khera",
                    "state": 8
                },
                {
                    "dist_id": 60,
                    "dist_name": "Meham",
                    "state": 8
                },
                {
                    "dist_id": 61,
                    "dist_name": "Garhi Sampla-Kiloi",
                    "state": 8
                },
                {
                    "dist_id": 62,
                    "dist_name": "Rohtak",
                    "state": 8
                },
                {
                    "dist_id": 63,
                    "dist_name": "Kalanaur",
                    "state": 8
                },
                {
                    "dist_id": 64,
                    "dist_name": "Bahadurgarh",
                    "state": 8
                },
                {
                    "dist_id": 65,
                    "dist_name": "Badli",
                    "state": 8
                },
                {
                    "dist_id": 66,
                    "dist_name": "Jhajjar",
                    "state": 8
                },
                {
                    "dist_id": 67,
                    "dist_name": "Beri",
                    "state": 8
                },
                {
                    "dist_id": 68,
                    "dist_name": "Ateli",
                    "state": 8
                },
                {
                    "dist_id": 69,
                    "dist_name": "Mahendragarh",
                    "state": 8
                },
                {
                    "dist_id": 70,
                    "dist_name": "Narnaul",
                    "state": 8
                },
                {
                    "dist_id": 71,
                    "dist_name": "Nangal Chaudhry",
                    "state": 8
                },
                {
                    "dist_id": 72,
                    "dist_name": "Bawal",
                    "state": 8
                },
                {
                    "dist_id": 73,
                    "dist_name": "Kosli",
                    "state": 8
                },
                {
                    "dist_id": 74,
                    "dist_name": "Rewari",
                    "state": 8
                },
                {
                    "dist_id": 75,
                    "dist_name": "Pataudi",
                    "state": 8
                },
                {
                    "dist_id": 76,
                    "dist_name": "Badshahpur",
                    "state": 8
                },
                {
                    "dist_id": 77,
                    "dist_name": "Gurgaon",
                    "state": 8
                },
                {
                    "dist_id": 78,
                    "dist_name": "Sohna",
                    "state": 8
                },
                {
                    "dist_id": 79,
                    "dist_name": "Nuh",
                    "state": 8
                },
                {
                    "dist_id": 80,
                    "dist_name": "Ferozepur Jhirka",
                    "state": 8
                },
                {
                    "dist_id": 81,
                    "dist_name": "Punahana",
                    "state": 8
                },
                {
                    "dist_id": 82,
                    "dist_name": "Hathin",
                    "state": 8
                },
                {
                    "dist_id": 83,
                    "dist_name": "Hodal",
                    "state": 8
                },
                {
                    "dist_id": 84,
                    "dist_name": "Palwal",
                    "state": 8
                },
                {
                    "dist_id": 85,
                    "dist_name": "Prithla",
                    "state": 8
                },
                {
                    "dist_id": 86,
                    "dist_name": "Faridabad NIT",
                    "state": 8
                },
                {
                    "dist_id": 87,
                    "dist_name": "Badkhal",
                    "state": 8
                },
                {
                    "dist_id": 88,
                    "dist_name": "Ballabgarh",
                    "state": 8
                },
                {
                    "dist_id": 89,
                    "dist_name": "Faridabad",
                    "state": 8
                },
                {
                    "dist_id": 90,
                    "dist_name": "Tigaon",
                    "state": 8
                }
            ]
        },

        {
            "Id": "9",
            name: "Himachal Pradesh",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Churah (SC)",
                    "state": 9
                },
                {
                    "dist_id": 2,
                    "dist_name": "Bharmour (ST)",
                    "state": 9
                },
                {
                    "dist_id": 3,
                    "dist_name": "Chamba",
                    "state": 9
                },
                {
                    "dist_id": 4,
                    "dist_name": "Dalhousie",
                    "state": 9
                },
                {
                    "dist_id": 5,
                    "dist_name": "Bhattiyat",
                    "state": 9
                },
                {
                    "dist_id": 6,
                    "dist_name": "Nurpur",
                    "state": 9
                },
                {
                    "dist_id": 7,
                    "dist_name": "Indora",
                    "state": 9
                },
                {
                    "dist_id": 8,
                    "dist_name": "Fatehpur",
                    "state": 9
                },
                {
                    "dist_id": 9,
                    "dist_name": "Jawali",
                    "state": 9
                },
                {
                    "dist_id": 10,
                    "dist_name": "Dehra",
                    "state": 9
                },
                {
                    "dist_id": 11,
                    "dist_name": "Jaswan-Pragpur",
                    "state": 9
                },
                {
                    "dist_id": 12,
                    "dist_name": "Jawalamukhi",
                    "state": 9
                },
                {
                    "dist_id": 13,
                    "dist_name": "Jaisinghpur (SC)",
                    "state": 9
                },
                {
                    "dist_id": 14,
                    "dist_name": "Sullah",
                    "state": 9
                },
                {
                    "dist_id": 15,
                    "dist_name": "Nagrota",
                    "state": 9
                },
                {
                    "dist_id": 16,
                    "dist_name": "Kangra",
                    "state": 9
                },
                {
                    "dist_id": 17,
                    "dist_name": "Shahpur",
                    "state": 9
                },
                {
                    "dist_id": 18,
                    "dist_name": "Dharamshala",
                    "state": 9
                },
                {
                    "dist_id": 19,
                    "dist_name": "Palampur",
                    "state": 9
                },
                {
                    "dist_id": 20,
                    "dist_name": "Baijnath (SC)",
                    "state": 9
                },
                {
                    "dist_id": 21,
                    "dist_name": "Lahaul and Spiti (ST)",
                    "state": 9
                },
                {
                    "dist_id": 22,
                    "dist_name": "Manali",
                    "state": 9
                },
                {
                    "dist_id": 23,
                    "dist_name": "Kullu",
                    "state": 9
                },
                {
                    "dist_id": 24,
                    "dist_name": "Banjar",
                    "state": 9
                },
                {
                    "dist_id": 25,
                    "dist_name": "Anni (SC)",
                    "state": 9
                },
                {
                    "dist_id": 26,
                    "dist_name": "Karsog (SC)",
                    "state": 9
                },
                {
                    "dist_id": 27,
                    "dist_name": "Sundernagar",
                    "state": 9
                },
                {
                    "dist_id": 28,
                    "dist_name": "Nachan (SC)",
                    "state": 9
                },
                {
                    "dist_id": 29,
                    "dist_name": "Seraj",
                    "state": 9
                },
                {
                    "dist_id": 30,
                    "dist_name": "Darang",
                    "state": 9
                },
                {
                    "dist_id": 31,
                    "dist_name": "Jogindernagar",
                    "state": 9
                },
                {
                    "dist_id": 32,
                    "dist_name": "Dharampur",
                    "state": 9
                },
                {
                    "dist_id": 33,
                    "dist_name": "Mandi",
                    "state": 9
                },
                {
                    "dist_id": 34,
                    "dist_name": "Balh (SC)",
                    "state": 9
                },
                {
                    "dist_id": 35,
                    "dist_name": "Sarkaghat",
                    "state": 9
                },
                {
                    "dist_id": 36,
                    "dist_name": "Bhorani (SC)",
                    "state": 9
                },
                {
                    "dist_id": 37,
                    "dist_name": "Sujanpur",
                    "state": 9
                },
                {
                    "dist_id": 38,
                    "dist_name": "Hamirpur",
                    "state": 9
                },
                {
                    "dist_id": 39,
                    "dist_name": "Barsar",
                    "state": 9
                },
                {
                    "dist_id": 40,
                    "dist_name": "Nadaun",
                    "state": 9
                },
                {
                    "dist_id": 41,
                    "dist_name": "Chintpuri (SC)",
                    "state": 9
                },
                {
                    "dist_id": 42,
                    "dist_name": "Gagret",
                    "state": 9
                },
                {
                    "dist_id": 43,
                    "dist_name": "Haroli",
                    "state": 9
                },
                {
                    "dist_id": 44,
                    "dist_name": "Una",
                    "state": 9
                },
                {
                    "dist_id": 45,
                    "dist_name": "Kutlehar",
                    "state": 9
                },
                {
                    "dist_id": 46,
                    "dist_name": "Jhanduta (SC)",
                    "state": 9
                },
                {
                    "dist_id": 47,
                    "dist_name": "Ghumarwin",
                    "state": 9
                },
                {
                    "dist_id": 48,
                    "dist_name": "Bilaspur",
                    "state": 9
                },
                {
                    "dist_id": 49,
                    "dist_name": "Sri Naina Devji",
                    "state": 9
                },
                {
                    "dist_id": 50,
                    "dist_name": "Arki",
                    "state": 9
                },
                {
                    "dist_id": 51,
                    "dist_name": "Nalagarh",
                    "state": 9
                },
                {
                    "dist_id": 52,
                    "dist_name": "Doon",
                    "state": 9
                },
                {
                    "dist_id": 53,
                    "dist_name": "Solan (SC)",
                    "state": 9
                },
                {
                    "dist_id": 54,
                    "dist_name": "Kasauli (SC)",
                    "state": 9
                },
                {
                    "dist_id": 55,
                    "dist_name": "Pachhad (SC)",
                    "state": 9
                },
                {
                    "dist_id": 56,
                    "dist_name": "Nahan",
                    "state": 9
                },
                {
                    "dist_id": 57,
                    "dist_name": "Sri Renukaji (SC)",
                    "state": 9
                },
                {
                    "dist_id": 58,
                    "dist_name": "Paonta Sahib",
                    "state": 9
                },
                {
                    "dist_id": 59,
                    "dist_name": "Shillai",
                    "state": 9
                },
                {
                    "dist_id": 60,
                    "dist_name": "Chopal",
                    "state": 9
                },
                {
                    "dist_id": 61,
                    "dist_name": "Theog",
                    "state": 9
                },
                {
                    "dist_id": 62,
                    "dist_name": "Kasumpti",
                    "state": 9
                },
                {
                    "dist_id": 63,
                    "dist_name": "Shimla",
                    "state": 9
                },
                {
                    "dist_id": 64,
                    "dist_name": "Shimla Rural",
                    "state": 9
                },
                {
                    "dist_id": 65,
                    "dist_name": "Jubbal-Kotkhai",
                    "state": 9
                },
                {
                    "dist_id": 66,
                    "dist_name": "Rampur (SC)",
                    "state": 9
                },
                {
                    "dist_id": 67,
                    "dist_name": "Rohru (SC)",
                    "state": 9
                },
                {
                    "dist_id": 68,
                    "dist_name": "Kinnaur (ST)",
                    "state": 9
                }

            ]

        },
        {
            "Id": "10",
            name: "Jharkhand",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Rajmahal",
                    "state": 10
                },
                {
                    "dist_id": 2,
                    "dist_name": "Borio",
                    "state": 10
                },
                {
                    "dist_id": 3,
                    "dist_name": "Barhait",
                    "state": 10
                },
                {
                    "dist_id": 4,
                    "dist_name": "Litipara",
                    "state": 10
                },
                {
                    "dist_id": 5,
                    "dist_name": "Pakur",
                    "state": 10
                },
                {
                    "dist_id": 6,
                    "dist_name": "Maheshpur",
                    "state": 10
                },
                {
                    "dist_id": 7,
                    "dist_name": "Sikaripara",
                    "state": 10
                },
                {
                    "dist_id": 8,
                    "dist_name": "Nala",
                    "state": 10
                },
                {
                    "dist_id": 9,
                    "dist_name": "Jamtara",
                    "state": 10
                },
                {
                    "dist_id": 10,
                    "dist_name": "Dumka",
                    "state": 10
                },
                {
                    "dist_id": 11,
                    "dist_name": "Jama",
                    "state": 10
                },
                {
                    "dist_id": 12,
                    "dist_name": "Jarmundi",
                    "state": 10
                },
                {
                    "dist_id": 13,
                    "dist_name": "Madhupur",
                    "state": 10
                },
                {
                    "dist_id": 14,
                    "dist_name": "Sarath",
                    "state": 10
                },
                {
                    "dist_id": 15,
                    "dist_name": "Deoghar",
                    "state": 10
                },
                {
                    "dist_id": 16,
                    "dist_name": "Pareyahat",
                    "state": 10
                },
                {
                    "dist_id": 17,
                    "dist_name": "Godda",
                    "state": 10
                },
                {
                    "dist_id": 18,
                    "dist_name": "Mahagama",
                    "state": 10
                },
                {
                    "dist_id": 19,
                    "dist_name": "Kodarma",
                    "state": 10
                },
                {
                    "dist_id": 20,
                    "dist_name": "Barkatha",
                    "state": 10
                },
                {
                    "dist_id": 21,
                    "dist_name": "Barhi",
                    "state": 10
                },
                {
                    "dist_id": 22,
                    "dist_name": "Barkagaon",
                    "state": 10
                },
                {
                    "dist_id": 23,
                    "dist_name": "Ramgarh",
                    "state": 10
                },
                {
                    "dist_id": 24,
                    "dist_name": "Mandu",
                    "state": 10
                },
                {
                    "dist_id": 25,
                    "dist_name": "Hazaribagh",
                    "state": 10
                },
                {
                    "dist_id": 26,
                    "dist_name": "Simaria",
                    "state": 10
                },
                {
                    "dist_id": 27,
                    "dist_name": "Chatra",
                    "state": 10
                },
                {
                    "dist_id": 28,
                    "dist_name": "Dhanwar",
                    "state": 10
                },
                {
                    "dist_id": 29,
                    "dist_name": "Chatra",
                    "state": 10
                },
                {
                    "dist_id": 30,
                    "dist_name": "Dhanwar",
                    "state": 10
                },
                {
                    "dist_id": 31,
                    "dist_name": "Bagodar",
                    "state": 10
                },
                {
                    "dist_id": 32,
                    "dist_name": "Jamua",
                    "state": 10
                },
                {
                    "dist_id": 33,
                    "dist_name": "Girdhi",
                    "state": 10
                },
                {
                    "dist_id": 34,
                    "dist_name": "Gomia",
                    "state": 10
                },
                {
                    "dist_id": 35,
                    "dist_name": "Bermo",
                    "state": 10
                },
                {
                    "dist_id": 36,
                    "dist_name": "Bokaro",
                    "state": 10
                },
                {
                    "dist_id": 37,
                    "dist_name": "Chandankiyari",
                    "state": 10
                },
                {
                    "dist_id": 38,
                    "dist_name": "Sindri",
                    "state": 10
                },
                {
                    "dist_id": 39,
                    "dist_name": "Nirsa",
                    "state": 10
                },
                {
                    "dist_id": 40,
                    "dist_name": "Dhanbad",
                    "state": 10
                },
                {
                    "dist_id": 41,
                    "dist_name": "Jharia",
                    "state": 10
                },
                {
                    "dist_id": 42,
                    "dist_name": "Tundi",
                    "state": 10
                },
                {
                    "dist_id": 43,
                    "dist_name": "Baghmara",
                    "state": 10
                },
                {
                    "dist_id": 44,
                    "dist_name": "Baharagora",
                    "state": 10
                },
                {
                    "dist_id": 45,
                    "dist_name": "Ghatsila",
                    "state": 10
                },
                {
                    "dist_id": 46,
                    "dist_name": "Potka",
                    "state": 10
                },
                {
                    "dist_id": 47,
                    "dist_name": "Jugsalai",
                    "state": 10
                },
                {
                    "dist_id": 48,
                    "dist_name": "Jamshedpur East",
                    "state": 10
                },
                {
                    "dist_id": 49,
                    "dist_name": "Jamshedpur West",
                    "state": 10
                },
                {
                    "dist_id": 50,
                    "dist_name": "Ichaghar",
                    "state": 10
                },
                {
                    "dist_id": 51,
                    "dist_name": "Seraikella",
                    "state": 10
                },
                {
                    "dist_id": 52,
                    "dist_name": "Chaibasa",
                    "state": 10
                },
                {
                    "dist_id": 53,
                    "dist_name": "Majhgaon",
                    "state": 10
                },
                {
                    "dist_id": 54,
                    "dist_name": "Jaganthpur",
                    "state": 10
                },
                {
                    "dist_id": 55,
                    "dist_name": "Manoharpur",
                    "state": 10
                },
                {
                    "dist_id": 56,
                    "dist_name": "Chakradharpur",
                    "state": 10
                },
                {
                    "dist_id": 57,
                    "dist_name": "Kharsawan",
                    "state": 10
                },
                {
                    "dist_id": 58,
                    "dist_name": "Tamar",
                    "state": 10
                },
                {
                    "dist_id": 59,
                    "dist_name": "Torpa",
                    "state": 10
                },
                {
                    "dist_id": 60,
                    "dist_name": "Khunti",
                    "state": 10
                },
                {
                    "dist_id": 61,
                    "dist_name": "Silli",
                    "state": 10
                },
                {
                    "dist_id": 62,
                    "dist_name": "Khijri",
                    "state": 10
                },
                {
                    "dist_id": 63,
                    "dist_name": "Ranchi",
                    "state": 10
                },
                {
                    "dist_id": 64,
                    "dist_name": "Hatia",
                    "state": 10
                },
                {
                    "dist_id": 65,
                    "dist_name": "Kanke",
                    "state": 10
                },
                {
                    "dist_id": 66,
                    "dist_name": "Mandar",
                    "state": 10
                },
                {
                    "dist_id": 67,
                    "dist_name": "Sisai",
                    "state": 10
                },
                {
                    "dist_id": 68,
                    "dist_name": "Gumla",
                    "state": 10
                },
                {
                    "dist_id": 69,
                    "dist_name": "Bishunpur",
                    "state": 10
                },
                {
                    "dist_id": 70,
                    "dist_name": "Simdega",
                    "state": 10
                },
                {
                    "dist_id": 71,
                    "dist_name": "Kolebira",
                    "state": 10
                },
                {
                    "dist_id": 72,
                    "dist_name": "Lohardaga",
                    "state": 10
                },
                {
                    "dist_id": 73,
                    "dist_name": "Maika",
                    "state": 10
                },
                {
                    "dist_id": 74,
                    "dist_name": "Latehar",
                    "state": 10
                },
                {
                    "dist_id": 75,
                    "dist_name": "Panki",
                    "state": 10
                },
                {
                    "dist_id": 76,
                    "dist_name": "Daltonganj",
                    "state": 10
                },
                {
                    "dist_id": 77,
                    "dist_name": "Bishrampur",
                    "state": 10
                },
                {
                    "dist_id": 78,
                    "dist_name": "Chhatarpur",
                    "state": 10
                },
                {
                    "dist_id": 79,
                    "dist_name": "Hussainabad",
                    "state": 10
                },
                {
                    "dist_id": 80,
                    "dist_name": "Garhwa",
                    "state": 10
                },
                {
                    "dist_id": 81,
                    "dist_name": "Bhawanathpur",
                    "state": 10
                },



            ]

        },
        {
            "Id": "11",
            name: "Karnataka",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Nippani",
                    "state": 11
                },
                {
                    "dist_id": 2,
                    "dist_name": "Chikkodi-Sadalga",
                    "state": 11
                },
                {
                    "dist_id": 3,
                    "dist_name": "Athani",
                    "state": 11
                },
                {
                    "dist_id": 4,
                    "dist_name": "Kagwad",
                    "state": 11
                },
                {
                    "dist_id": 5,
                    "dist_name": "Kudachi (SC)",
                    "state": 11
                },
                {
                    "dist_id": 6,
                    "dist_name": "Raibag (SC)",
                    "state": 11
                },
                {
                    "dist_id": 7,
                    "dist_name": "Hukkeri",
                    "state": 11
                },
                {
                    "dist_id": 8,
                    "dist_name": "Arabhavi",
                    "state": 11
                },
                {
                    "dist_id": 9,
                    "dist_name": "Gokak",
                    "state": 11
                },
                {
                    "dist_id": 10,
                    "dist_name": "Yemkanmardi (ST)",
                    "state": 11
                },
                {
                    "dist_id": 11,
                    "dist_name": "Belgaum Uttar",
                    "state": 11
                },
                {
                    "dist_id": 12,
                    "dist_name": "Belgaum Dakshin",
                    "state": 11
                },
                {
                    "dist_id": 13,
                    "dist_name": "Belgaum Rural",
                    "state": 11
                },
                {
                    "dist_id": 14,
                    "dist_name": "Khanapur",
                    "state": 11
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kittur ",
                    "state": 11
                },
                {
                    "dist_id": 16,
                    "dist_name": "Bailhongal",
                    "state": 11
                },
                {
                    "dist_id": 17,
                    "dist_name": "Saundatti Yellamma",
                    "state": 11
                },
                {
                    "dist_id": 18,
                    "dist_name": "Ramdurg",
                    "state": 11
                },
                {
                    "dist_id": 19,
                    "dist_name": "Mundhol (SC)",
                    "state": 11
                },
                {
                    "dist_id": 20,
                    "dist_name": "Terdal",
                    "state": 11
                },
                {
                    "dist_id": 21,
                    "dist_name": "Jamkhandi",
                    "state": 11
                },
                {
                    "dist_id": 22,
                    "dist_name": "Bilgi",
                    "state": 11
                },
                {
                    "dist_id": 23,
                    "dist_name": "Badami",
                    "state": 11
                },
                {
                    "dist_id": 24,
                    "dist_name": "Bagalkot",
                    "state": 11
                },
                {
                    "dist_id": 25,
                    "dist_name": "Hungund",
                    "state": 11
                },
                {
                    "dist_id": 26,
                    "dist_name": "Muddebihal",
                    "state": 11
                },
                {
                    "dist_id": 27,
                    "dist_name": "Devar Hippargi",
                    "state": 11
                },
                {
                    "dist_id": 28,
                    "dist_name": "Basavana Bagevadi",
                    "state": 11
                },
                {
                    "dist_id": 29,
                    "dist_name": "Babaleshwar",
                    "state": 11
                },
                {
                    "dist_id": 30,
                    "dist_name": "Bijapur City",
                    "state": 11
                },
                {
                    "dist_id": 31,
                    "dist_name": "Nagathan (SC)",
                    "state": 11,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Indi",
                    "state": 11
                },
                {
                    "dist_id": 33,
                    "dist_name": "Sindagi",
                    "state": 11
                },
                {
                    "dist_id": 34,
                    "dist_name": "Afzalpur",
                    "state": 11
                },
                {
                    "dist_id": 35,
                    "dist_name": "Jevargi",
                    "state": 11
                },
                {
                    "dist_id": 36,
                    "dist_name": "Shorapur (ST)",
                    "state": 11
                },
                {
                    "dist_id": 37,
                    "dist_name": "Shahapur",
                    "state": 11
                },
                {
                    "dist_id": 38,
                    "dist_name": "Yadgir",
                    "state": 11
                },
                {
                    "dist_id": 39,
                    "dist_name": "Gurmitkal",
                    "state": 11
                },
                {
                    "dist_id": 40,
                    "dist_name": "Chittapur (SC)",
                    "state": 11
                },
                {
                    "dist_id": 41,
                    "dist_name": "Sedam",
                    "state": 11
                },
                {
                    "dist_id": 42,
                    "dist_name": "Chincholi (SC)",
                    "state": 11
                },
                {
                    "dist_id": 43,
                    "dist_name": "Gulbarga Rural",
                    "state": 11
                },
                {
                    "dist_id": 44,
                    "dist_name": "Gulbarga Dakshin",
                    "state": 11
                },
                {
                    "dist_id": 45,
                    "dist_name": "Gulbarga Uttar",
                    "state": 11
                },
                {
                    "dist_id": 46,
                    "dist_name": "Aland",
                    "state": 11
                },
                {
                    "dist_id": 47,
                    "dist_name": "Basavakalyan",
                    "state": 11
                },
                {
                    "dist_id": 48,
                    "dist_name": "Humnabad",
                    "state": 11
                },
                {
                    "dist_id": 49,
                    "dist_name": "Bidar South",
                    "state": 11
                },
                {
                    "dist_id": 50,
                    "dist_name": "Bidar",
                    "state": 11,
                },
                {
                    "dist_id": 51,
                    "dist_name": "Bhalki",
                    "state": 11
                },
                {
                    "dist_id": 52,
                    "dist_name": "Aurad (SC)",
                    "state": 11
                },
                {
                    "dist_id": 53,
                    "dist_name": "Raichur Rural (ST)",
                    "state": 11
                },
                {
                    "dist_id": 54,
                    "dist_name": "Raichur",
                    "state": 11
                },
                {
                    "dist_id": 55,
                    "dist_name": "Manvi (ST)",
                    "state": 11
                },
                {
                    "dist_id": 56,
                    "dist_name": "Devadurga (ST)",
                    "state": 11
                },
                {
                    "dist_id": 57,
                    "dist_name": "Lingsugut (SC)",
                    "state": 11
                },
                {
                    "dist_id": 58,
                    "dist_name": "Sindhanur",
                    "state": 11
                },
                {
                    "dist_id": 59,
                    "dist_name": "Maski (ST)",
                    "state": 11
                },
                {
                    "dist_id": 60,
                    "dist_name": "Kushtagi",
                    "state": 11
                },
                {
                    "dist_id": 61,
                    "dist_name": "Kanakagiri (SC)",
                    "state": 11
                },
                {
                    "dist_id": 62,
                    "dist_name": "Gangawati",
                    "state": 11
                },
                {
                    "dist_id": 63,
                    "dist_name": "Yelburga",
                    "state": 11
                },
                {
                    "dist_id": 64,
                    "dist_name": "Koppal",
                    "state": 11
                },
                {
                    "dist_id": 65,
                    "dist_name": "Shirahatti (SC)",
                    "state": 11
                },
                {
                    "dist_id": 66,
                    "dist_name": "Gadag",
                    "state": 11
                },
                {
                    "dist_id": 67,
                    "dist_name": "Ron",
                    "state": 11
                },
                {
                    "dist_id": 68,
                    "dist_name": "Nargund",
                    "state": 11
                },
                {
                    "dist_id": 69,
                    "dist_name": "Navalgund",
                    "state": 11
                },
                {
                    "dist_id": 70,
                    "dist_name": "Kundgol",
                    "state": 11
                },
                {
                    "dist_id": 71,
                    "dist_name": "Dharwad",

                    "state": 11
                },
                {
                    "dist_id": 72,
                    "dist_name": "Hubli-Dharwad East (SC)",

                    "state": 11
                },
                {
                    "dist_id": 73,
                    "dist_name": "Hubli-Dharwad Central",

                    "state": 11
                },
                {
                    "dist_id": 74,
                    "dist_name": "Hubli-Dharwad West",

                    "state": 11
                },
                {
                    "dist_id": 75,
                    "dist_name": "Kalghatgi",

                    "state": 11
                },
                {
                    "dist_id": 76,
                    "dist_name": "Haliyal",

                    "state": 11
                },
                {
                    "dist_id": 77,
                    "dist_name": "Karwar",

                    "state": 11
                },
                {
                    "dist_id": 78,
                    "dist_name": "Kumta",

                    "state": 11
                },
                {
                    "dist_id": 79,
                    "dist_name": "Bhatkal",
                    "state": 11
                },
                {
                    "dist_id": 80,
                    "dist_name": "Sirsi",
                    "state": 11
                },
                {
                    "dist_id": 81,
                    "dist_name": "Yellapur",
                    "state": 11
                },
                {
                    "dist_id": 82,
                    "dist_name": "Hangal",
                    "state": 11
                }, {
                    "dist_id": 83,
                    "dist_name": "Shiggaon",
                    "state": 11
                },
                {
                    "dist_id": 84,
                    "dist_name": "Haveri (SC)",
                    "state": 11
                },
                {
                    "dist_id": 85,
                    "dist_name": "Byadgi",
                    "state": 11
                },
                {
                    "dist_id": 86,
                    "dist_name": "Hirekerur",
                    "state": 11
                },
                {
                    "dist_id": 87,
                    "dist_name": "Ranebennur",
                    "state": 11
                },
                {
                    "dist_id": 88,
                    "dist_name": "Hadagalli (SC)",
                    "state": 11
                },
                {
                    "dist_id": 89,
                    "dist_name": "Hagaribommanahalli (SC)",
                    "state": 11
                },
                {
                    "dist_id": 90,
                    "dist_name": "Vijayanagara",
                    "state": 11
                },
                {
                    "dist_id": 91,
                    "dist_name": "Kampli (ST)",

                    "state": 11
                },
                {
                    "dist_id": 92,
                    "dist_name": "Siruguppa (ST)",

                    "state": 11
                },
                {
                    "dist_id": 93,
                    "dist_name": "Bellary (ST)",
                    "state": 11
                },
                {
                    "dist_id": 94,
                    "dist_name": "Bellary City",
                    "state": 11
                },
                {
                    "dist_id": 95,
                    "dist_name": "Sandur",
                    "state": 11
                },
                {
                    "dist_id": 96,
                    "dist_name": "Kudligi (ST)",
                    "state": 11,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Molakalmuru(ST)",
                    "state": 11
                },
                {
                    "dist_id": 98,
                    "dist_name": "Challakere",
                    "state": 11
                },
                {
                    "dist_id": 99,
                    "dist_name": "Chitradurga",
                    "state": 11
                },
                {
                    "dist_id": 100,
                    "dist_name": "Hiriyur",
                    "state": 11
                },
                {
                    "dist_id": 101,
                    "dist_name": "Hosadurga",
                    "state": 11
                },
                {
                    "dist_id": 102,
                    "dist_name": "Holalkere (SC)",
                    "state": 11
                },
                {
                    "dist_id": 103,
                    "dist_name": "Jagalur (ST)",
                    "state": 11
                },
                {
                    "dist_id": 104,
                    "dist_name": "Harapanahalli",
                    "state": 11
                },
                {
                    "dist_id": 105,
                    "dist_name": "Harihar",
                    "state": 11
                },
                {
                    "dist_id": 106,
                    "dist_name": "Davanagere North",
                    "state": 11
                },
                {
                    "dist_id": 107,
                    "dist_name": "Davanagere South",
                    "state": 11
                },
                {
                    "dist_id": 108,
                    "dist_name": "Mayakonda (SC)",
                    "state": 11
                },
                {
                    "dist_id": 109,
                    "dist_name": "channagiri",
                    "state": 11
                },
                {
                    "dist_id": 110,
                    "dist_name": "Honnali",
                    "state": 11
                },
                {
                    "dist_id": 111,
                    "dist_name": "Shimoga Rural (SC)",
                    "state": 11
                },
                {
                    "dist_id": 112,
                    "dist_name": "Bhadravati",
                    "state": 11,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Shimoga",
                    "state": 11
                },
                {
                    "dist_id": 114,
                    "dist_name": "Tirthahalli",
                    "state": 11
                },
                {
                    "dist_id": 115,
                    "dist_name": "Shikaripura",
                    "state": 11
                },
                {
                    "dist_id": 116,
                    "dist_name": "Sorab",
                    "state": 11
                },
                {
                    "dist_id": 117,
                    "dist_name": "Sagar",
                    "state": 11
                },
                {
                    "dist_id": 118,
                    "dist_name": "Byndoor",
                    "state": 11
                },
                {
                    "dist_id": 119,
                    "dist_name": "Kundapura",
                    "state": 11
                },
                {
                    "dist_id": 120,
                    "dist_name": "Udupi",
                    "state": 11
                },
                {
                    "dist_id": 121,
                    "dist_name": "Kapu",
                    "state": 11
                },
                {
                    "dist_id": 122,
                    "dist_name": "Karkala",
                    "state": 11
                },
                {
                    "dist_id": 123,
                    "dist_name": "Sringeri",
                    "state": 11
                },
                {
                    "dist_id": 124,
                    "dist_name": "Mudigere (SC)",
                    "state": 11
                },
                {
                    "dist_id": 125,
                    "dist_name": "Chikmagalur",
                    "state": 11
                },
                {
                    "dist_id": 126,
                    "dist_name": "Tarikere",
                    "state": 11
                },
                {
                    "dist_id": 127,
                    "dist_name": "Kadur",
                    "state": 11
                },
                {
                    "dist_id": 128,
                    "dist_name": "Chiknayakanhalli",
                    "state": 11
                },
                {
                    "dist_id": 129,
                    "dist_name": "Tiptur",
                    "state": 11
                },
                {
                    "dist_id": 130,
                    "dist_name": "Turuvekere",
                    "state": 11
                },
                {
                    "dist_id": 131,
                    "dist_name": "Kunigal",
                    "state": 11
                },
                {
                    "dist_id": 132,
                    "dist_name": "Tumkur City",
                    "state": 11
                },
                {
                    "dist_id": 133,
                    "dist_name": "Tumkur Rural",
                    "state": 11
                },
                {
                    "dist_id": 134,
                    "dist_name": "Koratagere (SC)",
                    "state": 11
                },
                {
                    "dist_id": 135,
                    "dist_name": "Gubbi",
                    "state": 11
                },
                {
                    "dist_id": 136,
                    "dist_name": "Sira",
                    "state": 11
                },
                {
                    "dist_id": 137,
                    "dist_name": "Pavagada (SC)",
                    "state": 11
                },
                {
                    "dist_id": 138,
                    "dist_name": "Madhuguri",
                    "state": 11
                },
                {
                    "dist_id": 139,
                    "dist_name": "Gauribidanur",
                    "state": 11
                },
                {
                    "dist_id": 140,
                    "dist_name": "Bagepalli",
                    "state": 11,
                },
                {
                    "dist_id": 141,
                    "dist_name": "Chikkaballapur",
                    "state": 11
                },
                {
                    "dist_id": 142,
                    "dist_name": "Sidlaghatta",
                    "state": 11
                },
                {
                    "dist_id": 143,
                    "dist_name": "chintamani",
                    "state": 11
                },
                {
                    "dist_id": 144,
                    "dist_name": "Srinivaspur",
                    "state": 11
                },
                {
                    "dist_id": 145,
                    "dist_name": "Mulbagal (SC)",
                    "state": 11
                },
                {
                    "dist_id": 146,
                    "dist_name": "Kolar",
                    "state": 11
                },
                {
                    "dist_id": 147,
                    "dist_name": "Bangarapet (SC)",
                    "state": 11
                },
                {
                    "dist_id": 148,
                    "dist_name": "Kolar",
                    "state": 11
                },
                {
                    "dist_id": 149,
                    "dist_name": "Malur",
                    "state": 11
                },
                {
                    "dist_id": 150,
                    "dist_name": "Yelahanka",
                    "state": 11
                },
                {
                    "dist_id": 151,
                    "dist_name": "Krishnarajapuram",
                    "state": 11
                },
                {
                    "dist_id": 152,
                    "dist_name": "Byatarayanapura",
                    "state": 11
                },
                {
                    "dist_id": 153,
                    "dist_name": "Yeshwantpur",
                    "state": 11
                },
                {
                    "dist_id": 154,
                    "dist_name": "Rajarajeshwarinagar",
                    "state": 11
                },
                {
                    "dist_id": 155,
                    "dist_name": "Dasarahalli",
                    "state": 11
                },
                {
                    "dist_id": 156,
                    "dist_name": "Mahalakshmi Layout",
                    "state": 11
                },
                {
                    "dist_id": 157,
                    "dist_name": "Malleshwaram",
                    "state": 11
                },
                {
                    "dist_id": 158,
                    "dist_name": "Hebbal",
                    "state": 11
                },
                {
                    "dist_id": 159,
                    "dist_name": "Pulakeshinagar (SC)",
                    "state": 11
                },
                {
                    "dist_id": 160,
                    "dist_name": "Sarvagnagar",
                    "state": 11
                },
                {
                    "dist_id": 161,
                    "dist_name": "C.V. Raman Nagar (SC)",
                    "state": 11
                },
                {
                    "dist_id": 162,
                    "dist_name": "Shivajinagar",
                    "state": 11,
                },
                {
                    "dist_id": 163,
                    "dist_name": "Shanti Nagar",
                    "state": 11
                },
                {
                    "dist_id": 164,
                    "dist_name": "Gandhi Nagar",
                    "state": 11
                },
                {
                    "dist_id": 165,
                    "dist_name": "Rajaji Nagar",
                    "state": 11
                },
                {
                    "dist_id": 166,
                    "dist_name": "Govindraj Nagar",
                    "state": 11
                },
                {
                    "dist_id": 167,
                    "dist_name": "Vijay Nagar",
                    "state": 11
                },
                {
                    "dist_id": 168,
                    "dist_name": "Chamrajpet",
                    "state": 11
                },
                {
                    "dist_id": 169,
                    "dist_name": "Chickpet",
                    "state": 11
                },
                {
                    "dist_id": 170,
                    "dist_name": "Basavanagudi",
                    "state": 11
                },
                {
                    "dist_id": 171,
                    "dist_name": "Padmanabhanagar",
                    "state": 11
                },
                {
                    "dist_id": 172,
                    "dist_name": "B.T.M Layout",
                    "state": 11
                },
                {
                    "dist_id": 173,
                    "dist_name": "Jayanagar",
                    "state": 11
                },
                {
                    "dist_id": 174,
                    "dist_name": "Mahadevapura (SC)",
                    "state": 11
                },
                {
                    "dist_id": 175,
                    "dist_name": "Bommanhalli",
                    "state": 11
                },
                {
                    "dist_id": 176,
                    "dist_name": "Bangalore South",
                    "state": 11
                },
                {
                    "dist_id": 177,
                    "dist_name": "Anekal (SC)",
                    "state": 11
                },
                {
                    "dist_id": 178,
                    "dist_name": "Koskote",
                    "state": 11
                },
                {
                    "dist_id": 179,
                    "dist_name": "Devanahalli (SC)",
                    "state": 11
                },
                {
                    "dist_id": 180,
                    "dist_name": "Doddaballapur",
                    "state": 11
                },
                {
                    "dist_id": 181,
                    "dist_name": "Nelmangala (SC)",
                    "state": 11
                },
                {
                    "dist_id": 182,
                    "dist_name": "Magadi",
                    "state": 11
                },
                {
                    "dist_id": 183,
                    "dist_name": "Ramanagaram",
                    "state": 11
                },
                {
                    "dist_id": 184,
                    "dist_name": "Kanakapura",
                    "state": 11
                },
                {
                    "dist_id": 185,
                    "dist_name": "Channapatna",
                    "state": 11
                },
                {
                    "dist_id": 186,
                    "dist_name": "Malavalli (SC)",
                    "state": 11
                },
                {
                    "dist_id": 187,
                    "dist_name": "Maddur",
                    "state": 11
                },
                {
                    "dist_id": 188,
                    "dist_name": "Melukote",
                    "state": 11
                },
                {
                    "dist_id": 189,
                    "dist_name": "Mandya",
                    "state": 11
                },
                {
                    "dist_id": 190,
                    "dist_name": "Shrirangapattana",
                    "state": 11
                },
                {
                    "dist_id": 191,
                    "dist_name": "Nagamangala",
                    "state": 11
                },
                {
                    "dist_id": 192,
                    "dist_name": "Krishnarajapet",
                    "state": 11
                },
                {
                    "dist_id": 193,
                    "dist_name": "Shravanabelagola",
                    "state": 11
                },

                {
                    "dist_id": 194,
                    "dist_name": "Arsikere",
                    "state": 11
                },
                {
                    "dist_id": 195,
                    "dist_name": "Belur",
                    "state": 11
                },
                {
                    "dist_id": 196,
                    "dist_name": "Hassan",
                    "state": 11
                },

                {
                    "dist_id": 197,
                    "dist_name": "Holenarasipur",
                    "state": 11
                },
                {
                    "dist_id": 198,
                    "dist_name": "Arkalgud",
                    "state": 11
                },
                {
                    "dist_id": 199,
                    "dist_name": "Sakleshpur (SC)",
                    "state": 11
                },
                {
                    "dist_id": 200,
                    "dist_name": "Belthangady",
                    "state": 11
                },
                {
                    "dist_id": 201,
                    "dist_name": "Moodabidri",
                    "state": 11
                },
                {
                    "dist_id": 202,
                    "dist_name": "Mangalore City North",
                    "state": 11
                },
                {
                    "dist_id": 203,
                    "dist_name": "Mangalore City South",
                    "state": 11
                },
                {
                    "dist_id": 204,
                    "dist_name": "Mangalore",
                    "state": 11
                },
                {
                    "dist_id": 205,
                    "dist_name": "Bantval",
                    "state": 11
                },
                {
                    "dist_id": 206,
                    "dist_name": "Puttur",
                    "state": 11
                },
                {
                    "dist_id": 207,
                    "dist_name": "Sullia (SC)",
                    "state": 11
                },
                {
                    "dist_id": 208,
                    "dist_name": "Madikeri",
                    "state": 11
                },
                {
                    "dist_id": 209,
                    "dist_name": "Virajpet",
                    "state": 11
                },
                {
                    "dist_id": 210,
                    "dist_name": "Periyapatna",
                    "state": 11
                },
                {
                    "dist_id": 211,
                    "dist_name": "Krishnarajanagara",
                    "state": 11
                },
                {
                    "dist_id": 212,
                    "dist_name": "Hunsur",
                    "state": 11
                },
                {
                    "dist_id": 213,
                    "dist_name": "Heggadadevankote (ST)",
                    "state": 11
                },
                {
                    "dist_id": 214,
                    "dist_name": "Nanjangud (SC)",
                    "state": 11
                },
                {
                    "dist_id": 215,
                    "dist_name": "Chamundeshwari",
                    "state": 11
                },
                {
                    "dist_id": 216,
                    "dist_name": "Krishnaraja",
                    "state": 11
                },
                {
                    "dist_id": 217,
                    "dist_name": "Chamaraja",
                    "state": 11
                },
                {
                    "dist_id": 218,
                    "dist_name": "Narasimharaja",
                    "state": 11
                },
                {
                    "dist_id": 219,
                    "dist_name": "Varuna",
                    "state": 11
                },
                {
                    "dist_id": 220,
                    "dist_name": "T.Narasipur (SC)",
                    "state": 11
                },
                {
                    "dist_id": 221,
                    "dist_name": "Hanur",
                    "state": 11
                },
                {
                    "dist_id": 222,
                    "dist_name": "Kollegal (SC)",
                    "state": 11
                },
                {
                    "dist_id": 223,
                    "dist_name": "Chamarajanagar",
                    "state": 11
                },
                {
                    "dist_id": 224,
                    "dist_name": "Gundlupet",
                    "state": 11
                }

            ]

        },
        {
            "Id": "12",
            name: "Kerla",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Manjeshwaram",
                    "state": 12
                },
                {
                    "dist_id": 2,
                    "dist_name": "Kasaragod",
                    "state": 12
                },
                {
                    "dist_id": 3,
                    "dist_name": "Udma",
                    "state": 12
                },
                {
                    "dist_id": 4,
                    "dist_name": "Kanhangad",
                    "state": 12
                },
                {
                    "dist_id": 5,
                    "dist_name": "Thrikaripur",
                    "state": 12
                },
                {
                    "dist_id": 6,
                    "dist_name": "Payyanur",
                    "state": 12
                },
                {
                    "dist_id": 7,
                    "dist_name": "Kalliasseri",
                    "state": 12
                },
                {
                    "dist_id": 8,
                    "dist_name": "Taliparamba",
                    "state": 12
                },
                {
                    "dist_id": 9,
                    "dist_name": "Irikkur",
                    "state": 12
                },
                {
                    "dist_id": 10,
                    "dist_name": "Azhikode",
                    "state": 12
                },
                {
                    "dist_id": 11,
                    "dist_name": "Kannur",
                    "state": 12
                },
                {
                    "dist_id": 12,
                    "dist_name": " Dharmadom",
                    "state": 12
                },
                {
                    "dist_id": 13,
                    "dist_name": "Thalassery",
                    "state": 12
                },
                {
                    "dist_id": 14,
                    "dist_name": "Mattanur",
                    "state": 12
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kuthuparamba ",
                    "state": 12
                },
                {
                    "dist_id": 16,
                    "dist_name": "Peravoor",
                    "state": 12
                },
                {
                    "dist_id": 17,
                    "dist_name": "Mananthavady (ST)",
                    "state": 12
                },
                {
                    "dist_id": 18,
                    "dist_name": "Sulthan Bathery (ST)",
                    "state": 12
                },
                {
                    "dist_id": 19,
                    "dist_name": "Kalpetta",
                    "state": 12
                },
                {
                    "dist_id": 20,
                    "dist_name": "Vadakara",
                    "state": 12
                },
                {
                    "dist_id": 21,
                    "dist_name": "Kuttiady",
                    "state": 12
                },
                {
                    "dist_id": 22,
                    "dist_name": "Nadapuram",
                    "state": 12
                },
                {
                    "dist_id": 23,
                    "dist_name": "Koyilandy",
                    "state": 12
                },
                {
                    "dist_id": 24,
                    "dist_name": "Perambra",
                    "state": 12
                },
                {
                    "dist_id": 25,
                    "dist_name": "Balussery (SC)",
                    "state": 12
                },
                {
                    "dist_id": 26,
                    "dist_name": "Elathur",
                    "state": 12
                },
                {
                    "dist_id": 27,
                    "dist_name": "Kozhikode North",
                    "state": 12
                },
                {
                    "dist_id": 28,
                    "dist_name": "Kozhikode South",
                    "state": 12
                },
                {
                    "dist_id": 29,
                    "dist_name": "Beypore",
                    "state": 12
                },
                {
                    "dist_id": 30,
                    "dist_name": "Kunnamangalam",
                    "state": 12
                },
                {
                    "dist_id": 31,
                    "dist_name": "Koduvally",
                    "state": 12
                },
                {
                    "dist_id": 32,
                    "dist_name": "Thiruvambady",
                    "state": 12
                },
                {
                    "dist_id": 33,
                    "dist_name": "Kondotty",
                    "state": 12
                },
                {
                    "dist_id": 34,
                    "dist_name": "Eranad",
                    "state": 12
                },
                {
                    "dist_id": 35,
                    "dist_name": "Nilambur",
                    "state": 12
                },
                {
                    "dist_id": 36,
                    "dist_name": "Wandoor (SC)",
                    "state": 12
                },
                {
                    "dist_id": 37,
                    "dist_name": "Manjeri",
                    "state": 12
                },
                {
                    "dist_id": 38,
                    "dist_name": "Perinthalmanna",
                    "state": 12
                },
                {
                    "dist_id": 39,
                    "dist_name": "Mankada",
                    "state": 12
                },
                {
                    "dist_id": 40,
                    "dist_name": "Malappuram",
                    "state": 12
                },
                {
                    "dist_id": 41,
                    "dist_name": "Vengara",
                    "state": 12
                },
                {
                    "dist_id": 42,
                    "dist_name": "Vallikkunnu",
                    "state": 12
                },
                {
                    "dist_id": 43,
                    "dist_name": "Tirurangadi",
                    "state": 12
                },
                {
                    "dist_id": 44,
                    "dist_name": "Tanur",
                    "state": 12
                },
                {
                    "dist_id": 45,
                    "dist_name": "Tirur",
                    "state": 12
                },
                {
                    "dist_id": 46,
                    "dist_name": "Kottakkal",
                    "state": 12
                },
                {
                    "dist_id": 47,
                    "dist_name": "Thavanur",
                    "state": 12
                },
                {
                    "dist_id": 48,
                    "dist_name": "Ponnani",
                    "state": 12
                },
                {
                    "dist_id": 49,
                    "dist_name": "Thrithala",
                    "state": 12
                },
                {
                    "dist_id": 50,
                    "dist_name": "Pattambi",
                    "state": 12
                },
                {
                    "dist_id": 51,
                    "dist_name": "Shornur",
                    "state": 12
                },
                {
                    "dist_id": 52,
                    "dist_name": "Ottapalam",
                    "state": 12
                },
                {
                    "dist_id": 53,
                    "dist_name": "Kongad(SC)",
                    "state": 12
                },
                {
                    "dist_id": 54,
                    "dist_name": "Mannarkkad",
                    "state": 12
                },
                {
                    "dist_id": 55,
                    "dist_name": "Malampuzha",
                    "state": 12
                },
                {
                    "dist_id": 56,
                    "dist_name": "Palakkad",
                    "state": 12
                },
                {
                    "dist_id": 57,
                    "dist_name": "Tarur (SC)",
                    "state": 12
                },
                {
                    "dist_id": 58,
                    "dist_name": "Chittur",
                    "state": 12
                },
                {
                    "dist_id": 59,
                    "dist_name": "Nenmara",
                    "state": 12
                },
                {
                    "dist_id": 60,
                    "dist_name": "Alathur",
                    "state": 12
                },
                {
                    "dist_id": 61,
                    "dist_name": "Chelakkara (SC)",
                    "state": 12
                },
                {
                    "dist_id": 62,
                    "dist_name": "Kunnamkulam",
                    "state": 12
                },
                {
                    "dist_id": 63,
                    "dist_name": "Guruvayur",
                    "state": 12
                },
                {
                    "dist_id": 64,
                    "dist_name": "Manalur",
                    "state": 12
                },
                {
                    "dist_id": 65,
                    "dist_name": "Wadakkanchery",
                    "state": 12
                },
                {
                    "dist_id": 66,
                    "dist_name": "Ollur",
                    "state": 12
                },
                {
                    "dist_id": 67,
                    "dist_name": "Thrissur",
                    "state": 12
                },
                {
                    "dist_id": 68,
                    "dist_name": "Nattika (SC)",
                    "state": 12
                },
                {
                    "dist_id": 69,
                    "dist_name": "Kaipamangalam",
                    "state": 12
                },
                {
                    "dist_id": 70,
                    "dist_name": "Irinjalakuda",
                    "state": 12
                },
                {
                    "dist_id": 71,
                    "dist_name": "Puthukkad",
                    "state": 12
                },
                {
                    "dist_id": 72,
                    "dist_name": "Chalakudy",
                    "state": 12
                },
                {
                    "dist_id": 73,
                    "dist_name": "Kodungallur",
                    "state": 12
                },
                {
                    "dist_id": 74,
                    "dist_name": "Perumbavoor",
                    "state": 12
                },
                {
                    "dist_id": 75,
                    "dist_name": "Angamaly",

                    "state": 12
                },
                {
                    "dist_id": 76,
                    "dist_name": "Aluva",

                    "state": 12
                },
                {
                    "dist_id": 77,
                    "dist_name": "Kalamassery",

                    "state": 12
                },
                {
                    "dist_id": 78,
                    "dist_name": "Paravur",

                    "state": 12
                },
                {
                    "dist_id": 79,
                    "dist_name": "Vypin",
                    "state": 12
                },
                {
                    "dist_id": 80,
                    "dist_name": "Kochi",
                    "state": 12
                },
                {
                    "dist_id": 81,
                    "dist_name": "Thrippunithura",
                    "state": 12
                },
                {
                    "dist_id": 82,
                    "dist_name": "Ernakulam",
                    "state": 12
                }, {
                    "dist_id": 83,
                    "dist_name": " Thrikkakara",
                    "state": 12
                },
                {
                    "dist_id": 84,
                    "dist_name": "Kunnathunad (SC)",
                    "state": 12
                },
                {
                    "dist_id": 85,
                    "dist_name": "Piravom",
                    "state": 12
                },
                {
                    "dist_id": 86,
                    "dist_name": "Muvattupuzha",
                    "state": 12
                },
                {
                    "dist_id": 87,
                    "dist_name": "Kothamangalam",
                    "state": 12
                },
                {
                    "dist_id": 88,
                    "dist_name": "Devikulam",
                    "state": 12
                },
                {
                    "dist_id": 89,
                    "dist_name": "Udumbanchola",
                    "state": 12
                },
                {
                    "dist_id": 90,
                    "dist_name": "Thodupuzha",
                    "state": 12
                },
                {
                    "dist_id": 91,
                    "dist_name": "Idukki",

                    "state": 12
                },
                {
                    "dist_id": 92,
                    "dist_name": "Peerumade",

                    "state": 12
                },
                {
                    "dist_id": 93,
                    "dist_name": "Pala",
                    "state": 12
                },
                {
                    "dist_id": 94,
                    "dist_name": "Kaduthuruthy",
                    "state": 12
                },
                {
                    "dist_id": 95,
                    "dist_name": "Vaikom (SC)",
                    "state": 12
                },
                {
                    "dist_id": 96,
                    "dist_name": "Ettumanoor",
                    "state": 12
                },
                {
                    "dist_id": 97,
                    "dist_name": "Kottayam",
                    "state": 12
                },
                {
                    "dist_id": 98,
                    "dist_name": "Puthuppally",
                    "state": 12
                },
                {
                    "dist_id": 99,
                    "dist_name": "Changanassery",
                    "state": 12
                },
                {
                    "dist_id": 100,
                    "dist_name": "Kanjirappally",
                    "state": 12
                },
                {
                    "dist_id": 101,
                    "dist_name": "Poonjar",
                    "state": 12
                },
                {
                    "dist_id": 102,
                    "dist_name": "Aroor",
                    "state": 12
                },
                {
                    "dist_id": 103,
                    "dist_name": "Cherthala",
                    "state": 12
                },
                {
                    "dist_id": 104,
                    "dist_name": "Alappuzha",
                    "state": 12
                },
                {
                    "dist_id": 105,
                    "dist_name": "Ambalappuzha",
                    "state": 12
                },
                {
                    "dist_id": 106,
                    "dist_name": "Kuttanad",
                    "state": 12
                },
                {
                    "dist_id": 107,
                    "dist_name": "Haripad",
                    "state": 12
                },
                {
                    "dist_id": 108,
                    "dist_name": "Kayamkulam",
                    "state": 12
                },
                {
                    "dist_id": 109,
                    "dist_name": "Mavelikara",
                    "state": 12
                },
                {
                    "dist_id": 110,
                    "dist_name": "Chengannur",
                    "state": 12
                },
                {
                    "dist_id": 111,
                    "dist_name": " Thiruvalla",
                    "state": 12
                },
                {
                    "dist_id": 112,
                    "dist_name": "Ranni",
                    "state": 12
                },
                {
                    "dist_id": 113,
                    "dist_name": "Aranmula",
                    "state": 12
                },
                {
                    "dist_id": 114,
                    "dist_name": "Konni",
                    "state": 12
                },
                {
                    "dist_id": 115,
                    "dist_name": "Adoor",
                    "state": 12
                },
                {
                    "dist_id": 116,
                    "dist_name": "Karunagapally",
                    "state": 12
                },
                {
                    "dist_id": 117,
                    "dist_name": "Chavara",
                    "state": 12
                },
                {
                    "dist_id": 118,
                    "dist_name": "Kunnathur",
                    "state": 12
                },
                {
                    "dist_id": 119,
                    "dist_name": "Kottarakkara",
                    "state": 12
                },
                {
                    "dist_id": 120,
                    "dist_name": "Pathanapuram",
                    "state": 12
                },
                {
                    "dist_id": 121,
                    "dist_name": "Punalur",
                    "state": 12
                },
                {
                    "dist_id": 122,
                    "dist_name": "Chadayamangalam",
                    "state": 12
                },
                {
                    "dist_id": 123,
                    "dist_name": "Kundara",
                    "state": 12
                },
                {
                    "dist_id": 124,
                    "dist_name": "Kollam",
                    "state": 12
                },
                {
                    "dist_id": 125,
                    "dist_name": "Eravipuram",
                    "state": 12
                },
                {
                    "dist_id": 126,
                    "dist_name": "Chathannoor",
                    "state": 12
                },
                {
                    "dist_id": 127,
                    "dist_name": "Varkala",
                    "state": 12
                },
                {
                    "dist_id": 128,
                    "dist_name": "Attingal",
                    "state": 11
                },
                {
                    "dist_id": 129,
                    "dist_name": "Chirayinkeezhu",
                    "state": 12
                },
                {
                    "dist_id": 130,
                    "dist_name": "Nedumangad",
                    "state": 12
                },
                {
                    "dist_id": 131,
                    "dist_name": "Vamanapuram",
                    "state": 12
                },
                {
                    "dist_id": 132,
                    "dist_name": "Kazhakootam",
                    "state": 12
                },
                {
                    "dist_id": 133,
                    "dist_name": "Vattiyoorkavu",
                    "state": 12
                },
                {
                    "dist_id": 134,
                    "dist_name": "Thiruvanthapuram",
                    "state": 12
                },
                {
                    "dist_id": 135,
                    "dist_name": "Nemom",
                    "state": 12
                },
                {
                    "dist_id": 136,
                    "dist_name": "Aruvikkara",
                    "state": 12
                },
                {
                    "dist_id": 137,
                    "dist_name": "Parassala",
                    "state": 12
                },
                {
                    "dist_id": 138,
                    "dist_name": "Kattakkada",
                    "state": 12
                },
                {
                    "dist_id": 139,
                    "dist_name": "Kovalam",
                    "state": 12
                },
                {
                    "dist_id": 140,
                    "dist_name": "Neyyattinkara",
                    "state": 12
                }

            ]
        },
        {
            "Id": "13",
            name: "Madhya Pradesh",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Sheopur",
                    "state": 13,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Vijaypur",
                    "state": 13,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Sabalgarh",
                    "state": 13,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Joura",
                    "state": 13,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Sumawali",
                    "state": 13,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Morena",
                    "state": 13,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Dimani",
                    "state": 13,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Ambah",
                    "state": 13,
                },
                {
                    "dist_id": 9,
                    "dist_name": "Ater",
                    "state": 13,
                },
                {
                    "dist_id": 10,
                    "dist_name": "Bhind",
                    "state": 13,
                },
                {
                    "dist_id": 11,
                    "dist_name": "Lahar",
                    "state": 13,
                },
                {
                    "dist_id": 12,
                    "dist_name": "Mehgaon",
                    "state": 13,
                },
                {
                    "dist_id": 13,
                    "dist_name": "Gohad",
                    "state": 13,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Gwalior Rural",
                    "state": 13,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Gwalior ",
                    "state": 13,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Gwalior East",
                    "state": 13,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Gwalior South",
                    "state": 13,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Bhitarwar",
                    "state": 13,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Dabra",
                    "state": 13,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Sewda",
                    "state": 13,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Bhander",
                    "state": 13,
                },
                {
                    "dist_id": 22,
                    "dist_name": "Datia",
                    "state": 13,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Karera",
                    "state": 13,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Pohari",
                    "state": 13,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Shivpuri",
                    "state": 13,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Pichhore",
                    "state": 13,
                },
                {
                    "dist_id": 27,
                    "dist_name": "Kolaras",
                    "state": 13,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Bamori",
                    "state": 13,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Guna",
                    "state": 13,
                },
                {
                    "dist_id": 30,
                    "dist_name": "Chachoura",
                    "state": 13,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Raghogarh",
                    "state": 13,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Ashok Nagar",
                    "state": 13,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Chanderi",
                    "state": 13,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Mungaoli",
                    "state": 13,
                },
                {
                    "dist_id": 35,
                    "dist_name": "Bina",
                    "state": 13,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Khurai",
                    "state": 13,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Surkhi",
                    "state": 13,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Deori",
                    "state": 13,
                },
                {
                    "dist_id": 39,
                    "dist_name": "Rehli",
                    "state": 13,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Naryoli",
                    "state": 13,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Sagar",
                    "state": 13,
                },
                {
                    "dist_id": 42,
                    "dist_name": "Banda",
                    "state": 13,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Tikamgarh",
                    "state": 13,
                },
                {
                    "dist_id": 44,
                    "dist_name": "Jatara",
                    "state": 13,
                },
                {
                    "dist_id": 45,
                    "dist_name": "Prithvipur",
                    "state": 13,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Niwari",
                    "state": 13,
                },
                {
                    "dist_id": 47,
                    "dist_name": "Khargapur",
                    "state": 13,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Maharajpur",
                    "state": 13,
                },
                {
                    "dist_id": 49,
                    "dist_name": "Chandla",
                    "state": 13,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Rajnagar",
                    "state": 13,
                },
                {
                    "dist_id": 51,
                    "dist_name": "Chhatarpur",
                    "state": 13,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Bijawar",
                    "state": 13,
                },
                {
                    "dist_id": 53,
                    "dist_name": "Malhara",
                    "state": 13,
                },
                {
                    "dist_id": 54,
                    "dist_name": "Pathariya",
                    "state": 13,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Damoh",
                    "state": 13,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Jabera",
                    "state": 13,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Hatta",
                    "state": 13,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Pawai",
                    "state": 13,
                },
                {
                    "dist_id": 59,
                    "dist_name": "Gunnaor",
                    "state": 13,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Panna",
                    "state": 13,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Chitrakoot",
                    "state": 13,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Raigaon",
                    "state": 13,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Satna",
                    "state": 13,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Nagod",
                    "state": 13,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Maihar",
                    "state": 13,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Amarpatan",
                    "state": 13,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Rampur-Baghelan",
                    "state": 13,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Sirmour",
                    "state": 13,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Semariya",
                    "state": 13,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Teonthar",
                    "state": 13,
                },
                {
                    "dist_id": 71,
                    "dist_name": "Mauganj",
                    "state": 13,
                },
                {
                    "dist_id": 72,
                    "dist_name": "Deotalab",
                    "state": 13,
                },
                {
                    "dist_id": 73,
                    "dist_name": "Mangawan",
                    "state": 13,
                },
                {
                    "dist_id": 74,
                    "dist_name": "Rewa",
                    "state": 13,
                },
                {
                    "dist_id": 75,
                    "dist_name": "Gurh",
                    "state": 13,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Churhat",
                    "state": 13,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Sidhi",
                    "state": 13,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Sihawal",
                    "state": 13,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Chitrangi",
                    "state": 13,
                },
                {
                    "dist_id": 80,
                    "dist_name": "Singrauli",
                    "state": 13,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Devsar",
                    "state": 13,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Dhauhani",
                    "state": 13,
                }, {
                    "dist_id": 83,
                    "dist_name": "Beohari",
                    "state": 13,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Jaisimgnagar",
                    "state": 13,
                },
                {
                    "dist_id": 85,
                    "dist_name": "Jaitpur",
                    "state": 13,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Kotma",
                    "state": 13,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Anuppur",
                    "state": 13,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Pushprajgarh",
                    "state": 13,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Bandhavgarh",
                    "state": 13,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Manpur",
                    "state": 13,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Barwara",
                    "state": 13,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Vijayraghavgarh",
                    "state": 13,
                },
                {
                    "dist_id": 93,
                    "dist_name": "Murwara",
                    "state": 13,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Bahoriband",
                    "state": 13,
                },
                {
                    "dist_id": 95,
                    "dist_name": "Patan",
                    "state": 13,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Bargi",
                    "state": 13,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Jabalpur East",
                    "state": 13,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Jabalpur North",
                    "state": 13,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Jabalpur Cantonment",
                    "state": 13,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Jabalpur West",
                    "state": 13,
                },
                {
                    "dist_id": 101,
                    "dist_name": "Panagar",
                    "state": 13,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Sihora",
                    "state": 13,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Shahpura",
                    "state": 13,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Dindori",
                    "state": 13,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Bichhiya",
                    "state": 13,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Niwas",
                    "state": 13,
                },
                {
                    "dist_id": 107,
                    "dist_name": "Mandla",
                    "state": 13,
                },
                {
                    "dist_id": 108,
                    "dist_name": "Baihar",
                    "state": 13,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Lanji",
                    "state": 13,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Paraswada",
                    "state": 13,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Balaghat",
                    "state": 13,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Waraseoni",
                    "state": 13,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Katangi",
                    "state": 13,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Barghat",
                    "state": 13,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Seoni",
                    "state": 13,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Keolari",
                    "state": 13,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Lakhnadon",
                    "state": 13,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Gotegaon",
                    "state": 13,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Narsingpur",
                    "state": 13,
                },
                {
                    "dist_id": 120,
                    "dist_name": "Tendukheda",
                    "state": 13,
                },
                {
                    "dist_id": 121,
                    "dist_name": "Gadarwara",
                    "state": 13,
                },
                {
                    "dist_id": 122,
                    "dist_name": "Junnardeo",
                    "state": 13,
                },
                {
                    "dist_id": 123,
                    "dist_name": "Amarwara",
                    "state": 13,
                },
                {
                    "dist_id": 124,
                    "dist_name": "Chourai",
                    "state": 13,
                },
                {
                    "dist_id": 125,
                    "dist_name": "Saunsar",
                    "state": 13,
                },
                {
                    "dist_id": 126,
                    "dist_name": "Chhindwara",
                    "state": 13,
                },
                {
                    "dist_id": 127,
                    "dist_name": "Parasia",
                    "state": 13,
                },
                {
                    "dist_id": 128,
                    "dist_name": "Pandhurna",
                    "state": 13,
                },
                {
                    "dist_id": 129,
                    "dist_name": "Multai",
                    "state": 13,
                },
                {
                    "dist_id": 130,
                    "dist_name": "Amla",
                    "state": 13,
                },
                {
                    "dist_id": 131,
                    "dist_name": "Betul",
                    "state": 13,
                },
                {
                    "dist_id": 132,
                    "dist_name": "Ghoradongri",
                    "state": 13,
                },
                {
                    "dist_id": 133,
                    "dist_name": "Bhainsdehi",
                    "state": 13,
                },
                {
                    "dist_id": 134,
                    "dist_name": "Timarni",
                    "state": 13,
                },
                {
                    "dist_id": 135,
                    "dist_name": "Harda",
                    "state": 13,
                },
                {
                    "dist_id": 136,
                    "dist_name": "Seoni-Malwa",
                    "state": 13,
                },
                {
                    "dist_id": 137,
                    "dist_name": "Narmadapuram",
                    "state": 13,
                },
                {
                    "dist_id": 138,
                    "dist_name": "Sohagpur",
                    "state": 13,
                },
                {
                    "dist_id": 139,
                    "dist_name": "Pipariya",
                    "state": 13,
                },
                {
                    "dist_id": 140,
                    "dist_name": "Udaipura",
                    "state": 13,
                },
                {
                    "dist_id": 141,
                    "dist_name": "Bhojpur",
                    "state": 13,
                },
                {
                    "dist_id": 142,
                    "dist_name": "Sanchi",
                    "state": 13,
                },
                {
                    "dist_id": 143,
                    "dist_name": "Silwani",
                    "state": 13,
                },
                {
                    "dist_id": 144,
                    "dist_name": "Vidisha",
                    "state": 13,
                },
                {
                    "dist_id": 145,
                    "dist_name": "Basoda",
                    "state": 13,
                },
                {
                    "dist_id": 146,
                    "dist_name": "Kurwai",
                    "state": 13,
                },
                {
                    "dist_id": 147,
                    "dist_name": "Sironj",
                    "state": 13,
                },
                {
                    "dist_id": 148,
                    "dist_name": "Shamshabad",
                    "state": 13,
                },
                {
                    "dist_id": 149,
                    "dist_name": "Berasia",
                    "state": 13,
                },
                {
                    "dist_id": 150,
                    "dist_name": "Bhopal Uttar",
                    "state": 13,
                },
                {
                    "dist_id": 151,
                    "dist_name": "Narela",
                    "state": 13,
                },
                {
                    "dist_id": 152,
                    "dist_name": "Bhopal Dakshin-Paschim",
                    "state": 13,
                },
                {
                    "dist_id": 153,
                    "dist_name": "Bhopal Madhya",
                    "state": 13,
                },
                {
                    "dist_id": 154,
                    "dist_name": "Govindpura",
                    "state": 13,
                },
                {
                    "dist_id": 155,
                    "dist_name": "Huzur",
                    "state": 13,
                },
                {
                    "dist_id": 156,
                    "dist_name": "Bundhni",
                    "state": 13,
                },
                {
                    "dist_id": 157,
                    "dist_name": "Ashta",
                    "state": 13,
                },
                {
                    "dist_id": 158,
                    "dist_name": "Ichhawar",
                    "state": 13,
                },
                {
                    "dist_id": 159,
                    "dist_name": "Sehore",
                    "state": 13,
                },
                {
                    "dist_id": 160,
                    "dist_name": "Narsinghgarh",
                    "state": 13,
                },
                {
                    "dist_id": 161,
                    "dist_name": "Biaora",
                    "state": 13,
                },
                {
                    "dist_id": 162,
                    "dist_name": "Rajgarh",
                    "state": 13,
                },
                {
                    "dist_id": 163,
                    "dist_name": "Khilchipur",
                    "state": 13,
                },
                {
                    "dist_id": 164,
                    "dist_name": "Sarangpur",
                    "state": 13,
                },
                {
                    "dist_id": 165,
                    "dist_name": "Susner",
                    "state": 13,
                },
                {
                    "dist_id": 166,
                    "dist_name": "Agar",
                    "state": 13,
                },
                {
                    "dist_id": 167,
                    "dist_name": "Shajapur",
                    "state": 13,
                },
                {
                    "dist_id": 168,
                    "dist_name": "Shujalpur",
                    "state": 13,
                },
                {
                    "dist_id": 169,
                    "dist_name": "Kalapipal",
                    "state": 13,
                },
                {
                    "dist_id": 170,
                    "dist_name": "Sonkatch",
                    "state": 13,
                },
                {
                    "dist_id": 171,
                    "dist_name": "Dewas",
                    "state": 13,
                },
                {
                    "dist_id": 172,
                    "dist_name": "Hatpipliya",
                    "state": 13,
                },
                {
                    "dist_id": 173,
                    "dist_name": "Khategaon",
                    "state": 13,
                },
                {
                    "dist_id": 174,
                    "dist_name": "Bagli",
                    "state": 13,
                },
                {
                    "dist_id": 175,
                    "dist_name": "Mandhata",
                    "state": 13,
                },
                {
                    "dist_id": 176,
                    "dist_name": "Harsud",
                    "state": 13,
                },
                {
                    "dist_id": 177,
                    "dist_name": "Khandwa",
                    "state": 13,
                },
                {
                    "dist_id": 178,
                    "dist_name": "Pandhana",
                    "state": 13,
                },
                {
                    "dist_id": 179,
                    "dist_name": "Nepanagar",
                    "state": 13,
                },
                {
                    "dist_id": 180,
                    "dist_name": "Burhanpur",
                    "state": 13,
                },
                {
                    "dist_id": 181,
                    "dist_name": "Bhikangaon",
                    "state": 13,
                },
                {
                    "dist_id": 182,
                    "dist_name": "Badwaha",
                    "state": 13,
                },
                {
                    "dist_id": 183,
                    "dist_name": "Maheshwar",
                    "state": 13,
                },
                {
                    "dist_id": 184,
                    "dist_name": "Kasrawad",
                    "state": 13,
                },
                {
                    "dist_id": 185,
                    "dist_name": "Khargone",
                    "state": 13,
                },
                {
                    "dist_id": 186,
                    "dist_name": "Bhagwanpura",
                    "state": 13,
                },
                {
                    "dist_id": 187,
                    "dist_name": "Sendhawa",
                    "state": 13,
                },
                {
                    "dist_id": 188,
                    "dist_name": "Rajpur",
                    "state": 13,
                },
                {
                    "dist_id": 189,
                    "dist_name": "Pansemal",
                    "state": 13,
                },
                {
                    "dist_id": 190,
                    "dist_name": "Barwani",
                    "state": 13,
                },
                {
                    "dist_id": 191,
                    "dist_name": "Alirajpur",
                    "state": 13,
                },
                {
                    "dist_id": 192,
                    "dist_name": "Jobat",
                    "state": 13,
                },
                {
                    "dist_id": 193,
                    "dist_name": "Jhabua",
                    "state": 13,
                },

                {
                    "dist_id": 194,
                    "dist_name": "Thandla",
                    "state": 13,
                },
                {
                    "dist_id": 195,
                    "dist_name": "Petlawad",
                    "state": 13,
                },
                {
                    "dist_id": 196,
                    "dist_name": "Sardarpur",
                    "state": 13,
                },

                {
                    "dist_id": 197,
                    "dist_name": "Gandhwani",
                    "state": 13,
                },
                {
                    "dist_id": 198,
                    "dist_name": "Kukshi",
                    "state": 13,
                },
                {
                    "dist_id": 199,
                    "dist_name": "Manawar",
                    "state": 13,
                },
                {
                    "dist_id": 200,
                    "dist_name": "Dharmpuri",
                    "state": 13,
                },
                {
                    "dist_id": 201,
                    "dist_name": "Dhar",
                    "state": 13,
                },
                {
                    "dist_id": 202,
                    "dist_name": "Badnawar",
                    "state": 13,
                },
                {
                    "dist_id": 203,
                    "dist_name": "Depalpur",
                    "state": 13,
                },
                {
                    "dist_id": 204,
                    "dist_name": "Indore-1",
                    "state": 13,
                },
                {
                    "dist_id": 205,
                    "dist_name": "Indore-2",
                    "state": 13,
                },
                {
                    "dist_id": 206,
                    "dist_name": "Indore-3",
                    "state": 13,
                },
                {
                    "dist_id": 207,
                    "dist_name": "Indore-4",
                    "state": 13,
                },
                {
                    "dist_id": 208,
                    "dist_name": "Indore-5",
                    "state": 13,
                },
                {
                    "dist_id": 209,
                    "dist_name": "Dr.Ambedkar Nagar-Mhow",
                    "state": 13,
                },
                {
                    "dist_id": 210,
                    "dist_name": "Rau",
                    "state": 13,
                },
                {
                    "dist_id": 211,
                    "dist_name": "Sanwer",
                    "state": 13,
                },
                {
                    "dist_id": 212,
                    "dist_name": "Nagda-Khachrod",
                    "state": 13,
                },
                {
                    "dist_id": 213,
                    "dist_name": "Mahidpur",
                    "state": 13,
                },
                {
                    "dist_id": 214,
                    "dist_name": "Tarana",
                    "state": 13,
                },
                {
                    "dist_id": 215,
                    "dist_name": "Ghatiya",
                    "state": 13,
                },
                {
                    "dist_id": 216,
                    "dist_name": "Ujjain North",
                    "state": 13,
                },
                {
                    "dist_id": 217,
                    "dist_name": "Ujjain South",
                    "state": 13,
                },
                {
                    "dist_id": 218,
                    "dist_name": "Badnagar",
                    "state": 13,
                },
                {
                    "dist_id": 219,
                    "dist_name": "Ratlam Rural",
                    "state": 13,
                },
                {
                    "dist_id": 220,
                    "dist_name": "Ratlam City",
                    "state": 13,
                },
                {
                    "dist_id": 221,
                    "dist_name": "Sailana",
                    "state": 13,
                },
                {
                    "dist_id": 222,
                    "dist_name": "Jaora",
                    "state": 13,
                },
                {
                    "dist_id": 223,
                    "dist_name": "Alot",
                    "state": 13,
                },
                {
                    "dist_id": 224,
                    "dist_name": "Mandsaur",
                    "state": 13,
                },
                {
                    "dist_id": 225,
                    "dist_name": "Malhargarh",
                    "state": 13,
                },
                {
                    "dist_id": 226,
                    "dist_name": "Suwasra",
                    "state": 13,
                },
                {
                    "dist_id": 227,
                    "dist_name": "Garoth",
                    "state": 13,
                },
                {
                    "dist_id": 228,
                    "dist_name": "Manasa",
                    "state": 13,
                },
                {
                    "dist_id": 229,
                    "dist_name": "Neemuch",
                    "state": 13,
                },
                {
                    "dist_id": 230,
                    "dist_name": "Jawad",
                    "state": 13,
                },

            ]
        },
        {
            "Id": "14",
            name: "Maharashtra",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Akkalkuwa",
                    "state": 14,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Shahada",
                    "state": 14,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Nandurbar",
                    "state": 14,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Navapur",
                    "state": 14,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Sakri",
                    "state": 14,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Dhule Rural",
                    "state": 14,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Dhule City",
                    "state": 14,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Sindkheda",
                    "state": 14,
                },
                {
                    "dist_id": 9,
                    "dist_name": "Shirpur",
                    "state": 14,
                },
                {
                    "dist_id": 10,
                    "dist_name": "Chopda",
                    "state": 14,
                },
                {
                    "dist_id": 11,
                    "dist_name": "Raver",
                    "state": 14,
                },
                {
                    "dist_id": 12,
                    "dist_name": "Bhusawal",
                    "state": 14,
                },
                {
                    "dist_id": 13,
                    "dist_name": "Jalgaon City",
                    "state": 14,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Jalgaon Rural",
                    "state": 14,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Amalner",
                    "state": 14,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Erandol",
                    "state": 14,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Chalisgaon",
                    "state": 14,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Pachora",
                    "state": 14,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Jamner",
                    "state": 14,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Muktainagar",
                    "state": 14,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Malkapur",
                    "state": 14,
                },
                {
                    "dist_id": 22,
                    "dist_name": "Buldhana",
                    "state": 14,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Chikhali",
                    "state": 14,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Sindkhed Raja",
                    "state": 14,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Mehkar",
                    "state": 14,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Khamgaon",
                    "state": 14,
                },
                {
                    "dist_id": 27,
                    "dist_name": "jalgaon (Jamaod)",
                    "state": 14,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Akot",
                    "state": 14,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Balapur",
                    "state": 14,
                },
                {
                    "dist_id": 30,
                    "dist_name": "Akola West",
                    "state": 14,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Akola East",
                    "state": 14,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Murtizapur",
                    "state": 14,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Risod",
                    "state": 14,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Washim",
                    "state": 14,
                },
                {
                    "dist_id": 35,
                    "dist_name": "Karanja",
                    "state": 14,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Dhamangaon Railway",
                    "state": 14,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Badnera",
                    "state": 14,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Amravati",
                    "state": 14,
                },
                {
                    "dist_id": 39,
                    "dist_name": "Teosa",
                    "state": 14,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Daryapur",
                    "state": 14,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Melhat",
                    "state": 14,
                },
                {
                    "dist_id": 42,
                    "dist_name": "Achalpur",
                    "state": 14,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Morshi",
                    "state": 14,
                },
                {
                    "dist_id": 44,
                    "dist_name": "Arvi",
                    "state": 14,
                },
                {
                    "dist_id": 45,
                    "dist_name": "Deoli",
                    "state": 14,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Hinganghat",
                    "state": 14,
                },
                {
                    "dist_id": 47,
                    "dist_name": "Wardha",
                    "state": 14,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Katoal",
                    "state": 14,
                },
                {
                    "dist_id": 49,
                    "dist_name": "Savner",
                    "state": 14,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Hingna",
                    "state": 14,
                },
                {
                    "dist_id": 51,
                    "dist_name": "Umred",
                    "state": 14,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Nagpur South West",
                    "state": 14,
                },
                {
                    "dist_id": 53,
                    "dist_name": "Nagpur South",
                    "state": 14,
                },
                {
                    "dist_id": 54,
                    "dist_name": "Nagpur East",
                    "state": 14,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Nagpur Central",
                    "state": 14,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Nagpur West",
                    "state": 14,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Nagpur North",
                    "state": 14,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Kamthi",
                    "state": 14,
                },
                {
                    "dist_id": 59,
                    "dist_name": "Ramtek",
                    "state": 14,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Tumsar",
                    "state": 14,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Bhandara",
                    "state": 14,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Sakoli",
                    "state": 14,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Arjuni-Morgaon",
                    "state": 14,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Tirora",
                    "state": 14,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Gondiya",
                    "state": 14,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Amgaon",
                    "state": 14,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Armori",
                    "state": 14,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Gadchiroli",
                    "state": 14,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Aheri",
                    "state": 14,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Rajura",
                    "state": 14,
                },
                {
                    "dist_id": 71,
                    "dist_name": "Chandrapur",
                    "state": 14,
                },
                {
                    "dist_id": 72,
                    "dist_name": "Ballarpur",
                    "state": 14,
                },
                {
                    "dist_id": 73,
                    "dist_name": "Bramhapuri",
                    "state": 14,
                },
                {
                    "dist_id": 74,
                    "dist_name": "Chimur",
                    "state": 14,
                },
                {
                    "dist_id": 75,
                    "dist_name": "Warora",
                    "state": 14,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Wani",
                    "state": 14,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Ralegaon",
                    "state": 14,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Yavatmal",
                    "state": 14,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Digras",
                    "state": 14,
                },
                {
                    "dist_id": 80,
                    "dist_name": "Arni",
                    "state": 14,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Pusad",
                    "state": 14,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Umarkhed",
                    "state": 14,
                },
                {
                    "dist_id": 83,
                    "dist_name": "Kinwat",
                    "state": 14,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Hadgaon",
                    "state": 14,
                },
                {
                    "dist_id": 85,
                    "dist_name": "Bhokar",
                    "state": 14,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Nanded North",
                    "state": 14,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Nanded South",
                    "state": 14,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Loha",
                    "state": 14,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Naigaon",
                    "state": 14,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Deglur",
                    "state": 14,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Mukhed",
                    "state": 14,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Basmath",
                    "state": 14,
                },
                {
                    "dist_id": 93,
                    "dist_name": "Kalamnuri",
                    "state": 14,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Hingoli",
                    "state": 14,
                },
                {
                    "dist_id": 95,
                    "dist_name": "Jintur",
                    "state": 14,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Parbhani",
                    "state": 14,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Gangakhed",
                    "state": 14,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Pathri",
                    "state": 14,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Partur",
                    "state": 14,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Ghansawmgi",
                    "state": 14,
                },
                {
                    "dist_id": 101,
                    "dist_name": "Jalna",
                    "state": 14,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Badnapur",
                    "state": 14,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Bhokardan",
                    "state": 14,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Sillod",
                    "state": 14,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Kannad",
                    "state": 14,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Phulambri",
                    "state": 14,
                },
                {
                    "dist_id": 107,
                    "dist_name": "Aurangabad Central",
                    "state": 14,
                },
                {
                    "dist_id": 108,
                    "dist_name": "Aurangabad West",
                    "state": 14,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Aurangabad East",
                    "state": 14,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Paithan",
                    "state": 14,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Gangapur",
                    "state": 14,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Vaijapur",
                    "state": 14,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Nandgaon",
                    "state": 14,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Malegaon Central",
                    "state": 14,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Malegaon Outer",
                    "state": 14,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Baglan",
                    "state": 14,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Kalwan",
                    "state": 14,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Chandwad",
                    "state": 14,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Yevla",
                    "state": 14,
                },
                {
                    "dist_id": 120,
                    "dist_name": "Sinnar",
                    "state": 14,
                },
                {
                    "dist_id": 121,
                    "dist_name": "Niphad",
                    "state": 14,
                },
                {
                    "dist_id": 122,
                    "dist_name": "Niphad",
                    "state": 14,
                },
                {
                    "dist_id": 123,
                    "dist_name": "Nashik East",
                    "state": 14,
                },
                {
                    "dist_id": 124,
                    "dist_name": "Nashik Central",
                    "state": 14,
                },
                {
                    "dist_id": 125,
                    "dist_name": "Nashik West",
                    "state": 14,
                },
                {
                    "dist_id": 126,
                    "dist_name": "Deolali",
                    "state": 14,
                },
                {
                    "dist_id": 127,
                    "dist_name": "Igatpuri",
                    "state": 14,
                },
                {
                    "dist_id": 128,
                    "dist_name": "Dahanu",
                    "state": 14,
                },
                {
                    "dist_id": 129,
                    "dist_name": "Vikramgad",
                    "state": 14,
                },
                {
                    "dist_id": 130,
                    "dist_name": "Palghar",
                    "state": 14,
                },
                {
                    "dist_id": 131,
                    "dist_name": "Boisar",
                    "state": 14,
                },
                {
                    "dist_id": 132,
                    "dist_name": "Nalasopara",
                    "state": 14,
                },
                {
                    "dist_id": 133,
                    "dist_name": "Vasai",
                    "state": 14,
                },
                {
                    "dist_id": 134,
                    "dist_name": "Bhiwandi Rural",
                    "state": 14,
                },
                {
                    "dist_id": 135,
                    "dist_name": "Shahapur",
                    "state": 14,
                },
                {
                    "dist_id": 136,
                    "dist_name": "Bhiwandi West",
                    "state": 14,
                },
                {
                    "dist_id": 137,
                    "dist_name": "Bhiwandi East",
                    "state": 14,
                },
                {
                    "dist_id": 138,
                    "dist_name": "Kalyan West",
                    "state": 14,
                },
                {
                    "dist_id": 139,
                    "dist_name": "Murbad",
                    "state": 14,
                },
                {
                    "dist_id": 140,
                    "dist_name": "Ambernath",
                    "state": 14,
                },
                {
                    "dist_id": 141,
                    "dist_name": "Ulhasnagar",
                    "state": 14,
                },
                {
                    "dist_id": 142,
                    "dist_name": "Kalyan East",
                    "state": 14,
                },
                {
                    "dist_id": 143,
                    "dist_name": "Dombivali",
                    "state": 14,
                },
                {
                    "dist_id": 144,
                    "dist_name": "Kalyan Rural",
                    "state": 14,
                },
                {
                    "dist_id": 145,
                    "dist_name": "Mira Bhayandar",
                    "state": 14,
                },
                {
                    "dist_id": 146,
                    "dist_name": "Ovala-Majiwada",
                    "state": 14,
                },
                {
                    "dist_id": 147,
                    "dist_name": "Kopri-Panchpakhandi",
                    "state": 14,
                },
                {
                    "dist_id": 148,
                    "dist_name": "Thane",
                    "state": 14,
                },
                {
                    "dist_id": 149,
                    "dist_name": "Mumbra-Kalwa",
                    "state": 14,
                },
                {
                    "dist_id": 150,
                    "dist_name": "Airoli",
                    "state": 14,
                },
                {
                    "dist_id": 151,
                    "dist_name": "Belapur",
                    "state": 14,
                },
                {
                    "dist_id": 152,
                    "dist_name": "Borivali",
                    "state": 14,
                },
                {
                    "dist_id": 153,
                    "dist_name": "Dahisar",
                    "state": 14,
                },
                {
                    "dist_id": 154,
                    "dist_name": "Magathane",
                    "state": 14,
                },
                {
                    "dist_id": 155,
                    "dist_name": "Mulund",
                    "state": 14,
                },
                {
                    "dist_id": 156,
                    "dist_name": "Vikhroli",
                    "state": 14,
                },
                {
                    "dist_id": 157,
                    "dist_name": "Bhandup West",
                    "state": 14,
                },
                {
                    "dist_id": 158,
                    "dist_name": "Jogeshwari East",
                    "state": 14,
                },
                {
                    "dist_id": 159,
                    "dist_name": "Dindoshi",
                    "state": 14,
                },
                {
                    "dist_id": 160,
                    "dist_name": "Kandivlai East",
                    "state": 14,
                },
                {
                    "dist_id": 161,
                    "dist_name": "Goregaon",
                    "state": 14,
                },
                {
                    "dist_id": 162,
                    "dist_name": "Malad West",
                    "state": 14,
                },
                {
                    "dist_id": 163,
                    "dist_name": "Goregan",
                    "state": 14,
                },
                {
                    "dist_id": 164,
                    "dist_name": "Versova",
                    "state": 14,
                },
                {
                    "dist_id": 165,
                    "dist_name": "Andheri West",
                    "state": 14,
                },
                {
                    "dist_id": 166,
                    "dist_name": "Andheri East",
                    "state": 14,
                },
                {
                    "dist_id": 167,
                    "dist_name": "Vile Parle",
                    "state": 14,
                }, {
                    "dist_id": 168,
                    "dist_name": "Chandivali",
                    "state": 14,
                },
                {
                    "dist_id": 169,
                    "dist_name": "Ghatkopar West",
                    "state": 14,
                },
                {
                    "dist_id": 170,
                    "dist_name": "Ghatkopar East",
                    "state": 14,
                },
                {
                    "dist_id": 171,
                    "dist_name": "Mankhurd Shivaji Nagar",
                    "state": 14,
                },
                {
                    "dist_id": 172,
                    "dist_name": "Anushakti Nagar",
                    "state": 14,
                },
                {
                    "dist_id": 173,
                    "dist_name": "Chembur",
                    "state": 14,
                },
                {
                    "dist_id": 174,
                    "dist_name": "Kurla",
                    "state": 14,
                },
                {
                    "dist_id": 175,
                    "dist_name": "Kalina",
                    "state": 14,
                },
                {
                    "dist_id": 176,
                    "dist_name": "Vandre East",
                    "state": 14,
                },
                {
                    "dist_id": 177,
                    "dist_name": "Vandre West",
                    "state": 14,
                },
                {
                    "dist_id": 178,
                    "dist_name": "Dharavi",
                    "state": 14,
                },
                {
                    "dist_id": 179,
                    "dist_name": "Sion Koliwada",
                    "state": 14,
                },
                {
                    "dist_id": 180,
                    "dist_name": "Wadala",
                    "state": 14,
                },
                {
                    "dist_id": 181,
                    "dist_name": "Mahim",
                    "state": 14,
                },
                {
                    "dist_id": 182,
                    "dist_name": "Worli",
                    "state": 14,
                },
                {
                    "dist_id": 183,
                    "dist_name": "Shivadi",
                    "state": 14,
                },
                {
                    "dist_id": 184,
                    "dist_name": "Byculla",
                    "state": 14,
                },
                {
                    "dist_id": 185,
                    "dist_name": "Malabar Hill",
                    "state": 14,
                },
                {
                    "dist_id": 186,
                    "dist_name": "Mumbadevi",
                    "state": 14,
                },
                {
                    "dist_id": 187,
                    "dist_name": "Colabad",
                    "state": 14,
                },
                {
                    "dist_id": 188,
                    "dist_name": "Panvel",
                    "state": 14,
                },
                {
                    "dist_id": 189,
                    "dist_name": "Karjat",
                    "state": 14,
                },
                {
                    "dist_id": 190,
                    "dist_name": "Uran",
                    "state": 14,
                },
                {
                    "dist_id": 191,
                    "dist_name": "Pen",
                    "state": 14,
                },
                {
                    "dist_id": 192,
                    "dist_name": "Alibag",
                    "state": 14,
                },
                {
                    "dist_id": 193,
                    "dist_name": "shrivarshan",
                    "state": 14,
                },
                {
                    "dist_id": 194,
                    "dist_name": "Mahad",
                    "state": 14,
                },
                {
                    "dist_id": 195,
                    "dist_name": "Junnar",
                    "state": 14,
                },
                {
                    "dist_id": 196,
                    "dist_name": "Ambegaon",
                    "state": 14,
                },
                {
                    "dist_id": 197,
                    "dist_name": "Khed Alandi",
                    "state": 14,
                },
                {
                    "dist_id": 198,
                    "dist_name": "Shirur",
                    "state": 14,
                },
                {
                    "dist_id": 199,
                    "dist_name": "Daund",
                    "state": 14,
                },
                {
                    "dist_id": 200,
                    "dist_name": "Indapur",
                    "state": 14,
                },
                {
                    "dist_id": 201,
                    "dist_name": "Barmati",
                    "state": 14,
                },
                {
                    "dist_id": 202,
                    "dist_name": "Purnadar",
                    "state": 14,
                },
                {
                    "dist_id": 203,
                    "dist_name": "Bhor",
                    "state": 14,
                },
                {
                    "dist_id": 205,
                    "dist_name": "Chinchwad",
                    "state": 14,
                },
                {
                    "dist_id": 206,
                    "dist_name": "Pimpri",
                    "state": 14,
                },
                {
                    "dist_id": 207,
                    "dist_name": "Bhsari",
                    "state": 14,
                },
                {
                    "dist_id": 208,
                    "dist_name": "Vadgaon Sheri",
                    "state": 14,
                },
                {
                    "dist_id": 209,
                    "dist_name": "Shivajinagar",
                    "state": 14,
                },
                {
                    "dist_id": 210,
                    "dist_name": "Kothrud",
                    "state": 14,
                },
                {
                    "dist_id": 211,
                    "dist_name": "Khadakwasala",
                    "state": 14,
                },
                {
                    "dist_id": 212,
                    "dist_name": "Parvati",
                    "state": 14,
                },
                {
                    "dist_id": 213,
                    "dist_name": "Hadapsar",
                    "state": 14,
                },
                {
                    "dist_id": 214,
                    "dist_name": "Pune Cantonment",
                    "state": 14,
                },
                {
                    "dist_id": 215,
                    "dist_name": "Kasba Peth",
                    "state": 14,
                },
                {
                    "dist_id": 216,
                    "dist_name": "Akole",
                    "state": 14,
                },
                {
                    "dist_id": 217,
                    "dist_name": "Sangamner",
                    "state": 14,
                },
                {
                    "dist_id": 218,
                    "dist_name": "Shirdi",
                    "state": 14,
                },
                {
                    "dist_id": 219,
                    "dist_name": "Kopargaon",
                    "state": 14,
                },

                {
                    "dist_id": 220,
                    "dist_name": "Shrirampur",
                    "state": 14,
                },
                {
                    "dist_id": 221,
                    "dist_name": "Nevasa",
                    "state": 14,
                },
                {
                    "dist_id": 222,
                    "dist_name": "Shevgaon",
                    "state": 14,
                },
                {
                    "dist_id": 223,
                    "dist_name": "Rahuri",
                    "state": 14,
                },
                {
                    "dist_id": 224,
                    "dist_name": "Parner",
                    "state": 14,
                },
                {
                    "dist_id": 225,
                    "dist_name": "Ahmednagar City",
                    "state": 14,
                },
                {
                    "dist_id": 226,
                    "dist_name": "Shrigonda",
                    "state": 14,
                },
                {
                    "dist_id": 227,
                    "dist_name": "Karjat Jamkhed",
                    "state": 14,
                },
                {
                    "dist_id": 228,
                    "dist_name": "Georai",
                    "state": 14,
                },
                {
                    "dist_id": 229,
                    "dist_name": "Majalgaon",
                    "state": 14,
                },
                {
                    "dist_id": 230,
                    "dist_name": "Beed",
                    "state": 14,
                },
                {
                    "dist_id": 231,
                    "dist_name": "Ashti",
                    "state": 14,
                },
                {
                    "dist_id": 232,
                    "dist_name": "Kaij",
                    "state": 14,
                },
                {
                    "dist_id": 233,
                    "dist_name": "Parli",
                    "state": 14,
                },
                {
                    "dist_id": 234,
                    "dist_name": "Latur Rural",
                    "state": 14,
                },
                {
                    "dist_id": 235,
                    "dist_name": "Latur City",
                    "state": 14,
                },
                {
                    "dist_id": 236,
                    "dist_name": "Ahmedpur",
                    "state": 14,
                },
                {
                    "dist_id": 237,
                    "dist_name": "Udgir",
                    "state": 14,
                },
                {
                    "dist_id": 238,
                    "dist_name": "Nilanga",
                    "state": 14,
                },
                {
                    "dist_id": 239,
                    "dist_name": "Ausa",
                    "state": 14,
                },
                {
                    "dist_id": 240,
                    "dist_name": "Umarga",
                    "state": 14,
                },
                {
                    "dist_id": 241,
                    "dist_name": "Tuljapur",
                    "state": 14,
                },
                {
                    "dist_id": 242,
                    "dist_name": "Osmanbad",
                    "state": 14,
                },
                {
                    "dist_id": 243,
                    "dist_name": "Paranda",
                    "state": 14,
                },
                {
                    "dist_id": 244,
                    "dist_name": "karmala",
                    "state": 14,
                },
                {
                    "dist_id": 245,
                    "dist_name": "Madha",
                    "state": 14,
                },
                {
                    "dist_id": 246,
                    "dist_name": "Barshi",
                    "state": 14,
                },
                {
                    "dist_id": 247,
                    "dist_name": "Mohol",
                    "state": 14,
                },
                {
                    "dist_id": 248,
                    "dist_name": "Solapur City North",
                    "state": 14,
                },
                {
                    "dist_id": 249,
                    "dist_name": "Solapur City Central",
                    "state": 14,
                },
                {
                    "dist_id": 250,
                    "dist_name": "Akkalkot",
                    "state": 14,
                },
                {
                    "dist_id": 251,
                    "dist_name": "Solapur South",
                    "state": 14,
                },
                {
                    "dist_id": 252,
                    "dist_name": "Pandharpur",
                    "state": 14,
                },
                {
                    "dist_id": 253,
                    "dist_name": "Sangola",
                    "state": 14,
                },
                {
                    "dist_id": 254,
                    "dist_name": "Malshiras",
                    "state": 14,
                },
                {
                    "dist_id": 255,
                    "dist_name": "Phaltan",
                    "state": 14,
                },
                {
                    "dist_id": 256,
                    "dist_name": "Wai",
                    "state": 14,
                },
                {
                    "dist_id": 257,
                    "dist_name": "Koregaon",
                    "state": 14,
                },
                {
                    "dist_id": 258,
                    "dist_name": "Man",
                    "state": 14,
                },
                {
                    "dist_id": 259,
                    "dist_name": "Karad North",
                    "state": 14,
                },
                {
                    "dist_id": 260,
                    "dist_name": "Karad South",
                    "state": 14,
                },
                {
                    "dist_id": 261,
                    "dist_name": "Patan",
                    "state": 14,
                },
                {
                    "dist_id": 262,
                    "dist_name": "Satara",
                    "state": 14,
                },
                {
                    "dist_id": 263,
                    "dist_name": "Dapoli",
                    "state": 14,
                },
                {
                    "dist_id": 264,
                    "dist_name": "Guhagar",
                    "state": 14,
                },
                {
                    "dist_id": 265,
                    "dist_name": "chiplun",
                    "state": 14,
                },
                {
                    "dist_id": 266,
                    "dist_name": "Ratnagiri",
                    "state": 14,
                },
                {
                    "dist_id": 267,
                    "dist_name": "Rajapur",
                    "state": 14,
                },
                {
                    "dist_id": 268,
                    "dist_name": "Kankavli",
                    "state": 14,
                },
                {
                    "dist_id": 269,
                    "dist_name": "Kudal",
                    "state": 14,
                },

                {
                    "dist_id": 270,
                    "dist_name": "Sawantwadi",
                    "state": 14,
                },
                {
                    "dist_id": 271,
                    "dist_name": "Chandgad",
                    "state": 14,
                },
                {
                    "dist_id": 272,
                    "dist_name": "Radhanagari",
                    "state": 14,
                },
                {
                    "dist_id": 273,
                    "dist_name": "Kagal",
                    "state": 14,
                },
                {
                    "dist_id": 274,
                    "dist_name": "Kolhapur South",
                    "state": 14,
                },
                {
                    "dist_id": 275,
                    "dist_name": "Karvir",
                    "state": 14,
                },
                {
                    "dist_id": 276,
                    "dist_name": "kolhaour North",
                    "state": 14,
                },
                {
                    "dist_id": 277,
                    "dist_name": "Shahuwadi",
                    "state": 14,
                },
                {
                    "dist_id": 278,
                    "dist_name": "Hatkanangle",
                    "state": 14,
                },
                {
                    "dist_id": 279,
                    "dist_name": "Ichalkaranji",
                    "state": 14,
                },
                {
                    "dist_id": 280,
                    "dist_name": "Shirol",
                    "state": 14,
                },
                {
                    "dist_id": 281,
                    "dist_name": "Miraj",
                    "state": 14,
                },

                {
                    "dist_id": 282,
                    "dist_name": "Sangli",
                    "state": 14,
                },
                {
                    "dist_id": 283,
                    "dist_name": "Islampur",
                    "state": 14,
                },
                {
                    "dist_id": 284,
                    "dist_name": "Shirala",
                    "state": 14,
                },
                {
                    "dist_id": 285,
                    "dist_name": "Palus-Kadegaon",
                    "state": 14,
                },
                {
                    "dist_id": 286,
                    "dist_name": "Khanapur",
                    "state": 14,
                },
                {
                    "dist_id": 287,
                    "dist_name": "Tasgaon-Kavathe Mahankal",
                    "state": 14,
                },
                {
                    "dist_id": 289,
                    "dist_name": "jat",
                    "state": 14,
                },


            ]
        },
        {
            "Id": "15",
            name: "Manipur",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Khundrakpam",
                    "state": 15
                },
                {
                    "dist_id": 2,
                    "dist_name": "Heingang",
                    "state": 15
                },
                {
                    "dist_id": 3,
                    "dist_name": "khurai",
                    "state": 15
                },
                {
                    "dist_id": 4,
                    "dist_name": "Kshetrigao",
                    "state": 15
                },
                {
                    "dist_id": 5,
                    "dist_name": "Thongju",
                    "state": 15
                },
                {
                    "dist_id": 6,
                    "dist_name": "Keirao",
                    "state": 15
                },
                {
                    "dist_id": 7,
                    "dist_name": "Andro",
                    "state": 15
                },
                {
                    "dist_id": 8,
                    "dist_name": "Lamlai",
                    "state": 15
                },
                {
                    "dist_id": 9,
                    "dist_name": "Thangmeiband",
                    "state": 15
                },
                {
                    "dist_id": 10,
                    "dist_name": "uripok",
                    "state": 15
                },
                {
                    "dist_id": 11,
                    "dist_name": "Sagolband",
                    "state": 15
                },
                {
                    "dist_id": 12,
                    "dist_name": " Keishamthong",
                    "state": 15
                },
                {
                    "dist_id": 13,
                    "dist_name": "Singjamei",
                    "state": 15
                },
                {
                    "dist_id": 14,
                    "dist_name": "Yaiskul",
                    "state": 15
                },
                {
                    "dist_id": 15,
                    "dist_name": "Wangkhei ",
                    "state": 15
                },
                {
                    "dist_id": 16,
                    "dist_name": "Sekmai (SC)",
                    "state": 15
                },
                {
                    "dist_id": 17,
                    "dist_name": "Lamsang",
                    "state": 15
                },
                {
                    "dist_id": 18,
                    "dist_name": "Konthoujam",
                    "state": 15
                },
                {
                    "dist_id": 19,
                    "dist_name": "Patsoi",
                    "state": 15
                },
                {
                    "dist_id": 20,
                    "dist_name": "Langthabal",
                    "state": 15
                },
                {
                    "dist_id": 21,
                    "dist_name": "Naoriya Pakhanglakpa",
                    "state": 15
                },
                {
                    "dist_id": 22,
                    "dist_name": "Wangoi",
                    "state": 15
                },
                {
                    "dist_id": 23,
                    "dist_name": "Mayang Imphal",
                    "state": 15
                },
                {
                    "dist_id": 24,
                    "dist_name": "Nambol",
                    "state": 15
                },
                {
                    "dist_id": 25,
                    "dist_name": "Oinam",
                    "state": 15
                },
                {
                    "dist_id": 26,
                    "dist_name": "Bishnupur",
                    "state": 15
                },
                {
                    "dist_id": 27,
                    "dist_name": "Moirang",
                    "state": 15
                },
                {
                    "dist_id": 28,
                    "dist_name": "Thanga",
                    "state": 15
                },
                {
                    "dist_id": 29,
                    "dist_name": "Kumbi",
                    "state": 15
                },
                {
                    "dist_id": 30,
                    "dist_name": "Lilong",
                    "state": 15
                },
                {
                    "dist_id": 31,
                    "dist_name": "Thoubal",
                    "state": 15
                },
                {
                    "dist_id": 32,
                    "dist_name": "Wangkhem",
                    "state": 15
                },
                {
                    "dist_id": 33,
                    "dist_name": "Heirok",
                    "state": 15
                },
                {
                    "dist_id": 34,
                    "dist_name": "Wangjing Tentha",
                    "state": 15
                },
                {
                    "dist_id": 35,
                    "dist_name": "Khangabok",
                    "state": 15
                },
                {
                    "dist_id": 36,
                    "dist_name": "Wabgai",
                    "state": 15
                },
                {
                    "dist_id": 37,
                    "dist_name": "Kakching",
                    "state": 15
                },
                {
                    "dist_id": 38,
                    "dist_name": "Hiyanglam",
                    "state": 15
                },
                {
                    "dist_id": 39,
                    "dist_name": "Sugnu",
                    "state": 15
                },
                {
                    "dist_id": 40,
                    "dist_name": "Jiribam",
                    "state": 15
                },
                {
                    "dist_id": 41,
                    "dist_name": "Chandel (ST)",
                    "state": 15
                },
                {
                    "dist_id": 42,
                    "dist_name": "Tengnoupal (ST)",
                    "state": 15
                },
                {
                    "dist_id": 43,
                    "dist_name": "Phungyar (ST)",
                    "state": 15
                },
                {
                    "dist_id": 44,
                    "dist_name": "Ukhrul (ST)",
                    "state": 15
                },
                {
                    "dist_id": 45,
                    "dist_name": "Chingai (ST)",
                    "state": 15
                },
                {
                    "dist_id": 46,
                    "dist_name": "Saikul (ST)",
                    "state": 15
                },
                {
                    "dist_id": 47,
                    "dist_name": "Karong (ST)",
                    "state": 15
                },
                {
                    "dist_id": 48,
                    "dist_name": "Mao (ST)",
                    "state": 15
                },
                {
                    "dist_id": 49,
                    "dist_name": "Tadubi (ST)",
                    "state": 15
                },
                {
                    "dist_id": 50,
                    "dist_name": "Kangpokpi",
                    "state": 15
                },
                {
                    "dist_id": 51,
                    "dist_name": "Saitu (ST)",
                    "state": 15
                },
                {
                    "dist_id": 52,
                    "dist_name": "Tamei (ST)",
                    "state": 15
                },
                {
                    "dist_id": 53,
                    "dist_name": "Tamenglong (ST)",
                    "state": 15
                },
                {
                    "dist_id": 54,
                    "dist_name": "Nungba (ST)",
                    "state": 15
                },
                {
                    "dist_id": 55,
                    "dist_name": "Tipaimukh (ST)",
                    "state": 15
                },
                {
                    "dist_id": 56,
                    "dist_name": "Thanlon (ST)",
                    "state": 15
                },
                {
                    "dist_id": 57,
                    "dist_name": "Henglep (ST)",
                    "state": 15
                },
                {
                    "dist_id": 58,
                    "dist_name": "Churachandpur (ST)",
                    "state": 15
                },
                {
                    "dist_id": 59,
                    "dist_name": "Saikot (ST)",
                    "state": 15
                },
                {
                    "dist_id": 60,
                    "dist_name": "Singhat (ST)",
                    "state": 15
                }

            ]
        },
        {
            "Id": "16",
            name: "Meghalaya",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Nartiang (ST)",
                    "state": 16
                },
                {
                    "dist_id": 2,
                    "dist_name": "Jowai (ST)",
                    "state": 16
                },
                {
                    "dist_id": 3,
                    "dist_name": "Raliang (ST)",
                    "state": 16
                },
                {
                    "dist_id": 4,
                    "dist_name": "Mowkaiw (ST)",
                    "state": 16
                },
                {
                    "dist_id": 5,
                    "dist_name": "Sutnga Saipung (ST)",
                    "state": 16
                },
                {
                    "dist_id": 6,
                    "dist_name": "Khliehriat (ST)",
                    "state": 16
                },
                {
                    "dist_id": 7,
                    "dist_name": "Amlarem (ST)",
                    "state": 16
                },
                {
                    "dist_id": 8,
                    "dist_name": "Mawhati (ST)",
                    "state": 16
                },
                {
                    "dist_id": 9,
                    "dist_name": "Nongpoh (ST)",
                    "state": 16
                },
                {
                    "dist_id": 10,
                    "dist_name": "Jirang (ST)",
                    "state": 16
                },
                {
                    "dist_id": 11,
                    "dist_name": "Umsning (ST)",
                    "state": 16
                },
                {
                    "dist_id": 12,
                    "dist_name": " Umroi (ST)",
                    "state": 16
                },
                {
                    "dist_id": 13,
                    "dist_name": "Mawrengkneng (ST)",
                    "state": 16
                },
                {
                    "dist_id": 14,
                    "dist_name": "Pynthorumkhrah",
                    "state": 16
                },
                {
                    "dist_id": 15,
                    "dist_name": "Wangkhei ",
                    "state": 16
                },
                {
                    "dist_id": 16,
                    "dist_name": "	East Shillong (ST) ",
                    "state": 16
                },
                {
                    "dist_id": 17,
                    "dist_name": "North Shillong (ST)",
                    "state": 16
                },
                {
                    "dist_id": 18,
                    "dist_name": "West Shillong",
                    "state": 16
                },
                {
                    "dist_id": 19,
                    "dist_name": "South Shillong",
                    "state": 16
                },
                {
                    "dist_id": 20,
                    "dist_name": "Mylliem (ST)",
                    "state": 16
                },
                {
                    "dist_id": 21,
                    "dist_name": "Nongthymmai (ST)",
                    "state": 16
                },
                {
                    "dist_id": 22,
                    "dist_name": "Nongkrem (ST)",
                    "state": 16
                },
                {
                    "dist_id": 23,
                    "dist_name": "Sohiong (ST)",
                    "state": 16
                },
                {
                    "dist_id": 24,
                    "dist_name": "Mawphlang (ST)",
                    "state": 16
                },
                {
                    "dist_id": 25,
                    "dist_name": "Mawsynram (ST)",
                    "state": 16
                },
                {
                    "dist_id": 26,
                    "dist_name": "Shella (ST)",
                    "state": 16
                },
                {
                    "dist_id": 27,
                    "dist_name": "Pynursla (ST)",
                    "state": 16
                },
                {
                    "dist_id": 28,
                    "dist_name": "Sohra (ST)",
                    "state": 16
                },
                {
                    "dist_id": 29,
                    "dist_name": "Mawkynrew (ST)",
                    "state": 16
                },
                {
                    "dist_id": 30,
                    "dist_name": "Mairang (ST)",
                    "state": 16
                },
                {
                    "dist_id": 31,
                    "dist_name": "Mawthadraishan (ST)",
                    "state": 16
                },
                {
                    "dist_id": 32,
                    "dist_name": "Nongstoin (ST)",
                    "state": 16
                },
                {
                    "dist_id": 33,
                    "dist_name": "Rambrai-Jyrngam (ST)",
                    "state": 16
                },
                {
                    "dist_id": 34,
                    "dist_name": "Mawshynrut (ST)",
                    "state": 16
                },
                {
                    "dist_id": 35,
                    "dist_name": "Ranikor (ST)",
                    "state": 16
                },
                {
                    "dist_id": 36,
                    "dist_name": "Mawkyrwat (ST)",
                    "state": 16
                },
                {
                    "dist_id": 37,
                    "dist_name": "Kharkutta (ST)",
                    "state": 16
                },
                {
                    "dist_id": 38,
                    "dist_name": "Mendipathar (ST)",
                    "state": 16
                },
                {
                    "dist_id": 39,
                    "dist_name": "Resubelpara (ST)",
                    "state": 16
                },
                {
                    "dist_id": 40,
                    "dist_name": "Bajengdoba (ST)",
                    "state": 16
                },
                {
                    "dist_id": 41,
                    "dist_name": "Songsak (ST)",
                    "state": 16
                },
                {
                    "dist_id": 42,
                    "dist_name": "Rongjeng (ST)",
                    "state": 16
                },
                {
                    "dist_id": 43,
                    "dist_name": "Williamnagar (ST)",
                    "state": 16
                },
                {
                    "dist_id": 44,
                    "dist_name": "Raksamgre (ST)",
                    "state": 16
                },
                {
                    "dist_id": 45,
                    "dist_name": "Tikrikilla (ST)",
                    "state": 16
                },
                {
                    "dist_id": 46,
                    "dist_name": "Phulbari",
                    "state": 16
                },
                {
                    "dist_id": 47,
                    "dist_name": "Rajabala",
                    "state": 16
                },
                {
                    "dist_id": 48,
                    "dist_name": "Selsella (ST)",
                    "state": 16
                },
                {
                    "dist_id": 49,
                    "dist_name": "Dadenggre (ST)",
                    "state": 16
                },
                {
                    "dist_id": 50,
                    "dist_name": "North Tura (ST)",
                    "state": 16
                },
                {
                    "dist_id": 51,
                    "dist_name": "South Tura (ST)",
                    "state": 16
                },
                {
                    "dist_id": 52,
                    "dist_name": "Rangsakona (ST)",
                    "state": 16
                },
                {
                    "dist_id": 53,
                    "dist_name": "Ampati (ST)",
                    "state": 16
                },
                {
                    "dist_id": 54,
                    "dist_name": "Mahendraganj (ST)",
                    "state": 16
                },
                {
                    "dist_id": 55,
                    "dist_name": "Salmanpara (ST)",
                    "state": 16
                },
                {
                    "dist_id": 56,
                    "dist_name": "Gambegre (ST)",
                    "state": 16
                },
                {
                    "dist_id": 57,
                    "dist_name": "Dalu (ST)",
                    "state": 16
                },
                {
                    "dist_id": 58,
                    "dist_name": "Rongara Siju (ST)",
                    "state": 16
                },
                {
                    "dist_id": 59,
                    "dist_name": "Chokpot (ST)",
                    "state": 16
                },
                {
                    "dist_id": 60,
                    "dist_name": "Baghmara (ST)",
                    "state": 15
                }

            ]
        },
        {
            "Id": "17",
            name: "Mizoram",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Hachhek",
                    "state": 17
                },
                {
                    "dist_id": 2,
                    "dist_name": "Dampa ",
                    "state": 17
                },
                {
                    "dist_id": 3,
                    "dist_name": "Mamit",
                    "state": 17
                },
                {
                    "dist_id": 4,
                    "dist_name": "Tuirial ",
                    "state": 17
                },
                {
                    "dist_id": 5,
                    "dist_name": "Kolasib",
                    "state": 17
                },
                {
                    "dist_id": 6,
                    "dist_name": "Serlui",
                    "state": 17
                },
                {
                    "dist_id": 7,
                    "dist_name": "Tuivawl",
                    "state": 17
                },
                {
                    "dist_id": 8,
                    "dist_name": "Chalfilh ",
                    "state": 17
                },
                {
                    "dist_id": 9,
                    "dist_name": "Tawi",
                    "state": 17
                },
                {
                    "dist_id": 10,
                    "dist_name": "Aizawl North 1",
                    "state": 17
                },
                {
                    "dist_id": 11,
                    "dist_name": "Aizawl North 2",
                    "state": 17
                },
                {
                    "dist_id": 12,
                    "dist_name": " Aizawl North 3",
                    "state": 17
                },
                {
                    "dist_id": 13,
                    "dist_name": "Aizawl East 1",
                    "state": 17
                },
                {
                    "dist_id": 14,
                    "dist_name": "Aizawl East 2",
                    "state": 17
                },
                {
                    "dist_id": 15,
                    "dist_name": "Aizawl West 1",
                    "state": 17
                },
                {
                    "dist_id": 16,
                    "dist_name": "Aizawl West 2",
                    "state": 17
                },
                {
                    "dist_id": 17,
                    "dist_name": "Aizawl West 3",
                    "state": 17
                },
                {
                    "dist_id": 18,
                    "dist_name": "Aizawl South 1",
                    "state": 17
                },
                {
                    "dist_id": 19,
                    "dist_name": "Aizawl South 2",
                    "state": 17
                },
                {
                    "dist_id": 20,
                    "dist_name": "Aizawl South 3",
                    "state": 17
                },
                {
                    "dist_id": 21,
                    "dist_name": "Lengteng",
                    "state": 17
                },
                {
                    "dist_id": 22,
                    "dist_name": "Tuichang",
                    "state": 17
                },
                {
                    "dist_id": 23,
                    "dist_name": "Champhai North ",
                    "state": 17
                },
                {
                    "dist_id": 24,
                    "dist_name": "Champhai South ",
                    "state": 17
                },
                {
                    "dist_id": 25,
                    "dist_name": "East Tuipui ",
                    "state": 17
                },
                {
                    "dist_id": 26,
                    "dist_name": "Serchhip ",
                    "state": 17
                },
                {
                    "dist_id": 27,
                    "dist_name": "Tuikum ",
                    "state": 17
                },
                {
                    "dist_id": 28,
                    "dist_name": "Hrangturzo",
                    "state": 17
                },
                {
                    "dist_id": 29,
                    "dist_name": "South Tuipui",
                    "state": 17
                },
                {
                    "dist_id": 30,
                    "dist_name": "Lunglei North",
                    "state": 17
                },
                {
                    "dist_id": 31,
                    "dist_name": "Lunglei East",
                    "state": 17
                },
                {
                    "dist_id": 32,
                    "dist_name": "Lunglei West",
                    "state": 17
                },
                {
                    "dist_id": 33,
                    "dist_name": "Lunglei South",
                    "state": 17
                },
                {
                    "dist_id": 34,
                    "dist_name": "Thorang",
                    "state": 17
                },
                {
                    "dist_id": 35,
                    "dist_name": "West Tuipui",
                    "state": 17
                },
                {
                    "dist_id": 36,
                    "dist_name": "Tuichawng",
                    "state": 17
                },
                {
                    "dist_id": 37,
                    "dist_name": "Lawngtlai West",
                    "state": 17
                },
                {
                    "dist_id": 38,
                    "dist_name": "Lawngtlai East",
                    "state": 17
                },
                {
                    "dist_id": 39,
                    "dist_name": "Saiha",
                    "state": 17
                },
                {
                    "dist_id": 40,
                    "dist_name": "Palak",
                    "state": 17
                }

            ]
        },
        {
            "Id": "18",
            name: "Nagaland",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Dimapur I",
                    "state": 18
                },
                {
                    "dist_id": 2,
                    "dist_name": "Dimapur II (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 3,
                    "dist_name": "Dimapur III (ST)",
                    "state": 18
                },
                {
                    "dist_id": 4,
                    "dist_name": "Ghaspani I (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 5,
                    "dist_name": "Ghaspani II (ST)",
                    "state": 18
                },
                {
                    "dist_id": 6,
                    "dist_name": "Tening (ST)",
                    "state": 18
                },
                {
                    "dist_id": 7,
                    "dist_name": "Peren (ST)",
                    "state": 18
                },
                {
                    "dist_id": 8,
                    "dist_name": "Western Angami (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 9,
                    "dist_name": "Kohima Town (ST)",
                    "state": 18
                },
                {
                    "dist_id": 10,
                    "dist_name": "Northern Angami I (ST)",
                    "state": 18
                },
                {
                    "dist_id": 11,
                    "dist_name": "Northern Angami II (ST)",
                    "state": 18
                },
                {
                    "dist_id": 12,
                    "dist_name": "Tseminyü (ST)",
                    "state": 18
                },
                {
                    "dist_id": 13,
                    "dist_name": "Pughoboto (ST)",
                    "state": 18
                },
                {
                    "dist_id": 14,
                    "dist_name": "Southern Angami I (ST)",
                    "state": 18
                },
                {
                    "dist_id": 15,
                    "dist_name": "Southern Angami II (ST)",
                    "state": 18
                },
                {
                    "dist_id": 16,
                    "dist_name": "Aizawl West 2",
                    "state": 18
                },
                {
                    "dist_id": 17,
                    "dist_name": "Aizawl West 3",
                    "state": 18
                },
                {
                    "dist_id": 18,
                    "dist_name": "Chozuba (ST)",
                    "state": 18
                },
                {
                    "dist_id": 19,
                    "dist_name": "Phek (ST)",
                    "state": 18
                },
                {
                    "dist_id": 20,
                    "dist_name": "Meluri (ST)",
                    "state": 18
                },
                {
                    "dist_id": 21,
                    "dist_name": "Tuli (ST)",
                    "state": 18
                },
                {
                    "dist_id": 22,
                    "dist_name": "Arkakong (ST)",
                    "state": 18
                },
                {
                    "dist_id": 23,
                    "dist_name": "Impur (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 24,
                    "dist_name": "Angetyongpang (ST)",
                    "state": 18
                },
                {
                    "dist_id": 25,
                    "dist_name": "Mongoya (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 26,
                    "dist_name": "Aonglenden (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 27,
                    "dist_name": "Mokokchung Town (ST) ",
                    "state": 18
                },
                {
                    "dist_id": 28,
                    "dist_name": "Koridang (ST)",
                    "state": 18
                },
                {
                    "dist_id": 29,
                    "dist_name": "Jangpetkong (ST)",
                    "state": 18
                },
                {
                    "dist_id": 30,
                    "dist_name": "Alongtaki (ST)",
                    "state": 18
                },
                {
                    "dist_id": 31,
                    "dist_name": "Akuluto (ST)",
                    "state": 18
                },
                {
                    "dist_id": 32,
                    "dist_name": "Atoizü (ST)",
                    "state": 18
                },
                {
                    "dist_id": 33,
                    "dist_name": "Suruhoto (ST)",
                    "state": 18
                },
                {
                    "dist_id": 34,
                    "dist_name": "Aghunato (ST)",
                    "state": 18
                },
                {
                    "dist_id": 35,
                    "dist_name": "Zünheboto (ST)",
                    "state": 18
                },
                {
                    "dist_id": 36,
                    "dist_name": "Satakha (ST)",
                    "state": 18
                },
                {
                    "dist_id": 37,
                    "dist_name": "Tyüi (ST)",
                    "state": 18
                },
                {
                    "dist_id": 38,
                    "dist_name": "Wokha (ST)",
                    "state": 18
                },
                {
                    "dist_id": 39,
                    "dist_name": "Sanis (ST)",
                    "state": 18
                },
                {
                    "dist_id": 40,
                    "dist_name": "Bhandari (ST)",
                    "state": 18
                },

                {
                    "dist_id": 41,
                    "dist_name": "Tizit (ST)",
                    "state": 18
                },
                {
                    "dist_id": 42,
                    "dist_name": "Wakching (ST)",
                    "state": 18
                },
                {
                    "dist_id": 43,
                    "dist_name": "Tapi (ST)",
                    "state": 18
                },
                {
                    "dist_id": 44,
                    "dist_name": "Phomching (ST)",
                    "state": 18
                },
                {
                    "dist_id": 45,
                    "dist_name": "Tehok (ST)",
                    "state": 18
                },
                {
                    "dist_id": 46,
                    "dist_name": "Mon Town (ST)",
                    "state": 18
                },
                {
                    "dist_id": 47,
                    "dist_name": "Aboi (ST)",
                    "state": 18
                },
                {
                    "dist_id": 48,
                    "dist_name": "Moka (ST)",
                    "state": 18
                },
                {
                    "dist_id": 49,
                    "dist_name": "Tamlu (ST)",
                    "state": 18
                },
                {
                    "dist_id": 50,
                    "dist_name": "Longleng (ST)",
                    "state": 18
                },
                {
                    "dist_id": 51,
                    "dist_name": "Noksen (ST)",
                    "state": 18
                },
                {
                    "dist_id": 52,
                    "dist_name": "Longkhim–Chare (ST)",
                    "state": 18
                },
                {
                    "dist_id": 53,
                    "dist_name": "Tuensang Sadar I (ST)",
                    "state": 18
                },
                {
                    "dist_id": 54,
                    "dist_name": "	Tuensang Sadar II (ST)",
                    "state": 18
                },
                {
                    "dist_id": 55,
                    "dist_name": "Tobu (ST)",
                    "state": 18
                },
                {
                    "dist_id": 56,
                    "dist_name": "Noklak (ST)",
                    "state": 18
                },
                {
                    "dist_id": 57,
                    "dist_name": "Thonoknyu (ST)",
                    "state": 18
                },
                {
                    "dist_id": 58,
                    "dist_name": "Shamator–Chessore (ST)",
                    "state": 18
                },
                {
                    "dist_id": 59,
                    "dist_name": "Seyochung–Sitimi (ST)",
                    "state": 18
                },
                {
                    "dist_id": 60,
                    "dist_name": "Pungro–Kiphire (ST)",
                    "state": 18
                }


            ]
        },
        {
            "Id": "19",
            name: "Odisha",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Padampur",
                    "state": 19
                },
                {
                    "dist_id": 2,
                    "dist_name": "Bijepur ",
                    "state": 19
                },
                {
                    "dist_id": 3,
                    "dist_name": "Bargarh",
                    "state": 19
                },
                {
                    "dist_id": 4,
                    "dist_name": "Attabira (SC)",
                    "state": 19
                },
                {
                    "dist_id": 5,
                    "dist_name": "Bhatli",
                    "state": 19
                },
                {
                    "dist_id": 6,
                    "dist_name": "Brajarajnagar",
                    "state": 19
                },
                {
                    "dist_id": 7,
                    "dist_name": "Jharsuguda",
                    "state": 19
                },
                {
                    "dist_id": 8,
                    "dist_name": "Talsara (ST)",
                    "state": 19
                },
                {
                    "dist_id": 9,
                    "dist_name": "Sundargarh (ST)",
                    "state": 19
                },
                {
                    "dist_id": 10,
                    "dist_name": "Biramitrapur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 11,
                    "dist_name": "	Raghunathpali (SC)",
                    "state": 19
                },
                {
                    "dist_id": 12,
                    "dist_name": "Rourkela",
                    "state": 19
                },
                {
                    "dist_id": 13,
                    "dist_name": "Rajgangpur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 14,
                    "dist_name": "Bonai (ST)",
                    "state": 19
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kuchinda (ST)",
                    "state": 19
                },
                {
                    "dist_id": 16,
                    "dist_name": "Rengali (SC)",
                    "state": 19
                },
                {
                    "dist_id": 17,
                    "dist_name": "Sambalpur",
                    "state": 19
                },
                {
                    "dist_id": 18,
                    "dist_name": "Rairakhol",
                    "state": 19
                },
                {
                    "dist_id": 19,
                    "dist_name": "Deogarh",
                    "state": 19
                },
                {
                    "dist_id": 20,
                    "dist_name": "Telkoi (ST)",
                    "state": 19
                },
                {
                    "dist_id": 21,
                    "dist_name": "Ghasipura",
                    "state": 19
                },
                {
                    "dist_id": 22,
                    "dist_name": "Anandpur (SC)",
                    "state": 19
                },
                {
                    "dist_id": 23,
                    "dist_name": "Patna (ST)",
                    "state": 19
                },
                {
                    "dist_id": 24,
                    "dist_name": "Keonjhar (ST)",
                    "state": 19
                },
                {
                    "dist_id": 25,
                    "dist_name": "Champua ",
                    "state": 19
                },
                {
                    "dist_id": 26,
                    "dist_name": "Jashipur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 27,
                    "dist_name": "Saraskana (ST) ",
                    "state": 19
                },
                {
                    "dist_id": 28,
                    "dist_name": "Rairangpur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 29,
                    "dist_name": "Bangriposi (ST)",
                    "state": 19
                },
                {
                    "dist_id": 30,
                    "dist_name": "Karanjia (ST)",
                    "state": 19
                },
                {
                    "dist_id": 31,
                    "dist_name": "Udala (ST)",
                    "state": 19
                },
                {
                    "dist_id": 32,
                    "dist_name": "Badasahi (SC)",
                    "state": 19
                },
                {
                    "dist_id": 33,
                    "dist_name": "Baripada (ST)",
                    "state": 19
                },
                {
                    "dist_id": 34,
                    "dist_name": "Morada",
                    "state": 19
                },
                {
                    "dist_id": 35,
                    "dist_name": "Jaleswar",
                    "state": 19
                },
                {
                    "dist_id": 36,
                    "dist_name": "Bhograi",
                    "state": 19
                },
                {
                    "dist_id": 37,
                    "dist_name": "Basta",
                    "state": 19
                },
                {
                    "dist_id": 38,
                    "dist_name": "Balasore",
                    "state": 19
                },
                {
                    "dist_id": 39,
                    "dist_name": "Remuna",
                    "state": 19
                },
                {
                    "dist_id": 40,
                    "dist_name": "Nilagiri",
                    "state": 19
                },

                {
                    "dist_id": 41,
                    "dist_name": "Soro (SC)",
                    "state": 19
                },
                {
                    "dist_id": 42,
                    "dist_name": "Simulia",
                    "state": 19
                },
                {
                    "dist_id": 43,
                    "dist_name": "Bhandaripokhari",
                    "state": 19
                },
                {
                    "dist_id": 44,
                    "dist_name": "Bhadrak",
                    "state": 19
                },
                {
                    "dist_id": 45,
                    "dist_name": "Basudevpur",
                    "state": 19
                },
                {
                    "dist_id": 46,
                    "dist_name": "Dhamnagar (SC)",
                    "state": 19
                },
                {
                    "dist_id": 47,
                    "dist_name": "Chandabali",
                    "state": 19
                },
                {
                    "dist_id": 48,
                    "dist_name": "Binjharpur (SC)",
                    "state": 19
                },
                {
                    "dist_id": 49,
                    "dist_name": "Bari",
                    "state": 19
                },
                {
                    "dist_id": 50,
                    "dist_name": "Barchana",
                    "state": 19
                },
                {
                    "dist_id": 51,
                    "dist_name": "Dharmasala",
                    "state": 19
                },
                {
                    "dist_id": 52,
                    "dist_name": "Jajpur",
                    "state": 19
                },
                {
                    "dist_id": 53,
                    "dist_name": "Korei",
                    "state": 19
                },
                {
                    "dist_id": 54,
                    "dist_name": "Sukinda",
                    "state": 19
                },
                {
                    "dist_id": 55,
                    "dist_name": "Dhenkanal",
                    "state": 19
                },
                {
                    "dist_id": 56,
                    "dist_name": "Hindol (SC)",
                    "state": 19
                },
                {
                    "dist_id": 57,
                    "dist_name": "Kamakhyanagar",
                    "state": 19
                },
                {
                    "dist_id": 58,
                    "dist_name": "Parjanga",
                    "state": 19
                },
                {
                    "dist_id": 59,
                    "dist_name": "Pallahara",
                    "state": 19
                },
                {
                    "dist_id": 60,
                    "dist_name": "Talcher",
                    "state": 19
                },
                {
                    "dist_id": 61,
                    "dist_name": "Angul",
                    "state": 19
                },
                {
                    "dist_id": 62,
                    "dist_name": "Chhendipada (SC)",
                    "state": 19
                },
                {
                    "dist_id": 63,
                    "dist_name": "Athmallik",
                    "state": 19
                },
                {
                    "dist_id": 64,
                    "dist_name": "Birmaharajpur",
                    "state": 19
                },
                {
                    "dist_id": 65,
                    "dist_name": "Sonepur",
                    "state": 19
                },
                {
                    "dist_id": 66,
                    "dist_name": "Loisingha (SC)",
                    "state": 19
                },
                {
                    "dist_id": 67,
                    "dist_name": "Patnagarh",
                    "state": 19
                },
                {
                    "dist_id": 68,
                    "dist_name": "Bolangir",
                    "state": 19
                },
                {
                    "dist_id": 69,
                    "dist_name": "Titilagarh",
                    "state": 19
                },
                {
                    "dist_id": 70,
                    "dist_name": "Kantabanji",
                    "state": 19
                },
                {
                    "dist_id": 71,
                    "dist_name": "Nuapada",
                    "state": 19
                },
                {
                    "dist_id": 72,
                    "dist_name": "Khariar",
                    "state": 19
                },
                {
                    "dist_id": 73,
                    "dist_name": "Umarkote (ST)",
                    "state": 19
                },
                {
                    "dist_id": 74,
                    "dist_name": "Jharigam (ST)",
                    "state": 19
                },
                {
                    "dist_id": 75,
                    "dist_name": "Nabarangpur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 76,
                    "dist_name": "Dabugam (ST)",
                    "state": 19
                },
                {
                    "dist_id": 77,
                    "dist_name": "Lanjigarh (ST)",
                    "state": 19
                },
                {
                    "dist_id": 78,
                    "dist_name": "Junagarh",
                    "state": 19
                },
                {
                    "dist_id": 79,
                    "dist_name": "Dharmagarh",
                    "state": 19
                },
                {
                    "dist_id": 80,
                    "dist_name": "Bhawanipatna (SC)",
                    "state": 19
                },
                {
                    "dist_id": 81,
                    "dist_name": "Narla",
                    "state": 19
                },
                {
                    "dist_id": 82,
                    "dist_name": "Baliguda",
                    "state": 19
                },
                {
                    "dist_id": 83,
                    "dist_name": "G. Udayagiri (ST)",
                    "state": 19
                },
                {
                    "dist_id": 84,
                    "dist_name": "Phulbani (ST)",
                    "state": 19
                },
                {
                    "dist_id": 85,
                    "dist_name": "Kantamal",
                    "state": 19
                },
                {
                    "dist_id": 86,
                    "dist_name": "Boudh",
                    "state": 19
                },
                {
                    "dist_id": 87,
                    "dist_name": "Baramba",
                    "state": 19
                },
                {
                    "dist_id": 88,
                    "dist_name": "Banki",
                    "state": 19
                },
                {
                    "dist_id": 89,
                    "dist_name": "Athgarh",
                    "state": 19
                },
                {
                    "dist_id": 90,
                    "dist_name": "Barabati-Cuttack",
                    "state": 19
                },
                {
                    "dist_id": 91,
                    "dist_name": "Choudwar-Cuttack",
                    "state": 19
                },
                {
                    "dist_id": 92,
                    "dist_name": "Niali (SC)",
                    "state": 19
                },
                {
                    "dist_id": 93,
                    "dist_name": "Cuttack Sadar (SC)",
                    "state": 19
                },
                {
                    "dist_id": 94,
                    "dist_name": "Salipur",
                    "state": 19
                },
                {
                    "dist_id": 95,
                    "dist_name": "Mahanga",
                    "state": 19
                },
                {
                    "dist_id": 96,
                    "dist_name": "Patkura",
                    "state": 19
                },
                {
                    "dist_id": 97,
                    "dist_name": "Kendrapara (SC)",
                    "state": 19
                },
                {
                    "dist_id": 98,
                    "dist_name": "Aul",
                    "state": 19
                },
                {
                    "dist_id": 99,
                    "dist_name": "Rajanagar",
                    "state": 19
                },
                {
                    "dist_id": 100,
                    "dist_name": "Mahakalapada",
                    "state": 19
                },
                {
                    "dist_id": 101,
                    "dist_name": "Paradeep",
                    "state": 19
                },
                {
                    "dist_id": 102,
                    "dist_name": "Tirtol (SC)",
                    "state": 19
                },
                {
                    "dist_id": 103,
                    "dist_name": "Balikuda-Erasama",
                    "state": 19
                },
                {
                    "dist_id": 104,
                    "dist_name": "Jagatsinghpur",
                    "state": 19
                },
                {
                    "dist_id": 105,
                    "dist_name": "Kakatpur (SC)",
                    "state": 19
                },
                {
                    "dist_id": 106,
                    "dist_name": "Nimapara",
                    "state": 19
                },
                {
                    "dist_id": 107,
                    "dist_name": "Puri",
                    "state": 19
                },
                {
                    "dist_id": 108,
                    "dist_name": "Brahmagiri",
                    "state": 19
                },
                {
                    "dist_id": 109,
                    "dist_name": "Satyabadi",
                    "state": 19
                },
                {
                    "dist_id": 110,
                    "dist_name": "Pipili",
                    "state": 19
                },
                {
                    "dist_id": 111,
                    "dist_name": "Jayadev (SC)",
                    "state": 19
                },
                {
                    "dist_id": 112,
                    "dist_name": "Bhubaneswar Central",
                    "state": 19
                },
                {
                    "dist_id": 113,
                    "dist_name": "Bhubaneswar North",
                    "state": 19
                },
                {
                    "dist_id": 114,
                    "dist_name": "Ekamra Bhubaneswar",
                    "state": 19
                },
                {
                    "dist_id": 115,
                    "dist_name": "Jatani",
                    "state": 19
                },
                {
                    "dist_id": 116,
                    "dist_name": "Begunia",
                    "state": 19
                },
                {
                    "dist_id": 117,
                    "dist_name": "Khurda",
                    "state": 19
                },
                {
                    "dist_id": 118,
                    "dist_name": "Chilika",
                    "state": 19
                },
                {
                    "dist_id": 119,
                    "dist_name": "Ranpur",
                    "state": 19
                },
                {
                    "dist_id": 120,
                    "dist_name": "Khandapada",
                    "state": 19
                },
                {
                    "dist_id": 121,
                    "dist_name": "Daspalla (SC)",
                    "state": 19
                },
                {
                    "dist_id": 122,
                    "dist_name": "Nayagarh",
                    "state": 19
                },
                {
                    "dist_id": 123,
                    "dist_name": "Bhanjanagar",
                    "state": 19
                },
                {
                    "dist_id": 124,
                    "dist_name": "	Polasara",
                    "state": 19
                },
                {
                    "dist_id": 125,
                    "dist_name": "Kabisuryanagar",
                    "state": 19
                },
                {
                    "dist_id": 126,
                    "dist_name": "Khalikote (SC)",
                    "state": 19
                },
                {
                    "dist_id": 127,
                    "dist_name": "Chhatrapur (SC)",
                    "state": 19
                },
                {
                    "dist_id": 128,
                    "dist_name": "Aska",
                    "state": 19
                },
                {
                    "dist_id": 129,
                    "dist_name": "Surada",
                    "state": 19
                },
                {
                    "dist_id": 130,
                    "dist_name": "Sanakhemundi",
                    "state": 19
                },
                {
                    "dist_id": 131,
                    "dist_name": "Hinjili",
                    "state": 19
                },
                {
                    "dist_id": 132,
                    "dist_name": "Gopalpur",
                    "state": 19
                },
                {
                    "dist_id": 133,
                    "dist_name": "Berhampur",
                    "state": 19
                },
                {
                    "dist_id": 134,
                    "dist_name": "Digapahandi",
                    "state": 19
                },
                {
                    "dist_id": 135,
                    "dist_name": "Chikiti",
                    "state": 19
                },
                {
                    "dist_id": 136,
                    "dist_name": "Mohana (ST)",
                    "state": 19
                },
                {
                    "dist_id": 137,
                    "dist_name": "Parlakhemundi",
                    "state": 19
                },
                {
                    "dist_id": 138,
                    "dist_name": "Gunupur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 139,
                    "dist_name": "Bissam Cuttack (ST)",
                    "state": 19
                },
                {
                    "dist_id": 140,
                    "dist_name": "Rayagada (ST)",
                    "state": 19
                },
                {
                    "dist_id": 141,
                    "dist_name": "Lakshmipur (ST)",
                    "state": 19
                },
                {
                    "dist_id": 142,
                    "dist_name": "Kotpad (ST)",
                    "state": 19
                },
                {
                    "dist_id": 143,
                    "dist_name": "Jeypore",
                    "state": 19
                },
                {
                    "dist_id": 144,
                    "dist_name": "Koraput (SC)",
                    "state": 19
                },
                {
                    "dist_id": 145,
                    "dist_name": "Pottangi (ST)",
                    "state": 19
                },
                {
                    "dist_id": 146,
                    "dist_name": "Malkangiri (ST)",
                    "state": 19
                },
                {
                    "dist_id": 147,
                    "dist_name": "Chitrakonda (ST)",
                    "state": 19
                },


            ]

        },
        {
            "Id": "20",
            name: "Punjab",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Sujanpur",
                    "state": 20
                },
                {
                    "dist_id": 2,
                    "dist_name": "Bhoa",
                    "state": 20
                },
                {
                    "dist_id": 3,
                    "dist_name": "	Pathankot",
                    "state": 20
                },
                {
                    "dist_id": 4,
                    "dist_name": "	Gurdaspur ",
                    "state": 20
                },
                {
                    "dist_id": 5,
                    "dist_name": "	Dina Nagar",
                    "state": 20
                },
                {
                    "dist_id": 6,
                    "dist_name": "	Qadian",
                    "state": 20
                },
                {
                    "dist_id": 7,
                    "dist_name": "Batala",
                    "state": 20
                },
                {
                    "dist_id": 8,
                    "dist_name": "Sri Hargobindpur",
                    "state": 20
                },
                {
                    "dist_id": 9,
                    "dist_name": "Fetehgarh Churian",
                    "state": 20
                },
                {
                    "dist_id": 10,
                    "dist_name": "Dera Baba Nanak",
                    "state": 20
                },
                {
                    "dist_id": 11,
                    "dist_name": "Ajnala",
                    "state": 20
                },
                {
                    "dist_id": 12,
                    "dist_name": "Raja Sansi",
                    "state": 20
                },
                {
                    "dist_id": 13,
                    "dist_name": "Majitha",
                    "state": 20
                },
                {
                    "dist_id": 14,
                    "dist_name": "Jandiala",
                    "state": 20
                },
                {
                    "dist_id": 15,
                    "dist_name": "Amritsar North",
                    "state": 20
                },
                {
                    "dist_id": 16,
                    "dist_name": "Amritsar West",
                    "state": 20
                },
                {
                    "dist_id": 17,
                    "dist_name": "Amritsar Central",
                    "state": 20
                },
                {
                    "dist_id": 18,
                    "dist_name": "Amritsar East",
                    "state": 20
                },
                {
                    "dist_id": 19,
                    "dist_name": "Amritsar South",
                    "state": 20
                },
                {
                    "dist_id": 20,
                    "dist_name": "Attari",
                    "state": 20
                },
                {
                    "dist_id": 21,
                    "dist_name": "Tarn Taran",
                    "state": 20
                },
                {
                    "dist_id": 22,
                    "dist_name": "Khem Karan",
                    "state": 20
                },
                {
                    "dist_id": 23,
                    "dist_name": "Patti",
                    "state": 20
                },
                {
                    "dist_id": 24,
                    "dist_name": "Khadoor Sahib ",
                    "state": 20
                },
                {
                    "dist_id": 25,
                    "dist_name": "Baba Bakala",
                    "state": 20
                },
                {
                    "dist_id": 26,
                    "dist_name": "Bholath ",
                    "state": 20
                },
                {
                    "dist_id": 27,
                    "dist_name": "Kapurthala",
                    "state": 20
                },
                {
                    "dist_id": 28,
                    "dist_name": "Sultanpur Lodhi",
                    "state": 20
                },
                {
                    "dist_id": 29,
                    "dist_name": "Phagwara",
                    "state": 20
                },
                {
                    "dist_id": 30,
                    "dist_name": "Phillaur",
                    "state": 20
                },
                {
                    "dist_id": 31,
                    "dist_name": "Nakodar",
                    "state": 20
                },
                {
                    "dist_id": 32,
                    "dist_name": "Shahkot",
                    "state": 20
                },
                {
                    "dist_id": 33,
                    "dist_name": "Kartarpur",
                    "state": 20
                },
                {
                    "dist_id": 34,
                    "dist_name": "Jalandhar West",
                    "state": 20
                },
                {
                    "dist_id": 35,
                    "dist_name": "Jalandhar Central",
                    "state": 20
                },
                {
                    "dist_id": 36,
                    "dist_name": "Jalandhar North",
                    "state": 20
                },
                {
                    "dist_id": 37,
                    "dist_name": "Jalandhar Cantt",
                    "state": 20
                },
                {
                    "dist_id": 38,
                    "dist_name": "Adampur",
                    "state": 20
                },
                {
                    "dist_id": 39,
                    "dist_name": "Mukerian",
                    "state": 20
                },
                {
                    "dist_id": 40,
                    "dist_name": "Dasuya",
                    "state": 20
                },

                {
                    "dist_id": 41,
                    "dist_name": "Urmar",
                    "state": 20
                },
                {
                    "dist_id": 42,
                    "dist_name": "Sham Chaurasi",
                    "state": 20
                },
                {
                    "dist_id": 43,
                    "dist_name": "Hoshiarpur",
                    "state": 20
                },
                {
                    "dist_id": 44,
                    "dist_name": "Chabbewal",
                    "state": 20
                },
                {
                    "dist_id": 45,
                    "dist_name": "Garhshankar",
                    "state": 20
                },
                {
                    "dist_id": 46,
                    "dist_name": "Banga",
                    "state": 20
                },
                {
                    "dist_id": 47,
                    "dist_name": "Nawan Shahr",
                    "state": 20
                },
                {
                    "dist_id": 48,
                    "dist_name": "Balachaur",
                    "state": 20
                },
                {
                    "dist_id": 49,
                    "dist_name": "Anandpur Sahib",
                    "state": 20
                },
                {
                    "dist_id": 50,
                    "dist_name": "Rupnagar",
                    "state": 20
                },
                {
                    "dist_id": 51,
                    "dist_name": "Chamkaur Sahib",
                    "state": 20
                },
                {
                    "dist_id": 52,
                    "dist_name": "Kharar",
                    "state": 20
                },
                {
                    "dist_id": 53,
                    "dist_name": "S.A.S. Nagar",
                    "state": 20
                },
                {
                    "dist_id": 54,
                    "dist_name": "Bassi Pathana",
                    "state": 20
                },
                {
                    "dist_id": 55,
                    "dist_name": "Fatehgarh Sahib",
                    "state": 20
                },
                {
                    "dist_id": 56,
                    "dist_name": "Amloh",
                    "state": 20
                },
                {
                    "dist_id": 57,
                    "dist_name": "Khanna",
                    "state": 20
                },
                {
                    "dist_id": 58,
                    "dist_name": "Samrala",
                    "state": 20
                },
                {
                    "dist_id": 59,
                    "dist_name": "Sahnewal",
                    "state": 20
                },
                {
                    "dist_id": 60,
                    "dist_name": "Ludhiana East",
                    "state": 20
                },
                {
                    "dist_id": 61,
                    "dist_name": "Ludhiana South",
                    "state": 20
                },
                {
                    "dist_id": 62,
                    "dist_name": "Atam Nagar",
                    "state": 20
                },
                {
                    "dist_id": 63,
                    "dist_name": "Ludhiana Central",
                    "state": 20
                },
                {
                    "dist_id": 64,
                    "dist_name": "Ludhiana West",
                    "state": 20
                },
                {
                    "dist_id": 65,
                    "dist_name": "Ludhiana North",
                    "state": 20
                },
                {
                    "dist_id": 66,
                    "dist_name": "Gill",
                    "state": 20
                },
                {
                    "dist_id": 67,
                    "dist_name": "Payal",
                    "state": 20
                },
                {
                    "dist_id": 68,
                    "dist_name": "Dakha",
                    "state": 20
                },
                {
                    "dist_id": 69,
                    "dist_name": "Raikot",
                    "state": 20
                },
                {
                    "dist_id": 70,
                    "dist_name": "Jagraon",
                    "state": 20
                },
                {
                    "dist_id": 71,
                    "dist_name": "Nihal Singhwala",
                    "state": 20
                },
                {
                    "dist_id": 72,
                    "dist_name": "Bhagha Purana",
                    "state": 20
                },
                {
                    "dist_id": 73,
                    "dist_name": "Moga",
                    "state": 20
                },
                {
                    "dist_id": 74,
                    "dist_name": "Dharamkot",
                    "state": 20
                },
                {
                    "dist_id": 75,
                    "dist_name": "Zira",
                    "state": 20
                },
                {
                    "dist_id": 76,
                    "dist_name": "	Firozpur City",
                    "state": 20
                },
                {
                    "dist_id": 77,
                    "dist_name": "	Firozpur Rural",
                    "state": 20
                },
                {
                    "dist_id": 78,
                    "dist_name": "Guru Har Sahai",
                    "state": 20
                },
                {
                    "dist_id": 79,
                    "dist_name": "	Jalalabad",
                    "state": 20
                },
                {
                    "dist_id": 80,
                    "dist_name": "	Fazilka",
                    "state": 20
                },
                {
                    "dist_id": 81,
                    "dist_name": "	Abohar",
                    "state": 20
                },
                {
                    "dist_id": 82,
                    "dist_name": "Balluana",
                    "state": 20
                },
                {
                    "dist_id": 83,
                    "dist_name": "Lambi",
                    "state": 20
                },
                {
                    "dist_id": 84,
                    "dist_name": "Gidderbaha",
                    "state": 20
                },
                {
                    "dist_id": 85,
                    "dist_name": "Malout",
                    "state": 20
                },
                {
                    "dist_id": 86,
                    "dist_name": "Muktsar",
                    "state": 20
                },
                {
                    "dist_id": 87,
                    "dist_name": "Faridkot",
                    "state": 20
                },
                {
                    "dist_id": 88,
                    "dist_name": "Kotkapura",
                    "state": 20
                },
                {
                    "dist_id": 89,
                    "dist_name": "Jaitu",
                    "state": 20
                },
                {
                    "dist_id": 90,
                    "dist_name": "Rampura Phul",
                    "state": 20
                },
                {
                    "dist_id": 91,
                    "dist_name": "Bhucho Mandi",
                    "state": 20
                },
                {
                    "dist_id": 92,
                    "dist_name": "Bhucho Urban",
                    "state": 20
                },
                {
                    "dist_id": 93,
                    "dist_name": "Bhucho Rural",
                    "state": 20
                },
                {
                    "dist_id": 94,
                    "dist_name": "Talwandi Sabo",
                    "state": 20
                },
                {
                    "dist_id": 95,
                    "dist_name": "Maur",
                    "state": 20
                },
                {
                    "dist_id": 96,
                    "dist_name": "Mansa",
                    "state": 20
                },
                {
                    "dist_id": 97,
                    "dist_name": "Sardulgarh",
                    "state": 20
                },
                {
                    "dist_id": 98,
                    "dist_name": "Budhlada",
                    "state": 20
                },
                {
                    "dist_id": 99,
                    "dist_name": "Lehra",
                    "state": 20
                },
                {
                    "dist_id": 100,
                    "dist_name": "Dirba",
                    "state": 20
                },
                {
                    "dist_id": 101,
                    "dist_name": "Sunam",
                    "state": 20
                },
                {
                    "dist_id": 102,
                    "dist_name": "Bhadaur",
                    "state": 20
                },
                {
                    "dist_id": 103,
                    "dist_name": "Barnala",
                    "state": 20
                },
                {
                    "dist_id": 104,
                    "dist_name": "Mehal Kalan",
                    "state": 20
                },
                {
                    "dist_id": 105,
                    "dist_name": "Malerkotla",
                    "state": 20
                },
                {
                    "dist_id": 106,
                    "dist_name": "Amargarh",
                    "state": 20
                },
                {
                    "dist_id": 107,
                    "dist_name": "Dhuri",
                    "state": 20
                },
                {
                    "dist_id": 108,
                    "dist_name": "Sangrur",
                    "state": 20
                },
                {
                    "dist_id": 109,
                    "dist_name": "Nabha",
                    "state": 20
                },
                {
                    "dist_id": 110,
                    "dist_name": "Patiala Rural",
                    "state": 20
                },
                {
                    "dist_id": 111,
                    "dist_name": "Rajpura",
                    "state": 20
                },
                {
                    "dist_id": 112,
                    "dist_name": "Dera Bassi",
                    "state": 20
                },
                {
                    "dist_id": 113,
                    "dist_name": "Ghanaur",
                    "state": 20
                },
                {
                    "dist_id": 114,
                    "dist_name": "Sanour",
                    "state": 20
                },
                {
                    "dist_id": 115,
                    "dist_name": "Patiala",
                    "state": 20
                },
                {
                    "dist_id": 116,
                    "dist_name": "Samana",
                    "state": 20
                },
                {
                    "dist_id": 117,
                    "dist_name": "Shutrana",
                    "state": 20
                }

            ]
        },
        {
            "Id": "21",
            name: "Rajasthan",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Sadulshahar",
                    "state": 21
                },
                {
                    "dist_id": 2,
                    "dist_name": "Ganganagar",
                    "state": 21
                },
                {
                    "dist_id": 3,
                    "dist_name": "Karanpur",
                    "state": 21
                },
                {
                    "dist_id": 4,
                    "dist_name": "Suratgarh",
                    "state": 21
                },
                {
                    "dist_id": 5,
                    "dist_name": "Raisinghnagar (SC)",
                    "state": 21
                },
                {
                    "dist_id": 6,
                    "dist_name": "Anupgarh (SC)",
                    "state": 21
                },
                {
                    "dist_id": 7,
                    "dist_name": "Sangaria",
                    "state": 21
                },
                {
                    "dist_id": 8,
                    "dist_name": "Hanumangarh",
                    "state": 21
                },
                {
                    "dist_id": 9,
                    "dist_name": "Pilibanga (SC)",
                    "state": 21
                },
                {
                    "dist_id": 10,
                    "dist_name": "Nohar",
                    "state": 21
                },
                {
                    "dist_id": 11,
                    "dist_name": "Bhadra",
                    "state": 21
                },
                {
                    "dist_id": 12,
                    "dist_name": "Khajuwala (SC)",
                    "state": 21
                },
                {
                    "dist_id": 13,
                    "dist_name": "Bikaner West",
                    "state": 21
                },
                {
                    "dist_id": 14,
                    "dist_name": "Bikaner East",
                    "state": 21
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kolayat",
                    "state": 21
                },
                {
                    "dist_id": 16,
                    "dist_name": "Lunkaransar",
                    "state": 21
                },
                {
                    "dist_id": 17,
                    "dist_name": "Dungargarh",
                    "state": 21
                },
                {
                    "dist_id": 18,
                    "dist_name": "Nokha",
                    "state": 21
                },
                {
                    "dist_id": 19,
                    "dist_name": "Sadulpur",
                    "state": 21
                },
                {
                    "dist_id": 20,
                    "dist_name": "Taranagar",
                    "state": 21
                },
                {
                    "dist_id": 21,
                    "dist_name": "Sardarshahar",
                    "state": 21
                },
                {
                    "dist_id": 22,
                    "dist_name": "Churu",
                    "state": 21
                },
                {
                    "dist_id": 23,
                    "dist_name": "Ratangarh",
                    "state": 21
                },
                {
                    "dist_id": 24,
                    "dist_name": "Sujangarh (SC) ",
                    "state": 21
                },
                {
                    "dist_id": 25,
                    "dist_name": "Pilani (SC)",
                    "state": 21
                },
                {
                    "dist_id": 26,
                    "dist_name": "Surajgarh ",
                    "state": 21
                },
                {
                    "dist_id": 27,
                    "dist_name": "Jhunjhunu",
                    "state": 21
                },
                {
                    "dist_id": 28,
                    "dist_name": "Mandawa",
                    "state": 21
                },
                {
                    "dist_id": 29,
                    "dist_name": "Nawalgarh",
                    "state": 21
                },
                {
                    "dist_id": 30,
                    "dist_name": "Udaipurwati",
                    "state": 21
                },
                {
                    "dist_id": 31,
                    "dist_name": "Khetri",
                    "state": 21
                },
                {
                    "dist_id": 32,
                    "dist_name": "Fatehpur",
                    "state": 21
                },
                {
                    "dist_id": 33,
                    "dist_name": "Lachhmangarh",
                    "state": 21
                },
                {
                    "dist_id": 34,
                    "dist_name": "Dhod (SC)",
                    "state": 21
                },
                {
                    "dist_id": 35,
                    "dist_name": "Sikar",
                    "state": 21
                },
                {
                    "dist_id": 36,
                    "dist_name": "Dantaramgarh",
                    "state": 21
                },
                {
                    "dist_id": 37,
                    "dist_name": "Khandela",
                    "state": 21
                },
                {
                    "dist_id": 38,
                    "dist_name": "Neem Ka Thana",
                    "state": 21
                },
                {
                    "dist_id": 39,
                    "dist_name": "Srimadhopur",
                    "state": 21
                },
                {
                    "dist_id": 40,
                    "dist_name": "Kotputli",
                    "state": 21
                },

                {
                    "dist_id": 41,
                    "dist_name": "Viratnagar",
                    "state": 21
                },
                {
                    "dist_id": 42,
                    "dist_name": "Shahpura",
                    "state": 21
                },
                {
                    "dist_id": 43,
                    "dist_name": "Chomu",
                    "state": 21
                },
                {
                    "dist_id": 44,
                    "dist_name": "Phulera",
                    "state": 21
                },
                {
                    "dist_id": 45,
                    "dist_name": "Dudu (SC)",
                    "state": 21
                },
                {
                    "dist_id": 46,
                    "dist_name": "Jhotwara",
                    "state": 21
                },
                {
                    "dist_id": 47,
                    "dist_name": "Amber",
                    "state": 21
                },
                {
                    "dist_id": 48,
                    "dist_name": "Jamwa Ramgarh (ST)",
                    "state": 21
                },
                {
                    "dist_id": 49,
                    "dist_name": "Hawa Mahal",
                    "state": 21
                },
                {
                    "dist_id": 50,
                    "dist_name": "Vidhyadhar Nagar",
                    "state": 21
                },
                {
                    "dist_id": 51,
                    "dist_name": "Civil Lines",
                    "state": 21
                },
                {
                    "dist_id": 52,
                    "dist_name": "Kishanpole",
                    "state": 21
                },
                {
                    "dist_id": 53,
                    "dist_name": "Adarsh Nagar",
                    "state": 21
                },
                {
                    "dist_id": 54,
                    "dist_name": "Malviya Nagar",
                    "state": 21
                },
                {
                    "dist_id": 55,
                    "dist_name": "Sanganer",
                    "state": 21
                },
                {
                    "dist_id": 56,
                    "dist_name": "Bagru (SC)",
                    "state": 21
                },
                {
                    "dist_id": 57,
                    "dist_name": "Bassi (ST)",
                    "state": 21
                },
                {
                    "dist_id": 58,
                    "dist_name": "Chaksu (SC)",
                    "state": 21
                },
                {
                    "dist_id": 59,
                    "dist_name": "Tijara",
                    "state": 21
                },
                {
                    "dist_id": 60,
                    "dist_name": "Kishangarh Bas",
                    "state": 21
                },
                {
                    "dist_id": 61,
                    "dist_name": "Mundawar",
                    "state": 21
                },
                {
                    "dist_id": 62,
                    "dist_name": "Behror",
                    "state": 21
                },
                {
                    "dist_id": 63,
                    "dist_name": "Bansur",
                    "state": 21
                },
                {
                    "dist_id": 64,
                    "dist_name": "Thanagazi",
                    "state": 21
                },
                {
                    "dist_id": 65,
                    "dist_name": "Alwar Rural (SC)",
                    "state": 21
                },
                {
                    "dist_id": 66,
                    "dist_name": "Alwar Urban",
                    "state": 21
                },
                {
                    "dist_id": 67,
                    "dist_name": "Ramgarh",
                    "state": 21
                },
                {
                    "dist_id": 68,
                    "dist_name": "Rajgarh Laxmangarh (ST)",
                    "state": 21
                },
                {
                    "dist_id": 69,
                    "dist_name": "Kathumar (SC)",
                    "state": 21
                },
                {
                    "dist_id": 70,
                    "dist_name": "Kaman",
                    "state": 21
                },
                {
                    "dist_id": 71,
                    "dist_name": "Nagar",
                    "state": 21
                },
                {
                    "dist_id": 72,
                    "dist_name": "Deeg-Kumher",
                    "state": 21
                },
                {
                    "dist_id": 73,
                    "dist_name": "Bharatput",
                    "state": 21
                },
                {
                    "dist_id": 74,
                    "dist_name": "Nadbai",
                    "state": 21
                },
                {
                    "dist_id": 75,
                    "dist_name": "Weir (SC)",
                    "state": 21
                },
                {
                    "dist_id": 76,
                    "dist_name": "Bayana (SC)",
                    "state": 21
                },
                {
                    "dist_id": 77,
                    "dist_name": "Baseri (SC)",
                    "state": 21
                },
                {
                    "dist_id": 78,
                    "dist_name": "Bari",
                    "state": 21
                },
                {
                    "dist_id": 79,
                    "dist_name": "Dholpur",
                    "state": 21
                },
                {
                    "dist_id": 80,
                    "dist_name": "Rajakhera",
                    "state": 21
                },
                {
                    "dist_id": 81,
                    "dist_name": "Todabhim (ST)",
                    "state": 21
                },
                {
                    "dist_id": 82,
                    "dist_name": "Hindaun (SC)",
                    "state": 21
                },
                {
                    "dist_id": 83,
                    "dist_name": "Karauli",
                    "state": 21
                },
                {
                    "dist_id": 84,
                    "dist_name": "Sapotra (ST)",
                    "state": 21
                },
                {
                    "dist_id": 85,
                    "dist_name": "Bandikui",
                    "state": 21
                },
                {
                    "dist_id": 86,
                    "dist_name": "Mahuwa",
                    "state": 21
                },
                {
                    "dist_id": 87,
                    "dist_name": "	Sikrai (SC)",
                    "state": 21
                },
                {
                    "dist_id": 88,
                    "dist_name": "Dausa",
                    "state": 21
                },
                {
                    "dist_id": 89,
                    "dist_name": "Lalsot (ST)",
                    "state": 21
                },
                {
                    "dist_id": 90,
                    "dist_name": "Gangapur",
                    "state": 21
                },
                {
                    "dist_id": 91,
                    "dist_name": "Bamanwas (ST)",
                    "state": 21
                },
                {
                    "dist_id": 92,
                    "dist_name": "Sawai Madhopur",
                    "state": 21
                },
                {
                    "dist_id": 93,
                    "dist_name": "Khandar (SC)",
                    "state": 21
                },
                {
                    "dist_id": 94,
                    "dist_name": "Malpura",
                    "state": 21
                },
                {
                    "dist_id": 95,
                    "dist_name": "Niwai (SC)",
                    "state": 21
                },
                {
                    "dist_id": 96,
                    "dist_name": "Tonk",
                    "state": 21
                },
                {
                    "dist_id": 97,
                    "dist_name": "Deoli-Uniara",
                    "state": 21
                },
                {
                    "dist_id": 98,
                    "dist_name": "Kishangarh",
                    "state": 21
                },
                {
                    "dist_id": 99,
                    "dist_name": "Pushkar",
                    "state": 21
                },
                {
                    "dist_id": 100,
                    "dist_name": "Ajmer North",
                    "state": 21
                },
                {
                    "dist_id": 101,
                    "dist_name": "Ajmer South (SC)",
                    "state": 21
                },
                {
                    "dist_id": 102,
                    "dist_name": "Nasirabad",
                    "state": 21
                },
                {
                    "dist_id": 103,
                    "dist_name": "Beawar",
                    "state": 21
                },
                {
                    "dist_id": 104,
                    "dist_name": "Masuda",
                    "state": 21
                },
                {
                    "dist_id": 105,
                    "dist_name": "Kekri",
                    "state": 21
                },
                {
                    "dist_id": 106,
                    "dist_name": "Ladnun",
                    "state": 21
                },
                {
                    "dist_id": 107,
                    "dist_name": "Deedwana",
                    "state": 21
                },
                {
                    "dist_id": 108,
                    "dist_name": "Jayal (SC)",
                    "state": 21
                },
                {
                    "dist_id": 109,
                    "dist_name": "Nagaur",
                    "state": 21
                },
                {
                    "dist_id": 110,
                    "dist_name": "Khinwsar",
                    "state": 21
                },
                {
                    "dist_id": 111,
                    "dist_name": "Merta (SC)",
                    "state": 21
                },
                {
                    "dist_id": 112,
                    "dist_name": "Degana",
                    "state": 21
                },
                {
                    "dist_id": 113,
                    "dist_name": "Makrana",
                    "state": 21
                },
                {
                    "dist_id": 114,
                    "dist_name": "Parbatsar",
                    "state": 21
                },
                {
                    "dist_id": 115,
                    "dist_name": "Nawan",
                    "state": 21
                },
                {
                    "dist_id": 116,
                    "dist_name": "Jaitaram",
                    "state": 21
                },
                {
                    "dist_id": 117,
                    "dist_name": "Sojat (SC)",
                    "state": 21
                },
                {
                    "dist_id": 118,
                    "dist_name": "Pali",
                    "state": 21
                },
                {
                    "dist_id": 119,
                    "dist_name": "Marwar Junction",
                    "state": 21
                },
                {
                    "dist_id": 120,
                    "dist_name": "Bali",
                    "state": 21
                },

                {
                    "dist_id": 121,
                    "dist_name": "Sumerpur",
                    "state": 21
                },
                {
                    "dist_id": 122,
                    "dist_name": "Phalodi",
                    "state": 21
                },
                {
                    "dist_id": 123,
                    "dist_name": "Lohawat",
                    "state": 21
                },
                {
                    "dist_id": 124,
                    "dist_name": "Shergarh",
                    "state": 21
                },
                {
                    "dist_id": 125,
                    "dist_name": "Osian",
                    "state": 21
                },
                {
                    "dist_id": 126,
                    "dist_name": "Bhopalgarh (SC)",
                    "state": 21
                },
                {
                    "dist_id": 127,
                    "dist_name": "Sardarpura ",
                    "state": 21
                },
                {
                    "dist_id": 128,
                    "dist_name": "Jodhpur",
                    "state": 21
                },
                {
                    "dist_id": 129,
                    "dist_name": "Soorsagar",
                    "state": 21
                },
                {
                    "dist_id": 130,
                    "dist_name": "Luni",
                    "state": 21
                },

                {
                    "dist_id": 131,
                    "dist_name": "Bilara (SC)",
                    "state": 21
                },
                {
                    "dist_id": 132,
                    "dist_name": "Jaisalmer",
                    "state": 21
                },
                {
                    "dist_id": 133,
                    "dist_name": "Pokaran",
                    "state": 21
                },
                {
                    "dist_id": 134,
                    "dist_name": "Sheo",
                    "state": 21
                },
                {
                    "dist_id": 135,
                    "dist_name": "Barmer",
                    "state": 21
                },
                {
                    "dist_id": 136,
                    "dist_name": "Baytoo",
                    "state": 21
                },
                {
                    "dist_id": 137,
                    "dist_name": "Pachpadra",
                    "state": 21
                },
                {
                    "dist_id": 138,
                    "dist_name": "Siwana",
                    "state": 21
                },
                {
                    "dist_id": 139,
                    "dist_name": "Gudamalani",
                    "state": 21
                },
                {
                    "dist_id": 140,
                    "dist_name": "Chohtan (SC)",
                    "state": 21
                },

                {
                    "dist_id": 141,
                    "dist_name": "Ahore",
                    "state": 21
                },
                {
                    "dist_id": 142,
                    "dist_name": "Jalore (SC)",
                    "state": 21
                },
                {
                    "dist_id": 143,
                    "dist_name": "Bhinmal",
                    "state": 21
                },
                {
                    "dist_id": 144,
                    "dist_name": "Sanchore",
                    "state": 21
                },
                {
                    "dist_id": 145,
                    "dist_name": "Raniwara",
                    "state": 21
                },
                {
                    "dist_id": 146,
                    "dist_name": "Sirohi",
                    "state": 21
                },
                {
                    "dist_id": 147,
                    "dist_name": "Pindwara-Abu (ST)",
                    "state": 21
                },
                {
                    "dist_id": 148,
                    "dist_name": "Reodar (SC)",
                    "state": 21
                },
                {
                    "dist_id": 149,
                    "dist_name": "Gogunda (ST)",
                    "state": 21
                },
                {
                    "dist_id": 150,
                    "dist_name": "Jhadol (ST)",
                    "state": 21
                },

                {
                    "dist_id": 151,
                    "dist_name": "Kherwara (ST)",
                    "state": 21
                },
                {
                    "dist_id": 152,
                    "dist_name": "Udaipur Rural (ST)",
                    "state": 21
                },
                {
                    "dist_id": 153,
                    "dist_name": "Udaipur",
                    "state": 21
                },
                {
                    "dist_id": 154,
                    "dist_name": "Mavli",
                    "state": 21
                },
                {
                    "dist_id": 155,
                    "dist_name": "Vallabhnagar",
                    "state": 21
                },
                {
                    "dist_id": 156,
                    "dist_name": "Salumber (ST)",
                    "state": 21
                },
                {
                    "dist_id": 157,
                    "dist_name": "Dhariawad (ST)",
                    "state": 21
                },
                {
                    "dist_id": 158,
                    "dist_name": "Dungarpur (ST)",
                    "state": 21
                },
                {
                    "dist_id": 159,
                    "dist_name": "Aspur (ST)",
                    "state": 21
                },
                {
                    "dist_id": 160,
                    "dist_name": "Sagwara (ST)",
                    "state": 21
                },

                {
                    "dist_id": 161,
                    "dist_name": "Chorasi (ST)",
                    "state": 21
                },
                {
                    "dist_id": 162,
                    "dist_name": "Ghatol (ST)",
                    "state": 21
                },
                {
                    "dist_id": 163,
                    "dist_name": "Garhi",
                    "state": 21
                },
                {
                    "dist_id": 164,
                    "dist_name": "Banswara (ST)",
                    "state": 21
                },
                {
                    "dist_id": 165,
                    "dist_name": "Bagidora (ST)",
                    "state": 21
                },
                {
                    "dist_id": 166,
                    "dist_name": "Kushalgarh (ST)",
                    "state": 21
                },
                {
                    "dist_id": 167,
                    "dist_name": "Kapasan (SC)",
                    "state": 21
                },
                {
                    "dist_id": 168,
                    "dist_name": "Begun",
                    "state": 21
                },
                {
                    "dist_id": 169,
                    "dist_name": "Chittorgarh",
                    "state": 21
                },
                {
                    "dist_id": 170,
                    "dist_name": "Nimbahera",
                    "state": 21
                },

                {
                    "dist_id": 171,
                    "dist_name": "Bari Sadri",
                    "state": 21
                },
                {
                    "dist_id": 172,
                    "dist_name": "Pratapgarh (ST)",
                    "state": 21
                },
                {
                    "dist_id": 173,
                    "dist_name": "Bhim",
                    "state": 21
                },
                {
                    "dist_id": 174,
                    "dist_name": "Kumbhalgarh",
                    "state": 21
                },
                {
                    "dist_id": 175,
                    "dist_name": "Rajsamand",
                    "state": 21
                },
                {
                    "dist_id": 176,
                    "dist_name": "Nathdwara",
                    "state": 21
                },
                {
                    "dist_id": 177,
                    "dist_name": "Asind",
                    "state": 21
                },
                {
                    "dist_id": 178,
                    "dist_name": "Mandal",
                    "state": 21
                },
                {
                    "dist_id": 179,
                    "dist_name": "Sahara",
                    "state": 21
                },
                {
                    "dist_id": 180,
                    "dist_name": "Bhilwara",
                    "state": 21
                },

                {
                    "dist_id": 181,
                    "dist_name": " Shahpura",
                    "state": 21
                },
                {
                    "dist_id": 182,
                    "dist_name": "Jahazpur",
                    "state": 21
                },
                {
                    "dist_id": 183,
                    "dist_name": "Mandalgarh",
                    "state": 21
                },
                {
                    "dist_id": 184,
                    "dist_name": "Hindoli",
                    "state": 21
                },
                {
                    "dist_id": 185,
                    "dist_name": "Keshoraipatan (SC)",
                    "state": 21
                },
                {
                    "dist_id": 186,
                    "dist_name": "Bundi",
                    "state": 21
                },
                {
                    "dist_id": 187,
                    "dist_name": "Pipalda ",
                    "state": 21
                },
                {
                    "dist_id": 188,
                    "dist_name": "Sandod",
                    "state": 21
                },
                {
                    "dist_id": 189,
                    "dist_name": "Kota North",
                    "state": 21
                },
                {
                    "dist_id": 190,
                    "dist_name": "Kota South",
                    "state": 21
                },

                {
                    "dist_id": 191,
                    "dist_name": "Ladpura",
                    "state": 21
                },
                {
                    "dist_id": 192,
                    "dist_name": "Ramganj Mandi (SC)",
                    "state": 21
                },
                {
                    "dist_id": 193,
                    "dist_name": "Anta",
                    "state": 21
                },
                {
                    "dist_id": 194,
                    "dist_name": "Kishanganj (ST)",
                    "state": 21
                },
                {
                    "dist_id": 195,
                    "dist_name": "Baran-Atru (SC)",
                    "state": 21
                },
                {
                    "dist_id": 196,
                    "dist_name": "Chhabra",
                    "state": 21
                },
                {
                    "dist_id": 197,
                    "dist_name": "Dag (SC)",
                    "state": 21
                },
                {
                    "dist_id": 198,
                    "dist_name": "Jhalrapatan",
                    "state": 21
                },
                {
                    "dist_id": 199,
                    "dist_name": "Khanpur",
                    "state": 21
                },
                {
                    "dist_id": 120,
                    "dist_name": "Manohar thana",
                    "state": 21
                }

            ]
        },
        {
            "Id": "22",
            name: "Sikkim",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Yoksam-Tashiding",
                    "state": 22
                },
                {
                    "dist_id": 2,
                    "dist_name": "Yangthang",
                    "state": 22
                },
                {
                    "dist_id": 3,
                    "dist_name": "Maneybong Dentam",
                    "state": 22
                },
                {
                    "dist_id": 4,
                    "dist_name": "Gyalshing-Barnyak",
                    "state": 22
                },
                {
                    "dist_id": 5,
                    "dist_name": "Rinchenpong",
                    "state": 22
                },
                {
                    "dist_id": 6,
                    "dist_name": "Daramdin",
                    "state": 22
                },
                {
                    "dist_id": 7,
                    "dist_name": "Sorend-Chakung",
                    "state": 22
                },
                {
                    "dist_id": 8,
                    "dist_name": "Salghari-Zoom",
                    "state": 22
                },
                {
                    "dist_id": 9,
                    "dist_name": "Barfung",
                    "state": 22
                },
                {
                    "dist_id": 10,
                    "dist_name": "Poklok-Kamrand",
                    "state": 22
                },
                {
                    "dist_id": 11,
                    "dist_name": "Namchi-Singhithang",
                    "state": 22
                },
                {
                    "dist_id": 12,
                    "dist_name": "Melli",
                    "state": 22
                },
                {
                    "dist_id": 13,
                    "dist_name": "Namthang-Rateypani",
                    "state": 22
                },
                {
                    "dist_id": 14,
                    "dist_name": "Temi-Namphing",
                    "state": 22
                },
                {
                    "dist_id": 15,
                    "dist_name": "Rangang-Yangang",
                    "state": 22
                },
                {
                    "dist_id": 16,
                    "dist_name": "Tumin Lingee",
                    "state": 22
                },
                {
                    "dist_id": 17,
                    "dist_name": "Khamdong-Singtam",
                    "state": 22
                },
                {
                    "dist_id": 18,
                    "dist_name": "West Pendam",
                    "state": 22
                },
                {
                    "dist_id": 19,
                    "dist_name": "Rhenock",
                    "state": 22
                },
                {
                    "dist_id": 20,
                    "dist_name": "Chujachen",
                    "state": 22
                },
                {
                    "dist_id": 21,
                    "dist_name": "Gnathang-Machong",
                    "state": 22
                },
                {
                    "dist_id": 22,
                    "dist_name": "Namchaybong",
                    "state": 22
                },
                {
                    "dist_id": 23,
                    "dist_name": "Shyari",
                    "state": 22
                },
                {
                    "dist_id": 24,
                    "dist_name": "Martam-Rumtek",
                    "state": 22
                },
                {
                    "dist_id": 25,
                    "dist_name": "Upper Tadong",
                    "state": 22
                },
                {
                    "dist_id": 26,
                    "dist_name": "Arithang",
                    "state": 22
                },
                {
                    "dist_id": 27,
                    "dist_name": "Gangtok",
                    "state": 22
                },
                {
                    "dist_id": 28,
                    "dist_name": "Upper Burtuk",
                    "state": 22
                },
                {
                    "dist_id": 29,
                    "dist_name": "Kabi Lungchok",
                    "state": 22
                },
                {
                    "dist_id": 30,
                    "dist_name": "Djongu",
                    "state": 22
                },
                {
                    "dist_id": 31,
                    "dist_name": "Lachen-Mangan",
                    "state": 22
                },
                {
                    "dist_id": 32,
                    "dist_name": "Sangha",
                    "state": 22
                }
            ]
        },
        {
            "Id": "23",
            name: "Tamil Nadu",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Gummidipoondi",
                    "state": 23,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Ponneri",
                    "state": 23,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Tiruttani",
                    "state": 23,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Thiruvallur",
                    "state": 23,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Poonamallee",
                    "state": 23,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Avadi",
                    "state": 23,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Maduravoyal",
                    "state": 23,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Ambattur",
                    "state": 23,
                },
                {
                    "dist_id": 9,
                    "dist_name": "Madavaram",
                    "state": 23,
                },
                {
                    "dist_id": 10,
                    "dist_name": "Thiruvottiyur",
                    "state": 23,
                },
                {
                    "dist_id": 11,
                    "dist_name": "Dr. Radhakrishnan Nagar",
                    "state": 23,
                },
                {
                    "dist_id": 12,
                    "dist_name": "Perambur",
                    "state": 23,
                },
                {
                    "dist_id": 13,
                    "dist_name": "Kolathur",
                    "state": 23,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Villivakkam",
                    "state": 23,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Thiru-Vi-Ka-Nagar",
                    "state": 23,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Egmore",
                    "state": 23,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Royapuram",
                    "state": 24,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Harbour",
                    "state": 23,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Chepauk-Thiruvallikeni",
                    "state": 23,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Thousand Lights",
                    "state": 23,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Anna Nagar",
                    "state": 23,
                },
                {
                    "dist_id": 22,
                    "dist_name": "Virugambakkam",
                    "state": 23,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Saidapet",
                    "state": 23,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Thiyagarayanagar",
                    "state": 23,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Mylapore",
                    "state": 23,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Velachery",
                    "state": 23,
                },
                {
                    "dist_id": 27,
                    "dist_name": "Shozhinganallur",
                    "state": 23,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Alandur",
                    "state": 23,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Sriperumbudur",
                    "state": 23,
                },
                {
                    "dist_id": 30,
                    "dist_name": "Pallavaram",
                    "state": 23,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Tambaram",
                    "state": 23,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Chengalpattu",
                    "state": 23,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Thiruporur",
                    "state": 23,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Sangareddy",
                    "state": 23,
                },
                {
                    "dist_id": 35,
                    "dist_name": "Cheyyur",
                    "state": 23,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Madurantakam",
                    "state": 23,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Uthiramerur",
                    "state": 23,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Kancheepuram",
                    "state": 23,
                },
                {
                    "dist_id": 39,
                    "dist_name": "Arakkonam",
                    "state": 23,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Sholinghur",
                    "state": 23,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Katpadi",
                    "state": 23,
                },
                {
                    "dist_id": 42,
                    "dist_name": "Ranipet",
                    "state": 23,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Arcot",
                    "state": 23,
                },
                {
                    "dist_id": 44,
                    "dist_name": "Vellore",
                    "state": 23,
                },
                {
                    "dist_id": 45,
                    "dist_name": "Anaikattu",
                    "state": 23,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Kilvaithinankuppam",
                    "state": 23,
                },

                {
                    "dist_id": 47,
                    "dist_name": "Gudiyattam",
                    "state": 23,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Vaniyambadi",
                    "state": 23,
                },
                {
                    "dist_id": 49,
                    "dist_name": "Ambur",
                    "state": 23,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Jolarpet",
                    "state": 23,
                },

                {
                    "dist_id": 51,
                    "dist_name": "Tirupattur",
                    "state": 23,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Uthangari",
                    "state": 23,
                },
                {
                    "dist_id": 53,
                    "dist_name": "Bargur",
                    "state": 23,
                },
                {
                    "dist_id": 54,
                    "dist_name": "Krishnagiri",
                    "state": 23,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Veppanahalli",
                    "state": 23,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Hosur",
                    "state": 23,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Thalli",
                    "state": 23,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Palacode",
                    "state": 23,
                },
                {
                    "dist_id": 59,
                    "dist_name": "Pennagaram",
                    "state": 23,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Dharmapuri",
                    "state": 23,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Pappireddippatti",
                    "state": 23,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Harur",
                    "state": 23,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Chengam",
                    "state": 23,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Tiruvannamalai",
                    "state": 23,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Kalasapakkam",
                    "state": 23,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Polur",
                    "state": 23,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Arani",
                    "state": 23,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Cheyyar",
                    "state": 23,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Vandavasi",
                    "state": 23,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Gingee",
                    "state": 23,
                },

                {
                    "dist_id": 71,
                    "dist_name": "Mailam",
                    "state": 23,
                }, {
                    "dist_id": 72,
                    "dist_name": "Thindivanam",
                    "state": 23,
                },
                {
                    "dist_id": 73,
                    "dist_name": "Vanur",
                    "state": 23,
                },
                {
                    "dist_id": 74,
                    "dist_name": "Villupuram",
                    "state": 23,
                },
                {
                    "dist_id": 75,
                    "dist_name": "Vikravandi",
                    "state": 23,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Tirukkoyilur",
                    "state": 23,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Ulundurpettai",
                    "state": 23,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Rishivandiyam",
                    "state": 23,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Sankarapuram",
                    "state": 23,
                },
                {
                    "dist_id": 80,
                    "dist_name": "Kallakurichi",
                    "state": 23,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Gangavalli",
                    "state": 23,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Attur",
                    "state": 23,
                },
                {
                    "dist_id": 83,
                    "dist_name": "Yercaud",
                    "state": 23,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Omalur",
                    "state": 23,
                },
                {
                    "dist_id": 85,
                    "dist_name": "Mettur",
                    "state": 23,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Edappadi",
                    "state": 23,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Sankari",
                    "state": 23,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Salem(West)",
                    "state": 23,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Salem(North)",
                    "state": 23,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Salem(South)",
                    "state": 23,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Verrapandi",
                    "state": 23,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Rasipuram",
                    "state": 23,
                },
                {
                    "dist_id": 93,
                    "dist_name": "Senthamangalam",
                    "state": 23,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Namakkal",
                    "state": 23,
                },
                {
                    "dist_id": 95,
                    "dist_name": "Paramathi Velur",
                    "state": 23,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Tiruchengodu",
                    "state": 23,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Kumarapalayam",
                    "state": 23,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Erode(East)",
                    "state": 23,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Erode(West)",
                    "state": 23,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Modakkurichi",
                    "state": 23,
                },

                {
                    "dist_id": 101,
                    "dist_name": "Dharapuram",
                    "state": 23,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Kangayam",
                    "state": 23,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Perundurai",
                    "state": 23,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Bhavani",
                    "state": 23,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Anthiyur",
                    "state": 23,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Gobichettipalayam",
                    "state": 23,
                },
                {
                    "dist_id": 107,
                    "dist_name": "Bhavanisagar",
                    "state": 23,
                },
                {
                    "dist_id": 108,
                    "dist_name": "Udhangamandalam",
                    "state": 23,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Gudalur",
                    "state": 23,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Coonoor",
                    "state": 23,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Mettupalayam",
                    "state": 23,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Avanashi",
                    "state": 23,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Tiruppur (North)",
                    "state": 23,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Tiruppur (South)",
                    "state": 23,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Palladam",
                    "state": 23,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Sulur",
                    "state": 23,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Kavundampalayam",
                    "state": 23,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Coimbatore (North)",
                    "state": 23,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Thondamuthur",
                    "state": 23,
                },
                {
                    "dist_id": 120,
                    "dist_name": "Coimbatore (South)",
                    "state": 23,
                },
                {
                    "dist_id": 121,
                    "dist_name": "Singanallur",
                    "state": 23,
                },
                {
                    "dist_id": 122,
                    "dist_name": "Kinathukadavu",
                    "state": 23,
                },
                {
                    "dist_id": 123,
                    "dist_name": "Pollachi",
                    "state": 23,
                },
                {
                    "dist_id": 124,
                    "dist_name": "Valparai",
                    "state": 23,
                },
                {
                    "dist_id": 125,
                    "dist_name": "Udumalaipettai",
                    "state": 23,
                },
                {
                    "dist_id": 126,
                    "dist_name": "Madathukulam",
                    "state": 23,
                },
                {
                    "dist_id": 127,
                    "dist_name": "Palani",
                    "state": 23,
                },
                {
                    "dist_id": 128,
                    "dist_name": "Oddanchatram",
                    "state": 23,
                },
                {
                    "dist_id": 129,
                    "dist_name": "Athoor",
                    "state": 23,
                },
                {
                    "dist_id": 130,
                    "dist_name": "Nilakottai",
                    "state": 23,
                },
                {
                    "dist_id": 131,
                    "dist_name": "Natham",
                    "state": 23,
                },
                {
                    "dist_id": 132,
                    "dist_name": "Dindigul",
                    "state": 23,
                },
                {
                    "dist_id": 133,
                    "dist_name": "Vedasandur",
                    "state": 23,
                },
                {
                    "dist_id": 134,
                    "dist_name": "Aravakurichi",
                    "state": 23,
                },
                {
                    "dist_id": 135,
                    "dist_name": "Karur",
                    "state": 23,
                },
                {
                    "dist_id": 136,
                    "dist_name": "Krishnarayapuram",
                    "state": 23,
                },
                {
                    "dist_id": 137,
                    "dist_name": "Kulithalai",
                    "state": 23,
                },
                {
                    "dist_id": 138,
                    "dist_name": "Manapaarai",
                    "state": 23,
                },
                {
                    "dist_id": 139,
                    "dist_name": "Srirangam",
                    "state": 23,
                },
                {
                    "dist_id": 140,
                    "dist_name": "Tiruchirappalli (West)",
                    "state": 23,
                },
                {
                    "dist_id": 141,
                    "dist_name": "Tiruchirappali (East)",
                    "state": 23,
                },
                {
                    "dist_id": 142,
                    "dist_name": "Thiruverumbur",
                    "state": 23,
                },

                {
                    "dist_id": 143,
                    "dist_name": "Lalgudi",
                    "state": 23,
                },
                {
                    "dist_id": 144,
                    "dist_name": "Manachanallur",
                    "state": 23,
                },
                {
                    "dist_id": 145,
                    "dist_name": "Musiri",
                    "state": 23,
                },
                {
                    "dist_id": 146,
                    "dist_name": "Thuraiyur",
                    "state": 23,
                },
                {
                    "dist_id": 147,
                    "dist_name": "Perambalur",
                    "state": 23,
                },
                {
                    "dist_id": 148,
                    "dist_name": "Kunnam",
                    "state": 23,
                },

                {
                    "dist_id": 149,
                    "dist_name": "Ariyalur",
                    "state": 23,
                },
                {
                    "dist_id": 150,
                    "dist_name": "Jayankondam",
                    "state": 23,
                },

                {
                    "dist_id": 151,
                    "dist_name": "Tittakudi",
                    "state": 23,
                },
                {
                    "dist_id": 152,
                    "dist_name": "virudhachalam",
                    "state": 23,
                },
                {
                    "dist_id": 153,
                    "dist_name": "Neyveli",
                    "state": 23,
                },
                {
                    "dist_id": 154,
                    "dist_name": "Panruti",
                    "state": 23,
                },

                {
                    "dist_id": 155,
                    "dist_name": "Cuddalore",
                    "state": 23,
                },
                {
                    "dist_id": 156,
                    "dist_name": "Kurinjipadi",
                    "state": 23,
                },
                {
                    "dist_id": 157,
                    "dist_name": "Bhuvanagiri",
                    "state": 23,
                },
                {
                    "dist_id": 158,
                    "dist_name": "Chidambaram",
                    "state": 23,
                },
                {
                    "dist_id": 159,
                    "dist_name": "Kattumannarkoli",
                    "state": 23,
                },
                {
                    "dist_id": 160,
                    "dist_name": "Sirkazhi",
                    "state": 23,
                },
                {
                    "dist_id": 161,
                    "dist_name": "Mayiladuturai",
                    "state": 23,
                },
                {
                    "dist_id": 162,
                    "dist_name": "Poompuhar",
                    "state": 23,
                },
                {
                    "dist_id": 163,
                    "dist_name": "Nagapattinam",
                    "state": 23,
                },
                {
                    "dist_id": 164,
                    "dist_name": "Kilvelur",
                    "state": 23,
                },
                {
                    "dist_id": 165,
                    "dist_name": "Vedaranyam",
                    "state": 23,
                },
                {
                    "dist_id": 166,
                    "dist_name": "Thiruthuraipoondi",
                    "state": 23,
                },
                {
                    "dist_id": 167,
                    "dist_name": "Mannargudi",
                    "state": 23,
                },
                {
                    "dist_id": 168,
                    "dist_name": "Thiruvarur",
                    "state": 23,
                },
                {
                    "dist_id": 169,
                    "dist_name": "Nannilam",
                    "state": 23,
                },
                {
                    "dist_id": 170,
                    "dist_name": "Thiruvidaimarudur",
                    "state": 23,
                },
                {
                    "dist_id": 171,
                    "dist_name": "Kumbakonam",
                    "state": 23,
                },
                {
                    "dist_id": 172,
                    "dist_name": "Papansam",
                    "state": 23,
                },
                {
                    "dist_id": 173,
                    "dist_name": "Thiruvaiyaru",
                    "state": 23,
                },
                {
                    "dist_id": 174,
                    "dist_name": "Thanjavur",
                    "state": 23,
                },
                {
                    "dist_id": 175,
                    "dist_name": "Orthanadu",
                    "state": 23,
                },
                {
                    "dist_id": 176,
                    "dist_name": "Pattukkottai",
                    "state": 23,
                },
                {
                    "dist_id": 177,
                    "dist_name": "Peravurani",
                    "state": 23,
                },
                {
                    "dist_id": 178,
                    "dist_name": "Gandarvakottai",
                    "state": 23,
                },
                {
                    "dist_id": 179,
                    "dist_name": "viralimali",
                    "state": 23,
                },
                {
                    "dist_id": 180,
                    "dist_name": "Pudukkotai",
                    "state": 23,
                },
                {
                    "dist_id": 181,
                    "dist_name": "Thirumayam",
                    "state": 23,
                },
                {
                    "dist_id": 182,
                    "dist_name": "Alangudi",
                    "state": 23,
                },
                {
                    "dist_id": 183,
                    "dist_name": "Aranthangi",
                    "state": 23,
                },
                {
                    "dist_id": 184,
                    "dist_name": "Karaikudi",
                    "state": 23,
                },
                {
                    "dist_id": 185,
                    "dist_name": "Tiruppattur",
                    "state": 23,
                },
                {
                    "dist_id": 186,
                    "dist_name": "Sivaganaga",
                    "state": 23,
                },
                {
                    "dist_id": 187,
                    "dist_name": "Manamadurai",
                    "state": 23,
                },
                {
                    "dist_id": 188,
                    "dist_name": "Melur",
                    "state": 23,
                },

                {
                    "dist_id": 189,
                    "dist_name": "Madurai East",
                    "state": 23,
                },
                {
                    "dist_id": 190,
                    "dist_name": "Sholavandan",
                    "state": 23,
                },
                {
                    "dist_id": 191,
                    "dist_name": "Madurai North",
                    "state": 23,
                },
                {
                    "dist_id": 192,
                    "dist_name": "Madurai South",
                    "state": 23,
                },
                {
                    "dist_id": 193,
                    "dist_name": "Madurai Central",
                    "state": 23,
                },
                {
                    "dist_id": 194,
                    "dist_name": "Madurai West",
                    "state": 23,
                },
                {
                    "dist_id": 195,
                    "dist_name": "Thiruparankundram",
                    "state": 23,
                },
                {
                    "dist_id": 196,
                    "dist_name": "Thirumangalam",
                    "state": 23,
                },
                {
                    "dist_id": 197,
                    "dist_name": "Usilampatti",
                    "state": 23,
                },
                {
                    "dist_id": 198,
                    "dist_name": "Andipatti",
                    "state": 23,
                },
                {
                    "dist_id": 199,
                    "dist_name": "Periyakulam",
                    "state": 23,
                },
                {
                    "dist_id": 200,
                    "dist_name": "Bodinayakanur",
                    "state": 23,
                },
                {
                    "dist_id": 201,
                    "dist_name": "Cumbum",
                    "state": 23,
                },
                {
                    "dist_id": 202,
                    "dist_name": "Rajapalayam",
                    "state": 23,
                },
                {
                    "dist_id": 203,
                    "dist_name": "Srivilliputhur",
                    "state": 23,
                },
                {
                    "dist_id": 204,
                    "dist_name": "Sattur",
                    "state": 23,
                },
                {
                    "dist_id": 205,
                    "dist_name": "Sivakasi",
                    "state": 23,
                },
                {
                    "dist_id": 206,
                    "dist_name": "Virudhanagar",
                    "state": 23,
                },
                {
                    "dist_id": 207,
                    "dist_name": "Aruppukkottai",
                    "state": 23,
                },
                {
                    "dist_id": 208,
                    "dist_name": "Tirchuli",
                    "state": 23,
                },
                {
                    "dist_id": 209,
                    "dist_name": "Paramakudi",
                    "state": 23,
                },
                {
                    "dist_id": 210,
                    "dist_name": "Tiruvadanai",
                    "state": 23,
                },
                {
                    "dist_id": 211,
                    "dist_name": "Ramanathapuram",
                    "state": 23,
                },
                {
                    "dist_id": 212,
                    "dist_name": "Mudhukulathur",
                    "state": 23,
                },
                {
                    "dist_id": 213,
                    "dist_name": "Vilathikulam",
                    "state": 23,
                },
                {
                    "dist_id": 214,
                    "dist_name": "Thoothukkudi",
                    "state": 23,
                },
                {
                    "dist_id": 215,
                    "dist_name": "Tiruchendur",
                    "state": 23,
                },
                {
                    "dist_id": 216,
                    "dist_name": "Srivaikuntam",
                    "state": 23,
                },
                {
                    "dist_id": 217,
                    "dist_name": "Ottapidaram",
                    "state": 23,
                },
                {
                    "dist_id": 218,
                    "dist_name": "Kovilpatti",
                    "state": 23,
                },
                {
                    "dist_id": 219,
                    "dist_name": "Sankarankovil",
                    "state": 23,
                },
                {
                    "dist_id": 220,
                    "dist_name": "Vasudevanallur",
                    "state": 23,
                },
                {
                    "dist_id": 221,
                    "dist_name": "Kadayanallur",
                    "state": 23,
                },
                {
                    "dist_id": 222,
                    "dist_name": "Tenkasi",
                    "state": 23,
                },
                {
                    "dist_id": 223,
                    "dist_name": "Alangulam",
                    "state": 23,
                },
                {
                    "dist_id": 224,
                    "dist_name": "tirunelveli",
                    "state": 23,
                },

                {
                    "dist_id": 225,
                    "dist_name": "Ambasamudram",
                    "state": 23,
                },
                {
                    "dist_id": 226,
                    "dist_name": "Palayamkottai",
                    "state": 23,
                },
                {
                    "dist_id": 227,
                    "dist_name": "Nanguneri",
                    "state": 23,
                },
                {
                    "dist_id": 228,
                    "dist_name": "Radhapuram",
                    "state": 23,
                },
                {
                    "dist_id": 229,
                    "dist_name": "Kanniyakumari",
                    "state": 23,
                },
                {
                    "dist_id": 230,
                    "dist_name": "Nagercoil",
                    "state": 23,
                },
                {
                    "dist_id": 231,
                    "dist_name": "Colachal",
                    "state": 23,
                },
                {
                    "dist_id": 232,
                    "dist_name": "Padmanabhapuram",
                    "state": 23,
                },
                {
                    "dist_id": 233,
                    "dist_name": "Vilavancode",
                    "state": 23,
                },
                {
                    "dist_id": 234,
                    "dist_name": "Killiyoor",
                    "state": 23,
                },



            ]
        },
        {
            "Id": "24",
            name: "Telangana",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Sirpur",
                    "state": 24,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Asifabad",
                    "state": 24,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Chennur",
                    "state": 24,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Bellampalli",
                    "state": 24,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Mancherial",
                    "state": 24,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Adilabad",
                    "state": 24,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Asifabad",
                    "state": 24,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Boath",
                    "state": 24,
                },
                {
                    "dist_id": 9,
                    "dist_name": "Nirmal",
                    "state": 24,
                },
                {
                    "dist_id": 10,
                    "dist_name": "Mundhole",
                    "state": 24,
                },
                {
                    "dist_id": 11,
                    "dist_name": "Khanapur",
                    "state": 24,
                },
                {
                    "dist_id": 12,
                    "dist_name": "Banswada",
                    "state": 24,
                },
                {
                    "dist_id": 13,
                    "dist_name": "Armur",
                    "state": 24,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Bodhan",
                    "state": 24,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Nizambad (Urban)",
                    "state": 24,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Nizambad (Rural)",
                    "state": 24,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Balkonda",
                    "state": 24,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Jukkal",
                    "state": 24,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Yellareddy",
                    "state": 24,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Kamareddy",
                    "state": 24,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Koratla",
                    "state": 24,
                },
                {
                    "dist_id": 22,
                    "dist_name": "Jagtial",
                    "state": 24,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Dharmapuri",
                    "state": 24,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Ramagundam",
                    "state": 24,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Manthani",
                    "state": 24,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Peddapalle",
                    "state": 24,
                },
                {
                    "dist_id": 27,
                    "dist_name": "Karimnagar",
                    "state": 24,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Choppadandi",
                    "state": 24,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Manakondur",
                    "state": 24,
                },
                {
                    "dist_id": 30,
                    "dist_name": "Huzurabad",
                    "state": 24,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Vemulawada",
                    "state": 24,
                },
                {
                    "dist_id": 32,
                    "dist_name": "Sircilla",
                    "state": 24,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Zaheerabad",
                    "state": 24,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Sangareddy",
                    "state": 24,
                },
                {
                    "dist_id": 35,
                    "dist_name": "Patancheru",
                    "state": 24,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Narayankhed",
                    "state": 24,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Andole",
                    "state": 24,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Narsapur",
                    "state": 24,
                },
                {
                    "dist_id": 39,
                    "dist_name": "Medak",
                    "state": 24,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Dubbak",
                    "state": 24,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Gajwel",
                    "state": 24,
                },
                {
                    "dist_id": 42,
                    "dist_name": "Husnabad",
                    "state": 24,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Siddipet",
                    "state": 24,
                },
                {
                    "dist_id": 44,
                    "dist_name": "Kalwakurthy",
                    "state": 24,
                },
                {
                    "dist_id": 45,
                    "dist_name": "Shadnagar",
                    "state": 24,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Ibrahimpatnam",
                    "state": 24,
                },

                {
                    "dist_id": 47,
                    "dist_name": "Lal Bahadur Nagar",
                    "state": 24,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Maheswaram",
                    "state": 24,
                },
                {
                    "dist_id": 49,
                    "dist_name": "Rajendranagar",
                    "state": 24,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Serilingampally",
                    "state": 24,
                },

                {
                    "dist_id": 51,
                    "dist_name": "Chevella",
                    "state": 24,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Pargi",
                    "state": 24,
                },
                {
                    "dist_id": 53,
                    "dist_name": "Vicarabad(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 54,
                    "dist_name": "Tandur",
                    "state": 24,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Kodangal",
                    "state": 24,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Medchal",
                    "state": 24,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Malkajgiri",
                    "state": 24,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Quthbullapur",
                    "state": 24,
                },
                {
                    "dist_id": 59,
                    "dist_name": "Kukutpally",
                    "state": 24,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Uppal",
                    "state": 24,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Musheerabad",
                    "state": 24,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Malakpet",
                    "state": 24,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Amberpet",
                    "state": 24,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Khairatabad",
                    "state": 24,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Jubille Hills",
                    "state": 24,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Sanathnagar",
                    "state": 24,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Nampally",
                    "state": 24,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Karwan",
                    "state": 24,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Goshamahal",
                    "state": 24,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Charminar",
                    "state": 24,
                },

                {
                    "dist_id": 71,
                    "dist_name": "Chandrayangutta",
                    "state": 24,
                }, {
                    "dist_id": 72,
                    "dist_name": "Yakutpura",
                    "state": 24,
                },
                {
                    "dist_id": 73,
                    "dist_name": "Bahadurpura",
                    "state": 24,
                },
                {
                    "dist_id": 74,
                    "dist_name": "Secunderabad",
                    "state": 24,
                },
                {
                    "dist_id": 75,
                    "dist_name": "Secunderabad Cantt(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Mahbubnagar",
                    "state": 24,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Jadcherla",
                    "state": 24,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Devarkadra",
                    "state": 24,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Kollapur",
                    "state": 24,
                },
                {
                    "dist_id": 80,
                    "dist_name": "NagarKurnool",
                    "state": 24,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Achampet(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Wanaparthy",
                    "state": 24,
                },
                {
                    "dist_id": 83,
                    "dist_name": "Gadwal",
                    "state": 24,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Alampur(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 85,
                    "dist_name": "Nakrekal(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Nalgonda",
                    "state": 24,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Munugode",
                    "state": 24,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Devarakonda(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Nagarjuna Sagar",
                    "state": 24,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Miryalaguda",
                    "state": 24,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Huzurnagar",
                    "state": 24,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Kodad",
                    "state": 24,
                },
                {
                    "dist_id": 93,
                    "dist_name": "Suryapet",
                    "state": 24,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Thungathurthi(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 95,
                    "dist_name": "Alair",
                    "state": 24,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Bhongir",
                    "state": 24,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Jangaon",
                    "state": 24,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Ghanpur (Station)(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Palakurthi",
                    "state": 24,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Dornakal(ST)",
                    "state": 24,
                },

                {
                    "dist_id": 101,
                    "dist_name": "Mahabubabad(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Narsampet",
                    "state": 24,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Parkal",
                    "state": 24,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Warangal West",
                    "state": 24,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Warangal East",
                    "state": 24,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Waradhanapet(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 107,
                    "dist_name": "Bhupalpalle",
                    "state": 24,
                },
                {
                    "dist_id": 108,
                    "dist_name": "Pinapaka(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Yellandu(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Kothagudem",
                    "state": 24,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Aswaraopeta(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Khammam",
                    "state": 24,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Palair",
                    "state": 24,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Madhira(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Wyra(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Sathupalle(SC)",
                    "state": 24,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Mulugu(ST)",
                    "state": 24,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Makthal",
                    "state": 24,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Narayanpet",
                    "state": 24,
                },

            ]

        },
        {
            "Id": "25",
            name: "Tripura",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Simna (ST)",
                    "state": 25
                },
                {
                    "dist_id": 2,
                    "dist_name": "Mohanpur",
                    "state": 25
                },
                {
                    "dist_id": 3,
                    "dist_name": "Bamutia (SC)",
                    "state": 25
                },
                {
                    "dist_id": 4,
                    "dist_name": "Barjala (SC)",
                    "state": 25
                },
                {
                    "dist_id": 5,
                    "dist_name": "Khayerpur",
                    "state": 25
                },
                {
                    "dist_id": 6,
                    "dist_name": "Agartala",
                    "state": 25
                },
                {
                    "dist_id": 7,
                    "dist_name": "Ramnagar",
                    "state": 25
                },
                {
                    "dist_id": 8,
                    "dist_name": "Town Bordowali",
                    "state": 25
                },
                {
                    "dist_id": 9,
                    "dist_name": "Banamalipur",
                    "state": 25
                },
                {
                    "dist_id": 10,
                    "dist_name": "Manjlishpur",
                    "state": 25
                },
                {
                    "dist_id": 11,
                    "dist_name": "Mandaibazar (ST)",
                    "state": 25
                },
                {
                    "dist_id": 12,
                    "dist_name": "Takarjala (ST)",
                    "state": 25
                },
                {
                    "dist_id": 13,
                    "dist_name": "Pratapgarh (SC)",
                    "state": 25
                },
                {
                    "dist_id": 14,
                    "dist_name": "Badharghat (SC)",
                    "state": 25
                },
                {
                    "dist_id": 15,
                    "dist_name": "Kamalasagar",
                    "state": 25
                },
                {
                    "dist_id": 16,
                    "dist_name": "Bishalgarh",
                    "state": 25
                },
                {
                    "dist_id": 17,
                    "dist_name": "Golaghati (ST)",
                    "state": 25
                },
                {
                    "dist_id": 18,
                    "dist_name": "Suryamaninagar",
                    "state": 25
                },
                {
                    "dist_id": 19,
                    "dist_name": "Charilam (ST)",
                    "state": 25
                },
                {
                    "dist_id": 20,
                    "dist_name": "Boxanagar",
                    "state": 25
                },
                {
                    "dist_id": 21,
                    "dist_name": "Nalchar (SC)",
                    "state": 25
                },
                {
                    "dist_id": 22,
                    "dist_name": "Sonamura",
                    "state": 25
                },
                {
                    "dist_id": 23,
                    "dist_name": "	Dhanpur",
                    "state": 25
                },
                {
                    "dist_id": 24,
                    "dist_name": "Ramchandraghat (ST)",
                    "state": 25
                },
                {
                    "dist_id": 25,
                    "dist_name": "Khowai",
                    "state": 25
                },
                {
                    "dist_id": 26,
                    "dist_name": "	Asharambari (ST)",
                    "state": 25
                },
                {
                    "dist_id": 27,
                    "dist_name": "Kalyanpur-Pramodenagar",
                    "state": 25
                },
                {
                    "dist_id": 28,
                    "dist_name": "Teliamura",
                    "state": 25
                },
                {
                    "dist_id": 29,
                    "dist_name": "	Krishnapur (ST)",
                    "state": 25
                },
                {
                    "dist_id": 30,
                    "dist_name": "Bagma (ST)",
                    "state": 25
                },
                {
                    "dist_id": 31,
                    "dist_name": "Radhakishorpur",
                    "state": 25
                },
                {
                    "dist_id": 32,
                    "dist_name": "	Matarbari",
                    "state": 25
                },
                {
                    "dist_id": 33,
                    "dist_name": "	Kakraban-Salgarh (SC)",
                    "state": 25
                },
                {
                    "dist_id": 34,
                    "dist_name": "Rajnagar (SC)",
                    "state": 25
                },
                {
                    "dist_id": 35,
                    "dist_name": "	Belonia",
                    "state": 25
                },
                {
                    "dist_id": 36,
                    "dist_name": "	Santirbazar (ST)",
                    "state": 25
                },
                {
                    "dist_id": 37,
                    "dist_name": "Hrishyamukh",
                    "state": 25
                },
                {
                    "dist_id": 38,
                    "dist_name": "Jolaibari (ST)",
                    "state": 25
                },
                {
                    "dist_id": 39,
                    "dist_name": "Manu (ST)",
                    "state": 25
                },
                {
                    "dist_id": 40,
                    "dist_name": "	Sabroom",
                    "state": 25
                },
                {
                    "dist_id": 41,
                    "dist_name": "	Ampinagar (ST)",
                    "state": 25
                },
                {
                    "dist_id": 42,
                    "dist_name": "Amarpur",
                    "state": 25
                },
                {
                    "dist_id": 43,
                    "dist_name": "	Karbook (ST)",
                    "state": 25
                },
                {
                    "dist_id": 44,
                    "dist_name": "Raima Valley (ST)",
                    "state": 25
                },
                {
                    "dist_id": 45,
                    "dist_name": "Kamalpur",
                    "state": 25
                },
                {
                    "dist_id": 46,
                    "dist_name": "Surma (SC)",
                    "state": 25
                },

                {
                    "dist_id": 47,
                    "dist_name": "Ambassa (ST)",
                    "state": 25
                },
                {
                    "dist_id": 48,
                    "dist_name": "Karamcherra (ST)",
                    "state": 25
                },
                {
                    "dist_id": 49,
                    "dist_name": "	Chawamanu (ST)",
                    "state": 25
                },
                {
                    "dist_id": 50,
                    "dist_name": "	Pabiachhara (SC)",
                    "state": 25
                },

                {
                    "dist_id": 51,
                    "dist_name": "	Fatikroy (SC)",
                    "state": 25
                },
                {
                    "dist_id": 52,
                    "dist_name": "	Chandipur",
                    "state": 25
                },
                {
                    "dist_id": 53,
                    "dist_name": "	Kailashahar",
                    "state": 25
                },
                {
                    "dist_id": 54,
                    "dist_name": "Kadamtala-Kurti",
                    "state": 25
                },
                {
                    "dist_id": 55,
                    "dist_name": "Bagbassa",
                    "state": 25
                },
                {
                    "dist_id": 56,
                    "dist_name": "Dharmanagar",
                    "state": 25
                },
                {
                    "dist_id": 57,
                    "dist_name": "Jubarajnagar",
                    "state": 25
                },
                {
                    "dist_id": 58,
                    "dist_name": "	Panisagar",
                    "state": 25
                },
                {
                    "dist_id": 59,
                    "dist_name": "Pencharthal (ST)",
                    "state": 25
                },
                {
                    "dist_id": 60,
                    "dist_name": "	Kanchanpur (ST)",
                    "state": 25
                }
            ]
        },
        {
            "Id": "26",
            name: "Uttarakhand",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Purola",
                    "state": 26
                },
                {
                    "dist_id": 2,
                    "dist_name": "Yamunotri",
                    "state": 26
                },
                {
                    "dist_id": 3,
                    "dist_name": "Gangotri",
                    "state": 26
                },
                {
                    "dist_id": 4,
                    "dist_name": "Badrinath",
                    "state": 26
                },
                {
                    "dist_id": 5,
                    "dist_name": "Tharali",
                    "state": 26
                },
                {
                    "dist_id": 6,
                    "dist_name": "Karanprayag",
                    "state": 26
                },
                {
                    "dist_id": 7,
                    "dist_name": "Kedarnath",
                    "state": 26
                },
                {
                    "dist_id": 8,
                    "dist_name": "Rudraprayag",
                    "state": 26
                },
                {
                    "dist_id": 9,
                    "dist_name": "Ghansali",
                    "state": 26
                },
                {
                    "dist_id": 10,
                    "dist_name": "Deoprayag",
                    "state": 26
                },
                {
                    "dist_id": 11,
                    "dist_name": "Narendranagar",
                    "state": 26
                },
                {
                    "dist_id": 12,
                    "dist_name": "Pratap Nagar",
                    "state": 26
                },
                {
                    "dist_id": 13,
                    "dist_name": "Tehri",
                    "state": 26
                },
                {
                    "dist_id": 14,
                    "dist_name": "Dhanolti",
                    "state": 26
                },
                {
                    "dist_id": 15,
                    "dist_name": "Chakrata",
                    "state": 26
                },
                {
                    "dist_id": 16,
                    "dist_name": "Vikasnagar",
                    "state": 26
                },
                {
                    "dist_id": 17,
                    "dist_name": "Sahaspur",
                    "state": 26
                },
                {
                    "dist_id": 18,
                    "dist_name": "Dharampur",
                    "state": 26
                },
                {
                    "dist_id": 19,
                    "dist_name": "Raipur",
                    "state": 26
                },
                {
                    "dist_id": 20,
                    "dist_name": "Rajpur Road",
                    "state": 26
                },
                {
                    "dist_id": 21,
                    "dist_name": "Dehradun Cantt.",
                    "state": 26
                },
                {
                    "dist_id": 22,
                    "dist_name": "Mussoorie",
                    "state": 26
                },
                {
                    "dist_id": 23,
                    "dist_name": "Doiwala",
                    "state": 26
                },
                {
                    "dist_id": 24,
                    "dist_name": "Rishikesh",
                    "state": 26
                },
                {
                    "dist_id": 25,
                    "dist_name": "Haridwar",
                    "state": 26
                },
                {
                    "dist_id": 26,
                    "dist_name": "	B.H.E.L Ranipur",
                    "state": 26
                },
                {
                    "dist_id": 27,
                    "dist_name": "Jwalapur",
                    "state": 26
                },
                {
                    "dist_id": 28,
                    "dist_name": "Bhagwanpur",
                    "state": 26
                },
                {
                    "dist_id": 29,
                    "dist_name": "	Krishnapur (ST)",
                    "state": 26
                },
                {
                    "dist_id": 30,
                    "dist_name": "Pirankaliyar",
                    "state": 26
                },
                {
                    "dist_id": 31,
                    "dist_name": "Roorkee",
                    "state": 26
                },
                {
                    "dist_id": 32,
                    "dist_name": "	Khanpur",
                    "state": 26
                },
                {
                    "dist_id": 33,
                    "dist_name": "Manglore",
                    "state": 26
                },
                {
                    "dist_id": 34,
                    "dist_name": "Laksar",
                    "state": 26
                },
                {
                    "dist_id": 35,
                    "dist_name": "Haridwar Rural",
                    "state": 26
                },
                {
                    "dist_id": 36,
                    "dist_name": "Yamkeshwar",
                    "state": 26
                },
                {
                    "dist_id": 37,
                    "dist_name": "Pauri ",
                    "state": 26
                },
                {
                    "dist_id": 38,
                    "dist_name": "Srinagar",
                    "state": 26
                },
                {
                    "dist_id": 39,
                    "dist_name": "Chaubattakhal",
                    "state": 26
                },
                {
                    "dist_id": 40,
                    "dist_name": "	Lansdowne",
                    "state": 26
                },
                {
                    "dist_id": 41,
                    "dist_name": "Kotdwar",
                    "state": 26
                },
                {
                    "dist_id": 42,
                    "dist_name": "Dharchula",
                    "state": 26
                },
                {
                    "dist_id": 43,
                    "dist_name": "Didihat",
                    "state": 26
                },
                {
                    "dist_id": 44,
                    "dist_name": "Pithoragarh",
                    "state": 26
                },
                {
                    "dist_id": 45,
                    "dist_name": "Gangolihat",
                    "state": 26
                },
                {
                    "dist_id": 46,
                    "dist_name": "Kapkote",
                    "state": 26
                },

                {
                    "dist_id": 47,
                    "dist_name": "Bageshwar",
                    "state": 26
                },
                {
                    "dist_id": 48,
                    "dist_name": "Salt",
                    "state": 26
                },
                {
                    "dist_id": 49,
                    "dist_name": "	Chawamanu (ST)",
                    "state": 26
                },
                {
                    "dist_id": 50,
                    "dist_name": "Ranikhet",
                    "state": 26
                },

                {
                    "dist_id": 51,
                    "dist_name": "	Someshwar",
                    "state": 26
                },
                {
                    "dist_id": 52,
                    "dist_name": "	Almora",
                    "state": 26
                },
                {
                    "dist_id": 53,
                    "dist_name": "	Jageshwar",
                    "state": 26
                },
                {
                    "dist_id": 54,
                    "dist_name": "Lohaghat",
                    "state": 26
                },
                {
                    "dist_id": 55,
                    "dist_name": "Champawat",
                    "state": 26
                },
                {
                    "dist_id": 56,
                    "dist_name": "LalKuwa",
                    "state": 26
                },
                {
                    "dist_id": 57,
                    "dist_name": "Bhimtaal",
                    "state": 26
                },
                {
                    "dist_id": 58,
                    "dist_name": "	Nainital",
                    "state": 26
                },
                {
                    "dist_id": 59,
                    "dist_name": "Haldwani",
                    "state": 26
                },
                {
                    "dist_id": 60,
                    "dist_name": "Kalabhungi",
                    "state": 26
                },
                {
                    "dist_id": 61,
                    "dist_name": "Ramnagar",
                    "state": 26
                },
                {
                    "dist_id": 62,
                    "dist_name": "Jaspur",
                    "state": 26
                },
                {
                    "dist_id": 63,
                    "dist_name": "Kashipur",
                    "state": 26
                },
                {
                    "dist_id": 64,
                    "dist_name": "Bajpur",
                    "state": 26
                },
                {
                    "dist_id": 65,
                    "dist_name": "Gadarpur",
                    "state": 26
                },
                {
                    "dist_id": 66,
                    "dist_name": "Rudrapur",
                    "state": 26
                },
                {
                    "dist_id": 67,
                    "dist_name": "Kichha",
                    "state": 26
                },
                {
                    "dist_id": 68,
                    "dist_name": "Sitarganj",
                    "state": 26
                },
                {
                    "dist_id": 69,
                    "dist_name": "Nanak Matta",
                    "state": 26
                },
                {
                    "dist_id": 70,
                    "dist_name": "Khatima",
                    "state": 26
                },

            ]
        },
        {
            "Id": "27",
            name: "Uttar Pradesh",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Behat",
                    "state": 27,
                },
                {
                    "dist_id": 2,
                    "dist_name": "Nakur",
                    "state": 27,
                },
                {
                    "dist_id": 3,
                    "dist_name": "Saharanpur Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 4,
                    "dist_name": "Saharanpur",
                    "state": 27,
                },
                {
                    "dist_id": 5,
                    "dist_name": "Deoband",
                    "state": 27,
                },
                {
                    "dist_id": 6,
                    "dist_name": "Rampur Maniharan (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 7,
                    "dist_name": "Gangoh",
                    "state": 27,
                },
                {
                    "dist_id": 8,
                    "dist_name": "Kairana",
                    "state": 27,
                },
                {
                    "dist_id": 9,
                    "dist_name": "Thana Bhawan",
                    "state": 27,
                },
                {
                    "dist_id": 10,
                    "dist_name": "	Shamli",
                    "state": 27,
                },
                {
                    "dist_id": 11,
                    "dist_name": "	Budhana",
                    "state": 27,
                },
                {
                    "dist_id": 12,
                    "dist_name": "	Charthawal",
                    "state": 27,
                },
                {
                    "dist_id": 13,
                    "dist_name": "Purqazi (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 14,
                    "dist_name": "Muzaffarnagar",
                    "state": 27,
                },
                {
                    "dist_id": 15,
                    "dist_name": "Khatauli",
                    "state": 27,
                },
                {
                    "dist_id": 16,
                    "dist_name": "Meerapur",
                    "state": 27,
                },
                {
                    "dist_id": 17,
                    "dist_name": "Najibabad",
                    "state": 27,
                },
                {
                    "dist_id": 18,
                    "dist_name": "Nagina (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 19,
                    "dist_name": "Barhapur",
                    "state": 27,
                },
                {
                    "dist_id": 20,
                    "dist_name": "Dhampur",
                    "state": 27,
                },
                {
                    "dist_id": 21,
                    "dist_name": "Nehtaur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 22,
                    "dist_name": "	Bijnor",
                    "state": 27,
                },
                {
                    "dist_id": 23,
                    "dist_name": "Chandpur",
                    "state": 27,
                },
                {
                    "dist_id": 24,
                    "dist_name": "Noorpur",
                    "state": 27,
                },
                {
                    "dist_id": 25,
                    "dist_name": "Kanth",
                    "state": 27,
                },
                {
                    "dist_id": 26,
                    "dist_name": "Thakurdwara",
                    "state": 27,
                },
                {
                    "dist_id": 27,
                    "dist_name": "Moradabad Rural",
                    "state": 27,
                },
                {
                    "dist_id": 28,
                    "dist_name": "Moradabad Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 29,
                    "dist_name": "Kundarki",
                    "state": 27,
                },
                {
                    "dist_id": 30,
                    "dist_name": "	Bilari",
                    "state": 27,
                },
                {
                    "dist_id": 31,
                    "dist_name": "Chandausi (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 32,
                    "dist_name": "	Asmoli",
                    "state": 27,
                },
                {
                    "dist_id": 33,
                    "dist_name": "Sambhal",
                    "state": 27,
                },
                {
                    "dist_id": 34,
                    "dist_name": "Suar",
                    "state": 27,
                },
                {
                    "dist_id": 35,
                    "dist_name": "	Chamraua",
                    "state": 27,
                },
                {
                    "dist_id": 36,
                    "dist_name": "Bilaspur",
                    "state": 27,
                },
                {
                    "dist_id": 37,
                    "dist_name": "Rampur",
                    "state": 27,
                },
                {
                    "dist_id": 38,
                    "dist_name": "Milak (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 39,
                    "dist_name": "	Dhanaura (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 40,
                    "dist_name": "Naugawan Sadat",
                    "state": 27,
                },
                {
                    "dist_id": 41,
                    "dist_name": "Amroha",
                    "state": 27,
                },
                {
                    "dist_id": 42,
                    "dist_name": "	Hasanpur",
                    "state": 27,
                },
                {
                    "dist_id": 43,
                    "dist_name": "Siwalkhas",
                    "state": 27,
                },
                {
                    "dist_id": 44,
                    "dist_name": "	Sardhana",
                    "state": 27,
                },
                {
                    "dist_id": 45,
                    "dist_name": "Hastinapur",
                    "state": 27,
                },
                {
                    "dist_id": 46,
                    "dist_name": "Kithore",
                    "state": 27,
                },
                {
                    "dist_id": 47,
                    "dist_name": "Meerut Cantt.",
                    "state": 27,
                },
                {
                    "dist_id": 48,
                    "dist_name": "Meerut City",
                    "state": 27,
                },
                {
                    "dist_id": 49,
                    "dist_name": "	Meerut South",
                    "state": 27,
                },
                {
                    "dist_id": 50,
                    "dist_name": "Chhaprauli",
                    "state": 27,
                },
                {
                    "dist_id": 51,
                    "dist_name": "Baraut",
                    "state": 27,
                },
                {
                    "dist_id": 52,
                    "dist_name": "Baghpat",
                    "state": 27,
                },
                {
                    "dist_id": 53,
                    "dist_name": "	Loni",
                    "state": 27,
                },
                {
                    "dist_id": 54,
                    "dist_name": "	Muradnagar",
                    "state": 27,
                },
                {
                    "dist_id": 55,
                    "dist_name": "Sahibabad",
                    "state": 27,
                },
                {
                    "dist_id": 56,
                    "dist_name": "Ghaziabad",
                    "state": 27,
                },
                {
                    "dist_id": 57,
                    "dist_name": "Modi Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 58,
                    "dist_name": "Dholana",
                    "state": 27,
                },
                {
                    "dist_id": 59,
                    "dist_name": "	Hapur",
                    "state": 27,
                },
                {
                    "dist_id": 60,
                    "dist_name": "Garhmukteshwar",
                    "state": 27,
                },
                {
                    "dist_id": 61,
                    "dist_name": "Noida",
                    "state": 27,
                },
                {
                    "dist_id": 62,
                    "dist_name": "Dadri",
                    "state": 27,
                },
                {
                    "dist_id": 63,
                    "dist_name": "Jewar",
                    "state": 27,
                },
                {
                    "dist_id": 64,
                    "dist_name": "Sikandrabad",
                    "state": 27,
                },
                {
                    "dist_id": 65,
                    "dist_name": "Bulandshahr",
                    "state": 27,
                },
                {
                    "dist_id": 66,
                    "dist_name": "Syana",
                    "state": 27,
                },
                {
                    "dist_id": 67,
                    "dist_name": "Anupshahr",
                    "state": 27,
                },
                {
                    "dist_id": 68,
                    "dist_name": "Debai",
                    "state": 27,
                },
                {
                    "dist_id": 69,
                    "dist_name": "Shikarpur",
                    "state": 27,
                },
                {
                    "dist_id": 70,
                    "dist_name": "Khurja (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 71,
                    "dist_name": "Khair (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 72,
                    "dist_name": "	Barauli",
                    "state": 27,
                },
                {
                    "dist_id": 73,
                    "dist_name": "	Atrauli",
                    "state": 27,
                },
                {
                    "dist_id": 74,
                    "dist_name": "	Chharra",
                    "state": 27,
                },

                {
                    "dist_id": 75,
                    "dist_name": "Koli",
                    "state": 27,
                },
                {
                    "dist_id": 76,
                    "dist_name": "Aligarh",
                    "state": 27,
                },
                {
                    "dist_id": 77,
                    "dist_name": "Iglas (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 78,
                    "dist_name": "Hathras (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 79,
                    "dist_name": "Sadabad",
                    "state": 27,
                },
                {
                    "dist_id": 80,
                    "dist_name": "Sikandra Rao",
                    "state": 27,
                },
                {
                    "dist_id": 81,
                    "dist_name": "Chhata",
                    "state": 27,
                },
                {
                    "dist_id": 82,
                    "dist_name": "Mant",
                    "state": 27,
                },
                {
                    "dist_id": 83,
                    "dist_name": "Goverdhan",
                    "state": 27,
                },
                {
                    "dist_id": 84,
                    "dist_name": "Mathura",
                    "state": 27,
                },

                {
                    "dist_id": 85,
                    "dist_name": "Baldev (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 86,
                    "dist_name": "Etmadpur",
                    "state": 27,
                },
                {
                    "dist_id": 87,
                    "dist_name": "Agra Cantt. (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 88,
                    "dist_name": "Agra South",
                    "state": 27,
                },
                {
                    "dist_id": 89,
                    "dist_name": "Agra North",
                    "state": 27,
                },
                {
                    "dist_id": 90,
                    "dist_name": "Agra Rural (SC) ",
                    "state": 27,
                },
                {
                    "dist_id": 91,
                    "dist_name": "Fatehpur Sikri",
                    "state": 27,
                },
                {
                    "dist_id": 92,
                    "dist_name": "Kheragarh",
                    "state": 27,
                },
                {
                    "dist_id": 93,
                    "dist_name": "Fatehabad",
                    "state": 27,
                },
                {
                    "dist_id": 94,
                    "dist_name": "Bah",
                    "state": 27,
                },

                {
                    "dist_id": 95,
                    "dist_name": "Tundla (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 96,
                    "dist_name": "Jasrana",
                    "state": 27,
                },
                {
                    "dist_id": 97,
                    "dist_name": "Firozabad",
                    "state": 27,
                },
                {
                    "dist_id": 98,
                    "dist_name": "Shikohabad",
                    "state": 27,
                },
                {
                    "dist_id": 99,
                    "dist_name": "Sirsaganji",
                    "state": 27,
                },
                {
                    "dist_id": 100,
                    "dist_name": "Kasganj",
                    "state": 27,
                },
                {
                    "dist_id": 101,
                    "dist_name": "Amanpur",
                    "state": 27,
                },
                {
                    "dist_id": 102,
                    "dist_name": "Patiyali",
                    "state": 27,
                },
                {
                    "dist_id": 103,
                    "dist_name": "Aliganj",
                    "state": 27,
                },
                {
                    "dist_id": 104,
                    "dist_name": "Ethah",
                    "state": 27,
                },
                {
                    "dist_id": 105,
                    "dist_name": "Marhara",
                    "state": 27,
                },
                {
                    "dist_id": 106,
                    "dist_name": "Jalesar (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 107,
                    "dist_name": "Manipur",
                    "state": 27,
                },
                {
                    "dist_id": 108,
                    "dist_name": "Bhongaon",
                    "state": 27,
                },
                {
                    "dist_id": 109,
                    "dist_name": "Kishni (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 110,
                    "dist_name": "Karhal",
                    "state": 27,
                },
                {
                    "dist_id": 111,
                    "dist_name": "Gunnaur",
                    "state": 27,
                },
                {
                    "dist_id": 112,
                    "dist_name": "Bisauli (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 113,
                    "dist_name": "Sahaswan",
                    "state": 27,
                },
                {
                    "dist_id": 114,
                    "dist_name": "Bilsi",
                    "state": 27,
                },
                {
                    "dist_id": 115,
                    "dist_name": "Badaun",
                    "state": 27,
                },
                {
                    "dist_id": 116,
                    "dist_name": "Shekhpur",
                    "state": 27,
                },
                {
                    "dist_id": 117,
                    "dist_name": "Dataganji",
                    "state": 27,
                },
                {
                    "dist_id": 118,
                    "dist_name": "Baheri",
                    "state": 27,
                },
                {
                    "dist_id": 119,
                    "dist_name": "Meerganj",
                    "state": 27,
                },
                {
                    "dist_id": 120,
                    "dist_name": "Bhojipura",
                    "state": 27,
                },
                {
                    "dist_id": 121,
                    "dist_name": "Nawabganj",
                    "state": 27,
                },
                {
                    "dist_id": 122,
                    "dist_name": "Faridpur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 123,
                    "dist_name": "Bithari Chainpur",
                    "state": 27,
                },
                {
                    "dist_id": 124,
                    "dist_name": "Bareilly",
                    "state": 27,
                },
                {
                    "dist_id": 125,
                    "dist_name": "Bareilly Cantt",
                    "state": 27,
                },
                {
                    "dist_id": 126,
                    "dist_name": "Anola",
                    "state": 27,
                },
                {
                    "dist_id": 127,
                    "dist_name": "Pilibhit",
                    "state": 27,
                },
                {
                    "dist_id": 128,
                    "dist_name": "Barkhera",
                    "state": 27,
                },
                {
                    "dist_id": 129,
                    "dist_name": "Puranpur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 130,
                    "dist_name": "Bisalpur",
                    "state": 27,
                },
                {
                    "dist_id": 131,
                    "dist_name": "Katra",
                    "state": 27,
                },
                {
                    "dist_id": 132,
                    "dist_name": "Jalalabad",
                    "state": 27,
                },
                {
                    "dist_id": 133,
                    "dist_name": "Tilhar",
                    "state": 27,
                },
                {
                    "dist_id": 134,
                    "dist_name": "Powayan (SC)",
                    "state": 27,
                },

                {
                    "dist_id": 135,
                    "dist_name": "Shahjahanpur",
                    "state": 27,
                },
                {
                    "dist_id": 136,
                    "dist_name": "Dadraul",
                    "state": 27,
                },
                {
                    "dist_id": 137,
                    "dist_name": "Palia",
                    "state": 27,
                },
                {
                    "dist_id": 138,
                    "dist_name": "Nighasan",
                    "state": 27,
                },
                {
                    "dist_id": 139,
                    "dist_name": "Gola Gokarnnath",
                    "state": 27,
                },
                {
                    "dist_id": 140,
                    "dist_name": "Sri Nagar (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 141,
                    "dist_name": "Dhaurahra",
                    "state": 27,
                },
                {
                    "dist_id": 142,
                    "dist_name": "Lakhimpur",
                    "state": 27,
                },
                {
                    "dist_id": 143,
                    "dist_name": "Kasta (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 144,
                    "dist_name": "Mohammadi",
                    "state": 27,
                },
                {
                    "dist_id": 145,
                    "dist_name": "Maholi",
                    "state": 27,
                },
                {
                    "dist_id": 146,
                    "dist_name": "Sitapur",
                    "state": 27,
                },
                {
                    "dist_id": 147,
                    "dist_name": "Hargaon (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 148,
                    "dist_name": "Laharpur",
                    "state": 27,
                },
                {
                    "dist_id": 149,
                    "dist_name": "Biswan ",
                    "state": 27,
                },
                {
                    "dist_id": 150,
                    "dist_name": "Sevata",
                    "state": 27,
                },
                {
                    "dist_id": 151,
                    "dist_name": "Mahmoodabad",
                    "state": 27,
                },
                {
                    "dist_id": 152,
                    "dist_name": "Sidhauli (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 153,
                    "dist_name": "Misrikh (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 154,
                    "dist_name": "Sawayazpur",
                    "state": 27,
                },

                {
                    "dist_id": 155,
                    "dist_name": "Shahabad",
                    "state": 27,
                },
                {
                    "dist_id": 156,
                    "dist_name": "Hardoi",
                    "state": 27,
                },
                {
                    "dist_id": 157,
                    "dist_name": "Gopamau (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 158,
                    "dist_name": "Sandi (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 159,
                    "dist_name": "Bilgram-Mallanwan",
                    "state": 27,
                },
                {
                    "dist_id": 160,
                    "dist_name": "Balamau (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 161,
                    "dist_name": "Sandila",
                    "state": 27,
                },
                {
                    "dist_id": 162,
                    "dist_name": "Bangarmau",
                    "state": 27,
                },
                {
                    "dist_id": 163,
                    "dist_name": "Safipur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 164,
                    "dist_name": "Mohan (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 165,
                    "dist_name": "Unnao",
                    "state": 27,
                },
                {
                    "dist_id": 166,
                    "dist_name": "Bhagwantnagar",
                    "state": 27,
                },
                {
                    "dist_id": 167,
                    "dist_name": "Purwa",
                    "state": 27,
                },
                {
                    "dist_id": 168,
                    "dist_name": "Malihabad (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 169,
                    "dist_name": "Bakshi Kaa Talab",
                    "state": 27,
                },
                {
                    "dist_id": 170,
                    "dist_name": "Sarojini Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 171,
                    "dist_name": "Lucknow West",
                    "state": 27,
                },
                {
                    "dist_id": 172,
                    "dist_name": "Lucknow North",
                    "state": 27,
                },
                {
                    "dist_id": 173,
                    "dist_name": "Lucknow East",
                    "state": 27,
                },
                {
                    "dist_id": 174,
                    "dist_name": "Lucknow Central",
                    "state": 27,
                },

                {
                    "dist_id": 175,
                    "dist_name": "Lucknow Cantt",
                    "state": 27,
                },
                {
                    "dist_id": 176,
                    "dist_name": "Mohanlalganj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 177,
                    "dist_name": "Bachhrawan (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 178,
                    "dist_name": "Tiloi",
                    "state": 27,
                },
                {
                    "dist_id": 179,
                    "dist_name": "Harchandpur",
                    "state": 27,
                },
                {
                    "dist_id": 180,
                    "dist_name": "Rae Bareli",
                    "state": 27,
                },
                {
                    "dist_id": 181,
                    "dist_name": "Salon (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 182,
                    "dist_name": "Sareni",
                    "state": 27,
                },
                {
                    "dist_id": 183,
                    "dist_name": "Unchahar",
                    "state": 27,
                },
                {
                    "dist_id": 184,
                    "dist_name": "Jagdishpur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 185,
                    "dist_name": "Gauriganj",
                    "state": 27,
                },
                {
                    "dist_id": 186,
                    "dist_name": "Amethi",
                    "state": 27,
                },
                {
                    "dist_id": 187,
                    "dist_name": "Isauli",
                    "state": 27,
                },
                {
                    "dist_id": 188,
                    "dist_name": "Sultanpur",
                    "state": 27,
                },
                {
                    "dist_id": 189,
                    "dist_name": "Sultanpur Sadar",
                    "state": 27,
                },
                {
                    "dist_id": 190,
                    "dist_name": "Lambhua",
                    "state": 27,
                },
                {
                    "dist_id": 191,
                    "dist_name": "Kadipur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 192,
                    "dist_name": "Kaimganj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 193,
                    "dist_name": "Amritpur",
                    "state": 27,
                },
                {
                    "dist_id": 194,
                    "dist_name": "Farrukhabad",
                    "state": 27,
                },

                {
                    "dist_id": 195,
                    "dist_name": "Bhojpur",
                    "state": 27,
                },
                {
                    "dist_id": 196,
                    "dist_name": "Chhibramau",
                    "state": 27,
                },
                {
                    "dist_id": 197,
                    "dist_name": "Tirwa",
                    "state": 27,
                },
                {
                    "dist_id": 198,
                    "dist_name": "	Kannauj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 199,
                    "dist_name": "Jaswantnagar",
                    "state": 27,
                },
                {
                    "dist_id": 200,
                    "dist_name": "Etawah",
                    "state": 27,
                },
                {
                    "dist_id": 201,
                    "dist_name": "Bharthana (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 202,
                    "dist_name": "Bidhuna",
                    "state": 27,
                },
                {
                    "dist_id": 203,
                    "dist_name": "Dibiyapur",
                    "state": 27,
                },
                {
                    "dist_id": 204,
                    "dist_name": "Auraiya (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 205,
                    "dist_name": "Rasulabad (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 206,
                    "dist_name": "Akbarpur-Raniya",
                    "state": 27,
                },
                {
                    "dist_id": 207,
                    "dist_name": "Sikandra",
                    "state": 27,
                },
                {
                    "dist_id": 208,
                    "dist_name": "Bhognipur",
                    "state": 27,
                },
                {
                    "dist_id": 209,
                    "dist_name": "	Bilhaur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 210,
                    "dist_name": "Bithoor",
                    "state": 27,
                },
                {
                    "dist_id": 211,
                    "dist_name": "Kalyanpur",
                    "state": 27,
                },
                {
                    "dist_id": 212,
                    "dist_name": "Govindnagar",
                    "state": 27,
                },
                {
                    "dist_id": 213,
                    "dist_name": "Sishamau",
                    "state": 27,
                },
                {
                    "dist_id": 214,
                    "dist_name": "Arya Nagar",
                    "state": 27,
                },

                {
                    "dist_id": 215,
                    "dist_name": "Kidwai Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 216,
                    "dist_name": "Kanpur Cantt",
                    "state": 27,
                },
                {
                    "dist_id": 217,
                    "dist_name": "Maharajpur",
                    "state": 27,
                },
                {
                    "dist_id": 218,
                    "dist_name": "Ghatampur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 219,
                    "dist_name": "Madhaugarh",
                    "state": 27,
                },
                {
                    "dist_id": 220,
                    "dist_name": "Kalpi",
                    "state": 27,
                },
                {
                    "dist_id": 221,
                    "dist_name": "Orai (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 222,
                    "dist_name": "Babina",
                    "state": 27,
                },
                {
                    "dist_id": 223,
                    "dist_name": "Jhansi Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 224,
                    "dist_name": "Mauranipur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 225,
                    "dist_name": "Garautha",
                    "state": 27,
                },
                {
                    "dist_id": 226,
                    "dist_name": "Lalitpur",
                    "state": 27,
                },
                {
                    "dist_id": 227,
                    "dist_name": "Mehroni (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 228,
                    "dist_name": "Hamirpur",
                    "state": 27,
                },
                {
                    "dist_id": 229,
                    "dist_name": "Rath (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 230,
                    "dist_name": "Mahoba",
                    "state": 27,
                },
                {
                    "dist_id": 231,
                    "dist_name": "Charkhari",
                    "state": 27,
                },
                {
                    "dist_id": 232,
                    "dist_name": "Baberu",
                    "state": 27,
                },
                {
                    "dist_id": 233,
                    "dist_name": "Naraini (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 234,
                    "dist_name": "Naraini (SC)",
                    "state": 27,
                },

                {
                    "dist_id": 235,
                    "dist_name": "Banda",
                    "state": 27,
                },
                {
                    "dist_id": 236,
                    "dist_name": "Chitrakoot",
                    "state": 27,
                },
                {
                    "dist_id": 237,
                    "dist_name": "Manikpur",
                    "state": 27,
                },
                {
                    "dist_id": 238,
                    "dist_name": "Jahanabad",
                    "state": 27,
                },
                {
                    "dist_id": 239,
                    "dist_name": "Bindki",
                    "state": 27,
                },
                {
                    "dist_id": 240,
                    "dist_name": "Fatehpur",
                    "state": 27,
                },
                {
                    "dist_id": 241,
                    "dist_name": "Ayah Shah",
                    "state": 27,
                },
                {
                    "dist_id": 242,
                    "dist_name": "Hasainganj",
                    "state": 27,
                },
                {
                    "dist_id": 243,
                    "dist_name": "Khaga (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 244,
                    "dist_name": "Rampur Khas",
                    "state": 27,
                },
                {
                    "dist_id": 245,
                    "dist_name": "Babaganj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 246,
                    "dist_name": "Kunda",
                    "state": 27,
                },
                {
                    "dist_id": 247,
                    "dist_name": "Bishwavnathganj",
                    "state": 27,
                },
                {
                    "dist_id": 248,
                    "dist_name": "Pratapgarh",
                    "state": 27,
                },
                {
                    "dist_id": 249,
                    "dist_name": " Patti",
                    "state": 27,
                },
                {
                    "dist_id": 250,
                    "dist_name": "Raniganj",
                    "state": 27,
                },
                {
                    "dist_id": 251,
                    "dist_name": "Sirathu",
                    "state": 27,
                },
                {
                    "dist_id": 252,
                    "dist_name": "Manjhanour (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 253,
                    "dist_name": "Chail",
                    "state": 27,
                },
                {
                    "dist_id": 254,
                    "dist_name": "Phaphamau ",
                    "state": 27,
                },

                {
                    "dist_id": 255,
                    "dist_name": "Soraon (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 256,
                    "dist_name": "Phulpur",
                    "state": 27,
                },
                {
                    "dist_id": 257,
                    "dist_name": "Pratappur",
                    "state": 27,
                },
                {
                    "dist_id": 258,
                    "dist_name": "Handia",
                    "state": 27,
                },
                {
                    "dist_id": 259,
                    "dist_name": "Meja",
                    "state": 27,
                },
                {
                    "dist_id": 260,
                    "dist_name": "Karachhana",
                    "state": 27,
                },
                {
                    "dist_id": 261,
                    "dist_name": "Allahabad West",
                    "state": 27,
                },
                {
                    "dist_id": 262,
                    "dist_name": "Allahabad North",
                    "state": 27,
                },
                {
                    "dist_id": 263,
                    "dist_name": "Allahabad South",
                    "state": 27,
                },
                {
                    "dist_id": 264,
                    "dist_name": "Bara (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 265,
                    "dist_name": "Koraon",
                    "state": 27,
                },
                {
                    "dist_id": 266,
                    "dist_name": "Kursi",
                    "state": 27,
                },
                {
                    "dist_id": 267,
                    "dist_name": "Ram Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 268,
                    "dist_name": "Barabanki",
                    "state": 27,
                },
                {
                    "dist_id": 269,
                    "dist_name": "Zaidour (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 270,
                    "dist_name": "Dariyabad",
                    "state": 27,
                },
                {
                    "dist_id": 271,
                    "dist_name": "Rudauli",
                    "state": 27,
                },
                {
                    "dist_id": 272,
                    "dist_name": "Haidergarh (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 273,
                    "dist_name": "Milkipur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 274,
                    "dist_name": "Bikapur",
                    "state": 27,
                },

                {
                    "dist_id": 275,
                    "dist_name": "Ayodhya",
                    "state": 27,
                },
                {
                    "dist_id": 276,
                    "dist_name": "Goshainganj",
                    "state": 27,
                },
                {
                    "dist_id": 277,
                    "dist_name": "Katehari",
                    "state": 27,
                },
                {
                    "dist_id": 278,
                    "dist_name": "Tanda",
                    "state": 27,
                },
                {
                    "dist_id": 279,
                    "dist_name": "Alapur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 280,
                    "dist_name": "Jalalpur",
                    "state": 27,
                },
                {
                    "dist_id": 281,
                    "dist_name": "Akbarpur",
                    "state": 27,
                },
                {
                    "dist_id": 282,
                    "dist_name": "Balha (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 283,
                    "dist_name": " Nanpara",
                    "state": 27,
                },
                {
                    "dist_id": 284,
                    "dist_name": "Matera",
                    "state": 27,
                },
                {
                    "dist_id": 285,
                    "dist_name": "Bahraich",
                    "state": 27,
                },
                {
                    "dist_id": 286,
                    "dist_name": "Payagpur",
                    "state": 27,
                },
                {
                    "dist_id": 287,
                    "dist_name": "Bhinga",
                    "state": 27,
                },
                {
                    "dist_id": 288,
                    "dist_name": "Kaiserganj",
                    "state": 27,
                },
                {
                    "dist_id": 289,
                    "dist_name": "Bhinga",
                    "state": 27,
                },
                {
                    "dist_id": 290,
                    "dist_name": "Shrawasti",
                    "state": 27,
                },
                {
                    "dist_id": 291,
                    "dist_name": "Tulsipur",
                    "state": 27,
                },
                {
                    "dist_id": 292,
                    "dist_name": "Gainsari",
                    "state": 27,
                },
                {
                    "dist_id": 293,
                    "dist_name": " Utraula",
                    "state": 27,
                },
                {
                    "dist_id": 294,
                    "dist_name": "Balrampur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 295,
                    "dist_name": "Mehnaun",
                    "state": 27,
                },
                {
                    "dist_id": 296,
                    "dist_name": "Gonda",
                    "state": 27,
                },
                {
                    "dist_id": 297,
                    "dist_name": "Katra Bazar",
                    "state": 27,
                },
                {
                    "dist_id": 298,
                    "dist_name": "Colonelganj",
                    "state": 27,
                },
                {
                    "dist_id": 299,
                    "dist_name": "Tarabganj",
                    "state": 27,
                },
                {
                    "dist_id": 300,
                    "dist_name": "Mankapur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 301,
                    "dist_name": "Gaura",
                    "state": 27,
                },
                {
                    "dist_id": 302,
                    "dist_name": "Shohratgarh",
                    "state": 27,
                },
                {
                    "dist_id": 303,
                    "dist_name": " Kapilvastu (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 304,
                    "dist_name": "Bansi",
                    "state": 27,
                },
                {
                    "dist_id": 305,
                    "dist_name": "Itwa",
                    "state": 27,
                },
                {
                    "dist_id": 306,
                    "dist_name": "Domariyaganj",
                    "state": 27,
                },
                {
                    "dist_id": 307,
                    "dist_name": "Harraiya",
                    "state": 27,
                },
                {
                    "dist_id": 308,
                    "dist_name": "Kaptanganj",
                    "state": 27,
                },
                {
                    "dist_id": 309,
                    "dist_name": "Rudhauli",
                    "state": 27,
                },
                {
                    "dist_id": 310,
                    "dist_name": "Basti Sadar",
                    "state": 27,
                },
                {
                    "dist_id": 311,
                    "dist_name": "Mahadewa (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 312,
                    "dist_name": "Menhdawal ",
                    "state": 27,
                },
                {
                    "dist_id": 313,
                    "dist_name": " Khalilabad",
                    "state": 27,
                },
                {
                    "dist_id": 314,
                    "dist_name": "Dhanghata (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 315,
                    "dist_name": "Pharenda",
                    "state": 27,
                },
                {
                    "dist_id": 316,
                    "dist_name": "Nautanwa",
                    "state": 27,
                },
                {
                    "dist_id": 317,
                    "dist_name": "Siswa",
                    "state": 27,
                },
                {
                    "dist_id": 318,
                    "dist_name": "Maharajganj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 319,
                    "dist_name": "	Paniyara",
                    "state": 27,
                },
                {
                    "dist_id": 320,
                    "dist_name": "Caimpiyarganj",
                    "state": 27,
                },
                {
                    "dist_id": 321,
                    "dist_name": "	Pipraich",
                    "state": 27,
                },
                {
                    "dist_id": 322,
                    "dist_name": "Gorakhpur Urban ",
                    "state": 27,
                },
                {
                    "dist_id": 323,
                    "dist_name": " Gorakhpur Rural",
                    "state": 27,
                },
                {
                    "dist_id": 324,
                    "dist_name": "Sahajanwa",
                    "state": 27,
                },
                {
                    "dist_id": 325,
                    "dist_name": "Khajani (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 326,
                    "dist_name": "Chauri-Chaura",
                    "state": 27,
                },
                {
                    "dist_id": 327,
                    "dist_name": "Bansgaon (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 328,
                    "dist_name": "Chillupar",
                    "state": 27,
                },
                {
                    "dist_id": 329,
                    "dist_name": "	Khadda",
                    "state": 27,
                },
                {
                    "dist_id": 330,
                    "dist_name": "Padrauna",
                    "state": 27,
                },
                {
                    "dist_id": 331,
                    "dist_name": "	Tamkuhi Raj",
                    "state": 27,
                },
                {
                    "dist_id": 332,
                    "dist_name": "Fazilnagar ",
                    "state": 27,
                },
                {
                    "dist_id": 333,
                    "dist_name": " 	Kushinagar",
                    "state": 27,
                },
                {
                    "dist_id": 334,
                    "dist_name": "	Hata",
                    "state": 27,
                },
                {
                    "dist_id": 335,
                    "dist_name": "Ramkola (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 336,
                    "dist_name": "Rudrapur",
                    "state": 27,
                },
                {
                    "dist_id": 337,
                    "dist_name": "Deoria",
                    "state": 27,
                },
                {
                    "dist_id": 338,
                    "dist_name": "Pathardeva",
                    "state": 27,
                },
                {
                    "dist_id": 339,
                    "dist_name": "Rampur Karkhana",
                    "state": 27,
                },
                {
                    "dist_id": 340,
                    "dist_name": "Bhatpar Rani",
                    "state": 27,
                },
                {
                    "dist_id": 341,
                    "dist_name": "	Salempur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 342,
                    "dist_name": "Barhaj ",
                    "state": 27,
                },
                {
                    "dist_id": 343,
                    "dist_name": " Atrauliya",
                    "state": 27,
                },
                {
                    "dist_id": 344,
                    "dist_name": "Gopalpur",
                    "state": 27,
                },
                {
                    "dist_id": 345,
                    "dist_name": "Sagri",
                    "state": 27,
                },
                {
                    "dist_id": 346,
                    "dist_name": "Mubarakpur",
                    "state": 27,
                },
                {
                    "dist_id": 347,
                    "dist_name": "Azamgarh",
                    "state": 27,
                },
                {
                    "dist_id": 348,
                    "dist_name": "Nizamabad",
                    "state": 27,
                },
                {
                    "dist_id": 349,
                    "dist_name": "Phoolpur Pawai",
                    "state": 27,
                },
                {
                    "dist_id": 350,
                    "dist_name": "Didarganj",
                    "state": 27,
                },
                {
                    "dist_id": 351,
                    "dist_name": "Lalganj (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 352,
                    "dist_name": "Mehnagar (SC) ",
                    "state": 27,
                },
                {
                    "dist_id": 353,
                    "dist_name": " Madhuban",
                    "state": 27,
                },
                {
                    "dist_id": 354,
                    "dist_name": "Ghosi",
                    "state": 27,
                },
                {
                    "dist_id": 355,
                    "dist_name": "Muhammadabad-Gohna (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 356,
                    "dist_name": "Mau",
                    "state": 27,
                },
                {
                    "dist_id": 357,
                    "dist_name": "Belthara Road (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 358,
                    "dist_name": "Rasara",
                    "state": 27,
                },
                {
                    "dist_id": 359,
                    "dist_name": "	Sikanderpur",
                    "state": 27,
                },
                {
                    "dist_id": 360,
                    "dist_name": "Phephana",
                    "state": 27,
                },
                {
                    "dist_id": 361,
                    "dist_name": "Ballia Nagar",
                    "state": 27,
                },
                {
                    "dist_id": 362,
                    "dist_name": "Bansdih ",
                    "state": 27,
                },
                {
                    "dist_id": 363,
                    "dist_name": " 	Bairia",
                    "state": 27,
                },
                {
                    "dist_id": 364,
                    "dist_name": "	Badlapur",
                    "state": 27,
                },
                {
                    "dist_id": 365,
                    "dist_name": "Shahganj",
                    "state": 27,
                },
                {
                    "dist_id": 366,
                    "dist_name": "Jaunpur",
                    "state": 27,
                },
                {
                    "dist_id": 367,
                    "dist_name": "Malhani",
                    "state": 27,
                },
                {
                    "dist_id": 368,
                    "dist_name": "Mungra Badshahpur",
                    "state": 27,
                },
                {
                    "dist_id": 369,
                    "dist_name": "Machhlishahr (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 370,
                    "dist_name": "Mariyahu",
                    "state": 27,
                },
                {
                    "dist_id": 371,
                    "dist_name": "Zafrabad",
                    "state": 27,
                },
                {
                    "dist_id": 372,
                    "dist_name": "Kerakat (SC) ",
                    "state": 27,
                },
                {
                    "dist_id": 373,
                    "dist_name": " Jakhanian (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 374,
                    "dist_name": "Saidpur (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 375,
                    "dist_name": "Ghazipur Sadar",
                    "state": 27,
                },
                {
                    "dist_id": 376,
                    "dist_name": "Jangipur",
                    "state": 27,
                },
                {
                    "dist_id": 377,
                    "dist_name": "Zahoorabad",
                    "state": 27,
                },
                {
                    "dist_id": 378,
                    "dist_name": "Mohammadabad",
                    "state": 27,
                },
                {
                    "dist_id": 379,
                    "dist_name": "Zamania",
                    "state": 27,
                },
                {
                    "dist_id": 380,
                    "dist_name": "Mughalsarai",
                    "state": 27,
                },
                {
                    "dist_id": 381,
                    "dist_name": "Sakaldiha",
                    "state": 27,
                },
                {
                    "dist_id": 382,
                    "dist_name": "Saiyadraja",
                    "state": 27,
                },
                {
                    "dist_id": 383,
                    "dist_name": "Chakia (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 384,
                    "dist_name": "Pindra",
                    "state": 27,
                },
                {
                    "dist_id": 385,
                    "dist_name": "Ajagara (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 386,
                    "dist_name": "Shivpur",
                    "state": 27,
                },
                {
                    "dist_id": 387,
                    "dist_name": "Rohaniya",
                    "state": 27,
                },
                {
                    "dist_id": 388,
                    "dist_name": "Varanasi North",
                    "state": 27,
                },
                {
                    "dist_id": 389,
                    "dist_name": "Varanasi South",
                    "state": 27,
                },
                {
                    "dist_id": 390,
                    "dist_name": "Varanasi Cantonment",
                    "state": 27,
                },
                {
                    "dist_id": 391,
                    "dist_name": "Sevapuri",
                    "state": 27,
                },
                {
                    "dist_id": 392,
                    "dist_name": "Bhadohi ",
                    "state": 27,
                },
                {
                    "dist_id": 393,
                    "dist_name": " Gyanpur",
                    "state": 27,
                },
                {
                    "dist_id": 394,
                    "dist_name": "Aurai (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 395,
                    "dist_name": "Chhanbey (SC)",
                    "state": 27,
                },
                {
                    "dist_id": 396,
                    "dist_name": "Mirzapur",
                    "state": 27,
                },
                {
                    "dist_id": 397,
                    "dist_name": "	Majhawan",
                    "state": 27,
                },
                {
                    "dist_id": 398,
                    "dist_name": "Chunar",
                    "state": 27,
                },
                {
                    "dist_id": 399,
                    "dist_name": "Marihan",
                    "state": 27,
                },
                {
                    "dist_id": 400,
                    "dist_name": "Ghorawal",
                    "state": 27,
                },
                {
                    "dist_id": 401,
                    "dist_name": "	Robertsganj",
                    "state": 27,
                },
                {
                    "dist_id": 402,
                    "dist_name": "Obra (ST) ",
                    "state": 27,
                },
                {
                    "dist_id": 403,
                    "dist_name": " 	Duddhi (ST)",
                    "state": 27,
                },

            ]
        },
        {
            "Id": "28",
            name: "West Bengal",
            states: [
                {
                    "dist_id": 1,
                    "dist_name": "Mekliganj",
                    "state": 28
                },
                {
                    "dist_id": 2,
                    "dist_name": "Mathabhanga",
                    "state": 28
                },
                {
                    "dist_id": 3,
                    "dist_name": "Cooch Behar Uttar",
                    "state": 28
                },
                {
                    "dist_id": 4,
                    "dist_name": "Cooch Behar Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 5,
                    "dist_name": "Sitalkuchi",
                    "state": 28
                },
                {
                    "dist_id": 6,
                    "dist_name": "Sitai",
                    "state": 28
                },
                {
                    "dist_id": 7,
                    "dist_name": "Dinhata",
                    "state": 28
                },
                {
                    "dist_id": 8,
                    "dist_name": "Natabari",
                    "state": 28
                },
                {
                    "dist_id": 9,
                    "dist_name": "Tufanganj",
                    "state": 28
                },
                {
                    "dist_id": 10,
                    "dist_name": "Kumargram",
                    "state": 28
                },
                {
                    "dist_id": 11,
                    "dist_name": "Kalchini",
                    "state": 28
                },
                {
                    "dist_id": 12,
                    "dist_name": "Alipurduars",
                    "state": 28
                },
                {
                    "dist_id": 13,
                    "dist_name": "Falakata",
                    "state": 28
                },
                {
                    "dist_id": 14,
                    "dist_name": "Madarihat",
                    "state": 28
                },
                {
                    "dist_id": 15,
                    "dist_name": "Dhupguri",
                    "state": 28
                },
                {
                    "dist_id": 16,
                    "dist_name": "Maynaguri",
                    "state": 28
                },
                {
                    "dist_id": 17,
                    "dist_name": "Jalpaiguri",
                    "state": 28
                },
                {
                    "dist_id": 18,
                    "dist_name": "Rajganj",
                    "state": 28
                },
                {
                    "dist_id": 19,
                    "dist_name": "Dabgram-Phulbari",
                    "state": 28
                },
                {
                    "dist_id": 20,
                    "dist_name": "Mal",
                    "state": 28
                },
                {
                    "dist_id": 21,
                    "dist_name": "Nagrakata",
                    "state": 28
                },
                {
                    "dist_id": 22,
                    "dist_name": "Kalimpong",
                    "state": 28
                },
                {
                    "dist_id": 23,
                    "dist_name": "	Darjeeling",
                    "state": 28
                },
                {
                    "dist_id": 24,
                    "dist_name": "Kurseong",
                    "state": 28
                },
                {
                    "dist_id": 25,
                    "dist_name": "Matigara-Naxalbari",
                    "state": 28
                },
                {
                    "dist_id": 26,
                    "dist_name": "Siliguri",
                    "state": 28
                },
                {
                    "dist_id": 27,
                    "dist_name": "Phansidewa",
                    "state": 28
                },
                {
                    "dist_id": 28,
                    "dist_name": "Chopra",
                    "state": 28
                },
                {
                    "dist_id": 29,
                    "dist_name": "Islampur",
                    "state": 28
                },
                {
                    "dist_id": 30,
                    "dist_name": "Goalpokhar",
                    "state": 28
                },
                {
                    "dist_id": 31,
                    "dist_name": "	Chakulia",
                    "state": 28
                },
                {
                    "dist_id": 32,
                    "dist_name": "	Karandighi",
                    "state": 28
                },
                {
                    "dist_id": 33,
                    "dist_name": "Hemtabad",
                    "state": 28
                },
                {
                    "dist_id": 34,
                    "dist_name": "Kaliaganj",
                    "state": 28
                },
                {
                    "dist_id": 35,
                    "dist_name": "	Raiganj",
                    "state": 28
                },
                {
                    "dist_id": 36,
                    "dist_name": "	Itahar",
                    "state": 28
                },
                {
                    "dist_id": 37,
                    "dist_name": "Kushmandi",
                    "state": 28
                },
                {
                    "dist_id": 38,
                    "dist_name": "Kumarganj",
                    "state": 28
                },
                {
                    "dist_id": 39,
                    "dist_name": "Balurghat",
                    "state": 28
                },
                {
                    "dist_id": 40,
                    "dist_name": "Tapan",
                    "state": 28
                },
                {
                    "dist_id": 41,
                    "dist_name": "Gangarampur",
                    "state": 28
                },
                {
                    "dist_id": 42,
                    "dist_name": "	Harirampur",
                    "state": 28
                },
                {
                    "dist_id": 43,
                    "dist_name": "	Habibpur",
                    "state": 28
                },
                {
                    "dist_id": 44,
                    "dist_name": "	Gazole",
                    "state": 28
                },
                {
                    "dist_id": 45,
                    "dist_name": "Chanchal",
                    "state": 28
                },
                {
                    "dist_id": 46,
                    "dist_name": "Harishchandrapur",
                    "state": 28
                },
                {
                    "dist_id": 47,
                    "dist_name": "Malatipur",
                    "state": 28
                },
                {
                    "dist_id": 48,
                    "dist_name": "	Ratua",
                    "state": 28
                },
                {
                    "dist_id": 49,
                    "dist_name": "	Manikchak",
                    "state": 28
                },
                {
                    "dist_id": 50,
                    "dist_name": "Maldaha",
                    "state": 28
                },
                {
                    "dist_id": 51,
                    "dist_name": "	English Bazar",
                    "state": 28
                },
                {
                    "dist_id": 52,
                    "dist_name": "Mothabari",
                    "state": 28
                },
                {
                    "dist_id": 53,
                    "dist_name": "	Sujapur",
                    "state": 28
                },
                {
                    "dist_id": 54,
                    "dist_name": "	Baisnabnagar",
                    "state": 28
                },
                {
                    "dist_id": 55,
                    "dist_name": "	Farakka",
                    "state": 28
                },
                {
                    "dist_id": 56,
                    "dist_name": "	Samserganj",
                    "state": 28
                },
                {
                    "dist_id": 57,
                    "dist_name": "Suti",
                    "state": 28
                },
                {
                    "dist_id": 58,
                    "dist_name": "	Jangipur",
                    "state": 28
                },
                {
                    "dist_id": 59,
                    "dist_name": "		Raghunathganj",
                    "state": 28
                },
                {
                    "dist_id": 60,
                    "dist_name": "	Sagardighi",
                    "state": 28
                },
                {
                    "dist_id": 61,
                    "dist_name": "	Lalgola",
                    "state": 28
                },
                {
                    "dist_id": 62,
                    "dist_name": "	Bhagabangola",
                    "state": 28
                },
                {
                    "dist_id": 63,
                    "dist_name": "Raninagar",
                    "state": 28
                },
                {
                    "dist_id": 64,
                    "dist_name": "Murshidabad",
                    "state": 28
                },
                {
                    "dist_id": 65,
                    "dist_name": "	Nabagram",
                    "state": 28
                },
                {
                    "dist_id": 66,
                    "dist_name": "	Khargram",
                    "state": 28
                },
                {
                    "dist_id": 67,
                    "dist_name": "Domkal",
                    "state": 28
                },
                {
                    "dist_id": 68,
                    "dist_name": "	Jalangi",
                    "state": 28
                },
                {
                    "dist_id": 69,
                    "dist_name": "	Burwan",
                    "state": 27
                },
                {
                    "dist_id": 70,
                    "dist_name": "	Kandi",
                    "state": 28
                },
                {
                    "dist_id": 71,
                    "dist_name": "Bharatpur",
                    "state": 28
                },
                {
                    "dist_id": 72,
                    "dist_name": "Rejinagar",
                    "state": 28
                },
                {
                    "dist_id": 73,
                    "dist_name": "Beldanga",
                    "state": 28
                },
                {
                    "dist_id": 74,
                    "dist_name": "	Baharampur",
                    "state": 28
                },

                {
                    "dist_id": 75,
                    "dist_name": "	Hariharpara",
                    "state": 28
                },
                {
                    "dist_id": 76,
                    "dist_name": "	Naoda",
                    "state": 28
                },
                {
                    "dist_id": 77,
                    "dist_name": "Karimpur",
                    "state": 28
                },
                {
                    "dist_id": 78,
                    "dist_name": "Tehatta",
                    "state": 28
                },
                {
                    "dist_id": 79,
                    "dist_name": "Palashipara",
                    "state": 28
                },
                {
                    "dist_id": 80,
                    "dist_name": "Kaliganj",
                    "state": 28
                },
                {
                    "dist_id": 81,
                    "dist_name": "Nakashipara",
                    "state": 28
                },
                {
                    "dist_id": 82,
                    "dist_name": "Chapra",
                    "state": 28
                },
                {
                    "dist_id": 83,
                    "dist_name": "	Krishnanagar Uttar",
                    "state": 28
                },
                {
                    "dist_id": 84,
                    "dist_name": "	Nabadwip",
                    "state": 28
                },

                {
                    "dist_id": 85,
                    "dist_name": " Krishnanagar Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 86,
                    "dist_name": "	Santipur",
                    "state": 28
                },
                {
                    "dist_id": 87,
                    "dist_name": "Ranaghat Uttar Paschim",
                    "state": 28
                },
                {
                    "dist_id": 88,
                    "dist_name": "Krishnaganj",
                    "state": 28
                },
                {
                    "dist_id": 89,
                    "dist_name": "Ranaghat Uttar Purba",
                    "state": 28
                },
                {
                    "dist_id": 90,
                    "dist_name": "Ranaghat Dakshin ",
                    "state": 28
                },
                {
                    "dist_id": 91,
                    "dist_name": "	Chakdaha",
                    "state": 28
                },
                {
                    "dist_id": 92,
                    "dist_name": "Kalyani",
                    "state": 28
                },
                {
                    "dist_id": 93,
                    "dist_name": "Haringhata",
                    "state": 28
                },
                {
                    "dist_id": 94,
                    "dist_name": "Bagdah",
                    "state": 28
                },

                {
                    "dist_id": 95,
                    "dist_name": "	Bangaon Uttar",
                    "state": 28
                },
                {
                    "dist_id": 96,
                    "dist_name": "Bangaon Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 97,
                    "dist_name": "Gaighata",
                    "state": 28
                },
                {
                    "dist_id": 98,
                    "dist_name": "Swarupnagar",
                    "state": 28
                },
                {
                    "dist_id": 99,
                    "dist_name": "Baduria",
                    "state": 28
                },
                {
                    "dist_id": 100,
                    "dist_name": "	Habra",
                    "state": 28
                },
                {
                    "dist_id": 101,
                    "dist_name": "	Ashokenagar",
                    "state": 28
                },
                {
                    "dist_id": 102,
                    "dist_name": "Amdanga",
                    "state": 28
                },
                {
                    "dist_id": 103,
                    "dist_name": "	Bijpur",
                    "state": 28
                },
                {
                    "dist_id": 104,
                    "dist_name": "	Naihati",
                    "state": 28
                },
                {
                    "dist_id": 105,
                    "dist_name": "	Bhatpara",
                    "state": 28
                },
                {
                    "dist_id": 106,
                    "dist_name": "Jagatdal",
                    "state": 28
                },
                {
                    "dist_id": 107,
                    "dist_name": "	Noapara",
                    "state": 28
                },
                {
                    "dist_id": 108,
                    "dist_name": "Barrackpore",
                    "state": 28
                },
                {
                    "dist_id": 109,
                    "dist_name": "	Khardaha",
                    "state": 28
                },
                {
                    "dist_id": 110,
                    "dist_name": "Dum Dum Uttar",
                    "state": 28
                },
                {
                    "dist_id": 111,
                    "dist_name": "	Panihati",
                    "state": 28
                },
                {
                    "dist_id": 112,
                    "dist_name": "	Kamarhati",
                    "state": 28
                },
                {
                    "dist_id": 113,
                    "dist_name": "	Baranagar",
                    "state": 28
                },
                {
                    "dist_id": 114,
                    "dist_name": "	Dum Dum",
                    "state": 28
                },
                {
                    "dist_id": 115,
                    "dist_name": "Rajarhat New Town",
                    "state": 28
                },
                {
                    "dist_id": 116,
                    "dist_name": "Bidhannagar",
                    "state": 28
                },
                {
                    "dist_id": 117,
                    "dist_name": "Rajarhat Gopalpur",
                    "state": 28
                },
                {
                    "dist_id": 118,
                    "dist_name": "Madhyamgram",
                    "state": 28
                },
                {
                    "dist_id": 119,
                    "dist_name": "	Barasat",
                    "state": 28
                },
                {
                    "dist_id": 120,
                    "dist_name": "	Deganga",
                    "state": 28
                },
                {
                    "dist_id": 121,
                    "dist_name": "	Haroa",
                    "state": 28
                },
                {
                    "dist_id": 122,
                    "dist_name": "Minakhan",
                    "state": 28
                },
                {
                    "dist_id": 123,
                    "dist_name": "Sandeshkhali",
                    "state": 28
                },
                {
                    "dist_id": 124,
                    "dist_name": "	Basirhat Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 125,
                    "dist_name": "Basirhat Uttar",
                    "state": 28
                },
                {
                    "dist_id": 126,
                    "dist_name": "Hingalganj",
                    "state": 28
                },
                {
                    "dist_id": 127,
                    "dist_name": "Gosaba",
                    "state": 28
                },
                {
                    "dist_id": 128,
                    "dist_name": "	Basanti",
                    "state": 28
                },
                {
                    "dist_id": 129,
                    "dist_name": "Kultali",
                    "state": 28
                },
                {
                    "dist_id": 130,
                    "dist_name": "Patharpratima",
                    "state": 28
                },
                {
                    "dist_id": 131,
                    "dist_name": "Kakdwip",
                    "state": 28
                },
                {
                    "dist_id": 132,
                    "dist_name": "Sagar",
                    "state": 28
                },
                {
                    "dist_id": 133,
                    "dist_name": "	Kulpi",
                    "state": 28
                },
                {
                    "dist_id": 134,
                    "dist_name": "	Raidighi",
                    "state": 28
                },

                {
                    "dist_id": 135,
                    "dist_name": "Mandirbazar",
                    "state": 28
                },
                {
                    "dist_id": 136,
                    "dist_name": "Jaynagar",
                    "state": 28
                },
                {
                    "dist_id": 137,
                    "dist_name": "Baruipur Purba",
                    "state": 28
                },
                {
                    "dist_id": 138,
                    "dist_name": "Canning Paschim",
                    "state": 28
                },
                {
                    "dist_id": 139,
                    "dist_name": "	Canning Purba",
                    "state": 28
                },
                {
                    "dist_id": 140,
                    "dist_name": "Baruipur Paschim",
                    "state": 28
                },
                {
                    "dist_id": 141,
                    "dist_name": "Magrahat Purba",
                    "state": 28
                },
                {
                    "dist_id": 142,
                    "dist_name": "Magrahat Paschim",
                    "state": 28
                },
                {
                    "dist_id": 143,
                    "dist_name": "Diamond Harbour",
                    "state": 28
                },
                {
                    "dist_id": 144,
                    "dist_name": "	Falta",
                    "state": 28
                },
                {
                    "dist_id": 145,
                    "dist_name": "Satgachia",
                    "state": 28
                },
                {
                    "dist_id": 146,
                    "dist_name": "	Bishnupur",
                    "state": 28
                },
                {
                    "dist_id": 147,
                    "dist_name": "Sonarpur Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 148,
                    "dist_name": "	Bhangar",
                    "state": 28
                },
                {
                    "dist_id": 149,
                    "dist_name": "Kasba ",
                    "state": 28
                },
                {
                    "dist_id": 150,
                    "dist_name": "Jadavpur",
                    "state": 28
                },
                {
                    "dist_id": 151,
                    "dist_name": "Sonarpur Uttar",
                    "state": 28
                },
                {
                    "dist_id": 152,
                    "dist_name": "Tollygunge",
                    "state": 28
                },
                {
                    "dist_id": 153,
                    "dist_name": "Behala Purba",
                    "state": 28
                },
                {
                    "dist_id": 154,
                    "dist_name": "Behala Paschim",
                    "state": 28
                },

                {
                    "dist_id": 155,
                    "dist_name": "Maheshtala",
                    "state": 28
                },
                {
                    "dist_id": 156,
                    "dist_name": "Budge Budge",
                    "state": 28
                },
                {
                    "dist_id": 157,
                    "dist_name": "	Metiaburuz",
                    "state": 28
                },
                {
                    "dist_id": 158,
                    "dist_name": "Kolkata Port",
                    "state": 28
                },
                {
                    "dist_id": 159,
                    "dist_name": "Bhabanipur",
                    "state": 28
                },
                {
                    "dist_id": 160,
                    "dist_name": "	Rashbehari",
                    "state": 28
                },
                {
                    "dist_id": 161,
                    "dist_name": "	Ballygunge",
                    "state": 28
                },
                {
                    "dist_id": 162,
                    "dist_name": "	Chowrangee",
                    "state": 28
                },
                {
                    "dist_id": 163,
                    "dist_name": "Entally",
                    "state": 28
                },
                {
                    "dist_id": 164,
                    "dist_name": "	Beleghata",
                    "state": 28
                },
                {
                    "dist_id": 165,
                    "dist_name": "Jorasanko",
                    "state": 28
                },
                {
                    "dist_id": 166,
                    "dist_name": "Shyampukur",
                    "state": 28
                },
                {
                    "dist_id": 167,
                    "dist_name": "	Maniktala",
                    "state": 28
                },
                {
                    "dist_id": 168,
                    "dist_name": "Kashipur-Belgachhia",
                    "state": 28
                },
                {
                    "dist_id": 169,
                    "dist_name": "Bally",
                    "state": 28
                },
                {
                    "dist_id": 170,
                    "dist_name": "Howrah Uttar",
                    "state": 28
                },
                {
                    "dist_id": 171,
                    "dist_name": "	Howrah Madhya",
                    "state": 28
                },
                {
                    "dist_id": 172,
                    "dist_name": "Shibpur",
                    "state": 28
                },
                {
                    "dist_id": 173,
                    "dist_name": "Howrah Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 174,
                    "dist_name": "Sankrail",
                    "state": 28
                },

                {
                    "dist_id": 175,
                    "dist_name": "	Panchla",
                    "state": 28
                },
                {
                    "dist_id": 176,
                    "dist_name": "Uluberia Purba",
                    "state": 28
                },
                {
                    "dist_id": 177,
                    "dist_name": "Uluberia Uttar",
                    "state": 28
                },
                {
                    "dist_id": 178,
                    "dist_name": "Uluberia Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 179,
                    "dist_name": "Shyampur",
                    "state": 28
                },
                {
                    "dist_id": 180,
                    "dist_name": "	Bagnan",
                    "state": 28
                },
                {
                    "dist_id": 181,
                    "dist_name": "	Amta",
                    "state": 28
                },
                {
                    "dist_id": 182,
                    "dist_name": "Udaynarayanpur",
                    "state": 28
                },
                {
                    "dist_id": 183,
                    "dist_name": "Jagatballavpur",
                    "state": 28
                },
                {
                    "dist_id": 184,
                    "dist_name": "Domjur",
                    "state": 28
                },
                {
                    "dist_id": 185,
                    "dist_name": "	Uttarpara",
                    "state": 28
                },
                {
                    "dist_id": 186,
                    "dist_name": "	Sreerampur",
                    "state": 28
                },
                {
                    "dist_id": 187,
                    "dist_name": "	Champdani",
                    "state": 28
                },
                {
                    "dist_id": 188,
                    "dist_name": "Singur",
                    "state": 28
                },
                {
                    "dist_id": 189,
                    "dist_name": "Chandannagar",
                    "state": 28
                },
                {
                    "dist_id": 190,
                    "dist_name": "Chunchura",
                    "state": 28
                },
                {
                    "dist_id": 191,
                    "dist_name": "Balagarh",
                    "state": 28
                },
                {
                    "dist_id": 192,
                    "dist_name": "Pandua",
                    "state": 28
                },
                {
                    "dist_id": 193,
                    "dist_name": "	Saptagram",
                    "state": 28
                },
                {
                    "dist_id": 194,
                    "dist_name": "Chanditala",
                    "state": 28
                },

                {
                    "dist_id": 195,
                    "dist_name": "Jangipara",
                    "state": 28
                },
                {
                    "dist_id": 196,
                    "dist_name": "	Haripal",
                    "state": 28
                },
                {
                    "dist_id": 197,
                    "dist_name": "Dhanekhali",
                    "state": 28
                },
                {
                    "dist_id": 198,
                    "dist_name": "		Tarakeswar",
                    "state": 28
                },
                {
                    "dist_id": 199,
                    "dist_name": "Pursurah",
                    "state": 28
                },
                {
                    "dist_id": 200,
                    "dist_name": "Arambagh",
                    "state": 28
                },
                {
                    "dist_id": 201,
                    "dist_name": "Goghat",
                    "state": 28
                },
                {
                    "dist_id": 202,
                    "dist_name": "Khanakul",
                    "state": 28
                },
                {
                    "dist_id": 203,
                    "dist_name": "Tamluk",
                    "state": 28
                },
                {
                    "dist_id": 204,
                    "dist_name": "Panskura Purba",
                    "state": 28
                },
                {
                    "dist_id": 205,
                    "dist_name": "Panskura Paschim",
                    "state": 28
                },
                {
                    "dist_id": 206,
                    "dist_name": "Moyna",
                    "state": 28
                },
                {
                    "dist_id": 207,
                    "dist_name": "Nandakumar",
                    "state": 28
                },
                {
                    "dist_id": 208,
                    "dist_name": "Mahisadal",
                    "state": 28
                },
                {
                    "dist_id": 209,
                    "dist_name": "	Haldia",
                    "state": 28
                },
                {
                    "dist_id": 210,
                    "dist_name": "Nandigram",
                    "state": 28
                },
                {
                    "dist_id": 211,
                    "dist_name": "	Chandipur",
                    "state": 28
                },
                {
                    "dist_id": 212,
                    "dist_name": "Patashpur",
                    "state": 28
                },
                {
                    "dist_id": 213,
                    "dist_name": "Kanthi Uttar",
                    "state": 28
                },
                {
                    "dist_id": 214,
                    "dist_name": "	Bhagabanpur",
                    "state": 28
                },

                {
                    "dist_id": 215,
                    "dist_name": "Khejuri",
                    "state": 28
                },
                {
                    "dist_id": 216,
                    "dist_name": "Kanthi Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 217,
                    "dist_name": "Ramnagar",
                    "state": 28
                },
                {
                    "dist_id": 218,
                    "dist_name": "Egra",
                    "state": 28
                },
                {
                    "dist_id": 219,
                    "dist_name": "Dantan",
                    "state": 28
                },
                {
                    "dist_id": 220,
                    "dist_name": "	Nayagram",
                    "state": 28
                },
                {
                    "dist_id": 221,
                    "dist_name": "	Gopiballavpur",
                    "state": 28
                },
                {
                    "dist_id": 222,
                    "dist_name": "Jhargram",
                    "state": 28
                },
                {
                    "dist_id": 223,
                    "dist_name": "	Keshiary",
                    "state": 28
                },
                {
                    "dist_id": 224,
                    "dist_name": "Kharagpur Sadar",
                    "state": 28
                },
                {
                    "dist_id": 225,
                    "dist_name": "Narayangarh",
                    "state": 28
                },
                {
                    "dist_id": 226,
                    "dist_name": "Sabang",
                    "state": 28
                },
                {
                    "dist_id": 227,
                    "dist_name": "Pingla",
                    "state": 28
                },
                {
                    "dist_id": 228,
                    "dist_name": "	Kharagpur",
                    "state": 28
                },
                {
                    "dist_id": 229,
                    "dist_name": "Debra",
                    "state": 28
                },
                {
                    "dist_id": 230,
                    "dist_name": "Daspur",
                    "state": 28
                },
                {
                    "dist_id": 231,
                    "dist_name": "	Ghatal",
                    "state": 28
                },
                {
                    "dist_id": 232,
                    "dist_name": "Chandrakona",
                    "state": 28
                },
                {
                    "dist_id": 233,
                    "dist_name": "Garbeta",
                    "state": 28
                },
                {
                    "dist_id": 234,
                    "dist_name": "Salboni",
                    "state": 28
                },

                {
                    "dist_id": 235,
                    "dist_name": "	Keshpur",
                    "state": 28
                },
                {
                    "dist_id": 236,
                    "dist_name": "Medinipur",
                    "state": 28
                },
                {
                    "dist_id": 237,
                    "dist_name": "Binpur",
                    "state": 28
                },
                {
                    "dist_id": 238,
                    "dist_name": "Bandwan",
                    "state": 28
                },
                {
                    "dist_id": 239,
                    "dist_name": "Balarampur",
                    "state": 28
                },
                {
                    "dist_id": 240,
                    "dist_name": "Baghmundi",
                    "state": 28
                },
                {
                    "dist_id": 241,
                    "dist_name": "	Joypur",
                    "state": 28
                },
                {
                    "dist_id": 242,
                    "dist_name": "Purulia",
                    "state": 28
                },
                {
                    "dist_id": 243,
                    "dist_name": "Manbazar",
                    "state": 28
                },
                {
                    "dist_id": 244,
                    "dist_name": "Kashipur",
                    "state": 28
                },
                {
                    "dist_id": 245,
                    "dist_name": "Para",
                    "state": 28
                },
                {
                    "dist_id": 246,
                    "dist_name": "Raghunathpur",
                    "state": 28
                },
                {
                    "dist_id": 247,
                    "dist_name": "Saltora",
                    "state": 28
                },
                {
                    "dist_id": 248,
                    "dist_name": "Chhatna",
                    "state": 28
                },
                {
                    "dist_id": 249,
                    "dist_name": " Ranibandh",
                    "state": 28
                },
                {
                    "dist_id": 250,
                    "dist_name": "	Raipur",
                    "state": 28
                },
                {
                    "dist_id": 251,
                    "dist_name": "Taldangra",
                    "state": 28
                },
                {
                    "dist_id": 252,
                    "dist_name": "	Bankura",
                    "state": 28
                },
                {
                    "dist_id": 253,
                    "dist_name": "Barjora",
                    "state": 28
                },
                {
                    "dist_id": 254,
                    "dist_name": "	Onda ",
                    "state": 28
                },

                {
                    "dist_id": 255,
                    "dist_name": "	Bishnupur",
                    "state": 28
                },
                {
                    "dist_id": 256,
                    "dist_name": "Katulpur",
                    "state": 28
                },
                {
                    "dist_id": 257,
                    "dist_name": "	Indas",
                    "state": 28
                },
                {
                    "dist_id": 258,
                    "dist_name": "	Sonamukhi",
                    "state": 28
                },
                {
                    "dist_id": 259,
                    "dist_name": "Khandaghosh",
                    "state": 28
                },
                {
                    "dist_id": 260,
                    "dist_name": "Bardhaman Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 261,
                    "dist_name": "	Raina",
                    "state": 28
                },
                {
                    "dist_id": 262,
                    "dist_name": "Jamalpur",
                    "state": 28
                },
                {
                    "dist_id": 263,
                    "dist_name": "	Manteswar",
                    "state": 28
                },
                {
                    "dist_id": 264,
                    "dist_name": "	Kalna",
                    "state": 28
                },
                {
                    "dist_id": 265,
                    "dist_name": "Memari",
                    "state": 28
                },
                {
                    "dist_id": 266,
                    "dist_name": "Bardhaman Uttar",
                    "state": 28
                },
                {
                    "dist_id": 267,
                    "dist_name": "Bhatar",
                    "state": 28
                },
                {
                    "dist_id": 268,
                    "dist_name": "Purbasthali Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 269,
                    "dist_name": "Purbasthali Uttar",
                    "state": 28
                },
                {
                    "dist_id": 270,
                    "dist_name": "Katwa",
                    "state": 28
                },
                {
                    "dist_id": 271,
                    "dist_name": "Ketugram",
                    "state": 28
                },
                {
                    "dist_id": 272,
                    "dist_name": "Mangalkot",
                    "state": 28
                },
                {
                    "dist_id": 273,
                    "dist_name": "Ausgram",
                    "state": 28
                },
                {
                    "dist_id": 274,
                    "dist_name": "Galsi",
                    "state": 28
                },

                {
                    "dist_id": 275,
                    "dist_name": "Pandaveswar",
                    "state": 28
                },
                {
                    "dist_id": 276,
                    "dist_name": "Durgapur Purba",
                    "state": 28
                },
                {
                    "dist_id": 277,
                    "dist_name": "Durgapur Paschim",
                    "state": 28
                },
                {
                    "dist_id": 278,
                    "dist_name": "Raniganj",
                    "state": 28
                },
                {
                    "dist_id": 279,
                    "dist_name": "	Jamuria",
                    "state": 28
                },
                {
                    "dist_id": 280,
                    "dist_name": "	Asansol Dakshin",
                    "state": 28
                },
                {
                    "dist_id": 281,
                    "dist_name": "	Asansol Uttar",
                    "state": 28
                },
                {
                    "dist_id": 282,
                    "dist_name": "Kulti",
                    "state": 28
                },
                {
                    "dist_id": 283,
                    "dist_name": " 	Barabani",
                    "state": 28
                },
                {
                    "dist_id": 284,
                    "dist_name": "Dubrajpur",
                    "state": 28
                },
                {
                    "dist_id": 285,
                    "dist_name": "	Suri",
                    "state": 28
                },
                {
                    "dist_id": 286,
                    "dist_name": "Bolpur",
                    "state": 28
                },
                {
                    "dist_id": 287,
                    "dist_name": "	Nanoor",
                    "state": 28
                },
                {
                    "dist_id": 288,
                    "dist_name": "	Labpur",
                    "state": 28
                },
                {
                    "dist_id": 289,
                    "dist_name": "	Sainthia",
                    "state": 28
                },
                {
                    "dist_id": 290,
                    "dist_name": "Mayureswar",
                    "state": 28
                },
                {
                    "dist_id": 291,
                    "dist_name": "	Rampurhat",
                    "state": 28
                },
                {
                    "dist_id": 292,
                    "dist_name": "	Hansan",
                    "state": 28
                },
                {
                    "dist_id": 293,
                    "dist_name": " Nalhati",
                    "state": 28
                },
                {
                    "dist_id": 294,
                    "dist_name": "Murarai",
                    "state": 28
                }

            ]
        },
    ]

    const [countrystates, setCountryState] = useState([])
    useEffect(() => {
        const countrydata = countries.map((item) => {
            return (item)
        })
        setCountryState(countrydata)
    }, [])
    useEffect(() => {
        setCountry();
    }, [])

    const changeCountry = (event, selectedOption) => {
        setCountry(event.target.value);
        setCountry(selectedOption)
        const selectedCountry = countries.find(ctr => ctr.name === event.target.value);
        if (selectedCountry) {
            setStates(selectedCountry.states);
            console.log('selected State:', selectedCountry.states);
        } else {
            console.log('No matching country found');
            setStates([]);
        }
        setSelected(selectedOption);  
    }


    const handleCountryClick = (event, countryName) => {
        console.log("Selected Country Name:", countryName);
        const countryDataList = countries.find((ctrs) => ctrs.name === countryName);
        const countrystatevalues =countryDataList.states;
        // const statevalues =  countrystatevalues.map((items)=>{
        //     return(items.dist_name)
        // })
        setallstateValues(countrystatevalues)
    };
    

    const changeCity = (event) => {
        setCity(event.target.value)
    }

    const changeState = (event, selectedOption) => {
        setState(event.target.value)
        setState(selectedOption)
        console.log('selected Constituency:', constituencyList)
    }


    const handleFirstNameChange = (event) => {
        setFname(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const handleFormConstituencyChange = (event) => {
        setFormconstituency(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const stateListChange = (event) => {
        setStateList(event.target.value);
    };
    const constituencyListChange = (event) => {
        setConstituencyList(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.send('service_0ebnbnt', 'template_0mfk3og', {
            name: `firstname:${fname} lastname:${lname}`,
            email: `${email}`,
            message: `Mobile:${mobile},
            Constituency:${formconstituency},
            Description:${description},
             Selected State: ${selectedState},
             Selected Constituency ${selectedConstituency}`
        }, 'SX2CrohSCLcTCWGWO')
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                // Handle success, show a success message to the user or redirect to a success page
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                // Handle error, show an error message to the user
            });

        // Reset the form fields
        setFname('');
        setLname('');
        setEmail('');
        setMobile('');
        setFormconstituency('');
        setDescription('');
        setStateList('');
        setConstituencyList('');


        fetch('https://forms.zohopublic.in/itoconnect/form/ItoConnectLead/formperma/KuFRnT9_kBcIvAlwi6joJFAwVL6qsIniL46PDAjz_iI/htmlRecords/submit', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                mobile: mobile,
                formconstituency: formconstituency,
                description: description
            }
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>

            <div class="header-background">
                <header class="header ">
                    <div class="logo-wrapper">
                        <a class="logo" href="#">
                            <img src={EmsLogo} />
                        </a>
                    </div>
                    <div class="right_nav">
                        <nav class="nav">
                            <a href="#">Home</a>
                            <a href="#download_data_inexcel">Voter Data</a>
                            <a href="#footer">Contact Us</a>
                            <a href="#https://electionmanagementsystem.com/contactus">
                                <button type="button" className="reach animated-border-button"
                                    data-toggle="modal"
                                    data-target="#get_trained"
                                > Reach out to us
                                </button>
                            </a>
                        </nav>
                    </div>
                </header>
            </div>

            {/* <!-- mob version --> */}
            <div className="mob_menu_navbar">
                <div>
                    <div class="logo-wrapper">
                        <a class="logo_mobile" href="#">
                            <img src={EmsLogo} />
                        </a>
                    </div>
                </div>
                <div class="mob-menu">
                    <img class="mob-open " src={open} alt="open" onClick={handleOpenClick} />
                    <div className="mob-wrapper">
                        {
                            isOpened && (
                                <div class="mob-list">
                                    {/* <a href="#" class="mob-list__item">EMS</a> */}
                                    <a href="#" class="mob-list__item">Home</a>
                                    <a href="#download_data_inexcel" class="mob-list__item">Voter Data</a>
                                    <a href="#footer" class="mob-list__item">Contact Us</a>

                                    {/* <a href="#" class="mob-list__item">Contact Us</a> */}
                                    {/* <a href="#" class="mob-list__item">Go to Cart</a> */}
                                    <a href="#https://electionmanagementsystem.com/contactus">
                                        <button type="button"
                                            className="reach_mobile"
                                            data-toggle="modal"
                                            data-target="#get_trained"
                                        > Reach out to us
                                            {/* &nbsp;&nbsp;&nbsp; */}
                                            {/* <img src={Cart} class="cart" /> */}
                                        </button>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div class="map_section">
                <img src={PinGroup} class="pin_group_map" />
                <div class="row" id="map_child">
                    <div class="col-md-8 ">
                        <div className="left_section">
                            <span id="side_bar"> </span>
                            <span class="display_text">Want to know about your
                                winning <strong class="assemble">Assembly/Parliament Constituency</strong></span>
                        </div>
                        <div className="reachbutton_section">
                            <button type="button"

                                className="reach_out_butn"
                                data-toggle="modal"
                                data-target="#get_trained"
                            >
                                Reach out to us
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 map_img_block">
                        <img src={Map} className="map" />
                    </div>
                </div>
            </div>

            <div className="voters_sheet_section man_with_tab_block">
                <div class="row">
                    <div class="col-md-5">
                        <img class="votersheet man_with_tab_img" src={VoterSheet} />
                    </div>
                    <div class="col-md-6">
                        <div className="left_section section2">
                            <span id="side_bar"> </span>
                            <span class="display_text display_text2">Want to Know the <strong class="assemble"> Complete analysis</strong></span>
                            <p className="summary">(Summary about the winning election)</p>
                            <div className="">
                                <button type="button" className="reach_out_button submit-btn" data-toggle="modal" data-target="#get_trained">
                                    Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={PinGroup} class="pin_group_complete" />
            </div>

            <div id="download_data_inexcel" className="voters_sheet_section3 download_section_main_block">
                <div class="row ">
                    <div class="col-md-6">
                        <div className="left_section text_download">
                            <span id="side_bar"> </span>
                            <span class="display_text display_text2">Download your complete<br /><strong class="assemble">Voter Data</strong> in excel</span>

                            <div className="reach_button_third">
                                <button type="button" className="reach_out_button" data-toggle="modal" data-target="#get_trained">
                                    Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img class="votersheet2" src={VotterSheet2} />
                    </div>
                </div>
            </div>

            <div className="voters_sheet_section mainsection_download">
                <img src={NewPin} class="pin_group_download1" />
                <div class="row">
                    <div class="col-md-3">
                        <img class="votersheet vootersheet3" src={VoterSheet3} />
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-7">
                        <div className="left_section left_section3">
                            <span id="side_bar"> </span>
                            <span class="display_text text4 display_text2">Download your upcoming projections by each poolingbooth<strong class="assemble"></strong></span>
                            <div className="">
                                <button type="button" className="reach_out_button" id="button4" data-toggle="modal" data-target="#get_trained">
                                    Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={PinGroup} class="pin_group_download" />
            </div>

            <div className="voters_sheet_section3 complete_analysis_mainblock">
                <img src={NewPin} class="new_pin" />
                <div class="row ">
                    <div class="col-md-6">
                        <div className="left_section text_download">
                            <span id="side_bar"> </span>
                            <span class="display_text display_text2">want to know the <strong class="assemble">Complete analysis</strong></span>
                            <p className="summary">(History about the previous election)</p>
                            <div className="">
                                <button type="button" className="reach_out_button"
                                    data-toggle="modal" data-target="#get_trained">
                                    Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img class="votersheet4" src={Analysis} />
                    </div>
                    <img src={PinGroup} class="pin_group" />
                </div>
            </div>

            <div className="dependency_block">

                <div className="voter_datat_text">
                    <span class="voter_text" >Voter data in Excel</span>
                    <img src={Rectangle1} className="reactangle_2" />
                </div>

                <div className="row slect_block">
                    <div class="col-md-5 styled-select mt-5">
                        <div class="select-toggle" id="select-toggle ">
                            <select className="select" value={country} onChange={changeCountry} >
                                <option>Select State</option>
                                {countries.map((ctr) => {
                                    return (
                                        <option key={ctr.name}>{ctr.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div class="col-md-5 styled-select styled_select2 mt-5">
                        <div class="select-toggle" id="select-toggle">
                            <select className="select" value={state} onChange={changeState}>
                                <option>Select Constituency</option>
                                {states ? states.map((state) => (
                                    <option value={state.dist_id}>{state.dist_name}</option>
                                )) : null}
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Rectangle1} class="reactangle_1" />
                    <div>
                        <div class="row  state_contiuncey_block">
                            <div class="col-md-2"></div>
                            <div class="col-md-2 state_contiuncey_child" >
                                <span>States</span>
                            </div>
                            <div class="col-md-4"></div>
                            <div class="col-md-2">
                                <span class="constituency">Constituency</span>
                            </div>
                        </div>
                    </div>
                    <div className="maped_data">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div className="states_block">
                                        <div className="scrollable-element">
                                            <div>
                                                {countries.map((ctrs) => (
                                                    <div
                                                        key={ctrs.value}
                                                        className="allstates_list"
                                                        name="Selected_State"
                                                        onClick={(event) => {
                                                            handleCountryClick(event, ctrs.name);
                                                            setselectedState(ctrs.name);
                                                        }}
                                                    >
                                                        {ctrs.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6" >
                                <div className="states_block2 ">
                                        <div>
                                        {allstatevalues&&allstatevalues.map((items)=>{
                                            return(
                                                <div className="scrollable-element2" data-toggle="modal"
                                                data-target="#get_constituency"
                                                  onClick={()=>setselectedConstituency(items.dist_name)} >
                                                    {items.dist_name}
                                                    </div>
                                            )            
                                        })}
                                        </div>
                                    </div> 
                                </div>

                            </div>
                        </form>

                    </div>
                </div>

            </div>

            <div className="transform">
                <img src={Transform} class="transform_img" />
                <div className="transform_child_block">
                    <span class="transform_text">Transform you from aspirant to Winning Candidate </span>
                    <span class="transform_reac_button" data-toggle="modal" data-target="#get_trained">Reach out to us</span>
                </div>
                <span class="transform_reac_button1" data-toggle="modal" data-target="#get_trained">Reach out to us</span>

            </div>

            <div className="footer" id="footer">
                <div class="row">
                    <div class="col-md-7 footer_Section1">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="footer_logo-wrapper">
                                    <a class="footer_img" href="#">
                                        <img src={EmsLogo} />
                                    </a>
                                </div>
                            </div>


                            <div class="d-flex flex-column flex-md-row footer_flex_main_div">
                                <ul className="footer_list1">
                                    <li>Voters Data</li>
                                    <li>Contact Us</li>
                                </ul>

                                <ul className="footer_list2">
                                    <li><a href="tel:+91970449297">India - +91 970449297</a></li>
                                    <li><a href="mailto:info@electionmanagementsystem.com">Email : info@electionmanagementsystem.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div className="footer_text3">
                            <p className="footer_addres_abbrevation">Address</p>
                            <div class="row">
                                <div class="col-md-6 mt-2 footer_text3_sub1">
                                    <span>Corporate HQ</span>
                                    <br /><br />
                                    <span>Hyderabad-India</span>
                                    <br />
                                    <br />
                                    <span>HITEC CITY ,Telangana-500081</span>
                                    <br /><br />
                                </div>
                                <div class="col-md-6 mt-2 footer_text3_sub1 footer_text3_sub2 ">
                                    <ul >
                                        <li>New Delhi-India</li> <br />
                                        <li>Connaught Place</li>
                                        <li>Delhi - 110001</li>
                                        <br />
                                        <li>Guntur - India</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="socia_main_block">

                    <div className="social_icons">
                        <a href="#" class="fa fa-facebook" ></a>
                        <a href="#" class="fa fa-youtube-play"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </div>
                </div>

                <div className="line">
                    <img src={Line} />
                    <div>
                        <p class="alrights_reserved" >© 2023 ----------- - All Right Reserved</p>
                    </div>
                </div>
            </div>



            <div id="get_trained" class="modal fade" tabindex="-1" role="dialog"
                aria-labelledby="get_trained" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div className="modal-content" id="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label='Close'>&times;</button>
                            <h4 class="modal-title" id="get_trained">Fill Your Details</h4>
                        </div>
                        <div class="modal-body">
                            <form ref={form} onSubmit={handleSubmit}
                            >
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'>
                                            <label for='Last_Name' >First
                                                Name<span style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text'
                                                value={fname}
                                                name="First_Name"
                                                fieldType='7'
                                                onChange={handleFirstNameChange} required
                                            ></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'><label for='Designation'>Last
                                            Name<span style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text' id='Name_Last' name='Last_Name'
                                                value={lname}
                                                onChange={handleLastNameChange}
                                                maxlength='100' fieldType='7'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'><label for='Email'>Email<span
                                            style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='email' ftype='email' id='Email' name='Email'
                                                value={email}
                                                onChange={handleEmailChange}
                                                maxlength='100'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'>
                                            <label for='Mobile'>Mobile<span
                                                style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text' id='Mobile' name='Mobile'
                                                value={mobile}
                                                onChange={handleMobileChange}
                                                maxlength='30'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label
                                            for='Street' >Constituency<span
                                                style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'><input type="text" name="Constituency"
                                            fieldType='1'
                                            maxlength="255" placeholder=""
                                            // value={formconstituency}
                                            // value={selectedConstituency}
                                            //    `${selectedConstituency}`
                                            onChange={handleFormConstituencyChange}
                                        ></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                                            <label for='Description'>Description</label>
                                        </div>
                                        <div class='zcwf_col_fld'><textarea type="text"
                                            name="Description"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            fieldType='1' maxlength="255"></textarea>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                </div>
                                <div class='zcwf_row'>
                                    <div class='zcwf_col_lab'></div>
                                    <div class='zcwf_col_fld'>
                                        <input type='submit' style={{ color: 'white' }} id='formsubmit'
                                            class='formsubmit zcwf_button btn' value='Submit' title='Submit' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div id="get_constituency" class="modal fade" tabindex="-1" role="dialog"
                aria-labelledby="get_constituency" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div className="modal-content" id="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label='Close'>&times;</button>
                            <h4 class="modal-title" id="get_constituency">Fill Your Details</h4>
                        </div>
                        <div class="modal-body">
                            <form ref={form} onSubmit={handleSubmit}
                            >
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'>
                                            <label for='Last_Name' >First
                                                Name<span style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text'
                                                value={fname}
                                                name="First_Name"
                                                fieldType='7'
                                                onChange={handleFirstNameChange} required
                                            ></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'><label for='Designation'>Last
                                            Name<span style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text' id='Name_Last' name='Last_Name'
                                                value={lname}
                                                onChange={handleLastNameChange}
                                                maxlength='100' fieldType='7'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'><label for='Email'>Email<span
                                            style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='email' ftype='email' id='Email' name='Email'
                                                value={email}
                                                onChange={handleEmailChange}
                                                maxlength='100'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab'>
                                            <label for='Mobile'>Mobile<span
                                                style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'>
                                            <input type='text' id='Mobile' name='Mobile'
                                                value={mobile}
                                                onChange={handleMobileChange}
                                                maxlength='30'></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label
                                            for='Street' >Constituency<span
                                                style={{ color: 'red' }}>*</span></label></div>
                                        <div class='zcwf_col_fld'><input type="text" name="Constituency"
                                            fieldType='1'
                                            maxlength="255" placeholder=""
                                            // value={formconstituency}
                                            value={selectedConstituency}
                                            //    `${selectedConstituency}`
                                            onChange={handleFormConstituencyChange}
                                        ></input>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                    <div class='col-md-6'>
                                        <div class='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                                            <label for='Description'>Description</label>
                                        </div>
                                        <div class='zcwf_col_fld'><textarea type="text"
                                            name="Description"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            fieldType='1' maxlength="255"></textarea>
                                            <div class='zcwf_col_help'></div>
                                        </div>
                                    </div>

                                </div>
                                <div class='zcwf_row'>
                                    <div class='zcwf_col_lab'></div>
                                    <div class='zcwf_col_fld'>
                                        <input type='submit' style={{ color: 'white' }} id='formsubmit'
                                            class='formsubmit zcwf_button btn' value='Submit' title='Submit' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div>


    )
}

export default Layout1