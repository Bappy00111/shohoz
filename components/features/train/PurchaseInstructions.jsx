import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.shohoz.dtrainpwa";

const INSTRUCTIONS = [
  "Tickets can be bought online ten days in advance.",
  "You can pay for the tickets using mobile financial services: Bkash, Nagad, Rocket, Upay or debit/credit cards: Mastercard, Visa, DBBL Nexus. Other payment options will be available soon.",
  "In case of payment or transaction failure, the deducted amount would be refunded by your bank or MFS provider within 8 business days.",
  "In case money has been deducted from your card / mobile wallet but you have not received a ticket confirmation, the deducted amount would be refunded by your bank or MFS provider within 8 business days.",
  "If you have not received your ticket copy in email, kindly check your Spam / Junk folder. You can also download your ticket copy from the purchase history of your account after you login.",
  "APP_LINK",
  "In case of passengers downloading fake apps or any other app from Google Play which claim to sell train tickets of Bangladesh Railway, the authorities will not take any liability.",
  "20% additional charge for Shovon class seat and 30% additional charge for Snigdha and upper-class seat will be applied in case of purchasing ticket from extra coach.",
];

const SEAT_TYPES = [
  { type: "AC-B (AC Berth)", desc: "AC cabin berth (nighttime)" },
  { type: "AC-S (AC Seat)", desc: "AC cabin seat (daytime)" },
  { type: "Snigdha", desc: "AC chair" },
  { type: "F-Berth (First Class Berth)", desc: "Non-AC cabin berth (nighttime)" },
  { type: "F-Seat (First Class Seat)", desc: "Non-AC cabin seat (daytime)" },
  { type: "F-Chair (First Class Chair)", desc: "Non-AC first-class chair" },
  { type: "S-Chair (Shovan Chair)", desc: "Non-AC chair" },
  { type: "Shovan", desc: "Non-AC flat bench seat" },
  { type: "Shulov", desc: "Non-AC wooden bench seat" },
];

// ✅ Same size icon everywhere
function ListIcon() {
  return (
    <FaArrowCircleRight className="mt-[2px] h-[26px] w-[26px] shrink-0 text-[#0b7a59]" />
  );
}

export default function PurchaseInstructions() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* ✅ LEFT IMAGE (same like screenshot) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Image
              src="https://train.shohoz.com/assets/img/home/instruction-secion-image.png"
              alt="Instruction section image"
              width={520}
              height={520}
              priority
              className="w-[420px] h-auto select-none"
            />
          </div>

          {/* RIGHT CONTENT (same like UI) */}
          <div className="lg:col-span-7">
            <h3 className="text-[18px] font-bold text-[#023623] md:text-[27px]">
              Instructions to Purchase Tickets
            </h3>

            <ul className="mt-3 space-y-4">
              {INSTRUCTIONS.map((item, idx) => {
                if (item === "APP_LINK") {
                  return (
                    <li key={idx} className="flex gap-3">
                      <ListIcon />
                      <p className="text-[14px] leading-[18px] text-slate-900">
                        Download the official{" "}
                        <Link
                          href={PLAY_STORE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-slate-900"
                        >
                          Rail Sheba
                        </Link>{" "}
                        app published by Bangladesh Railway from{" "}
                        <Link
                          href={PLAY_STORE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-slate-900 underline"
                        >
                          Google Play
                        </Link>
                        .
                      </p>
                    </li>
                  );
                }

                return (
                  <li key={idx} className="flex gap-3 items-center">
                    <ListIcon />
                    <p className="text-[15px] font-medium leading-[15px] text-[#023623]">
                      {item}
                    </p>
                  </li>
                );
              })}

              {/* Seat Type Guide + Table */}
              <li className="flex gap-3">
                <ListIcon />
                <div className="w-full">
                  <p className="text-[13px] font-semibold leading-[18px] text-slate-900">
                    Seat Type Guide (for better understanding before purchase):
                  </p>

                  <div className="mt-2 w-full max-w-[520px] overflow-hidden border border-slate-300">
                    <table className="w-full border-collapse text-left text-[12px]">
                      <thead>
                        <tr className="bg-[#0b7a59] text-white">
                          <th className="border border-[#0b7a59] px-3 py-2 font-semibold">
                            Seat Type
                          </th>
                          <th className="border border-[#0b7a59] px-3 py-2 font-semibold">
                            Description
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {SEAT_TYPES.map((row) => (
                          <tr key={row.type} className="bg-white">
                            <td className="border border-slate-300 px-3 py-2 text-slate-900">
                              {row.type}
                            </td>
                            <td className="border border-slate-300 px-3 py-2 text-slate-900">
                              {row.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
