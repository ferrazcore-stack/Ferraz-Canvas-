import { useEffect, useMemo, useState } from 'react';
import { Search, Plus, LayoutGrid, FolderKanban, Clock3, FileText, PanelsTopLeft, Ruler, GitCompareArrows, Sparkles, Check, AlertCircle, X } from 'lucide-react';

const KEY = 'ferraz-canvas.projects.v1';
const types = [
  { id: 'proposta', label: 'Proposta comercial', Icon: FileText },
  { id: 'prancha', label: 'Prancha / apresentação', Icon: PanelsTopLeft },
  { id: 'tecnico', label: 'Desenho técnico', Icon: Ruler },
  { id: 'comparativo', label: 'Comparativo de fornecedores', Icon: GitCompareArrows },
  { id: 'livre', label: 'Trabalho livre', Icon: Sparkles },
];
function load() { try { const v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; } }
function date(v) { try { return new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(v)); } catch { return 'Agora'; } }

export default function App() {
  const [projects,setProjects] = useState(load);
  const [search,setSearch] = useState('');
  const [modal,setModal] = useState(false);
  const [name,setName] = useState('');
  const [client,setClient] = useState('');
  const [type,setType] = useState('livre');
  const [saved,setSaved] = useState('saved');
  const [notice,setNotice] = useState('');

  useEffect(() => {
    setSaved('saving');
    try { localStorage.setItem(KEY,JSON.stringify(projects)); setSaved('saved'); }
    catch { setSaved('error'); }
  },[projects]);

  const visible = useMemo(() => projects.filter(p => [p.name,p.client,p.typeLabel].join(' ').toLowerCase().includes(search.toLowerCase())),[projects,search]);
  function create(e) {
    e.preventDefault(); if (!name.trim()) return;
    const t = types.find(x => x.id === type) || types[4];
    setProjects(current => [{id:globalThis.crypto?.randomUUID?.() || String(Date.now()),name:name.trim(),client:client.trim(),type,typeLabel:t.label,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),version:1},...current]);
    setName('');setClient('');setType('livre');setModal(false);setNotice('Projeto criado neste navegador.');setTimeout(()=>setNotice(''),3000);
  }
  function version(id) { setProjects(current=>current.map(p=>p.id===id?{...p,version:(p.version||1)+1,updatedAt:new Date().toISOString()}:p));setNotice('Marco de versão registrado no protótipo.');setTimeout(()=>setNotice(''),3000); }

  return <div className="shell">
    <aside className="sidebar">
      <a className="brand" href="#"><span className="mark">F</span><span><b>FERRAZ</b><small>CANVAS</small></span></a>
      <p className="side-label">ESPAÇO DE TRABALHO</p>
      <nav><a className="nav active" href="#overview"><LayoutGrid size={18}/>Visão geral</a><a className="nav" href="#projects"><FolderKanban size={18}/>Meus projetos <span className="count">{projects.length}</span></a><a className="nav" href="#projects"><Clock3 size={18}/>Recentes</a></nav>
      <div className="side-bottom"><div className="hint"><Sparkles size={18}/><b>Seu espaço criativo</b><p>Propostas, pranchas e trabalhos técnicos em um só lugar.</p></div><div className="profile"><span className="avatar">F</span><span><b>Área pessoal</b><small>Protótipo local</small></span></div></div>
    </aside>
    <main className="main" id="overview">
      <header className="topbar"><div className="crumb">Espaço de trabalho <span>/</span> <b>Visão geral</b></div><div className="top-actions"><span className={'save '+saved}>{saved==='saved'?<Check size={14}/>:<AlertCircle size={14}/>} {saved==='saved'?'Salvo neste navegador':saved==='error'?'Falha ao salvar':'Salvando…'}</span><button className="primary" onClick={()=>setModal(true)}><Plus size={16}/>Novo trabalho</button></div></header>
      <section className="hero"><p className="eyebrow">SEU ESPAÇO DE CRIAÇÃO</p><h1>Transforme ideias em <em>projetos.</em></h1><p>Um lugar organizado para desenvolver, revisar e acompanhar seus trabalhos.</p><div className="hero-mark">F</div></section>
      <section className="shortcuts">{types.slice(0,4).map(t=><button key={t.id} className="shortcut" onClick={()=>{setType(t.id);setModal(true)}}><span className={'type-icon '+t.id}><t.Icon size={19}/></span><span>{t.label}</span><span className="arrow">↗</span></button>)}</section>
      <section id="projects">
        <div className="section-head"><div><h2>Seus projetos</h2><p>Seus trabalhos em um só lugar.</p></div><button className="secondary" onClick={()=>setModal(true)}><Plus size={16}/>Criar projeto</button></div>
        <div className="toolbar"><label className="search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar por projeto, cliente ou tipo…"/></label><span>{visible.length} {visible.length===1?'projeto':'projetos'}</span></div>
        {!visible.length?<div className="empty"><div className="empty-mark"><FolderKanban size={24}/></div><h3>{search?'Nenhum resultado encontrado':'Seu espaço começa aqui'}</h3><p>{search?'Tente outro termo.':'Crie seu primeiro trabalho para começar a organizar suas ideias.'}</p>{!search&&<button className="primary" onClick={()=>setModal(true)}><Plus size={16}/>Criar primeiro trabalho</button>}</div>:<div className="grid">{visible.map(p=>{const t=types.find(x=>x.id===p.type)||types[4];return <article className="card" key={p.id}><div className={'cover '+p.type}><div className="paper"><t.Icon size={26}/><span>{t.label}</span></div></div><div className="card-body"><small>{t.label}</small><h3>{p.name}</h3><p>{p.client||'Sem cliente associado'}</p><div className="meta"><b>V{p.version||1}</b><span>Atualizado {date(p.updatedAt||p.createdAt)}</span></div><button className="version" onClick={()=>version(p.id)}><Plus size={14}/>Nova versão</button></div></article>})}</div>}
      </section>
      <footer><span>FERRAZ Canvas · Protótipo de trabalho</span><span className="warning"><AlertCircle size={13}/> Dados somente neste navegador</span></footer>
    </main>
    {modal&&<div className="backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false)}}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div className="dialog-head"><div><p className="eyebrow">NOVO PROJETO</p><h2 id="dialog-title">Vamos começar?</h2></div><button className="close" onClick={()=>setModal(false)} aria-label="Fechar"><X size={19}/></button></div><form onSubmit={create}><label>Nome do trabalho<input autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="Ex.: Apresentação cozinha" required maxLength={100}/></label><label>Cliente ou obra <span>(opcional)</span><input value={client} onChange={e=>setClient(e.target.value)} placeholder="Nome do cliente ou obra" maxLength={100}/></label><label>Tipo de trabalho<select value={type} onChange={e=>setType(e.target.value)}>{types.map(t=><option key={t.id} value={t.id}>{t.label}</option>)}</select></label><div className="note"><AlertCircle size={15}/>Os dados ficam neste navegador e não sincronizam entre dispositivos.</div><div className="dialog-actions"><button type="button" className="secondary" onClick={()=>setModal(false)}>Cancelar</button><button type="submit" className="primary"><Plus size={16}/>Criar trabalho</button></div></form></section></div>}
    {notice&&<div className="toast" role="status"><Check size={15}/>{notice}</div>}
  </div>;
}
