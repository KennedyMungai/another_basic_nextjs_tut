import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AboutLayout = ({children}: Props) => {
	return <div>{children}</div>
}

export default AboutLayout
