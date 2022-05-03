import { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import IconButton from 'components/buttons/icon-button'
import styles from 'styles/components/inputs/search-input.module.scss'

export default function SearchInput() {
    const [value, setValue] = useState('')

    return (
        <div className={styles.inputGroup}>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Search'
            />
            <IconButton icon={MdSearch} />
        </div>
    )
}
