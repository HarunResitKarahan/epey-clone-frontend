import React, { useState } from 'react'

function FilterMenu() {
    const [rangeInputMinValue, setRangeInputMinValue] = useState(0)
    const [rangeInputMaxValue, setRangeInputMaxValue] = useState(10000)
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
                        <div className="p-2">
                            <div className="price-input">
                                <div className="field">
                                    {/* <span>En Düşük</span> */}
                                    <input type="number" className="input-min" placeholder={rangeInputMinValue} min={rangeInputMinValue} max={rangeInputMaxValue - 1} value={rangeInputMinValue} onChange={(e) => {
                                        if (rangeInputMaxValue > Number(e.target.value)) {
                                            setRangeInputMinValue(Number(e.target.value))
                                        } else {
                                            setRangeInputMinValue(rangeInputMaxValue - 1)
                                        }
                                    }} />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    {/* <span>En Yüksek</span> */}
                                    <input type="number" className="input-max" placeholder={rangeInputMaxValue} min={rangeInputMinValue} max={rangeInputMaxValue} value={rangeInputMaxValue} onChange={(e) => {
                                        if (Number(e.target.value) > rangeInputMinValue) {
                                            setRangeInputMaxValue(Number(e.target.value))
                                        } else {
                                            setRangeInputMaxValue(rangeInputMinValue + 1)
                                        }
                                    }} />
                                </div>
                            </div>
                            {/* <div className="slider mt-4">
                                <div className="progress"></div>
                            </div> */}
                            {/* <div className="range-input">
                                <input type="range" className="range-min" min={0} max={10000} value={2500} step="100" onChange={() => rangeOnChange()} />
                                <input type="range" className="range-max" min={0} max={10000} value={7500} step="100" onChange={() => rangeOnChange()} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu