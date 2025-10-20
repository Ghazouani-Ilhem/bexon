import { NextRequest, NextResponse } from 'next/server'

// Mock blog data - in a real app, this would come from a database
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js App Router',
    excerpt: 'Learn how to build modern React applications with the new App Router in Next.js 13+',
    content: 'Full content here...',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'John Doe',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: 2,
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Create beautiful, responsive user interfaces using Tailwind CSS utility classes',
    content: 'Full content here...',
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Jane Smith',
    tags: ['CSS', 'Tailwind', 'UI/UX']
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for React',
    excerpt: 'Improve your React development experience with TypeScript best practices',
    content: 'Full content here...',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Mike Johnson',
    tags: ['TypeScript', 'React', 'Best Practices']
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const limit = searchParams.get('limit')
    const tag = searchParams.get('tag')

    let posts = [...blogPosts]

    // Filter by tag if provided
    if (tag) {
      posts = posts.filter(post => 
        post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      )
    }

    // Get specific post by ID
    if (id) {
      const post = posts.find(p => p.id === parseInt(id))
      if (!post) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        )
      }
      return NextResponse.json(post, { status: 200 })
    }

    // Apply limit if provided
    if (limit) {
      posts = posts.slice(0, parseInt(limit))
    }

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, author, tags } = body

    // Validate required fields
    if (!title || !excerpt || !content || !author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new post
    const newPost = {
      id: blogPosts.length + 1,
      title,
      excerpt,
      content,
      author,
      tags: tags || [],
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read' // This could be calculated based on content length
    }

    // In a real app, you would save to database here
    blogPosts.push(newPost)

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Blog creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}