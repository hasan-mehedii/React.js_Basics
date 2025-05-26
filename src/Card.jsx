import profilePic from './assets/Profile.jpg'
function Card() {
    return(
        <div className = "card">
            <img className = "card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className = "card-title" >Mehedi The MegaStar</h2>
            <p className = "card-text">I have nothing to do. Only sleep, eat and repeat</p>
        </div>
    );
}

export default Card