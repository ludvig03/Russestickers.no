import { AdjustmentsHorizontalIcon, ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Slider from 'react-input-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Priskalkulator() {

    const [state, setState] = useState({ x: 1000});
    const [pris, setPris] = useState(0);
    const [str, setStr] = useState(0.8);


    useEffect(() => {
        setPris(((1.86-0.13*Math.log(state.x))*state.x)*str);
    }, [state.x, str]);



  return (
    <div className="bg-white pt-16 sm:py-28">
        <div className='mx-auto'>
            <div className='flex ml-6 mb-10'>
                <h1 className="text-3xl text-[#473b2b] font-semibold">Priskalkulator</h1>
            </div>

            <div className='flex justify-center'>
                <h1 className="text-lg text-[#473b2b] font-semibold">Velg en størrelse:</h1>
            </div>

            <select value={str} onChange={e=>setStr(e.target.value)} id="str" className='flex mx-auto mt-4 border-2 p-1 rounded-md bg-gray-200'>
                <option value="0.8">3,8cm</option>
                <option value="0.9" selected>5.1cm</option>
                <option value="1" selected>6.4cm (standard)</option>
                <option value="1.3" selected>7.5cm</option>
                <option value="1.6">9cm</option>
                <option value="2.2">12.5cm</option>
            </select>


            <div className='flex mt-8 w-full px-10 mx-auto'>
            <Slider
                className='flex mx-auto mt-5 mr-4'
                styles={{
                track: {
                    width: '100%',
                    height: 8,
                    backgroundColor: '#ccc',
                },
                active: {
                    backgroundColor: '#9b8365',
                },
                thumb: {
                    width: 30,
                    height: 30,
                    backgroundColor: '#473b2b',
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
            <a className='pl-2 w-1/4 text-center'>{state.x} stickers</a>
            </div>

            <div className='flex justify-center mt-4 mb-12 text-xl font-semibold text-[#473b2b]'>
            Total pris: {Math.round(pris / 50)*50-1} kr
            </div>

        </div>
    </div>
  )
}
