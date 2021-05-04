import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h4>Warning</h4>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo='Today at 4:45PM'
          commentText={faker.lorem.sentence()}
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo='Yesterday at 6:00PM'
          commentText={faker.lorem.sentence()}
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo='Today at 2:00AM'
          commentText={faker.lorem.sentence()}
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
