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
let gaid = getGAID();

export const links = {
  anchor: '1',
  anchor: '2',
  anchor: '3',
  anchor: '4',
  mvp: 'http://mvp.cindx.io/registration/sign-in',
  joinpresale: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}&gaid=${getGAID()}`,
  wp: 'https://drive.google.com/open?id=1OZZ6tx4co4D1je3h9mvyDZmpNPtQPZlP',
  pr: 'https://drive.google.com/open?id=1_ZhZtNJHdflv7AEQKPeVre9MeOCi6rMB',
  op: 'https://drive.google.com/open?id=12QCJPMqZSwQeUzCZ0tx0MjooZqnWtF2B',
  fm: 'https://drive.google.com/open?id=12WBENK_OsaTOU1-StqvIkQkhYZiMkk3b',
  ld: 'https://drive.google.com/open?id=16bY_MyZW9Q4DdlL_KpnoaaCxP5tLJ55i',
  buytokens: 'https://my.cindx.io/registration' + `?clickid=${linkSearch['clickid']}&gaid=${getGAID()}`,
  lD: 'https://drive.google.com/file/d/1hj3AYFGtQeR6wjOnhtXikdT6BhCkAObM/view',
  gaid,
  clickid
};