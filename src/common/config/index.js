import configDevelopment from './config.dev';
import configProduction from './config.prod';
import commonSetting from './setting';

const isDev = true;

const getConfig = () => {
  return isDev ? configDevelopment : configProduction;
};

// 将setting跟config合并
const config = Object.assign({}, getConfig(), commonSetting);
// config.version = APPCONFIG.version;

export default config;
