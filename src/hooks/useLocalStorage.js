import { prefix } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

// this is for stop adding another web details for those keys
const PREFIX = 'codeEditor-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = prefix + key;

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
