"use client";
import React, { useState, useEffect } from 'react';
import { Plus, FolderOpen, Database, Sparkles, LogOut, Layout, Save, Trash2, Camera } from 'lucide-react';

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState('portfolio');
    const [projects, setProjects] = useState([]);
    const [knowledge, setKnowledge] = useState([]);
    const [loading, setLoading] = useState(false);

    // New Project State
    const [newProject, setNewProject] = useState({ 
        title: '', 
        category: 'Websites', 
        image: '', 
        images: '', 
        liveLink: '' 
    });

    // New AI Data State
    const [newAI, setNewAI] = useState({ category: 'Web Development', question: '', answer: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const projRes = await fetch('/api/admin/projects');
        const projData = await projRes.json();
        setProjects(projData);

        const knowRes = await fetch('/api/admin/knowledge');
        const knowData = await knowRes.json();
        setKnowledge(knowData.knowledge_base);
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Convert comma-separated images to array
        const projectToSave = {
            ...newProject,
            image: newProject.image || (newProject.images.split(',')[0].trim()),
            images: newProject.images.split(',').map(img => img.trim()).filter(img => img !== '')
        };

        const res = await fetch('/api/admin/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectToSave)
        });
        if (res.ok) {
            setNewProject({ title: '', category: 'Websites', image: '', images: '', liveLink: '' });
            fetchData();
        }
        setLoading(false);
    };

    const handleAddAI = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/admin/knowledge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAI)
        });
        if (res.ok) {
            setNewAI({ category: 'Web Development', question: '', answer: '' });
            fetchData();
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans flex">
            {/* Sidebar */}
            <div className="w-80 bg-slate-900/50 border-r border-white/5 flex flex-col p-8 fixed h-full transition-all">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Layout className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight">DevCodex</h1>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Admin Control</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-4">
                    <button 
                        onClick={() => setActiveTab('portfolio')}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'portfolio' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'hover:bg-white/5 text-slate-400'}`}
                    >
                        <FolderOpen className="w-5 h-5" />
                        <span className="font-bold">Portfolio</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('ai')}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'ai' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'hover:bg-white/5 text-slate-400'}`}
                    >
                        <Database className="w-5 h-5" />
                        <span className="font-bold">AI Dataset</span>
                    </button>
                </nav>

                <button className="flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-500 hover:text-red-400 hover:bg-red-400/5 transition-all mt-auto">
                    <LogOut className="w-5 h-5" />
                    <span className="font-bold">Logout</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-80 p-12">
                <div className="max-w-5xl mx-auto">
                    
                    {activeTab === 'portfolio' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-5">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h2 className="text-4xl font-bold text-white mb-2">Portfolio Management</h2>
                                    <p className="text-slate-400 font-medium">Add and update projects that display on your website.</p>
                                </div>
                            </div>

                            {/* Add Project Form */}
                            <div className="bg-slate-900/40 border border-white/5 rounded-[32px] p-8 mb-12 backdrop-blur-xl">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Plus className="w-5 h-5 text-blue-400" /> Add New Project
                                </h3>
                                <form onSubmit={handleAddProject} className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Title</label>
                                        <input 
                                            value={newProject.title}
                                            onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                                            type="text" 
                                            placeholder="e.g. Luxury Real Estate Platform" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" 
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Category</label>
                                        <select 
                                            value={newProject.category}
                                            onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium appearance-none"
                                        >
                                            <option value="Websites">Websites</option>
                                            <option value="E-Commerce Stores">E-Commerce Stores</option>
                                            <option value="Web Applications">Web Applications</option>
                                            <option value="Mobile Applications">Mobile Applications</option>
                                            <option value="Branding">Branding</option>
                                            <option value="Marketing">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Images (Comma separated paths, e.g. /img1.png, /img2.png)</label>
                                        <div className="relative">
                                            <input 
                                                value={newProject.images}
                                                onChange={(e) => setNewProject({...newProject, images: e.target.value})}
                                                type="text" 
                                                placeholder="/project1.png, /project1-inner.png" 
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pl-14 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" 
                                                required
                                            />
                                            <Camera className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" />
                                        </div>
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Live View Link (Optional)</label>
                                        <input 
                                            value={newProject.liveLink}
                                            onChange={(e) => setNewProject({...newProject, liveLink: e.target.value})}
                                            type="url" 
                                            placeholder="https://example.com" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" 
                                        />
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                        <button 
                                            disabled={loading}
                                            type="submit" 
                                            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3 disabled:opacity-50"
                                        >
                                            <Save className="w-5 h-5" /> {loading ? 'Saving...' : 'Upload Project'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Projects List */}
                            <div className="grid grid-cols-2 gap-8">
                                {projects.map((proj, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden flex items-center gap-6 p-6 group hover:border-blue-500/30 transition-all">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden relative border border-white/10">
                                            <img src={proj.image || (proj.images && proj.images[0])} alt="" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold text-black uppercase tracking-widest">{proj.category}</div>
                                            <h4 className="text-lg font-bold text-white mt-1">{proj.title}</h4>
                                        </div>
                                        <button className="p-4 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all opacity-0 group-hover:opacity-100">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-5">
                             <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h2 className="text-4xl font-bold text-white mb-2">AI Knowledge Base</h2>
                                    <p className="text-slate-400 font-medium">Update the dataset your AI chatbot uses to answer client questions.</p>
                                </div>
                            </div>

                             {/* Add AI Data Form */}
                             <div className="bg-slate-900/40 border border-white/5 rounded-[32px] p-8 mb-12 backdrop-blur-xl">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-indigo-400" /> Expand AI Dataset
                                    </h3>
                                    
                                    {/* Bulk Upload Option */}
                                    <div className="flex items-center gap-4">
                                        <label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2">
                                            <Save className="w-4 h-4 text-indigo-400" /> 
                                            Upload JSON File
                                            <input 
                                                type="file" 
                                                accept=".json" 
                                                className="hidden" 
                                                onChange={async (e) => {
                                                    const file = e.target.files[0];
                                                    if (!file) return;
                                                    
                                                    setLoading(true);
                                                    const reader = new FileReader();
                                                    reader.onload = async (event) => {
                                                        try {
                                                            const json = JSON.parse(event.target.result);
                                                            // If it's a full knowledgeBase export, extract the array
                                                            const dataToUpload = json.knowledge_base || json;
                                                            
                                                            const res = await fetch('/api/admin/knowledge/bulk', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify(dataToUpload)
                                                            });
                                                            
                                                            if (res.ok) {
                                                                alert('Dataset uploaded and synced successfully!');
                                                                fetchData();
                                                            } else {
                                                                alert('Upload failed. Please check the JSON format.');
                                                            }
                                                        } catch (err) {
                                                            alert('Invalid JSON file.');
                                                        }
                                                        setLoading(false);
                                                    };
                                                    reader.readAsText(file);
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <form onSubmit={handleAddAI} className="space-y-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Category</label>
                                            <input 
                                                value={newAI.category}
                                                onChange={(e) => setNewAI({...newAI, category: e.target.value})}
                                                type="text" 
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium" 
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Matched Question</label>
                                            <input 
                                                value={newAI.question}
                                                onChange={(e) => setNewAI({...newAI, question: e.target.value})}
                                                type="text" 
                                                placeholder="e.g. Do you integrate international payments?" 
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium" 
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">AI Answer</label>
                                        <textarea 
                                            value={newAI.answer}
                                            onChange={(e) => setNewAI({...newAI, answer: e.target.value})}
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all font-medium resize-none" 
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button 
                                            disabled={loading}
                                            type="submit" 
                                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-3 disabled:opacity-50"
                                        >
                                            <Save className="w-5 h-5" /> {loading ? 'Saving...' : 'Sync Dataset'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Dataset Preview */}
                            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 scrollbar-hide">
                                {knowledge.slice().reverse().map((item, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-indigo-500/30 transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                                            <button className="p-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <h4 className="text-white font-bold mb-2">Q: {item.question}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">A: {item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
