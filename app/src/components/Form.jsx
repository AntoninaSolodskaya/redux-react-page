import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { course, cuisine, skill } from '../data';
import { validate, required } from './validation/index';
import { renderField, renderTextarea, fileInput, step, ingredients, customInput } from "./fields";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    padding: 10px 0;
  }
`;

const LabelSelect = Label.extend`
  margin-right: 37px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
    padding-top: 10px;
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

const WrapBlock = Block.extend`
  border-bottom: 1px solid #A9A9A9;
  padding-top: 20px;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: unset;
`;

const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media(max-width: 450px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: 1px solid #E8E8E8;
  border-radius: 5px;
  padding: 8px 27px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: initial;
  &:active {
    border: 1px solid #B67D54;
    background-color: #B67D54;
  }
  @media(max-width: 450px) {
    padding: 10px;
    margin: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const BlockWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media(max-width: 450px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 450px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const WrapSelect = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

class Form extends React.Component {

  changeState = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {

    const { handleSubmit, reset, pristine, submitting } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Field
            name="title"
            component={renderField}
            type="text"
            label="Recipe Title"
          />
          <Block>
            <Label>Description</Label>
            <Section>
              <Field
                name="description"
                component={renderTextarea}
                type="textarea"
              />
            </Section>
          </Block>
          <WrapBlock>
            <Field
              name="step"
              component={renderField}
              type="text"
              label="Direction"
              paragraph="Steps:"
              validate={[required]}
            />
            <FieldArray name="stepArr" component={step} />
          </WrapBlock>
          <BlockWrap>
            <Label>Ingredients</Label>
            <Wrap>
              <Container>
                <ColumnRight>
                  <Paragraph>Ingredient:</Paragraph>
                  <Field
                    name="ingredient"
                    component={customInput}
                    type="text"
                    className="ingredient"
                    validate={[required]}
                  />
                </ColumnRight>
                <ColumnLeft>
                  <Paragraph>Amount:</Paragraph>
                  <Field
                    name="amount"
                    component={customInput}
                    type="number"
                    className="amount"
                    validate={[required]}
                  />
                </ColumnLeft>
              </Container>
              <FieldArray name="ingredArr" component={ingredients} />
            </Wrap>
          </BlockWrap>            
          <Field
            name="prepTime"
            component={renderField}
            label="Prep Time"
            type="input-number"
            hint="minutes"
            className="number"
          />
          <Field
            name="cookTime"
            component={renderField}
            label="Cook Time"
            type="input-number"
            hint="minutes"
            className="number"
          />
          <Field
            name="servings"
            component={renderField}
            label="Servings"
            type="input-number"
            className="number"
          />
          <WrapSelect>
            <LabelSelect>Course</LabelSelect>
            <Field name="course" component="select" style={{ fontSize: 17, padding: 8, borderRadius: 5, minWidth: 204 }}>
              <option>Choose...</option>
              {course.map(food => {
                return (
                  <option key={food} value={food}>
                    {food}
                  </option>
                );
              })}
            </Field>
          </WrapSelect>
          <WrapSelect>
            <LabelSelect>Cuisine</LabelSelect>
             <Field name="cuisine" component="select" style={{ fontSize: 17, padding: 8, borderRadius: 5, minWidth: 204 }}>
              <option>Choose...</option>
              {cuisine.map(food => {
                return (
                  <option key={food} value={food}>
                    {food}
                  </option>
                );
              })}
            </Field>
          </WrapSelect>
          <WrapSelect>
            <LabelSelect>Skill</LabelSelect>
            <Field name="skill" component="select" style={{ fontSize: 17, padding: 8, borderRadius: 5, minWidth: 204 }}>
              <option>Choose...</option>
              {skill.map(food => {
                return (
                  <option key={food} value={food}>
                    {food}
                  </option>
                );
              })}
            </Field>
          </WrapSelect>
          <Field 
            name="tags"
            component={renderField}
            type="text"
            label="Tags"
            hint="Separate tags with commas.For example: healthy, paleo, gluten-free"
          />
          <Field
            name="image"
            component={fileInput}
            type="file"
            label="Image"
            accept=".jpg, .jpeg, .png"
            hint="Required size:1140px by 500px or larger.Max file size:2 megabytes"
            onChange={this.onChange}
          /> 
          <SubmitBlock>
            <Button type="button" onClick={reset}>
              Clear Form
            </Button>
            <Button type="submit" disabled={pristine || submitting}>
              Submit Recipe
            </Button>
          </SubmitBlock>
        </Wrapper>
      </form>
    )
  }
}

Form.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

Form = reduxForm({
  form: 'post',
  validate,
})(Form);

export default Form;
