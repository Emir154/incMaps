import './../../styles/main.scss'
import {Link} from 'react-router-dom'

export default function BreadCrumbs({breadcrumbs})
{
    return (
        <>
            <ul className="breadcrumbs">
                {breadcrumbs.map((item, index) => (<li key={index} className="breadcrumbs__item">
                    {index !== breadcrumbs.length - 1 ? (<Link to={item.path}>{item.name}</Link>) : (
                        <span>{item.name}</span>)}
                </li>))}
            </ul>
    </>)
}