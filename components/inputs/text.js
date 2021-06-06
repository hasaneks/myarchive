import { Fragment } from 'react'
import styles from "./text.module.css"

export default function TextInput ({...props}) {
    return (
        <Fragment>
            <input className={styles.baseText} {...props}/>
        </Fragment>
    )

}