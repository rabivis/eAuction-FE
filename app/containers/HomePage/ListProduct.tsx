import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Row, Col } from "reactstrap";
import { connect, useDispatch, useSelector } from 'react-redux';

import ReduxFormSelect from 'components/Inputs/ReduxFormSelect';
import { ProductIdInpit } from './HomePage';
import { fetchProductList, fetchProductDetails } from './actions';
import { createStructuredSelector } from 'reselect';
import {  makeSelectLoading, makeSelectError, makeSelectProductList, makeSelectProductDetails } from './selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import reducer from './reducer';
import saga from './saga';
import ProductDetails from './ProductDetails';

interface Props {
    handleSubmit;
    pristine;
    submitting;
    isLoading;
};

const key = "product";
const stateSelector = createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
    productList: makeSelectProductList(), 
    productDetails: makeSelectProductDetails(),
});

export function ListProduct(props: Props) {
    const dispatch = useDispatch();
    const { handleSubmit, submitting, pristine, isLoading } = props;
    const {  loading, error, productDetails, productList } = useSelector(stateSelector);
    
    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    useEffect(() => {
        dispatch(fetchProductList());
    },[])
    const localSubmithandle = (values: ProductIdInpit) => {
        dispatch(fetchProductDetails(values.productId))
    }
    return (
        <Form onSubmit={handleSubmit(localSubmithandle)} noValidate={true}>
            
            <Field
                name="productId"
                type="text"
                values={productList}
                component={ReduxFormSelect}
                label="Product List *"
                placeHolder="Please select product"
            />
            <Row>
                <Col md="12">
                    <Button
                        className="btn btn-success placeicon"
                        color="success"
                        type="submit"
                        disabled={pristine || submitting}
                    >
                        {isLoading && <>Show...</>}
                        {!isLoading && <>Show Product Details</>}
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <ProductDetails />
                </Col>
            </Row>
        </Form>
    );
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'ListProduct',
})(ListProduct);

export default connect(null)(form);