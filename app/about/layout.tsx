import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AboutLayout = ({children}: Props) => {
	return <div className="bg-slate-500">{children}</div>
}

export default AboutLayout
