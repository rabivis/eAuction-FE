import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const ReduxFormInput: React.FC = (field: any) => (
    <FormGroup row={false} className='input-group'>
        <Input
            {...field.input}
            type={field.type}
            placeholder={field.placeHolder}
            max={field.maxDate}
            min={field.minDate}
            step={field.step}
            disabled={field.disabled}
        />
        <Label>{field.label}</Label>
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
    </FormGroup>
);

export default ReduxFormInput;