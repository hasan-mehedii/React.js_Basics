{/*import styles from './Button.module.css'*/}

function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "25px",
        border: "none",
        cursor: "pointer",
    }
    {/*return(<button className={styles.button}>Click me</button>);*/}
    return(<button style = {styles}> Click Here</button>)
}

export default Button