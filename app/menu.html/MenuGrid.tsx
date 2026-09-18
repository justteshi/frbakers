'use client';
import {useState} from 'react';
import {products} from '../data';

const cats = ['All', 'Cakes', 'Pastries', 'Cupcakes', 'Cookies', 'Macarons', 'Seasonal'];
export default function MenuGrid() {
    const [cat, setCat] = useState('All');
    const shown = cat === 'All' ? products : products.filter(p => p.cat === cat);
    return <>
        <div className="filters" role="group" aria-label="Filter menu by category">{cats.map(c => <button key={c}
                                                                                                          className={cat === c ? 'active' : ''}
                                                                                                          aria-pressed={cat === c}
                                                                                                          onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="menu-grid" aria-live="polite">{shown.map(p => <article className="menu-card" key={p.name}><img
            loading="lazy" width="420" height="360" src={`/assets/images/${p.img}`} alt={p.name}/>
            <div><span className="dietary">{p.badge}</span><h2>{p.name}</h2><p>{p.desc}</p><strong>{p.price}</strong>
            </div>
        </article>)}</div>
    </>
}
