import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { required } from '../validation/index';
import Select from 'react-select';

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  @media(max-width: 450px) {
    width: 100%;
    justify-content: center;
`;

const Label = styled.label`
  width: 30%;
  min-width: 110px;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

 const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const Input = styled.input`
  min-height: 35px;
  width: 80%;
  margin: 6px 0 10px 0;
  padding: 0 15px;
  background-color: initial;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const Hint = styled.p`
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  flex: 1;
  width: 100%;
`;

const SpanWrap = styled.div`
  width: 65%;
  border-top: 2px solid #F44336;
`;

const Span = styled.span`
  color: #F44336;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-family: Arial,sans-serif;
  letter-spacing: 1.2px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 25opx;
`;

const AddBtn = styled.button`
  border: none;
  background: inherit;
  padding: 20px 0;
  color: #B67D54;
  text-align: center;
`;

const DelBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-size: 30px;
  background: initial;
  color: #ffffff;
  margin-left: -75px;
  margin-bottom: 14px;
  line-height: 1px;
  @media(max-width: 450px) {
    display: none;
  }
`;

const BlockBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const renderField = ({ input, label, type, hint, paragraph, className, meta: { touched, error } }) => (
  <Block>
    <Label>{label}</Label>
    <Section>
      <Paragraph>{paragraph}</Paragraph>
      <Input {...input} placeholder='' type={type}  className={className} />
      {touched && error && 
        <SpanWrap>
          <Span>{error}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
          </Span>
        </SpanWrap>
      }
      <Hint>{hint}</Hint>
    </Section>
  </Block>
);

export const renderTextarea = ({ input, label, meta: { touched, error } }) => (
  <Block>
    <Label>{label}</Label>
    <textarea{...input} placeholder="" type="textarea" rows="10" colls="40" />
    {touched && error &&
      <SpanWrap>
        <Span>{error}
          <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
        </Span>
      </SpanWrap> 
    }
  </Block>
);

export const fileInput = ({ input, resetKey, label, hint, value, ...inputProps }) => {

  const handleChange = (e) => {
    input.onChange(e.target.files[0])
    console.log(e.target.files[0])
  }

  return (
    <Block>
      <Label>{label}</Label>
      <Section>
        <input
          {...inputProps} 
          key={resetKey} 
          type="file" 
          onChange={handleChange}
          onBlur={() => {}}
        />
        <Hint>{hint}</Hint>
      </Section>
    </Block>
  )
}

export const step = ({ fields }) => (
  <TextBlock>
    {fields.map((code, index) => (
      <BlockBtn key={index}>
        <Field
          name={code}
          type="text"
          component={renderField}
          autoFocus
          validate={[required]}
        />
        <DelBtn type="button" onClick={() => fields.remove(index)}>
          &times;
        </DelBtn>
      </BlockBtn>
    ))}
    <AddBtn type="button" onClick={() => fields.push()}>
      AddBtn
    </AddBtn>
  </TextBlock>
);

export const customInput = ({ input, type, className, meta: { touched, error } }) => (
  <Wrapper>
    <Input {...input} placeholder='' type={type}  className={className} />
      {touched && error && 
        <SpanWrap>
          <Span>{error}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
          </Span>
        </SpanWrap>
      }
  </Wrapper> 
);

// export const course = ({ fields }) => {

//   handleChange = (event) => {
//     this.setState({value: event.target.value, isOpen: !this.state.isOpen});
//     this.props.changeState(event.target.value);
//   };

//   return (
//     <TextBlock>
//       {fields.map((code, index) => (
//       <Wrap key={index}>
//         <Container>
//           <Field
//             name={code}
//             component={Select}
//             type="button"
//           />
//         </Container>
//       </Wrap>
//     ))}
//     </TextBlock>
//   )
// }

export const ingredients = ({ fields }) => (
  <TextBlock className="block">
    {fields.map((code,number, index) => (
      <Wrap key={index}>
        <Container>
          <ColumnRight>
            <Paragraph>Ingredient:</Paragraph>
            <Field
              name={code}
              component={customInput}
              type="text"
              className="ingredient"
              validate={[required]}
            />
          </ColumnRight>
          <ColumnLeft>
            <Paragraph>Amount:</Paragraph>
            <Field
              name={number}
              component={customInput}
              type="number"
              className="amount"
              validate={[required]}
            />
          </ColumnLeft>
        </Container>
        <DelBtn type="button" className="hide" onClick={() => fields.remove(index)}>
          &times;
        </DelBtn> 
      </Wrap>
    ))}
    <AddBtn type="button" onClick={() => fields.push()}>
      AddBtn
    </AddBtn>
  </TextBlock>
);

export const SelectInput = (props) => {
  const { children, input, options } = props
  function handleInputChange({ value }) {
    props.input.onChange(value)
  }
  return (
    <Label>
      {children}
      <Select
        clearable={false}
        searchable={false}
        options={options}
        {...input}
        onChange={handleInputChange}
      />
    </Label>
  )
}

export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'initial',
    borderColor: state.isFocused ? "black" : "white",
    boxShadow: state.isFocused ? null : null,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "gray" : "initial",
    color: state.isSelected ? "white" : "initial" 
  }),
  placeholder: styles => ({ ...styles, color: 'white' }),

};
