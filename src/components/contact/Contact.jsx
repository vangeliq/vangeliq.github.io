import { Emailicon,LinkedInicon, Githubicon } from '../../assets/Icons';



function ContactButton({icon: Icon, text, href, className = "", ...props}) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 rounded-md transition-colors";
  const defaultClasses = "border border-gray-300 text-gray-700 hover:bg-gray-50";
  
  return (
    <a
      href={href}
      className={`${baseClasses} ${className || defaultClasses}`}
      {...props}
    >
    {Icon && 
      <div className="h-5 w-5 mr-2 text-current">
        <Icon/>
      </div>
    } 
    {text}
    </a>
  );
}


export function Contact() {
  return (
<div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, interesting projects, or just chat about technology. 
            Feel free to reach out if you'd like to collaborate or connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton 
              icon={Emailicon} 
              text="Send Email" 
              href="mailto:valery@example.com"
              className="bg-gray-900 text-white hover:bg-gray-800"
            />
            <ContactButton 
              icon={LinkedInicon} 
              text="LinkedIn" 
              href="https://linkedin.com/in/valery-angelique"
              target="_blank"
              rel="noopener noreferrer"
            />
            <ContactButton 
              icon={Githubicon} 
              text="GitHub" 
              href="https://github.com/vangeliq"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
  );
}