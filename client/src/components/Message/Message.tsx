import { FC } from "react";
import styles from './Message.module.css';
import { Message as MessageType } from "../../types";

type Props = {
    message: MessageType
}

const { chatBubble, other, me } = styles;

const Message: FC<Props> = ({ message: { content, isSender, username } }) => {
    let sender = isSender ? me : other;

    return (
        <div className={`${chatBubble} ${sender}`}>
            <p>
                {!isSender && <><strong>{username}</strong><br /></>}
                {content}
            </p>
        </div>
    );
};

export default Message;
