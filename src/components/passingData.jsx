function Button({color = "blue", fontSize = 12, text = "Click Me", handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    }
    return (
        <button style={buttonStyle} onClick={handleClick}>{text}</button>
    )
}


export default function Btns() {
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    };
    return (
        <div>
            < Button handleClick={handleButtonClick} />
        </div>
    )
}