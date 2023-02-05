import { createContext, FC, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { ChildrenProps } from '../types';

type ChatSocketContextType = {
    username: string;
    socket: Socket
}

type Props = { username: string } & ChildrenProps

const socket = io(process.env.REACT_APP_GALLERY_WS_URI);

export const ChatSocketContext = createContext<ChatSocketContextType>({
    username: '',
    socket
});

export const ChatSocketProvider: FC<Props> = ({ children, username }) => {
    const [context] = useState<ChatSocketContextType>({ username, socket });

    return (
        <ChatSocketContext.Provider value={context}>
            {children}
        </ChatSocketContext.Provider>
    );
};
