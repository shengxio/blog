import streamlit as st

# Page configuration
st.set_page_config(
    page_title="Sheng Xiong Ding's site",
    page_icon="👨‍💻",
)

# Custom CSS (keep only relevant styles)
st.markdown("""
    <style>
    .main {
        padding: 2rem;
    }
    .profile-img {
        border-radius: 50%;
    }
    .section-header {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    </style>
""", unsafe_allow_html=True)

# Header section
col1, col2 = st.columns([1, 2])

with col1:
    with st.container(border=True):
        st.image("portrait.jpg")
    
    st.subheader("Sheng Xiong Ding (Roland)")
    st.write("Data Scientist | AI & ML Specialist | Solutions Architect")
    st.write("Data enthusiast, AI innovator, and problem-solver driven by curiosity and impact.")

with col2:
    # About Me section
    st.header("About Me")
    st.write("""
        I am a versatile Data Scientist and Solutions Architect with extensive experience in both software development and industrial automation. My expertise spans across multiple domains, from developing AI-powered applications to implementing industrial control systems.

        In the realm of AI and Machine Learning, I specialize in:
        - Developing and deploying machine learning models for predictive analytics and natural language processing
        - Creating intelligent systems using large language models for content analysis and automation
        - Building scalable data pipelines and APIs using modern frameworks like FastAPI and Flask
        - Implementing cloud-native solutions across AWS, Azure, and GCP platforms

        My industrial automation background includes:
        - Designing and implementing PLC-based control systems
        - Developing temperature prediction and monitoring systems for cold chain logistics
        - Creating autonomous environmental control systems for industrial applications
        - Implementing electrical systems for various industrial applications

        I bring a unique combination of skills that bridge the gap between traditional industrial systems and modern AI solutions. My projects demonstrate this versatility - from developing AI-powered co-pilot systems for transportation to implementing autonomous bioreactor control systems.

        My technical expertise includes:
        - Programming: Advanced proficiency in Python, with strong capabilities in web technologies (HTML, CSS, JavaScript)
        - Libraries & Frameworks: Extensive experience with data science tools (pandas, Scikit-learn) and web frameworks (FastAPI, Flask, Streamlit)
        - Cloud Platforms: Comprehensive knowledge of cloud services across AWS, Azure, and GCP
        - Industrial Systems: Deep understanding of PLC programming and industrial automation

        I am passionate about creating solutions that combine cutting-edge AI technologies with practical industrial applications. Whether it's developing intelligent agents for process automation or implementing smart control systems, I focus on delivering robust, scalable, and efficient solutions.
    """)

# Footer
st.write("---")
