import "../../styles/main.scss";

export default function Buttons({children, size, className}) {
    return (
        <a href={"/"} className={`
        button${className}
            button--size-${size}
        `}>{children}</a>
    )
}