// TODO use this loader instead of useEffect in Github.jsx

const loadGithubUserData = async () => {
  const githubUserData = await fetch(
    'https://api.github.com/users/hex534d'
  );

  return githubUserData.json();
};

export { loadGithubUserData };
