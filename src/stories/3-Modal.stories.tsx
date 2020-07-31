import React from 'react';
import Modal from '../components/modal';


export const regular: React.FC = () => {
    
    return (
        <div>
            <Modal title="Save the world" buttonTitle="With title and content">Who is going to save the world?</Modal><br/><br/>
            <Modal buttonTitle="Only with content">Who is going to save the world?</Modal><br/><br/>
            <Modal title="Save the world" buttonTitle="Only with title"></Modal>
        </div>)
};

export default {
    title: 'Modal',
};
