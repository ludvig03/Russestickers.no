import { AdjustmentsHorizontalIcon, ArrowPathIcon, BanknotesIcon, TrashIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Slider from 'react-input-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Priskalkulator({id, setProdukter}) {

    const [pris, setPris] = useState(0);
    const [str, setStr] = useState(0.8);
    const [slider, setSlider] = useState({ xmax: 15000, xmin: 1000, xstep: 250, x: 1000});
    const [cm, setCm] = useState(3.8);


    useEffect(() => {
        setPris(((1.86-0.13*Math.log(slider.x))*slider.x)*str+200);
    }, [slider.x, str]);

    useEffect(() => {
        console.log(str)
        if (str === "0.8") {
            setSlider({ xmax: 15000, xmin: 500, xstep: 250, x: 500});
            setCm(3.8);
        } else if (str === "1") {
            setSlider({ xmax: 12000, xmin: 500, xstep: 250, x: 500});
            setCm(6.4);
        } else if (str === "1.3") {
            setSlider({ xmax: 10000, xmin: 300, xstep: 100, x: 300});
            setCm(7.5);
        } else if (str === "3") {
            setSlider({ xmax: 6000, xmin: 300, xstep: 100, x: 300});
            setCm(9);
        } else if (str === "4") {
            setSlider({ xmax: 2000, xmin: 100, xstep: 50, x: 100});
            setCm(12.5);
        } else if (str === "6") {
            setSlider({ xmax: 1000, xmin: 50, xstep: 50, x: 50});
            setCm(25);
        }
    }, [str]);

    useEffect(() => {
        console.log(id)
    }, [id]);



    useEffect(() => {
        setProdukter(produkter => produkter.map(produkt => {
            if (produkt.id === id) {
                return {
                    ...produkt,
                    pris: pris,
                    str: str,
                    antall: slider.x,
                    cm: cm,
                    
                }
            }
            return produkt;
        }))
    }, [pris, str]);







  return (
    <div>
        <div className="bg-white pt-6 md:max-w-2xl mx-auto">
            <div className='mx-auto'>

                <div className='flex'>
                <div>
                    <div className='flex ml-9'>
                        <h1 className="text-lg text-gray-500 font-semibold">Velg en størrelse:</h1>
                        
                    </div>

                    <select value={str} onChange={e=>setStr(e.target.value)} id="str" className='flex ml-9 mt-4 border-2 p-1 rounded-md bg-gray-200'>
                        <option value="0.8">3,8cm</option>
                        <option value="1" selected>6.4cm (standard)</option>
                        <option value="1.3" selected>7.5cm</option>
                        <option value="3">9cm</option>
                        <option value="4">12.5cm</option>
                        <option value="6">25cm</option>
                    </select>
                </div>
                <TrashIcon onClick={()=> {setTimeout(() => {setProdukter(produkter => produkter.filter(produkt => produkt.id !== id))}, 50)}} className='ml-auto w-7 h-7 mt-12 mr-[3.2rem] text-gray-500 hover:cursor-pointer active:scale-75 transition duration-150'/>
                </div>


                <div className='flex mt-6 w-full px-10 mx-auto h-10'>
                <Slider
                    className='flex mx-auto mt-5 mr-4'
                    styles={{
                    track: {
                        width: '100%',
                        height: 8,
                        backgroundColor: '#ccc',
                    },
                    active: {
                        backgroundColor: '#52BEF5',
                    },
                    thumb: {
                        width: 30,
                        height: 30,
                        backgroundColor: '#4e5866',
                    },
                    disabled: {
                        opacity: 0.5,
                    },
                    }}
                    axis="x"
                    xmin={slider.xmin}
                    xmax={slider.xmax}
                    xstep={slider.xstep}
                    x={slider.x}
                    onChange={({ x }) => setSlider(slider => ({ ...slider, x }))}
                />
                <a className='pl-2 w-1/4 mt-auto text-center'>{slider.x} stickers</a>
                </div>

                <div className='flex justify-center mt-1 mb-6 text-md font-semibold text-gray-600'>
                Pris: {Math.round(pris / 50)*50-1} kr
                </div>
                
            </div>
        </div>
        <div>
            <div className='border-b-2 h-6 w-5/6 mx-auto rounded-lg'>
            </div>
        </div>
    </div>
  )
}
