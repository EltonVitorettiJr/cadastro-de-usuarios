import { TopBackground } from "./styles"


function BackgroundImg({children, ...props}) {

    return (
        <TopBackground {...props}>{children}</TopBackground>
    )
}

export default BackgroundImg