import React from 'react'
import './SubNavbar.css'

function SubNavbar() {
    // const categorys = [{
    //     "TELEFON": [
    //         {
    //             "Akıllı Telefon": ['Xiaomi Telefon', 'Huawei Telefon', 'Samsung Telefon', 'iPhone Telefon']
    //         },
    //         "Tuşlu Telefon",
    //         "Telsiz Telefon",
    //         "Kulaklık",
    //         "Akıllı Saat",
    //         "PowerBank",
    //         "Şarj Aleti",
    //         "Sarj Kablosu",
    //         "Santral",
    //         "Sanal Gerçeklik Gözlüğü"
    //     ]
    // },
    // {
    //     "EV-YAŞAM-BAHÇE": [
    //         {
    //             "Beyaz Eşya": [{
    //                 "Yıkama-Kurutma": ['Bulaşuk Makinesi', "Çamaşır Makinesi", "Kurutma Makinesi"],
    //                 "Soğutma-Dondurma": ['Buzdolabı', 'Derin Dondurucu', 'Su Sebili'],
    //                 "Pişirme": ['Ocak', 'Fırın', 'Mini Fırın', "Mikrodalga Fırın", "Davlumbaz ve Aspiratör"]
    //             }]
    //         }
    //     ]
    // }]
    const subNavbarItems = ['TELEFON', 'EV-YAŞAM-BAHÇE', 'BİLGİSAYAR-TABLET']
    // console.log(categorys)
    return (
        <div className='subNavbar'>
            {subNavbarItems.map((e, i) => (
                <div className='subNavbarItems p-2'>
                    <p>{e}</p>
                </div>
            ))}
            <div className='subNavbarDropDown'>
                asd
            </div>
        </div>
    )
}

export default SubNavbar