import React from 'react';

const Avatar = ({id, changeAvatar}) => {

    return (
        <img onClick={()=>changeAvatar(id)} src={process.env.PUBLIC_URL + `/avatars/avatar${id}.svg`} alt="avatar" className="mb-4 h-32 w-32 hover:scale-110 transform transition duration-300 cursor-pointer" />
    );
}

export default Avatar;