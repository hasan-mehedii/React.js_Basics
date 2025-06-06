import PropTypes from "prop-types";

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginMessage = <h2 className="login-message">Please Login to continue</h2>
    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Login to continue</h2>
    // }
    return(props.isLoggedIn ? welcomeMessage : loginMessage);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting