import PropTypes from 'prop-types';
import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const OverviewCards = ({ data }) => {
    const { action, value, variation, statusVariation, icon } = data;

    return (
        <li className="card bg-light-grayish-blue  dark:bg-dark-desaturated-blue p-7 rounded-md">
            <div className="flex justify-between mb-6">
                <p className='font-bold text-sm text-dark-grayish-blue dark:text-desaturated-blue'>{action}</p>
                <img src={`../icon-${icon}.svg`} alt={icon + "logo"} />
            </div>
            <div className="flex justify-between">
                <p className="text-3xl font-bold text-very-dark-blue dark:text-white">{value}</p>
                <div className="flex items-center">
                    <img src={(statusVariation ? upIcon : downIcon)} className="mr-2"/>
                    <p className={"text-sm font-bold " + (statusVariation ? 'text-lime-green' : 'text-bright-red')}>{variation}</p>
                </div>
            </div>
        </li>
    )
}

OverviewCards.propTypes = {
    data: PropTypes.shape({
        action: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        variation: PropTypes.string.isRequired,
        statusVariation: PropTypes.bool.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired
};

export default OverviewCards;