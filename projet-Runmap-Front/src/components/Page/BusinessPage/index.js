import React from 'react';

import './businessPage.scss';

const BusinessPage = () => (

  <>

    <div className="business-header">
      <div className="background-header-black">
        <div className="container container-business-header">
          <div className="header-business-content">
            <p>Dynamisez votre entreprise, motivez vos collaborateurs grâce à nos solutions pour les professionnel et associations</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container business-motivation">
      <div className="motivation-content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid iste nisi facilis? Neque molestias, omnis cupiditate voluptas cumque voluptates quidem quia consequatur excepturi, velit, dicta harum laboriosam. Expedita eveniet tempore illum ipsam temporibus saepe non officia. Deleniti, mollitia hic.</p>
      </div>
    </div>

    <div className="container business-counter">
      <div className="row counter-content">
        <div className="col-sm col-counter">
          <div className="counter-number">10</div>
          <div className="counter-descript">Membres</div>
        </div>
        <div className="col-sm col-counter col-counter-devider ">
          <div className="counter-number">20</div>
          <div className="counter-descript">Villes</div>
        </div>
        <div className="col-sm col-counter">
          <div className="counter-number">30</div>
          <div className="counter-descript">Lieux référencé</div>
        </div>
        
      </div>
    </div>

    {/* Solutions clubs */}
    <div className="container business-club container-solutions">
      <div className="row col-business-club">
        <div className="col-sm col-business col-text-club">
          <div className="text-club-title text-title">
            <p className="header-title">Solution Clubs</p>
            <h4>Vos adhérents deviennent des ambassadeurs...</h4>
          </div>
          <div className="text-club-content text-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae nam iste perferendis omnis ullam, eum eius a neque blanditiis.</p>
          </div>
        </div>
        <div className="col-sm col-business col-img">
            <div className="col-img-club"></div>
        </div>
      </div>
    </div>

    {/* Solutions entreprises */}
    <div className="container business-work container-solutions">
      <div className="row col-business-work">
      <div className="col-sm col-business col-img">
      <div className="col-img-work"></div>
      </div>
        <div className="col-sm col-business col-text-work">
          <div className="text-work-title text-title">
            <p className="header-title">Solution Entreprises</p>
            <h4>Sportivement collaborateur</h4>
          </div>
          <div className="text-club-content text-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae nam iste perferendis omnis ullam, eum eius a neque blanditiis.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Solutions professionnel */}
    <div className="container business-pro container-solutions">
      <div className="row col-business-pro">
        <div className="col-sm col-business col-text-pro">
          <div className="text-pro-title text-title">
            <p className="header-title">Solution Pro</p>
            <h4>Élargir sa visibilitée</h4>
          </div>
          <div className="text-club-content text-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae nam iste perferendis omnis ullam, eum eius a neque blanditiis.</p>
          </div>
        </div>
        <div className="col-sm col-business col-img">
          <div className="col-img-pro"></div>
        </div>
      </div>
    </div>

  </>

);

export default BusinessPage;