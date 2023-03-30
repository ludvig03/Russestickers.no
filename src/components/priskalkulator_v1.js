import { AdjustmentsHorizontalIcon, ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Slider from 'react-input-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Priskalkulator({pris, str, antall, setProdukter}) {

/*     const [state, setState] = useState({ x: 1000});
    const [pris, setPris] = useState(0);
    const [str, setStr] = useState(0.8); */


    useEffect(() => {
        setPris(((1.86-0.13*Math.log(state.x))*state.x)*str);
    }, [state.x, str]);





  return (
    <div>
        <div className="bg-white pt-16 sm:py-28 md:pt-16 md:pb-0 md:max-w-2xl mx-auto">
            <div className='mx-auto'>


                <div className='flex justify-center'>
                    <h1 className="text-lg text-gray-500 font-semibold">Velg en størrelse:</h1>
                </div>

                <select value={str} onChange={e=>setStr(e.target.value)} id="str" className='flex mx-auto mt-4 border-2 p-1 rounded-md bg-gray-200'>
                    <option value="0.8">3,8cm</option>
                    <option value="0.9" selected>5.1cm</option>
                    <option value="1" selected>6.4cm (standard)</option>
                    <option value="1.3" selected>7.5cm</option>
                    <option value="1.6">9cm</option>
                    <option value="2.2">12.5cm</option>
                </select>


                <div className='flex mt-4 w-full px-10 mx-auto'>
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
                    xmin={1000}
                    xmax={15000}
                    xstep={250}
                    x={state.x}
                    onChange={({ x }) => setState(state => ({ ...state, x }))}
                />
                <a className='pl-2 w-1/4 mt-auto text-center'>{state.x} stickers</a>
                </div>

                <div className='flex justify-center mt-2 text-xl font-semibold text-gray-600'>
                Vår pris: {Math.round(pris / 50)*50-1} kr
                </div>
                <div className='flex justify-center mt-1 mb-12 text-xs font-semibold text-gray-400'>
                Markedspris: {Math.round(pris*1.9 / 50)*50-1} kr
                </div>
                

            </div>
        </div>
        <div>
            <div className='border-b-2 mb-4 w-1/2 mx-auto'>
            </div>
        </div>
    </div>
  )
}
