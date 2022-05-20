import CategoryItem from "../category-item/category-item.component"

import './shop-directory.styles.scss'

const ShopDirectory = ({categories}) => {
    return (
        <section className='directory-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </section>
    )
}
export default ShopDirectory