import streamlit as st
import pandas as pd
import plotly.express as px
from utils import load_json

st.set_page_config(page_title="Skills and Services", page_icon="🛠️",layout="wide")

skills_data = load_json('content/skills.json')
services_data = load_json('content/services.json')

skill_col, service_col = st.columns([2,3])

with skill_col:
    st.title("Skills")
    
    # Role Functions
    st.subheader("Role Functions")
    roles = skills_data.get('roles', {})
    
    # Display role functions as progress bars
    for role, score in roles.items():
        left, mid, right = st.columns([2, 3, 1])
        with left:
            st.write(f"**{role}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # Programming skills
    st.subheader("Programming")
    programming = skills_data.get('programming', {})
    
    for skill, score in programming.items():
        left, mid, right = st.columns([1, 4, 1])
        with left:
            st.write(f"**{skill}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # Libraries
    st.subheader("Libraries")
    libraries = skills_data.get('libraries', {})
    
    for lib, score in libraries.items():
        left, mid, right = st.columns([1, 4, 1])
        with left:
            st.write(f"**{lib}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # Deployment
    st.subheader("Deployment")
    deployments = skills_data.get('deployments', {})
    
    for platform, services in deployments.items():
        with st.expander(f"{platform} ({len(services)})"):
            cols = st.columns(3)
            for idx, service in enumerate(services):
                with cols[idx % 3]:
                    with st.container(border=True):
                        st.markdown(f"**{service}**")
    st.divider()

    # Tools
    st.subheader("Tools")
    tools = skills_data.get('tools', {})
    
    for tool, score in tools.items():
        left, mid, right = st.columns([1, 4, 1])
        with left:
            st.write(f"**{tool}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")

with service_col:
    st.title('Services')
    
    # Create a list of all unique tags
    all_tags = set()
    for service in services_data:
        all_tags.update(service["tags"])
    
    all_tags = sorted(list(all_tags))
    selected_tags = st.multiselect("Filter Services by Skills:", all_tags)
    
    for service in services_data:
        if not selected_tags or any(tag in service["tags"] for tag in selected_tags):
            with st.container(border=True):
                st.subheader(service["title"])
                st.markdown('**Description**: '+service["description"])
                st.markdown('**Skills**: ' + ', '.join(service["tags"]))
            
