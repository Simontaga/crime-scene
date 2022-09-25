import styles from '../../styles/Entry.module.scss';
import component from '../RecentEvents/recentEvents.module.scss';
import IEvent from '../../interfaces/IEvent';
import { FunctionComponent } from 'react';

const recentEvents: FunctionComponent<{ title: string, events: IEvent[]}> = ({ title, events}) => {
    return(
        <div className={`${styles.container} ${component.recentEvents}`}>
            <div className={`${styles.container__inner} ${component.recentEvents__inner}`}>
            <p className={component.recentEvents__title}>{title}</p>
            {events.map((event,index) => {
                return (
                    <div key={index} className={component.recentEvents__event}>
                        <p>{event.type}</p>
                        <p>{event.locationName}</p>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default recentEvents;