import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { saveBlogImage } from '../../../../utils/blogUpload';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(blogs);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const thumbnailFile = formData.get('thumbnail') as File;

    if (!title || !content || !thumbnailFile) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const thumbnailUrl = await saveBlogImage(buffer, thumbnailFile.name);

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        thumbnail: thumbnailUrl,
      },
    });

    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}