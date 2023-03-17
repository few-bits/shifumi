import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import sound from './background-sound.mp3';
import circle from '../Choose/img/circle.png';
import soundIcon from './sound.svg';
import { StyledChoose } from '../Choose/styled';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled(StyledChoose)`
    background-image: url('${circle}'), url('${soundIcon}');

    &:hover {
        background-color: transparent;
    }
`;

function AudioButton() {
    const audioRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
          audioRef.current.volume = 0.2;
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);

    return (
        <Wrapper>
            <audio
                src={sound}
                ref={audioRef}
                loop={true}
            />
            <Button onClick={() => setIsPlaying(!isPlaying)}/>
        </Wrapper>
    )
}

export default AudioButton;