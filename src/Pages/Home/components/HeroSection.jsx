// src/pages/Home/components/HeroSection.jsx
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";
import { Heading, Text} from "../../../components/ui"

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-8">
        
        <Heading level="h1" className="leading-tight">
           
          <Heading>Building Responsibly,</Heading>
          <Heading>Businesses for a complex world.</Heading>
        </Heading>

        <Text variant="light" className="max-w-2xl ">
          Aabid.co is a parent company that builds and oversees ventures across
          multiple sectors focusing on long term and value driven approach.
        </Text>

        <div className="flex flex-wrap gap-4">
          
          <Button className=" bg-white hover:bg-gray-200" variant="secondary" children={<Link to={"/founder-desk"}> Our Companies</Link>}/>
          <Button className="hover:border-white text-white" variant="secondary" children={<Link to={"/partners"}> Our Partners </Link>}/>
          
          
          
          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;


// import { Section, Container, Heading, Text, Button } from "../../../components/ui";

// const HeroSection = () => {
//   return (
//     <Section variant="dark">
//       <Container className="py-20 space-y-6">
//         <Heading level="h1">
//           Building responsible businesses for a complex world.
//         </Heading>

//         <Text variant="light">
//           Aabid.co is a parent company that builds and oversees ventures across
//           safety, technology, media, education, and advisory.
//         </Text>

//         <div className="flex gap-4 flex-wrap">
//           <Button variant="primary">Explore Our Companies</Button>
//           <Button variant="secondary">Founder’s Vision</Button>
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default HeroSection;


