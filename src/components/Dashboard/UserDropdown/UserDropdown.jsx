import ProfilePic from '../../../assets/profile-pic.png'
import './userdropdown.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Toaster, toast } from 'sonner';
import { userContext } from '../../../context/userContext'
import { useContext } from 'react';
function UserDropdown() {
    const [showUserDropdown,  setShowUserDropdown] = useState(false)
    const { logoutUser } = useContext(userContext)
    function handleShow() {
        setShowUserDropdown(!showUserDropdown)
    }
    function handleHelp() {
        toast.error('Actualmente nuestro servicio de ayuda se encuentra fuera de servicio. Nos contactaremos contigo lo antes posible.')
        setShowUserDropdown(false)
    }
    return (
        <section className="user-dropdown-container">
            <section className="visible-part" onClick={handleShow}>
                <img src={ProfilePic} alt="Profile Pic" />
            </section>
            {
                showUserDropdown && <section className="dropdown-part">
                    <section className="inner-dropdown">
                        <button className="dropdown-item" onClick={handleHelp}><MdOutlineHelpOutline size={20} />Centro de ayuda</button>
                        <Link to="/account" className="dropdown-item"><FaRegUser size={20}/> Mi cuenta</Link>
                        <button className="dropdown-item" onClick={logoutUser}><FiLogOut size={20}/>Cerrar sesión en Macaflix</button>
                    </section>
                </section>
            }
            <Toaster richColors theme='dark'/>
        </section>
    )
}
export { UserDropdown }