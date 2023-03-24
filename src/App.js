import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ArrowDownCircleIcon, ArrowDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Velgoss from './components/velgoss'
import Priskalkulator from './components/priskalkulator'
import Footer from './components/footer'
import Scroll from 'react-scroll-to-element';


const navigation = [
  { name: 'Produkt', href: '#' },
  { name: 'Priskalkulator', href: '#' },
  { name: 'Bestilling', href: '#' },
  { name: 'Shipping', href: '#' },
]

export default function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div>
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Russestickers.no</span>
              <img
                className="h-16 w-auto"
                src="https://i.ibb.co/18XRb9Q/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
              <a href="#produkt" onClick={() => console.log("yo")} className="text-sm font-semibold leading-6 text-gray-900">
                Produkt
              </a>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Priskalkulator
              </a>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Bestilling
              </a>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Shipping
              </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Russestickers.no</span>
                <img
                  className="h-16 w-auto"
                  src="https://i.ibb.co/18XRb9Q/logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl pt-32 pb-16 sm:py-48 lg:py-56">
          <div className="text-center">
            <img className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" src="https://i.ibb.co/8D84dVK/U28w3h-Ms-2x.png">
            </img>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vi leverer kvalitets klistremerker i vinyl og mange størrelser til en fjerdedel av markedspris.

            </p>
            <div className="mt-10 items-center justify-center gap-x-6">
            <Scroll type="class" element="lesmer" offset={-30}>
              <div>
              <button href="#" className="text-lg font-semibold leading-6 text-[#473b2b] hover:cursor-pointer">
                Les mer
              </button>
              <ArrowDownIcon className='w-7 mt-3 mx-auto animate-bounce-slow'/>
              </div>
            </Scroll>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <Priskalkulator />
    <div className='flex mb-10'>
      <div className="flex flex-col items-center justify-center">
        <img src="https://i.ibb.co/QCzKC3p/image0.jpg" className=" mx-auto"></img>
      </div>
      <div className='pr-2 pb-6 my-auto'>
        <p className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tidligere bestilling
        </p>
        <p className="text-sm mr-4 text-gray-600">Her ser du et eksempel på en tidligere bestilling hos oss, på bildet ligger det 250 stickers i størrelse 6cm</p>
      </div>
    </div>
    <Velgoss /> 
    <div>
    <div className="flex flex-col items-center justify-center mt-12">
    <h1 className="text-4xl font-semibold tracking-tight text-[#473b2b] sm:text-6xl">Hvordan betale?</h1>
    <p className="mt-6 text-lg leading-8 text-gray-600 px-8 text-center">
      Etter avtale på instagram kan du vippse den avtalte summen til dette vipps nummeret. Og så sender vi deg en bekreftelse på at vi har mottatt betalingen!
    </p>
    </div>
      <img className="w-72 mx-auto" src="https://i.ibb.co/XyvpSbS/Screenshot-2023-03-23-at-14-25-21.png"></img>
    </div>
    <Footer />
    </div>
  )
}
