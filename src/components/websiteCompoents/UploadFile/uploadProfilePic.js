import React from 'react';
import { InputFile } from '../../elements/Input/InputFile';
import { FaPlus, FaUser } from 'react-icons/fa';
import { Avatar } from './avatar';
import DividerPanel from '../../elements/DividerPanel';
const UploadProfilePic = ({ formData, updateValue }) => {
    const imageHandler = (e) => {
        let preImg = null;
        let exactType = e.target.files[0].type.split('/');
        if (exactType[0] === 'image') {
            preImg = [URL.createObjectURL(e.target.files[0])];
            console.log(preImg[0]);
            updateValue(preImg[0], 'avatar');
        }
    };
    return (
        <div>
            {formData.avatar && (
                <>
                    <img
                        src={formData.avatar}
                        alt="imageHere"
                        className="w-32 h-32 rounded-full bg-slate-50"
                    />
                    <InputFile
                        label="add picture"
                        icon={<FaPlus />}
                        name="uploadProfilePic2"
                        onChange={(e) => imageHandler(e)}
                    />
                </>
            )}
            {!formData.avatar && (
                <>
                    <h5 className="w-32 h-32 relative rounded-full bg-slate-100 flex items-center justify-center text-5xl text-gray-400">
                        <FaUser />
                    </h5>
                    <InputFile
                        label="add picture"
                        icon={<FaPlus />}
                        name="uploadProfilePic2"
                        onChange={(e) => imageHandler(e)}
                    />
                </>
            )}
            <DividerPanel text="OR" />
            <div className="flex w-full justify-center items-center">
                {Avatar.map((res, index) => {
                    return (
                        <img
                            src={res}
                            key={index}
                            alt="Avatar"
                            className="w-14 h-14 rounded-full mx-1"
                            onClick={(avatar) => updateValue(res, 'avatar')}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default UploadProfilePic;
