import { Title } from "./styles";
import PropTypes from "prop-types";

function DefaultTitle({children, ...props}) {
    

    return (

        <Title {...props}>{children}</Title>

    )
}

DefaultTitle.propTypes = {
    children: PropTypes.isRequired
}

export default DefaultTitle