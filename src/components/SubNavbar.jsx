import React, { useState } from 'react'
import './SubNavbar.css'
import { useHistory } from "react-router-dom";

function SubNavbar() {
    const [dropDownType, setDropDownType] = useState(undefined)
    const subNavbarItems = ['TELEFON', 'EV-YAŞAM-BAHÇE', 'BİLGİSAYAR-TABLET']
    let parse = require('html-react-parser')
    const telefonSvgs = [
        `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30" height="30" viewBox="0 0 706.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#d96140" stroke="none">
                <path d="M835 12793 c-16 -2 -61 -13 -100 -25 -307 -90 -544 -368 -638 -748
                -20 -81 -21 -116 -24 -792 -3 -462 -7 -708 -14 -708 -5 0 -21 -12 -34 -26
                l-25 -27 0 -229 0 -229 25 -24 c13 -14 29 -25 35 -25 6 0 10 -72 10 -213 l0
                -214 -24 -12 c-44 -24 -46 -43 -46 -417 l0 -355 25 -24 c13 -14 29 -25 35 -25
                6 0 10 -51 10 -145 0 -94 -4 -145 -10 -145 -6 0 -22 -11 -35 -25 l-25 -24 0
                -355 c0 -374 2 -393 46 -417 l24 -12 3 -3356 c3 -3127 4 -3361 20 -3424 100
                -400 328 -671 647 -769 l75 -23 2665 -3 c2370 -2 2674 -1 2742 13 165 33 305
                112 429 242 171 180 271 405 299 674 7 68 10 1352 10 3935 l0 3834 25 0 c14 0
                37 11 50 25 l25 24 0 356 c0 252 -3 363 -12 378 -16 30 -39 46 -65 47 l-23 0
                0 1119 c0 703 -4 1157 -10 1220 -15 144 -51 276 -110 398 -107 225 -280 397
                -477 478 -145 58 32 55 -2855 54 -1454 -1 -2656 -4 -2673 -6z m2748 -291 c20
                -20 27 -39 27 -66 0 -48 -13 -72 -52 -92 -85 -44 -178 49 -134 134 20 40 41
                51 92 52 31 0 46 -6 67 -28z m-1352 -408 c37 -35 46 -82 25 -126 -40 -85 -159
                -89 -201 -8 -59 115 83 223 176 134z m2019 -53 c15 -29 12 -62 -7 -83 -15 -17
                -51 -18 -711 -18 -633 0 -697 1 -714 17 -20 18 -23 54 -8 84 10 19 29 19 720
                19 691 0 710 0 720 -19z m2540 -5641 l0 -4960 -3280 0 -3280 0 0 4960 0 4960
                3280 0 3280 0 0 -4960z m-3145 -5212 c115 -29 250 -137 307 -244 122 -227 48
                -517 -165 -655 -97 -63 -170 -82 -295 -77 -99 3 -113 6 -185 40 -186 89 -290
                253 -290 458 1 148 47 255 156 357 82 77 171 120 282 136 39 6 140 -2 190 -15z"/>
            </g>
        </svg>`,
        `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30" height="30" viewBox="0 0 640.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#d96140" stroke="none">
            <path d="M955 12767 l-33 -33 -6 -214 c-4 -118 -11 -390 -16 -605 -5 -214 -14
            -579 -20 -810 -6 -231 -15 -584 -20 -785 -5 -201 -13 -499 -16 -664 -7 -279
            -8 -299 -26 -303 -17 -5 -18 -34 -18 -739 l0 -734 -157 0 c-215 0 -271 -18
            -313 -100 -20 -39 -20 -66 -20 -1935 0 -2067 -4 -1920 57 -1976 37 -35 66 -49
            97 -49 l26 0 1 -1832 c0 -1382 3 -1841 12 -1866 16 -42 63 -91 104 -108 27
            -12 444 -14 2500 -14 2389 0 2469 1 2509 19 23 10 54 36 70 57 l29 37 3 1789
            2 1788 146 0 c153 0 192 9 214 49 7 13 10 290 10 819 l0 799 -25 25 c-33 33
            -61 38 -216 38 l-129 0 0 120 0 120 145 0 c154 0 193 9 215 49 7 13 10 290 10
            818 l0 799 -31 30 -30 29 -152 2 -152 3 -5 182 c-5 199 -12 227 -67 266 -47
            33 -102 42 -265 42 l-158 0 0 150 0 150 -29 32 -29 33 -404 3 c-222 2 -418 0
            -437 -3 -18 -4 -44 -18 -57 -32 -23 -25 -24 -31 -24 -179 l0 -154 -125 0 -125
            0 0 150 0 150 -29 32 -29 33 -774 3 c-425 2 -788 0 -807 -3 -18 -4 -44 -18
            -57 -32 -23 -25 -24 -31 -24 -179 l0 -154 -185 0 -185 0 0 735 c0 728 0 735
            -20 735 -11 0 -20 7 -20 14 0 35 -80 3219 -82 3289 -3 77 -4 80 -40 113 l-38
            34 -361 0 -361 0 -33 -33z"/>
            </g>
        </svg>`,
        `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30" height="30" viewBox="0 0 1280.000000 1118.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1118.000000) scale(0.100000,-0.100000)"
            fill="#d96140" stroke="none">
            <path d="M6030 11169 c-1368 -81 -2684 -632 -3703 -1549 -718 -645 -1260
            -1428 -1612 -2325 -163 -416 -287 -881 -350 -1317 -55 -385 -56 -415 -64
            -1475 l-7 -992 -36 -39 c-96 -106 -182 -271 -226 -430 l-26 -97 -4 -740 c-3
            -653 -1 -752 13 -840 65 -390 333 -705 702 -828 59 -20 137 -40 173 -44 l65
            -8 7 -83 c16 -194 155 -353 341 -392 37 -7 278 -10 768 -8 713 3 714 3 769 25
            113 46 203 139 252 262 l23 56 3 1765 c2 1204 -1 1787 -8 1834 -22 143 -107
            259 -238 323 l-76 38 -740 3 c-825 3 -791 5 -903 -67 -113 -73 -181 -191 -190
            -333 -5 -72 -8 -78 -28 -78 l-22 0 -6 667 c-8 776 0 993 49 1348 78 567 262
            1161 519 1677 91 181 103 203 203 373 662 1117 1730 1978 2972 2397 906 305
            1919 366 2860 172 688 -142 1353 -420 1935 -809 811 -541 1445 -1262 1879
            -2135 262 -528 434 -1076 515 -1645 54 -375 62 -593 54 -1383 l-6 -662 -22 0
            c-20 0 -23 6 -28 78 -9 142 -77 260 -190 333 -112 72 -78 70 -903 67 l-740 -3
            -76 -38 c-131 -64 -216 -180 -238 -323 -7 -47 -10 -631 -8 -1834 l3 -1765 23
            -56 c49 -123 139 -216 252 -262 55 -22 56 -22 769 -25 490 -2 731 1 768 8 186
            39 325 198 341 392 l7 83 60 7 c201 25 429 140 586 297 158 159 256 352 294
            578 14 86 16 192 13 838 l-4 740 -26 97 c-43 158 -130 324 -224 428 l-33 36
            -6 870 c-6 914 -13 1117 -45 1407 -201 1778 -1202 3403 -2706 4392 -1102 725
            -2404 1073 -3724 994z"/>
            </g>
            </svg>
            `,
        `<svg version="1.0" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30"
                viewBox="0 0 60 60" fill="#d96140" xml:space="preserve">
            <g>
                <path d="M47.521,25H46v-9.706C46,12.375,43.625,10,40.706,10h-0.127l-0.685-1.193c-0.642-1.119-0.981-2.368-0.981-3.613
                    C38.913,2.33,36.306,0,33.101,0H22.899c-3.205,0-5.813,2.33-5.813,5.193c0,1.245-0.34,2.494-0.981,3.613L15.421,10h-0.127
                    C12.375,10,10,12.375,10,15.294v29.412C10,47.625,12.375,50,15.294,50h0.127l0.685,1.193c0.642,1.119,0.981,2.368,0.981,3.613
                    c0,2.863,2.607,5.193,5.813,5.193h10.201c3.205,0,5.813-2.33,5.813-5.193c0-1.245,0.34-2.494,0.981-3.613L40.579,50h0.127
                    C43.625,50,46,47.625,46,44.706V35h1.521C48.888,35,50,33.888,50,32.521v-5.043C50,26.112,48.888,25,47.521,25z M44,44.706
                    C44,46.522,42.522,48,40.706,48H15.294C13.478,48,12,46.522,12,44.706V15.294C12,13.478,13.478,12,15.294,12h25.412
                    C42.522,12,44,13.478,44,15.294V25v10V44.706z"/>
                <path d="M16,21c0.256,0,0.512-0.098,0.707-0.293l4-4c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-4,4
                    c-0.391,0.391-0.391,1.023,0,1.414C15.488,20.902,15.744,21,16,21z"/>
                <path d="M16,26c0.256,0,0.512-0.098,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2,2
                    c-0.391,0.391-0.391,1.023,0,1.414C15.488,25.902,15.744,26,16,26z"/>
                <path d="M19.29,20.29C19.109,20.479,19,20.729,19,21c0,0.27,0.109,0.52,0.29,0.7C19.479,21.89,19.729,22,20,22
                    c0.27,0,0.52-0.11,0.71-0.29C20.89,21.52,21,21.26,21,21s-0.11-0.521-0.29-0.71C20.33,19.92,19.66,19.92,19.29,20.29z"/>
                <path d="M21.293,19.707C21.488,19.902,21.744,20,22,20s0.512-0.098,0.707-0.293l3-3c0.391-0.391,0.391-1.023,0-1.414
                    s-1.023-0.391-1.414,0l-3,3C20.902,18.684,20.902,19.316,21.293,19.707z"/>
                <path d="M24.293,20.293l-9,9c-0.391,0.391-0.391,1.023,0,1.414C15.488,30.902,15.744,31,16,31s0.512-0.098,0.707-0.293l9-9
                    c0.391-0.391,0.391-1.023,0-1.414S24.684,19.902,24.293,20.293z"/>
                <path d="M26.3,18.29C26.109,18.47,26,18.729,26,19c0,0.27,0.109,0.52,0.29,0.71C26.479,19.89,26.74,20,27,20s0.52-0.11,0.71-0.29
                    C27.89,19.52,28,19.26,28,19s-0.11-0.521-0.29-0.71C27.33,17.92,26.66,17.92,26.3,18.29z"/>
                <path d="M29.293,15.293l-1,1c-0.391,0.391-0.391,1.023,0,1.414C28.488,17.902,28.744,18,29,18s0.512-0.098,0.707-0.293l1-1
                    c0.391-0.391,0.391-1.023,0-1.414S29.684,14.902,29.293,15.293z"/></g></svg>
                    `
    ]
    const basliklar = [
        [
            { "header": "Akıllı Telefon", "subheaders": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon'], "svgs": telefonSvgs[0] },
            { "header": "Telsiz", "subheaders": [], "svgs": telefonSvgs[1] },
            { "header": "Kulaklık", "subheaders": [], "svgs": telefonSvgs[2] },
            { "header": "Akıllı Saat", "subheaders": [], "svgs": telefonSvgs[3] }
        ],
        [
            { "header": "Beyaz Eşya", "subheaders": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon'] },
            { "header": "Yapı/Bahçe", "subheaders": ['Batarya', 'Testere', 'Jeneratör', 'Mangal'] },
            { "header": "Mutfak Aletleri", "subheaders": ['Pişiriciler', 'Su Arıtma Cihazı', 'Kahvaltı Takımı', 'Kahve Makinesi'] },
            { "header": "Ev Gereçleri", "subheaders": ['Robot Süpürge', 'Çalışma Koltuğu', 'Valiz', 'Yatak'] }
        ],
        [
            { "header": "Bilgisayarlar", "subheaders": ['Dizüstü Bilgisayar', 'Masaüstü Bilgisayar', 'Tablet', 'Termal Macun'] },
            { "header": "Çevre Bileşenleri", "subheaders": ['Monitör', 'Anakart', 'İşlemci', 'Ekran Kartı'] },
            { "header": "Model ve Ağ", "subheaders": ['Modem', 'Router', 'Menzil Genişletici', 'Kablosuz Adaptör'] },
            { "header": "Depolama", "subheaders": ['SSD Disk', 'Sabit Disk', 'Taşınabilir Disk', 'USB Bellek'] }
        ]
    ]
    let history = useHistory();
    const routeChange = (data) => {
        if (data === undefined) return
        console.log(data)
        history.push({
            pathname: '/Liste',
            state: { category: data }
        });
    }

    const showDropDown = (value) => {
        const subNavbarItems = document.querySelectorAll('.subNavbarItems');
        for (let item of subNavbarItems) {
            item.removeAttribute("style");
        }
        setDropDownType(value)
    }
    const hideDropDown = (value) => {
        setDropDownType(undefined)
        if (value === undefined) {
            const subNavbarItems = document.querySelectorAll('.subNavbarItems');
            for (let item of subNavbarItems) {
                item.removeAttribute("style");
            }
            return
        }
        const subNavbarDropDown = document.querySelector('.subNavbarDropDown')
        const subNavbarItems = document.querySelectorAll('.subNavbarItems')[value];
        subNavbarDropDown.addEventListener('mouseenter', () => {
            showDropDown(value);
            subNavbarItems.style.backgroundColor = 'white';
            subNavbarItems.style.color = '#d96140'
        })
    }
    return (
        <div className='subNavbar'>
            {subNavbarItems.map((e, i) => (
                <div key={i} className='subNavbarItems p-2' onMouseEnter={() => showDropDown(i)} onMouseLeave={() => hideDropDown(i)} >
                    <p>{e}</p>
                </div>
            ))
            }
            {dropDownType !== undefined ?
                <div className='subNavbarDropDown p-2' onMouseLeave={() => hideDropDown()}>
                    <div className='container'>
                        {/* {dropDownType} */}
                        <div className='row justify-content-center'>
                            {basliklar[dropDownType].map((e, i) => (
                                <div key={i} className='col-4 py-2 col-md-3 d-flex flex-column'>
                                    <div className='subNavbarDropDownItems d-flex align-items-center' onClick={() => routeChange(e.header)}>
                                        <div>
                                            {e.svgs !== undefined ? parse(String(e.svgs)) : ''}
                                        </div>
                                        <div className='ms-1' style={{ fontSize: "14px", fontWeight: "500" }}>
                                            {e.header}
                                        </div>
                                    </div>
                                    <div className='ms-4'>
                                        {e.subheaders.map((e1, i1) => (
                                            <p key={i1} className='ms-1' style={{ fontSize: "13px" }}>- {e1}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : ''}
        </div >
    )
}

export default SubNavbar