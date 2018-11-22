import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/posts';
import PropTypes from "prop-types";
import moment from 'moment';
import AvatarBlock from '../components/AvatarBlock';

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 630px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: sans-serif;
`;

const Data = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Line = styled.span`
  width: 50px;
  border-bottom: 4px solid #B67D54;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-size: 16px;
  padding: 20px 10px;
`;

const Image = styled.div`
  max-width: 575px;
  width: 100%;
  position: relative;
  margin: 0 25px;
   &:before {
    content: "";
    display: block;
    padding-top: 50%;
    }
    @media(max-width: 450px) {
    width: 90%;
    margin: 0 auto;
    }
`;

const PreviewText = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  margin: 20px 28px;
  padding-right: 10px;
`;

class BlogPage extends React.Component {

  state = {
    hasErrored: false,
    isLoading: false,
    post: null
  };

  setBlog = (idBlog) => {
    const postsArr = this.props.posts;
    postsArr.forEach((item, i) => {
      if (idBlog === item.id) {
        console.log(item);
        this.setState({ post: item });
      }
    });
  };

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/posts');
    this.setBlog(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.postId !== nextProps.match.params.postId) {
      this.setBlog(nextProps.match.params.postId);
    }
  }

  render(){
   
    const { post } = this.state;

    if (this.props.hasErrored) {
      return <div>Sorry! There was an error loading the posts</div>;
    }

    if (this.props.isLoading) {
      return <div>Loading…</div>;
    }

      return(
        <Wrapper className="theme-bg light-color">
          {post && (
            <Content key={post.id}>
              <Data>{moment(post.data).format('LL')}</Data>
              <Line />
              <Title>{post.title}</Title>
              <Image style={{ background: `url(${post.image})no-repeat center/cover` }} />
              <div dangerouslySetInnerHTML={{ __html: post.text }} style={{ maxWidth: 600, fontSize: 17, lineHeight: 2, paddingLeft: 25, marginTop: 20, marginBottom: 20 }}></div>
              <PreviewText>{post.previewText}</PreviewText>
              <AvatarBlock tags={post.tags} author={post.author} title="Author" />
            </Content>
          )}
        </Wrapper>
      );
    }
  }


BlogPage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);