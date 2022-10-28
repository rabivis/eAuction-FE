import React from 'react';
import {Table, Row, Col } from "reactstrap";
import { createStructuredSelector } from 'reselect';
import {  makeSelectProductDetails } from './selectors';
import { useInjectSaga } from 'utils/redux-injectors';
import {  useSelector } from 'react-redux';
import saga from './saga';

const key = "productDetails";

const stateSelector = createStructuredSelector({
    productDetails: makeSelectProductDetails(),
});


export default function ProductDetails(){
    const { productDetails } = useSelector(stateSelector);
    useInjectSaga({ key: key, saga: saga });

    return (
    <Row>
        {(productDetails) && <>
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <td>{productDetails.product.productName}</td>
                    </tr>
                    <tr>
                        <th>Product Short Description</th>
                        <td>{productDetails.product.shortDescription}</td>
                    </tr>
                    <tr>
                        <th>Product Details Description</th>
                        <td>{productDetails.product.detailedDescription}</td>
                    </tr>
                    <tr>
                        <th>Product Bid price</th>
                        <td>{productDetails.product.startingPrice}</td>
                    </tr>
                </thead>
            </Table>
            <Table>
                <thead>
                    <tr><th colSpan={2}>Bid Details</th></tr>
                    <tr><th>Bid Amount</th><th>Bid Date</th></tr>
                </thead>
                <tbody>
                    {productDetails.bidData.map((item)=> {
                        return(
                            <tr><td>{item.bidAmount}</td><td>{item.bidDate}</td></tr>
                        )
                    })}
                </tbody>
            </Table>
        </>}
    </Row>)

}