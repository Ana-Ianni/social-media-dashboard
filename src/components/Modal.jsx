import PropTypes from 'prop-types';
import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';
import Chart from './Chart';

const Modal = ({data, setIsModalOpen}) => {
    const { user, followers, interaction, todayFollowers, statusFollowers, icon } = data;

    return (
        <div className="bg-opacity-50 bg-very-dark-blue z-10 flex justify-center items-center fixed top-0 left-0 w-full h-full">
            <div className=" bg-white dark:bg-very-dark-blue rounded-2xl relative w-10/12 sm:w-8/12">
                <div className="bg-pale-blue dark:bg-very-dark-blue-2 pt-10 px-10 pb-5 sm:pt-14 sm:px-14 sm:pb-7 rounded-t-2xl">
                    <button className="absolute top-6 right-6 cursor-pointer text-2xl text-dark-grayish-blue dark:text-white" onClick={() => setIsModalOpen(false)}>&times;</button>
                    <div className="mb-8">
                        <p className="font-bold text-2xl sm:text-3xl text-very-dark-blue mb-4 dark:text-white capitalize">{icon} {interaction}</p>
                        <div className="flex">
                            <img src={`../icon-${icon}.svg`} alt={icon + "logo"} className="mr-2 w-6" />
                            <p className="font-bold text-dark-grayish-blue dark:text-desaturated-blue">{user}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex">
                        <div className='flex items-center justify-between sm:justify-start sm:mr-8'>
                            <span className='font-bold text-3xl sm:text-4xl mr-5 text-dark-grayish-blue dark:text-white'>{followers}</span>
                            <p className="w-full sm:w-20 h-min text-right sm:text-left text-dark-grayish-blue dark:text-white text-sm sm:text-base leading-tight">Total {interaction}</p>
                        </div>
                        <div className='flex justify-between sm:justify-start lg:mr-8'>
                            <span className={"text-3xl sm:text-4xl font-bold flex items-center mr-5 " + (statusFollowers ? 'text-lime-green' : 'text-bright-red')}>
                                <img src={(statusFollowers ? upIcon : downIcon)} className="mr-2 w-4"/>
                                81
                                </span>
                            <p className="text-sm sm:text-base text-right sm:text-left text-dark-grayish-blue dark:text-white leading-tight lg:w-32 ">{statusFollowers ? "New" : "Lost"} {interaction} in the past 10 days</p>
                        </div>
                        <div className='flex justify-between sm:justify-start'>
                            <span className={"text-3xl sm:text-4xl font-bold flex items-center mr-5 " + (statusFollowers ? 'text-lime-green' : 'text-bright-red')}>
                                <img src={(statusFollowers ? upIcon : downIcon)} className="mr-2 w-4"/>
                                {todayFollowers}
                            </span>
                            <p className="text-right sm:text-left text-dark-grayish-blue dark:text-white text-sm sm:text-base leading-tight lg:w-32 ">{statusFollowers ? "New" : "Lost"} {interaction} TODAY</p>
                        </div>
                    </div>
                </div>

                <div className="px-9 pb-14 pt-7">
                    <p className="text-dark-grayish-blue text-base sm:text-xl mb-7 sm:ml-5">May 4 - May 13</p>
                    <Chart />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
    data: PropTypes.shape({
        user: PropTypes.string.isRequired,
        followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        interaction: PropTypes.string.isRequired,
        todayFollowers: PropTypes.number.isRequired,
        statusFollowers: PropTypes.bool.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired,
};

export default Modal;
