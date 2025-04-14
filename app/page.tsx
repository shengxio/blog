export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            I am a versatile Data Scientist and Solutions Architect with extensive experience in both software development and industrial automation. My expertise spans across multiple domains, from developing AI-powered applications to implementing industrial control systems.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">In the realm of AI and Machine Learning, I specialize in:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Developing and deploying machine learning models for predictive analytics and natural language processing</li>
            <li>Creating intelligent systems using large language models for content analysis and automation</li>
            <li>Building scalable data pipelines and APIs using modern frameworks like FastAPI and Flask</li>
            <li>Implementing cloud-native solutions across AWS, Azure, and GCP platforms</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">My industrial automation background includes:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Designing and implementing PLC-based control systems</li>
            <li>Developing temperature prediction and monitoring systems for cold chain logistics</li>
            <li>Creating autonomous environmental control systems for industrial applications</li>
            <li>Implementing electrical systems for various industrial applications</li>
          </ul>

          <p className="mb-4">
            I bring a unique combination of skills that bridge the gap between traditional industrial systems and modern AI solutions. My projects demonstrate this versatility - from developing AI-powered co-pilot systems for transportation to implementing autonomous bioreactor control systems.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">My technical expertise includes:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Programming: Advanced proficiency in Python, with strong capabilities in web technologies (HTML, CSS, JavaScript)</li>
            <li>Libraries & Frameworks: Extensive experience with data science tools (pandas, Scikit-learn) and web frameworks (FastAPI, Flask, Streamlit)</li>
            <li>Cloud Platforms: Comprehensive knowledge of cloud services across AWS, Azure, and GCP</li>
            <li>Industrial Systems: Deep understanding of PLC programming and industrial automation</li>
          </ul>

          <p className="mb-4">
            I am passionate about creating solutions that combine cutting-edge AI technologies with practical industrial applications. Whether it's developing intelligent agents for process automation or implementing smart control systems, I focus on delivering robust, scalable, and efficient solutions.
          </p>
        </div>
      </section>
    </div>
  );
} 