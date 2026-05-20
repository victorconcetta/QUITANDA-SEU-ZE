import { useState } from 'react';

function ImagemZoom({ src, alt }) {
    const [zoom, setZoom] = useState(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setZoom(true)}
                style={{ width: '100%', cursor: 'zoom-in' }}
            />

            {zoom && (
                <div
                    onClick={() => setZoom(false)}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0,
                        width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.85)',
                        overflowY: 'auto',
                        zIndex: 9999,
                        cursor: 'zoom-out',
                    }}
                >
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            width: '150%',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </div>
            )}
        </>
    );
}

export default ImagemZoom;