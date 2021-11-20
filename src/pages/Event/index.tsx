import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../../components/EventCalendar";
import {Button, Layout, Row, Modal} from "antd";
import EventForm from "../../components/EventForm";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IEvent} from "../../modules/IEvent";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector(state => state.eventReducer)
    const {user} = useTypedSelector(state => state.authReducer)

    const modalHandler = () => {
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
         <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button onClick={modalHandler}>Add Event</Button>
            </Row>
            <Modal
                visible={modalVisible}
                title={"Add Event"}
                footer={null}
                onCancel={modalHandler}
            >
                <EventForm
                    submit={addNewEvent}
                    guests={guests}/>
            </Modal>
        </Layout>
    );
};

export default Event;