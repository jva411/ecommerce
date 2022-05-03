import SearchInput from 'components/inputs/search-input'
import styles from 'styles/components/sidebar.module.scss'

export default function Sidebar() {
    console.log(styles.width)
    return (
        <div className={styles.sidebar}>
            <SearchInput />
        </div>
    )
}
