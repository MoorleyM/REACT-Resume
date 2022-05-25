import {
    createContext,
    useState,
    useEffect
} from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import SHOP_DATA from '../../shop-data';

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    // Below is the useEffect to add catagories to db
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, []);
    // End Code

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}