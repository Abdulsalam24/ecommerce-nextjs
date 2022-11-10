import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const Main = () => {

    const products = useSelector((state) => state.productReducers.product)

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {products?.map((product) =>
                    <SwiperSlide key={product.id}>
                        <ProductItem  product={product} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default Main
