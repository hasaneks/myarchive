import styles from "./category.module.css"
export default function CategoryTitle({title,icon}){
    return(
        <div className={styles.categoryTitleArea}>
            {icon}
            <h3>{title}</h3>
        </div>
    )
}