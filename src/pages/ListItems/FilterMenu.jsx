import React, { useEffect } from 'react'

function FilterMenu() {
    // const [rangeValue, setRangeInput] = useState(0)
    useEffect(() => {
        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if ((maxVal - minVal) < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

    }, [])

    return (
        <div className='filterMenu col-sm-4 col-lg-3'>
            <div className='filters border p-2'>
                <div className='filterSearch'>
                    <input className='p-2' type="text" placeholder='kategoride ara' />
                    <div className='searchIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#d96140" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
                <div className='filterBrands'>
                    <h6 className='mt-2'>Markalar</h6>
                    <div className='filterContent p-2'>
                        {[...Array(7)].map((e, i) => (
                            <div key={i} className='d-flex align-items-center'>
                                <input type="checkbox" id={i} />
                                <label className='ps-1' htmlFor={i}>{i}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='filterPriceBetween'>
                    <h6 className='mt-2'>Fiyat Aralığı</h6>
                    <div className='filterContent p-2'>
                        <div className="wrapper p-2">
                            <div className="price-input">
                                <div className="field">
                                    <span>Min</span>
                                    <input type="number" className="input-min" value="2500" />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    <span>Max</span>
                                    <input type="number" className="input-max" value="7500" />
                                </div>
                            </div>
                            <div className="slider">
                                <div className="progress"></div>
                            </div>
                            <div className="range-input">
                                <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
                                <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu