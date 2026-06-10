import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/lib/knowledgeBase.json');
        const data = await fs.readFile(filePath, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch knowledge base' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const newItem = await request.json();
        const filePath = path.join(process.cwd(), 'src/lib/knowledgeBase.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);
        
        // Add ID if not present
        if (!newItem.id) {
            newItem.id = Date.now().toString();
        }
        
        data.knowledge_base.push(newItem);
        
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        return NextResponse.json({ success: true, message: 'AI Data added successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add knowledge base item' }, { status: 500 });
    }
}
