import React, { useState, useEffect,useRef } from 'react'
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

function Layout1() {
    const [isOpened, setIsOpened] = useState(false);
    //countries are state
    const [country, setCountry] = useState('');
    const [state, setState] = useState(null);
    const [city, setCity] = useState('');

    //for filter the state and citys
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([])
    const [selected, setSelected] = useState(null);
    const [selectedState, setselectedState] = useState();
    const [selectedConstituency, setselectedConstituency] = useState();
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
                    "dist_name": "Thi",
                    "state": 2,
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
            "value": "0"

        },
        {
            "Id": "5",
            name: "Chhattisgarh"
        },
        {
            "Id": "6",
            name: "Goa"
        },
        {
            "Id": "7",
            name: "Gujarat"
        },
        {
            "Id": "8",
            name: "Haryana"
        },
        {
            "Id": "9",
            name: "Himachal Pradesh"
        },
        {
            "Id": "10",
            name: "Jharkhand"
        },
        {
            "Id": "11",
            name: "Karnataka"
        },
        {
            "Id": "12",
            name: "Kerla"
        },
        {
            "Id": "13",
            name: "Madhya Pradesh",
            states:[
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
                    "dist_id":36,
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
                },{
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
            states:[
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
                    "dist_id":22,
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
                },{
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
            name: "Manipur"
        },
        {
            "Id": "16",
            name: "Meghalaya"
        },
        {
            "Id": "17",
            name: "Mizoram"
        },
        {
            "Id": "18",
            name: "Nagaland"
        },
        {
            "Id": "19",
            name: "Odisha"
        },
        {
            "Id": "20",
            name: "Punjab"
        },
        {
            "Id": "21",
            name: "Rajasthan"
        },
        {
            "Id": "22",
            name: "Sikkim"
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
            name: "Tripura"
        },
        {
            "Id": "26",
            name: "Uttarakhand"
        },
        {
            "Id": "27",
            name: "Uttar Pradesh"
        },
        {
            "Id": "28",
            name: "West Bengal"
        },
    ]

    useEffect(() => {
        setCountry()
    },)

    const changeCountry = (event, selectedOption) => {
        setCountry(event.target.value);
        setCountry(selectedOption)

        // setStates(countries.find(ctr => ctr.name === event.target.value).states)
        //  console.log('selected State:', states)
        const selectedCountry = countries.find(ctr => ctr.name === event.target.value);
        if (selectedCountry) {
            setStates(selectedCountry.states);
            console.log('selected State:', selectedCountry.states);
        } else {
            console.log('No matching country found');
            setStates([]);
        }
         setSelected(selectedOption);
        //  console.log(`Option selected:`, selectedOption);
        // console.log(`Option selected:`, country);

        }

    const changeState = (event, selectedOption) => {
        // event.preventDefault();
        setState(event.target.value)
        setState(selectedOption)
        console.log('selected Constituency:', constituencyList)
        //filder city city from state on slect
        // setCities(states.find(state => state.name === event.target.value).cities);
    }



    const changeCity = (event) => {
        setCity(event.target.value)
    }
    const [selectedOption, setSelectedOption] = useState('');

    const [allstates, setAllstates] = useState([])

    const AllStates = [
        {
            "Id": "1",
            "Name": "Andhra Pradesh",
            "value": "0"
        },
        {
            "Id": "2",
            "Name": "Arunachal Pradesh",
            "value": "0"

        },
        {
            "Id": "3",
            "Name": "Assam",
            "value": "0"

        },
        {
            "Id": "4",
            "Name": "Bihar",
            "value": "0"

        },
        {
            "Id": "5",
            "Name": "Chhattisgarh"
        },
        {
            "Id": "6",
            "Name": "Goa"
        },
        {
            "Id": "7",
            "Name": "Gujarat"
        },
        {
            "Id": "8",
            "Name": "Haryana"
        },
        {
            "Id": "9",
            "Name": "Himachal Pradesh"
        },
        {
            "Id": "10",
            "Name": "Jharkhand"
        },
        {
            "Id": "11",
            "Name": "Karnataka"
        },
        {
            "Id": "12",
            "Name": "Kerla"
        },
        {
            "Id": "13",
            "Name": "Madhya Pradesh"
        },
        {
            "Id": "14",
            "Name": "Maharashtra"
        },
        {
            "Id": "15",
            "Name": "Manipur"
        },
        {
            "Id": "16",
            "Name": "Meghalaya"
        },
        {
            "Id": "17",
            "Name": "Mizoram"
        },
        {
            "Id": "18",
            "Name": "Nagaland"
        },
        {
            "Id": "19",
            "Name": "Odisha"
        },
        {
            "Id": "20",
            "Name": "Punjab"
        },
        {
            "Id": "21",
            "Name": "Rajasthan"
        },
        {
            "Id": "22",
            "Name": "Sikkim"
        },
        {
            "Id": "23",
            "Name": "Tamil Nadu"
        },
        {
            "Id": "24",
            "Name": "Telangana"
        },
        {
            "Id": "25",
            "Name": "Tripura"
        },
        {
            "Id": "26",
            "Name": "Uttarakhand"
        },
        {
            "Id": "27",
            "Name": "Uttar Pradesh"
        },
        {
            "Id": "28",
            "Name": "West Bengal"
        },

    ]

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [formconstituency, setFormconstituency] = useState('');
    const [description, setDescription] = useState('');

    const [stateList,setStateList] = useState('');
    const [constituencyList,setConstituencyList] = useState('');

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
    const stateListChange = (event) =>{
        setStateList(event.target.value);
    };
    const constituencyListChange = (event)=>{
        setConstituencyList(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.send('service_0ebnbnt', 'template_0mfk3og', {
            name: `firstname:${fname} lastname:${lname}`,
            email: `${email}`,
            message: `Mobile:${mobile} Constituency:${formconstituency} Description:${description} Selected State: ${selectedState} Selected Constituency ${selectedConstituency}`
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


    

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 5000)
    }, [])
    
    return (
        <div>
            {/* {
                loading ?
                <ClipLoader 
                color={'#D0021B'} 
                loading ={loading}  
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                :
                <div>
                    <p>Hello</p>
                    <p>ClipLoader loaksdmadf;kld;lk</p>
                </div>

            } */}

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
                            <a href="#">
                                <button type="button" className="reach"
                                 data-toggle="modal"
                                data-target="#get_trained" > Reach out to us
                                    {/* &nbsp;&nbsp;&nbsp; */}
                                    {/* <img src={Cart} class="cart" /> */}
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
                                    <a href="#" class="mob-list__item">Voter Data</a>
                                    <a href="tel:+91 970449297" class="mob-list__item">Contact Us</a>

                                    {/* <a href="#" class="mob-list__item">Contact Us</a> */}
                                    {/* <a href="#" class="mob-list__item">Go to Cart</a> */}
                                    <a href="#">
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
                            <button type="button" className="reach_out_butn"
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

            <div  id ="download_data_inexcel" className="voters_sheet_section3 download_section_main_block">
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
                                <button type="button" className="reach_out_button" data-toggle="modal" data-target="#get_trained">
                                    Reach out to us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img class="votersheet4" src={VooterSheet4} />
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
                            <select className="select" value={country} onChange={changeCountry}
                            >
                                <option>Select State</option>
                                {countries.map((ctr) => {
                                    return (
                                        <option key={ctr.name}>{ctr.name}</option>
                                    )
                                })}
                            </select>

{/* <select className="select" value={country} onChange={changeCountry}
                            >
                                <option>Select State</option>
                                {countries.map((ctr) => {
                                    return (
                                        <option key={ctr.name}>{ctr.name}</option>
                                    )
                                })}
                            </select> */}
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
                                <div className="scrollable-element ">
                                            {countries.map((ctr) => {
                                                return (
                                                    <div className="allstates_list"
                                                        onClick={(event) => {
                                                            changeCountry(event, ctr.name);
                                                            setselectedState(ctr.name);
                                                        }}
                                                        name="Selected_State"
                                                        value={stateList}
                                                        onChange={stateListChange}
                                                        required
                                                    >
                                                        <option> {ctr.name}</option>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                </div>

                            </div>
                            {/* <div class="col-md-6">
                                <div className=" states_block2">
                                    <div className="scrollable-element"
                                     onClick={changeState} 
                                     value={constituencyList}
                                     onChange={changeState}
                                     name="selected_constituency"
                                    >
                                        {states ? states.map((state) => (
                                            <option value={state.dist_id} className="scrollable-element2">{state.dist_name}</option>
                                        )) : null}
                                    </div>
                                </div>
                            </div> */}
                   <div class="col-md-6">
                                    <div className=" states_block2">

                                        {states ? states.map((state) => (
                                            <div className=""
                                                onClick={(event) => { changeState(event,selectedOption);setselectedConstituency(state.dist_name)}}
                                                value={constituencyList}
                                                onChange={changeState}
                                                name="selected_constituency"
                                            >
                                                <option value={state.dist_id} className="scrollable-element2">{state.dist_name}</option>
                                            </div>)) : null}
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
                                {/* <div className="social_icons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>

                    </div> */}
                            </div>


                            <div class="d-flex flex-column flex-md-row footer_flex_main_div">
                                <ul className="footer_list1">
                                    <li>Voters Data</li>
                                    <li>Contact Us</li>
                                </ul>
                                {/* </div> */}
                                {/* <div class="col-md-4">
                                    <div class="footer_list_child2"> */}
                                <ul className="footer_list2">
                                    <li><a href="tel:+91970449297">India - +91 970449297</a></li>
                                    <li><a href="mailto:info@electionmanagementsystem.com">Email : info@electionmanagementsystem.com</a></li>
                                </ul>
                                {/* </div>

                                </div> */}
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
                        <a href="#" class="fa fa-facebook"></a>
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
                aria-labelledby="get_trained" aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div className="modal-content" id="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label='Close'>&times;</button>
                            <h4 class="modal-title" id="get_trained">Fill Your Details</h4>
                        </div>
                        <div class="modal-body">
                            <form ref={form} onSubmit={handleSubmit}
                            // action='https://forms.zohopublic.in/itoconnect/form/ItoConnectLead/formperma/KuFRnT9_kBcIvAlwi6joJFAwVL6qsIniL46PDAjz_iI/htmlRecords/submit'
                            // name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'
                            // action="mailto:saikirankushangala@gmail.com"
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
                                            value={formconstituency}
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



            {/* <form onSubmit={handlesSubmit(submitForm)}>
          <div className="mt-2">
              <button disabled={isSubmitting} className="btn btn-danger">
                {isSubmitting && (
                  <span className="spinner-grow spinner-grow-sm"></span>
                )}
                Submit
              </button>
          </div>
      </form> */}

        </div>


    )
}

export default Layout1