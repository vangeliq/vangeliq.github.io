import { DownwardArrowIcon } from "../../assets/Icons";

export function Hero({scrollToSection}) {
  return (
                  <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-medium mb-8 leading-tight">
            Hi! I'm Valery
          </h1>
          <p className="text-lg text-foreground-muted/85 mb-8 max-w-2xl leading-relaxed">
I'm a computer science graduate from UBC with experience in full-stack development, data analytics, machine learning, and automation.

<br/>
<br/>

I create tools, dashboards, and ML solutions that streamline workflows and empower teams to make smarter decisions.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center px-6 py-3 bg-primary text-background rounded-md hover:bg-primary/90"
          >
            Learn more about me
            <DownwardArrowIcon />
          </button>
        </div>
  );
}