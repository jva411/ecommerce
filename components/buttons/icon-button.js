import styles from 'styles/components/buttons/icon-button.module.scss'

export default function IconButton({ customClassName='', type, icon, onClick }) {
    return icon && (
        <button type={type} className={styles.button + ' ' + customClassName} onClick={onClick}>
            {icon()}
        </button>
    )
}
