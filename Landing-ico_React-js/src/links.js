import * as React from 'react';

let linkSearch = [], splitSearch = window.location.search.replace('?','').split('&');
for(let i in splitSearch){
  let key_val_split = splitSearch[i].split('=');
  linkSearch[key_val_split[0]] = key_val_split[1];
}

export const getGAID = function(){
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
export const ab_val = linkSearch['ab_val']

export const list_lngs = 'en zn ko tr fr ja vi pt ar de es'; //языки который мы используем нужно тут указать
const user_lng = window.localStorage.getItem('loc') || navigator.language || 'en';
const user_loc = user_lng.split('_')[0].split('-')[0];
const loc = ((list_lngs.indexOf(user_loc) != -1) ? user_loc : 'en');

export const lng = loc;

const list_hasDocs = 'zn en tr ko';
const doc_forUser = ((list_hasDocs.indexOf(loc) != -1) ? loc : 'en');

const docs = {
  wp: `https://static.cindx.io/${doc_forUser}/whitepaper.pdf`,
  pr: `https://static.cindx.io/${doc_forUser}/pres.pdf`,
  fm: `https://static.cindx.io/${doc_forUser}/f_model.pdf`,
  ld: `https://static.cindx.io/${doc_forUser}/legal_docs.pdf`,
  op: `https://static.cindx.io/${doc_forUser}/one_pager.pdf`,
};

export const links = {
  anchor: '1',
  anchor: '2',
  anchor: '3',
  anchor: '4',
  mvp: `http://mvp.cindx.io/registration/sign-in?loc=${lng}`,
  joinpresale: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  wp: docs.wp,
  pr: docs.pr,
  op: docs.op,
  fm: docs.fm,
  ld: docs.ld,
  buytokens: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}`,
  lD: 'https://static.cindx.io/Legal_Disclaimer.pdf',
  pp: 'https://static.cindx.io/Privacy_Policy.pdf',
  gaid: getGAID,
  clickid
};

/*
const localizations = {
  'ar': 14902153,
  'en': 14903217,
  'zn': 14902301,
  'fr': 14902241,
  'de': 14902193,
  'ko': 14902273,
  'ja': 14902253,
  'es': 14902205,
  'tr': 14902169,
  'vi': 14902297,
  'pt': 14902289,
};
*/

/*
Ar arbic
Zn chine
Fr france
De - germany
Ko - korea
Ja - japan
Es Испания
Tr турецкий
Vi вьетнамский
Pt Португалия
*/

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
      <a target="_blank" href={links.joinpresale+`&gaid=${gaid}&lang=${loc}`} className={props.className}>
        {props.text}
      </a>
    )
  }
}


