import * as React from 'react';

let linkSearch = [], splitSearch = window.location.search.replace('?','').split('&');
for(let i in splitSearch){
  let key_val_split = splitSearch[i].split('=');
  linkSearch[key_val_split[0]] = key_val_split[1];
}

const getGAID = function(){
  var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
  var raw = (match) ? decodeURIComponent(match[1]) : null;
  if (raw) {
    match = raw.match(/(\d+\.\d+)$/);
  }

  var gacid = (match) ? match[1] : 'default';
  if (gacid) {
    return gacid;
  }
};

let clickid = linkSearch['clickid'];
let gaid = getGAID;

export class Join extends React.Component {
  constructor() {
    super();

    this.state = {
      gaid: null
    };

    setTimeout(this.getGaidAssync,1000);
  }

  getGaidAssync = () => {
    this.setState({
      gaid: getGAID()
    });
  }

  render() {
    const { gaid } = this.state;
    const { props } = this;

    return(
      <a target="_blank" href={links.joinpresale+`&gaid=${gaid}`} className={props.className}>
        {props.text}
      </a>
    )
  }
}

export const links = {
  anchor: '1',
  anchor: '2',
  anchor: '3',
  anchor: '4',
  mvp: 'http://mvp.cindx.io/registration/sign-in',
  joinpresale: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  wp: 'https://static.cindx.io/Whitepaper_CINDX_Edited_V_1.5.3.pdf',
  pr: 'https://static.cindx.io/Presentation_ENG_vers_08.25.pdf',
  op: 'https://static.cindx.io/One_pager_ENG_vers_08_25.pdf',
  fm: 'https://static.cindx.io/Financial_Model_08_25.pdf',
  ld: 'https://static.cindx.io/Legal_Docs_ENG_vers_08.25.pdf',
  buytokens: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  lD: 'https://static.cindx.io/Legal_Disclaimer.pdf',
  pp: 'https://static.cindx.io/Privacy_Policy.pdf',
  gaid: getGAID,
  clickid
};

export const lng = 'en';