export function About() {
  return (
<div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8 mt-8">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-top">
            <div className="text-lg text-foreground-muted leading-relaxed">
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                As a lifelong learner I love exploring new technologies and frameworks, and I'm always eager to take on new challenges that push me to grow both personally and professionally.
              </p>
              <p className="mb-6 ">
                My passion lies in creating interdisciplinary projects that blend multiple facets of software development, from web development to AI/ML integration, and DevOps practices.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                When I'm not coding, you can find me walking around the city of Vancouver, starting a crafts project, or attending conferences and local meetups.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-foreground/10 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Skills & Technologies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <p className="text-foreground-muted">JavaScript, TypeScript, Python, Java, C++</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <p className="text-foreground-muted">React, Next.js, HTML5, CSS3, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-foreground-muted">Node.js, Express, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tools</h4>
                  <p className="text-foreground-muted">Git, Docker, AWS, Figma, VS Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}