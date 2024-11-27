import streamlit as st
from datetime import datetime

st.set_page_config(page_title="Blog", page_icon="📝",layout="wide")

st.title("Blog Posts")

# You can store your blog posts as dictionaries
blog_posts = [
    {
        "title": "Getting Started with Data Science",
        "date": "2024-03-15",
        "preview": "A beginner's guide to starting your journey in data science...",
        "tags": ["Data Science", "Beginner", "Guide"],
        "read_time": "5 min read"
    },
    {
        "title": "Machine Learning Best Practices",
        "date": "2024-03-10",
        "preview": "Essential tips and tricks for improving your ML models...",
        "tags": ["Machine Learning", "Tips", "Best Practices"],
        "read_time": "8 min read"
    },
    # Add more blog posts here
]

# Update the CSS to use theme-compatible colors
st.markdown("""
    <style>
    .blog-tag {
        background-color: rgba(128, 128, 128, 0.2);
        padding: 2px 10px;
        border-radius: 15px;
        font-size: 0.8em;
        margin-right: 5px;
    }
    .blog-metadata {
        color: rgba(128, 128, 128, 0.8);
        font-size: 0.9em;
    }
    </style>
""", unsafe_allow_html=True)

# Display
# Display blog posts
for post in blog_posts:
    st.markdown(f"""
        <div style="padding: 20px; border-radius: 10px; background-color: rgba(128, 128, 128, 0.1); margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h2>{post['title']}</h2>
            <div class="blog-metadata">
                {datetime.strptime(post['date'], '%Y-%m-%d').strftime('%B %d, %Y')} • {post['read_time']}
            </div>
            <p style="margin: 15px 0;">{post['preview']}</p>
            <div>
                {' '.join([f'<span class="blog-tag">{tag}</span>' for tag in post['tags']])}
            </div>
        </div>
    """, unsafe_allow_html=True)
