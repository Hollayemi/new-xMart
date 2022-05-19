import React from 'react';
import { Tooltip, Whisper } from 'rsuite';
import { InputFile } from '../../../components/elements/Input/InputFile';
import { FaInfoCircle, FaPlus, FaTimes } from 'react-icons/fa';

const ImagePreview = ({ fileList, setFileList }) => {
    const imageHandler = (e) => {
        let preImg = null;
        let exactType = e.target.files[0].type.split('/');
        if (exactType[0] === 'image') {
            preImg = [URL.createObjectURL(e.target.files[0])];
            console.log(preImg[0]);
            setFileList(fileList.concat([preImg[0]]));
        }
    };
    let pictures = null;

    if (fileList.length !== 0) {
        pictures = fileList.map((res, index) => {
            return (
                <div className="flex items-center border px-2 m-1">
                    <div>
                        <img
                            src={res}
                            alt="img_here"
                            className="h-12 w-12 rounded-md"
                        />
                    </div>
                    <div className="flex items-center justify-between px-3 w-5/6">
                        <p className="ml-12">Image {index + 1}</p>
                        <p className="ml-12 font-light">
                            <FaTimes />
                        </p>
                    </div>
                </div>
            );
        });
    }
    return (
        <>
            <div className="w-48 flex items-center m-1">
                <div className="w-5/6">
                    <InputFile
                        label="add picture"
                        icon={<FaPlus />}
                        multiple={true}
                        name="uploadProfilePic2"
                        value={[]}
                        onChange={(e) => imageHandler(e)}
                    />
                </div>
                <Whisper
                    placement="right"
                    controlId="control-id-click"
                    trigger="click"
                    speaker={
                        <Tooltip>
                            This is a help <i>tooltip</i>Collection
                            categoryCollection categoryCollection
                            categoryCollection categoryCollection
                            categoryCollection category .
                        </Tooltip>
                    }
                >
                    <h4 className=" mx-4 h-full flex items-center text-center">
                        <FaInfoCircle />
                    </h4>
                </Whisper>
            </div>
            <div>{pictures}</div>
        </>
    );
};

export default ImagePreview;
