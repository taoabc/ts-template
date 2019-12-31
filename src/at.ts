interface GitPeople {
  realName: string;
  authorName: string;
  authorEmail: string;
  userName: string;
  userEmail: string;
  phone: string;
}

const _ = {
  find(arr: GitPeople[], obj: object) {
    console.log('just test');
    return null;
  }
};

const atTable: GitPeople[] = [];
function tryGetRealName(name: string) {
  const finded = findPeople(name, null);
  return finded ? finded.realName : name;
}

// 这个函数建立在不可能两个人使用同一个name和email的情况下
function findPeople(name: string, email: string | null): GitPeople | null {
  let finded: GitPeople | null = null;
  if (email) {
    finded = _.find(atTable, { authorEmail: email });
    if (!finded) {
      finded = _.find(atTable, { userEmail: email });
    }
  }
  if (!finded) {
    finded = _.find(atTable, { authorName: name });
  }
  if (!finded) {
    finded = _.find(atTable, { userName: name });
  }
  return finded;
}

function getMobile(name: string, email: string | null) {
  const people = findPeople(name, email);
  return people ? people.phone : null;
}

export default {
  tryGetRealName,
  findPeople,
  getMobile
};
