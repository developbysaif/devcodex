import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/lib/projects.json');
        const data = await fs.readFile(filePath, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const newProject = await request.json();
        const filePath = path.join(process.cwd(), 'src/lib/projects.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        const projects = JSON.parse(fileData);
        
        projects.push(newProject);
        
        await fs.writeFile(filePath, JSON.stringify(projects, null, 2), 'utf8');
        return NextResponse.json({ success: true, message: 'Project added successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
    }
}
