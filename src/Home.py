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
    st.image("portrait.jpg", width=250)

with col2:
    st.title("Sheng Xiong Ding (Roland)")
    st.subheader("Data Scientist | AI & ML Specialist | Solutions Architect")
    st.write("Data enthusiast, AI innovator, and problem-solver driven by curiosity and impact.")

# About Me section
st.header("About Me")
st.write("""
    
    I am a dedicated data scientist with a comprehensive background that spans across multiple industries, driven by an insatiable curiosity and a passion for innovation. My journey into the realm of Artificial Intelligence (AI) and Machine Learning (ML) began with my academic foundation in business data analytics, where I first recognized the transformative power of data in solving real-world challenges. This realization has fueled my career and informed my approach to both technical and strategic problem-solving.

With years of experience in developing and deploying data-driven solutions, I have honed my skills in programming languages such as Python, JavaScript, HTML, CSS, and VBA. I possess an in-depth understanding of data ETL pipelines, employing both SQL and NoSQL systems to streamline complex data workflows. Additionally, I am adept at leveraging cloud technologies including AWS and GCP, utilizing services like IAM, Amplify, S3, EC2, and Vertex AI to build scalable and secure solutions.

A significant part of my expertise lies in fine-tuning large language models, such as OpenAI's GPT-3 and GPT-4, and emerging models like Llama 2. My approach emphasizes creating AI solutions that not only push technical boundaries but also offer tangible business value. I am proficient in using version control tools like Git and implementing CI/CD pipelines to ensure smooth and efficient deployment processes.

Beyond technical capabilities, my strength in communication allows me to convey complex ideas transparently and effectively, fostering collaboration and aligning projects with business objectives. I’ve been commended for my analytical thinking, problem-solving abilities, and attention to detail—qualities that enable me to navigate fast-paced environments and tackle intricate challenges with confidence.

What truly drives me is the opportunity to bridge the gap between cutting-edge technology and meaningful business impact. Whether it's through collaborating with cross-functional teams, building user-centric dashboards, or mentoring others in their data science journey, my mission is to contribute to a world where data and AI empower better decisions and foster innovation.

As I look toward the future, I remain committed to growing within the dynamic fields of AI and data science. I’m excited by the ever-evolving landscape and motivated to stay at the forefront, continuously learning and applying my expertise to make a lasting impact.
""")

# Footer
st.write("---")
st.markdown("Built with ❤️ using Streamlit") 