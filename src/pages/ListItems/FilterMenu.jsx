import React, { useEffect, useState } from 'react'

function FilterMenu() {
    const [rangeInputMinValue, setRangeInputMinValue] = useState('')
    const [rangeInputMaxValue, setRangeInputMaxValue] = useState('')
    const tds = document.querySelectorAll('.tableProductName')
    const tdsPrice = document.querySelectorAll('.tableProductPrice')
    let trs = document.querySelectorAll('tr')

    useEffect(() => {
        if (rangeInputMinValue !== '' && rangeInputMaxValue !== '') {
            for (let element of tdsPrice) {
                if (Number(element.innerHTML.split(' ')[0]) >= rangeInputMinValue && Number(element.innerHTML.split(' ')[0]) <= rangeInputMaxValue) {
                    for (let elmnt of trs) {
                        if (element.parentNode.isEqualNode(elmnt)) {
                            elmnt.style.display = 'table-row'
                        }
                    }
                } else {
                    element.parentNode.style.display = 'none'
                }
            }
        } else {
            for (let elmnt of trs) {
                elmnt.style.display = 'table-row'
            }
        }
    }, [rangeInputMinValue, rangeInputMaxValue])


    const searchTable = (e) => {
        let eventValue = e.target.value
        if (eventValue !== '') {
            for (let element of tds) {
                let elementValue = element.innerText
                if (elementValue.toLowerCase().includes(eventValue.toLowerCase())) {
                    // console.log(`${elementValue} : ${eventValue}`)
                    for (let elmnt of trs) {
                        // console.log(elmnt)
                        if (element.parentNode.isEqualNode(elmnt)) {
                            // console.log(element.parentNode)
                            elmnt.style.display = 'table-row'
                        }
                    }
                } else {
                    element.parentNode.style.display = 'none'
                }
            }
        } else {
            for (let elmnt of trs) {
                elmnt.style.display = 'table-row'
            }
        }
    }
    return (
        <div className='filterMenu col-sm-4 col-lg-3'>
            <div className='filters border p-2'>
                <div className='filterSearch'>
                    <input onChange={(e) => searchTable(e)} className='p-2' type="text" placeholder='??r??n ara' />
                    <div className='searchIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#d96140" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
                {/* <div className='filterBrands'>
                    <h6 className='mt-2'>Markalar</h6>
                    <div className='filterContent p-2'>
                        {[...Array(7)].map((e, i) => (
                            <div key={i} className='d-flex align-items-center'>
                                <input type="checkbox" id={i} />
                                <label className='ps-1' htmlFor={i}>{i}</label>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className='filterPriceBetween'>
                    <h6 className='mt-2'>Fiyat Aral??????</h6>
                    <div className='filterContent p-2'>
                        <div className="p-2">
                            <div className="price-input">
                                <div className="field">
                                    {/* <span>En D??????k</span> */}
                                    <input type="number" className="input-min" placeholder={0} value={rangeInputMinValue}
                                        onChange={(e) => { if (Number(e.target.value) !== 0) { setRangeInputMinValue(Number(e.target.value)) } else { setRangeInputMinValue('') } }}
                                    // onBlur={(e) => {
                                    //     if (rangeInputMaxValue > Number(e.target.value) || rangeInputMaxValue === '' || rangeInputMinValue === '') {
                                    //         setRangeInputMinValue(Number(e.target.value))
                                    //         // setRangeInputMaxValue(Number(e.target.value) + 100)
                                    //     } else {
                                    //         setRangeInputMinValue(rangeInputMaxValue)
                                    //     }
                                    // }} 
                                    />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    {/* <span>En Y??ksek</span> */}
                                    <input type="number" className="input-max" placeholder={10000} value={rangeInputMaxValue}
                                        onChange={(e) => { if (Number(e.target.value) !== 0) { setRangeInputMaxValue(Number(e.target.value)) } else { setRangeInputMaxValue('') } }}
                                    // onBlur={(e) => {
                                    //     if (Number(e.target.value) > rangeInputMinValue || rangeInputMinValue === '') {
                                    //         setRangeInputMaxValue(Number(e.target.value))
                                    //     } else {
                                    //         setRangeInputMaxValue(rangeInputMinValue + 1)
                                    //     }
                                    // }} 
                                    />
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