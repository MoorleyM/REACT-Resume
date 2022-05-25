import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title, href } = category;
    return(
        <div className='category-container' >
            <a href={href} className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} >
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
            </a>
        </div>
    )
}

export default CategoryItem