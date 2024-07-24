import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold">
          About Me
        </h2>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold">
          Work Experience
        </h2>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration, Logo }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              logo={Logo}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h2 className="text-lg pt-10 text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl xl:leading-tight font-bold">
          Education
        </h2>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Logo, Subjects }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              logo={Logo}
              subjects={Subjects}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
