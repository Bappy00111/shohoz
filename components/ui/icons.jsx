// components/ui/icons.jsx
import {
  FaBus,
  FaPlane,
  FaTrain,
  FaShip,
  FaCalendarAlt,
  FaTree,
  FaBars,
  FaTimes,
  FaPercent,
  FaShieldAlt,
  FaBan,
  FaTicketAlt,
  FaHeadset,
  FaPhoneAlt,
} from "react-icons/fa";

export function BusIcon(props) { return <FaBus {...props} />; }
export function AirIcon(props) { return <FaPlane {...props} />; }
export function TrainIcon(props) { return <FaTrain {...props} />; }
export function LaunchIcon(props) { return <FaShip {...props} />; }
export function EventIcon(props) { return <FaCalendarAlt {...props} />; }
export function ParkIcon(props) { return <FaTree {...props} />; }

export function MenuIcon(props) { return <FaBars {...props} />; }
export function CloseIcon(props) { return <FaTimes {...props} />; }

// Drawer extra items
export function DealsIcon(props) { return <FaPercent {...props} />; }
export function InsuranceIcon(props) { return <FaShieldAlt {...props} />; }
export function CancelIcon(props) { return <FaBan {...props} />; }
export function ReservationIcon(props) { return <FaTicketAlt {...props} />; }
export function SupportIcon(props) { return <FaHeadset {...props} />; }
export function PhoneIcon(props) { return <FaPhoneAlt {...props} />; }
