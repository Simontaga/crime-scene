import styles from '../../styles/Entry.module.scss';
import component from '../SmallInfo/smallInfo.module.scss'

const smallInfo = ({ title, secondary}) => {
    return(
        <div className={`${styles.container} ${component.smallInfo}`}>
            <p>{title}</p>
            <p className={component.smallInfo__secondary}>{secondary}</p>
        </div>
    )
}

export default smallInfo;