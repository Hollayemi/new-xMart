import { FaAngleRight } from 'react-icons/fa';
import { Placeholder } from 'rsuite';

export const SmallCard = ({ total, icon, info }) => {
    return (
        <div className="w-52 mx-2 my-3 h-20 shadow-md rounded flex items-center justify-evenly cursor-pointer hover:bg-gray-50 bg-white">
            <i className="w-10 h-10 text-2xl ll rounded-full flex items-center justify-center bg-blue-100 text-blue-400">
                {icon}
            </i>
            <div className="flex flex-col ">
                <h5 className="font-bold text-md text-slate-900">{total}</h5>
                <h5 className="text-sm text-gray-400">{info}</h5>
            </div>
        </div>
    );
};

export const ChangeTime = ({ prevDate }) => {
    prevDate = new Date(prevDate);
    let newDate = new Date();
    let timeDiff = newDate.getTime() - prevDate.getTime();
    let period = Math.floor(timeDiff / (1000 * 60));

    let realTime;
    if (period > 60) {
        period = Math.floor(timeDiff / (1000 * 3600));
        if (period > 23) {
            if (period > 720) {
                realTime = Math.floor(period / 30) + ' months ago';
            } else {
                if (Math.floor(Math.floor(period) / 24) > 1) {
                    realTime =
                        Math.floor(Math.floor(period) / 24) + ' days ago';
                } else {
                    realTime = Math.floor(Math.floor(period) / 24) + ' day ago';
                }
            }
        } else {
            realTime = Math.floor(period) + ' hours ago';
        }
    } else {
        if (Math.floor(period) > 59) {
            realTime = Math.floor(period / 60) + ' hours ago';
        } else {
            if (Math.floor(period) > 0) {
                realTime = Math.floor(period) + ' minutes ago';
            } else {
                realTime = ' Just now';
            }
        }
    }

    return realTime;
};

export const Activities = ({ activities, header, title, shopOwner }) => {
    let myActivities;
    if (activities) {
        myActivities = activities.message.map((res, index) => {
            return (
                <div
                    key={index}
                    className="flex w-full px-4 hover:bg-gray-50 mx-2 items-center justify-between py-2 border-b-2"
                >
                    <div>
                        {index === 0 && (
                            <h5 className="font-bold text-md text-slate-900">
                                Hello {shopOwner || 'there'},
                            </h5>
                        )}
                        {res.name !== 'Login' ? (
                            <h5
                                className="text-md text-slate-500 text-md"
                                title={res.info}
                            >
                                You {res.event}d a{' '}
                                {res.event !== 'delete'
                                    ? 'new ' + res.action
                                    : res.action}{' '}
                                {<ChangeTime prevDate={res.createdAt} />}
                            </h5>
                        ) : (
                            <h5 className="text-md text-slate-500 text-md">
                                Last Login was{' '}
                                {<ChangeTime prevDate={res.createdAt} />}
                            </h5>
                        )}
                    </div>
                    <i>
                        <FaAngleRight />
                    </i>
                </div>
            );
        });
    } else {
        myActivities = <Placeholder />;
    }
    return (
        <div className=" w-full h-full relative shadow-md rounded-md overflow-hidden flex flex-col items-center cursor-pointer bg-white">
            <div className="w-full px-4 py-2 h-[60px] flex flex-col justify-center bg-slate-900 ">
                <h5 className="text-md text-slate-300">{header}</h5>
                <p className="text-xs text-slate-500">{title}</p>
            </div>
            {myActivities}
            <div className="absolute left bottom-0 hover:font-bold w-full h-8 bg-slate-100 text-center leading-8">
                View all activities
            </div>
        </div>
    );
};
