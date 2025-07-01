import "../../styles/main.scss";

export default function Buttons({children, href, type, size, className}) {
    return (
        <a href={"/"} className={`
        button${className}
            button--size-${size}
        `}>{children}</a>
    )
}