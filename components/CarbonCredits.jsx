import Image from "next/image";
import Link from "next/link";
import Solar from "@/assets/images/Carbon-Cr.jpg";
import Panel from "@/assets/images/Carbon+Credit.jpg";
import Farm from "@/assets/images/farming.png";
import Energy from "@/assets/images/enerny.jpg";
import Power from "@/assets/images/star.jpg";
import Stock from "@/assets/images/stock-broker.png";
import Work from "@/assets/images/work-stress.png";
import Contact from "@/assets/images/web-development.png";
import { FaDotCircle } from "react-icons/fa";


const CarbonCredits = () => {
    return (
        <>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-inherit p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl text-left font-bold text-black md:text-3xl">
                        Carbon Credits
                    </h2>

                    <p className="text-left">is the game changer</p>

                    <p className="hidden text-black text-left sm:mt-4 sm:block">
                        Carbon credits are instruments that monetize quantifiable
                        reductions in greenhouse gas emissions
                        achieved by certified climate action projects.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <Link
                        href="/"
                        className="inline-block rounded-2xl border border-white bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-300 focus:outline-none focus:ring focus:ring-yellow-400">
                        Get Carbon Credits
                        </Link>
                    </div>
                    </div>
                </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <Image
                        alt="carbon deal"
                        src={Solar}
                        className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />

                        <Image
                        alt="Solar panel"
                        src={Panel}
                        className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />
                    </div>
                </div>
              </div>
            </section>


            <section className="overflow-hidden bg-inherit sm:grid sm:grid-cols-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <Image
                alt=""
                src={Farm}
                className="h-27 w-27 object-cover sm:h-auto rounded-lg"
            />


            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    EarthBond secures your future
                </h2>

            <p className="hidden text-left text-black-500 md:mt-4 md:block">
                Each step of evolution Carbon credits are instruments that monetize quantifiable reductions in greenhouse gas emissions achieved by certified climate action projects.
            </p>

                </div>
            </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="text-xl border-black bg-green-100 rounded-lg">
                        <Image alt="achievements" src={Energy} className="h-27 w-27 object-cover px-3 py-3 sm:px-7 lg:px-9 sm:h-auto" />
                        <h2 className="px-3 py-3 sm:px-7 lg:py-3 font-bold text-left text-black">Lorem ipsum dolor</h2>
                        <p className="px-3 py-3 sm:px-6 lg:py-6 text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id illo illum voluptas quia aliquam fugit quod reiciendis fuga similique delectus cum voluptatum.</p>
                    </div>
                    <div className="text-xl border-black bg-green-100 rounded-lg">
                        <Image alt="achievements" src={Power} className="h-27 w-27 object-cover px-3 py-3 sm:px-7 lg:px-9 sm:h-auto" />
                        <h2 className="px-3 py-3 sm:px-7 lg:py-3 font-bold text-left text-black">Lorem ipsum dolor</h2>
                        <p className="px-3 py-3 sm:px-6 lg:py-6 text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id illo illum voluptas quia aliquam fugit quod reiciendis fuga similique delectus cum voluptatum.</p>
                    </div>
                    <div className="text-xl border-black bg-green-100 rounded-lg">
                        <Image alt="achievements" src={Stock} className="h-27 w-27 object-cover px-3 py-3 sm:px-7 lg:px-9 sm:h-auto" />
                        <h2 className="px-3 py-3 sm:px-7 lg:py-3 font-bold text-left text-black">Lorem ipsum dolor</h2>
                        <p className="px-3 py-3 sm:px-6 lg:py-6 text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id illo illum voluptas quia aliquam fugit quod reiciendis fuga similique delectus cum voluptatum.</p>
                    </div>
                    <div className="text-xl border-black bg-green-100 rounded-lg">
                        <Image alt="achievements" src={Work} className="h-27 w-27 object-cover px-3 py-3 sm:px-7 lg:px-9 sm:h-auto" />
                        <h2 className="px-3 py-3 sm:px-7 lg:py-3 font-bold text-left text-black">Lorem ipsum dolor</h2>
                        <p className="px-3 py-3 sm:px-6 lg:py-6 text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id illo illum voluptas quia aliquam fugit quod reiciendis fuga similique delectus cum voluptatum.</p>
                    </div>
                </div>
            </section>


            {/* Statistics section */}
            <section className="mx-6 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-inherit grid grid-cols-3 gap-7 px-5 ml-48 mt-36 sm:px-6 lg:px-8">
                    <div className="rounded-lg p-20 flex-row text-xs">
                        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2em", "--color": "purple" }} role="progressbar">
                            456
                        </div>
                        <FaDotCircle className="inline mr-1 mt-5 overflow-hidden" />Total solar energy generated per installation
                    </div>
                    <div className="rounded-lg p-20 flex-row text-xs">
                        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2em", "--color": "green" }} role="progressbar">
                            536
                        </div>
                        <FaDotCircle className="inline mr-1 mt-5 overflow-hidden" />Total tCO2 offset per installation
                    </div>
                    <div className="rounded-lg p-20 flex-row text-xs">
                        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2em", "--color": "pink" }} role="progressbar">
                            843
                        </div>
                        <FaDotCircle className="inline mr-1 mt-5 overflow-hidden" />Average monthly energy output per installation
                    </div>
                </div>
            </section>


                               {/* Contact Section */}
            <section className="mx-auto max-w-7xl px-4 flex items-center sm:px-8 lg:px-8 mt-24">
                <div className="grid grid-cols-2 gap-4 rounded-lg border-black">
                    <Image alt="contact" src={Contact} className="h-27 w-27 object-cover sm:h-auto" />
                       <div className="bg-white rounded-xl">
                          <div className="p-8 shadow-lg">
	                          <form className="space-y-4">
		                          <div className="w-full">
			                          <label className="sr-only" htmlFor="name">Name</label>
			                          <input className="input input-solid max-w-full" placeholder="Name" type="text" id="name" />
		                          </div>

		                          <div className="grid grid-cols-2 sm:grid-rows-2 gap-4 sm:grid-cols-2">
			                          <div>
				                          <label className="sr-only" htmlFor="email">Email</label>
				                          <input className="input input-solid" placeholder="Email address" type="email" id="email" />
			                          </div>

			                          <div>
				                          <label className="sr-only" htmlFor="phone">Phone</label>
				                          <input className="input input-solid" placeholder="Phone Number" type="tel" id="phone" />
			                          </div>
		                          </div>

		                          <div className="w-full">
			                          <label className="sr-only" htmlFor="message">Message</label>

			                          <textarea className="textarea textarea-solid max-w-full" placeholder="Message" rows="8" id="message"></textarea>
		                          </div>

		                          <div className="mt-4">
			                          <button type="button" className="rounded-lg btn btn-primary btn-block">Send Enquiry</button>
		                          </div>
	                          </form>
                          </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default CarbonCredits;