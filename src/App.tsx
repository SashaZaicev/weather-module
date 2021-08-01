import "./App.scss";
import {HeaderContainer} from "./components";
import {FooterContainer} from "./components/footer";
import {BodyContainer} from "./components/body";

export const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <BodyContainer/>
      <FooterContainer/>
    </div>
  );
};
