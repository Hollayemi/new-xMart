import React, { Component } from 'react';
import Button from '../elements/Button';
import Card from '../elements/Card';
import InputGroup from '../elements/Input/InputGroup';
import TextAreaGroup from '../elements/Input/TextAreaGroup';
import { FaTimes, FaCheck } from 'react-icons/fa';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            showForm: false,
            Report: false,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
    }

    formHandler = (curr) => {
        this.setState({ showForm: !curr });
    };

    sendReport = (e) => {
        e.preventDefault();
        this.setState({ Report: true });
        this.setState({ showForm: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <main className="w-full h-40 min-h-screen">
                    <div className="w-full h-full website-main-bg-image"></div>
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full -mt-14">
                        <div>
                            <h5 className="text-lg font-bold"> Error 500, </h5>
                        </div>
                        <h1 className="texd-sm">
                            <b className="font-bold">
                                Sorry, it looks like something went wrong
                            </b>
                        </h1>
                        {!this.state.showForm && (
                            <>
                                <div className="w-72 min-w-[200px] h-40 border-blue-600 border-2 rounded-t-lg relative shadow mb-3">
                                    <div className="w-full border-blue-600 border-b-2 h-4 flex items-center absolute top-0">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 ml-3"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-600 ml-1"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-600 ml-1"></div>
                                    </div>
                                    <div className="flex justify-evenly items-center h-full">
                                        {!this.state.Report && (
                                            <>
                                                <div>
                                                    <h2 className="font-bold text-2xl text-blue-600">
                                                        500 ERROR
                                                    </h2>
                                                    <p>Server error</p>
                                                </div>
                                                <i className="w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-red-400 text-white">
                                                    <FaTimes />
                                                </i>
                                            </>
                                        )}
                                        {this.state.Report && (
                                            <>
                                                <div>
                                                    <h2 className="font-bold text-2xl text-blue-600">
                                                        500 ERROR
                                                    </h2>
                                                    <p>Sent, Thanks</p>
                                                </div>
                                                <i className="w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-green-400 text-white">
                                                    <FaCheck />
                                                </i>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="w-60 flex justify-evenly items-center">
                                    <button
                                        className={`p-2 w-32 m-2 text-sm rounded-full outline outline-1 outline-blue-500 text-blue-700 hover:text-gray-200 hover:bg-blue-600`}
                                        onClick={() => window.location.reload()}
                                    >
                                        Reload
                                    </button>
                                    <button
                                        onClick={(curr) =>
                                            this.formHandler(
                                                this.state.showForm
                                            )
                                        }
                                        className={`p-2 w-32 m-2 text-sm rounded-full outline outline-1 outline-blue-500 text-blue-700 hover:text-gray-200 hover:bg-blue-600`}
                                    >
                                        Report
                                    </button>
                                </div>
                            </>
                        )}
                        {this.state.showForm && (
                            <div className="w-2/5 bg-gray-50 min-w-[340px]">
                                <Card>
                                    <h1 className="text-xl text-blue-700 font-bold mb-5">
                                        Let's fix this together
                                    </h1>
                                    <InputGroup label="Name" placeholder=" " />
                                    <InputGroup
                                        label="Email"
                                        placeholder=" "
                                        type="email"
                                    />
                                    <TextAreaGroup label="What Happened" />
                                    <div className="flex justify-between items-center mt-3">
                                        <Button
                                            onClick={(e) => this.sendReport(e)}
                                            btnClass="rounded w-40"
                                        />
                                        <Button
                                            onClick={(curr) =>
                                                this.formHandler(
                                                    this.state.showForm
                                                )
                                            }
                                            btnClass="rounded outline-none border border-gray-200 bg-gray-300"
                                            title="Close"
                                        />
                                    </div>
                                </Card>
                            </div>
                        )}
                    </div>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
