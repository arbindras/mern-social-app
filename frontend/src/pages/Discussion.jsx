import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import discussionService from '../api/discussionService';
import interactionService from '../api/interactionService';
import Comment from '../components/Comment';

const Discussion = () => {
    const { id } = useParams();
    const [discussion, setDiscussion] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchDiscussion = async () => {
            const { data } = await discussionService.get(`/discussions/${id}`);
            setDiscussion(data);
        };

        const fetchComments = async () => {
            const { data } = await interactionService.get(`/comments/${id}`);
            setComments(data);
        };

        fetchDiscussion();
        fetchComments();
    }, [id]);

    const submitCommentHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await interactionService.post('/comments', {
                discussionId: id,
                text: newComment,
            });
            setComments([...comments, data]);
            setNewComment('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>{discussion.text}</h1>
            {discussion.image && <img src={discussion.image} alt="discussion" />}
            <div>
                {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
            </div>
            <form onSubmit={submitCommentHandler}>
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
};

export default Discussion;
