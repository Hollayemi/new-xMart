import React, { useState } from 'react';
import { Tooltip, Whisper } from 'rsuite';
import { InputFile } from '../../../components/elements/Input/InputFile';
import { FaInfoCircle, FaPlus, FaTimes } from 'react-icons/fa';

const ImagePreview = ({ fileList, setFileList }) => {
    const [preview, setPreview] = useState({ images: [] });
    const imageHandler = (e) => {
        let preImg = null;
        let exactType = e.target.files[0].type.split('/');
        if (exactType[0] === 'image') {
            for (let index = 0; index < e.target.files.length; index++) {
                preImg = [URL.createObjectURL(e.target.files[index])];
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFileList(reader.result, 'image');
                };
                reader.readAsDataURL(e.target.files[index]);
                let newValue = {};
                newValue = { ...preview.images.push(preImg) };
                setPreview({
                    ...preview,
                    ...newValue,
                });
            }
        }
    };
    let pictures = null;
    if (fileList.length !== 0) {
        pictures = preview.images.map((res, index) => {
            return (
                <div
                    className="flex items-center border px-2 m-1 py-1"
                    key={index}
                >
                    <div>
                        <img
                            src={res}
                            alt="img_here"
                            className="h-12 w-12 rounded-md"
                        />
                    </div>
                    <div className="flex items-center justify-between px-3 w-5/6">
                        <p className="ml-12">Image {index + 1}</p>
                        <p
                            className="ml-12 font-light"
                            onClick={() => setFileList(res, 'removeImg')}
                        >
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
                        name="kemImage"
                        filename="kemImage"
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
                            <h5 className="text-left leading-5">
                                Only image with no or white background is
                                accepted, you can remove background here{' '}
                                <a
                                    className="text-blue-500 underline"
                                    target="_blank"
                                    href="https://remove.bg"
                                    rel="noreferrer"
                                >
                                    remove.bg
                                </a>
                            </h5>
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
