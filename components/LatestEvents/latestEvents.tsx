import styles from '../../styles/Entry.module.scss';
import component from '../LatestEvents/latestEvents.module.scss';
import IEvent from '../../interfaces/IEvent';
import { FunctionComponent } from 'react';

const latestEvents: FunctionComponent<{ title: string, events: IEvent[]}> = ({ title, events}) => {
    return(
        <div className={`${styles.container} ${component.smallInfo}`}>
            <p>{title}</p>
            {events.map((event,index) => {
                return <p key={index}>{event.name}</p>
            })}
        </div>
    )
}

export default latestEvents;