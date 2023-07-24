import mixpanel from "../../plugins/Mixpanel";
import AnimatedLogo from "../reusables/AnimatedLogo";
import Button from "../reusables/Button/Button";
import "./Header.css";

function Header() {
  return (
    <header>
      <AnimatedLogo />
      <div className="header-buttons">
        <Button
          handleClick={() =>
            mixpanel.track("Buy Hackathons", {
              type: "lead",
            })
          }
          text="Organize hackathons"
          small={true}
          link={`https://app.buidlbox.io/buy-hackathons`}
        />
        <Button
          handleClick={() =>
            mixpanel.track("Launch App", {
              type: "lead",
            })
          }
          text="Launch app"
          small={true}
          first={true}
          link={`https://app.buidlbox.io/`}
        />
      </div>
    </header>
  );
}

export default Header;
