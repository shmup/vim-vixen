import actions from '../actions';
import * as settingsStorage from 'shared/settings/storage';

const load = async() => {
  let value = await settingsStorage.loadValue();
  return {
    type: actions.SETTING_SET_SETTINGS,
    value,
  };
};

const setProperty = (name, value) => {
  return {
    type: actions.SETTING_SET_PROPERTY,
    name,
    value,
  };
};

export { load, setProperty };
