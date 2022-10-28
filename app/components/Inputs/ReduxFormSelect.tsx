import { map } from 'lodash';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';

const ReduxFormSelect: React.FC = (field: any) => (
  <FormGroup className='input-group'>
    
    <select {...field.input} disabled={field.disabled} className="form-control">
      <option value="" disabled={true}>
        {field.placeHolder}
      </option>
      {map(field.values, (value: any, i: number) => {

        if(typeof value === 'string') {
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        } else {
          return (
            <option key={i} value={value.value}>
              {value.label}
            </option>
          );
        }
        
      })}
    </select>
    <Label>{field.label}</Label>
    {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
  </FormGroup>
);

export default ReduxFormSelect;