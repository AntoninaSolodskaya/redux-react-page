import React from 'react';
import styled from 'styled-components';

const BlockWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 35px 0;
`;

const ListWrapTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 25px;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ItemSection = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  color: #ffffff;
`;

const Span = styled.span`
  color: #CD8D5F;
  font-weight: bold;
`;

const AvatarSection = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-left: 12px;
`;

const ContextList = styled.span`
  margin: 8px 5px 8px 0;
`;

class AvatarBlock extends React.Component {
  render() {
    const { tags, author, title } = this.props;
    return (
      <BlockWrap>
        <ContentWrap>
          <ItemSection>Categories</ItemSection>
          <ListWrapTags>
            {tags.map((tag, i) => (
              <ListItem key={i}>
                <ContextList value={tag}>
                  <Span>{tag}</Span>
                </ContextList>
              </ListItem>
            ))}
          </ListWrapTags>
        </ContentWrap>
        <ContentWrap>
          <ItemSection>{title}</ItemSection>
          <ContentBlock>
            <Span>{author.name}</Span>
            <AvatarSection style={{ background: `url(${author.avatar})no-repeat center/cover` }} />
          </ContentBlock>
        </ContentWrap>
      </BlockWrap>
    );
  }
}

export default AvatarBlock;
