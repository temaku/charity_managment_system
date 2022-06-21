
import React, { useEffect } from 'react'
import { Modal, Button } from 'antd';

const EditModal = (props) => {


    useEffect(() => {
        const {setModalData} = props
        console.log("Mounted....", props.modalData)
        return () => {
            setModalData({})
            console.log("Unmounted")
        }
    }, [])

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