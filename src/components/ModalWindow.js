import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import { Video } from './Video';

export const ModalWindow = () => {

    const[visible, setVisible] = useState(false)
    // state = { visible: false };

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (e) => {
        console.log(e);
        setVisible(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setVisible(false);
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
            Open Modal with customized button props
            </Button>
            <Modal
            title="Basic Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ disabled: true }}
            cancelButtonProps={{ disabled: true }}
            >
            <Video/>
            </Modal>
        </div>
    )
}