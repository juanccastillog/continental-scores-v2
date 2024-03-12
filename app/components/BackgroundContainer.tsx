import { ReactNode } from "react"

interface PropsType {
    children?: ReactNode
}

const Background = (obj? : (PropsType | void)) => (
    <div className="flex justify-center bg-slate-50">
        {obj?.children}
    </div>
) 

export default Background;