import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title, href } = category;
    return(
        <div className='category-container' >
            <div className='background-image' href={href} style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem