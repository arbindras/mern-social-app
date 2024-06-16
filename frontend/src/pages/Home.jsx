import React, { useEffect, useState } from 'react';
import discussionService from '../api/discussionService';
import DiscussionCard from '../components/DiscussionCard';

const Home = () => {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        const fetchDiscussions = async () => {
            const { data } = await discussionService.get('/discussions');
            setDiscussions(data);
        };

        fetchDiscussions();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {discussions.map(discussion => (
                <DiscussionCard key={discussion._id} discussion={discussion} />
            ))}
        </div>
    );
};

export default Home;
