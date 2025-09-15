export function About() {
  return (
<div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8 mt-8">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-top">
            <div>
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                I'm a recent Computer Science graduate from the University of British Columbia, 
                where I developed a strong foundation in software engineering, algorithms, and system design.
              </p>
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                My passion lies in full-stack development, with experience in modern frameworks like React, 
                Node.js, and Python. I enjoy tackling complex problems and turning ideas into functional, 
                user-friendly applications.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                When I'm not coding, you can find me walking around the city of Vancouver, starting a crafts project, or attending conferences and local meetups that I have no business being in.
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
                  <p className="text-foreground-muted">React, Vue.js, HTML5, CSS3, Tailwind CSS</p>
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