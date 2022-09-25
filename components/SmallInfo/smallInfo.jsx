import styles from '../../styles/Entry.module.scss';
import component from '../SmallInfo/smallInfo.module.scss'

const smallInfo = () => {
    return(
        <div className={`${styles.container} ${component.smallInfo}`}>
            <p>Test component</p>
            <p>test</p>
        </div>
    )
}

export default smallInfo;