import { MainContainer } from "./styles";

function DefaultContainer({children, ...props}) {

    return (
        <MainContainer {...props}>{children}</MainContainer>
    )
}

export default DefaultContainer