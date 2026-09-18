import {ImageResponse} from 'next/og';

export const alt = 'FrBakers — artisan cakes and pastries';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                background: '#fff8ef',
                color: '#55352c',
                fontFamily: 'Arial, sans-serif',
                padding: '72px 80px',
            }}
        >
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: 18, background: '#f58fa8'}} />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '72%'}}>
                <div style={{display: 'flex', alignItems: 'center', fontSize: 42, fontWeight: 800}}>
                    Fr<span style={{color: '#d54f73'}}>Bakers</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'column', fontSize: 72, lineHeight: 1.03, fontWeight: 800, letterSpacing: '-3px'}}>
                        Sweet moments<br />start here.
                    </div>
                    <div style={{display: 'flex', fontSize: 27, lineHeight: 1.4, marginTop: 28, color: '#76564c'}}>
                        Artisan cakes, flaky pastries and joyful little treats,
                        baked fresh every day.
                    </div>
                </div>
                <div style={{fontSize: 23, fontWeight: 700}}>www.frbakers.site</div>
            </div>
            <div style={{display: 'flex', position: 'absolute', right: 72, top: 85, width: 260, height: 460, background: '#fadadd', border: '3px solid #55352c'}}>
                <div style={{display: 'flex', position: 'absolute', left: 38, right: 38, bottom: 64, height: 170, background: '#f58fa8', border: '3px solid #55352c'}} />
                <div style={{display: 'flex', position: 'absolute', left: 62, right: 62, bottom: 234, height: 95, background: '#fff', border: '3px solid #55352c'}} />
                <div style={{display: 'flex', position: 'absolute', left: 101, top: 74, width: 58, height: 58, borderRadius: '50%', background: '#d54f73', border: '3px solid #55352c'}} />
                <div style={{display: 'flex', position: 'absolute', left: 50, right: 50, bottom: 42, height: 22, background: '#d9985f'}} />
            </div>
        </div>,
        size,
    );
}
