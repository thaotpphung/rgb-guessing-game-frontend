import { ALERT_ADD, ALERT_REMOVE } from '../constants/alertConstants';

const ALERT_INITIAL_STATE = {
  alerts: {},
};

const alertListReducer = (state = ALERT_INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_ADD: {
      return {
        alerts: { ...state.alerts, [action.payload.id]: action.payload },
      };
    }
    case ALERT_REMOVE: {
      const updatedAlerts = { ...state.alerts };
      delete updatedAlerts[action.payload.id];
      return {
        alerts: { ...state.updatedAlerts },
      };
    }
    default:
      return state;
  }
};

export default alertListReducer;
