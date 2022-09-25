import styles from '../../styles/Entry.module.scss';
import component from '../SmallInfo/smallInfo.module.scss'

const smallInfo = ({ title, secondary}) => {
    return(
        <div className={`${styles.container} ${component.smallInfo}`}>
            <div className={`${styles.container__inner} ${component.smallInfo__inner}`}>
                <p>{title}</p>
                <p className={component.smallInfo__secondary}>{secondary}</p>
            </div>
        </div>
    )
}

export default smallInfo;