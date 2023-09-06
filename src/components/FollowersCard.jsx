import PropTypes from 'prop-types';
import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';
import Modal from './Modal';
import { useState } from 'react';

const FollowersCard = ({ data }) => {
    const { user, followers, interaction, todayFollowers, statusFollowers, icon } = data;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <article className="card bg-light-grayish-blue dark:bg-dark-desaturated-blue px-5 pb-5 pt-7 rounded-md cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}>
            <div className={"h-1 w-full rounded-tl-md rounded-tr-md absolute top-0 left-0 bg-" + icon}></div>
            <ul className="flex items-center justify-center text-center">
                <li><img src={`../icon-${icon}.svg`} alt={icon + "logo"} className="mr-2" /></li>
                <li className="font-bold text-sm text-dark-grayish-blue dark:text-desaturated-blue">{user}</li>
            </ul>

            <p className="text-5xl font-bold text-very-dark-blue dark:text-white text-center my-5">{followers} 
                <span className="text-sm block text-dark-grayish-blue dark:text-desaturated-blue font-normal uppercase tracking-widest mt-2">{interaction}</span>
            </p>

            <div className="flex items-center justify-center">
                <img src={(statusFollowers ? upIcon : downIcon)} className="mr-2"/>
                <p className={"text-sm font-bold " + (statusFollowers ? 'text-lime-green' : 'text-bright-red')}>{todayFollowers} Today</p>
            </div>
        </article>
        {isModalOpen && (
            <Modal data={data} setIsModalOpen={setIsModalOpen} />
        )}
        </>
    );
};

FollowersCard.propTypes = {
    data: PropTypes.shape({
        user: PropTypes.string.isRequired,
        followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        interaction: PropTypes.string.isRequired,
        todayFollowers: PropTypes.number.isRequired,
        statusFollowers: PropTypes.bool.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired,
};

export default FollowersCard;
