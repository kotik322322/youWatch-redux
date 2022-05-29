import React from 'react'
import styles from "../CardInfo/CardInfo.module.scss"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../../store/actionCreators/productAC"
import { addToCart } from '../../store/actionCreators/cartAC'
import Button from '../Button/Button'
import Timer from '../Timer/Timer'
import Loader from "../Loader/Loader"




const CardInfo = () => {

    const { _id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { product, loading, error } = useSelector(state => state.productDetails)

    React.useEffect(() => {
        dispatch(listProductDetails(_id))
    }, [])

    const [tab, setTab] = React.useState(0)

    const goBack = () => {
        navigate("/store", { replace: true })
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }



    return (


        <div className={styles.cardInfo}>
            {
                loading
                    ? <Loader />
                    : (

                        <div className={styles.cardInfoWrapper}>
                            <div className={styles.cardInfoInner}>
                                <div className={styles.cardInfoSlider}>

                                    <button
                                        className={styles.goBack}
                                        onClick={goBack}
                                    >Go Back</button>


                                    <div className={styles.slider}>
                                        <div className={styles.sliderWrapper}>
                                            <img className={styles.sliderImg} src={product.imageUrl[tab]} alt="" />
                                        </div>

                                        <div className={styles.sliderBottom}>

                                            {
                                                product.imageUrl.map((slide, index) => (
                                                    <div key={index} className={styles.sliderBottomWrapper}>
                                                        <img
                                                            className={styles.sliderBottomImg}
                                                            src={slide} alt=""
                                                            onClick={() => setTab(index)}
                                                        />
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cardInfoAbout}>
                                    <div className={styles.cardInfoName}>
                                        <h3>{product.name}</h3>
                                    </div>

                                    <div className={styles.cardInfoElements}>
                                        <div className={styles.cardInfoLeft}>
                                            <div className={styles.cardInfoSize}>
                                                {product.size.map((el, index) => (
                                                    <p key={index}>{el}</p>
                                                ))}
                                            </div>

                                            <div className={styles.cardInfoPrice}>
                                                <p>{product.price}</p>
                                            </div>
                                            <Button
                                                onClick={handleAddToCart}
                                                text={'Add to cart'} />
                                        </div>

                                        <div className={styles.cardInfoRight}>
                                            <Timer />
                                            <img className={styles.cardInfoRightImg} src={product.warranty} alt="" />
                                        </div>
                                    </div>

                                    <div className={styles.cardInfoRange}>
                                        <h6><span>Series 7</span> colors</h6>
                                        <div className={styles.cardInfoColors}>
                                            {product.productColors.map((color, index) => (
                                                <img key={index} src={color} alt="" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.cardInfoText}>
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default CardInfo

