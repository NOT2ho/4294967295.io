'use client';
import { useEffect } from 'react';

export type ElevenLabsProps = {
    publicUserId: string;
    textColorRgba?: string;
    backgroundColorRgba?: string;
    size?: 'small' | 'large';
    children?: React.ReactNode;
};

const ElevenLabsAudioNative = ({
    publicUserId,
    size,
    textColorRgba,
    backgroundColorRgba,
    children,
}: ElevenLabsProps) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://elevenlabs.io/player/audioNativeHelper.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="elevenlabs-audionative-widget"
            data-height={size === 'small' ? '90' : '120'}
            data-width="100%"
            data-frameborder="no"
            data-scrolling="no"
            data-publicuserid={publicUserId}
            data-playerurl="https://elevenlabs.io/player/index.html"
            data-small={size === 'small' ? 'True' : 'False'}
            data-textcolor={textColorRgba ?? 'rgba(0, 0, 0, 1.0)'}
            data-backgroundcolor={backgroundColorRgba ?? 'rgba(255, 255, 255, 1.0)'}
        >
            {children ? children : 'Elevenlabs AudioNative Player'}
        </div>
    );
};

export default function Page() {
    return (
        <div>
            <h1>
                애오오오오오옹
            </h1>

            <ElevenLabsAudioNative publicUserId="7b255a2eb57cadc30fb58c8b845c1ab7ffc4be5a55c5db590a79b6026813f7c6" />

            <p>
                와웅
            </p>
        </div>
    );
}
