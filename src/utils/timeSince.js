import moment from "moment";

export default function getTimeSince(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  const duration = moment.duration(difference);

  if (duration.asMinutes() < 1) {
    return "hace unos segundos";
  } else if (duration.asHours() < 1) {
    return `hace ${Math.floor(duration.asMinutes())} minutos`;
  } else if (duration.asDays() < 1) {
    return `hace ${Math.floor(duration.asHours())} horas`;
  } else {
    return `hace ${Math.floor(duration.asDays())} días`;
  }
}
