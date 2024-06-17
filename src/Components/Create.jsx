import "../Styles/create.css"
import { MdCloudUpload } from "react-icons/md";
import { Form, Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import upload from '../images/ocr.json'
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from 'react-loader-spinner';


const apiUrl = process.env.REACT_APP_API_OCR_URL;

function Create() {
    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.target);
        const { newImage } = Object.fromEntries(data.entries());

        console.log(`${newImage.name} Uploaded`);

        data.append("file", newImage, newImage.name);

        const requestOptions = {
            method: 'POST',
            body: data
        };

        try {
            const uploadResponse = await fetch(`${apiUrl}/UploadImages/`, requestOptions);
            const uploadResult = await uploadResponse.json();
            console.log(`${uploadResult.filename} Object created`);

            const translatingObject = {
                "UpdateLanguage": "no",
                "TargetLanguage": "hindi",
                "ImageName": uploadResult.filename
            };

            const translateResponse = await fetch(`${apiUrl}/translate`, {
                method: 'POST',
                body: JSON.stringify(translatingObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const translateResult = await translateResponse.json();
            console.log(translateResult);
            console.log(translateResult.Originaltext);
            console.log(translateResult.Translatedtext);

            if (translateResult) {
                setText(translateResult);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        setErrMsg('');
    }, [text]);

    useEffect(() => {
        if (errMsg) {
            toast.error(errMsg);
        }
    }, [errMsg]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: upload,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="">
            <div className=" h-1/2 flex flex-col justify-center items-center">
                <h1 className="mb-4 text-4xl font-extrabold  tracking-tight text-gray-900 md:text-5xl lg:text-5xl ">Description</h1>
                <p className="mb-6 text-sm md:text-lg font-normal text-gray-500 lg:text-xl px-10 sm:px-16 xl:px-48 dark:text-gray-400">Welcome to Manuscript Reader, an innovative project developed collaboratively by students from KIIT University and Otani University, Japan. This tool digitizes and preserves manuscripts, ensuring easy access and safekeeping of valuable documents. Our partnership aims to protect historical texts by converting them into a secure digital format for future generations.</p>
                <Link to="/team">
                    <Link to="/team" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Visit our team
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </Link>
            </div>

            <div className="flex justify-center mt-10">
                <h1 className="mb-4 text-2xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-4xl ">Upload To Extract Text</h1>
            </div>
            <div className="w-full p-4 h-1/2 flex justify-center ">
                <div className="flex border-2 border-dashed border-[#81b5e0] rounded-xl w-[80%] p-5 bg-[#C0D6E8]">
                    <Form onSubmit={handleSubmit} className="bg-transparent w-full min-h-[40vh]" method="POST" encType='multipart/form-data'>
                        <div className="z-10 w-full lg:flex gap-5 items-center">
                            <div
                                className="lg:w-1/2 flex justify-center items-center"
                                onClick={() => document.getElementById('newImage').click()}
                            >
                                <Lottie
                                    options={defaultOptions}
                                    height={300}
                                    width={300}
                                />
                            </div>
                            <label htmlFor="newImage" className="drop-container" id="dropcontainer">
                                <span className="drop-title">Drop files here</span>
                                or
                                <input type="file" name='newImage' id='newImage' accept='.jpeg, .png, .jpg' required />
                                <button type='submit' className='border-2 border-black flex justify-center items-center gap-2 '><MdCloudUpload />Upload</button>
                            </label>
                        </div>
                    </Form>
                </div>
            </div>
            {
                loading ? (
                    <div className="flex justify-center items-center h-20">
                        <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#81b5e0"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                ) : text ? (
                    <div className=" w-full flex justify-center items-center gap-2">
                        <div className=" min-h-[10vh] w-[70%] flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col gap-2 m-2 ">
                                <span className="font-bold font-serif">Original Text</span>
                                <span>{text.Originaltext}</span>
                            </div>
                            <div className="w-1 border-2"></div>
                            <div className="flex flex-col gap-2  m-2">
                                <span className="font-bold font-serif">Translated Text</span>
                                <span>{text.Translatedtext}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <ToastContainer />
                )
            }
        </div>
    )
}

export default Create