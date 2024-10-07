import LandingAnim from "../../components/projectComponent/LandingAnim";
import SocialMedia from "../../components/SocialMedia";

export default function Page() {
  return (
    <div className=" gap-y-4 ">
      <p className="text-4xl text-center m-16">Contacts</p>
      <LandingAnim />
      <div className="w-screen flex justify-center items-center ">
        <SocialMedia />
      </div>
    </div>
  );
}
