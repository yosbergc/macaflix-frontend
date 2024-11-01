import ProfilePic from '../../../assets/profile-pic.png'
import './userdropdown.css'
function UserDropdown() {
    return (
        <section className="user-dropdown-container">
            <section className="visible-part">
                <img src={ProfilePic} alt="Profile Pic" />
            </section>
        </section>
    )
}
export { UserDropdown }