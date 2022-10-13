import { useState } from 'react'
import "./Filters.css"
import { RiArrowDropDownLine } from "react-icons/ri"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { MdOutlineDateRange } from "react-icons/md"
import { useNavigate } from "react-router-dom"




const Filters = ({ search, searchItems, handleSearchProperty, filteredResults }) => {
    const navigate = useNavigate()
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [isActiveType, setIsActiveType] = useState(false)
    const [isActivePrice, setIsActivePrice] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState("")
    const [selectedType, setSelectedType] = useState("")

    const optionsType = ["Residental", "Commercial", "Land", "Luxury"]
    const optionsPrice = ["$500-$2500", "$2500-$5000", "$5000-$8000", "$8000-$12000"]


    const handleSearch = (event) => {
        event.preventDefault()
        let priceArray = selectedPrice.replaceAll("$", "")
        let price = priceArray.split("-")

        if (selectedPrice && selectedType) {
            handleSearchProperty(price, selectedType.toLowerCase())
            navigate("/hotel", { state: { destination, date, selectedType, selectedPrice } })
        } else {
            alert("Select for Search")
        }
    }

    return (
        <div className="filter__section">
            <div className="filters">
                <div className="filters__search">
                    <h1>Search properties to rent</h1>
                    <div className="filters__searchInput">
                        <input
                            type="text"
                            value={search}
                            onChange={searchItems}
                            placeholder='Search with Search Bar'
                        />
                        <RiArrowDropDownLine className="filters__searchIcon" size={30} />
                    </div>
                </div>

                <form onSubmit={handleSearch}>
                    <div >
                        <div className="filters__searchContainer">
                            <div className="filters__formControl">
                                <span>Location</span>
                                <input
                                    type="text"
                                    value={destination}
                                    className="form__destination"
                                    onChange={(event => setDestination(event.target.value))}
                                    placeholder="New York, USA" />
                            </div>

                            <div className="filters__formControl">
                                <span>When</span>
                                <div className="form-control form__date">
                                    <span onClick={() => setOpenDate(!openDate)}>{`${date[0].key ? `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                        date[0].endDate,
                                        "MM/dd/yyyy"
                                    )}` : "Select Move-in Date"}`}</span>
                                    <MdOutlineDateRange />

                                    {
                                        openDate && <div className="form__dateInput">
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={(item) => setDate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                className="date"
                                                minDate={new Date()}
                                            />

                                        </div>
                                    }
                                    <div className="line"></div>
                                </div>
                            </div>

                            <div className="filters__formControl">
                                <span >Price</span>
                                <div className="dropdown">
                                    <div
                                        className="dropdown-btn"
                                        onClick={(event) => setIsActivePrice(!isActivePrice)}>{selectedPrice ? selectedPrice : "Select Price"}
                                        <RiArrowDropDownLine size={30} />
                                        <div className="line"></div>
                                    </div>
                                    {
                                        isActivePrice && (
                                            <div className="dropdown-content">
                                                {
                                                    optionsPrice.map(option => (
                                                        <div key={option} onClick={(event) => {
                                                            setSelectedPrice(option)
                                                            setIsActivePrice(false)
                                                        }}
                                                            className="dropdown-item">{option}</div>
                                                    ))
                                                }


                                            </div>
                                        )
                                    }


                                </div>


                            </div>

                            <div className="filters__formControl">
                                <span>Property Type</span>
                                <div className="dropdown">
                                    <div className="dropdown-btn" onClick={(event) => setIsActiveType(!isActiveType)}>{selectedType ? selectedType : "Houses"}
                                        <RiArrowDropDownLine size={30} />
                                        <div className="line"></div>
                                    </div>
                                    {
                                        isActiveType && (
                                            <div className="dropdown-content">
                                                {
                                                    optionsType.map(option => (
                                                        <div key={option} onClick={(event) => {
                                                            setSelectedType(option)
                                                            setIsActiveType(false)
                                                        }}
                                                            className="dropdown-item">{option}</div>
                                                    ))
                                                }

                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            <div>

                                <button type="submit" className="filter__searchButton">Search</button>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filters