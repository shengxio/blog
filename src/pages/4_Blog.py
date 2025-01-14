import streamlit as st
from datetime import datetime
from utils import load_json

st.set_page_config(page_title="Blog", page_icon="📝",layout="wide")

blog_posts = load_json('content/posts.json')

st.title("Blog Posts")

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

# Create two columns for self and external posts
self_col, env_col = st.columns(2)

# Display self posts
with self_col:
    st.subheader("Personal Updates")
    for post in blog_posts.get("self", []):
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

# Display environment posts
with env_col:
    st.subheader("Environment & Tech")
    for post in blog_posts.get("environment", []):
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
