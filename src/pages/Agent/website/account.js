import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DividerPanel from '../../../components/elements/DividerPanel';
import FloatingLabelInput from '../../../components/elements/Input/FloatingLabelInput';
import { completeAgentReg } from '../../../state/slices/agents/signup';

const Account = ({ userId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        userID: userId,
        bank_name: '',
        account_number: '',
        account_name: '',
    });

    let newValue = {};
    function updateValue(newVal, variable) {
        variable === 'username' && (newValue = { username: newVal });
        variable === 'bank' && (newValue = { bank_name: newVal });
        variable === 'account_number' &&
            (newValue = { account_number: newVal });
        variable === 'account_name' && (newValue = { account_name: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
    }
    const finishAgentSetUp = () => {
        completeAgentReg(formData, dispatch, userId, navigate);
    };
    return (
        <div className="relative">
            <button
                onClick={finishAgentSetUp}
                className="absolute top-0 right-4 w-12 h-8 shadow rounded"
            >
                Save
            </button>
            <p className="text-sm font-[200] mb-3 text-slate-600 mt-4">
                Agent Account
            </p>
            <div>
                <div className="w-full px-2">
                    <FloatingLabelInput
                        required={true}
                        label="Agent Name"
                        onChange={(e) =>
                            updateValue(e.target.value, 'username')
                        }
                    />
                </div>
            </div>
            <DividerPanel text=" " />
            <p className="text-sm font-[200] mb-3 text-slate-600 mt-4">
                Bank Account Details
            </p>
            <div className="flex items-center">
                <div className="w-1/2 px-2">
                    <FloatingLabelInput
                        required={true}
                        label="Account Name"
                        onChange={(e) =>
                            updateValue(e.target.value, 'account_name')
                        }
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/2 px-2">
                    <FloatingLabelInput
                        required={true}
                        label="Account Number"
                        type="number"
                        onChange={(e) =>
                            updateValue(e.target.value, 'account_number')
                        }
                    />
                </div>
                <div className="w-1/2 px-2">
                    <FloatingLabelInput
                        required={true}
                        label="Bank"
                        onChange={(e) => updateValue(e.target.value, 'bank')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Account;
