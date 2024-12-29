import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params; // Extract `id` from `context.params`
    
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id), // Use the `id` from the params
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params; // Extract `id` from `context.params`

    await prisma.blog.delete({
      where: {
        id: parseInt(id), // Use the `id` from the params
      },
    });

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
