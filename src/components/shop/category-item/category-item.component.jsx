import { Link } from 'react-router-dom'
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title, href } = category;
    return(
        <div className='category-container' >
            <Link to={href} className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} >
                <div className='category-body-container'>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem