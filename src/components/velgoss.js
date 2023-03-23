import { AdjustmentsHorizontalIcon, ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Banebrytende pris',
    description:
      'Hos oss kan vi garantere en pris som er langt lavere enn hos andre. Vi har også en prisgaranti, så hvis du finner et bedre tilbud fra en norsk forhandler, så matcher vi det',
    icon: BanknotesIcon,
  },
  {
    name: 'Kvalitetssikret',
    description:
      'Klistremerkene våres er produsert i høykvalitet vinyl, og er derfor slitesterke og holdbare',
    icon: LockClosedIcon,
  },
  {
    name: 'Tilpasset',
    description:
      'Vi tilpasser oss deres ønsker og produserer klistremerker som passer deres behov',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Rask leveranse',
    description:
      'Leveransen på klistremerkene er rask, og vi leverer innen tre uker inkludert oppsett, produksjon og shipping',
    icon: PaperAirplaneIcon,
  },
]

export default function Velgoss() {
  return (
    <div className="bg-white pt-24 pb-8 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#473b2b]">Du bestemmer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vi ordner alt fra A til Å
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Har dere noen ønsker utenom det vanlige? Vi kan produsere gjennomsiktige, metalliske, holografiske, og glitterklistermerker
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute mt-1 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#473b2b]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
