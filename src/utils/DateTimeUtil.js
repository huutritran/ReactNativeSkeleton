import moment from 'moment';
import Constanst from '../constants';

const formatDate = (
  dateString,
  format = Constanst.DATE_FORMAT.DATE_FORMAT_2,
) => {
  return moment(dateString).format(format);
};

const toRelativeTime = (dateString) => {
  return moment(dateString).fromNow();
};

export default {
  formatDate,
  toRelativeTime,
};
