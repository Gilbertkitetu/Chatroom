import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';


const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }


    return  (
        <div className="chats-page">
            <div style="nav-bar">
                <div className="logo-tab">
                    Chatroom
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
            height="calc(100vh - 66px)"
            projectId="ca2855de-8c6a-4fa6-8297-4a996497d5ed"
            userName="."
            userSecret="."
            />
        </div>
    );
}

export default Chats;