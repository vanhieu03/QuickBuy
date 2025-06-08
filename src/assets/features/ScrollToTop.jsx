import { useEffect } from "react"
import { useLocation } from "react-router-dom"

//xử lý khi chuyển trang thay đổi địa chỉ url thì sẽ sẽ scroll lên đầu viewport
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return null;
}

export default ScrollToTop