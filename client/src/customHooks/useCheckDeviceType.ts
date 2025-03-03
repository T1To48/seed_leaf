import {  useEffect } from 'react'
import {
    useAppDispatch,
    toggleMobileMode
} from 'src/redux'

const useCheckDeviceType = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const checkDeviceType = () => {
            const innerWidth = window.innerWidth
            if (innerWidth <= 768) {
                dispatch(toggleMobileMode(true))
            } else {
                dispatch(toggleMobileMode(false))
            }
        }
        checkDeviceType()
        window.addEventListener("resize", checkDeviceType)
        return () => window.removeEventListener("resize",checkDeviceType)
        
    }, [dispatch])
}

export default useCheckDeviceType