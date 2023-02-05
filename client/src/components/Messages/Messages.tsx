import { FC } from "react";
import { Message as MessageType } from "../../types";
import Message from "../Message/Message";

type Props = {
    messages: MessageType[];
}

const Messages: FC<Props> = ({ messages }) => {
    return (
        <>
            {messages.map((message) => <Message message={message} />)}
        </>
    );
};

export default Messages;
