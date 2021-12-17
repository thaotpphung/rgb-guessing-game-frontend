export const envVars = {
  local: {
    ENV: 'local',
    BASE_URL: 'http://localhost:5000/',
  },
  prod: {
    ENV: 'production',
    BASE_URL: 'https://color-guessing-game-thao.herokuapp.com/',
  },
};

export const getEnvVars = () => {
  const host = window.location.host;
  switch (true) {
    case host.includes('localhost'):
      return envVars.local;
    case host.includes('rgb'):
      return envVars.prod;
    default:
      console.error('Failed to load configuration', {
        code: 'env_not_detected',
        desc: 'host url does not match known environments',
      });
      return {};
  }
};
