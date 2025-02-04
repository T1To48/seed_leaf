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
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useCheckDeviceType