// dev

export function getAuthorization(notNeedLogin = false) {
  if (notNeedLogin) {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhoaCIsInN1YiI6MSwiaWF0IjoxNjU0ODMwMTg4LCJleHAiOjE2NTc0MjIxODh9._XTaCkzSspqLvdMo5pTIe2PDGMQA5eJDKE-zHzxG3UQ';
  }
  return sessionStorage.getItem('Authorization');
}

export function setAuthorization(token) {
    sessionStorage.setItem('Authorization', token)
}

export function clearAuthorization() {
    sessionStorage.removeItem('Authorization')
}
