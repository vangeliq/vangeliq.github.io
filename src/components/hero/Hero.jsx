export function Hero({scrollToSection}) {
  return (
                  <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-medium mb-8 leading-tight">
            Hi! I'm Valery, a computer science graduate from UBC
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
Computer Science graduate from UBC with experience in full-stack development, data analytics, machine learning, and automation. 

<br/>
<br/>

I create tools, dashboards, and ML solutions that streamline workflows and empower teams to make smarter decisions.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Learn more about me
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
  );
}