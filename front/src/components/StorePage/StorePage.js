import React from 'react';
import styles from '../StorePage/StorePage.module.scss';
import Card from '../Card/Card'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../store/actionCreators/cartAC"
import Loader from '../Loader/Loader';
import { listProduct } from '../../store/actionCreators/productAC';





const StorePage = ({ filters }) => {

    const dispatch = useDispatch()
    const {products, message, loading, error} = useSelector(state => state.productList)


    const [url, setUrl] = React.useState('')
    const [filterList, setFilterList] = React.useState({
        Series: [],
        Size: [],
        Color: []
    })

    React.useEffect(() => {
        dispatch(listProduct(url))
    }, [url])


    React.useEffect(() => {
        transformURL()
    }, [filterList])



    const filtersKey = Object.keys(filters);

    const transformURL = () => {
        let result = []
        filtersKey.map(key => {
            if (filterList[key].length > 0) {
                filterList[key].map(arr => {
                    return result.push(`filter.${key}[]=${arr}`)
                })
            }
        })

        const resultUrl = `?${result.toString().replace(/,/g, "&")}`
        setUrl(resultUrl)
    }


    const handleFilter = (e, key) => {
        if (e.target.value === key) {
            setFilterList(prev => {
                if (e.target.checked) {
                    return {
                        ...filterList,
                        [key]: [...prev[key], e.target.name]
                    }
                }
                else if (!e.target.checked) {
                    const result = filterList[key].filter(item => item !== e.target.name)

                    setFilterList({
                        ...filterList,
                        [key]: result
                    })
                }
            })
        }
    }


    return (
        <div className={styles.store}>
            <h1 className={styles.storeTitle}> Choose your Apple Watch </h1>
            <div className={styles.storeWrapper}>
                <div className={styles.storeInner}>
                    <div className={styles.storeLeft}>
                        <div className={styles.storeFilter}>
                            <h3 className={styles.storeLeftTitle}> Apple Watch </h3>
                            {filtersKey.map((key, index) => {
                                return (
                                    <div key={index}>
                                        <h4 className={styles.storeLeftFilterTitle}>{key}</h4>
                                        {filters[key].map((item) => {
                                            return (
                                                <label key={item.id} className={styles.storeLeftLabel}>
                                                    <input
                                                        className={styles.storeLeftBox}
                                                        type="checkbox"
                                                        name={item.id}
                                                        value={[key]}
                                                        id={item.id}
                                                        onChange={(e) => handleFilter(e, key)}
                                                    />
                                                    <span>{item.name}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.storeRight}>
                        <p>{message&&message}</p>
                        { loading 
                        ? <Loader/> 
                        : products.map((item) => (
                                <Card
                                    key={item._id}
                                    name={item.name}
                                    imageUrl={item.imageUrl[0]}
                                    price={item.price}
                                    path={item._id}
                                    addToCart={() => dispatch(addToCart(item))}
                                    text={'Add to cart'}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StorePage;