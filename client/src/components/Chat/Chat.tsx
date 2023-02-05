/* eslint-disable react-hooks/exhaustive-deps */
import { FC, FormEventHandler, useContext, useEffect, useRef, useState } from "react";
import { Messages } from "..";
import { ChatSocketContext } from "../../context";
import { Message } from "../../types";
import { isEmpty } from "../../utils";
import styles from './Chat.module.css';

const { chatContainer, chatHeader, chatBody, chatFooter } = styles;

type Props = {
    room: string;
}

const Chat: FC<Props> = ({ room }) => {
    const { socket, username } = useContext(ChatSocketContext);
    const [messages, setMessages] = useState<Message[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socket.emit('joinRoom', room);

        socket.on('messageToClient', (message: Message) => {
            message.isSender = false;
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.emit('leaveRoom', room);
            socket.off('messageToClient');
        };
    }, []);

    useEffect(() => {
        chatBodyRef.current!.scrollTop = chatBodyRef.current!.scrollHeight;
    });

    const sendMessage = () => {
        const message: Message = { content: inputRef.current!.value, isSender: true, room, username };
        socket.emit('messageToServer', message);
        setMessages((prevMessages) => [...prevMessages, message]);
        inputRef.current!.value = '';
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!isEmpty(inputRef.current?.value)) {
            sendMessage();
        }
    };

    return (
        <div className={chatContainer}>
            <div className={chatHeader}>
                <h3>Chat</h3>
            </div>
            <div ref={chatBodyRef} className={chatBody}>
                <Messages messages={messages} />
            </div>
            <div className={chatFooter}>
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" placeholder="Type your message..." />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
