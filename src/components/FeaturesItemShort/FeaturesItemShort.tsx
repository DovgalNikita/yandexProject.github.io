import React, {FC} from 'react';
import styles from './FeaturesItemShort.module.scss';

const FeaturesItemShort: FC<IFeaturesItem> = ({children, img}) => {
    return(
        <div className={styles.block}>
            <img src={img} alt="" className={styles.img}/>
            <p className={styles.caption}>{children}</p>
        </div>
    )
}

export default FeaturesItemShort;