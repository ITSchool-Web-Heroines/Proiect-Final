import css from "../styles/Services.module.css"
import { useState } from 'react';

const ExpandableText = ({ children, descriptionLength }) => {
  const fullText = children;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className='text'>
      {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
      <span onClick={toggleText} className={css.toggle}>
        {isExpanded ? 'Show less' : 'Show more'}
      </span>
    </p>
  );
};

export default function Services() {
  return (
    <div className={css.services}>
      <h1>Who are WE</h1>
      <div className={css.content}>
        <div className={css.cards}>
          <div className={css.card}>
            <div className={css.sbox}>
              <h3>Hardware, software, and services, working together as one.</h3>
              <p><ExpandableText descriptionLength={200}>
                Apple products are designed to reduce our impact on the planet while maximizing performance and strength. We strictly monitor our supply chain during manufacturing, are careful to design for energy efficiency, and work to make our products as recyclable as possible.
                We consider our impact on people and the planet in everything we do. And we continue to ask ourselves how we can make our work an even greater force for good in the world. 
                We’re already carbon neutral across our corporate operations and are on the way to making carbon neutral products by 2030. Learn more about our latest efforts to reduce our remaining carbon footprint, fight climate change, and support equity.
              </ExpandableText></p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.sbox}>
              <h3>Apple makes business better.</h3>
              <p><ExpandableText descriptionLength={200}>
                Apple hardware, software, and services work together to give your employees the power and flexibility to do whatever needs doing — whether you’re running a startup, scale-up, or global enterprise.
                Apple innovation is already changing the way people do business — from retail to manufacturing and services. And because Apple products integrate seamlessly with existing corporate infrastructure, deployment is as easy as it is powerful.
                You can start a project on Mac and finish it on iPad, use your screens side by side to extend your workspace, and even draw with Apple Pencil on your iPad or use your iPhone to make live updates on your Mac. And it’s all compatible with apps from Microsoft and Google, so your team has everything it needs to get any job done.
              </ExpandableText></p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.sbox}>
              <h3>Security first, second, and third.</h3>
              <p><ExpandableText descriptionLength={200}>
              Every Apple product is built from the ground up to protect your privacy. We don’t create user profiles, sell personal information, or share data with third parties to use for marketing or advertising. And apps share only the information that you authorize
                Privacy is a fundamental human right. It’s also one of our core values. Which is why we design our products and services to protect it. That’s the kind of innovation we believe in. Apple devices and platforms are designed to keep your personal data and corporate information secure. Key security features, like hardware-based device encryption, can’t be disabled by mistake. Touch ID and Face ID make it easy to secure every device. And because many of these features are enabled by default, employees and IT won’t need to perform extensive configurations.
              </ExpandableText></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
