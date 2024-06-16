import React from 'react';
import { Link } from 'react-router-dom';

const DiscussionCard = ({ discussion }) => {
    return (
        <div>
            <Link to={`/discussion/${discussion._id}`}>
                <h2>{discussion.text}</h2>
            </Link>
            {discussion.image && <img src={discussion.image} alt="discussion" />}
        </div>
    );
};

export default DiscussionCard;
