import CompetitiveEdge from "../app/sections/CompetitiveEdge"
import EmpowerYourBusiness from "../app/sections/EmpowerYourBusiness"
import ProvenProcessStep from "../app/sections/ProvenProcessStep"
import DigiRepsDifference from "../app/sections/DigiRepsDifference"
import SuccessStories from "../app/sections/SuccessStories"
import PartnerLogos from "../app/sections/PartnerLogos"
import HearClientsSuccessWorlds from "../app/sections/HearClientsSuccessWorlds"

const Home = () => {
  return (<>
    <main>
      {/* Competitive Edge */}
      <CompetitiveEdge />
      {/* Empower Your Business */}
      <EmpowerYourBusiness />
      {/* Proven Process Step by Step */}
      <ProvenProcessStep />
      {/* The DigiReps Difference — Explained */}
      <DigiRepsDifference />
      {/* Success Stories: How We Help Businesses Scale */}
      <SuccessStories />
      {/* Partner Sliding Logos */}
      <PartnerLogos />
      {/* Hear It from Our Clients: Success in Their Own Words */}
      <HearClientsSuccessWorlds />
    </main>
  </>
  );
}

export default Home;