import { ALERT_ADD, ALERT_REMOVE } from '../constants/alertConstants';

export { addAlertWithTimeout };

let nextAlertId = 0;

const addAlertWithTimeout = (status, message) => async (dispatch) => {
  let timeout = 6000;
  if (status === 'success') timeout = 4000;
  let id = nextAlertId++;
  dispatch({ type: ALERT_ADD, payload: { status, message, id } });
  setTimeout(() => {
    dispatch({ type: ALERT_REMOVE, payload: { id } });
    id = nextAlertId++;
  }, timeout);
};
