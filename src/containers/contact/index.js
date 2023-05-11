import Widget from "@/components/widget";
import Table from "@/components/table";
import TableData from "../helpers/table";
import PostalComponent from "@/components/postal";
import PostalData from "../helpers/postal";

function ContactContainer({}) {
  return (
    <div className="container pt-[60px] px-[15px] min-h-screen">
      <div className="mx-auto page-container">
        <div className=" leftSide px-[15px]">
          <div className="w-full contact-us">
            <h1 className="mb-5 font-semibold text-primary-red">Contact us</h1>
            <p className="text-base text-primary-low_dark">
              When you contact the University through this Website, your
              submission is reviewed and then routed to the office/department
              concerned that can best attend to your needs. Because of the
              volume of messages this Web site receives we can&apos;t guarantee
              that you will receive a personal response, but rest assured that
              your submission was received, reviewed, and forwarded to the
              concerned department.
            </p>
            <p className="text-base text-primary-low_dark">
              We are committed in listening to you and improving our services
              based upon your wishes. Your suggestion(s) will be reviewed by the
              department that implements those changes.
            </p>
            <p className="text-base text-primary-low_dark">
              Although we are unable to reply individually to each message we
              receive, we appreciate your thoughts and opinions.
            </p>
          </div>
          <div className="email-us">
            <h1 className="mb-5 font-semibold text-primary-red">E-mail</h1>
            <h2 className="mb-5 text-lg font-semibold leading-6 text-primary-red">
              For general concerns
            </h2>
            <h3 className="leading-[2] inquire text-primary-low_dark">
              inquire@pup.edu.ph
            </h3>
          </div>
          <div className="table">
            <Table data={TableData}/>
          </div>
          <div className="postal">
            <h1 className="mb-5 font-semibold text-primary-red">Postal Mail and Telephone</h1>
            <PostalComponent details={PostalData}/>
          </div>
        </div>
        <div className="w-full rightSide px-[15px]">
          <Widget
            title="contents"
            items={[
              "University Profile",
              "Vision and Mission",
              "History",
              "Logo and Symbols",
              "Hymn",
              "Annual Reports",
              "Awards and Recognitions",
              "Contact Information",
              "Maps",
              "Board of Regents",
              "Executive Officials",
              "Organization Structure",
              "Institutional Development Plan",
              "Quality Policy Statement",
              "University Code",
              "University Calendar",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
