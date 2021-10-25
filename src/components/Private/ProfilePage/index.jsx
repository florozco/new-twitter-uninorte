import React from "react";
import "../../../styles/profile.scss";
import Sidebar from "../Sidebar";
import Feed from "../Timeline/components/Feed";
import Widgets from "../Timeline/components/Widgets";


const ProfilePage = () => {
    return <div className="profile">
        <Sidebar />
        <Feed profile/>
        <Widgets />
    </div>
}

export default ProfilePage;