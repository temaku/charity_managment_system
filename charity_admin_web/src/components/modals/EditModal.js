
import React from 'react'
import { Modal, Button } from 'antd';

const EditModal = (props) => {
    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={props.handleOk}
            confirmLoading={props.loading}
            onCancel={props.handleCancel}
        >
            {
                props.children
            }
        </Modal>
    )
}

export default EditModal