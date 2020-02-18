import React, { Component } from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton.js';
import ClickablePicture from './components/ClickablePicture.js';
import Dice from './components/Dice.js';
import Carousel from './components/Carousel.js';
import NumbersTable from './components/NumbersTable.js';
// import Facebook from './components/FaceBook.js';
import profiles from './data/berlin.json';

const Facebook = props => {
  return profiles.map(profile => {
    return (
      <div class="facebook">
        <img src={profile.img} />
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Country: {profile.country}</p>
        <p>Type: {profile.isStudent === true ? 'Student' : 'Teacher'}</p>
      </div>
    );
  });
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        ></IdCard>
        <IdCard
          lastName="Obrien"
          firstName="Delores"
          gender="female"
          height="1.72m"
          birth='{new Date("1988-05-11")}'
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        ></IdCard>
        <h1>Greetings</h1>
        <Greetings lang="de" text="Ludwig"></Greetings>
        <Greetings lang="fr" text="Francois"></Greetings>
        <Random min="1" max="6"></Random>
        <BoxColor r="255" g="0" b="0"></BoxColor>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
        ></CreditCard>
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
        ></CreditCard>
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
        ></CreditCard>
        <LikeButton></LikeButton>
        <ClickablePicture></ClickablePicture>
        <Dice></Dice>
        <Carousel></Carousel>
        <NumbersTable limit={9}></NumbersTable>
        <Facebook></Facebook>
      </div>
    );
  }
}

export default App;
