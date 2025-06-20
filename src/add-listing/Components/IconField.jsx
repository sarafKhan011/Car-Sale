import React from 'react'
import {FaClipboardList} from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
import {FaDollarSign} from 'react-icons/fa'
import { MdPriceChange } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { TbCategoryPlus } from "react-icons/tb";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { SiTyper } from "react-icons/si";
import { ImMakeGroup } from "react-icons/im";
import { IoLogoModelS } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { GiMassDriver } from "react-icons/gi";
import { SiTransmission } from "react-icons/si";
import { GiGasStove } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { HiClipboardDocumentList } from "react-icons/hi2";
// import {FaCheckCircle} from 'react-icons/fa'
// import {FaChargingStation} from 'react-icons/fa'
// import {FaIndustry} from 'react-icons/fa'
// import {FaRoad} from 'react-icons/fa'
// import {FaCogs} from 'react-icons/fa'
// import {FaCircle} from 'react-icons/fa'
// import {FaDoorClosed} from 'react-icons/fa'
// import {FaTags} from 'react-icons/fa'
// import {ImPriceTags} from 'react-icons/fa'
// import { FaMoneyCheckDollar } from "react-icons/fa6";








const iconMap = {
FaClipboardList:<FaClipboardList/>,
FaTag:<FaTag/>,
FaDollarSign:<FaDollarSign/>,
ImPriceTags:<ImPriceTags/>,
MdPriceChange:<MdPriceChange />,
TbCategoryPlus:<TbCategoryPlus />,
VscDebugBreakpointConditional:<VscDebugBreakpointConditional />,
SiTyper:<SiTyper />,
ImMakeGroup:<ImMakeGroup />,
IoLogoModelS:<IoLogoModelS />,
GrValidate:<GrValidate />,
GiMassDriver:<GiMassDriver />,
SiTransmission:<SiTransmission />,
GiGasStove :<GiGasStove />,
GiCarDoor:<GiCarDoor />,
BiSolidOffer:<BiSolidOffer/>,
HiClipboardDocumentList:<HiClipboardDocumentList />

}
function IconField({icon}) {
  return (
    <div className='text-cyan-600 bg-blue-100 p-1 rounded-full'>
        {iconMap[icon]}
    </div>
  )
}

export default IconField