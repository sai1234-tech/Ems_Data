import React from 'react'
import {PRODUCTS} from '../Components/data'
import Layout1 from '../Components/Layout1'
function StateList() {
  return (
    <div>

        <div>
            {
            PRODUCTS.map((product)=>{
                return(
                    <Layout1 data={product}/>
                )
            })
            }
        </div>

    </div>
  )
}

export default StateList