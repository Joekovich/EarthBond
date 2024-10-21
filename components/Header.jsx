import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/EarthBond.svg";
import { FaBuilding, FaBook, FaCoins, FaPhone, FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <>
        <header className="bg-green-200 shadow-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div clasName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center max-w-24">
                        <Link href="/">
                         <Image className='h-12 w-12' src={Logo} alt='EarthBond' priority={true}/>
                        </Link>
                    </div>

                    {/* Menu buttons */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className=" text-black hover:text-gray-600 px-3 py-2 text-sm font-medium" >
                         <FaBuilding className='inline mr-1' /> Home
                        </Link>

                        <Link href="/" className=" text-black hover:text-gray-600 px-3 py-2 text-sm font-medium" >
                           <FaBook className="inline mr-1" /> About us
                        </Link>

                        <Link href="/" className="bg-green-900 rounded-2xl text-white hover:text-white px-3 py-2 text-sm font-medium" >
                           <FaCoins className="inline mr-1" /> Get Credits
                        </Link>

                        <Link href="/" className=" text-black hover:text-gray-600 px-3 py-2 text-sm font-medium" >
                           <FaPhone className="inline mr-1" /> Contacts us
                        </Link>
                    </div>

                    <div className="flex-shrink-0 flex items-center max-w-24">
                        <Link href="/" className="bg-gray-100 rounded-full px-3 py-3" >
                           <FaUser className="inline mr-1 h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        </>

     );
}

export default Header;