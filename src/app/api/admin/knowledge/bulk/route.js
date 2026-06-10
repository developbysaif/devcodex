import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const payload = await request.json();
        const filePath = path.join(process.cwd(), 'src/lib/knowledgeBase.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);
        
        // Handle both single object and array of objects
        const newItems = Array.isArray(payload) ? payload : [payload];
        
        // Process each item to ensure it has an ID
        const processedItems = newItems.map(item => ({
            ...item,
            id: item.id || Date.now().toString() + Math.random().toString(36).substr(2, 5)
        }));
        
        data.knowledge_base.push(...processedItems);
        
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        return NextResponse.json({ 
            success: true, 
            message: `${processedItems.length} items added successfully` 
        });
    } catch (error) {
        console.error('Bulk upload error:', error);
        return NextResponse.json({ error: 'Failed to process bulk upload' }, { status: 500 });
    }
}
