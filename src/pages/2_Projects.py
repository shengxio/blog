import streamlit as st
from utils import load_json

st.set_page_config(page_title="Projects", page_icon="💼",layout="wide")

projects = load_json('content/projects.json')

st.title("Projects")

# Add your custom CSS for project cards
st.markdown("""
    <style>
    .project-card {
        background-color: var(--st-color-secondary-background-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        border: 1px solid var(--st-color-secondary-background-border);
    }
    </style>
""", unsafe_allow_html=True)

# Create a list of all unique tags from projects
all_tags = set()
for project in projects:
    all_tags.update(project["tags"])

all_tags = sorted(list(all_tags))

# Create columns for the grid
filter_col, col1, col2 = st.columns([1,2,2])

# Create filter section
with filter_col:
    selected_tags = st.multiselect("Filter Projects by Skills:", all_tags)

# Filter and display projects
filtered_projects = [
    project for project in projects 
    if not selected_tags or any(tag in project["tags"] for tag in selected_tags)
]

for i, project in enumerate(filtered_projects):
    with [col1, col2][i % 2]:
        st.markdown(f"""
            <div class="project-card">
                <h3>{project['title']}</h3>
                <p>{project['description']}</p>
                <p><small><strong>Skills:</strong> {' • '.join(project['tags'])}</small></p>
            </div>
        """, unsafe_allow_html=True)