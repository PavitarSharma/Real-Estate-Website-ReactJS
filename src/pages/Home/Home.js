import { useEffect, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid'
import "./Home.css"
import items from "../../constants/data.json"




const Home = () => {
    // eslint-disable-next-line 
    const [properties, setProperties] = useState(items)
    const [search, setSearch] = useState("")
    const [filteredResults, setFilteredResults] = useState([]);
   


    useEffect(() => {
        setFilteredResults(properties)
    }, [properties])

    const searchItems = (event) => {
        setSearch(event.target.value);

        if (search !== "") {
            const filterData = properties.filter((property) => {
                return Object.values(property.title)
                    .join("")
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });

            setFilteredResults(filterData);
        } else {
            setFilteredResults(properties);
        }
    };



    const handleSearchProperty = (priceArray, type) => {
        let updatedProperty = properties

        // price
        let price = priceArray.map(price => {
            return parseInt(price)
        })
        let minPrice = Math.min(...price);

        let maxPrice = Math.max(...price);


        updatedProperty = properties.filter((property) => property.price >= minPrice && property.price <= maxPrice);



        //type
        updatedProperty = properties.filter((property) => property.houses === type);




        setFilteredResults(updatedProperty)
      
        localStorage.setItem("properties", JSON.stringify(updatedProperty))
  

    }

    

    return (
        <div>

            <Filters
                search={search}
                searchItems={searchItems}
                handleSearchProperty={handleSearchProperty}
                filteredResults={filteredResults}
            />


            <div className="card__container">
                {

                    filteredResults.filter(value => {
                        if (search !== "") {
                            return value.title
                                .toLowerCase()
                                .includes(search.toLowerCase());
                        }

                        return value
                    })
                        .map((property) => (
                            <PropertyGrid key={property.id} property={property} />
                        ))
                }
            </div>
        </div>
    )
}

export default Home