export const temperatureColor = (temp) => {
  if (temp <= -30) {
    return { backgroundColor: '#0000ff' };
  } else if (temp > -30 && temp <= -25) {
    return { backgroundColor: '#3636FF' };
  } else if (temp > -25 && temp <= -20) {
    return { backgroundColor: '#6969FF' };
  } else if (temp > -20 && temp <= -15) {
    return { backgroundColor: '#8181FF' };
  } else if (temp > -15 && temp <= -10) {
    return { backgroundColor: '#9999FF' };
  } else if (temp > -10 && temp <= -5) {
    return { backgroundColor: '#CDCDFF' };
  } else if (temp > -5 && temp <= 0) {
    return { backgroundColor: '#F3F3FF' };
  } else if (temp > 0 && temp <= 5) {
    return { backgroundColor: '#FFFEFD' };
  } else if (temp > 5 && temp <= 10) {
    return { backgroundColor: '#FFCBB7' };
  } else if (temp > 10 && temp <= 15) {
    return { backgroundColor: '#FFB396' };
  } else if (temp > 15 && temp <= 20) {
    return { backgroundColor: '#FF7039' };
  } else if (temp > 20 && temp <= 25) {
    return { backgroundColor: '#FF4200', color: '#fff' };
  } else if (temp > 25 && temp <= 30) {
    return { backgroundColor: '#DD1800', color: '#fff' };
  } else if (temp > 30 && temp <= 35) {
    return { backgroundColor: '#A30000', color: '#fff' };
  } else if (temp > 35) {
    return { backgroundColor: '#720000', color: '#fff' };
  }
};
