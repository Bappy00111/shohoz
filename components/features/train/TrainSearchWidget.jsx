'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const TRAIN_CLASSES = [
  { value: '', label: 'Choose a Class' },
  { value: 'AC_B', label: 'AC_B' },
  { value: 'AC_S', label: 'AC_S' },
  { value: 'SNIGDHA', label: 'SNIGDHA' },
  { value: 'F_BERTH', label: 'F_BERTH' },
  { value: 'F_SEAT', label: 'F_SEAT' },
  { value: 'F_CHAIR', label: 'F_CHAIR' },
  { value: 'S_CHAIR', label: 'S_CHAIR' },
  { value: 'SHOVAN', label: 'SHOVAN' },
  { value: 'SHULOV', label: 'SHULOV' },
  { value: 'AC_CHAIR', label: 'AC_CHAIR' },
];

const PAYMENT_LOGOS = [
  { src: '/assets/img/bkash-home.png', alt: 'bkash payment method' },
  { src: '/assets/img/nagad-32.png', alt: 'nagad payment method' },
  { src: '/assets/img/rocket-home.svg', alt: 'rocket payment method' },
  { src: '/assets/img/upay-home.svg', alt: 'upay payment method' },
  { src: '/assets/img/visa-home.png', alt: 'visa payment method' },
  { src: '/assets/img/master-card-home.png', alt: 'mastercard payment method' },
  { src: '/assets/img/amex-home.svg', alt: 'amex payment method' },
  { src: '/assets/img/nexus-debit-home.svg', alt: 'nexus debit payment method' },
];

const SLIDES = [
  {
    image:
      'https://bangladesh-railway.s3-ap-southeast-1.amazonaws.com/production/content-media/BDRAILWAY_TICKET66d3b68a83b1c4cc05aa5b8d1ab3b7ec.jpg',
    alt: 'Bangladesh Railway Home Page Default',
  },
];

export default function TrainSearchWidget() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    doj: '', // YYYY-MM-DD
    travelClass: '',
  });

  const canSubmit = useMemo(() => {
    return Boolean(form.from && form.to && form.doj && form.travelClass);
  }, [form]);

  function onSubmit(e) {
    e.preventDefault();
    console.log('Search payload:', form);
    // এখানে আপনার API call / router push করবেন
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: FORM */}
          <div className=" bg-white p-5 md:p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Train Search
            </h2>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {/* From */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="dest_from"
                    className="text-sm font-medium text-slate-700"
                  >
                    From
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      // Demo: setForm(s => ({...s, from: 'Dhaka'}))
                    }}
                    className="w-full text-left"
                  >
                    <input
                      id="dest_from"
                      name="dest_from"
                      value={form.from}
                      readOnly
                      placeholder="From Station"
                      className="h-11 w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </button>
                </div>

                {/* To */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="dest_to"
                    className="text-sm font-medium text-slate-700"
                  >
                    To
                  </label>

                  <button
                    type="button"
                    onClick={() => {}}
                    className="w-full text-left"
                  >
                    <input
                      id="dest_to"
                      name="dest_to"
                      value={form.to}
                      readOnly
                      placeholder="To Station"
                      className="h-11 w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Date of Journey */}
                <div className="space-y-1.5">
                  <label htmlFor="doj" className="text-sm font-medium text-slate-700">
                    Date of Journey
                  </label>

                  <div className="relative">
                    <input
                      id="doj"
                      name="doj"
                      type="date"
                      value={form.doj}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, doj: e.target.value }))
                      }
                      className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <Image
                        src="/assets/img/calendar.png"
                        alt="calendar"
                        width={18}
                        height={18}
                      />
                    </span>
                  </div>
                </div>

                {/* Choose Class */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="choose_class"
                    className="text-sm font-medium text-slate-700"
                  >
                    Choose Class
                  </label>

                  <select
                    id="choose_class"
                    value={form.travelClass}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, travelClass: e.target.value }))
                    }
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  >
                    {TRAIN_CLASSES.map((c) => (
                      <option key={c.label} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Errors placeholder */}
              <div className="min-h-[20px] text-sm text-red-600">
                {/* এখানে validation error দেখাবেন */}
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="h-11 w-full rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Search Trains
              </button>
            </form>
          </div>

          {/* RIGHT: BANNER */}
          <div className="overflow-hidden rounded-xl  ">
            <div className="relative">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="https://bangladesh-railway.s3-ap-southeast-1.amazonaws.com/production/content-media/BDRAILWAY_TICKET66d3b68a83b1c4cc05aa5b8d1ab3b7ec.jpg"
                  alt={SLIDES[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 md:p-6">
                <div className="text-base font-medium leading-snug text-white md:text-lg">
                  Easy <span className="font-semibold">purchase</span> of{' '}
                  <span className="font-semibold">tickets</span> using
                  <br />
                  online payment method
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {PAYMENT_LOGOS.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex h-9 items-center rounded-md bg-white/95 px-2"
                      title={logo.alt}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={52}
                        height={22}
                        className="h-5 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
