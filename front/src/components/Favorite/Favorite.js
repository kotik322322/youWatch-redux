import React, { useState, useEffect } from 'react';
import styles from '../Favorite/Favorite.module.scss';
import Button from '../Button/Button';
import favoriteImage from "../../assets/watch.png";
import favoriteIcon from '../../assets/favorite/favoriteSolid.svg';
import { useDispatch, useSelector } from "react-redux"




const Favorite = () => {
  const dispatch = useDispatch()

  const { favorite } = useSelector(state => state.favoriteList)
  console.log(favorite);

  // React.useEffect(() => {
  //   dispatch()
  // }, [dispatch])




  return (


    <div className={styles.favorite}>

      <h2 className={styles.favoriteTitle}> Favorite </h2>
      {/* <h4 className={styles.cartStatus}> Your favorite is empty </h4> */}

      {
        favorite.map(item => (
          <div className={styles.favoriteWrapper}>
            <div className={styles.favoriteInner}>
              <img className={styles.favoriteImage} src={item.imageUrl[0]} alt="favorite_image" />
              <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
              <p className={styles.favoritePrice}> $ {item.price}</p>
              <div className={styles.favoriteFooter}>
                <img className={styles.favoriteIcon} src={favoriteIcon} alt="favorite_icon_heart" />
                <Button
                  text={'Add to cart'}
                />
              </div>

            </div>
          </div>
        ))
      }





    </div>



  )
}



export default Favorite;