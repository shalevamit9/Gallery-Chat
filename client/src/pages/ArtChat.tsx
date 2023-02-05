import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArtTitle, CenteredFlex, CentralizedPage, Chat, HighlightedArt, Loader } from "../components";
import { useFetch } from "../hooks";
import { Art as ArtType } from "../types";
import { isNotFoundException } from "../utils";

type Params = {
    artId: string
}

const ArtChat: FC = () => {
    const { artId } = useParams<Params>();
    const navigate = useNavigate();

    const { error, isLoading, response: art } = useFetch<ArtType>(
        `${process.env.REACT_APP_GALLERY_API_BASE_URL}/arts/${artId}`,
        []
    );

    let render = <></>;
    if (error) {
        if (isNotFoundException(error)) {
            navigate('/404');
        } else {
            navigate('/500');
        }
    }

    if (isLoading) {
        render = <Loader>Loading...</Loader>;
    }

    if (art) {
        render = (
            <CentralizedPage>
                <ArtTitle name={art.name} artistName={art.artistName} />
                <CenteredFlex>
                    <HighlightedArt url={art.url} />
                    <Chat room={artId as string} />
                </CenteredFlex>
            </CentralizedPage>
        );
    }

    return (
        render
    );
};

export default ArtChat;
